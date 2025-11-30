'use client';

export default function PainPoints() {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '2h47',
      label: 'par jour',
      description: 'C\'est le temps moyen passé à consommer des news, souvent sans réel bénéfice.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '73%',
      label: 'des gens',
      description: 'se sentent submergés par la quantité d\'informations à traiter chaque jour.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '91%',
      label: 'des articles',
      description: 'que vous voyez ne sont pas pertinents pour vos intérêts réels.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-4">
            Le constat
          </p>
          <h2 className="text-4xl md:text-5xl text-white mb-6 text-balance">
            L'infobésité vous coûte cher.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Entre les flux RSS, les notifications, les newsletters génériques et les timelines infinies... 
            vous perdez plus que du temps.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 mb-6">
                {point.icon}
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold text-white">{point.stat}</span>
                <span className="text-lg text-slate-400 ml-2">{point.label}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition vers la solution */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-6">
            Et si vous repreniez le contrôle ?
          </p>
          <a href="#comment-ca-marche" className="btn-ghost !text-amber-400 hover:!text-amber-300">
            <span>Découvrir la solution</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
