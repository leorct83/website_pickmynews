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
    <section id="comment-ca-marche" className="py-12 md:py-24 px-4 bg-white scroll-mt-nav">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            {t('badge')}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
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
                onClick={() => window.dispatchEvent(new Event('open-calendly'))}
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
          <div className="bg-[#F1F5F9] rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-lg border border-slate-200 max-h-[500px] sm:max-h-[700px] overflow-hidden">
            {/* Fund context card */}
            <div className="bg-white rounded-xl p-3 sm:p-4 mb-3">
              <p className="text-[10px] sm:text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 sm:mb-3">{t('exampleLabel')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1.5">{t('exampleThesis')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Applied AI', 'SaaS / Enterprise', 'Climate Tech', 'FinTech', 'Impact Tech'].map((tag) => (
                      <span key={tag} className="text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-1.5">{t('examplePortfolio')}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Probabl', 'pyannoteAI', 'Pelico', 'Clevergy', 'Goodvest', 'Fipto'].map((company) => (
                      <span key={company} className="text-[10px] font-medium bg-slate-50 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter iframe */}
            <div className="bg-white rounded-xl overflow-hidden">
              <iframe
                src="/newsletter-example.html"
                title="Newsletter example"
                className="w-full h-[350px] sm:h-[550px] border-0 overflow-y-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
