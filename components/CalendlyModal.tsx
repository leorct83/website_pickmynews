'use client';

import { useTranslations } from 'next-intl';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const t = useTranslations('calendlyModal');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-slate-100 transition-colors shadow-sm"
          aria-label={t('close')}
        >
          <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">{t('title')}</h2>
          <p className="text-sm text-slate-500 mt-1">{t('subtitle')}</p>
        </div>

        {/* Calendly embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px bg-slate-100 overflow-y-auto max-h-[calc(90vh-100px)]">
          {/* Leopold */}
          <div className="bg-white flex flex-col">
            <div className="flex-1 min-h-[500px]">
              <iframe
                src="https://calendly.com/leopolddelarochere/pickmynews-demo"
                title="Leopold - PickMyNews Demo"
                className="w-full h-full min-h-[500px] border-0"
              />
            </div>
          </div>

          {/* Thibaud */}
          <div className="bg-white flex flex-col">
            <div className="flex-1 min-h-[500px]">
              <iframe
                src="https://calendly.com/thibaud-serena/new-meeting"
                title="Thibaud - Meeting"
                className="w-full h-full min-h-[500px] border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
