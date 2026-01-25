'use client';

import { useState, useEffect } from 'react';

export default function ProductHuntBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Vérifier si le bandeau a été fermé dans cette session
    const dismissed = sessionStorage.getItem('ph-banner-dismissed');
    if (!dismissed) {
      // Afficher après un court délai pour ne pas gêner le chargement initial
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('ph-banner-dismissed', 'true');
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isDismissed ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="relative bg-white rounded-xl shadow-lg border border-slate-200 p-5 max-w-[500px]">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
          aria-label="Fermer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex items-center gap-3 mb-3">
          {/* Logo */}
          <img
            alt="PickMyNews"
            src="https://ph-files.imgix.net/fd5a3f21-3740-40ac-bad3-7b288bc82f27.png?auto=format&fit=crop&w=80&h=80"
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 truncate">PickMyNews</h3>
            <p className="text-sm text-slate-500 line-clamp-2">
              Get the very specific news you&apos;re interested in
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://www.producthunt.com/products/pickmynews?embed=true&utm_source=embed&utm_medium=post_embed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 px-4 py-2 bg-[#FF6154] text-white rounded-lg text-sm font-semibold hover:bg-[#e5574b] transition-colors"
        >
          Check it out on Product Hunt
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
