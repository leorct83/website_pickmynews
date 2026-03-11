'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const t = useTranslations('contactForm');
  const [form, setForm] = useState({
    fundName: '',
    firstName: '',
    email: '',
    position: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setForm({ fundName: '', firstName: '', email: '', position: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 2000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          aria-label={t('close')}
        >
          <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-slate-900 mb-6">{t('title')}</h2>

        {status === 'success' ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-emerald-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg text-slate-700">{t('success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-fundName" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('fundName')}
                </label>
                <input
                  id="contact-fundName"
                  type="text"
                  placeholder={t('fundNamePlaceholder')}
                  value={form.fundName}
                  onChange={(e) => setForm({ ...form, fundName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-slate-800"
                />
              </div>
              <div>
                <label htmlFor="contact-firstName" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('firstName')}
                </label>
                <input
                  id="contact-firstName"
                  type="text"
                  placeholder={t('firstNamePlaceholder')}
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('email')} *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={t('emailPlaceholder')}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-slate-800"
                />
              </div>
              <div>
                <label htmlFor="contact-position" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('position')}
                </label>
                <input
                  id="contact-position"
                  type="text"
                  placeholder={t('positionPlaceholder')}
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-slate-800"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
                {t('message')} *
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder={t('messagePlaceholder')}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-slate-800 resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm">{t('error')}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >
              {status === 'sending' ? t('sending') : t('send')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
