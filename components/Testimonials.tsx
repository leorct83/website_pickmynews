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

        {/* Client logos */}
        <div className="flex items-center justify-center gap-16 flex-wrap">
          <img
            src="/logos/serena.png"
            alt="Serena"
            className="h-32 md:h-40 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
