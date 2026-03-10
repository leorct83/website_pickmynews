'use client';

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: '01',
      title: t('step1Title'),
      description: t('step1Desc'),
      visual: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 h-48 flex flex-col items-center justify-center">
          <label htmlFor="user-theme" className="text-slate-700 font-medium mb-2">
            {t('step1Label')}
          </label>
          <input
            type="text"
            id="user-theme"
            placeholder={t('step1Placeholder')}
            className="w-full max-w-md px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-slate-800"
          />
        </div>
      ),
    },
    {
      number: '02',
      title: t('step2Title'),
      description: t('step2Desc'),
      visual: (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-[220px]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-900">{t('step2Planning')}</span>
            </div>

            {/* Fréquence fixe 1x/semaine */}
            <div className="flex gap-1 mb-3">
              <div className="flex-1 py-1.5 text-xs font-medium rounded-md bg-amber-500 text-white shadow-sm text-center">
                1x / {t('step2Week')}
              </div>
            </div>

            {/* Jour et heure */}
            <div className="flex gap-2">
              <div className="flex-1 bg-slate-50 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium text-slate-700">{t('step2Day')}</span>
              </div>
              <div className="flex-1 bg-slate-50 rounded-lg px-2 py-1.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium text-slate-700">{t('step2Hour')}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: t('step3Title'),
      description: t('step3Desc'),
      visual: (
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 h-48 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-[200px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-slate-200 rounded w-20" />
                <div className="h-1.5 bg-slate-100 rounded w-16 mt-1" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-slate-100 rounded w-full" />
              <div className="h-2 bg-slate-100 rounded w-4/5" />
              <div className="h-2 bg-slate-100 rounded w-3/4" />
            </div>
            <div className="mt-3 flex items-center gap-1 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">{t('step3Delivered')}</span>
            </div>
          </div>
        </div>
      ),
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
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <span className="text-6xl font-bold text-slate-100 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-3xl text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {step.visual}
              </div>
            </div>
          ))}
        </div>

        {/* CTA after steps */}
        <div className="text-center mt-20">
          <a href="https://calendly.com/leopolddelarochere" target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
            <span>{t('cta')}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
