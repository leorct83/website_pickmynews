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

          {/* Right: Newsletter mockup */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-lg border border-slate-200">
            {/* Email header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">PickMyNews Weekly</div>
                <div className="text-xs text-slate-500">{t('step3Delivered')}</div>
              </div>
            </div>

            {/* Newsletter articles */}
            <div className="space-y-4">
              {/* Article 1 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-3 bg-slate-800 rounded w-4/5 mb-2" />
                    <div className="h-2 bg-slate-200 rounded w-full mb-1" />
                    <div className="h-2 bg-slate-200 rounded w-3/4" />
                    <div className="flex gap-2 mt-3">
                      <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full font-medium">SaaS B2B</span>
                      <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full font-medium">Series A</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-3 bg-slate-800 rounded w-3/5 mb-2" />
                    <div className="h-2 bg-slate-200 rounded w-full mb-1" />
                    <div className="h-2 bg-slate-200 rounded w-2/3" />
                    <div className="flex gap-2 mt-3">
                      <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-medium">FinTech</span>
                      <span className="text-[10px] px-2 py-0.5 bg-purple-50 text-purple-700 rounded-full font-medium">Europe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-3 bg-slate-800 rounded w-2/3 mb-2" />
                    <div className="h-2 bg-slate-200 rounded w-full mb-1" />
                    <div className="h-2 bg-slate-200 rounded w-4/5" />
                    <div className="flex gap-2 mt-3">
                      <span className="text-[10px] px-2 py-0.5 bg-rose-50 text-rose-700 rounded-full font-medium">DeepTech</span>
                      <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full font-medium">Seed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
