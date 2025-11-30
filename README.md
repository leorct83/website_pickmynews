# PickmyNews

Service d'abonnement à des newsletters personnalisées avec paiement Stripe et gestion via Google Sheets.

## Description

PickmyNews permet aux utilisateurs de :
- Choisir un thème d'actualité personnalisé
- Sélectionner une fréquence d'envoi (1x, 2x, 5x ou 7x par semaine)
- Définir les jours et l'heure de réception
- S'abonner via Stripe (facturation hebdomadaire, mensuelle ou annuelle)

Tous les abonnements sont stockés dans un Google Sheet pour faciliter la gestion et l'envoi des newsletters.

## Stack technique

- **Next.js 14+** avec App Router
- **TypeScript**
- **React**
- **Tailwind CSS**
- **Stripe** (mode subscription)
- **Google Sheets API** (avec service account)

## Installation

### 1. Cloner et installer les dépendances

```bash
# Cloner le projet
cd pickmynews

# Installer les dépendances
npm install
```

### 2. Configuration de Google Sheets

#### a) Créer un Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez un nouveau spreadsheet nommé "PickmyNews Subscribers" (ou autre)
3. Dans la première feuille (Sheet1), ajoutez les en-têtes suivants en ligne 1 (colonnes A à L) :

```
created_at | name | email | theme | plan_frequency | billing_period | send_days | send_hour | stripe_customer_id | stripe_subscription_id | status | last_event_at
```

4. Notez l'ID du spreadsheet (visible dans l'URL) :
   ```
   https://docs.google.com/spreadsheets/d/[VOTRE_GOOGLE_SHEETS_ID]/edit
   ```

#### b) Créer un Service Account Google

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un nouveau projet (ou sélectionnez-en un existant)
3. Activez l'API Google Sheets :
   - Menu "APIs & Services" > "Library"
   - Recherchez "Google Sheets API"
   - Cliquez sur "Enable"
4. Créez un Service Account :
   - Menu "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "Service Account"
   - Donnez-lui un nom (ex: "pickmynews-service")
   - Cliquez sur "Create and Continue"
   - Passez les rôles (optionnels pour ce cas)
   - Cliquez sur "Done"
5. Créez une clé pour ce Service Account :
   - Cliquez sur le service account que vous venez de créer
   - Onglet "Keys" > "Add Key" > "Create new key"
   - Choisissez le format **JSON**
   - Téléchargez le fichier (il contient `client_email` et `private_key`)

#### c) Partager le Google Sheet avec le Service Account

1. Ouvrez votre Google Sheet
2. Cliquez sur "Partager" (en haut à droite)
3. Ajoutez l'email du service account (format : `xxx@xxx.iam.gserviceaccount.com`)
4. Donnez-lui les droits **Éditeur**
5. Décochez "Notifier les personnes" si proposé
6. Cliquez sur "Partager"

### 3. Configuration de Stripe

#### a) Créer les produits et prices

Vous devez créer **12 produits/prices** dans Stripe, correspondant aux combinaisons :

**Grille tarifaire :**

| Fréquence | Hebdomadaire | Mensuel | Annuel |
|-----------|--------------|---------|--------|
| 7x/semaine | 5,99 € | 12,99 € | 129,99 € |
| 5x/semaine | 4,99 € | 9,99 € | 99,99 € |
| 2x/semaine | 2,99 € | 6,49 € | 59,99 € |
| 1x/semaine | 1,99 € | 4,99 € | 49,99 € |

**Étapes dans Stripe Dashboard :**

1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. Menu "Products" > "Add product"
3. Pour chaque combinaison :
   - Nom du produit : ex. "Newsletter 7x/semaine"
   - Ajoutez un price avec :
     - Modèle de prix : **Recurring**
     - Montant : selon la grille ci-dessus
     - Devise : **EUR**
     - Fréquence de facturation : **Weekly** / **Monthly** / **Yearly**
   - Cliquez sur "Save product"
4. Notez le **Price ID** (format `price_xxxxx`) pour chaque combinaison

Vous aurez besoin de ces 12 price IDs pour remplir les variables d'environnement.

#### b) Configurer le webhook Stripe

1. Dans Stripe Dashboard, allez dans "Developers" > "Webhooks"
2. Cliquez sur "Add endpoint"
3. Endpoint URL :
   - En développement avec Stripe CLI : utilisez `stripe listen --forward-to localhost:3000/api/stripe-webhook`
   - En production : `https://votre-domaine.com/api/stripe-webhook`
4. Sélectionnez les events à écouter (minimum requis) :
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Cliquez sur "Add endpoint"
6. Notez le **Signing secret** (format `whsec_xxxxx`) qui apparaît après création

**Pour le développement local :**
```bash
# Installer Stripe CLI
# https://stripe.com/docs/stripe-cli

# Se connecter
stripe login

# Écouter les webhooks et les forwarder vers votre endpoint local
stripe listen --forward-to localhost:3000/api/stripe-webhook

# Le CLI affichera le webhook signing secret à utiliser
```

### 4. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet (copie de `.env.local.example`) :

