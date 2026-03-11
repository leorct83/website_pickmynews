'use client';

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: '01',
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      number: '02',
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      number: '03',
      title: t('step3Title'),
      description: t('step3Desc'),
    },
  ];

  return (
    <section id="comment-ca-marche" className="py-24 px-4 bg-white scroll-mt-nav">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            {t('badge')}
          </p>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="text-4xl font-bold text-amber-500/30 leading-none mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div>
              <button
                onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/leopolddelarochere/pickmynews-demo'})}
                className="btn-primary btn-lg"
              >
                <span>{t('cta')}</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Real newsletter example */}
          <div className="bg-[#F1F5F9] rounded-3xl p-5 shadow-lg border border-slate-200 max-h-[600px] overflow-hidden relative">
            <div className="bg-white rounded-xl overflow-hidden">
              <iframe
                src="/newsletter-example.html"
                title="Newsletter example"
                className="w-full h-[550px] border-0 overflow-y-auto"
              />
            </div>

            {/* Fade overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F1F5F9] to-transparent rounded-b-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
