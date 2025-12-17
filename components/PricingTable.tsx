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

  const plan = {
    name: t('plan1Name'),
    newslettersPerWeek: 1,
    description: t('plan1Desc'),
    price: { weekly: 1.99, monthly: 4.99, annual: 49.99 },
    features: [
      t('plan1Feature1'),
      t('plan1Feature2'),
      t('plan1Feature3'),
    ],
    cta: t('cta'),
  };

  const billingLabels: Record<BillingCycle, string> = {
    weekly: t('perWeek'),
    monthly: t('perMonth'),
    annual: t('perYear'),
  };

  const getAnnualSavings = () => {
    const monthlyTotal = plan.price.monthly * 12;
    const annualPrice = plan.price.annual;
    const savings = Math.round((1 - annualPrice / monthlyTotal) * 100);
    return savings;
  };

  // Calcul du prix par semaine selon la périodicité de facturation
  const getPricePerWeek = (cycle: BillingCycle): number => {
    switch (cycle) {
      case 'weekly':
        return plan.price.weekly;
      case 'monthly':
        return (plan.price.monthly * 12) / 52;
      case 'annual':
        return plan.price.annual / 52;
    }
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

        {/* Single pricing card - centered */}
        <div className="max-w-md mx-auto">
          <div className="relative rounded-3xl p-8 bg-white shadow-2xl shadow-amber-500/20">
            {/* Plan header */}
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-slate-900">
                {plan.name}
              </h3>
              <p className="text-slate-600">
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-slate-900">
                  {plan.price[billingCycle].toFixed(2).replace('.', ',')}€
                </span>
                <span className="text-slate-500">
                  {billingLabels[billingCycle]}
                </span>
              </div>
              {billingCycle === 'annual' && (
                <p className="text-sm mt-1 text-emerald-600">
                  {t('save', { percent: getAnnualSavings() })}
                </p>
              )}

              {/* Prix par semaine */}
              {billingCycle !== 'weekly' && (
                <p className="text-sm mt-2 text-slate-500">
                  {t('approxPerWeek', { price: formatPrice(getPricePerWeek(billingCycle), locale) })}
                </p>
              )}
            </div>

            {/* CTA */}
            <a
              href="#inscription"
              className="block w-full py-4 rounded-xl font-semibold text-center transition-all mb-6 bg-slate-900 text-white hover:bg-slate-800"
            >
              {plan.cta}
            </a>

            {/* Features */}
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-slate-400">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>{t('guarantee')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
