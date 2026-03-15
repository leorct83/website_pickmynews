'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import ContactForm from './ContactForm';
import CalendlyModal from './CalendlyModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleOpenCalendly = () => setCalendlyOpen(true);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('open-calendly', handleOpenCalendly);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-calendly', handleOpenCalendly);
    };
  }, []);

  const switchLocale = (newLocale: 'fr' | 'en') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
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
            <a href="#avantages" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              {t('features')}
            </a>
            <a href="#comment-ca-marche" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              {t('howItWorks')}
            </a>
            <button
              onClick={() => setContactOpen(true)}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              {t('contact')}
            </button>
          </div>

          {/* Language Switcher + CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher — hidden on mobile, shown in hamburger menu instead */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-100 rounded-full p-1">
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

            {/* CTA - visible on all sizes */}
            <button
              onClick={() => setCalendlyOpen(true)}
              className="btn-primary btn-sm text-xs sm:text-sm"
            >
              {t('cta')}
            </button>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="flex flex-col py-2">
              <a
                href="#avantages"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
              >
                {t('features')}
              </a>
              <a
                href="#comment-ca-marche"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
              >
                {t('howItWorks')}
              </a>
              <button
                onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
                className="px-6 py-3 text-left text-slate-700 hover:bg-slate-50 font-medium transition-colors"
              >
                {t('contact')}
              </button>

              {/* Language switcher — mobile only (hidden on sm+) */}
              <div className="sm:hidden px-6 py-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { switchLocale('fr'); setMobileMenuOpen(false); }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      locale === 'fr'
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <img src="https://flagcdn.com/w20/fr.png" alt="FR" className="w-4 h-3 object-cover rounded-sm" />
                    FR
                  </button>
                  <button
                    onClick={() => { switchLocale('en'); setMobileMenuOpen(false); }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      locale === 'en'
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-4 h-3 object-cover rounded-sm" />
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </>
  );
}
