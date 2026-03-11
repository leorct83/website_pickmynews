import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { formatSendDaysForSheet, formatLanguageForSheet } from '@/lib/validation';
import { emailExists, appendOrUpdateSubscriberRow } from '@/lib/sheets';

/**
 * Calcule la date de fin d'essai gratuit (aujourd'hui + 28 jours)
 * Retourne au format M/D/YYYY
 */
function calculateEndOfFreeTrial(): string {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 28);
  const month = endDate.getMonth() + 1;
  const day = endDate.getDate();
  const year = endDate.getFullYear();
  return `${month}/${day}/${year}`;
}

/**
 * Schéma de validation simplifié pour l'essai gratuit (sans billing)
 */
const freeTrialSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(100, 'Le nom est trop long'),
  email: z.string().email('Email invalide'),
  theme: z.string().min(1, 'Le thème est requis').max(200, 'Le thème est trop long'),
  language: z.enum(['Français', 'English'], {
    errorMap: () => ({ message: 'Langue invalide' })
  }),
  send_days: z.array(
    z.enum(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'])
  ).min(1, 'Au moins un jour doit être sélectionné').max(1, 'Maximum 1 jour pour l\'essai gratuit'),
  send_hour: z.string().regex(/^\d{2}:00$/, 'L\'heure doit être pleine (ex: 08:00)'),
  legal_consent: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter les conditions' })
  }),
});

/**
 * POST /api/create-free-trial
 *
 * Crée un essai gratuit sans paiement Stripe
 * L'utilisateur reçoit ses premières newsletters gratuitement
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des données
    const validatedData = freeTrialSchema.parse(body);

    // Vérification si l'email existe déjà
    const emailAlreadyExists = await emailExists(validatedData.email);

    if (emailAlreadyExists) {
      return NextResponse.json(
        { error: 'Cet email est déjà utilisé. Veuillez utiliser une autre adresse mail.' },
        { status: 409 }
      );
    }

    // Création de la ligne dans Google Sheets avec status "trial"
    await appendOrUpdateSubscriberRow({
      name: validatedData.name,
      email: validatedData.email,
      theme: validatedData.theme,
      language: formatLanguageForSheet(validatedData.language) as 'Français' | 'English',
      plan_frequency: '1x', // Essai gratuit = 1x/semaine
      billing_period: 'monthly', // Par défaut pour quand ils upgraderont
      send_days: formatSendDaysForSheet(validatedData.send_days),
      send_hour: validatedData.send_hour,
      stripe_customer_id: '', // Pas de Stripe pour l'essai gratuit
      stripe_subscription_id: '',
      status: 'trial',
      end_of_free_trial: calculateEndOfFreeTrial(), // Date de fin = aujourd'hui + 28 jours
    });

    // Redirection vers la page de succès de l'essai gratuit
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const successUrl = `${baseUrl}/trial-success`;

    return NextResponse.json({
      success: true,
      url: successUrl,
      message: 'Votre essai gratuit a été créé avec succès!'
    });

  } catch (error) {
    console.error('Erreur lors de la création de l\'essai gratuit:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map(e => e.message).join(', ') },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la création de l\'essai.' },
      { status: 500 }
    );
  }
}
