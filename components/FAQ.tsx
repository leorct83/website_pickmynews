'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Puis-je vraiment annuler à tout moment ?',
      answer: 'Oui, sans conditions. Un simple clic suffit. Pas de questions, pas de frais cachés, pas de procédure compliquée.',
    },
    {
      question: 'Comment choisir mon thème de newsletter ?',
      answer: 'Lors de votre inscription, vous décrivez en quelques mots ce qui vous intéresse : "L\'actualité des startups françaises", "Les dernières avancées en IA", "Le marché immobilier parisien"... Notre système comprend votre demande et vous propose des sources pertinentes.',
    },
    {
      question: 'D\'où viennent les articles ?',
      answer: 'Nous agrégeons des centaines de sources de qualité : médias traditionnels, blogs spécialisés, publications académiques, newsletters d\'experts... Notre algorithme sélectionne les articles les plus pertinents en fonction de votre thème.',
    },
    {
      question: 'Puis-je modifier mes préférences après inscription ?',
      answer: 'Absolument. Vous pouvez changer de thème, ajuster la fréquence d\'envoi, modifier l\'horaire de réception, ou même créer plusieurs newsletters sur des sujets différents. Pour toute difficulté, notre support est là pour vous aider.',
    },
    {
      question: 'Et si j\'ai besoin d\'aide ?',
      answer: 'Notre équipe support répond en moins de 48h par email, envoyez un mail à contact@pickmynews.com .',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-stone-50 scroll-mt-nav">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
              Vous avez des questions ?
            </h2>
            <p className="text-xl text-slate-600">
              Voici les réponses aux interrogations les plus courantes.
            </p>
          </div>

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
