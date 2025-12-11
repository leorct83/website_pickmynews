'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';

// =============================================================================
// TYPES
// =============================================================================

type NewsletterExample = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  html: string;
};

// =============================================================================
// DONNÉES DES NEWSLETTERS - FRANÇAIS
// =============================================================================

const NEWSLETTER_EXAMPLES_FR: NewsletterExample[] = [
  {
    id: 'newsletter-1',
    title: 'Forces Armées Royales 2025 : Chergui, African Lion & APORA',
    date: '10 décembre 2025',
    description: 'En 2025, les exercices militaires et les coopérations stratégiques franco-marocaines et américano-marocaines illustrent une montée en puissance des Forces Armées Royales.',
    tags: ['Forces Armées Royales'],
    html: `
  <!-- WRAPPER -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">
                Newsletter du 10/12/2025
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Bonjour Véronique 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">En 2025, les exercices militaires et les coopérations stratégiques franco-marocaines et américano-marocaines illustrent une montée en puissance des Forces Armées Royales.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 Au programme</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Exercice Chergui 2025 teste l'interopérabilité franco-marocaine</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>African Lion 2026 en phase finale de planification</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>APORA 2025 : FAR et AFRICOM coopèrent pour la sécurité sanitaire</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
              <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Chergui 2025, laboratoire d'interopérabilité franco-marocaine dans l'Atlas</h2>

<p style="margin:0 0 12px 0;">Le <strong>3 octobre 2025</strong>, l'exercice militaire <em>Chergui 2025</em> a regroupé dans le désert d'Errachidia des unités des <em>Forces armées royales marocaines</em> et de l'armée française. Sur un scénario simulant une agression contre l'intégrité territoriale du Maroc, cet entraînement de trois semaines a challengé la coordination et la capacité d'action conjointe des deux armées.</p>

<p style="margin:0 0 12px 0;">Structuré en deux phases, Chergui a mêlé un <em>Command Post Exercise</em> (CPX) pour la planification et la gestion interarmées, à un <em>Live Exercise</em> (LIVEX) intégrant des manœuvres tactiques combinant forces terrestres et aériennes. Les soldats ont ainsi opéré dans un milieu désertique exigeant, entre reliefs de l'Atlas et conditions climatiques difficiles.</p>

<p style="margin:0 0 12px 0;">Côté matériel, la coopération s'est appuyée sur des moyens emblématiques : chars <strong>M1A2 Abrams</strong> du Maroc, hélicoptères <strong>Tigre</strong>, <strong>Gazelle</strong> et <strong>NH90</strong> français, démontrant la complémentarité tactique des deux armées. Plus qu'une simple démonstration, Chergui 2025 cible le renforcement des savoir-faire et une meilleure réponse aux défis sécuritaires du Maghreb et du Sahel.</p>

<p style="margin:0 0 12px 0;">Ce rendez-vous annuel illustre la volonté stratégique de Paris et Rabat de préserver la stabilité régionale, en scrutant particulièrement les enjeux liés à la maîtrise des environnements désertiques. L'exercice confirme une coopération militaire solide et pragmatique, clé dans un contexte international instable.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.defense.gouv.fr/terre/actualites/exercice-chergui-2025-linteroperabilite-franco-marocaine-testee-desert" style="color:#6366f1;">defense.gouv.fr</a> · <a href="https://medias24.com/2025/10/06/exercice-chergui-2025-les-armees-marocaine-et-francaise-a-lepreuve-du-desert/" style="color:#6366f1;">medias24.com</a> · <a href="https://lecollimateur.ma/195919" style="color:#6366f1;">lecollimateur.ma</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">African Lion 2026 : dernière ligne droite avant le plus grand exercice militaire africain</h2>

<p style="margin:0 0 12px 0;">Du <strong>8 au 12 décembre 2025</strong>, la réunion principale de planification de l'exercice <em>African Lion 2026</em> s'est tenue à Agadir, centrée sur la coordination des phases opérationnelles et logistiques. Programmé du <strong>20 avril au 8 mai 2026</strong> dans les régions d'Agadir, Tan Tan, Taroudant, Kénitra et Ben Guérir, cet exercice annuel réunit les forces armées marocaines et américaines.</p>

<p style="margin:0 0 12px 0;">Plus de <strong>40 000 militaires</strong> ont participé aux cinq dernières éditions, faisant de African Lion le plus grand événement militaire en Afrique. L'édition 2026 vise à renforcer l'interopérabilité des armées dans les domaines aérien, terrestre, maritime et des opérations spéciales. L'objectif est aussi d'accroître la préparation opérationnelle pour des interventions combinées et interarmées.</p>

<p style="margin:0 0 12px 0;">Ce partenariat stratégique consolidé s'inscrit dans une dynamique d'approfondissement de la coopération bilatérale entre les États-Unis et le Maroc. Il s'accompagne d'initiatives comme <em>Atlas Handshake</em>, focalisée sur la coopération maritime, témoignant de l'ancrage régional et international accru dans la sécurité et la stabilité de la région.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://lematin.ma/nation/reunion-de-planification-principale-de-lexercice-african-lion-2026/318105" style="color:#6366f1;">lematin.ma</a> · <a href="https://fr.le360.ma/politique/african-lion-2026-le-compte-a-rebours-est-lance_OKXI6FFXWRGG3HHR5YWUOT7FGM/" style="color:#6366f1;">le360.ma</a> · <a href="https://medias24.com/2025/12/09/atlas-handshake-le-maroc-et-les-etats-unis-renforcent-leur-cooperation-maritime-1591726/" style="color:#6366f1;">medias24.com</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">FAR et AFRICOM unissent leurs forces pour renforcer la sécurité sanitaire en Afrique lors d'APORA 2025</h2>

<p style="margin:0 0 12px 0;">Du <strong>8 au 12 décembre 2025</strong>, Rabat a accueilli l'atelier <em>APORA 2025</em>, conduit par les <em>Forces Armées Royales</em> (FAR) en collaboration avec le <em>Africa Command</em> (AFRICOM) des États-Unis. Cet événement a rassemblé des représentants de <strong>38 nations africaines</strong>, renforçant une alliance continentale contre les épidémies émergentes.</p>

<p style="margin:0 0 12px 0;">Fondé en 2014 par AFRICOM au Ghana au cœur de la crise Ebola, APORA vise à fusionner les initiatives de santé publique avec la préparation militaire. L'atelier s'est concentré sur l'opérationnalisation de la collaboration civilo-militaire pour anticiper, détecter et répondre rapidement aux flambées de maladies infectieuses.</p>

<p style="margin:0 0 12px 0;">Les participants ont approfondi des sujets tels que la <em>surveillance épidémiologique</em>, la <em>communication de crise</em> et le rôle du changement climatique dans les risques sanitaires. Cet effort conjoint a également souligné le renforcement des capacités nationales par le partage d'expertises et des stratégies de réponse coordonnées.</p>

<p style="margin:0 0 12px 0;">Au-delà de la santé, cet événement reflète une vision plus large portée par le roi <strong>Mohammed VI</strong> du Maroc, visant à tisser ensemble sécurité et bien-être public. En alignant discipline militaire et systèmes de santé civils, le partenariat FAR-AFRICOM établit un modèle de gestion épidémique résiliente et proactive à travers l'Afrique.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://lematin.ma/nation/les-far-accueillent-latelier-apora-2025-en-partenariat-avec-lafricom/318038" style="color:#6366f1;">Le Matin</a> · <a href="https://linformation.ma/news/politique/securite-sanitaire-les-far-accueillent-l-atelier-apora-2025-en-partenariat-avec-l-africom/61849" style="color:#6366f1;">L'Information</a> · <a href="https://www.kaweru.com/politique-societe/2025/12/09/rabat-accueille-latelier-apora-2025-pour-renforcer-la-securite-sanitaire-en-afrique/" style="color:#6366f1;">Kaweru</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Vous avez appris quelque chose ? Parlez en autour de vous 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— L'équipe PickMyNews</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Gérer mon abonnement</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-2',
    title: 'HP supprime des emplois tandis que l\'IA révolutionne la RAM et le codage',
    date: '05 décembre 2025',
    description: 'L\'intelligence artificielle bouleverse l\'industrie tech : HP supprime jusqu\'à 6000 emplois, les prix de la RAM explosent (+50%), et Anthropic lance Claude Sonnet 4.5, l\'IA programmateur la plus avancée.',
    tags: ['News AI'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter du 05/12/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Bonjour Sophie 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">L'intelligence artificielle bouleverse l'industrie technologique à travers des décisions stratégiques majeures et des innovations spectaculaires.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 Au programme</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>HP supprime jusqu'à 6000 emplois à cause de l'IA</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Crise de la RAM : l'IA fait flamber les prix</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Anthropic lance Claude Sonnet 4.5</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1681748179531-f3a227764721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxBY3R1JTIwSUElMjAlM0ElMjBMZXMlMjByb3VhZ2VzJTIwaW52aXNpYmxlcyUyMGRlJTIwbGElMjByJUMzJUE5dm9sdXRpb258ZW58MHwwfHx8MTc2NDk1NTEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="graffiti on the side of a building reads la revolution"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
              <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">HP va supprimer jusqu'à 6 000 emplois pour intégrer l'IA</h2>

<p style="margin:0 0 12px 0;">Le <strong>25 novembre 2025</strong>, le géant américain HP a annoncé un plan de suppression de <strong>4 000 à 6 000</strong> postes d'ici fin <strong>2028</strong>. Cette réduction correspond à plus de <strong>10 %</strong> de ses <strong>58 000</strong> salariés dans le monde, une première pour une grande entreprise établissant un lien clair entre l'<em>intelligence artificielle</em> et une politique drastique de réduction d'effectifs.</p>

<p style="margin:0 0 12px 0;">HP détaille que cette transformation s'inscrit dans son plan d'adoption intensifiée de l'<em>IA</em> pour améliorer la productivité, l'innovation produits et la satisfaction client. L'objectif est de générer environ <strong>1 milliard de dollars</strong> d'économies annuelles d'ici à la fin de période. Cependant, ces gains nécessiteront des coûts de restructuration estimés à <strong>650 millions de dollars</strong>, dont <strong>250 millions</strong> pour l'exercice fiscal 2026.</p>

<p style="margin:0 0 12px 0;">Cette annonce a provoqué une chute d'environ <strong>6 %</strong> du titre HP à Wall Street, conjuguée à des prévisions financières décevantes. Le plan de HP illustre les défis à venir de l'<em>IA</em> générative dans le secteur industriel, où la suppression d'emplois techniques pourrait être compensée par la création de nouveaux métiers, mais avec une transition incertaine.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources : </strong><a href="https://www.01net.com/" style="color:#6366f1;text-decoration:underline;">01net</a> · <a href="https://www.la-croix.com/" style="color:#6366f1;text-decoration:underline;">La Croix</a> · <a href="https://www.tunisienumerique.com/" style="color:#6366f1;text-decoration:underline;">Tunisie Numérique</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">L'IA fait exploser les prix de la RAM en décembre 2025</h2>

<p style="margin:0 0 12px 0;">Dès début décembre 2025, la <em>crise de la RAM</em> atteint un point critique. Les tarifs des barrettes de mémoire vive ont bondi de <strong>50%</strong> en quelques jours seulement.</p>

<p style="margin:0 0 12px 0;">Pour certaines références haut de gamme, les prix ont même plus que doublé, multipliés par <strong>3,35</strong> en quelques mois. Des augmentations majeures qui se traduisent par des hausses cumulées pouvant atteindre <strong>+171,8%</strong> sur un an.</p>

<p style="margin:0 0 12px 0;">À l'origine, la demande fulgurante des entreprises d'<em>intelligence artificielle</em> absorbe toute la production mondiale de <em>DRAM</em>. Les équipementiers préfèrent investir dans des mémoires spécifiques à l'IA, délaissant les commandes classiques pour ordinateurs, smartphones et consoles.</p>

<p style="margin:0 0 12px 0;">Cette réorientation crée un phénomène inédit, frappant un composant central de l'électronique grand public. Les consommateurs risquent de voir le prix de leurs appareils grimper significativement, dès 2026, faute de baisse des coûts.</p>

<p style="margin:0 0 12px 0;">Par exemple, le coût de la <em>RAM</em> sur un smartphone premier prix, généralement quelques dizaines d'euros, pourrait se multiplier par deux ou trois.</p>

<p style="margin:0 0 12px 0;">La pénurie de <em>mémoire vive</em> liée à l'essor de l'IA, déjà ressentie sur le marché au détail, menace désormais la chaîne entière des produits technologiques.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources : </strong><a href="https://www.franceinfo.fr/internet/intelligence-artificielle/crise-de-la-ram-pourquoi-le-prix-des-ordinateurs-smartphones-ou-consoles-risque-de-flamber-a-cause-de-l-ia_7656292.html" style="color:#6366f1;text-decoration:underline;">France Info</a> · <a href="https://www.dhnet.be/actu/new-tech/2025/12/02/une-tablette-pliable-dans-la-poche-samsung-bombe-le-torse-avec-son-galaxy-z-trifold-H24SS3KGD5CVPPVJ4EQMGKGGH4/" style="color:#6366f1;text-decoration:underline;">DHnet</a> · <a href="https://www.cowcotland.com/news/98837/maj-les-contours-de-la-hausse-des-prix-des-cartes-graphiques-amd-se-precisent-+-10-pour-8-go.html" style="color:#6366f1;text-decoration:underline;">Cowcotland</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Claude Sonnet 4.5, l'IA programmateur autonome et fiable</h2>

<p style="margin:0 0 12px 0;">Le <strong>29 septembre 2025</strong>, Anthropic a lancé <em>Claude Sonnet 4.5</em>, un modèle d'IA codage qualifié de <strong>meilleur au monde</strong>. Il affiche une précision record de <strong>77,2 % au benchmark SWE-bench Verified</strong> et atteint <strong>61,4 % sur OSWorld</strong>, une progression notable par rapport à Sonnet 4 (42,2 %).</p>

<p style="margin:0 0 12px 0;">Sonnet 4.5 excelle dans le codage complexe, gère des sessions de travail continues de plus de <strong>30 heures</strong> et réalise des tâches sophistiquées, comme la création entière d'applications et audits de sécurité. Son taux d'erreur en édition de code est tombé de <strong>9 % à 0 %</strong>, assurant une fiabilité accrue.</p>

<p style="margin:0 0 12px 0;">Parallèlement, Anthropic a enrichi son environnement de développement avec <em>Claude Code 2.0</em>, qui introduit des <em>checkpoints</em> automatiques, une extension IDE native pour VS Code, la gestion de <em>subagents</em> parallèles et des <em>hooks</em> d'automatisation. Ces fonctionnalités facilitent un codage plus rapide, sûr et collaboratif avec l'IA.</p>

<p style="margin:0 0 12px 0;">Cette avancée majeure maintient un prix stable de <strong>3 $ / million de tokens en entrée</strong> et <strong>15 $ en sortie</strong>. Dès à présent, Sonnet 4.5 est intégré dans des outils comme GitHub Copilot, Cursor, ou Replit, adoptés par des géants comme Apple et Meta.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources : </strong><a href="https://www.anthropic.com/news/claude-sonnet-4-5" style="color:#6366f1;text-decoration:underline;">Anthropic</a> · <a href="https://techcrunch.com/2025/09/29/anthropic-launches-claude-sonnet-4-5-its-best-ai-model-for-coding" style="color:#6366f1;text-decoration:underline;">TechCrunch</a> · <a href="https://www.adimeo.com/blog/claude-sonnet-4-5" style="color:#6366f1;text-decoration:underline;">Adimeo</a> · <a href="https://lucasgraphic.com/posts/claude-sonnet-45-tops-coding-charts-with-huge-gains" style="color:#6366f1;text-decoration:underline;">LucasGraphic</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Vous avez appris quelque chose ? Parlez en autour de vous 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— L'équipe PickMyNews</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Gérer mon abonnement</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-3',
    title: 'RH 2025 : Piloter l\'humain à l\'ère du numérique et de l\'agilité',
    date: '05 décembre 2025',
    description: 'Flexibilité agile, IA dans le recrutement, bien-être et inclusion : les nouvelles tendances qui transforment la gestion des ressources humaines.',
    tags: ['Les tendances RH et management'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter du 05/12/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Bonjour Léopold 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">Les évolutions technologiques et managériales transforment profondément la gestion des ressources humaines.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 Au programme</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Flexibilité agile, levier managérial décisif</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>IA intégrée pour révolutionner le recrutement</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Bien-être et inclusion : socles de performance</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1670160028894-a33f937c2a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxSSCUyMDIwMjUlMjAlM0ElMjBQaWxvdGVyJTIwbCUyN2h1bWFpbiUyMCVDMyVBMCUyMGwlMjclQzMlQThyZSUyMG51bSVDMyVBOXJpcXVlfGVufDB8MHx8fDE3NjQ5NTU1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="RH et management"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">L'Agilité Managériale boostée par la flexibilité agile en 2025</h2>

              <p style="margin:0 0 12px 0;">En décembre <strong>2025</strong>, l'adoption des <em>modèles agiles</em> et des <em>solutions flexibles</em> révolutionne le management. L'essor des auto-entrepreneurs, plateforme d'indépendants, et outils innovants comme la <em>prise de note AI</em> traduisent ce changement.</p>

              <p style="margin:0 0 12px 0;">Selon <em>Cadre Dirigeant Magazine</em> (2025), les entreprises françaises misent sur l'auto-entrepreneuriat pour obtenir immédiatement la compétence adaptée sans procédures d'embauche lourdes. Cette souplesse devient un levier managérial pour ajuster rapidement les ressources face à des projets fluctuants.</p>

              <p style="margin:0 0 12px 0;">Par ailleurs, <em>Seedext</em>, spécialiste de la <em>prise de note AI</em>, décloisonne les échanges en réunions. Leur technologie, déployée depuis début décembre <strong>2025</strong>, améliore la capture, la structuration et l'analyse des informations. Elle facilite un pilotage précis et accélère la prise de décision en milieux collaboratifs et agiles.</p>

              <p style="margin:0 0 12px 0;">Enfin, structurer un <em>plan de développement des compétences</em> s'impose comme clé de performance. <em>Expertisme</em> souligne que ce levier optimise la motivation et réduit le turnover, préparant les effectifs à évoluer dans un contexte numérique et agile.</p>

              <p style="margin:0 0 12px 0;">La convergence de ces pratiques souligne une tendance forte : la flexibilité agile devient un levier décisif pour un management moderne, adaptatif et performant.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="http://www.agencewebgram.com/" style="color:#6366f1;text-decoration:underline;">AgenceWebGram</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Comment l'IA redéfinit le recrutement en 2025</h2>

              <p style="margin:0 0 12px 0;">En <strong>2025</strong>, l'IA s'impose désormais comme un moteur clé dans la transformation du recrutement. Des jeunes entrepreneurs de <strong>22 ans</strong> ont notamment innové avec des solutions intégrant <em>tri automatique des CV</em>, <em>matching intelligent</em> et <em>entretiens assistés par IA</em>.</p>

              <p style="margin:0 0 12px 0;">Le groupe Foundever optimise son processus RH grâce à l'<em>intelligence artificielle</em>, notamment pour la <em>présélection</em> des candidats. Ce gain de vitesse est un avantage stratégique notable.</p>

              <p style="margin:0 0 12px 0;">En Afrique, l'entreprise WEBGRAM déploie sa solution <em>SmartTeam</em> auprès de dix-huit pays, couvrant tout le cycle RH : recrutement, formation, gestion des talents. Cette plateforme cloud améliore la rapidité des processus, réduit de <strong>50 %</strong> le temps sur les tâches administratives et assure l'adaptabilité aux contextes locaux.</p>

              <p style="margin:0 0 12px 0;">Cependant, l'intégration massive de l'IA bouleverse les repères professionnels et génère des risques psychosociaux, comme le souligne une étude de novembre <strong>2025</strong>. Parmi ceux-ci : la surveillance algorithmique, la peur du remplacement et la surcharge cognitive. Plus de <strong>70 %</strong> des salariés n'ont bénéficié d'aucune formation à ces outils, amplifiant l'anxiété et le désengagement.</p>

              <p style="margin:0 0 12px 0;">Les directions RH doivent ainsi conjuguer technologie et accompagnement humain, assurer la transparence des algorithmes et instaurer des dispositifs de prévention pour limiter ces risques.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://drh.ma/etiquettes/fatna-abdouh/" style="color:#6366f1;text-decoration:underline;">DRH.ma</a> · <a href="http://www.agencewebgram.com/2025/12/" style="color:#6366f1;text-decoration:underline;">AgenceWebGram</a> · <a href="https://culture-rh.com/" style="color:#6366f1;text-decoration:underline;">Culture RH</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Bien-être et inclusion : les nouveaux piliers de la performance RH</h2>

              <p style="margin:0 0 12px 0;">En <strong>2025</strong>, le bien-être au travail et l'inclusion deviennent des priorités stratégiques pour les entreprises. Les études montrent qu'un environnement de travail sain et inclusif améliore significativement la productivité et réduit l'absentéisme.</p>

              <p style="margin:0 0 12px 0;">Les initiatives de <em>qualité de vie au travail</em> (QVT) se multiplient : espaces de détente, flexibilité horaire, télétravail hybride. Ces mesures répondent aux attentes des nouvelles générations qui placent l'équilibre vie professionnelle/personnelle au cœur de leurs critères de choix.</p>

              <p style="margin:0 0 12px 0;">L'inclusion va au-delà de la diversité : il s'agit de créer un sentiment d'appartenance pour chaque collaborateur. Les entreprises les plus performantes mettent en place des politiques d'<em>équité salariale</em>, de <em>mentorat</em> et de <em>formation continue</em> accessibles à tous.</p>

              <p style="margin:0 0 12px 0;">Les indicateurs clés montrent que les organisations investissant dans le bien-être constatent une réduction de <strong>25 %</strong> du turnover et une augmentation de <strong>20 %</strong> de l'engagement des équipes.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.manager-go.com/ressources-humaines/" style="color:#6366f1;text-decoration:underline;">Manager GO</a> · <a href="https://www.journaldunet.com/management/" style="color:#6366f1;text-decoration:underline;">JDN Management</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Vous avez appris quelque chose ? Parlez en autour de vous 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— L'équipe PickMyNews</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Gérer mon abonnement</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-4',
    title: 'Croissance française 2025 : dynamique modérée malgré secteurs clés solides',
    date: '10 décembre 2025',
    description: 'L\'économie française en 2025 affiche une croissance mesurée marquée par des prévisions divergentes, entre optimisme prudent et réalités économiques contrastées.',
    tags: ['Économie française'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter du 10/12/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Bonjour Matthieu 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">L'économie française en 2025 affiche une croissance mesurée marquée par des prévisions divergentes.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 Au programme</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Croissance française entre 0,8 % et 1,1 %</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Industrie de la défense stimule l'activité</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Dynamisme des services marchands</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1743517126902-d1bdb96e6cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxVbnNwbGFzaCUyMEltYWdlJTIwVGl0bGUlM0ElMjBGYWN0b3J5JTIwU2t5bGluZSUyMEluZHVzdHJpYWwlMjBCdWlsZGluZ3N8ZW58MHwwfHx8MTc2NTM5NTkyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Smoke billows from a tall building in the city."
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
              <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Croissance française 2025 : entre optimisme prudent et frilosité</h2>

<p style="margin:0 0 12px 0;">Début décembre 2025, les dernières projections officielles dessinent une économie française en phase de croissance modérée, oscillant entre <strong>0,8 %</strong> et <strong>1,1 %</strong> pour l'année, mais avec des divergences notables entre l'Insee et la Banque de France.</p>

<p style="margin:0 0 12px 0;">L'Insee, en optimiste mesuré, souligne une progression du <em>PIB</em> de <strong>1,1 %</strong> en 2025, portée notamment par un <em>croissance</em> trimestrielle de <strong>+0,5 %</strong> au troisième trimestre, après <strong>+0,3 %</strong> au précédent. Cette dynamique est attribuée à une demande intérieure un peu plus robuste, malgré un recul de la contribution du commerce extérieur.</p>

<p style="margin:0 0 12px 0;">En parallèle, la Banque de France reste plus prudente, tablant sur une croissance plus modeste à <strong>0,8 %</strong>, avec un ralentissement marqué à <strong>0,2 %</strong> au quatrième trimestre. Le <em>secteur manufacturier</em> demeure un moteur important, mais la croissance globale souffre d'une conjoncture économique fragile et de tensions politiques persistantes.</p>

<p style="margin:0 0 12px 0;">Cette différence de prévisions illustre l'incertitude qui entoure la relance française. Alors que l'Insee anticipe une stabilité à moyen terme, la Banque de France remarque que la reprise pourrait se décaler et s'intensifier davantage à partir de 2026. Le climat économique reste donc suspendu à ces signaux contradictoires, entre résilience industrielle et fragilité politique.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.rexecode.fr/conjoncture-previsions/veille-documentaire/document-de-la-semaine/moroses-previsions-de-croissance-pour-la-france-en-2025-insee-bdf" style="color:#6366f1;">Rexecode</a> · <a href="https://www.lefigaro.fr/conjoncture/la-croissance-francaise-ralentit-a-0-2-du-pib-au-4e-trimestre-selon-la-banque-de-france-20251209" style="color:#6366f1;">Le Figaro</a> · <a href="https://www.insee.fr/fr/statistiques/8662489" style="color:#6366f1;">Insee</a> · <a href="https://www.banque-france.fr/fr/publications-et-statistiques/publications/projections-macroeconomiques-intermediaires-septembre-2025" style="color:#6366f1;">Banque de France</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Défense française : moteur solide, frein économique global fin 2025</h2>

<p style="margin:0 0 12px 0;">Le <strong>9 décembre 2025</strong>, la Banque de France confirmait un ralentissement marqué de la croissance française, avec un PIB progressant de seulement <strong>0,2 %</strong> au quatrième trimestre. Cette décélération s'inscrit dans un contexte plus large de fragilité économique.</p>

<p style="margin:0 0 12px 0;">Pourtant, l'industrie de la <em>défense</em> reste un pilier robuste. Avec un budget colossal de <strong>413 milliards d'euros</strong> prévu sur la période 2024-2030, la <em>LPM</em> (Loi de Programmation Militaire) agit comme un levier stratégique majeur. Chaque euro investi génère entre <strong>1,27 et 1,68 euros</strong> de richesse, dynamisant l'activité industrielle, notamment dans la production d'armes et de munitions, et préservant des milliers d'emplois qualifiés.</p>

<p style="margin:0 0 12px 0;">Cette impulsion bénéficie aussi à l'innovation et à la productivité globale. Mais, malgré cet effet multiplicateur puissant, la croissance économique française peine à se maintenir au rythme attendu. Selon l'<em>Insee</em>, ces signes de ralentissement révèlent la faiblesse des autres moteurs économiques, entraînant une croissance insuffisante pour compenser les défis structurels.</p>

<p style="margin:0 0 12px 0;">En somme, si l'industrie de la défense revigore certains pans de l'économie, elle n'empêche pas une dynamique de croissance globalement ralentie en fin d'année.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.latribune.fr/article/economie/37309748954301/lindustrie-de-la-defense-dope-lactivite-mais-la-croissance-ralentit" style="color:#6366f1;">Latribune.fr</a> · <a href="http://www.defense.gouv.fr/actualites/defense-levier-strategique-leconomie-francaise" style="color:#6366f1;">Défense.gouv.fr</a> · <a href="https://www.lefigaro.fr/conjoncture/la-croissance-francaise-ralentit-a-0-2-du-pib-au-4e-trimestre-selon-la-banque-de-france-20251209" style="color:#6366f1;">Le Figaro</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Emploi salarié stable malgré glissements dans le privé début novembre 2025</h2>

<p style="margin:0 0 12px 0;">Au troisième trimestre 2025, l'<em>emploi salarié</em> en France présente une stabilité relative. Selon l'<em>Insee</em> (6 novembre), le secteur public connaît une <em>légère hausse</em> tandis que le privé accuse une <em>baisse modérée</em> de 0,3 %, soit près de <strong>60 600 emplois perdus</strong>. Cette tendance s'inscrit dans un contexte plus large, où l'emploi privé recule depuis quatre trimestres consécutifs, totalisant une baisse annuelle de <strong>112 100 postes</strong>.</p>

<p style="margin:0 0 12px 0;">Le repli intervient principalement dans les <em>contrats d'alternance</em>, qui contribuent aux deux tiers de cette diminution. Cela pèse sur des secteurs divers, avec une <em>activité manufacturière en repli</em> contrastant avec un <em>dynamisme croissant des services marchands</em>, un segment où les emplois ont connu un regain, notamment grâce à la prise en compte tardive de déclarations (<em>+30 900 emplois</em> dans le tertiaire marchand hors intérim).</p>

<p style="margin:0 0 12px 0;">Cette dualité reflète une économie à la fois confrontée à des fragilités structurelles et capable de s'appuyer sur le secteur des services pour absorber une partie des pertes. Le marché du travail français navigue ainsi entre fragilité du tissu industriel et résilience du tertiaire, enjeu clé pour les politiques d'emploi dans les mois à venir.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.insee.fr/fr/statistiques/8664273" style="color:#6366f1;">Insee</a> · <a href="https://www.rexecode.fr/conjoncture-previsions/synthese-conjoncturelle-hebdo/l-emploi-salarie-recule-en-france-au-3eme-trimestre" style="color:#6366f1;">Rexecode</a> · <a href="https://dares.travail-emploi.gouv.fr/donnees/lemploi-salarie" style="color:#6366f1;">DARES</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Vous avez appris quelque chose ? Parlez en autour de vous 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— L'équipe PickMyNews</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Gérer mon abonnement</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-5',
    title: 'Championnat 2025 : Paris et Cergy en pleine effervescence e-sport',
    date: '05 décembre 2025',
    description: 'TFT Paris Open, Coupe du Monde Esport et Olympiades E-Sport à Cergy : l\'actualité des compétitions gaming.',
    tags: ['Compétitions e-sport'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter du 05/12/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Bonjour Michael 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">Les compétitions majeures de fin d'année 2025 illustrent la montée en puissance de l'e-sport stratégique.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 Au programme</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>TFT Paris Open : Duel des Maîtres</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Coupe du Monde Esport 2025</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Olympiades E-Sport : L'Arène de Cergy</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                   alt="Newsletter"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
              <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">TFT Paris Open : Le duel des maîtres</h2>

              <p style="margin:0 0 12px 0;">Le <strong>3 décembre 2025</strong>, Paris a vibré au rythme du <em>TFT Paris Open</em>, la rencontre phare du tournoi de <em>Teamfight Tactics</em> ce trimestre. Ce <em>championnat e-sport</em> a réuni les meilleurs stratèges du roster mondial.</p>

              <p style="margin:0 0 12px 0;">La compétition a opposé <strong>40 joueurs</strong> venus de plus de <strong>15 pays</strong>, avec un prizepool total de <strong>150 000 €</strong>, dont <strong>50 000 €</strong> pour le vainqueur. Le format comprenait plusieurs rondes éliminatoires avant la grande finale en direct, attirant un public en ligne de plus de <strong>250 000 spectateurs</strong>.</p>

              <p style="margin:0 0 12px 0;">Le duel s'est concentré sur deux maîtres incontestés, reconnus pour leur maîtrise avancée des <em>synergies</em> et des <em>mécaniques de jeu</em>. Leur affrontement a mis en lumière l'importance d'une parfaite gestion des <em>unités</em> et des <em>items</em> sous pression.</p>

              <p style="margin:0 0 12px 0;">Cet événement, soutenu par Riot Games et diffusé en streaming sur Twitch, confirme l'essor fulgurant de <em>l'e-sport stratégique</em>. Paris devient ainsi un site incontournable, renforçant la visibilité du <em>TFT</em> dans le circuit compétitif.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://eu.leagueoflegends.com/en/news/esports/tft/tft-paris-open-analysis" style="color:#6366f1;text-decoration:underline;">Riot Games</a> · <a href="https://www.twitch.tv/teamfighttactics" style="color:#6366f1;text-decoration:underline;">Twitch</a> · <a href="https://teamfighttactics.gg/news/paris-open-2025-recap" style="color:#6366f1;text-decoration:underline;">Teamfight Tactics Official</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Yandex et MOUZ en lice pour le titre à la Coupe du Monde Esports 2025</h2>

              <p style="margin:0 0 12px 0;">Le <strong>5 décembre 2025</strong>, <em>Team Yandex</em> et <em>MOUZ</em> ont accédé aux demi-finales du tournoi <em>BLAST Slam V</em> de Dota 2 à <em>Chengdu, Chine</em>.</p>

              <p style="margin:0 0 12px 0;">L'événement a débuté le <strong>25 novembre</strong> avec 12 équipes en compétition pour un prize pool total de <strong>1 million de $</strong>. Yandex a remporté un retour spectaculaire 2-1 contre OG, tandis que MOUZ a dominé Natus Vincere en deux matchs.</p>

              <p style="margin:0 0 12px 0;">Lors de la rencontre décisive, <em>Alimzhan "watson" Islambekov</em> de Yandex a affiché un remarquable ratio <strong>12-1-10</strong> en KDA. Les victoires de MOUZ s'illustrent par des performances notables telles que les sept kills de Remco "Crystallis" Arets et les 15 kills de Daniyal "yamich" Lazebnyy, meilleur marqueur de son équipe.</p>

              <p style="margin:0 0 12px 0;">Yandex affrontera <em>Team Falcons</em>, tandis que MOUZ défiera <em>Tundra Esports</em> lors des demi-finales du samedi. Les gagnants accéderont à la grande finale du dimanche, avec un champion recevant <strong>300 000 $</strong> de prize money plus <strong>100 000 $</strong> de revenus d'équipe.</p>

              <p style="margin:0 0 12px 0;">Les autres répartitions incluent OG et Natus Vincere avec <strong>35 000 $</strong> chacun plus <strong>15 000 $</strong>, tandis que les équipes classées de la 7e à la 10e place touchent respectivement <strong>22 500 $</strong> et <strong>6 250 $</strong>.</p>

              <p style="margin:0 0 12px 0;">L'événement met en lumière la compétition acharnée dans <em>12 disciplines esports</em> lors de la Coupe du Monde 2025, perpétuant son statut de tournoi mondial de référence.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://deadspin.com/yandex-mouz-advance-to-blast-slam-v-semifinals/" style="color:#6366f1;text-decoration:underline;">Deadspin</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Olympiades E-Sport : l'Arène de Cergy monte en puissance</h2>

              <p style="margin:0 0 12px 0;">Le <strong>29 novembre 2025</strong>, le lancement officiel des <em>Olympiades E-Sport</em> à <em>L'Arène de Cergy</em> marque un tournant majeur dans la scène compétitive française du jeu vidéo.</p>

              <p style="margin:0 0 12px 0;">L'événement regroupe plus de <strong>300 joueurs</strong> provenant de toute la région Île-de-France, avec des tournois en <em>League of Legends</em>, <em>Counter-Strike: Global Offensive</em> et <em>FIFA 25</em>. Les phases qualificatives, sur plusieurs jours, ont attiré une audience en ligne dépassant les <strong>20 000 spectateurs</strong>, confirmant un engouement croissant.</p>

              <p style="margin:0 0 12px 0;">Cette édition 2025 voit une dotation totale en prix de <strong>50 000 €</strong>, une augmentation de <strong>25%</strong> par rapport à 2024. Les organisateurs, en partenariat avec la mairie de Cergy et plusieurs sponsors technologiques, misent sur l'infrastructure de <em>L'Arène</em>, capable d'accueillir jusqu'à <strong>1 000 spectateurs en présentiel</strong> et équipée du meilleur matériel pour diffuser des matchs en <em>streaming 4K</em>.</p>

              <p style="margin:0 0 12px 0;">Plusieurs équipes professionnelles françaises, dont les <em>Paris Eternal</em> et les <em>Team Vitality</em>, ont participé aux sessions d'exhibition, témoignant du prestige croissant de cette compétition régionale.</p>

              <p style="margin:0 0 12px 0;">Avec ses formats innovants et une forte intégration communautaire, les <em>Olympiades E-Sport de Cergy</em> s'imposent comme un rendez-vous incontournable pour les passionnés d'e-sport en fin d'année 2025.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.lemonde.fr" style="color:#6366f1;text-decoration:underline;">Le Monde</a> · <a href="https://www.lequipe.fr" style="color:#6366f1;text-decoration:underline;">L'Équipe</a> · <a href="https://franceesports.fr" style="color:#6366f1;text-decoration:underline;">France Esports</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Vous avez appris quelque chose ? Parlez en autour de vous 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— L'équipe PickMyNews</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Gérer mon abonnement</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
];

// =============================================================================
// DONNÉES DES NEWSLETTERS - ANGLAIS
// =============================================================================

const NEWSLETTER_EXAMPLES_EN: NewsletterExample[] = [
  {
    id: 'newsletter-1',
    title: 'Royal Armed Forces 2025: Chergui, African Lion & APORA',
    date: 'December 10, 2025',
    description: 'In 2025, military exercises and Franco-Moroccan and US-Moroccan strategic partnerships highlight the growing strength of the Royal Armed Forces.',
    tags: ['Royal Armed Forces'],
    html: `
  <!-- WRAPPER -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">
                Newsletter of 12/10/2025
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Hello Veronique 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">In 2025, military exercises and Franco-Moroccan and US-Moroccan strategic partnerships highlight the growing strength of the Royal Armed Forces.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 In this issue</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Chergui 2025 tests Franco-Moroccan interoperability</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>African Lion 2026 in final planning phase</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>APORA 2025: FAR and AFRICOM cooperate for health security</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
              <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Chergui 2025, Franco-Moroccan interoperability laboratory in the Atlas</h2>

<p style="margin:0 0 12px 0;">On <strong>October 3, 2025</strong>, the <em>Chergui 2025</em> military exercise brought together units from the <em>Moroccan Royal Armed Forces</em> and the French Army in the Errachidia desert. Based on a scenario simulating an aggression against Morocco's territorial integrity, this three-week training challenged the coordination and joint action capacity of both armies.</p>

<p style="margin:0 0 12px 0;">Structured in two phases, Chergui combined a <em>Command Post Exercise</em> (CPX) for joint planning and management, with a <em>Live Exercise</em> (LIVEX) integrating tactical maneuvers combining ground and air forces. Soldiers thus operated in a demanding desert environment, between Atlas reliefs and difficult weather conditions.</p>

<p style="margin:0 0 12px 0;">Equipment-wise, the cooperation relied on emblematic assets: Moroccan <strong>M1A2 Abrams</strong> tanks, French <strong>Tiger</strong>, <strong>Gazelle</strong> and <strong>NH90</strong> helicopters, demonstrating the tactical complementarity of both armies. More than just a demonstration, Chergui 2025 aims to strengthen skills and improve response to security challenges in the Maghreb and Sahel.</p>

<p style="margin:0 0 12px 0;">This annual event illustrates the strategic will of Paris and Rabat to preserve regional stability, particularly scrutinizing challenges related to mastering desert environments. The exercise confirms a solid and pragmatic military cooperation, key in an unstable international context.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.defense.gouv.fr/terre/actualites/exercice-chergui-2025-linteroperabilite-franco-marocaine-testee-desert" style="color:#6366f1;">defense.gouv.fr</a> · <a href="https://medias24.com/2025/10/06/exercice-chergui-2025-les-armees-marocaine-et-francaise-a-lepreuve-du-desert/" style="color:#6366f1;">medias24.com</a> · <a href="https://lecollimateur.ma/195919" style="color:#6366f1;">lecollimateur.ma</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">African Lion 2026: final stretch before Africa's largest military exercise</h2>

<p style="margin:0 0 12px 0;">From <strong>December 8 to 12, 2025</strong>, the main planning meeting for the <em>African Lion 2026</em> exercise was held in Agadir, focused on coordinating operational and logistical phases. Scheduled from <strong>April 20 to May 8, 2026</strong> in the Agadir, Tan Tan, Taroudant, Kenitra and Ben Guerir regions, this annual exercise brings together Moroccan and American armed forces.</p>

<p style="margin:0 0 12px 0;">More than <strong>40,000 military personnel</strong> have participated in the last five editions, making African Lion the largest military event in Africa. The 2026 edition aims to strengthen interoperability of armies in air, land, maritime and special operations domains. The goal is also to increase operational readiness for combined and joint interventions.</p>

<p style="margin:0 0 12px 0;">This consolidated strategic partnership is part of a dynamic to deepen bilateral cooperation between the United States and Morocco. It is accompanied by initiatives like <em>Atlas Handshake</em>, focused on maritime cooperation, demonstrating increased regional and international anchoring in security and stability of the region.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://lematin.ma/nation/reunion-de-planification-principale-de-lexercice-african-lion-2026/318105" style="color:#6366f1;">lematin.ma</a> · <a href="https://fr.le360.ma/politique/african-lion-2026-le-compte-a-rebours-est-lance_OKXI6FFXWRGG3HHR5YWUOT7FGM/" style="color:#6366f1;">le360.ma</a> · <a href="https://medias24.com/2025/12/09/atlas-handshake-le-maroc-et-les-etats-unis-renforcent-leur-cooperation-maritime-1591726/" style="color:#6366f1;">medias24.com</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">FAR and AFRICOM join forces to strengthen health security in Africa during APORA 2025</h2>

<p style="margin:0 0 12px 0;">From <strong>December 8 to 12, 2025</strong>, Rabat hosted the <em>APORA 2025</em> workshop, conducted by the <em>Royal Armed Forces</em> (FAR) in collaboration with the United States <em>Africa Command</em> (AFRICOM). This event gathered representatives from <strong>38 African nations</strong>, strengthening a continental alliance against emerging epidemics.</p>

<p style="margin:0 0 12px 0;">Founded in 2014 by AFRICOM in Ghana at the heart of the Ebola crisis, APORA aims to merge public health initiatives with military preparedness. The workshop focused on operationalizing civil-military collaboration to anticipate, detect and rapidly respond to infectious disease outbreaks.</p>

<p style="margin:0 0 12px 0;">Participants deepened topics such as <em>epidemiological surveillance</em>, <em>crisis communication</em> and the role of climate change in health risks. This joint effort also emphasized strengthening national capacities through expertise sharing and coordinated response strategies.</p>

<p style="margin:0 0 12px 0;">Beyond health, this event reflects a broader vision carried by King <strong>Mohammed VI</strong> of Morocco, aiming to weave together security and public well-being. By aligning military discipline and civilian health systems, the FAR-AFRICOM partnership establishes a model of resilient and proactive epidemic management across Africa.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://lematin.ma/nation/les-far-accueillent-latelier-apora-2025-en-partenariat-avec-lafricom/318038" style="color:#6366f1;">Le Matin</a> · <a href="https://linformation.ma/news/politique/securite-sanitaire-les-far-accueillent-l-atelier-apora-2025-en-partenariat-avec-l-africom/61849" style="color:#6366f1;">L'Information</a> · <a href="https://www.kaweru.com/politique-societe/2025/12/09/rabat-accueille-latelier-apora-2025-pour-renforcer-la-securite-sanitaire-en-afrique/" style="color:#6366f1;">Kaweru</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Did you learn something? Share it around you 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— The PickMyNews Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Manage my subscription</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-2',
    title: 'HP cuts jobs as AI revolutionizes RAM and coding',
    date: 'December 5, 2025',
    description: 'AI is disrupting the tech industry: HP cuts up to 6,000 jobs, RAM prices soar (+50%), and Anthropic launches Claude Sonnet 4.5, the most advanced AI coder.',
    tags: ['AI News'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter of 12/05/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Hello Sophie 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">Artificial intelligence is disrupting the technology industry through major strategic decisions and spectacular innovations.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 In this issue</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>HP to cut up to 6,000 jobs due to AI</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>RAM crisis: AI drives prices up</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Anthropic launches Claude Sonnet 4.5</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1681748179531-f3a227764721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxBY3R1JTIwSUElMjAlM0ElMjBMZXMlMjByb3VhZ2VzJTIwaW52aXNpYmxlcyUyMGRlJTIwbGElMjByJUMzJUE5dm9sdXRpb258ZW58MHwwfHx8MTc2NDk1NTEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="AI Revolution"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
              <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">HP to cut up to 6,000 jobs to integrate AI</h2>

<p style="margin:0 0 12px 0;">On <strong>November 25, 2025</strong>, American giant HP announced a plan to cut <strong>4,000 to 6,000</strong> positions by end of <strong>2028</strong>. This reduction corresponds to more than <strong>10%</strong> of its <strong>58,000</strong> employees worldwide, a first for a major company establishing a clear link between <em>artificial intelligence</em> and a drastic workforce reduction policy.</p>

<p style="margin:0 0 12px 0;">HP details that this transformation is part of its intensified <em>AI</em> adoption plan to improve productivity, product innovation and customer satisfaction. The goal is to generate approximately <strong>$1 billion</strong> in annual savings by the end of the period. However, these gains will require restructuring costs estimated at <strong>$650 million</strong>, including <strong>$250 million</strong> for fiscal year 2026.</p>

<p style="margin:0 0 12px 0;">This announcement caused a drop of about <strong>6%</strong> in HP stock on Wall Street, combined with disappointing financial forecasts. HP's plan illustrates the coming challenges of generative <em>AI</em> in the industrial sector, where the elimination of technical jobs could be offset by the creation of new roles, but with an uncertain transition.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.01net.com/" style="color:#6366f1;text-decoration:underline;">01net</a> · <a href="https://www.la-croix.com/" style="color:#6366f1;text-decoration:underline;">La Croix</a> · <a href="https://www.tunisienumerique.com/" style="color:#6366f1;text-decoration:underline;">Tunisie Numérique</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">AI causes RAM prices to explode in December 2025</h2>

<p style="margin:0 0 12px 0;">From early December 2025, the <em>RAM crisis</em> reached a critical point. Memory stick prices jumped by <strong>50%</strong> in just a few days.</p>

<p style="margin:0 0 12px 0;">For some high-end references, prices have even more than doubled, multiplied by <strong>3.35</strong> in a few months. Major increases that translate into cumulative hikes that can reach <strong>+171.8%</strong> over one year.</p>

<p style="margin:0 0 12px 0;">At the origin, the soaring demand from <em>artificial intelligence</em> companies is absorbing all global <em>DRAM</em> production. Equipment manufacturers prefer to invest in AI-specific memory, neglecting standard orders for computers, smartphones and consoles.</p>

<p style="margin:0 0 12px 0;">This reorientation creates an unprecedented phenomenon, striking a central component of consumer electronics. Consumers risk seeing the price of their devices climb significantly from 2026, due to lack of cost reduction.</p>

<p style="margin:0 0 12px 0;">For example, the cost of <em>RAM</em> on an entry-level smartphone, usually a few dozen euros, could multiply by two or three.</p>

<p style="margin:0 0 12px 0;">The shortage of <em>RAM</em> linked to the rise of AI, already felt in the retail market, now threatens the entire chain of technological products.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.franceinfo.fr/internet/intelligence-artificielle/crise-de-la-ram-pourquoi-le-prix-des-ordinateurs-smartphones-ou-consoles-risque-de-flamber-a-cause-de-l-ia_7656292.html" style="color:#6366f1;text-decoration:underline;">France Info</a> · <a href="https://www.dhnet.be/" style="color:#6366f1;text-decoration:underline;">DHnet</a> · <a href="https://www.cowcotland.com/" style="color:#6366f1;text-decoration:underline;">Cowcotland</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Claude Sonnet 4.5, the autonomous and reliable AI programmer</h2>

<p style="margin:0 0 12px 0;">On <strong>September 29, 2025</strong>, Anthropic launched <em>Claude Sonnet 4.5</em>, an AI coding model described as the <strong>best in the world</strong>. It displays a record accuracy of <strong>77.2% on the SWE-bench Verified benchmark</strong> and reaches <strong>61.4% on OSWorld</strong>, a notable improvement from Sonnet 4 (42.2%).</p>

<p style="margin:0 0 12px 0;">Sonnet 4.5 excels at complex coding, handles continuous work sessions of more than <strong>30 hours</strong> and performs sophisticated tasks, such as entire application creation and security audits. Its code editing error rate dropped from <strong>9% to 0%</strong>, ensuring increased reliability.</p>

<p style="margin:0 0 12px 0;">Simultaneously, Anthropic enhanced its development environment with <em>Claude Code 2.0</em>, which introduces automatic <em>checkpoints</em>, a native IDE extension for VS Code, parallel <em>subagent</em> management and automation <em>hooks</em>. These features facilitate faster, safer and more collaborative coding with AI.</p>

<p style="margin:0 0 12px 0;">This major advance maintains a stable price of <strong>$3/million input tokens</strong> and <strong>$15 output</strong>. As of now, Sonnet 4.5 is integrated into tools like GitHub Copilot, Cursor, or Replit, adopted by giants like Apple and Meta.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.anthropic.com/news/claude-sonnet-4-5" style="color:#6366f1;text-decoration:underline;">Anthropic</a> · <a href="https://techcrunch.com/2025/09/29/anthropic-launches-claude-sonnet-4-5-its-best-ai-model-for-coding" style="color:#6366f1;text-decoration:underline;">TechCrunch</a> · <a href="https://www.adimeo.com/blog/claude-sonnet-4-5" style="color:#6366f1;text-decoration:underline;">Adimeo</a> · <a href="https://lucasgraphic.com/posts/claude-sonnet-45-tops-coding-charts-with-huge-gains" style="color:#6366f1;text-decoration:underline;">LucasGraphic</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Did you learn something? Share it around you 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— The PickMyNews Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Manage my subscription</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-3',
    title: 'HR 2025: Leading people in the digital and agile era',
    date: 'December 5, 2025',
    description: 'Agile flexibility, AI in recruitment, well-being and inclusion: the new trends transforming human resources management.',
    tags: ['HR Trends'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter - 12/05/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Hello Leopold 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">Technological and managerial developments are profoundly transforming human resources management.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 In this issue</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Agile flexibility, a decisive management lever</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>AI integrated to revolutionize recruitment</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Well-being and inclusion: foundations of performance</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1670160028894-a33f937c2a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxSSCUyMDIwMjUlMjAlM0ElMjBQaWxvdGVyJTIwbCUyN2h1bWFpbiUyMCVDMyVBMCUyMGwlMjclQzMlQThyZSUyMG51bSVDMyVBOXJpcXVlfGVufDB8MHx8fDE3NjQ5NTU1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="HR and management"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Managerial Agility boosted by agile flexibility in 2025</h2>

              <p style="margin:0 0 12px 0;">In December <strong>2025</strong>, the adoption of <em>agile models</em> and <em>flexible solutions</em> is revolutionizing management. The rise of self-employment, freelancer platforms, and innovative tools like <em>AI note-taking</em> reflect this shift.</p>

              <p style="margin:0 0 12px 0;">According to <em>Cadre Dirigeant Magazine</em> (2025), French companies are leveraging self-employment to immediately access the right skills without cumbersome hiring procedures. This flexibility becomes a management lever to quickly adjust resources for fluctuating projects.</p>

              <p style="margin:0 0 12px 0;">Furthermore, <em>Seedext</em>, an <em>AI note-taking</em> specialist, breaks down barriers in meetings. Their technology, deployed since early December <strong>2025</strong>, improves information capture, structuring, and analysis. It enables precise steering and accelerates decision-making in collaborative and agile environments.</p>

              <p style="margin:0 0 12px 0;">Finally, structuring a <em>skills development plan</em> is essential for performance. <em>Expertisme</em> emphasizes that this lever optimizes motivation and reduces turnover, preparing teams to evolve in a digital and agile context.</p>

              <p style="margin:0 0 12px 0;">The convergence of these practices highlights a strong trend: agile flexibility is becoming a decisive lever for modern, adaptive, and high-performing management.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="http://www.agencewebgram.com/" style="color:#6366f1;text-decoration:underline;">AgenceWebGram</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">How AI is redefining recruitment in 2025</h2>

              <p style="margin:0 0 12px 0;">In <strong>2025</strong>, AI has established itself as a key driver in transforming recruitment. Young entrepreneurs aged <strong>22</strong> have notably innovated with solutions integrating <em>automated CV screening</em>, <em>intelligent matching</em>, and <em>AI-assisted interviews</em>.</p>

              <p style="margin:0 0 12px 0;">The Foundever group optimizes its HR processes through <em>artificial intelligence</em>, particularly for candidate <em>pre-selection</em>. This speed gain is a notable strategic advantage.</p>

              <p style="margin:0 0 12px 0;">In Africa, WEBGRAM deploys its <em>SmartTeam</em> solution across eighteen countries, covering the entire HR cycle: recruitment, training, talent management. This cloud platform improves process speed, reduces administrative tasks by <strong>50%</strong>, and ensures adaptability to local contexts.</p>

              <p style="margin:0 0 12px 0;">However, the massive integration of AI disrupts professional benchmarks and generates psychosocial risks, as highlighted by a November <strong>2025</strong> study. These include: algorithmic surveillance, fear of replacement, and cognitive overload. Over <strong>70%</strong> of employees have received no training on these tools, amplifying anxiety and disengagement.</p>

              <p style="margin:0 0 12px 0;">HR departments must therefore combine technology with human support, ensure algorithm transparency, and establish prevention measures to limit these risks.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://drh.ma/etiquettes/fatna-abdouh/" style="color:#6366f1;text-decoration:underline;">DRH.ma</a> · <a href="http://www.agencewebgram.com/2025/12/" style="color:#6366f1;text-decoration:underline;">AgenceWebGram</a> · <a href="https://culture-rh.com/" style="color:#6366f1;text-decoration:underline;">Culture RH</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Well-being and inclusion: the new pillars of HR performance</h2>

              <p style="margin:0 0 12px 0;">In <strong>2025</strong>, workplace well-being and inclusion have become strategic priorities for companies. Studies show that a healthy and inclusive work environment significantly improves productivity and reduces absenteeism.</p>

              <p style="margin:0 0 12px 0;"><em>Quality of Work Life</em> (QWL) initiatives are multiplying: relaxation spaces, flexible hours, hybrid remote work. These measures meet the expectations of new generations who place work-life balance at the heart of their selection criteria.</p>

              <p style="margin:0 0 12px 0;">Inclusion goes beyond diversity: it's about creating a sense of belonging for every employee. The highest-performing companies implement <em>pay equity</em>, <em>mentoring</em>, and <em>continuous training</em> policies accessible to all.</p>

              <p style="margin:0 0 12px 0;">Key indicators show that organizations investing in well-being see a <strong>25%</strong> reduction in turnover and a <strong>20%</strong> increase in team engagement.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.manager-go.com/ressources-humaines/" style="color:#6366f1;text-decoration:underline;">Manager GO</a> · <a href="https://www.journaldunet.com/management/" style="color:#6366f1;text-decoration:underline;">JDN Management</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Did you learn something? Share it around you 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— The PickMyNews Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Manage my subscription</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-4',
    title: 'French growth 2025: moderate momentum despite solid key sectors',
    date: 'December 10, 2025',
    description: 'The French economy in 2025 shows measured growth marked by divergent forecasts, between cautious optimism and contrasting economic realities.',
    tags: ['French Economy'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter - 12/10/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Hello Matthew 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">The French economy in 2025 shows measured growth marked by divergent forecasts.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 In this issue</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>French growth between 0.8% and 1.1%</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Defense industry boosts activity</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Market services dynamism</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1743517126902-d1bdb96e6cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxVbnNwbGFzaCUyMEltYWdlJTIwVGl0bGUlM0ElMjBGYWN0b3J5JTIwU2t5bGluZSUyMEluZHVzdHJpYWwlMjBCdWlsZGluZ3N8ZW58MHwwfHx8MTc2NTM5NTkyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Industrial factory skyline"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">French growth 2025: between cautious optimism and hesitancy</h2>

<p style="margin:0 0 12px 0;">In early December 2025, the latest official projections outline a French economy in a phase of moderate growth, oscillating between <strong>0.8%</strong> and <strong>1.1%</strong> for the year, but with notable divergences between INSEE and Banque de France.</p>

<p style="margin:0 0 12px 0;">INSEE, cautiously optimistic, highlights a <em>GDP</em> progression of <strong>1.1%</strong> in 2025, driven notably by quarterly <em>growth</em> of <strong>+0.5%</strong> in the third quarter, after <strong>+0.3%</strong> in the previous one. This dynamic is attributed to a slightly more robust domestic demand, despite a decline in the contribution of foreign trade.</p>

<p style="margin:0 0 12px 0;">Meanwhile, Banque de France remains more cautious, forecasting more modest growth at <strong>0.8%</strong>, with a marked slowdown to <strong>0.2%</strong> in the fourth quarter. The <em>manufacturing sector</em> remains an important driver, but overall growth suffers from a fragile economic environment and persistent political tensions.</p>

<p style="margin:0 0 12px 0;">This difference in forecasts illustrates the uncertainty surrounding the French recovery. While INSEE anticipates medium-term stability, Banque de France notes that the recovery could shift and intensify further from 2026 onwards. The economic climate thus remains suspended on these contradictory signals, between industrial resilience and political fragility.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.rexecode.fr/conjoncture-previsions/veille-documentaire/document-de-la-semaine/moroses-previsions-de-croissance-pour-la-france-en-2025-insee-bdf" style="color:#6366f1;">Rexecode</a> · <a href="https://www.lefigaro.fr/conjoncture/la-croissance-francaise-ralentit-a-0-2-du-pib-au-4e-trimestre-selon-la-banque-de-france-20251209" style="color:#6366f1;">Le Figaro</a> · <a href="https://www.insee.fr/fr/statistiques/8662489" style="color:#6366f1;">INSEE</a> · <a href="https://www.banque-france.fr/fr/publications-et-statistiques/publications/projections-macroeconomiques-intermediaires-septembre-2025" style="color:#6366f1;">Banque de France</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">French Defense: solid engine, global economic brake late 2025</h2>

<p style="margin:0 0 12px 0;">On <strong>December 9, 2025</strong>, Banque de France confirmed a marked slowdown in French growth, with GDP progressing by only <strong>0.2%</strong> in the fourth quarter. This deceleration is part of a broader context of economic fragility.</p>

<p style="margin:0 0 12px 0;">Yet, the <em>defense</em> industry remains a robust pillar. With a colossal budget of <strong>413 billion euros</strong> planned for the 2024-2030 period, the <em>LPM</em> (Military Programming Law) acts as a major strategic lever. Each euro invested generates between <strong>1.27 and 1.68 euros</strong> of wealth, boosting industrial activity, particularly in weapons and ammunition production, and preserving thousands of qualified jobs.</p>

<p style="margin:0 0 12px 0;">This impetus also benefits innovation and overall productivity. But, despite this powerful multiplier effect, French economic growth struggles to maintain the expected pace. According to <em>INSEE</em>, these signs of slowdown reveal the weakness of other economic drivers, leading to insufficient growth to offset structural challenges.</p>

<p style="margin:0 0 12px 0;">In short, while the defense industry revitalizes certain parts of the economy, it does not prevent an overall slowed growth dynamic at year-end.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.latribune.fr/article/economie/37309748954301/lindustrie-de-la-defense-dope-lactivite-mais-la-croissance-ralentit" style="color:#6366f1;">La Tribune</a> · <a href="http://www.defense.gouv.fr/actualites/defense-levier-strategique-leconomie-francaise" style="color:#6366f1;">Defense.gouv.fr</a> · <a href="https://www.lefigaro.fr/conjoncture/la-croissance-francaise-ralentit-a-0-2-du-pib-au-4e-trimestre-selon-la-banque-de-france-20251209" style="color:#6366f1;">Le Figaro</a></p>

<div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

<h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Stable salaried employment despite shifts in private sector early November 2025</h2>

<p style="margin:0 0 12px 0;">In the third quarter of 2025, <em>salaried employment</em> in France shows relative stability. According to <em>INSEE</em> (November 6), the public sector is experiencing a <em>slight increase</em> while the private sector shows a <em>moderate decline</em> of 0.3%, representing nearly <strong>60,600 jobs lost</strong>. This trend is part of a broader context where private employment has been declining for four consecutive quarters, totaling an annual decrease of <strong>112,100 positions</strong>.</p>

<p style="margin:0 0 12px 0;">The decline occurs mainly in <em>apprenticeship contracts</em>, which account for two-thirds of this reduction. This weighs on various sectors, with <em>manufacturing activity in decline</em> contrasting with <em>growing dynamism in market services</em>, a segment where jobs have experienced a resurgence, notably due to late declaration processing (<em>+30,900 jobs</em> in the market tertiary sector excluding temporary work).</p>

<p style="margin:0 0 12px 0;">This duality reflects an economy both confronted with structural weaknesses and capable of relying on the service sector to absorb part of the losses. The French job market thus navigates between industrial fabric fragility and tertiary resilience, a key challenge for employment policies in the coming months.</p>

<p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.insee.fr/fr/statistiques/8664273" style="color:#6366f1;">INSEE</a> · <a href="https://www.rexecode.fr/conjoncture-previsions/synthese-conjoncturelle-hebdo/l-emploi-salarie-recule-en-france-au-3eme-trimestre" style="color:#6366f1;">Rexecode</a> · <a href="https://dares.travail-emploi.gouv.fr/donnees/lemploi-salarie" style="color:#6366f1;">DARES</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Did you learn something? Share it around you 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— The PickMyNews Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Manage my subscription</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-5',
    title: 'Championship 2025: Paris and Cergy in full e-sport excitement',
    date: 'December 5, 2025',
    description: 'TFT Paris Open, Esport World Cup and E-Sport Olympics in Cergy: the latest gaming competition news.',
    tags: ['E-sport Competitions'],
    html: `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">Newsletter - 12/05/2025</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 8px 32px;text-align:center;">
              <h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">PickMyNews</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">Hello Michael 👋</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">The major competitions at the end of 2025 illustrate the rise of strategic e-sport.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">📌 In this issue</p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>TFT Paris Open: Masters Duel</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Esport World Cup 2025</td></tr>
                      <tr><td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;"><span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>E-Sport Olympics: The Cergy Arena</td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                   alt="E-sport competition"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
          <!-- SEPARATOR -->
          <tr>
            <td style="padding:0 32px;">
              <div style="margin:12px 0 0 0;border-top:1px solid #E5E7EB;"></div>
            </td>
          </tr>
          <!-- SECTIONS -->
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">TFT Paris Open: The Masters Duel</h2>

              <p style="margin:0 0 12px 0;">On <strong>December 3, 2025</strong>, Paris vibrated to the rhythm of the <em>TFT Paris Open</em>, the flagship <em>Teamfight Tactics</em> tournament event this quarter. This <em>e-sport championship</em> brought together the best strategists from the global roster.</p>

              <p style="margin:0 0 12px 0;">The competition featured <strong>40 players</strong> from over <strong>15 countries</strong>, with a total prize pool of <strong>€150,000</strong>, including <strong>€50,000</strong> for the winner. The format included several elimination rounds before the live grand finale, attracting an online audience of over <strong>250,000 viewers</strong>.</p>

              <p style="margin:0 0 12px 0;">The duel focused on two undisputed masters, recognized for their advanced mastery of <em>synergies</em> and <em>game mechanics</em>. Their confrontation highlighted the importance of perfect <em>unit</em> and <em>item</em> management under pressure.</p>

              <p style="margin:0 0 12px 0;">This event, supported by Riot Games and streamed on Twitch, confirms the meteoric rise of <em>strategic e-sport</em>. Paris thus becomes an essential venue, strengthening <em>TFT's</em> visibility in the competitive circuit.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://eu.leagueoflegends.com/en/news/esports/tft/tft-paris-open-analysis" style="color:#6366f1;text-decoration:underline;">Riot Games</a> · <a href="https://www.twitch.tv/teamfighttactics" style="color:#6366f1;text-decoration:underline;">Twitch</a> · <a href="https://teamfighttactics.gg/news/paris-open-2025-recap" style="color:#6366f1;text-decoration:underline;">Teamfight Tactics Official</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Yandex and MOUZ compete for the title at the 2025 Esports World Cup</h2>

              <p style="margin:0 0 12px 0;">On <strong>December 5, 2025</strong>, <em>Team Yandex</em> and <em>MOUZ</em> advanced to the semi-finals of the <em>BLAST Slam V</em> Dota 2 tournament in <em>Chengdu, China</em>.</p>

              <p style="margin:0 0 12px 0;">The event started on <strong>November 25</strong> with 12 teams competing for a total prize pool of <strong>$1 million</strong>. Yandex won a spectacular 2-1 comeback against OG, while MOUZ dominated Natus Vincere in two matches.</p>

              <p style="margin:0 0 12px 0;">In the decisive match, <em>Alimzhan "watson" Islambekov</em> from Yandex displayed a remarkable <strong>12-1-10</strong> KDA ratio. MOUZ's victories are illustrated by notable performances such as Remco "Crystallis" Arets' seven kills and Daniyal "yamich" Lazebnyy's 15 kills, his team's top scorer.</p>

              <p style="margin:0 0 12px 0;">Yandex will face <em>Team Falcons</em>, while MOUZ will challenge <em>Tundra Esports</em> in Saturday's semi-finals. Winners will advance to Sunday's grand finale, with the champion receiving <strong>$300,000</strong> in prize money plus <strong>$100,000</strong> in team revenue.</p>

              <p style="margin:0 0 12px 0;">Other distributions include OG and Natus Vincere with <strong>$35,000</strong> each plus <strong>$15,000</strong>, while teams ranked 7th to 10th place receive <strong>$22,500</strong> and <strong>$6,250</strong> respectively.</p>

              <p style="margin:0 0 12px 0;">The event highlights the fierce competition across <em>12 esports disciplines</em> at the 2025 World Cup, perpetuating its status as the benchmark global tournament.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://deadspin.com/yandex-mouz-advance-to-blast-slam-v-semifinals/" style="color:#6366f1;text-decoration:underline;">Deadspin</a></p>

              <div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div>

              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">E-Sport Olympics: The Cergy Arena rises in prominence</h2>

              <p style="margin:0 0 12px 0;">On <strong>November 29, 2025</strong>, the official launch of the <em>E-Sport Olympics</em> at <em>The Cergy Arena</em> marks a major turning point in the French competitive gaming scene.</p>

              <p style="margin:0 0 12px 0;">The event brings together over <strong>300 players</strong> from across the Île-de-France region, with tournaments in <em>League of Legends</em>, <em>Counter-Strike: Global Offensive</em>, and <em>FIFA 25</em>. The qualifying phases, spanning several days, attracted an online audience exceeding <strong>20,000 viewers</strong>, confirming growing enthusiasm.</p>

              <p style="margin:0 0 12px 0;">This 2025 edition features a total prize pool of <strong>€50,000</strong>, a <strong>25%</strong> increase compared to 2024. Organizers, in partnership with the Cergy town hall and several tech sponsors, are banking on <em>The Arena's</em> infrastructure, capable of accommodating up to <strong>1,000 in-person spectators</strong> and equipped with top-tier equipment for <em>4K streaming</em> broadcasts.</p>

              <p style="margin:0 0 12px 0;">Several French professional teams, including <em>Paris Eternal</em> and <em>Team Vitality</em>, participated in exhibition sessions, demonstrating the growing prestige of this regional competition.</p>

              <p style="margin:0 0 12px 0;">With its innovative formats and strong community integration, the <em>Cergy E-Sport Olympics</em> establish themselves as a must-attend event for e-sport enthusiasts at the end of 2025.</p>

              <p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources:</strong> <a href="https://www.lemonde.fr" style="color:#6366f1;text-decoration:underline;">Le Monde</a> · <a href="https://www.lequipe.fr" style="color:#6366f1;text-decoration:underline;">L'Équipe</a> · <a href="https://franceesports.fr" style="color:#6366f1;text-decoration:underline;">France Esports</a></p>

            </td>
          </tr>
          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">Did you learn something? Share it around you 🚀</p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">— The PickMyNews Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
                <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Manage my subscription</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
  },
];

// =============================================================================
// COMPOSANT CARTE NEWSLETTER
// =============================================================================

interface NewsletterCardProps {
  newsletter: NewsletterExample;
  onOpen: (id: string) => void;
  translations: {
    clientBadge: string;
    viewButton: string;
  };
}

function NewsletterCard({ newsletter, onOpen, translations }: NewsletterCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {translations.clientBadge}
        </span>
      </div>

      {/* Titre */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
        {newsletter.title}
      </h3>

      {/* Date */}
      <p className="text-sm text-slate-400 mb-3">
        {newsletter.date}
      </p>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {newsletter.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {newsletter.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bouton */}
      <button
        onClick={() => onOpen(newsletter.id)}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors group/btn"
      >
        <span>{translations.viewButton}</span>
        <svg
          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

// =============================================================================
// COMPOSANT MODALE
// =============================================================================

interface NewsletterModalProps {
  newsletter: NewsletterExample | null;
  onClose: () => void;
  translations: {
    close: string;
    exampleSent: string;
  };
}

function NewsletterModal({ newsletter, onClose, translations }: NewsletterModalProps) {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (newsletter) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [newsletter, onClose]);

  if (!newsletter) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Conteneur modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-modalIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h2 id="modal-title" className="text-lg font-semibold text-slate-900">
              {newsletter.title}
            </h2>
            <p className="text-sm text-slate-500">{newsletter.date}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={translations.close}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Corps avec le HTML de la newsletter */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-100">
          <div className="bg-white rounded-lg shadow-sm mx-auto max-w-[700px]">
            <div
              className="newsletter-preview"
              dangerouslySetInnerHTML={{ __html: newsletter.html }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {translations.exampleSent}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            {translations.close}
          </button>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modalIn {
          animation: modalIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

// =============================================================================
// COMPOSANT PRINCIPAL
// =============================================================================

export default function NewsletterShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const t = useTranslations('newsletterShowcase');
  const locale = useLocale();

  // Sélectionner les données selon la langue
  const newsletterExamples = locale === 'en' ? NEWSLETTER_EXAMPLES_EN : NEWSLETTER_EXAMPLES_FR;

  const handleOpen = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveId(null);
  }, []);

  const activeNewsletter = activeId
    ? newsletterExamples.find((n) => n.id === activeId) || null
    : null;

  // Traductions pour les sous-composants
  const cardTranslations = {
    clientBadge: t('clientBadge'),
    viewButton: t('viewButton'),
  };

  const modalTranslations = {
    close: t('close'),
    exampleSent: t('exampleSent'),
  };

  return (
    <section id="exemples" className="py-24 px-4 bg-white scroll-mt-nav relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            {t('badge')}
          </p>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsletterExamples.map((newsletter) => (
            <NewsletterCard
              key={newsletter.id}
              newsletter={newsletter}
              onOpen={handleOpen}
              translations={cardTranslations}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#inscription"
            className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors group"
          >
            <span>{t('cta')}</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modale */}
      <NewsletterModal
        newsletter={activeNewsletter}
        onClose={handleClose}
        translations={modalTranslations}
      />
    </section>
  );
}