```bash
cp .env.local.example .env.local
```

Remplissez toutes les variables :

```env
# URL de base
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # En prod: https://votre-domaine.com

# Stripe
STRIPE_SECRET_KEY=sk_test_...  # Depuis Stripe Dashboard > Developers > API keys
STRIPE_WEBHOOK_SECRET=whsec_...  # Depuis votre webhook endpoint

# Google Service Account
GOOGLE_SERVICE_ACCOUNT_EMAIL=votre-service-account@votre-projet.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nVOTRE_CLE\n-----END PRIVATE KEY-----\n"

# Google Sheets
GOOGLE_SHEETS_ID=1ABC...XYZ  # ID depuis l'URL du Google Sheet

# Stripe Price IDs (tous les 12)
STRIPE_PRICE_WEEKLY_7X=price_...
STRIPE_PRICE_WEEKLY_5X=price_...
STRIPE_PRICE_WEEKLY_2X=price_...
STRIPE_PRICE_WEEKLY_1X=price_...
STRIPE_PRICE_MONTHLY_7X=price_...
STRIPE_PRICE_MONTHLY_5X=price_...
STRIPE_PRICE_MONTHLY_2X=price_...
STRIPE_PRICE_MONTHLY_1X=price_...
STRIPE_PRICE_YEARLY_7X=price_...
STRIPE_PRICE_YEARLY_5X=price_...
STRIPE_PRICE_YEARLY_2X=price_...
STRIPE_PRICE_YEARLY_1X=price_...
```

**IMPORTANT : Gestion de `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`**

La clé privée contient des `\n` (sauts de ligne). Vous avez deux options :

**Option 1 (recommandée) :** Tout sur une ligne avec des `\n` échappés
```env
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQ...\n-----END PRIVATE KEY-----\n"
```

**Option 2 :** Garder le format multiligne du JSON (utiliser des guillemets simples ou doubles) :
```env
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQ...
-----END PRIVATE KEY-----
"
```

Le code dans `lib/sheets.ts` gère automatiquement le remplacement de `\\n` par de vrais sauts de ligne.

### 5. Lancer le projet en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 6. Tester le flux complet

1. Remplissez le formulaire sur la landing page
2. Cliquez sur "S'abonner maintenant"
3. Vous serez redirigé vers Stripe Checkout
4. Utilisez une carte de test Stripe :
   - Numéro : `4242 4242 4242 4242`
   - Date d'expiration : n'importe quelle date future
   - CVC : n'importe quel code à 3 chiffres
5. Validez le paiement
6. Vous serez redirigé vers `/success`
7. Vérifiez dans votre Google Sheet qu'une ligne a été créée/mise à jour avec `status = active`

## Déploiement sur Vercel

### 1. Préparer le projet

```bash
# Vérifier que le build fonctionne
npm run build

# Vérifier les types
npm run type-check
```

### 2. Déployer sur Vercel

#### Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

#### Via l'interface Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur "Add New Project"
3. Importez votre repository Git (GitHub, GitLab, Bitbucket)
4. Configurez les variables d'environnement dans les settings du projet :
   - Ajoutez TOUTES les variables de `.env.local`
   - **IMPORTANT** : Pour `NEXT_PUBLIC_BASE_URL`, utilisez l'URL de production (ex: `https://pickmynews.vercel.app`)
5. Cliquez sur "Deploy"

### 3. Configurer le webhook Stripe en production

1. Une fois déployé, récupérez l'URL de production (ex: `https://pickmynews.vercel.app`)
2. Dans Stripe Dashboard > Developers > Webhooks
3. Ajoutez un nouvel endpoint avec l'URL : `https://pickmynews.vercel.app/api/stripe-webhook`
4. Sélectionnez les mêmes events :
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copiez le nouveau **Signing secret**
6. Mettez à jour la variable `STRIPE_WEBHOOK_SECRET` dans Vercel (Settings > Environment Variables)
7. Redéployez si nécessaire

## Structure du projet

```
pickmynews/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Styles Tailwind
│   ├── success/
│   │   └── page.tsx            # Page de succès post-paiement
│   ├── cancel/
│   │   └── page.tsx            # Page d'annulation
│   └── api/
│       ├── create-checkout-session/
│       │   └── route.ts        # Création de session Stripe
│       └── stripe-webhook/
│           └── route.ts        # Gestion des webhooks Stripe
├── components/
│   ├── HeroSection.tsx         # Section hero de la landing
│   ├── PricingTable.tsx        # Grille tarifaire
│   └── SubscriptionForm.tsx    # Formulaire d'abonnement
├── lib/
│   ├── stripe.ts               # Client Stripe + helpers
│   ├── sheets.ts               # Client Google Sheets + CRUD
│   └── validation.ts           # Validation Zod + règles métier
├── types/
│   └── index.ts                # Types TypeScript
└── README.md
```

## Architecture des données

### Google Sheets - Structure de la table

Chaque ligne représente un abonné (1 email = 1 abonnement max).

