import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales - PickMyNews',
  description: 'Mentions légales du site PickMyNews - Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-display">Mentions légales</h1>
          <p className="text-slate-400 mt-4">PickMyNews</p>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">1. Présentation du site</h2>
            <p className="text-slate-600 mb-4">
              En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site PickMyNews.com l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>

            <div className="bg-white rounded-lg p-6 border border-slate-200 mb-4">
              <p className="text-slate-800 font-semibold mb-2">Propriétaire, Créateur, Responsable publication &amp; Webmaster :</p>
              <p className="text-slate-600">
                PickMyNews – <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <p className="text-slate-800 font-semibold mb-2">Hébergeur :</p>
              <p className="text-slate-600">
                Vercel Inc.<br />
                340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">https://vercel.com</a>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">2. Conditions générales d&apos;utilisation du site et des services proposés</h2>
            <p className="text-slate-600 mb-4">
              L&apos;utilisation du site PickMyNews.com implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment ; les utilisateurs du site sont donc invités à les consulter régulièrement.
            </p>
            <p className="text-slate-600 mb-4">
              Le site PickMyNews.com est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut toutefois être décidée par PickMyNews, qui s&apos;efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l&apos;intervention.
            </p>
            <p className="text-slate-600">
              Le site est régulièrement mis à jour. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s&apos;imposent néanmoins à l&apos;utilisateur, qui est invité à s&apos;y référer le plus souvent possible.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">3. Description des services fournis</h2>
            <p className="text-slate-600 mb-4">
              Le site PickMyNews.com a pour objet de fournir une information concernant les services de veille automatisée, d&apos;agrégation de contenus et de génération de newsletters proposés par PickMyNews.
            </p>
            <p className="text-slate-600 mb-4">
              PickMyNews s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour, qu&apos;elles soient de son fait ou de celui de tiers partenaires.
            </p>
            <p className="text-slate-600">
              Toutes les informations données sur le site PickMyNews.com le sont à titre indicatif et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs et peuvent avoir été modifiés depuis leur mise en ligne.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">4. Limitations contractuelles sur les données techniques</h2>
            <p className="text-slate-600 mb-4">
              Le site utilise les technologies modernes du web (JavaScript, frameworks frontend, API).
            </p>
            <p className="text-slate-600">
              Le site Internet ne pourra être tenu responsable de dommages matériels liés à son utilisation. L&apos;utilisateur s&apos;engage à accéder au site à l&apos;aide d&apos;un équipement récent, ne contenant pas de virus, et avec un navigateur à jour.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">5. Propriété intellectuelle et contrefaçons</h2>
            <p className="text-slate-600 mb-4">
              PickMyNews est propriétaire des droits de propriété intellectuelle ou détient les droits d&apos;usage sur l&apos;ensemble des éléments accessibles sur le site, notamment : textes, images, graphismes, logo, icônes, sons, logiciels.
            </p>
            <p className="text-slate-600 mb-4">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de PickMyNews.
            </p>
            <p className="text-slate-600">
              Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et pourra faire l&apos;objet de poursuites conformément aux articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">6. Limitations de responsabilité</h2>
            <p className="text-slate-600 mb-4">
              PickMyNews ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site PickMyNews.com, et résultant soit :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications indiquées au point 4,</li>
              <li>de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité,</li>
              <li>d&apos;un usage non conforme ou abusif du service.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              PickMyNews ne pourra également être tenu responsable des dommages indirects (tels qu&apos;une perte de marché ou perte de chance) consécutifs à l&apos;utilisation du site.
            </p>
            <p className="text-slate-600">
              Des espaces interactifs peuvent être mis à disposition des utilisateurs (formulaire de contact). PickMyNews se réserve le droit de supprimer sans préavis tout contenu contraire à la législation applicable (raciste, diffamant, injurieux, pornographique, etc.). PickMyNews se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">7. Gestion des données personnelles</h2>
            <p className="text-slate-600 mb-4">
              En France, les données personnelles sont protégées par la loi n° 78-17 du 6 janvier 1978 modifiée, la loi n° 2004-801 du 6 août 2004, l&apos;article L.226-13 du Code pénal et le RGPD.
            </p>
            <p className="text-slate-600 mb-4">Lors de l&apos;utilisation du site PickMyNews.com, peuvent être recueillis :</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>l&apos;URL des liens permettant d&apos;accéder au site,</li>
              <li>le fournisseur d&apos;accès,</li>
              <li>l&apos;adresse IP,</li>
              <li>des données de navigation (pages consultées, temps de connexion…),</li>
              <li>les données volontairement fournies via les formulaires.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              PickMyNews ne collecte des informations personnelles relatives à l&apos;utilisateur que pour le besoin de certains services proposés par le site. L&apos;utilisateur fournit ces informations en toute connaissance de cause.
            </p>
            <p className="text-slate-600 mb-4">
              Conformément au RGPD, tout utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression, d&apos;opposition et de portabilité concernant ses données. La demande doit être effectuée par email à : <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
            <p className="text-slate-600 mb-4">
              Aucune information personnelle de l&apos;utilisateur du site n&apos;est publiée, échangée, transférée ou vendue à des tiers sans le consentement de l&apos;utilisateur. En cas de rachat de PickMyNews, les données pourraient être transmises au repreneur qui serait soumis aux mêmes obligations.
            </p>
            <p className="text-slate-600">
              Les bases de données sont protégées par la loi du 1er juillet 1998 transposant la directive 96/9 relative à la protection juridique des bases de données.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">8. Liens hypertextes et cookies</h2>
            <p className="text-slate-600 mb-4">
              Le site PickMyNews.com peut contenir des liens hypertextes vers d&apos;autres sites. PickMyNews n&apos;a pas la possibilité de vérifier l&apos;ensemble des contenus ainsi visités et n&apos;assume aucune responsabilité de ce fait.
            </p>
            <p className="text-slate-600 mb-4">
              La navigation sur le site peut entraîner l&apos;installation de cookies sur l&apos;ordinateur de l&apos;utilisateur. Ces cookies enregistrent des informations relatives à la navigation.
            </p>
            <p className="text-slate-600 mb-4">
              Le refus d&apos;installation d&apos;un cookie peut rendre certains services indisponibles.
            </p>
            <p className="text-slate-600">
              Les méthodes de blocage des cookies dépendent du navigateur (Chrome, Firefox, Safari, Edge, etc.). L&apos;utilisateur peut consulter la documentation de son navigateur pour ajuster les paramètres.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">9. Droit applicable et attribution de juridiction</h2>
            <p className="text-slate-600">
              Tout litige en relation avec l&apos;utilisation du site PickMyNews.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents français.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">10. Les principales lois concernées</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Loi n° 78-17 du 6 janvier 1978 modifiée, relative à l&apos;informatique, aux fichiers et aux libertés.</li>
              <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.</li>
              <li>Règlement Général sur la Protection des Données (RGPD – UE 2016/679).</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">11. Lexique</h2>
            <div className="bg-white rounded-lg p-6 border border-slate-200 space-y-4">
              <div>
                <p className="text-slate-800 font-semibold">Utilisateur :</p>
                <p className="text-slate-600">Internaute se connectant et utilisant le site.</p>
              </div>
              <div>
                <p className="text-slate-800 font-semibold">Informations personnelles :</p>
                <p className="text-slate-600">&laquo; les informations qui permettent, sous quelque forme que ce soit, directement ou non, l&apos;identification des personnes physiques auxquelles elles s&apos;appliquent &raquo;.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="section-container text-center">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            &larr; Retour à PickMyNews
          </Link>
        </div>
      </footer>
    </div>
  )
}
