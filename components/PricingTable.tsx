'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

type BillingCycle = 'weekly' | 'monthly' | 'annual';

// Utilitaire pour formater les prix en euros (ex: 4,99 €)
const formatPrice = (price: number, locale: string): string => {
  if (locale === 'fr') {
    return price.toFixed(2).replace('.', ',') + ' €';
  }
  return '€' + price.toFixed(2);
};

export default function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const t = useTranslations('pricing');
  const locale = useLocale();

  const plans = [
    {
      name: t('plan1Name'),
      newslettersPerWeek: 1,
      description: t('plan1Desc'),
      price: { weekly: 1.99, monthly: 4.99, annual: 49.99 },
      features: [
        t('plan1Feature1'),
        t('plan1Feature2'),
        t('plan1Feature3'),
      ],
      limitations: [],
      cta: t('cta'),
      popular: false,
    },
    {
      name: t('plan2Name'),
      newslettersPerWeek: 2,
      description: t('plan2Desc'),
      price: { weekly: 2.99, monthly: 6.49, annual: 59.99 },
      features: [
        t('plan2Feature1'),
        t('plan2Feature2'),
        t('plan2Feature3'),
        t('plan2Feature4'),
      ],
      limitations: [],
      cta: t('cta'),
      popular: true,
    },
    {
      name: t('plan3Name'),
      newslettersPerWeek: 5,
      description: t('plan3Desc'),
      price: { weekly: 4.99, monthly: 9.99, annual: 99.99 },
      features: [
        t('plan3Feature1'),
        t('plan3Feature2'),
        t('plan3Feature3'),
        t('plan3Feature4'),
        t('plan3Feature5'),
      ],
      limitations: [],
      cta: t('cta'),
      popular: false,
    },
    {
      name: t('plan4Name'),
      newslettersPerWeek: 7,
      description: t('plan4Desc'),
      price: { weekly: 5.99, monthly: 12.99, annual: 129.99 },
      features: [
        t('plan4Feature1'),
        t('plan4Feature2'),
        t('plan4Feature3'),
        t('plan4Feature4'),
        t('plan4Feature5'),
        t('plan4Feature6'),
      ],
      limitations: [],
      cta: t('cta'),
      popular: false,
    },
  ];

  const billingLabels: Record<BillingCycle, string> = {
    weekly: t('perWeek'),
    monthly: t('perMonth'),
    annual: t('perYear'),
  };

  const getAnnualSavings = (plan: typeof plans[0]) => {
    const monthlyTotal = plan.price.monthly * 12;
    const annualPrice = plan.price.annual;
    const savings = Math.round((1 - annualPrice / monthlyTotal) * 100);
    return savings;
  };

  // Calcul du prix par semaine selon la périodicité de facturation
  const getPricePerWeek = (plan: typeof plans[0], cycle: BillingCycle): number => {
    switch (cycle) {
      case 'weekly':
        return plan.price.weekly;
      case 'monthly':
        return (plan.price.monthly * 12) / 52;
      case 'annual':
        return plan.price.annual / 52;
    }
  };

  // Calcul du prix par newsletter
  const getPricePerNewsletter = (plan: typeof plans[0], cycle: BillingCycle): number => {
    const pricePerWeek = getPricePerWeek(plan, cycle);
    return pricePerWeek / plan.newslettersPerWeek;
  };

  return (
    <section id="tarifs" className="py-24 px-4 bg-slate-900 scroll-mt-nav relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-4">
            {t('badge')}
          </p>
          <h2 className="text-4xl md:text-5xl text-white mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 bg-slate-800 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('weekly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'weekly'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('weekly')}
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('annual')}
              <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-6 transition-all duration-500 ${
                plan.popular
                  ? 'bg-white scale-105 shadow-2xl shadow-amber-500/20'
                  : 'bg-slate-800 hover:bg-slate-800/80'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    {t('mostPopular')}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.popular ? 'text-slate-900' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className={plan.popular ? 'text-slate-600' : 'text-slate-400'}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-slate-900' : 'text-white'
                  }`}>
                    {plan.price[billingCycle].toFixed(2).replace('.', ',')}€
                  </span>
                  <span className={plan.popular ? 'text-slate-500' : 'text-slate-400'}>
                    {billingLabels[billingCycle]}
                  </span>
                </div>
                {billingCycle === 'annual' && (
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-emerald-600' : 'text-emerald-400'}`}>
                    {t('save', { percent: getAnnualSavings(plan) })}
                  </p>
                )}

                {/* Prix par semaine et par newsletter */}
                <p className={`text-xs mt-2 ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                  {billingCycle !== 'weekly' && (
                    <>{t('approxPerWeek', { price: formatPrice(getPricePerWeek(plan, billingCycle), locale) })}</>
                  )}
                  {' — '}
                  <span className={plan.popular ? 'text-amber-600' : 'text-amber-400'}>
                    {t('perNewsletter', { price: formatPrice(getPricePerNewsletter(plan, billingCycle), locale) })}
                  </span>
                </p>
              </div>

              {/* CTA */}
              <a
                href="#inscription"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all mb-6 ${
                  plan.popular
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-emerald-500' : 'text-emerald-400'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-slate-700' : 'text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="text-center mt-12 space-y-3">
          <div className="inline-flex items-center gap-3 text-slate-400">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{t('guarantee')}</span>
          </div>
          <div className="block">
            <div className="inline-flex items-center gap-3 text-amber-600 font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('guaranteeFactCheck')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
