/**
 * Types pour PickmyNews
 */

export type PlanFrequency = '1x' | '2x' | '5x' | '7x';
export type BillingPeriod = 'weekly' | 'monthly' | 'yearly';
export type SubscriptionStatus = 'pending' | 'active' | 'canceled' | 'past_due';
export type NewsletterLanguage = 'Français' | 'English';

// Jours de la semaine en français (comme stockés dans Google Sheets)
export type WeekDay = 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi' | 'Dimanche';

/**
 * Données du formulaire d'abonnement
 */
export interface SubscriptionFormData {
  name: string;
  email: string;
  theme: string;
  plan_frequency: PlanFrequency;
  billing_period: BillingPeriod;
  send_days: WeekDay[];
  send_hour: string; // Format "HH:00"
  legal_consent: boolean;
}

/**
 * Structure d'une ligne dans Google Sheets
 * Ordre des colonnes à respecter strictement
 */
export interface SheetSubscriberRow {
  created_at: string;           // ISO string
  name: string;
  email: string;
  theme: string;
  language: NewsletterLanguage; // "Français" | "English"
  plan_frequency: PlanFrequency;
  billing_period: BillingPeriod;
  send_days: string;            // "Lundi,Mercredi,Vendredi"
  send_hour: string;            // "08:00"
  stripe_customer_id: string;
  stripe_subscription_id: string;
  status: SubscriptionStatus;
  last_event_at: string;        // ISO string
}

/**
 * Clé pour identifier un plan (combinaison billing_period + plan_frequency)
 */
export type PlanKey = `${BillingPeriod}_${PlanFrequency}`;

/**
 * Mapping des plans vers les price IDs Stripe
 */
export type PlanPriceMap = Record<PlanKey, string>;
