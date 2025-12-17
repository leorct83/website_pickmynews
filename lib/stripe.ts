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
 * Crée une session Stripe Checkout pour un abonnement
 */
export async function createCheckoutSession(params: {
  priceId: string;
  customerEmail: string;
  metadata: Record<string, string>;
  successUrl: string;
  cancelUrl: string;
}): Promise<Stripe.Checkout.Session> {
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
    // Permet de récupérer le customer_email dans les webhooks
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
