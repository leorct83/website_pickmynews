'use client';

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
  const t = useTranslations('pricing');
  const locale = useLocale();

  const plans: { cycle: BillingCycle; price: number; label: string; perWeek?: number; popular?: boolean; savings?: number }[] = [
    {
      cycle: 'weekly',
      price: 1.99,
      label: t('perWeek'),
    },
    {
      cycle: 'monthly',
      price: 4.99,
      label: t('perMonth'),
      perWeek: (4.99 * 12) / 52,
      popular: true,
    },
    {
      cycle: 'annual',
      price: 49.99,
      label: t('perYear'),
      perWeek: 49.99 / 52,
      savings: 17,
    },
  ];

  const features = [
    t('plan1Feature1'),
    t('plan1Feature2'),
    t('plan1Feature3'),
  ];

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
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* 3 pricing cards side by side */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.cycle}
              className={`relative rounded-3xl p-6 transition-all duration-300 ${
                plan.popular
                  ? 'bg-white scale-105 shadow-2xl shadow-amber-500/20'
                  : 'bg-slate-800 hover:bg-slate-800/80'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {t('mostPopular')}
                  </span>
                </div>
              )}

              {/* Savings badge */}
              {plan.savings && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    -{plan.savings}%
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="text-center mb-4 pt-2">
                <h3 className={`text-lg font-semibold ${plan.popular ? 'text-slate-900' : 'text-white'}`}>
                  {t(plan.cycle)}
                </h3>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-slate-900' : 'text-white'}`}>
                    {plan.price.toFixed(2).replace('.', ',')}€
                  </span>
                  <span className={plan.popular ? 'text-slate-500' : 'text-slate-400'}>
                    {plan.label}
                  </span>
                </div>
                {plan.perWeek && (
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t('approxPerWeek', { price: formatPrice(plan.perWeek, locale) })}
                  </p>
                )}
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
                {t('cta')}
              </a>

              {/* Features */}
              <ul className="space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-emerald-500' : 'text-emerald-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
