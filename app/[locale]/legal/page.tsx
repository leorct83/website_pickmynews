import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legalNoticePage')
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function LegalPage() {
  const t = await getTranslations('legalNoticePage')
  const tLegal = await getTranslations('legalPages')

  const section6Items = t.raw('section6Items') as string[]
  const section7Items1 = t.raw('section7Items1') as string[]
  const section10Items = t.raw('section10Items') as string[]

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
          <p className="text-slate-400 mt-4">PickMyNews</p>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section1Title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('section1Intro')}
            </p>

            <div className="bg-white rounded-lg p-6 border border-slate-200 mb-4">
              <p className="text-slate-800 font-semibold mb-2">{t('ownerTitle')}</p>
              <p className="text-slate-600">
                PickMyNews – <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <p className="text-slate-800 font-semibold mb-2">{t('hostTitle')}</p>
              <p className="text-slate-600">
                Vercel Inc.<br />
                340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://vercel.com</a>
              </p>
            </div>
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
            <p className="text-slate-600 mb-4">
              {t('section3Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section3Text2')}
            </p>
            <p className="text-slate-600">
              {t('section3Text3')}
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section4Title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('section4Text1')}
            </p>
            <p className="text-slate-600">
              {t('section4Text2')}
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
            <p className="text-slate-600 mb-4">
              {t('section6Text1')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section6Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mb-4">
              {t('section6Text2')}
            </p>
            <p className="text-slate-600">
              {t('section6Text3')}
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section7Title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('section7Text1')}
            </p>
            <p className="text-slate-600 mb-4">{t('section7Text2')}</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              {section7Items1.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-slate-600 mb-4">
              {t('section7Text3')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section7Text4')} <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
            <p className="text-slate-600 mb-4">
              {t('section7Text5')}
            </p>
            <p className="text-slate-600">
              {t('section7Text6')}
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section8Title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('section8Text1')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section8Text2')}
            </p>
            <p className="text-slate-600 mb-4">
              {t('section8Text3')}
            </p>
            <p className="text-slate-600">
              {t('section8Text4')}
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section9Title')}</h2>
            <p className="text-slate-600">
              {t('section9Text')}
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section10Title')}</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              {section10Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">{t('section11Title')}</h2>
            <div className="bg-white rounded-lg p-6 border border-slate-200 space-y-4">
              <div>
                <p className="text-slate-800 font-semibold">{t('lexiqueUser')}</p>
                <p className="text-slate-600">{t('lexiqueUserDef')}</p>
              </div>
              <div>
                <p className="text-slate-800 font-semibold">{t('lexiquePersonal')}</p>
                <p className="text-slate-600">{t('lexiquePersonalDef')}</p>
              </div>
            </div>
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
