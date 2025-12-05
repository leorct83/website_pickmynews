'use client';

import { useState, useEffect, useCallback } from 'react';

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
// DONNÉES DES NEWSLETTERS
// =============================================================================
// Instructions : Pour chaque newsletter, collez le contenu HTML complet
// (tout ce qui est à l'intérieur du <body>) dans la propriété `html`.
// =============================================================================

const NEWSLETTER_EXAMPLES: NewsletterExample[] = [
  {
    id: 'newsletter-1',
    title: 'Maroc 2025 : Zoo, accords bilatéraux et impulsion aéroportuaire',
    date: '05 décembre 2025',
    description: 'Le Maroc affiche un dynamisme renouvelé : réouverture du zoo d\'Aïn Sebaâ, 14 accords de coopération signés avec l\'Espagne, et renouveau aux aéroports de Marrakech et Agadir.',
    tags: ['Le Maroc'],
    html: `
  <!-- WRAPPER -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- CONTAINER -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">

          <!-- HEADER BADGE -->
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">
                Newsletter du 05/12/2025
              </p>
            </td>
          </tr>

 <!-- TITRE  -->
<tr>
  <td style="padding:20px 32px 8px 32px;text-align:center;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td style="vertical-align:middle;">
<h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">
  PickMyNews
</h1>

        </td>
      </tr>
    </table>
  </td>
</tr>

          <!-- INTRO -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">
                      Bonjour Sophie 👋
                    </p>

                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">
                      Le Maroc affiche un dynamisme renouvelé à travers des initiatives majeures dans le tourisme, la coopération internationale et les infrastructures. Ces avancées témoignent d'une stratégie cohérente pour renforcer son rayonnement économique et culturel.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1544517333-3ceafba4d01b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxNYXJvYyUyMGVuJTIwTW91dmVtZW50JTIwJTNBJTIwRHluYW1pc21lJTIwZXQlMjBEJUMzJUE5Y291dmVydGVzJTIwMjAyNXxlbnwwfDB8fHwxNzY0OTU0NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="people standing near buildings"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>

          <!-- PROGRAMME -->
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">
                      📌 Au programme
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Zoo d'Aïn Sebaâ : ouverture et tarifs dévoilés
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Maroc-Espagne : 14 accords de coopération signés
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Renouveau aux aéroports : Marrakech et Agadir
                        </td>
                      </tr>
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

              <h2>Zoo d'Aïn Sebaâ rouvre ses portes le 22 décembre</h2><p>Le zoo d'Aïn Sebaâ à Casablanca ouvre enfin après plusieurs années de fermetures et de réhabilitation. La date officielle d'ouverture est fixée au <strong>22 décembre 2023</strong>.</p><p>Les tarifs d'accès validés par le <em>Conseil de la ville</em> sont de <strong>80 DH</strong> pour les adultes et <strong>50 DH</strong> pour les enfants. Des formules <em>familiales</em> et <em>de groupe</em> seront également proposées pour faciliter la visite en groupe.</p><p>Cette réouverture marque un événement attendu, coïncidant avec la <em>Coupe d'Afrique des Nations</em> (CAN). Le zoo proposera un cadre rénové et attractif pour les visiteurs locaux et internationaux.</p><p>Les travaux, qui ont duré plusieurs années, visaient à moderniser les installations et améliorer les conditions d'accueil des animaux et du public. Ce projet fait partie d'une stratégie plus large pour valoriser les espaces verts et loisirs à Casablanca.</p><p>Le zoo d'Aïn Sebaâ s'annonce ainsi comme une nouvelle destination phare pour la famille et le tourisme urbain.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://lenew.ma/casablanca-le-zoo-de-ain-sebaa-rouvre-enfin-ses-portes-le-22-decembre/" style="color:#6366f1;">LeNew.ma</a> · <a href="https://www.instagram.com/reel/DR2gz1Ojfcc/" style="color:#6366f1;">Instagram</a> · <a href="https://x.com/H24Info" style="color:#6366f1;">H24Info</a> · <a href="https://fr.le360.ma/" style="color:#6366f1;">le360.ma</a></p><div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div><h2>Maroc-Espagne : 14 accords signés le <strong>4 décembre</strong> à Madrid</h2><p>Le <strong>4 décembre 2025</strong>, lors de la 13e Réunion de haut niveau à Madrid, le Maroc et l'Espagne ont paraphé <strong>14 accords de coopération</strong>.</p><p>Ces accords couvrent des secteurs stratégiques comme la <em>souveraineté alimentaire</em>, la <em>coopération sécuritaire</em>, la <em>justice numérique</em>, et la <em>culture</em>.</p><p>En diplomatie, un mémorandum d'entente instaure une <em>politique étrangère féministe</em>, promouvant l'égalité des sexes dans l'action extérieure. Un partenariat entre l'Institut Marocain de Formation Diplomatique et l'École diplomatique espagnole renforcera la formation et la mobilité des jeunes diplomates.</p><p>Côté justice et économie, un groupe de travail mettra en place la <em>digitalisation des procédures judiciaires</em> pour accélérer l'entraide internationale. Un autre mémorandum vise à échanger des pratiques fiscales innovantes.</p><p>Dans l'agriculture et pêche, les accords moderniseront les exploitations agricoles en promouvant l'<em>agroécologie</em> et lutteront contre la <em>pêche illicite</em> via la digitalisation des certificats.</p><p>Enfin, dans l'éducation, un accord permet aux enseignants marocains d'assurer l'enseignement de la langue arabe dans les écoles espagnoles au Maroc.</p><p>Ces engagements renforcent les liens multidimensionnels bilatéraux et posent des bases solides pour une coopération durable.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://medias24.com/2025/12/04/maroc-espagne-detail-des-14-accords-signes-a-la-13e-reunion-de-haut-niveau-1589332/" style="color:#6366f1;">Médias24</a> · <a href="https://vov.vn/fr-CH/LeMarocetlEspagnesignent14accordsdecoop%C3%A9ration-1268533.vov" style="color:#6366f1;">VOV</a> · <a href="https://www.facebook.com/lopinionquotidiens/posts/quatorze-accords-de-coop%C3%A9ration-ont-%C3%A9t%C3%A9-sign%C3%A9s-%C3%A0-lissue-de-la-r%C3%A9union-de-haut-ni/1450017757124175/" style="color:#6366f1;">Facebook</a></p><div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div><h2>Quatre nouveaux directeurs impulseront <em>Aéroport 2030</em> dès décembre 2025</h2><p>Le <strong>5 décembre 2025</strong>, quatre nouveaux directeurs ont été nommés pour piloter les aéroports clés de <em>Marrakech, Tanger, Fès</em> et <em>Agadir</em>. Ce changement cadre avec la stratégie nationale <em>Aéroport 2030</em>, visant à moderniser les infrastructures et améliorer la compétitivité du secteur.</p><p>La mission de ces directeurs s'inscrit dans un plan global à horizon 2030. Cette initiative ambitionne d'adapter le réseau aéroportuaire marocain à la croissance attendue du trafic aérien, tout en renforçant la qualité des services.</p><p>Le gouvernement marocain poursuit l'objectif de couvrir <strong>60%</strong> des besoins en eau, une donnée intégrée dans la planification globale des infrastructures. Le renouveau des directions aéroportuaires intervient dans ce contexte d'engagement renforcé pour la durabilité et l'efficacité.</p><p>Marrakech et Agadir, deux destinations touristiques majeures, bénéficieront d'un leadership renouvelé pour accompagner le dynamisme économique régional et l'essor du tourisme. L'objectif est de renforcer leur rôle de hubs stratégiques, facilitant les flux de voyageurs internationaux.</p><p>Cette gouvernance renouvelée ouvre une nouvelle phase de prospérité et de modernité pour les plateformes aéroportuaires du Royaume, en phase avec les ambitions du plan <em>Aéroport 2030</em>.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://fr.le360.ma/economie/" style="color:#6366f1;">le360.ma</a> · <a href="https://ecoactu.ma/" style="color:#6366f1;">EcoActu</a></p>

            </td>
          </tr>

          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">
                      Vous avez appris quelque chose ? Parlez en autour de vous 🚀
                    </p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">
                      — L'équipe PickMyNews
                    </p>
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
  </table>
`,
  },
  {
    id: 'newsletter-2',
    title: 'HP supprime des emplois tandis que l\'IA révolutionne la RAM et le codage',
    date: '05 décembre 2025',
    description: 'L\'intelligence artificielle bouleverse l\'industrie tech : HP supprime jusqu\'à 6000 emplois, les prix de la RAM explosent (+50%), et Anthropic lance Claude Sonnet 4.5, l\'IA programmateur la plus avancée.',
    tags: ['News AI'],
    html: `
  <!-- WRAPPER -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- CONTAINER -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">

          <!-- HEADER BADGE -->
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">
                Newsletter du 05/12/2025
              </p>
            </td>
          </tr>

 <!-- TITRE  -->
<tr>
  <td style="padding:20px 32px 8px 32px;text-align:center;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td style="vertical-align:middle;">
<h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">
  PickMyNews
</h1>

        </td>
      </tr>
    </table>
  </td>
</tr>

          <!-- INTRO -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">
                      Bonjour Sophie 👋
                    </p>

                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">
                      L'intelligence artificielle bouleverse l'industrie technologique à travers des décisions stratégiques majeures et des innovations spectaculaires. De la réduction d'effectifs chez HP à la flambée des prix de la RAM, jusqu'au lancement d'une IA programmateur avancée, les transformations s'accélèrent.
                    </p>
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

          <!-- PROGRAMME -->
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">
                      📌 Au programme
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>HP supprime jusqu'à 6000 emplois à cause de l'IA
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Crise de la RAM : IA fait flamber les prix tech
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Anthropic lance Claude Sonnet 4.5, IA programmateur
                        </td>
                      </tr>
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

              <h2>HP va supprimer jusqu'à 6 000 emplois pour intégrer l'<em>IA</em></h2><p>Le <strong>25 novembre 2025</strong>, le géant américain HP a annoncé un plan de suppression de <strong>4 000 à 6 000</strong> postes d'ici fin <strong>2028</strong>. Cette réduction correspond à plus de <strong>10 %</strong> de ses <strong>58 000</strong> salariés dans le monde, une première pour une grande entreprise établissant un lien clair entre l'<em>intelligence artificielle</em> et une politique drastique de réduction d'effectifs.</p><p>HP détaille que cette transformation s'inscrit dans son plan d'adoption intensifiée de l'<em>IA</em> pour améliorer la productivité, l'innovation produits et la satisfaction client. L'objectif est de générer environ <strong>1 milliard de dollars</strong> d'économies annuelles d'ici à la fin de période. Cependant, ces gains nécessiteront des coûts de restructuration estimés à <strong>650 millions de dollars</strong>, dont <strong>250 millions</strong> pour l'exercice fiscal 2026.</p><p>Cette annonce a provoqué une chute d'environ <strong>6 %</strong> du titre HP à Wall Street, conjuguée à des prévisions financières décevantes. Le plan de HP illustre les défis à venir de l'<em>IA</em> générative dans le secteur industriel, où la suppression d'emplois techniques pourrait être compensée par la création de nouveaux métiers, mais avec une transition incertaine.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources : </strong><a href="https://www.01net.com/" style="color:#6366f1;text-decoration:underline;">01net</a> &middot; <a href="https://www.la-croix.com/" style="color:#6366f1;text-decoration:underline;">La Croix</a> &middot; <a href="https://www.tunisienumerique.com/" style="color:#6366f1;text-decoration:underline;">Tunisie Numérique</a></p><div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div><h2>L'IA fait exploser les prix de la <em>RAM</em> en décembre 2025</h2><p>Dès début décembre 2025, la <em>crise de la RAM</em> atteint un point critique. Les tarifs des barrettes de mémoire vive ont bondi de <strong>50%</strong> en quelques jours seulement.</p><p>Pour certaines références haut de gamme, les prix ont même plus que doublé, multipliés par <strong>3,35</strong> en quelques mois. Des augmentations majeures qui se traduisent par des hausses cumulées pouvant atteindre <strong>+171,8%</strong> sur un an.</p><p>À l'origine, la demande fulgurante des entreprises d'<em>intelligence artificielle</em> absorbe toute la production mondiale de <em>DRAM</em>. Les équipementiers préfèrent investir dans des mémoires spécifiques à l'IA, délaissant les commandes classiques pour ordinateurs, smartphones et consoles.</p><p>Cette réorientation crée un phénomène inédit, frappant un composant central de l'électronique grand public. Les consommateurs risquent de voir le prix de leurs appareils grimper significativement, dès 2026, faute de baisse des coûts.</p><p>Par exemple, le coût de la <em>RAM</em> sur un smartphone premier prix, généralement quelques dizaines d'euros, pourrait se multiplier par deux ou trois.</p><p>La pénurie de <em>mémoire vive</em> liée à l'essor de l'IA, déjà ressentie sur le marché au détail, menace désormais la chaîne entière des produits technologiques.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources : </strong><a href="https://www.franceinfo.fr/internet/intelligence-artificielle/crise-de-la-ram-pourquoi-le-prix-des-ordinateurs-smartphones-ou-consoles-risque-de-flamber-a-cause-de-l-ia_7656292.html" style="color:#6366f1;text-decoration:underline;">France Info</a> &middot; <a href="https://www.dhnet.be/actu/new-tech/2025/12/02/une-tablette-pliable-dans-la-poche-samsung-bombe-le-torse-avec-son-galaxy-z-trifold-H24SS3KGD5CVPPVJ4EQMGKGGH4/" style="color:#6366f1;text-decoration:underline;">DHnet</a> &middot; <a href="https://www.cowcotland.com/news/98837/maj-les-contours-de-la-hausse-des-prix-des-cartes-graphiques-amd-se-precisent-+-10-pour-8-go.html" style="color:#6366f1;text-decoration:underline;">Cowcotland</a></p><div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div><h2>Claude Sonnet 4.5, l'IA programmateur autonome et fiable</h2><p>Le <strong>29 septembre 2025</strong>, Anthropic a lancé <em>Claude Sonnet 4.5</em>, un modèle d'IA codage qualifié de <strong>meilleur au monde</strong>. Il affiche une précision record de <strong>77,2 % au benchmark SWE-bench Verified</strong> et atteint <strong>61,4 % sur OSWorld</strong>, une progression notable par rapport à Sonnet 4 (42,2 %).</p><p>Sonnet 4.5 excelle dans le codage complexe, gère des sessions de travail continues de plus de <strong>30 heures</strong> et réalise des tâches sophistiquées, comme la création entière d'applications et audits de sécurité. Son taux d'erreur en édition de code est tombé de <strong>9 % à 0 %</strong>, assurant une fiabilité accrue.</p><p>Parallèlement, Anthropic a enrichi son environnement de développement avec <em>Claude Code 2.0</em>, qui introduit des <em>checkpoints</em> automatiques, une extension IDE native pour VS Code, la gestion de <em>subagents</em> parallèles et des <em>hooks</em> d'automatisation. Ces fonctionnalités facilitent un codage plus rapide, sûr et collaboratif avec l'IA.</p><p>Cette avancée majeure maintient un prix stable de <strong>3 $ / million de tokens en entrée</strong> et <strong>15 $ en sortie</strong>. Dès à présent, Sonnet 4.5 est intégré dans des outils comme GitHub Copilot, Cursor, ou Replit, adoptés par des géants comme Apple et Meta.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources : </strong><a href="https://www.anthropic.com/news/claude-sonnet-4-5" style="color:#6366f1;text-decoration:underline;">Anthropic</a> &middot; <a href="https://techcrunch.com/2025/09/29/anthropic-launches-claude-sonnet-4-5-its-best-ai-model-for-coding" style="color:#6366f1;text-decoration:underline;">TechCrunch</a> &middot; <a href="https://www.adimeo.com/blog/claude-sonnet-4-5" style="color:#6366f1;text-decoration:underline;">Adimeo</a> &middot; <a href="https://lucasgraphic.com/posts/claude-sonnet-45-tops-coding-charts-with-huge-gains" style="color:#6366f1;text-decoration:underline;">LucasGraphic</a></p>

            </td>
          </tr>

          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">
                      Vous avez appris quelque chose ? Parlez en autour de vous 🚀
                    </p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">
                      — L'équipe PickMyNews
                    </p>
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
  </table>
`,
  },
  {
    id: 'newsletter-3',
    title: 'RH 2025 : Piloter l\'humain à l\'ère du numérique et de l\'agilité',
    date: '05 décembre 2025',
    description: 'Flexibilité agile, IA dans le recrutement, bien-être et inclusion : les nouvelles tendances qui transforment la gestion des ressources humaines.',
    tags: ['Les tendances RH et management'],
    html: `
  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color:#f4f4f4; padding: 20px 0; font-family: Arial, sans-serif;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" border="0"
          style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 30px 40px; text-align: center;">
              <h1 style="color:#ffffff; margin:0; font-size:26px; font-weight:700; letter-spacing:-0.5px;">
                📰 Les tendances RH et management
              </h1>
              <p style="color:#a3c4e8; margin:8px 0 0; font-size:14px;">
                Votre veille stratégique du 05/12/2025
              </p>
            </td>
          </tr>

          <!-- INTRO -->
          <tr>
            <td style="padding: 30px 40px 20px;">
              <p style="color:#1e3a5f; font-size:18px; font-weight:600; margin:0 0 12px;">
                Bonjour et bienvenue dans cette édition,
              </p>
              <p style="color:#444444; font-size:15px; line-height:1.7; margin:0;">
                Cette semaine, nous mettons en lumière les grandes orientations qui redéfinissent le management et les ressources humaines. De la <strong>flexibilité agile</strong> à <strong>l'intelligence artificielle dans le recrutement</strong>, en passant par la <strong>culture d'entreprise</strong> et le <strong>bien-être des collaborateurs</strong>, découvrez comment les organisations se réinventent pour relever les défis de demain.
              </p>
            </td>
          </tr>

          <!-- ARTICLE 1 -->
          <tr>
            <td style="padding: 10px 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#f8fafc; border-radius:8px; border-left:4px solid #1e3a5f;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="color:#1e3a5f; font-size:11px; text-transform:uppercase; font-weight:700; margin:0 0 8px; letter-spacing:0.5px;">
                      📌 Agilité & Organisation
                    </p>
                    <h2 style="color:#1e3a5f; font-size:18px; margin:0 0 10px; font-weight:700;">
                      <a href="https://www.journaldunet.com/management/emploi-cadres/1539167-comment-concilier-flexibilite-et-agilite-dans-les-organisations/"
                        style="color:#1e3a5f; text-decoration:none;">
                        Concilier flexibilité et agilité dans les organisations modernes
                      </a>
                    </h2>
                    <p style="color:#555555; font-size:14px; line-height:1.6; margin:0;">
                      Face à un environnement en perpétuelle mutation, les entreprises adoptent des modèles organisationnels plus souples. Selon cette analyse, la combinaison de <strong>flexibilité structurelle</strong> et d'<strong>agilité opérationnelle</strong> permet de mieux répondre aux aléas du marché tout en préservant l'engagement des équipes.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ARTICLE 2 -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#f8fafc; border-radius:8px; border-left:4px solid #2d5a87;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="color:#2d5a87; font-size:11px; text-transform:uppercase; font-weight:700; margin:0 0 8px; letter-spacing:0.5px;">
                      🤖 IA & Recrutement
                    </p>
                    <h2 style="color:#1e3a5f; font-size:18px; margin:0 0 10px; font-weight:700;">
                      <a href="https://www.helloworkplace.fr/ia-entretien-recrutement-promesse-realite/"
                        style="color:#1e3a5f; text-decoration:none;">
                        L'IA dans le recrutement : promesses et réalités
                      </a>
                    </h2>
                    <p style="color:#555555; font-size:14px; line-height:1.6; margin:0;">
                      L'intelligence artificielle transforme les pratiques RH, notamment dans la <strong>présélection des candidatures</strong> et la conduite des entretiens. Toutefois, entre automatisation et maintien du lien humain, les recruteurs doivent trouver le juste équilibre pour garantir une expérience candidat de qualité.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ARTICLE 3 -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#f8fafc; border-radius:8px; border-left:4px solid #3b7ab8;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="color:#3b7ab8; font-size:11px; text-transform:uppercase; font-weight:700; margin:0 0 8px; letter-spacing:0.5px;">
                      🏢 Culture d'entreprise
                    </p>
                    <h2 style="color:#1e3a5f; font-size:18px; margin:0 0 10px; font-weight:700;">
                      <a href="https://www.journaldunet.com/management/emploi-cadres/1539031-culture-d-entreprise-pourquoi-votre-entreprise-n-en-a-pas/"
                        style="color:#1e3a5f; text-decoration:none;">
                        Culture d'entreprise : pourquoi certaines organisations peinent à la définir
                      </a>
                    </h2>
                    <p style="color:#555555; font-size:14px; line-height:1.6; margin:0;">
                      Une culture d'entreprise forte est un levier de <strong>performance collective</strong> et de <strong>fidélisation des talents</strong>. Pourtant, nombre de structures n'ont pas encore formalisé la leur. Cet article explore les raisons de ce manque et propose des pistes pour bâtir une identité organisationnelle cohérente.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ARTICLE 4 -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#f8fafc; border-radius:8px; border-left:4px solid #5a9bd4;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="color:#5a9bd4; font-size:11px; text-transform:uppercase; font-weight:700; margin:0 0 8px; letter-spacing:0.5px;">
                      💼 Bien-être & Inclusion
                    </p>
                    <h2 style="color:#1e3a5f; font-size:18px; margin:0 0 10px; font-weight:700;">
                      <a href="https://www.manager-go.com/ressources-humaines/dossiers-methodes/politique-rh"
                        style="color:#1e3a5f; text-decoration:none;">
                        Construire une politique RH inclusive et tournée vers le bien-être
                      </a>
                    </h2>
                    <p style="color:#555555; font-size:14px; line-height:1.6; margin:0;">
                      Une politique RH efficace ne se limite plus à la gestion administrative. Elle englobe désormais la <strong>qualité de vie au travail</strong>, la <strong>diversité</strong> et l'<strong>équité salariale</strong>. Des pratiques qui renforcent l'attractivité de l'employeur et la performance globale.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SYNTHÈSE -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); border-radius:8px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color:#ffffff; font-size:16px; margin:0 0 12px; font-weight:700;">
                      🎯 Ce qu'il faut retenir
                    </h3>
                    <ul style="color:#d4e5f7; font-size:14px; line-height:1.8; margin:0; padding-left:18px;">
                      <li><strong style="color:#ffffff;">Agilité organisationnelle</strong> : la clé pour s'adapter aux évolutions du marché</li>
                      <li><strong style="color:#ffffff;">IA et recrutement</strong> : un outil puissant à manier avec discernement</li>
                      <li><strong style="color:#ffffff;">Culture d'entreprise</strong> : un pilier trop souvent négligé mais essentiel</li>
                      <li><strong style="color:#ffffff;">Bien-être et inclusion</strong> : des enjeux majeurs pour fidéliser les talents</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#f8fafc; padding: 25px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color:#64748b; font-size:13px; margin:0 0 8px;">
                Merci de votre lecture ! À très bientôt pour une prochaine édition.
              </p>
              <p style="color:#94a3b8; font-size:12px; margin:0;">
                © 2025 PickMyNews — Votre veille RH et management personnalisée
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
`,
  },
  {
    id: 'newsletter-4',
    title: 'Innovations acier, hydrogène décarboné et stockage énergétique en 2025',
    date: '05 décembre 2025',
    description: 'L\'industrie pétrolière innove : Vallourec célèbre 60 ans avec VAM®, Spark Cleantech révolutionne la décarbonation avec la plasmalyse pulsée, et de nouvelles alliances boostent le stockage énergétique.',
    tags: ['Les avancées et innovations dans l\'industrie pétrolière'],
    html: `
  <!-- WRAPPER -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4F6;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- CONTAINER -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);">

          <!-- HEADER BADGE -->
          <tr>
            <td style="padding:28px 32px 0 32px;text-align:center;">
              <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:11px;font-weight:600;letter-spacing:0.8px;text-transform:uppercase;color:#4F46E5;background-color:#EEF2FF;display:inline-block;padding:6px 14px;border-radius:20px;">
                Newsletter du 05/12/2025
              </p>
            </td>
          </tr>

 <!-- TITRE  -->
<tr>
  <td style="padding:20px 32px 8px 32px;text-align:center;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr>
        <td style="vertical-align:middle;">
<h1 style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:28px;font-weight:700;color:#111827;line-height:1.3;text-align:center;">
  PickMyNews
</h1>

        </td>
      </tr>
    </table>
  </td>
</tr>

          <!-- INTRO -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F9FAFB;border-radius:10px;border-left:3px solid #4F46E5;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:16px;color:#1F2937;line-height:1.7;">
                      Bonjour John 👋
                    </p>

                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#4B5563;line-height:1.75;">
                      L'actualité récente témoigne d'avancées majeures dans le domaine de l'innovation industrielle et énergétique. Ces développements traduisent des efforts conjoints pour répondre aux enjeux environnementaux tout en assurant performance et durabilité.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HERO IMAGE -->
          <tr>
            <td style="padding:20px 32px;">
              <img src="https://images.unsplash.com/photo-1655821145885-9db7f0f178f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mzg2NDh8MHwxfHNlYXJjaHwxfHxQJUMzJUE5dHJvbGUlMjAyLjAlMjAlM0ElMjBJbm5vdmF0aW9ucyUyMGV0JTIwRnV0dXIlMjBFbnF1JUMzJUFBdGV8ZW58MHwwfHx8MTc2NDk1NTcyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="a sign board with a restaurant sign"
                   width="536"
                   height="auto"
                   style="width:100%;max-width:536px;height:auto;display:block;border-radius:8px;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>

          <!-- PROGRAMME -->
          <tr>
            <td style="padding:0 32px 12px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;border-radius:10px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 14px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#4F46E5;">
                      📌 Au programme
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Vallourec dévoile VAM® : 60 ans d'innovations acier
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Spark Cleantech révolutionne avec plasmalyse pulsée
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#1F2937;line-height:1.6;font-weight:600;">
                          <span style="color:#4F46E5;font-weight:600;margin-right:10px;">→</span>Stockage énergétique : coopérations et nouvelles lois
                        </td>
                      </tr>
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

              <h2>Vallourec célèbre 60 ans d'innovation avec VAM® en 2025</h2><p>Le <strong>1er décembre 2025</strong>, Vallourec a dévoilé <strong>VAM®</strong>, une nouvelle gamme de produits acier, marquant <strong>60 ans d'innovation</strong> dans l'industrie de l'acier.</p><p>Depuis sa création, Vallourec a façonné le secteur pétrolier grâce à ses tubes en acier <strong>haute performance</strong> destinés à l'exploration et l'exploitation d'hydrocarbures. VAM® incarne la culmination d'innovation, adaptant la résistance, la légèreté et la durabilité des aciers pour répondre aux conditions extrêmes des champs pétroliers.</p><p>Avec plus d'un demi-siècle d'expérience, Vallourec s'est imposé comme <strong>leader mondial</strong> dans la fourniture de solutions tubulaires qui allient technologie de pointe et performance environnementale.</p><p>Le lancement de VAM® correspond à une montée en puissance de la R&amp;D permettant l'intégration de matériaux ultrarésistants et l'optimisation des procédés de fabrication. Cela permet de réduire le poids des tubes tout en maintenant leur solidité, s'inscrivant ainsi dans les efforts vers une extraction plus responsable des ressources pétrolières.</p><p>Cette annonce arrive dans un contexte où la transition énergétique redéfinit les approvisionnements en hydrocarbures, faisant de l'innovation acier un levier stratégique pour faire face aux défis du XXIe siècle.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.lunion.fr" style="color:#6366f1;text-decoration:underline;">L'Union</a> · <a href="https://www.vallourec.com" style="color:#6366f1;text-decoration:underline;">Vallourec Official Site</a></p><div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div><h2>Spark Cleantech : la plasmalyse pulsée transforme l'industrie lourde</h2><p>Le <strong>4 décembre 2025</strong>, Spark Cleantech a levé <strong>30 millions d'euros</strong> en série A pour industrialiser sa technologie exclusive de <em>plasmalyse pulsée</em>. Ce procédé novateur convertit le méthane en <em>hydrogène</em> décarboné et en <em>carbone solide</em> valorisable.</p><p>Cette innovation réduit jusqu'à <strong>85 %</strong> les émissions directes dans les secteurs à haute température comme la métallurgie ou la verrerie. L'hydrogène ainsi produit brûle proprement, générant de la chaleur sans CO₂, tandis que le carbone extrait devient un nanomatériau à haute valeur économique, multipliée par <strong>4</strong>.</p><p>Le premier module de production commerciale doit voir le jour d'ici fin <strong>2027</strong>. Une cinquantaine d'unités est prévue à l'horizon <strong>2030</strong>, avec des contrats déjà signés avec des industriels. La plasmalyse, inventée à Stanford et développée à CentraleSupélec, s'intègre avec peu d'adaptations aux installations existantes.</p><p>Cette technologie offrira une alternative plus économique et moins énergivore que les méthodes classiques comme le reformage vapeur ou l'électrolyse. Elle ouvre une voie pragmatique pour la décarbonation durable des industries lourdes tout en créant un nouveau marché pour le carbone solide.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://storiesout.com/communiques-presse/spark-cleantech-annonce-une-levee-series-a-de-30-me/" style="color:#6366f1;text-decoration:underline;">StoriesOut</a> · <a href="https://climatesolutions.news/fr/la-performance-des-entreprises/Spark-Cleantech-lève-30-millions-d'euros-pour-réduire-les-émissions-de-l'industrie-lourde." style="color:#6366f1;text-decoration:underline;">Climate Solutions News</a> · <a href="https://polesocietes.com/actualites/levee-de-fonds/spark-cleantech-leve-4-millions-d-euros-pour-revolutionner-la-production-d-hydrogene-decarbone" style="color:#6366f1;text-decoration:underline;">Pôle Sociétés</a></p><div style="margin:28px 0;border-top:1px solid #E5E7EB;"></div><h2>Nouveaux cadres juridiques et alliances boostent le stockage énergétique</h2><p>Le <strong>3 décembre 2025</strong>, HIZENERGY et QuSolar Energy B.V. ont signé un partenariat stratégique pour développer le marché européen du <em>stockage d'énergie C&amp;I</em> (Commercial &amp; Industrial). La collaboration combine la technologie innovante de HIZENERGY avec l'expertise de QuSolar en déploiement régional.</p><p>Présentée au salon Solar Solutions Düsseldorf, l'innovation phare, <em>EnerBox</em>, offre une densité énergétique exceptionnelle de <strong>185 kWh/m³</strong> et est dotée d'un système proactif de prévention des incendies. Conçue pour la régulation, l'écrêtement des pointes et la gestion intégrée PV+ESS+EV, cette solution répond à la demande croissante en Europe.</p><p>Parallèlement, l'Assemblée nationale du Vietnam, le <strong>4 décembre 2025</strong>, a souligné « l'urgence d'un cadre juridique apte à concrétiser la sécurité énergétique nationale » pour <strong>2026-2030</strong>. Le projet de résolution prévoit d'accroître la flexibilité et le stockage par batteries, tout en promouvant une meilleure transparence et responsabilité gouvernementale.</p><p>Des voix parlementaires recommandent notamment d'ouvrir les infrastructures énergétiques à l'investissement privé et d'intégrer l'électricité issue des déchets pour réduire la pression sur le stockage.</p><p>Ces avancées technologiques et règlementaires illustrent une volonté commune d'impulser la transition énergétique via des mécanismes innovants et coopératifs.</p><p style="margin-top:16px;font-size:13px;color:#9ca3af;"><strong style="color:#6b7280;">Sources :</strong> <a href="https://www.lelezard.com/communique-22042296.html" style="color:#6366f1;text-decoration:underline;">Le Lézard</a> · <a href="https://lecourrier.vn/deux-dossiers-majeurs-le-centre-financier-international-et-la-securite-energetique/1296816.html" style="color:#6366f1;text-decoration:underline;">Lecourrier.vn</a> · <a href="https://fr.vietnamplus.vn/an-creer-des-mecanismes-dexception-pour-un-centre-financier-international-et-garantir-la-securite-energetique-nationale-post255798.vnp" style="color:#6366f1;text-decoration:underline;">VietnamPlus</a></p>

            </td>
          </tr>

          <!-- CONCLUSION -->
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);border-radius:10px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.7;">
                      Vous avez appris quelque chose ? Parlez en autour de vous 🚀
                    </p>
                    <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:14px;color:#4F46E5;font-weight:600;">
                      — L'équipe PickMyNews
                    </p>
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
  </table>
`,
  },
  // ===== NEWSLETTER 5 - E-SPORT =====
  {
    id: 'newsletter-5',
    title: 'Championnat 2025 : Paris et Cergy en pleine effervescence e-sport',
    date: '05 décembre 2025',
    description: 'TFT Paris Open, Coupe du Monde Esport et Olympiades E-Sport à Cergy : l\'actualité des compétitions gaming.',
    tags: ['Compétitions e-sport'],
    html: `
  <table role="presentation" style="width:100%;max-width:640px;margin:0 auto;border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;background-color:#FFFFFF;">
    <tr>
      <td style="padding:0;">

        <!-- HEADER -->
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:28px 32px;background:linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%);border-radius:12px 12px 0 0;">
              <p style="margin:0 0 4px 0;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,0.85);font-weight:600;">
                Compétitions e-sport
              </p>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#FFFFFF;line-height:1.25;">
                Championnat 2025 : Paris et Cergy en pleine effervescence e-sport
              </h1>
            </td>
          </tr>
        </table>

        <!-- INTRO -->
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:28px 32px 20px 32px;">
              <p style="margin:0;font-size:16px;line-height:1.7;color:#374151;">
                Bonjour Michael 👋
              </p>
              <p style="margin:14px 0 0 0;font-size:16px;line-height:1.7;color:#374151;">
                L'e-sport français s'anime avec trois événements majeurs cet hiver : le TFT Paris Open offrant une scène européenne d'élite, la Coupe du Monde Esport rassemblant nations et disciplines à Paris, et les premières Olympiades E-Sport à Cergy ouvertes à tous. Découvrez notre sélection.
              </p>
            </td>
          </tr>
        </table>

        <!-- ARTICLE 1 -->
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:0 32px 28px 32px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;background:#F9FAFB;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:700;">
                      Compétition internationale
                    </p>
                    <h2 style="margin:0 0 12px 0;font-size:19px;font-weight:700;color:#111827;line-height:1.35;">
                      TFT Paris Open : 32 pros européens s'affrontent à Paris
                    </h2>
                    <p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:#4B5563;">
                      La toute première édition européenne de la compétition Teamfight Tactics se tient à Paris. 32 joueurs professionnels s'y retrouvent pour décrocher le titre continental et une place aux championnats mondiaux. L'événement marque un tournant dans la scène TFT française.
                    </p>
                    <table role="presentation" style="border-collapse:collapse;">
                      <tr>
                        <td style="background:linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%);border-radius:8px;">
                          <a href="https://www.millenium.org/news/428917.html" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:#FFFFFF;text-decoration:none;">
                            Lire l'article →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- ARTICLE 2 -->
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:0 32px 28px 32px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;background:#F9FAFB;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:700;">
                      Événement mondial
                    </p>
                    <h2 style="margin:0 0 12px 0;font-size:19px;font-weight:700;color:#111827;line-height:1.35;">
                      Coupe du Monde Esport 2025 : Paris accueille l'élite internationale
                    </h2>
                    <p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:#4B5563;">
                      La capitale française devient l'épicentre de l'e-sport mondial avec la Coupe du Monde Esport 2025. Des équipes nationales de différents jeux s'affrontent dans un format inspiré des compétitions sportives traditionnelles. Une vitrine sans précédent pour l'e-sport hexagonal.
                    </p>
                    <table role="presentation" style="border-collapse:collapse;">
                      <tr>
                        <td style="background:linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%);border-radius:8px;">
                          <a href="https://www.presse-citron.net/coupe-du-monde-esport-2025-dates-jeux-pays-tout-ce-quil-faut-savoir/" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:#FFFFFF;text-decoration:none;">
                            Lire l'article →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- ARTICLE 3 -->
        <table role="presentation" style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:0 32px 28px 32px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;background:#F9FAFB;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 8px 0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#6366F1;font-weight:700;">
                      Initiative locale
                    </p>
                    <h2 style="margin:0 0 12px 0;font-size:19px;font-weight:700;color:#111827;line-height:1.35;">
                      Olympiades E-Sport à Cergy : compétition ouverte à tous
                    </h2>
                    <p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:#4B5563;">
                      Cergy organise ses premières Olympiades E-Sport, un événement local ouvert aux amateurs comme aux joueurs confirmés. Plusieurs jeux sont au programme dans une ambiance conviviale et compétitive. Une belle opportunité pour découvrir ou approfondir sa passion du gaming.
                    </p>
                    <table role="presentation" style="border-collapse:collapse;">
                      <tr>
                        <td style="background:linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%);border-radius:8px;">
                          <a href="https://actu.fr/ile-de-france/cergy_95127/olympiades-e-sport-a-cergy-inscrivez-vous-vite-pour-participer-a-la-competition_62177548.html" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:600;color:#FFFFFF;text-decoration:none;">
                            Lire l'article →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- FOOTER -->
        <tr>
          <td style="padding:20px 32px;background-color:#F9FAFB;border-top:1px solid #E5E7EB;border-radius:0 0 12px 12px;">
            <p style="margin:0;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">
              <a href="https://forms.gle/bU7WsZMHwinkjJmP7" style="color:#6B7280;text-decoration:underline;">Gérer mon abonnement</a>
            </p>
          </td>
        </tr>

      </td>
    </tr>
  </table>
`,
  },
];

