'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: 'fr' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center transform transition-transform group-hover:rotate-6">
            <img src="/logo.svg" alt="PickMyNews Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-xl font-semibold text-slate-900">
            Pick<span className="text-amber-500">My</span>News
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            {t('features')}
          </a>
          <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            {t('howItWorks')}
          </a>
          <a href="mailto:contact@pickmynews.com" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
            {t('contact')}
          </a>
        </div>

        {/* Language Switcher + CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1">
            <button
              onClick={() => switchLocale('fr')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                locale === 'fr'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="Français"
            >
              <img src="https://flagcdn.com/w20/fr.png" alt="FR" className="w-4 h-3 object-cover rounded-sm" />
              <span>FR</span>
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                locale === 'en'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              title="English"
            >
              <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-4 h-3 object-cover rounded-sm" />
              <span>US</span>
            </button>
          </div>

          {/* CTA */}
          <a
            href="https://calendly.com/leopolddelarochere"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm hidden sm:inline-flex"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </nav>
  );
}
