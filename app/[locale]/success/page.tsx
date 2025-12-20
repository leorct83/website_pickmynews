'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function SuccessPage() {
  const t = useTranslations('success');

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {t('title')}
          </h1>

          <p className="text-slate-600 mb-6">
            {t('message')}
          </p>

          {/* Trial reminder notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <p className="text-amber-800 text-sm text-left">
                {t('trialReminder')}
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            {t('backHome')}
          </Link>
        </div>
      </div>
    </main>
  );
}
