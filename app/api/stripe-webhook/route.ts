import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { constructWebhookEvent } from '@/lib/stripe';
import { updateSubscriberByEmail, updateSubscriberByStripeCustomerId, appendOrUpdateSubscriberRow } from '@/lib/sheets';
import type { SubscriptionStatus } from '@/types';

/**
 * POST /api/stripe-webhook
 *
 * Endpoint pour recevoir les webhooks Stripe.
 *
 * Events gérés :
 * - checkout.session.completed : paiement initial réussi
 * - customer.subscription.updated : abonnement mis à jour
 * - customer.subscription.deleted : abonnement annulé
 */
export async function POST(request: NextRequest) {
  try {
    // Récupération du raw body et de la signature
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Signature manquante' },
        { status: 400 }
      );
    }

    // Vérification de la signature et construction de l'event
    let event: Stripe.Event;
    try {
      event = constructWebhookEvent(body, signature);
    } catch (err) {
      console.error('❌ Erreur de vérification de signature:', err);
      return NextResponse.json(
        { error: 'Signature invalide' },
        { status: 400 }
      );
    }

    console.log(`\n🔔 Webhook reçu: ${event.type}`);

    // Traitement selon le type d'event
    switch (event.type) {
      case 'checkout.session.completed': {
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      }

      case 'customer.subscription.updated': {
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      }

      default:
        console.log(`⚠️  Event non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Erreur lors du traitement du webhook:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

/**
 * Gère l'event checkout.session.completed
 * CRÉE OU MET À JOUR la ligne Google Sheets avec toutes les données
 */
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log('📝 Traitement de checkout.session.completed:', session.id);

  // Récupération de l'email
  const email = session.customer_email || session.customer_details?.email;

  if (!email) {
    console.error('❌ Aucun email trouvé dans la session:', session.id);
    return;
  }

  // Récupération des IDs Stripe
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;

  // 🎯 RÉCUPÉRATION DES METADATA (toutes les infos du formulaire)
  const metadata = session.metadata || {};

  console.log('📦 Metadata récupérées:', metadata);

  try {
    // Création ou mise à jour dans Google Sheets
    await appendOrUpdateSubscriberRow({
      email,
      name: metadata.name || '',
      theme: metadata.theme || '',
      language: (metadata.language || 'Français') as 'Français' | 'English',
      plan_frequency: (metadata.plan_frequency || '1x') as any,
      billing_period: (metadata.billing_period || 'monthly') as any,
      send_days: metadata.send_days || '',
      send_hour: metadata.send_hour || '',
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      status: 'active',
    });

    console.log(`✅ Abonnement créé/activé pour ${email}`);
    console.log(`   - Customer ID: ${customerId}`);
    console.log(`   - Subscription ID: ${subscriptionId}`);
    console.log(`   - Plan: ${metadata.plan_frequency} - ${metadata.billing_period}`);
    console.log(`   - Language: ${metadata.language}`);
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du Google Sheet:', error);
    throw error;
  }
}

/**
 * Gère l'event customer.subscription.updated
 * Met à jour le status de l'abonnement dans Google Sheets
 */
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('🔄 Traitement de customer.subscription.updated:', subscription.id);

  const customerId = subscription.customer as string;

  // Mapping des status Stripe vers nos status
  const statusMap: Record<string, SubscriptionStatus> = {
    active: 'active',
    past_due: 'past_due',
    canceled: 'canceled',
    unpaid: 'past_due',
    incomplete: 'pending',
    incomplete_expired: 'canceled',
    trialing: 'active',
    paused: 'canceled',
  };

  const status = statusMap[subscription.status] || 'active';

  try {
    await updateSubscriberByStripeCustomerId(customerId, {
      status,
    });

    console.log(`✅ Abonnement mis à jour: ${subscription.id} -> status: ${status}`);
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du Google Sheet:', error);
    throw error;
  }
}

/**
 * Gère l'event customer.subscription.deleted
 * Met à jour le status à "canceled" dans Google Sheets
 */
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('🗑️  Traitement de customer.subscription.deleted:', subscription.id);

  const customerId = subscription.customer as string;

  try {
    await updateSubscriberByStripeCustomerId(customerId, {
      status: 'canceled',
    });

    console.log(`✅ Abonnement annulé: ${subscription.id}`);
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour du Google Sheet:', error);
    throw error;
  }
}