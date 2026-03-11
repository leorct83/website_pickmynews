import { google } from 'googleapis';
import type { SheetSubscriberRow, SubscriptionStatus } from '@/types';

/**
 * Formate une date au format M/D/YYYY (ex: 2/21/2026)
 */
function formatDateForSheet(date: Date = new Date()): string {
  const month = date.getMonth() + 1; // getMonth() retourne 0-11
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

/**
 * Initialise et renvoie un client Google Sheets authentifié via service account
 */
export function getSheetsClient() {
  // Récupération des credentials depuis les variables d'environnement
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
    /\\n/g,
    '\n'
  );

  // Création du client OAuth2 avec le service account
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: email,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  // Retourne le client Sheets
  return google.sheets({ version: 'v4', auth });
}

/**
 * Colonnes du Google Sheet dans l'ordre exact (A-N)
 */
const SHEET_COLUMNS = [
  'created_at',
  'name',
  'email',
  'theme',
  'language',
  'plan_frequency',
  'billing_period',
  'send_days',
  'send_hour',
  'stripe_customer_id',
  'stripe_subscription_id',
  'status',
  'last_event_at',
  'end_of_free_trial',
] as const;

/**
 * Convertit un objet SheetSubscriberRow en tableau de valeurs dans l'ordre des colonnes
 */
function rowToValues(row: SheetSubscriberRow): string[] {
  return [
    row.created_at,
    row.name,
    row.email,
    row.theme,
    row.language,
    row.plan_frequency,
    row.billing_period,
    row.send_days,
    row.send_hour,
    row.stripe_customer_id,
    row.stripe_subscription_id,
    row.status,
    row.last_event_at,
    row.end_of_free_trial,
  ];
}

/**
 * Convertit un tableau de valeurs en objet SheetSubscriberRow
 */
function valuesToRow(values: string[]): SheetSubscriberRow {
  return {
    created_at: values[0] || '',
    name: values[1] || '',
    email: values[2] || '',
    theme: values[3] || '',
    language: (values[4] || 'Français') as SheetSubscriberRow['language'],
    plan_frequency: (values[5] || '1x') as SheetSubscriberRow['plan_frequency'],
    billing_period: (values[6] || 'monthly') as SheetSubscriberRow['billing_period'],
    send_days: values[7] || '',
    send_hour: values[8] || '',
    stripe_customer_id: values[9] || '',
    stripe_subscription_id: values[10] || '',
    status: (values[11] || 'pending') as SubscriptionStatus,
    last_event_at: values[12] || '',
    end_of_free_trial: values[13] || '',
  };
}

/**
 * Récupère toutes les lignes du Google Sheet (hors header)
 */
async function getAllRows(): Promise<SheetSubscriberRow[]> {
  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A2:N', // A partir de la ligne 2 (après le header), 14 colonnes A-N
  });

  const rows = response.data.values || [];
  return rows.map(valuesToRow);
}
/**
 *Vérifie si un email existe déjà dans le Google Sheet
 */
export async function emailExists(email: string): Promise<boolean> {
  try {
    const rows = await getAllRows();
    const emailLower = email.toLowerCase();
    return rows.some(row => row.email.toLowerCase() === emailLower);
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'email:', error);
    return false;
  }
}
/**
 * Trouve l'index de la dernière ligne correspondant à un email donné
 * Retourne -1 si aucune ligne n'est trouvée
 *
 * Note : +2 car les lignes Google Sheets commencent à 1, et on a un header en ligne 1
 */
async function findRowIndexByEmail(email: string): Promise<number> {
  const rows = await getAllRows();

  // Recherche de la DERNIERE occurrence de cet email (stratégie : 1 email = 1 abonnement)
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].email.toLowerCase() === email.toLowerCase()) {
      return i + 2; // +2 car : index 0 = ligne 2 dans Sheets
    }
  }

  return -1;
}

/**
 * Ajoute une nouvelle ligne dans le Google Sheet ou met à jour la ligne existante
 * si l'email existe déjà (stratégie : 1 email = 1 abonnement actif max)
 */
