'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
            <img src="/logo.svg" alt="PickMyNews Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-xl font-semibold text-slate-900">
            Pick<span className="text-amber-500">My</span>News
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#comment-ca-marche" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Comment ça marche
          </a>
          <a href="#avantages" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Avantages
          </a>
          <a href="#tarifs" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            Tarifs
          </a>
          <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#inscription"
            className="btn-primary !py-3 !px-6 !text-base"
          >
            Obtenir ma newsletter personnalisée
          </a>
        </div>
      </div>
    </nav>
  );
}
