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

          {/* Right: Realistic newsletter mockup */}
          <div className="bg-[#F1F5F9] rounded-3xl p-5 shadow-lg border border-slate-200 max-h-[600px] overflow-hidden relative">
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Newsletter header */}
              <div className="bg-[#0F172A] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">VC Weekly Digest for Serena</p>
                    <p className="text-white/40 text-[10px] mt-0.5">Mar 11, 2026</p>
                  </div>
                  <img src="/logos/serena.png" alt="Serena" className="h-8 w-auto brightness-0 invert opacity-80" />
                </div>
              </div>

              {/* Newsletter body */}
              <div className="px-5 py-4 space-y-4">
                {/* Section: Fundraising */}
                <div className="bg-[#1E293B] px-4 py-2.5 rounded-md">
                  <span className="text-white text-[10px] font-extrabold tracking-widest">💰  FUNDRAISING</span>
                </div>

                {/* Sub-section badge */}
                <div className="bg-[#EEF2FF] px-3 py-1.5 rounded-md border-l-[3px] border-[#6B9AED]">
                  <span className="text-[#6B9AED] text-[9px] font-extrabold tracking-wider uppercase">Early Stage</span>
                </div>

                {/* Deal cards */}
                <div className="space-y-2">
                  <div className="bg-[#FAFAFE] rounded-lg border border-slate-100 p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-slate-900">Rebar</span>
                      <span className="text-[10px] font-bold text-[#8B5CF6]">$14M Series A</span>
                    </div>
                    <div className="flex gap-1.5 mt-1.5">
                      <span className="text-[8px] px-1.5 py-0.5 bg-[#EDE9FE] text-[#8B5CF6] rounded font-bold uppercase">Proptech</span>
                      <span className="text-[8px] text-slate-400">🇺🇸 US</span>
                    </div>
                    <p className="text-[9px] text-slate-500 mt-1 leading-relaxed">Built an AI operating system to help commercial HVAC suppliers generate quotes faster.</p>
                  </div>

                  <div className="bg-[#FAFAFE] rounded-lg border border-slate-100 p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-slate-900">Vertical Compute</span>
                      <span className="text-[10px] font-bold text-[#8B5CF6]">€37M Seed</span>
                    </div>
                    <div className="flex gap-1.5 mt-1.5">
                      <span className="text-[8px] px-1.5 py-0.5 bg-[#EDE9FE] text-[#8B5CF6] rounded font-bold uppercase">Semiconductors</span>
                      <span className="text-[8px] text-slate-400">🇧🇪 BE</span>
                    </div>
                    <p className="text-[9px] text-slate-500 mt-1 leading-relaxed">Develops 3D &quot;skyscraper&quot; memory architecture to tackle the &quot;memory wall&quot; for AI chips.</p>
                  </div>
                </div>

                {/* Growth rounds badge */}
                <div className="bg-[#FFFBEB] px-3 py-1.5 rounded-md border-l-[3px] border-[#D97706]">
                  <span className="text-[#D97706] text-[9px] font-extrabold tracking-wider uppercase">Growth Rounds</span>
                </div>

                <div className="space-y-2">
                  <div className="bg-[#FFFDF7] rounded-lg border border-[#FEF3C7] p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-slate-900">DeepIP</span>
                      <span className="text-[10px] font-bold text-[#D97706]">€23M Series B</span>
                    </div>
                    <div className="flex gap-1.5 mt-1.5">
                      <span className="text-[8px] px-1.5 py-0.5 bg-[#FEF3C7] text-[#D97706] rounded font-bold uppercase">AI & LegalTech</span>
                      <span className="text-[8px] text-slate-400">🇫🇷 FR</span>
                    </div>
                    <p className="text-[9px] text-slate-500 mt-1 leading-relaxed">Develops AI software to automate the patent lifecycle for IP professionals.</p>
                  </div>
                </div>

                {/* News section */}
                <div className="bg-[#1E293B] px-4 py-2.5 rounded-md">
                  <span className="text-white text-[10px] font-extrabold tracking-widest">📰  NEWS OF THE WEEK</span>
                </div>

                <div className="space-y-2">
                  <div className="border-l-[3px] border-[#0EA5E9] bg-[#F8FAFC] rounded-r-md p-2.5">
                    <p className="text-[11px] font-bold text-slate-900 leading-snug">Gleamer acquired by RadNet for €200M+</p>
                    <p className="text-[9px] text-slate-500 mt-1">The French AI radiology platform had reached €30M ARR.</p>
                  </div>
                  <div className="border-l-[3px] border-[#7C6DD8] bg-[#F8FAFC] rounded-r-md p-2.5">
                    <p className="text-[11px] font-bold text-slate-900 leading-snug">ChatGPT weekly active users grow to 900M</p>
                    <p className="text-[9px] text-slate-500 mt-1">2.7x larger than Gemini on web traffic.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fade overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F1F5F9] to-transparent rounded-b-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