export async function appendOrUpdateSubscriberRow(
  data: Partial<SheetSubscriberRow> & { email: string }
): Promise<void> {
  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;

  // Recherche d'une ligne existante avec cet email
  const existingRowIndex = await findRowIndexByEmail(data.email);

  const now = formatDateForSheet();

  if (existingRowIndex === -1) {
    // Pas de ligne existante : on ajoute une nouvelle ligne
    const newRow: SheetSubscriberRow = {
      created_at: now,
      name: data.name || '',
      email: data.email,
      theme: data.theme || '',
      language: data.language || 'Français',
      plan_frequency: data.plan_frequency || '1x',
      billing_period: data.billing_period || 'monthly',
      send_days: data.send_days || '',
      send_hour: data.send_hour || '',
      stripe_customer_id: data.stripe_customer_id || '',
      stripe_subscription_id: data.stripe_subscription_id || '',
      status: data.status || 'pending',
      last_event_at: now,
      end_of_free_trial: data.end_of_free_trial || '',
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:N',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowToValues(newRow)],
      },
    });
  } else {
    // Ligne existante : on la met à jour
    // On récupère d'abord les données existantes pour ne pas écraser ce qu'on ne veut pas changer
    const existingRows = await getAllRows();
    const existingRow = existingRows[existingRowIndex - 2]; // -2 pour revenir à l'index du tableau

    const updatedRow: SheetSubscriberRow = {
      ...existingRow,
      ...data,
      last_event_at: now,
      // On ne change pas created_at si déjà défini
      created_at: existingRow.created_at || now,
    };

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!A${existingRowIndex}:N${existingRowIndex}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowToValues(updatedRow)],
      },
    });
  }
}

/**
 * Met à jour une ligne existante par email
 * Si plusieurs lignes existent avec cet email, met à jour la DERNIERE (stratégie explicite)
 */
export async function updateSubscriberByEmail(
  email: string,
  updates: Partial<SheetSubscriberRow>
): Promise<void> {
  const rowIndex = await findRowIndexByEmail(email);

  if (rowIndex === -1) {
    throw new Error(`Aucun abonné trouvé avec l'email: ${email}`);
  }

  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;

  // Récupère la ligne existante
  const existingRows = await getAllRows();
  const existingRow = existingRows[rowIndex - 2];

  // Fusionne avec les mises à jour
  const updatedRow: SheetSubscriberRow = {
    ...existingRow,
    ...updates,
    last_event_at: formatDateForSheet(),
  };

  // Met à jour la ligne
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `Sheet1!A${rowIndex}:N${rowIndex}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [rowToValues(updatedRow)],
    },
  });
}

/**
 * Met à jour une ligne par stripe_customer_id
 * Utile pour les webhooks Stripe où on a le customer_id
 */
export async function updateSubscriberByStripeCustomerId(
  customerId: string,
  updates: Partial<SheetSubscriberRow>
): Promise<void> {
  const rows = await getAllRows();

  // Recherche de la DERNIERE occurrence de ce customer_id
  let rowIndex = -1;
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].stripe_customer_id === customerId) {
      rowIndex = i + 2; // +2 pour conversion en ligne Sheets
      break;
    }
  }

  if (rowIndex === -1) {
    throw new Error(`Aucun abonné trouvé avec le customer ID: ${customerId}`);
  }

  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;

  const existingRow = rows[rowIndex - 2];

  const updatedRow: SheetSubscriberRow = {
    ...existingRow,
    ...updates,
    last_event_at: formatDateForSheet(),
  };

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `Sheet1!A${rowIndex}:N${rowIndex}`,
    valueInputOption: 'RAW',
    requestBody: {
      values: [rowToValues(updatedRow)],
    },
  });
}

/**
 * Crée les en-têtes du Google Sheet si le sheet est vide
 * À exécuter manuellement une seule fois ou au premier démarrage
 */
export async function initializeSheetHeaders(): Promise<void> {
  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;

  // Vérifie si le header existe déjà
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1:N1',
  });

  if (response.data.values && response.data.values.length > 0) {
    console.log('Les en-têtes existent déjà dans le Google Sheet.');
    return;
  }

  // Crée les en-têtes
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Sheet1!A1:N1',
    valueInputOption: 'RAW',
    requestBody: {
      values: [SHEET_COLUMNS as unknown as string[]],
    },
  });

  console.log('En-têtes créés avec succès dans le Google Sheet.');
}
