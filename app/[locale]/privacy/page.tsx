import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacyPage')
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function PrivacyPage() {
  const t = await getTranslations('privacyPage')
  const tLegal = await getTranslations('legalPages')

  const section1_1Items = t.raw('section1_1Items') as string[]
  const section1_2Items = t.raw('section1_2Items') as string[]
  const section1_3Items = t.raw('section1_3Items') as string[]
  const section2Items = t.raw('section2Items') as string[]
  const section3Items = t.raw('section3Items') as string[]
  const section4Items = t.raw('section4Items') as string[]
  const section5Items = t.raw('section5Items') as string[]
  const section6Items = t.raw('section6Items') as string[]
  const section7Items = t.raw('section7Items') as string[]
  const section9Items = t.raw('section9Items') as string[]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tLegal('backHome')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-display">{t('title')}</h1>
          <p className="text-slate-400 mt-4">{t('lastUpdated')}</p>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          <p className="lead text-xl text-slate-600 mb-8">
            {t('intro')}
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section1Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section1Intro')}</p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">{t('section1_1Title')}</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              {section1_1Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">{t('section1_2Title')}</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              {section1_2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">{t('section1_3Title')}</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              {section1_3Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">{t('section1_4Title')}</h3>
            <p className="text-slate-600">
              {t('section1_4Text')}
              <strong className="text-slate-800">{t('section1_4Strong')}</strong>
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section2Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section2Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section3Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section3Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section3Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section4Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section4Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section4Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-800 font-semibold mt-4">{t('section4Strong')}</p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section5Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section5Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section5Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mt-4">
              {t('section5Text')}
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section6Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section6Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section6Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mt-4">
              {t('section6Text')} <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section7Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section7Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section7Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mt-4">
              {t('section7Text')}
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section8Title')}</h2>
            <p className="text-slate-600">
              {t('section8Text')}
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section9Title')}</h2>
            <p className="text-slate-600 mb-4">{t('section9Intro')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section9Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mt-4">{t('section9Text')}</p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section10Title')}</h2>
            <p className="text-slate-600">
              {t('section10Text')}<br />
              {t('section10Email')} <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="section-container text-center">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            {tLegal('backToPickMyNews')}
          </Link>
        </div>
      </footer>
    </div>
  )
}
