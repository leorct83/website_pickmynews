'use client';

import { useTranslations } from 'next-intl';

export default function Benefits() {
  const t = useTranslations('benefits');

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('benefit1Title'),
      description: t('benefit1Desc'),
      color: 'from-slate-600 to-slate-800',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('benefit2Title'),
      description: t('benefit2Desc'),
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t('benefit3Title'),
      description: t('benefit3Desc'),
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      ),
      title: t('benefit4Title'),
      description: t('benefit4Desc'),
      color: 'from-slate-600 to-slate-800',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: t('benefit5Title'),
      description: t('benefit5Desc'),
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('benefit6Title'),
      description: t('benefit6Desc'),
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="avantages" className="py-12 md:py-24 px-4 bg-stone-50 scroll-mt-nav relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            {t('badge')}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-slate-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
