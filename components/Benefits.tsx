'use client';

export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Format email',
      description: 'Pas d\'app à installer. Directement dans votre boîte mail préférée.',
      color: 'from-slate-600 to-slate-800',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '100% pour vous',
      description: 'Votre thème. Votre fréquence. Votre horaire. Vous contrôlez absolument tout.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Toujours à jour',
      description: 'Sources fiables, contenu vérifié, actualité fraîche. Chaque envoi est pertinent.',
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
            Avantages
          </p>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            Pourquoi vous allez adorer
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Une expérience pensée pour les gens qui veulent rester informés 
            sans y passer leur vie.
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
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
