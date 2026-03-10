'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            {t('badge')}
          </p>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            {t('title')}
          </h2>
        </div>

        {/* Single logo centered */}
        <div className="flex items-center justify-center">
          <img
            src="/logos/serena.svg"
            alt="Serena"
            className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}
