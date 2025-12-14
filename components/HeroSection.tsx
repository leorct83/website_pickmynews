'use client';

import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center grain-overlay overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-amber-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-slate-400 rounded-full animate-pulse delay-300" />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h1 className="fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6 text-balance">
            <span className="text-amber-600">{t('headline')}</span> {t('headlineSuffix')}
          </h1>

          {/* Subheadline */}
          <h2 className="fade-in-up delay-200 text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('subheadline')}
          </h2>


          {/* CTA */}
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#inscription" className="btn-primary group">
              <span>{t('ctaPrimary')}</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#comment-ca-marche" className="btn-ghost">
              <span>{t('ctaSecondary')}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust signals */}
          <div className="fade-in-up delay-400 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('trustSatisfied')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('trustCancel')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium text-amber-700">{t('trustFactCheck')}</span>
            </div>
          </div>
        </div>

        {/* Visual preview */}
        <div className="fade-in-up delay-500 mt-16 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 to-transparent blur-3xl transform translate-y-10" />
          </div>
        </div>

      </div> {/* Fin section-container */}
    </section>
  );
}
