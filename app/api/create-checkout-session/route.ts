import { NextRequest, NextResponse } from 'next/server';
import { validateSubscriptionData, formatSendDaysForSheet } from '@/lib/validation';
import { getPriceId, createCheckoutSession } from '@/lib/stripe';
import { emailExists } from '@/lib/sheets';
import { ZodError } from 'zod';

/**
 * POST /api/create-checkout-session
 * 
 * OPTIMISÉ : Ne crée plus la ligne Google Sheets ici (trop lent)
 * → La ligne sera créée par le webhook après paiement réussi
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des données
    const validatedData = validateSubscriptionData(body);

    // Vérification si l'email existe déjà
    const emailAlreadyExists = await emailExists(validatedData.email);
    
    if (emailAlreadyExists) {
      return NextResponse.json(
        { error: 'Cet email est déjà utilisé. Veuillez utiliser une autre adresse mail.' },
        { status: 409 }
      );
    }

    // Récupération du price ID Stripe
    const priceId = getPriceId(
      validatedData.billing_period,
      validatedData.plan_frequency
    );

    // URLs de redirection
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/cancel`;

    // Métadonnées pour Stripe (seront récupérées par le webhook)
    const metadata = {
      name: validatedData.name,
      email: validatedData.email,
      theme: validatedData.theme,
      plan_frequency: validatedData.plan_frequency,
      billing_period: validatedData.billing_period,
      send_days: formatSendDaysForSheet(validatedData.send_days),
      send_hour: validatedData.send_hour,
    };

    // Création de la session Stripe Checkout
    const session = await createCheckoutSession({
      priceId,
      customerEmail: validatedData.email,
      metadata,
      successUrl,
      cancelUrl,
    });

    // ✅ OPTIMISATION : On ne crée PLUS la ligne Google Sheets ici !
    // Elle sera créée automatiquement par le webhook après paiement réussi
    // Cela rend la redirection vers Stripe BEAUCOUP plus rapide ⚡

    // Redirection immédiate vers Stripe Checkout
    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error('Erreur lors de la création de la session Checkout:', error);

    if (error instanceof ZodError) {
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
      { error: 'Une erreur est survenue lors de la création de la session.' },
      { status: 500 }
    );
  }
}