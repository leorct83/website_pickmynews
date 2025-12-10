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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Chergui 2025, laboratoire d'interopérabilité franco-marocaine</h2>
              <p style="margin:0 0 12px 0;">Le <strong>3 octobre 2025</strong>, l'exercice militaire <em>Chergui 2025</em> a regroupé dans le désert d'Errachidia des unités des Forces armées royales marocaines et de l'armée française.</p>
              <p style="margin:0 0 12px 0;">Ce rendez-vous annuel illustre la volonté stratégique de Paris et Rabat de préserver la stabilité régionale.</p>
            </td>
          </tr>
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
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-2',
    title: 'HP supprime des emplois tandis que l\'IA révolutionne la RAM et le codage',
    date: '05 décembre 2025',
    description: 'L\'intelligence artificielle bouleverse l\'industrie tech : HP supprime jusqu\'à 6000 emplois, les prix de la RAM explosent (+50%), et Anthropic lance Claude Sonnet 4.5.',
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">HP va supprimer jusqu'à 6 000 emplois pour intégrer l'IA</h2>
              <p style="margin:0 0 12px 0;">Le <strong>25 novembre 2025</strong>, HP a annoncé un plan de suppression de <strong>4 000 à 6 000</strong> postes d'ici fin 2028, une première pour une grande entreprise établissant un lien clair entre l'IA et une politique de réduction d'effectifs.</p>
            </td>
          </tr>
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
    tags: ['Tendances RH'],
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">L'Agilité Managériale boostée par la flexibilité</h2>
              <p style="margin:0 0 12px 0;">En décembre <strong>2025</strong>, l'adoption des modèles agiles et des solutions flexibles révolutionne le management.</p>
            </td>
          </tr>
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Croissance française 2025 : entre optimisme prudent et frilosité</h2>
              <p style="margin:0 0 12px 0;">Début décembre 2025, les dernières projections officielles dessinent une économie française en phase de croissance modérée, oscillant entre <strong>0,8 %</strong> et <strong>1,1 %</strong>.</p>
            </td>
          </tr>
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">TFT Paris Open : Le duel des maîtres</h2>
              <p style="margin:0 0 12px 0;">Le <strong>3 décembre 2025</strong>, Paris a vibré au rythme du TFT Paris Open, la rencontre phare du tournoi de Teamfight Tactics ce trimestre.</p>
            </td>
          </tr>
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Chergui 2025: Franco-Moroccan interoperability laboratory</h2>
              <p style="margin:0 0 12px 0;">On <strong>October 3, 2025</strong>, the <em>Chergui 2025</em> military exercise brought together units from the Moroccan Royal Armed Forces and the French Army in the Errachidia desert.</p>
              <p style="margin:0 0 12px 0;">This annual event illustrates the strategic will of Paris and Rabat to preserve regional stability.</p>
            </td>
          </tr>
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
        </table>
      </td>
    </tr>
  </table>`,
  },
  {
    id: 'newsletter-2',
    title: 'HP cuts jobs as AI revolutionizes RAM and coding',
    date: 'December 5, 2025',
    description: 'AI is disrupting the tech industry: HP cuts up to 6,000 jobs, RAM prices soar (+50%), and Anthropic launches Claude Sonnet 4.5.',
    tags: ['AI News'],
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">HP to cut up to 6,000 jobs to integrate AI</h2>
              <p style="margin:0 0 12px 0;">On <strong>November 25, 2025</strong>, HP announced a plan to cut <strong>4,000 to 6,000</strong> jobs by the end of 2028, a first for a major company clearly linking AI to workforce reduction.</p>
            </td>
          </tr>
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">Managerial Agility boosted by flexibility</h2>
              <p style="margin:0 0 12px 0;">In December <strong>2025</strong>, the adoption of agile models and flexible solutions is revolutionizing management.</p>
            </td>
          </tr>
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">French growth 2025: between cautious optimism and hesitancy</h2>
              <p style="margin:0 0 12px 0;">Early December 2025, the latest official projections show a French economy in a phase of moderate growth, ranging between <strong>0.8%</strong> and <strong>1.1%</strong>.</p>
            </td>
          </tr>
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
          <tr>
            <td style="padding:12px 32px;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;font-size:15px;color:#374151;line-height:1.75;">
              <h2 style="margin:0 0 16px 0;font-size:20px;font-weight:700;color:#111827;">TFT Paris Open: The masters duel</h2>
              <p style="margin:0 0 12px 0;">On <strong>December 3, 2025</strong>, Paris vibrated to the rhythm of the TFT Paris Open, the flagship Teamfight Tactics tournament event this quarter.</p>
            </td>
          </tr>
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
