import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Email invalide'),
});

/**
 * POST /api/create-portal-session
 *
 * Crée une session Stripe Customer Portal pour gérer l'abonnement
 * L'utilisateur doit fournir son email pour retrouver son compte Stripe
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation de l'email
    const { email } = emailSchema.parse(body);

    // Recherche du customer Stripe par email
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      return NextResponse.json(
        { error: 'Aucun abonnement trouvé pour cet email.' },
        { status: 404 }
      );
    }

    const customer = customers.data[0];

    // Vérification que le customer a bien un abonnement actif ou en trial
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: 'all',
      limit: 1,
    });

    const hasActiveSubscription = subscriptions.data.some(
      sub => ['active', 'trialing', 'past_due'].includes(sub.status)
    );

    if (!hasActiveSubscription) {
      return NextResponse.json(
        { error: 'Aucun abonnement actif trouvé pour cet email.' },
        { status: 404 }
      );
    }

    // URL de retour après le portail
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const returnUrl = `${baseUrl}/manage`;

    // Création de la session Customer Portal
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: returnUrl,
    });

    return NextResponse.json({ url: portalSession.url });

  } catch (error) {
    console.error('Erreur lors de la création de la session Portal:', error);

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
      { error: 'Une erreur est survenue.' },
      { status: 500 }
    );
  }
}
