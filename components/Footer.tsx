'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: 'Comment ça marche', href: '#comment-ca-marche' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'FAQ', href: '#faq' },
    ],
    company: [
      { label: 'Contact', href: 'mailto:contact@pickmynews.com' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/legal' },
      { label: 'CGU', href: '/terms' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Confidentialité', href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              
              {/* Logo */}
              <div
                className="
                  w-20 h-20
                  flex items-center justify-center
                  transform transition-transform 
                  group-hover:rotate-6
                "
              >
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Brand name */}
              <span className="text-2xl font-semibold">
                Pick<span className="text-amber-500">My</span>News
              </span>
            </a>

            {/* Text */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              L'actualité qui compte, quand vous le décidez.
              Votre newsletter personnalisée, sans bruit ni distraction.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Produit</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} PickmyNews. Tous droits réservés.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Fait avec <span className="text-red-500">♥</span> en France
          </p>
        </div>
      </div>
    </footer>
  );
}