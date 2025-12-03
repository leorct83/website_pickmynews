import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - PickMyNews',
  description: 'Terms of Service for PickMyNews - Rules and conditions for using our service.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-display">Terms of Service</h1>
          <p className="text-slate-400 mt-4">Last updated: December 4, 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          <p className="lead text-xl text-slate-600 mb-8">
            By using PickMyNews (&quot;the Service&quot;), you agree to the following Terms of Service.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">1. Description of Service</h2>
            <p className="text-slate-600">
              PickMyNews provides automated news monitoring, content aggregation, and newsletter generation tools. The service is offered as-is and may evolve over time.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">2. Eligibility</h2>
            <p className="text-slate-600">
              You must be at least 18 years old to use this service.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">3. Accounts</h2>
            <p className="text-slate-600 mb-4">You are responsible for:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activity occurring under your account</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We may suspend or terminate accounts that violate these terms.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">4. Subscriptions &amp; Payments</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Payments are processed securely by Stripe.</li>
              <li>Subscriptions renew automatically unless cancelled.</li>
              <li>Prices may be updated; you will be notified in advance.</li>
              <li>No refunds except where required by law.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">5. Acceptable Use</h2>
            <p className="text-slate-600 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Abuse the platform</li>
              <li>Automate scraping in ways that violate third-party terms</li>
              <li>Use AI features for illegal or unethical activities</li>
              <li>Attempt to hack, overload, or reverse-engineer the service</li>
            </ul>
            <p className="text-slate-600 mt-4">
              We may terminate accounts engaging in prohibited activities.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">6. Intellectual Property</h2>
            <p className="text-slate-600">
              All content, design, and technology of PickMyNews are our exclusive property.
              You retain ownership of the content you input (feeds, links, keywords, documents).
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">7. Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">Within the limits of applicable law:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>We are not liable for any indirect or consequential damages</li>
              <li>The service is provided &quot;as is&quot; without guarantee of uninterrupted availability</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">8. Termination</h2>
            <p className="text-slate-600">
              You may cancel anytime.<br />
              We may suspend or terminate your access for violations of these Terms.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">9. Governing Law</h2>
            <p className="text-slate-600">
              These Terms are governed by French law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">10. Contact</h2>
            <p className="text-slate-600">
              Email: <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="section-container text-center">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            &larr; Back to PickMyNews
          </Link>
        </div>
      </footer>
    </div>
  )
}
