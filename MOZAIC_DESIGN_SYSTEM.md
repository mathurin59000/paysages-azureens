# Guide Complet — Mozaic Design System (Adeo)

Documentation de référence pour appliquer le design system Mozaic d'Adeo sur ce projet.
Source officielle : [mozaic.adeo.cloud](https://mozaic.adeo.cloud) | [GitHub](https://github.com/adeo/mozaic-design-system)

---

## Table des matières

1. [Principes fondamentaux](#1-principes-fondamentaux)
2. [Typographie](#2-typographie)
3. [Couleurs](#3-couleurs)
4. [Espacement — Magic Unit](#4-espacement--magic-unit)
5. [Layout & Grid](#5-layout--grid)
6. [Breakpoints](#6-breakpoints)
7. [Bordures & Radius](#7-bordures--radius)
8. [Ombres](#8-ombres)
9. [Tokens de design](#9-tokens-de-design)
10. [Composants](#10-composants)
11. [Accessibilité](#11-accessibilité)
12. [Conventions CSS](#12-conventions-css)

---

## 1. Principes fondamentaux

Mozaic est le design system open-source d'Adeo/Leroy Merlin. Il est fondé sur la **Magic Unit** (unité magique) comme étalon de toutes les dimensions, assurant une grille verticale cohérente.

- Toutes les dimensions (padding, margin, font-size, line-height, icon size…) sont des **multiples ou fractions de la Magic Unit**
- Les tokens sont définis en JSON, compilés en SCSS/CSS variables via [style-dictionary](https://amzn.github.io/style-dictionary/)
- Les tokens SCSS utilisent la notation avec tiret : `color.button.solid.background` → `$color-button-solid-background`
- Package npm : `@mozaic-ds/styles` (importe `@mozaic-ds/tokens`)

---

## 2. Typographie

### Police principale

| Rôle | Police | Fallback |
|---|---|---|
| Titres (headings) | **LeroyMerlin** | sans-serif |
| Corps de texte | **LeroyMerlin Semi-Bold** | Arial, sans-serif |

Mixin SCSS : `set-font-face('regular')` → `font-family: LeroyMerlin, Arial, sans-serif; font-weight: 400;`

### Échelle typographique

Base : `1rem = 16px` (local-rem-value)

| Token | rem | px | Usage typique |
|---|---|---|---|
| `size.font.01` | 0.6815rem | ~11px | Labels très petits, badges |
| `size.font.02` | 0.75rem | 12px | Mentions légales, captions |
| `size.font.03` | 0.8125rem | 13px | Notes, helper texts |
| `size.font.04` | 0.875rem | 14px | Body small, labels |
| `size.font.05` | 1rem | 16px | Body par défaut |
| `size.font.06` | 1.125rem | 18px | Body large, sous-titres |
| `size.font.07` | 1.4375rem | 23px | Heading small (h3) |
| `size.font.08` | 1.75rem | 28px | Heading medium (h2) |
| `size.font.09` | 2.125rem | 34px | Heading large (h1) |
| `size.font.10` | 2.5625rem | 41px | Display small |
| `size.font.11` | 3.0625rem | 49px | Display medium |
| `size.font.12` | 3.6875rem | 59px | Display large / Hero |

### Line heights

Les line-heights sont calculées pour s'aligner sur la Magic Unit :
- Tailles **< 18px** : subdivision 1/8 de Magic Unit (multiples de 2px)
- Tailles **> 18px** : subdivision 1/4 de Magic Unit (multiples de 4px)

Chaque token de font-size possède des variantes responsive pour les 4 viewports : `xs`, `s`, `m`, `l`.

### Classes typographiques

Mozaic définit des **classes de texte** (text classes) qui regroupent plusieurs tailles selon le viewport :

- **Body** : texte courant, adapté pour les paragraphes
- **Heading** : titres de page, hiérarchie h1→h6
- **Hero** : grands titres à fort impact (landing pages, pages marketing)
- **Display** : tailles extrêmes pour des mises en avant visuelles

**Heading styles :** chaque heading a des tailles dépendant du breakpoint. Le *Medium heading* est le style par défaut.

**Alignement :** `left` / `center` / `right` disponibles. Deux font-weights disponibles pour les headings.

---

## 3. Couleurs

### Primary-01 — Vert (couleur de marque Leroy Merlin)

| Nuance | Hex | Usage |
|---|---|---|
| 100 | `#EBF5DE` | Arrière-plan léger, hover |
| 200 | `#C5E39E` | Surfaces légères |
| 300 | `#9ED05F` | Accent léger |
| 400 | `#78BE20` | Accent intermédiaire |
| 500 | `#46A610` | Couleur principale (underline heading) |
| 600 | `#188803` | **Couleur de lien principal, texte interactif** |
| 700 | `#006902` | Hover sombre |
| 800 | `#035010` | État actif |
| 900 | `#023618` | Texte sombre sur fond clair |

Token de référence : `{color.primary-01.600.value}` = couleur texte lien par défaut

### Primary-02 — Gris bleuté (neutre de marque)

| Nuance | Hex | Usage |
|---|---|---|
| 100 | `#EEEFF1` | Fond alternatif |
| 200 | `#CFD2D8` | Bordures légères |
| 300 | `#B3B7C1` | Texte désactivé |
| 400 | `#8F94A3` | Placeholders |
| 500 | `#6A7081` | **Couleur texte secondaire** |
| 600 | `#494F60` | Texte sur fond clair |
| 700 | `#343B4C` | Texte important |
| 800 | `#242938` | Quasi-noir, bordures |
| 900 | `#171B26` | Fond sombre, texte sur fond blanc |

### Grey — Gris neutres

| Nuance | Hex | Usage |
|---|---|---|
| 000 | `#FFFFFF` | Blanc pur |
| 100 | `#E6E6E6` | Fond désactivé |
| 200 | `#CCCCCC` | Séparateurs |
| 300 | `#B3B3B3` | Bordures légères |
| 400 | `#999999` | Placeholder |
| 500 | `#808080` | Texte disabled |
| 600 | `#666666` | Texte clair |
| 700 | `#4D4D4D` | Texte moyen |
| 800 | `#333333` | **Texte dark (`color.font.dark`)** |
| 900 | `#191919` | Texte très sombre |
| 999 | `#000000` | Noir pur (`color.font.darkest`) |

### Couleurs secondaires

#### Blue (Info)
`#DAEFF7` → `#A7D9ED` → `#73C3E2` → `#3FACD7` → `#0B96CC` → `#007BB4` → `#005C91` → `#003A5C` → `#002A41`

(100 → 900)

#### Purple
`#EFEBFE` → `#C7B0FA` → `#A575F3` → `#883BE9` → `#7000DD` → `#5803B3` → `#42058A` → `#2E0663` → `#1C053D`

#### Red (Danger)
`#FDEAEA` → `#F8BCBB` → `#F38D8C` → `#EF5F5C` → `#EA302D` → `#C61112` → `#8C0003` → `#530000` → `#2D0000`

#### Orange (Warning)
`#FDF1E8` → `#F8D2B3` → `#F4B27E` → `#EF934A` → `#EA7315` → `#C65200` → `#8C3500` → `#531B00` → `#360E00`

#### Yellow
`#FFF8E2` → `#FFEBAF` → `#FEE07D` → `#FCD64C` → `#F8CC1C` → `#C9A21B` → `#9C7B18` → `#705613` → `#46350D`

### Couleurs sémantiques (aliases)

| Sémantique | Alias vers |
|---|---|
| `color.info` | Secondary Blue |
| `color.success` | Primary-01 (Green) |
| `color.warning` | Secondary Orange |
| `color.danger` | Secondary Red |

### Tokens de couleur de texte (font tokens)

| Token | Valeur résolue |
|---|---|
| `color.font.primary-01` | `primary-01.600` = `#188803` |
| `color.font.primary-02` | `primary-02.500` = `#6A7081` |
| `color.font.darkest` | `grey.999` = `#000000` |
| `color.font.darker` | `grey.900` = `#191919` |
| `color.font.dark` | `grey.800` = `#333333` |
| `color.font.light` | `grey.600` = `#666666` |
| `color.font.lightest` | `grey.000` = `#FFFFFF` |
| `color.font.info` | `info.600` = `#007BB4` |
| `color.font.success` | `success.600` = `#188803` |
| `color.font.warning` | `warning.600` = `#C65200` |
| `color.font.danger` | `danger.600` = `#C61112` |

### Couleurs notifications/alertes

Chaque variante (info, success, warning, danger) suit ce schéma :

| Élément | Token | Résolution |
|---|---|---|
| Background | `color.[variant].100` | Teinte très claire |
| Bordure | `color.[variant].500` | Teinte moyenne |
| Icône | `color.[variant].600` | Teinte foncée |
| Texte | `color.grey.999` | Noir |

### Couleurs boutons

| Variant | Background | Border | Text |
|---|---|---|---|
| Solid (primary-01) | `primary-01.600` | — | `grey.000` |
| Solid (primary-02) | `primary-02.500` | — | `grey.000` |
| Solid neutral | `grey.800` | — | `grey.000` |
| Solid danger | `danger.600` | — | `grey.000` |
| Bordered (primary-01) | `grey.000` | `primary-01.600` | `primary-01.600` |
| Bordered (primary-02) | `grey.000` | `primary-02.500` | `primary-02.500` |
| Bordered neutral | `grey.000` | `grey.800` | `grey.800` |
| Bordered danger | `grey.000` | `danger.600` | `danger.600` |

Chaque variante a des états : **default**, **hover**, **active**, **focus**, **disabled**.

### Couleurs liens (link tokens)

Variantes disponibles : `dark`, `light`, `primary`, `primary-02`, `danger`

États : `base`, `visited`, `active`, `disabled` (`grey.100` pour tous les disabled), `hover`

---

## 4. Espacement — Magic Unit

### Concept

La **Magic Unit (μ)** est l'unité de base de l'espacement Mozaic :

```
1 μ = 16px = 1rem
```

Elle se subdivise et se multiplie :

| Fraction/Multiple | px | rem |
|---|---|---|
| 1/8 μ | 2px | 0.125rem |
| 1/4 μ | 4px | 0.25rem |
| 1/2 μ | 8px | 0.5rem |
| 1 μ | 16px | 1rem |
| 2 μ | 32px | 2rem |
| 3 μ | 48px | 3rem |
| 4 μ | 64px | 4rem |
| 5 μ | 80px | 5rem |
| 6 μ | 96px | 6rem |
| 8 μ | 128px | 8rem |
| 10 μ | 160px | 10rem |
| 12 μ | 192px | 12rem |

### Règles d'application

- **Toujours** utiliser des multiples ou fractions de la Magic Unit pour les paddings et margins
- Les gutters et marges de grille doivent être des multiples de la Magic Unit
- Les line-heights sont calculées pour s'aligner sur la Magic Unit (grille verticale)
- Les tailles d'icônes, espacements internes de composants suivent ce même principe

### Classes utilitaires

Le préfixe `.mu-` identifie les classes utilitaires Mozaic :

```scss
// Import
@import '@mozaic-ds/styles/elements/u.spaces.scss';
```

Mozaic génère des classes utilitaires pour les directions : `top`, `right`, `bottom`, `left`, `horizontal` (x), `vertical` (y), `all`.

---

## 5. Layout & Grid

### Principes

- Grille **12 colonnes** (12 est divisible par 1, 2, 3, 4, 6, 12)
- Système Flexbox nommé **"Flexy"** (pas "grid"), utilisable au niveau page ET composant
- Deux types de containers :
  - **Default container** : largeur fixe avec max-width à partir du breakpoint L
  - **Fluid container** : largeur 100% à tous les breakpoints

### Colonnes et gutters

| Breakpoint | Colonnes | Gutter |
|---|---|---|
| s (mobile) | 12 | 1μ (16px) |
| m (tablette) | 12 | 2μ (32px) |
| l+ (desktop) | 12 | 2μ (32px) |

Token gutter : `size.gutter.screen.s` = 1, `size.gutter.screen.m` = 2

### Utilisation de la grille

Un élément occupe un nombre de colonnes. Il doit toujours s'appuyer sur une ou plusieurs colonnes (pas d'alignement hors-grille). Flexy permet la composition de mises en page complexes par imbrication.

### Container

```html
<!-- Container par défaut (max-width sur L+) -->
<div class="mc-container">...</div>

<!-- Container fluide (100% toujours) -->
<div class="mc-container mc-container--fluid">...</div>
```

---

## 6. Breakpoints

| Token | px | Description |
|---|---|---|
| `s` | 0px | Mobile small (base, mobile first) |
| `s-medium` | 320px | Mobile moyen |
| `s-large` | 360px | Mobile large |
| `s-xlarge` | 390px | Mobile très large |
| `m` | 680px | Tablet portrait |
| `m-medium` | 769px | Tablet paysage |
| `l` | 1024px | Desktop small |
| `l-medium` | 1100px | Desktop moyen |
| `xl` | 1280px | Desktop large |
| `xl-medium` | 1440px | Desktop HD |
| `xl-large` | 1680px | Desktop très large |
| `xxl` | 1920px | Écrans ultra-larges |

### Approche responsive

Mozaic suit une approche **mobile-first**. Les styles de base s'appliquent au breakpoint `s` (0px), puis sont surchargés progressivement.

En SCSS :
```scss
// Breakpoint m et plus
@include set-from-screen('m') {
  // styles à partir de 680px
}
```

---

## 7. Bordures & Radius

### Épaisseurs de bordure

| Token | Valeur |
|---|---|
| `border.s` | 1px |
| `border.m` | 2px |
| `border.l` | 3px |

### Border radius

| Token | Valeur | Usage |
|---|---|---|
| `radius.s` | 2px | Petits éléments (badges, tags) |
| `radius.m` | 4px | Composants standards (inputs, boutons) |
| `radius.l` | 6px | Cards, modales, panneaux |

Classes utilitaires disponibles : `.mc-border-radius--s`, `.mc-border-radius--m`, `.mc-border-radius--l`

### Couleur de bordure focus

Le token `color.focus` définit la couleur du contour de focus pour l'accessibilité (outline visible au clavier).

---

## 8. Ombres

Les ombres utilisent une couleur noire à 20% d'opacité, avec des offsets et blurs progressifs :

| Token | CSS équivalent | Usage |
|---|---|---|
| `shadow.s` | `0px 1px 5px rgba(0,0,0,0.2)` | Cards plates, hover subtil |
| `shadow.m` | `0px 2px 10px rgba(0,0,0,0.2)` | Cards standard, dropdowns |
| `shadow.l` | `0px 4px 20px rgba(0,0,0,0.2)` | Modales, overlays, tiroirs |

Classes utilitaires : `.mc-shadow--s`, `.mc-shadow--m`, `.mc-shadow--l`

---

## 9. Tokens de design

### Organisation des tokens

```
packages/tokens/properties/
├── border/
│   └── base.json          # épaisseurs de bordures
├── color/
│   ├── base.json          # palette complète de couleurs
│   ├── button.json        # couleurs des boutons
│   ├── fields.json        # couleurs des champs de formulaire
│   ├── font.json          # couleurs de texte
│   ├── heading.json       # couleurs des titres
│   ├── link.json          # couleurs des liens
│   ├── notification.json  # couleurs des notifications
│   └── [composant].json   # couleurs par composant
├── radius/
│   └── base.json          # border radius
├── shadow/
│   └── base.json          # ombres
└── size/
    ├── base.json          # magic-unit (1) et local-rem-value (16)
    ├── font.json          # échelle typographique
    ├── grid.json          # gouttières de grille
    └── screens.json       # breakpoints
```

### Nomenclature SCSS

Les tokens JSON sont compilés en variables SCSS. Les points (`.`) sont remplacés par des tirets (`-`) :

```scss
// Token JSON : color.primary-01.600.value
$color-primary-01-600: #188803;

// Token JSON : size.font.05.value
$size-font-05: 1rem;

// Token JSON : shadow.m.value
$shadow-m: 0px 2px 10px rgba(0,0,0,0.2);
```

### Personnalisation des tokens

Pour adapter le design system à une marque différente, surcharger les tokens avec la même structure de fichiers dans le projet :

```
@mozaic-ds/tokens (base)
└── projet-custom/tokens/properties/
    └── color/
        └── base.json  # surcharge les couleurs de marque
```

---

## 10. Composants

### Boutons

```html
<!-- Solid primary -->
<button class="mc-button mc-button--solid">Action</button>

<!-- Solid danger -->
<button class="mc-button mc-button--solid-danger">Supprimer</button>

<!-- Bordered (outlined) -->
<button class="mc-button mc-button--bordered">Annuler</button>

<!-- Tailles : s, m (défaut), l -->
<button class="mc-button mc-button--solid mc-button--s">Petit</button>
```

**Toujours** inclure `type="button"` sur les `<button>` hors formulaire.

### Formulaires

**Champs de saisie :**
- Label : `color.font.dark` (`#333333`)
- Texte d'aide (helper) : `color.font.light` (`#666666`)
- Mention obligatoire : `color.font.light`
- Erreur : `color.font.danger` (`#C61112`)

```html
<div class="mc-field">
  <label class="mc-field__label" for="input-id">Label</label>
  <span class="mc-field__requirement">Obligatoire</span>
  <input class="mc-field__input" type="text" id="input-id">
  <span class="mc-field__help">Texte d'aide</span>
  <span class="mc-field__error-msg">Message d'erreur</span>
</div>
```

### Composants disponibles

| Catégorie | Composants |
|---|---|
| Actions | Button, Link |
| Navigation | Breadcrumb, Tabs, Stepper, Sidebar, Menu |
| Formulaires | Input, TextArea, Select, Checkbox, Radio, Toggle, DatePicker, PhoneNumberInput, PasswordInput, QuantitySelector |
| Feedback | Notification, ProgressBar, Loader |
| Contenu | Card, Heading, Badge, Tag, Flag, Divider, Star rating |
| Overlay | Dialog, Tooltip, Overlay |
| Sélection | ListBox, OptionButton, OptionCard |
| Données | DataTable |
| Médias | Hero |
| Segmentation | SegmentedControl |

### Cards

```html
<div class="mc-card">
  <div class="mc-card__body">
    <!-- contenu de la carte -->
  </div>
</div>
```

---

## 11. Accessibilité

### Principes WCAG

Mozaic vise la conformité **WCAG 2.1 AA** :
- Contrastes de couleurs respectés pour tout le texte
- États de focus visibles (token `color.focus` pour outline)
- Composants interactifs accessibles au clavier
- ARIA labels sur les composants complexes

### Attributs obligatoires

**Boutons :**
```html
<button id="btn-id" type="button" aria-label="Description de l'action">...</button>
```

**Listes (ListBox) :**
```html
<ul role="list">
  <li role="listitem">...</li>
</ul>
```

**Groupes d'options :**
- Multiple : toujours utiliser des `<input type="checkbox">`
- Unique : toujours utiliser des `<input type="radio">`

### Contraste de couleurs recommandé

- Texte principal sur fond blanc : utiliser `grey.800` (`#333333`) ou plus foncé (ratio ≥ 4.5:1)
- Texte secondaire : `grey.600` (`#666666`) minimum (ratio ≥ 4.5:1)
- Texte d'interface grande taille : ratio ≥ 3:1

---

## 12. Conventions CSS

### Nomenclature BEM avec préfixe Mozaic

Mozaic utilise une convention BEM adaptée :

```
mc-[block]__[element]--[modifier]
```

- `mc-` : préfixe Mozaic Component (composants)
- `mu-` : préfixe Mozaic Utility (classes utilitaires)

Exemples :
```css
.mc-button              /* composant bouton */
.mc-button__icon        /* élément icône du bouton */
.mc-button--solid       /* modificateur solid */
.mc-button--disabled    /* modificateur disabled */

.mu-mt-100              /* utility: margin-top */
.mu-p-200               /* utility: padding */
```

### Import des styles

```scss
// Import complet
@import '@mozaic-ds/styles';

// Import sélectif
@import '@mozaic-ds/styles/elements/u.spaces.scss';  // espacements
@import '@mozaic-ds/styles/components/button';        // boutons
```

### Personnalisation via tokens

```scss
// Surcharger avant l'import
$color-primary-01-600: #votre-couleur;

@import '@mozaic-ds/styles';
```

### Stylelint

Mozaic fournit un plugin Stylelint (`@mozaic-ds/stylelint-plugin-mozaic`) pour valider le respect des conventions.

---

## Récapitulatif rapide

| Concept | Valeur clé |
|---|---|
| Couleur principale | `#188803` (primary-01.600) |
| Couleur secondaire | `#6A7081` (primary-02.500) |
| Fond | `#FFFFFF` (grey.000) |
| Texte principal | `#333333` (grey.800) |
| Texte secondaire | `#666666` (grey.600) |
| Danger | `#C61112` (danger.600) |
| Warning | `#C65200` (warning.600) |
| Info | `#007BB4` (info.600) |
| Success | `#188803` (success.600) |
| Font | LeroyMerlin, Arial, sans-serif |
| Font size base | 16px = 1rem = 1μ |
| Grille | 12 colonnes, Flexbox |
| Gutter mobile | 16px (1μ) |
| Gutter tablette+ | 32px (2μ) |
| Border radius std | 4px (radius.m) |
| Shadow standard | 0 2px 10px rgba(0,0,0,.2) |
| Breakpoint tablet | 680px |
| Breakpoint desktop | 1024px |
