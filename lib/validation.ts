import { z } from 'zod';
import type { PlanFrequency, WeekDay } from '@/types';

/**
 * Schéma de validation pour le formulaire d'abonnement
 */
export const subscriptionFormSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(100, 'Le nom est trop long'),
  email: z.string().email('Email invalide'),
  theme: z.string().min(1, 'Le thème est requis').max(200, 'Le thème est trop long'),
  language: z.enum(['Français', 'English'], {
    errorMap: () => ({ message: 'Langue invalide' })
  }),
  plan_frequency: z.enum(['1x', '2x', '5x', '7x'], {
    errorMap: () => ({ message: 'Fréquence invalide' })
  }),
  billing_period: z.enum(['weekly', 'monthly', 'yearly'], {
    errorMap: () => ({ message: 'Période de facturation invalide' })
  }),
  send_days: z.array(
    z.enum(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'])
  ).min(1, 'Au moins un jour doit être sélectionné'),
  send_hour: z.string().regex(/^\d{2}:00$/, 'L\'heure doit être pleine (ex: 08:00)'),
  legal_consent: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter les conditions' })
  }),
});

/**
 * Valide que le nombre de jours sélectionnés correspond à la fréquence du plan
 */
export function validateSendDaysCount(
  send_days: WeekDay[],
  plan_frequency: PlanFrequency
): boolean {
  const frequencyMap: Record<PlanFrequency, number> = {
    '1x': 1,
    '2x': 2,
    '5x': 5,
    '7x': 7,
  };

  return send_days.length === frequencyMap[plan_frequency];
}

/**
 * Mapping des jours FR → EN pour Google Sheets
 */
const daysFrToEn: Record<string, string> = {
  'Lundi': 'Monday',
  'Mardi': 'Tuesday',
  'Mercredi': 'Wednesday',
  'Jeudi': 'Thursday',
  'Vendredi': 'Friday',
  'Samedi': 'Saturday',
  'Dimanche': 'Sunday',
};

/**
 * Convertit un tableau de jours en chaîne EN pour Google Sheets
 */
export function formatSendDaysForSheet(days: WeekDay[]): string {
  return days.map(day => daysFrToEn[day] || day).join(',');
}

/**
 * Mapping des langues UI → EN pour Google Sheets
 */
const languageToEn: Record<string, string> = {
  'Français': 'French',
  'English': 'English',
};

/**
 * Convertit la langue en anglais pour Google Sheets
 */
export function formatLanguageForSheet(language: string): string {
  return languageToEn[language] || language;
}

/**
 * Validation complète des données du formulaire
 */
export function validateSubscriptionData(data: unknown) {
  // Validation du schéma de base
  const parsed = subscriptionFormSchema.parse(data);

  // Validation supplémentaire : cohérence send_days / plan_frequency
  if (!validateSendDaysCount(parsed.send_days, parsed.plan_frequency)) {
    const frequencyMap: Record<PlanFrequency, number> = {
      '1x': 1,
      '2x': 2,
      '5x': 5,
      '7x': 7,
    };
    const expected = frequencyMap[parsed.plan_frequency];
    throw new Error(
      `Veuillez sélectionner exactement ${expected} jour(s), en cohérence avec votre plan.`
    );
  }

  return parsed;
}
