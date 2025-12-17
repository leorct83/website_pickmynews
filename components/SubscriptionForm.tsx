'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// Types
type Frequency = 1;
type BillingCycle = 'weekly' | 'monthly' | 'yearly';
type Language = 'Français' | 'English';

interface FormData {
  firstName: string;
  email: string;
  theme: string;
  language: Language;
  frequency: Frequency;
  selectedDays: string[];
  selectedHour: number;
  billingCycle: BillingCycle;
  legalConsent: boolean;
}

interface PricingOption {
  weekly: number;
  monthly: number;
  yearly: number;
}

const PRICING: Record<Frequency, PricingOption> = {
  1: { weekly: 1.99, monthly: 4.99, yearly: 49.99 },
};

// Mapping fréquence numérique vers format API
const FREQUENCY_TO_PLAN: Record<Frequency, string> = {
  1: '1x',
};

const HOURS = Array.from({ length: 24 }, (_, i) => i);

export default function SubscriptionForm() {
  const t = useTranslations('subscriptionForm');

  // Days avec clés API et labels traduits
  const DAYS = [
    { key: 'Lundi', label: t('dayMon') },
    { key: 'Mardi', label: t('dayTue') },
    { key: 'Mercredi', label: t('dayWed') },
    { key: 'Jeudi', label: t('dayThu') },
    { key: 'Vendredi', label: t('dayFri') },
    { key: 'Samedi', label: t('daySat') },
    { key: 'Dimanche', label: t('daySun') },
  ];

  const BILLING_LABELS: Record<BillingCycle, string> = {
    weekly: t('billingWeekly'),
    monthly: t('billingMonthly'),
    yearly: t('billingYearly'),
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    theme: '',
    language: 'Français',
    frequency: 1,
    selectedDays: ['Lundi'],
    selectedHour: 8,
    billingCycle: 'monthly',
    legalConsent: false,
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ajuster les jours sélectionnés quand la fréquence change
  useEffect(() => {
    setFormData((prev) => {
      if (prev.selectedDays.length > prev.frequency) {
        return { ...prev, selectedDays: prev.selectedDays.slice(0, prev.frequency) };
      } else if (prev.selectedDays.length < prev.frequency) {
        const availableDays = DAYS.map((d) => d.key).filter((d) => !prev.selectedDays.includes(d));
        const daysToAdd = availableDays.slice(0, prev.frequency - prev.selectedDays.length);
        return { ...prev, selectedDays: [...prev.selectedDays, ...daysToAdd] };
      }
      return prev;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.frequency]);

  const handleDayToggle = (dayKey: string) => {
    setFormData((prev) => {
      if (prev.selectedDays.includes(dayKey)) {
        if (prev.selectedDays.length > 1) {
          return { ...prev, selectedDays: prev.selectedDays.filter((d) => d !== dayKey) };
        }
        return prev;
      } else {
        if (prev.selectedDays.length < prev.frequency) {
          return { ...prev, selectedDays: [...prev.selectedDays, dayKey] };
        } else {
          // Remplacer le premier jour sélectionné par le nouveau
          return { ...prev, selectedDays: [...prev.selectedDays.slice(1), dayKey] };
        }
      }
    });
  };

  // Validation côté client avant soumission
  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) return t('errorFirstName');
    if (!formData.email.trim()) return t('errorEmail');
    if (!formData.theme.trim()) return t('errorTheme');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return t('errorEmailInvalid');
    }

    if (formData.selectedDays.length !== formData.frequency) {
      return t('errorDays', { count: formData.frequency });
    }

    if (!formData.legalConsent) {
      return t('errorConsent');
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const sendHour = formData.selectedHour.toString().padStart(2, '0') + ':00';

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          theme: formData.theme,
          language: formData.language,
          plan_frequency: FREQUENCY_TO_PLAN[formData.frequency],
          billing_period: formData.billingCycle,
          send_days: formData.selectedDays,
          send_hour: sendHour,
          legal_consent: formData.legalConsent,
        }),
      });

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        const text = await response.text();
        if (text) {
          try {
            data = JSON.parse(text);
          } catch {
            throw new Error(t('errorServerInvalid'));
          }
        } else {
          throw new Error(t('errorServerEmpty'));
        }
      } else {
        throw new Error(`${t('errorServer')} (${response.status}).`);
      }

      if (!response.ok) {
        throw new Error(data?.error || `${t('errorServer')} (${response.status}).`);
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error(t('errorPaymentUrl'));
      }
    } catch (err) {
      console.error('Erreur checkout:', err);
      setError(err instanceof Error ? err.message : t('errorServer'));
      setIsSubmitting(false);
    }
  };

  const currentPrice = PRICING[formData.frequency][formData.billingCycle];

  const getBillingPeriodLabel = (cycle: BillingCycle) => {
    switch (cycle) {
      case 'weekly': return t('perWeekShort');
      case 'monthly': return t('perMonthShort');
      case 'yearly': return t('perYearShort');
    }
  };

  return (
    <section id="inscription" className="py-24 px-4 bg-white scroll-mt-nav relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
              {t('badge')}
            </p>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
              {t.rich('title', {
                highlight: (chunks) => <span className="text-amber-600">{chunks}</span>,
              })}
            </h2>
            <p className="text-xl text-slate-600">{t('subtitle')}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200 p-8 md:p-10">
              {/* First name & Email fields */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('firstName')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder={t('firstNamePlaceholder')}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('emailPlaceholder')}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-lg"
                  />
                </div>
              </div>

              {/* Theme field */}
              <div className="mb-6">
                <label htmlFor="theme" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('theme')}
                </label>
                <input
                  type="text"
                  id="theme"
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  placeholder={t('themePlaceholder')}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-lg"
                />
              </div>

              {/* Language selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('language')}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Français', 'English'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setFormData({ ...formData, language: lang })}
                      className={`py-4 px-4 rounded-xl text-center transition-all border-2 flex items-center justify-center gap-3 ${
                        formData.language === lang
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={lang === 'Français' ? 'https://flagcdn.com/w20/fr.png' : 'https://flagcdn.com/w20/us.png'}
                        alt={lang === 'Français' ? 'FR' : 'US'}
                        className="w-5 h-4 object-cover rounded-sm"
                      />
                      <span className="font-medium">{lang}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Day selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('daysSingular')}
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {DAYS.map((day) => (
                    <button
                      key={day.key}
                      type="button"
                      onClick={() => handleDayToggle(day.key)}
                      className={`py-3 px-2 rounded-xl text-center transition-all border-2 ${
                        formData.selectedDays.includes(day.key)
                          ? 'border-amber-500 bg-amber-500 text-white'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-sm font-medium">{day.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hour selection */}
              <div className="mb-6">
                <label htmlFor="hour" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('sendHour')}
                </label>
                <select
                  id="hour"
                  value={formData.selectedHour}
                  onChange={(e) => setFormData({ ...formData, selectedHour: Number(e.target.value) })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-lg bg-white"
                >
                  {HOURS.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour.toString().padStart(2, '0')}:00
                    </option>
                  ))}
                </select>
              </div>

              {/* Billing cycle selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t('paymentMode')}</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['weekly', 'monthly', 'yearly'] as BillingCycle[]).map((cycle) => (
                    <button
                      key={cycle}
                      type="button"
                      onClick={() => setFormData({ ...formData, billingCycle: cycle })}
                      className={`py-3 px-4 rounded-xl text-center transition-all border-2 relative ${
                        formData.billingCycle === cycle
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {cycle === 'yearly' && (
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                          -17%
                        </span>
                      )}
                      <span className="text-sm font-medium">{BILLING_LABELS[cycle]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing summary */}
              <div className="mb-6 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-600">{t('summarySimple')}</span>
                  <span className="text-slate-400 text-sm">{BILLING_LABELS[formData.billingCycle]}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-4xl font-bold text-slate-900">{currentPrice.toFixed(2)} €</span>
                    <span className="text-slate-500 ml-1">
                      /{getBillingPeriodLabel(formData.billingCycle)}
                    </span>
                  </div>
                  {formData.billingCycle === 'yearly' && (
                    <span className="text-green-600 text-sm font-medium">
                      {t('saveAmount', { amount: (PRICING[formData.frequency].monthly * 12 - PRICING[formData.frequency].yearly).toFixed(2) })}
                    </span>
                  )}
                </div>
              </div>

              {/* Legal consent checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input
                      type="checkbox"
                      checked={formData.legalConsent}
                      onChange={(e) => setFormData({ ...formData, legalConsent: e.target.checked })}
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 border-2 border-slate-300 rounded transition-all peer-checked:border-amber-500 peer-checked:bg-amber-500 group-hover:border-slate-400 peer-checked:group-hover:border-amber-600" />
                    <svg
                      className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {t.rich('legalConsent', {
                      terms: (chunks) => (
                        <Link href="/terms" className="text-amber-600 hover:underline">
                          {chunks}
                        </Link>
                      ),
                      privacy: (chunks) => (
                        <Link href="/privacy" className="text-amber-600 hover:underline">
                          {chunks}
                        </Link>
                      ),
                    })}
                  </span>
                </label>
              </div>

              {/* Error message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {/* Submit button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-6 px-8 rounded-2xl text-xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin w-6 h-6" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>{t('submitting')}</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <span>{t('submit')}</span>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('trustCancel')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('trustSecure')}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('trustGuarantee')}
                  </span>
                </div>
              </div>
            </div>
          </form>

          {/* Social proof */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="flex -space-x-2">
                {['M', 'T', 'S', 'A', 'J'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-xs font-medium border-2 border-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-500">
              {t.rich('socialProof', {
                count: (chunks) => <strong className="text-slate-900">{chunks}</strong>,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
