import Stripe from 'stripe';
import type { PlanKey, PlanPriceMap } from '@/types';

/**
 * Client Stripe initialisé avec la clé secrète
 */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
  typescript: true,
});

/**
 * Mapping des combinaisons (billing_period, plan_frequency) vers les price IDs Stripe
 *
 * Chaque combinaison correspond à un produit/price créé dans Stripe.
 * Les valeurs sont récupérées depuis les variables d'environnement.
 */
export const PLAN_PRICE_MAP: PlanPriceMap = {
  // Only 1x/week frequency is now supported
  'weekly_1x': process.env.STRIPE_PRICE_WEEKLY_1X!,
  'monthly_1x': process.env.STRIPE_PRICE_MONTHLY_1X!,
  'yearly_1x': process.env.STRIPE_PRICE_YEARLY_1X!,
};

/**
 * Récupère le price ID Stripe pour une combinaison donnée
 */
export function getPriceId(
  billing_period: string,
  plan_frequency: string
): string {
  const planKey = `${billing_period}_${plan_frequency}` as PlanKey;
  const priceId = PLAN_PRICE_MAP[planKey];

  if (!priceId) {
    throw new Error(`Aucun price ID trouvé pour le plan: ${planKey}`);
  }

  return priceId;
}

/**
 * Vérifie si un email a déjà eu un essai gratuit (trial) sur Stripe
 * Recherche un Customer existant avec cet email qui a eu un abonnement avec trial
 */
export async function hasHadTrial(email: string): Promise<boolean> {
  try {
    // Recherche les customers avec cet email
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      // Pas de customer existant = jamais eu de trial
      return false;
    }

    const customer = customers.data[0];

    // Recherche les abonnements de ce customer (actifs ou annulés)
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: 'all', // Inclut active, canceled, past_due, etc.
      limit: 100,
    });

    // Vérifie si au moins un abonnement a eu un trial
    for (const subscription of subscriptions.data) {
      if (subscription.trial_start !== null) {
        // Cet abonnement a eu un trial
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Erreur lors de la vérification du trial:', error);
    // En cas d'erreur, on autorise par défaut (fail-open)
    return false;
  }
}

/**
 * Crée une session Stripe Checkout pour un abonnement
 * Le trial est accordé uniquement si l'utilisateur n'en a jamais eu
 */
export async function createCheckoutSession(params: {
  priceId: string;
  customerEmail: string;
  metadata: Record<string, string>;
  successUrl: string;
  cancelUrl: string;
}): Promise<Stripe.Checkout.Session> {
  // Vérifie si l'utilisateur a déjà eu un trial
  const alreadyHadTrial = await hasHadTrial(params.customerEmail);

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: params.priceId,
        quantity: 1,
      },
    ],
    customer_email: params.customerEmail,
    metadata: params.metadata,
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    allow_promotion_codes: true,
    // Trial uniquement pour les nouveaux utilisateurs
    subscription_data: alreadyHadTrial ? {} : {
      trial_period_days: 15,
    },
  });

  return session;
}

/**
 * Vérifie la signature du webhook Stripe
 */
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string
): Stripe.Event {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  return stripe.webhooks.constructEvent(
    payload,
    signature,
    webhookSecret
  );
}
