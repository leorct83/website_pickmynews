import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - PickMyNews',
  description: 'Conditions Générales de Vente de PickMyNews - Règles et conditions pour utiliser notre service.',
}

export default function CGVPage() {
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
          <h1 className="text-4xl md:text-5xl font-display">Conditions Générales de Vente</h1>
          <p className="text-slate-400 mt-4">Dernière mise à jour : 6 décembre 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

          <p className="lead text-xl text-slate-600 mb-8">
            PickMyNews fournit un service personnalisé d&apos;abonnement permettant à ses membres d&apos;accéder à du contenu éditorial automatisé (&quot;Contenu PickMyNews&quot;) envoyé par email, ou accessible en ligne, sous la forme de newsletters générées automatiquement selon la fréquence choisie.
          </p>

          <p className="text-slate-600 mb-8">
            Les présentes Conditions Générales de Vente régissent votre utilisation de notre service.
            Dans ces CGV, les termes « service PickMyNews », « notre service » ou « le service » désignent le service numérique personnalisé fourni par PickMyNews pour découvrir, recevoir et consulter du contenu éditorial, incluant toutes les fonctionnalités, recommandations, interfaces web, tableaux de bord, fonctionnalités d&apos;automatisation, ainsi que tous les contenus et logiciels associés à notre service.
          </p>

          <p className="text-slate-600 mb-8">
            La référence à « vous » désigne le membre ayant créé le compte PickMyNews et dont le mode de paiement est utilisé pour la facturation.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">1. Abonnement (« Membership »)</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">1.1. Durée de l&apos;abonnement</h3>
            <p className="text-slate-600 mb-4">
              Votre abonnement PickMyNews se poursuit jusqu&apos;à résiliation.
              Pour utiliser PickMyNews, vous devez disposer d&apos;un accès Internet, fournir une adresse email valide, et nous communiquer un ou plusieurs modes de paiement valides.
              Sauf annulation avant la date de facturation, vous nous autorisez à prélever les frais d&apos;abonnement correspondant au prochain cycle de facturation (voir section « Résiliation »).
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">1.2. Plans d&apos;abonnement</h3>
            <p className="text-slate-600 mb-4">
              PickMyNews propose différents plans d&apos;abonnement, pouvant inclure notamment :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>1, 2, 5 ou 7 newsletters par semaine,</li>
              <li>abonnements hebdomadaires, mensuels ou annuels,</li>
              <li>fonctionnalités avancées (analyses, recommandations, contenus premium).</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Certains plans peuvent inclure du contenu promotionnel limité (par ex. messages sponsorisés ou recommandations éditoriales liées à PickMyNews).
            </p>
            <p className="text-slate-600 mb-4">
              Les fonctionnalités disponibles peuvent varier selon le plan choisi et seront précisées lors de l&apos;inscription ou dans toute communication correspondante.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">1.3. Abonnements tiers</h3>
            <p className="text-slate-600 mb-4">
              Certains abonnements peuvent être proposés par des tiers (plateformes, partenaires) en lien avec leurs propres services.
              Ces abonnements peuvent comporter des conditions particulières, communiquées lors de l&apos;inscription.
            </p>
            <p className="text-slate-600">
              Les détails de votre abonnement sont accessibles depuis votre espace personnel PickMyNews.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">2. Offres promotionnelles</h2>
            <p className="text-slate-600 mb-4">
              PickMyNews peut proposer ponctuellement des offres promotionnelles (essais gratuits, réductions, codes promotionnels…).
              PickMyNews se réserve le droit de révoquer une offre en cas d&apos;inéligibilité.
            </p>
            <p className="text-slate-600 mb-4">
              L&apos;éligibilité peut être déterminée sur la base d&apos;informations telles que : email, appareil, mode de paiement, ou historique d&apos;abonnement.
            </p>
            <p className="text-slate-600">
              Les conditions spécifiques à chaque offre sont communiquées lors de l&apos;inscription.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">3. Facturation et Résiliation</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">3.1. Cycle de facturation</h3>
            <p className="text-slate-600 mb-4">
              Les frais d&apos;abonnement au service PickMyNews seront prélevés sur votre mode de paiement à la date de facturation indiquée dans votre espace « Compte ».
              La durée du cycle dépend du plan choisi (hebdomadaire, mensuel ou annuel).
            </p>
            <p className="text-slate-600 mb-4">
              Votre date de facturation peut être modifiée, notamment :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>en cas d&apos;échec de paiement,</li>
              <li>lors d&apos;un changement de plan,</li>
              <li>si votre abonnement a débuté un jour qui n&apos;existe pas chaque mois.</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">3.2. Modes de paiement</h3>
            <p className="text-slate-600 mb-4">
              Pour utiliser PickMyNews, vous devez fournir un ou plusieurs modes de paiement valides.
              Vous nous autorisez à prélever tout mode de paiement associé à votre compte si le mode principal est refusé.
            </p>
            <p className="text-slate-600 mb-4">
              En cas d&apos;échec de paiement et absence d&apos;annulation, nous pouvons suspendre l&apos;accès au service jusqu&apos;à règlement.
            </p>
            <p className="text-slate-600 mb-4">
              Certains modes de paiement peuvent générer des frais additionnels (frais bancaires, transactions étrangères). Cela relève de votre prestataire de paiement.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">3.3. Mise à jour des modes de paiement</h3>
            <p className="text-slate-600 mb-4">
              Vous pouvez mettre à jour vos modes de paiement dans votre espace « Compte ».
              Suite à une mise à jour automatique par votre prestataire, vous nous autorisez à continuer les prélèvements sur le mode de paiement mis à jour.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">3.4. Résiliation</h3>
            <p className="text-slate-600 mb-4">
              Vous pouvez résilier votre abonnement PickMyNews à tout moment.
              Votre accès reste actif jusqu&apos;à la fin de la période en cours.
            </p>
            <p className="text-slate-600 mb-4">
              Les paiements ne sont pas remboursables et aucun remboursement ou crédit n&apos;est accordé pour les périodes partiellement utilisées ou le contenu non consulté.
            </p>
            <p className="text-slate-600 mb-4">
              La résiliation s&apos;effectue via votre espace « Compte ».
            </p>
            <p className="text-slate-600 mb-4">
              Si vous avez souscrit via un tiers, vous devez résilier via ce tiers (ex : via l&apos;App Store, Stripe Billing tiers, etc.).
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">3.5. Modification des prix et plans</h3>
            <p className="text-slate-600 mb-4">
              PickMyNews peut modifier ses prix ou ses plans, notamment en raison :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>de l&apos;évolution des coûts techniques,</li>
              <li>des frais de distribution,</li>
              <li>des exigences légales,</li>
              <li>de l&apos;ajout de nouvelles fonctionnalités.</li>
            </ul>
            <p className="text-slate-600">
              Toute modification sera annoncée au moins un mois à l&apos;avance.
              Si vous refusez la modification, vous pouvez résilier votre abonnement avant son entrée en vigueur.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">4. Utilisation du service PickMyNews</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.1. Âge minimum</h3>
            <p className="text-slate-600 mb-4">
              Vous devez avoir au moins 18 ans pour souscrire à PickMyNews.
              Les mineurs peuvent utiliser le service sous supervision d&apos;un adulte.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.2. Usage personnel</h3>
            <p className="text-slate-600 mb-4">
              Le contenu PickMyNews est réservé à un usage personnel et non commercial, sauf autorisation spécifique.
              Aucune diffusion publique ou partage au-delà de votre usage personnel n&apos;est autorisé.
            </p>
            <p className="text-slate-600 mb-4">
              Nous vous concédons un droit limité, non exclusif et non transférable d&apos;accéder au contenu dans le cadre de votre abonnement.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.3. Disponibilité géographique</h3>
            <p className="text-slate-600 mb-4">
              Le contenu PickMyNews est accessible principalement dans le pays où vous avez établi votre compte, sauf restriction spécifique selon la législation locale.
            </p>
            <p className="text-slate-600 mb-4">
              La disponibilité du contenu peut varier en fonction de votre localisation et peut être modifiée à tout moment.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.4. Évolution du service</h3>
            <p className="text-slate-600 mb-4">
              Le contenu et les fonctionnalités du service PickMyNews sont régulièrement mis à jour.
              Nous ne garantissons pas la disponibilité permanente d&apos;un contenu particulier.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.5. Restrictions techniques et légales</h3>
            <p className="text-slate-600 mb-4">
              Sauf autorisation expresse, vous vous engagez à ne pas :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>reproduire, distribuer, modifier ou utiliser les contenus de PickMyNews ;</li>
              <li>contourner les mécanismes de sécurité ;</li>
              <li>utiliser robots, scrapers ou scripts automatisés ;</li>
              <li>tenter de décompiler ou détourner nos logiciels ;</li>
              <li>injecter du code ou interférer avec notre plateforme ;</li>
              <li>utiliser notre service ou nos données pour entraîner ou évaluer des modèles d&apos;intelligence artificielle, systèmes automatisés ou technologies similaires.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Nous pouvons suspendre ou résilier votre accès en cas de violation.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.6. Qualité d&apos;accès</h3>
            <p className="text-slate-600 mb-4">
              La réception des newsletters dépend notamment de :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>votre fournisseur d&apos;accès ;</li>
              <li>la qualité de votre connexion Internet ;</li>
              <li>la configuration de votre boîte mail ;</li>
              <li>vos paramètres de filtrage (spam, règles automatiques, etc.).</li>
            </ul>
            <p className="text-slate-600 mb-4">
              PickMyNews ne saurait garantir la livraison sur tous les environnements techniques.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">4.7. Logiciels associés</h3>
            <p className="text-slate-600">
              Le logiciel PickMyNews, développé par ou pour PickMyNews, ne peut être utilisé que pour accéder au service.
              Nous pouvons déployer automatiquement des mises à jour.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">5. Mots de passe et sécurité du compte</h2>
            <p className="text-slate-600 mb-4">
              Votre mot de passe est strictement personnel et doit rester confidentiel.
              Toute personne ayant accès à votre compte est réputée agir en votre nom.
            </p>
            <p className="text-slate-600 mb-4">
              Vous devez maintenir des informations exactes et à jour dans votre compte.
            </p>
            <p className="text-slate-600">
              Nous pouvons suspendre ou fermer votre compte en cas de suspicion de fraude ou d&apos;usurpation.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">6. Dispositions diverses</h2>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">6.1. Contenus non sollicités</h3>
            <p className="text-slate-600 mb-4">
              PickMyNews n&apos;accepte pas les idées ou contenus non sollicités et n&apos;est pas responsable des similitudes éventuelles entre les contenus proposés et des contenus envoyés à PickMyNews.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">6.2. Support client</h3>
            <p className="text-slate-600 mb-4">
              Pour toute assistance, vous pouvez consulter notre centre d&apos;aide ou nous contacter via l&apos;email support indiqué sur le site.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">6.3. Divisibilité</h3>
            <p className="text-slate-600 mb-4">
              Si une disposition est jugée invalide, les autres restent pleinement applicables.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">6.4. Modifications des CGV</h3>
            <p className="text-slate-600 mb-4">
              PickMyNews peut modifier les présentes CGV notamment pour :
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>adapter le service,</li>
              <li>se conformer à la législation,</li>
              <li>améliorer la lisibilité,</li>
              <li>effectuer des changements organisationnels,</li>
              <li>renforcer la sécurité.</li>
            </ul>
            <p className="text-slate-600 mb-4">
              En cas de modification substantielle, vous serez notifié au moins un mois avant son application.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">6.5. Communications électroniques</h3>
            <p className="text-slate-600">
              Toutes les communications liées à votre compte seront envoyées par voie électronique (email, interface du site).
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-display text-slate-900 mb-6">Contact</h2>
            <p className="text-slate-600">
              Email : <a href="mailto:contact@pickmynews.com" className="text-amber-600 hover:text-amber-700 underline">contact@pickmynews.com</a>
            </p>
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
