import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - PickMyNews',
  description: 'Privacy Policy for PickMyNews - How we collect, use, and protect your data.',
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-display">Privacy Policy</h1>
          <p className="text-slate-400 mt-4">Last updated: December 2024</p>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          <p className="lead text-xl text-slate-600 mb-8">
            PickMyNews (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides an automated monitoring and newsletter service available at pickmynews.com. This Privacy Policy explains what data we collect, how we use it, and how we protect it.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">We may collect the following categories of data:</p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1.1. Account Information</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing information (processed securely by our payment provider)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1.2. Usage Data</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              <li>Pages visited</li>
              <li>Features used</li>
              <li>Interaction logs with the platform</li>
              <li>Device and browser information</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1.3. Content Data</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-1">
              <li>Topics you choose to monitor</li>
              <li>Newsletter preferences</li>
              <li>Imported RSS feeds, links or keywords</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">1.4. Payment Data</h3>
            <p className="text-slate-600">
              All payment details (cards, billing info) are processed exclusively by Stripe.
              <strong className="text-slate-800"> We never store or access your credit card details.</strong>
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide automated monitoring and newsletter services</li>
              <li>Personalize your dashboards, alerts and reports</li>
              <li>Process payments and subscriptions</li>
              <li>Improve our product</li>
              <li>Send administrative emails (invoices, notifications, important updates)</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">3. Legal Basis</h2>
            <p className="text-slate-600 mb-4">We process your data based on:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>The performance of a contract (your subscription)</li>
              <li>Your consent (e.g., marketing emails)</li>
              <li>Legitimate interest (product analytics &amp; security)</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">4. Sharing of Information</h2>
            <p className="text-slate-600 mb-4">We may share your data only with:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Service providers (hosting, analytics, email delivery, payment processing)</li>
              <li>Stripe, for payment processing</li>
              <li>Authorities, only if legally required</li>
            </ul>
            <p className="text-slate-800 font-semibold mt-4">We never sell personal data.</p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">5. Data Storage and Security</h2>
            <p className="text-slate-600 mb-4">We implement:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Encryption (in transit and at rest)</li>
              <li>Access control and monitoring</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Data is hosted in the EU or compliant regions depending on our providers.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">6. Your Rights</h2>
            <p className="text-slate-600 mb-4">You may request at any time:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Access to your data</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Export of your data</li>
              <li>Objection to processing</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Requests can be made at: <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">7. Cookies</h2>
            <p className="text-slate-600 mb-4">We use cookies for:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Authentication</li>
              <li>Analytics</li>
              <li>Service optimization</li>
            </ul>
            <p className="text-slate-600 mt-4">
              You may disable cookies in your browser settings, but some features may be limited.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">8. Data Retention</h2>
            <p className="text-slate-600">
              Your data is stored for the duration of your account and deleted within 30 days after closure, except when required by law (e.g., invoices).
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">9. Third-party Services</h2>
            <p className="text-slate-600 mb-4">PickMyNews uses third-party providers including (non-exhaustive):</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Stripe (payments)</li>
              <li>MailJet (emails)</li>
              <li>LLM API providers (content generation)</li>
            </ul>
            <p className="text-slate-600 mt-4">Each service has its own privacy policy.</p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">10. Contact</h2>
            <p className="text-slate-600">
              For any question:<br />
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
