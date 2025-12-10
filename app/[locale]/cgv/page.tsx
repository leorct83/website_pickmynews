import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('cgvPage')
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function CGVPage() {
  const t = await getTranslations('cgvPage')
  const tLegal = await getTranslations('legalPages')

  const section1_2Items = t.raw('section1_2Items') as string[]
  const section3_1Items = t.raw('section3_1Items') as string[]
  const section3_5Items = t.raw('section3_5Items') as string[]
  const section4_5Items = t.raw('section4_5Items') as string[]
  const section4_6Items = t.raw('section4_6Items') as string[]
  const section6_4Items = t.raw('section6_4Items') as string[]

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

          <p className="text-slate-600 mb-8">
            {t('intro2')}
          </p>

          <p className="text-slate-600 mb-8">
            {t('intro3')}
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section1Title')}</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section1_1Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section1_1Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section1_2Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section1_2Text')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section1_2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mb-4">
              {t('section1_2Text2')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section1_2Text3')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section1_3Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section1_3Text1')}
            </p>
            <p className="text-slate-600">
              {t('section1_3Text2')}
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section2Title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('section2Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section2Text2')}
            </p>
            <p className="text-slate-600">
              {t('section2Text3')}
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section3Title')}</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section3_1Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section3_1Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3_1Text2')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section3_1Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section3_2Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section3_2Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3_2Text2')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3_2Text3')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section3_3Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section3_3Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section3_4Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section3_4Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3_4Text2')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3_4Text3')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3_4Text4')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section3_5Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section3_5Text1')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section3_5Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600">
              {t('section3_5Text2')}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section4Title')}</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_1Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section4_1Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_2Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section4_2Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section4_2Text2')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_3Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section4_3Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section4_3Text2')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_4Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section4_4Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_5Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section4_5Text1')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section4_5Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mb-4">
              {t('section4_5Text2')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_6Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section4_6Text1')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section4_6Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mb-4">
              {t('section4_6Text2')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section4_7Title')}</h3>
            <p className="text-slate-600">
              {t('section4_7Text')}
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section5Title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('section5Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section5Text2')}
            </p>
            <p className="text-slate-600">
              {t('section5Text3')}
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section6Title')}</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section6_1Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section6_1Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section6_2Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section6_2Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section6_3Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section6_3Text')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section6_4Title')}</h3>
            <p className="text-slate-600 mb-4">
              {t('section6_4Text1')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section6_4Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mb-4">
              {t('section6_4Text2')}
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('section6_5Title')}</h3>
            <p className="text-slate-600">
              {t('section6_5Text')}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('contactTitle')}</h2>
            <p className="text-slate-600">
              {t('contactEmail')} <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
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
