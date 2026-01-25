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
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 bg-white rounded-full shadow-md text-slate-400 hover:text-slate-600 transition-colors p-1 z-10"
          aria-label="Fermer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Hunt Badge */}
        <a
          href="https://www.producthunt.com/products/pickmynews?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-pickmynews"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1068029&theme=light&t=1769373977129"
            alt="PickMyNews - Get the very specific news you're interested in | Product Hunt"
            width="250"
            height="54"
            className="hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}
