'use client';

import { useTranslations } from 'next-intl';

export default function Benefits() {
  const t = useTranslations('benefits');

  const sourceLinks = {
    benefit1: 'https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/walking-notification-tightrope-how-engage-audiences-while-avoiding',
    benefit2: 'https://studyfinds.org/information-overload-workplace/',
    benefit3: 'https://electroiq.com/stats/social-media-mental-health-statistics/',
  };

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: t('benefit1Title'),
      stat: t('benefit1Stat'),
      description: t('benefit1Desc'),
      sourceLink: sourceLinks.benefit1,
      sourceName: t('benefit1Source'),
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('benefit2Title'),
      stat: t('benefit2Stat'),
      description: t('benefit2Desc'),
      sourceLink: sourceLinks.benefit2,
      sourceName: t('benefit2Source'),
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('benefit3Title'),
      stat: t('benefit3Stat'),
      description: t('benefit3Desc'),
      sourceLink: sourceLinks.benefit3,
      sourceName: t('benefit3Source'),
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="avantages" className="py-24 px-4 bg-stone-50 scroll-mt-nav relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
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

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 card-hover border border-slate-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {benefit.icon}
              </div>

              {/* Stat - big and impactful */}
              <p className={`text-4xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                {benefit.stat}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>

              {/* Description - the benefit */}
              <p className="text-slate-600 leading-relaxed mb-3">
                {benefit.description}
              </p>

              {/* Source link */}
              <a
                href={benefit.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-amber-600 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {benefit.sourceName}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
