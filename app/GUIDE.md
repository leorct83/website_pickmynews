# 🚀 PickmyNews — Guide de Refonte Landing Page

## 📁 Structure des fichiers

```
pickmynews/
├── globals.css              # Styles globaux + variables CSS
├── layout.tsx               # Layout Next.js
├── page.tsx                 # Page principale
├── tailwind.config.ts       # Configuration Tailwind
└── components/
    ├── Navbar.tsx           # Navigation fixe
    ├── HeroSection.tsx      # Hero avec accroche
    ├── PainPoints.tsx       # Section problème (stats)
    ├── HowItWorks.tsx       # 3 étapes
    ├── Benefits.tsx         # 6 avantages
    ├── Testimonials.tsx     # Témoignages + stats
    ├── PricingTable.tsx     # Grille tarifaire
    ├── FAQ.tsx              # FAQ accordion
    ├── SubscriptionForm.tsx # Formulaire inscription
    ├── FinalCTA.tsx         # CTA final
    └── Footer.tsx           # Footer
```

---

## 🎨 Direction Esthétique

### Typographie
- **Titres** : DM Serif Display (élégant, éditorial)
- **Corps** : DM Sans (moderne, lisible)

### Palette de couleurs
| Usage | Couleur | Code |
|-------|---------|------|
| Primaire (CTA) | Ambre | `#f59e0b` |
| Texte principal | Navy | `#0f172a` |
| Fond principal | Crème | `#fafaf9` |
| Fond sections | Blanc | `#ffffff` |
| Fond sombre | Slate 900 | `#0f172a` |

### Style visuel
- Coins arrondis généreux (`rounded-2xl`, `rounded-3xl`)
- Ombres subtiles (`shadow-xl`, `shadow-2xl`)
- Dégradés légers en arrière-plan
- Animations au scroll (fade-in-up)
- Hover states soignés

---

## 📝 Copywriting — Points clés

### Headline Principal (Hero)
> **Arrêtez de scroller sans fin.**
> **L'info qui compte vient à vous.**

✅ Adresse le problème directement
✅ Promesse claire et bénéfice immédiat
✅ Ton direct, pas corporate

### Sous-titre
> Recevez une newsletter personnalisée sur **le sujet de votre choix**, au **moment que vous décidez**. Sans bruit. Sans distraction.

### CTAs Variés
- Principal : "Créer ma newsletter" / "Commencer gratuitement"
- Secondaire : "Voir comment ça marche"
- Pricing : "Essayer 14 jours gratuit"
- Final : "Démarrer mon essai gratuit"

---

## 🔄 Flow Narratif

```
1. HERO → Accroche (problème + promesse)
2. PAIN POINTS → Amplifier le problème avec stats
3. HOW IT WORKS → Montrer la simplicité (3 étapes)
4. BENEFITS → Lister les avantages concrets
5. TESTIMONIALS → Preuve sociale (témoignages + chiffres)
6. PRICING → Offres claires, sans surprise
7. FAQ → Lever les objections
8. FORM → Conversion facile
9. FINAL CTA → Dernière chance
10. FOOTER → Crédibilité et liens
```

---

## ⚡ Quick Wins Conversion

1. **Badge social proof** dans le hero ("Déjà 2 847 lecteurs satisfaits")
2. **Trust signals** sous le CTA principal (essai gratuit, sans CB, annulation facile)
3. **Stats de pain points** pour créer l'urgence
4. **Toggle Mensuel/Annuel** avec badge "-20%"
5. **Plan populaire** mis en avant visuellement (scale, couleur)
6. **Garantie satisfait ou remboursé** visible
7. **Avatars + étoiles** près des formulaires
8. **Suggestions de thèmes** cliquables dans le formulaire

---

## 🎯 Améliorations UX

### Hiérarchie visuelle
- Titres en `text-4xl` à `text-6xl` (DM Serif Display)
- Corps en `text-lg` à `text-xl`
- Contraste fort (texte sombre sur fond clair)

### Espacement
- Sections : `py-24` (96px vertical)
- Container : `max-w-7xl` avec `px-6 lg:px-8`
- Grids : `gap-6` à `gap-8`

### Navigation
- Navbar fixe avec effet de fond au scroll
- Smooth scroll vers les sections
- Ancres avec `scroll-mt-nav` pour offset

### Mobile
- Grids responsive (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Stack vertical des CTAs sur mobile
- Tailles de texte adaptatives (`clamp()`)

---

## 🌟 Inspirations

- **Notion** : Clarté, hiérarchie, espace
- **Linear** : Animations subtiles, dark sections
- **The Economist** : Typographie éditoriale
- **Superhuman** : Premium feel, testimonials
- **Basecamp** : Copywriting direct et honnête

---

## 📋 Checklist d'implémentation

- [ ] Installer les dépendances (`npm install`)
- [ ] Ajouter les fonts Google dans `layout.tsx` ou via CSS
- [ ] Configurer `tailwind.config.ts`
- [ ] Placer les composants dans `/components`
- [ ] Importer les composants dans `page.tsx`
- [ ] Ajouter le `globals.css` dans le layout
- [ ] Tester le responsive (mobile, tablet, desktop)
- [ ] Vérifier les animations au scroll
- [ ] Connecter le formulaire à votre backend
- [ ] Ajouter les liens réels (CGU, mentions légales, etc.)

---

## 🔧 Installation rapide

```bash
# Dans ton projet Next.js existant
cp -r pickmynews/* app/

# Ou créer un nouveau projet
npx create-next-app@latest pickmynews --typescript --tailwind --app
```

Bon lancement ! 🚀
