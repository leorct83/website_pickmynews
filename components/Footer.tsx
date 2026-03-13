'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ContactForm from './ContactForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tNav = useTranslations('navbar');
  const [contactOpen, setContactOpen] = useState(false);

  const links = {
    product: [
      { label: tNav('features'), href: '#avantages' },
      { label: tNav('howItWorks'), href: '#comment-ca-marche' },
    ],
    company: [
      { label: t('contact'), href: '#', onClick: () => setContactOpen(true) },
    ],
    legal: [
      { label: t('legalNotices'), href: '/legal' },
      { label: t('termsShort'), href: '/terms' },
      { label: t('salesTerms'), href: '/cgv' },
      { label: t('privacyShort'), href: '/privacy' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="section-container py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 group">

              {/* Logo */}
              <div
                className="
                  w-12 h-12 sm:w-20 sm:h-20
                  flex items-center justify-center
                  transform transition-transform
                  group-hover:rotate-6
                "
              >
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                />
              </div>

              {/* Brand name */}
              <span className="text-xl sm:text-2xl font-semibold">
                Pick<span className="text-amber-500">My</span>News
              </span>
            </Link>

          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('product')}</h4>
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
            <h4 className="font-semibold text-white mb-4">{t('company')}</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <button onClick={link.onClick} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('legal')}</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            {t('copyright', { year: currentYear })}
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            {t.rich('madeWith', {
              heart: (chunks) => <span className="text-red-500">{chunks}</span>,
            })}
          </p>
        </div>
      </div>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </footer>
  );
}