// =============================================================================
// COMPOSANT CARTE NEWSLETTER
// =============================================================================

interface NewsletterCardProps {
  newsletter: NewsletterExample;
  onOpen: (id: string) => void;
}

function NewsletterCard({ newsletter, onOpen }: NewsletterCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Newsletter client
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
        <span>Voir la newsletter</span>
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
}

function NewsletterModal({ newsletter, onClose }: NewsletterModalProps) {
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
            aria-label="Fermer"
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
            Exemple de newsletter envoyée à nos clients
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Fermer
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

  const handleOpen = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveId(null);
  }, []);

  const activeNewsletter = activeId
    ? NEWSLETTER_EXAMPLES.find((n) => n.id === activeId) || null
    : null;

  return (
    <section id="exemples" className="py-24 px-4 bg-white scroll-mt-nav relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-4">
            Exemples
          </p>
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 text-balance">
            Découvrez nos newsletters
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Voici quelques exemples de newsletters réellement envoyées à nos clients.
            Cliquez pour voir le contenu complet.
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {NEWSLETTER_EXAMPLES.map((newsletter) => (
            <NewsletterCard
              key={newsletter.id}
              newsletter={newsletter}
              onOpen={handleOpen}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#inscription"
            className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition-colors group"
          >
            <span>Créer ma propre newsletter personnalisée</span>
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
      <NewsletterModal newsletter={activeNewsletter} onClose={handleClose} />
    </section>
  );
}