| Colonne | Type | Description |
|---------|------|-------------|
| created_at | ISO string | Date de création de la ligne |
| name | string | Nom de l'abonné |
| email | string | Email (unique, clé de recherche) |
| theme | string | Thème choisi par l'utilisateur |
| plan_frequency | 1x, 2x, 5x, 7x | Nombre de newsletters par semaine |
| billing_period | weekly, monthly, yearly | Période de facturation |
| send_days | string | Jours d'envoi, format : "Lundi,Mercredi,Vendredi" |
| send_hour | string | Heure d'envoi, format : "08:00" |
| stripe_customer_id | string | ID du customer Stripe |
| stripe_subscription_id | string | ID de la subscription Stripe |
| status | pending, active, canceled, past_due | Statut de l'abonnement |
| last_event_at | ISO string | Date du dernier event Stripe traité |

### Stratégie de gestion des abonnés

**Règle métier : 1 email = 1 abonnement actif maximum.**

- Lors de la création d'une session Checkout, si l'email existe déjà dans le Sheet, on met à jour la ligne existante (dernière occurrence).
- Si l'email n'existe pas, on crée une nouvelle ligne avec `status = "pending"`.
- Lors de `checkout.session.completed`, on met à jour la ligne avec les IDs Stripe et `status = "active"`.
- Lors des events ultérieurs (`customer.subscription.updated`, `customer.subscription.deleted`), on met à jour le status et `last_event_at`.

Cette stratégie est implémentée dans [lib/sheets.ts](lib/sheets.ts) :
- `appendOrUpdateSubscriberRow()` : création ou mise à jour par email
- `updateSubscriberByEmail()` : mise à jour par email (dernière occurrence)
- `updateSubscriberByStripeCustomerId()` : mise à jour par customer Stripe ID

## Flux utilisateur

```
1. Utilisateur remplit le formulaire sur "/"
   ↓
2. POST /api/create-checkout-session
   - Validation des données
   - Récupération du bon price_id Stripe
   - Création de la session Checkout
   - Création/MAJ ligne Google Sheets (status = "pending")
   ↓
3. Redirection vers Stripe Checkout
   ↓
4. Utilisateur paie
   ↓
5. Stripe envoie webhook "checkout.session.completed"
   ↓
6. POST /api/stripe-webhook
   - Vérification de la signature
   - MAJ Google Sheets (status = "active", ajout des IDs Stripe)
   ↓
7. Redirection vers "/success"
```

## Events Stripe gérés

Le webhook [app/api/stripe-webhook/route.ts](app/api/stripe-webhook/route.ts) gère les events suivants :

- **`checkout.session.completed`** : Paiement initial réussi → passage à `status = "active"`
- **`customer.subscription.updated`** : Abonnement mis à jour → mise à jour du status selon l'état Stripe
- **`customer.subscription.deleted`** : Abonnement annulé → passage à `status = "canceled"`

**Mapping des status Stripe :**

| Stripe status | Notre status |
|---------------|--------------|
| active | active |
| past_due | past_due |
| canceled | canceled |
| unpaid | past_due |
| incomplete | pending |
| incomplete_expired | canceled |
| trialing | active |
| paused | canceled |

## Validation des données

La validation est effectuée à deux niveaux :

### Côté client (SubscriptionForm.tsx)

- Champs requis non vides
- Format email valide
- Cohérence `send_days.length === plan_frequency` (1, 2, 5 ou 7 jours)
- Heure pleine uniquement (minutes = `00`)
- Consentement légal obligatoire

### Côté serveur (lib/validation.ts)

- Validation avec **Zod** (`subscriptionFormSchema`)
- Validation supplémentaire de la cohérence send_days / plan_frequency
- Fonction `validateSubscriptionData()` centralise toutes les validations

## Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start

# Vérification TypeScript
npm run type-check

# Linting
npm run lint
```

## Dépannage

### Erreur "Price ID introuvable"

Vérifiez que toutes les variables `STRIPE_PRICE_*` sont bien renseignées dans `.env.local`.

### Erreur Google Sheets "Permission denied"

1. Vérifiez que le service account a bien accès au Sheet (droits Éditeur)
2. Vérifiez que l'API Google Sheets est activée dans votre projet GCP
3. Vérifiez le format de `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (avec les `\n`)

### Webhook Stripe non reçus en local

Utilisez Stripe CLI pour forwarder les webhooks :
```bash
stripe listen --forward-to localhost:3000/api/stripe-webhook
```

### Erreur de signature webhook

Vérifiez que `STRIPE_WEBHOOK_SECRET` correspond bien au signing secret de votre endpoint webhook (différent entre dev et prod).

## Sécurité

- Les clés Stripe et Google ne doivent JAMAIS être committées dans Git
- Le fichier `.env.local` est ignoré par `.gitignore`
- La signature des webhooks Stripe est vérifiée systématiquement
- Les données sont validées côté client ET serveur

## Support et développement

Pour toute question ou amélioration, consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Stripe](https://stripe.com/docs/api)
- [Documentation Google Sheets API](https://developers.google.com/sheets/api)

## Licence

Propriétaire - PickmyNews
