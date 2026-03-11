'use client';

import { useState, ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslations('faq');

  const faqs: { question: string; answer: ReactNode }[] = [
    {
      question: t('q0'),
      answer: t('a0'),
    },
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a2'),
    },
    {
      question: t('q3'),
      answer: (
        <>
          {t.rich('a3', {
            email: () => (
              <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">
                contact@pickmynews.com
              </a>
            ),
          })}
        </>
      ),
    },
    {
      question: t('q4'),
      answer: t('a4'),
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-stone-50 scroll-mt-nav">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* FAQ accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-slate-900">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
