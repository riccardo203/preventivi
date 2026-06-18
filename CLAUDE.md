# CLAUDE.md — Omira Preventivi

## What this is

A Next.js 15 App Router project that generates fullscreen, scroll-snap commercial proposals (preventivi) for Omira clients. Each proposal is a vertical presentation — one `h-screen` section per slide, `scrollSnapType: y mandatory`. PDF export is handled via `@media print` overrides already in place.

This project is used by Riccardo Carboni (non-technical, sales). He will give instructions in natural Italian. Your job is to translate those into precise code changes.

---

## Tech stack

- **Next.js 15 App Router** — file-based routing, `"use client"` only where needed (DOM refs, event listeners)
- **Tailwind CSS v4** — design tokens live in `app/globals.css`; do not inline colours that have a token
- **Lucide React** — icon library already installed
- **Next.js Image** — always use `<Image>` from `next/image`, never `<img>`

### Design tokens (from globals.css)
```
heading-display     — large display headings
label-section       — small uppercase section label (e.g. "Chi siamo")
body-large          — body text at a comfortable reading size
text-text-primary   — main text colour
text-text-secondary — secondary text colour
text-text-muted     — muted/caption text colour
border-border       — default border colour
```

---

## Project structure

```
app/
  proposals/
    template/           ← THE MASTER TEMPLATE — always clone this for new proposals
      page.tsx          ← imports and orders all slides
      sections/         ← one .tsx file per slide
    CF7SP/              ← example completed proposal
    aria-janas/         ← older proposal (pre-template, for reference only)
  globals.css
  layout.tsx
  page.tsx              ← homepage listing all proposals

public/
  omira-logo-new.png
  rivon-logo-dark.png
  background-omira-orange.jpeg
  founder-portraits/    ← riccardo.jpeg, mattia.jpeg, jonny.jpeg, camillo.jpeg, gianmarco.png, cristian.jpeg
  client-logos/         ← one file per client logo (png or svg)
  people/               ← client portrait photos for PersonePrimaDiBrand
```

---

## Creating a new proposal

**Always clone `app/proposals/template/` into `app/proposals/<slug>/`.** Never build from scratch.

Steps:
1. Copy the entire `template/` folder to `app/proposals/<slug>/`
2. Update `page.tsx` metadata: `title`, function name
3. Update every slide with client-specific content (see per-slide notes below)
4. Add a link on `app/page.tsx` if one exists

**Naming convention:** slug is lowercase, hyphenated. E.g. `pizzeria-mario`, `hotel-del-golfo`.

---

## Slides — what to change per client

### 1. `Cover.tsx`
Client-specific: the large `<h1>` text (client name), the date in the bottom-right corner, and the subtitle line if needed. Background image is always `/background-omira-orange.jpeg`.

### 2. `ChiSiamoRivon.tsx`
**Do not change.** This is the Rivon parent-brand slide — it is identical across all proposals. Contains DOM-ref SVG bezier lines; uses `"use client"`.

### 3. `ChiSiamo.tsx`
**Do not change the team list.** The `TEAM` array contains the six Omira team members with their portrait paths. The heading and body copy are generic Omira copy — only update if explicitly asked.

### 4. `QuelloCheSiamoVisto.tsx`
Most client-specific slide. Change:
- The `heading-display` paragraph — an affirming observation about what the client does well (e.g. "Ristorante da Mario offre una cucina autentica…")
- The `body-large` paragraph — the gap or problem (e.g. "Il problema non è il prodotto. È che fuori da chi già vi conosce, nessuno lo sa ancora.")
- The right-hand image: swap `src` for a client photo placed in `public/`

### 5. `LaGrandeDomanda.tsx`
Change the single `heading-display` question. It should be the consequence/aspiration question tailored to the client (e.g. "Se foste il ristorante più conosciuto di Sassari, cosa succederebbe?").

### 6. `ComeLavoriamo.tsx`
**Do not change.** Generic 4-step process (Analisi → Strategia → Produzione → Crescita e Controllo). Dark navy background (`#1a1a2e`).

### 7. `ClientiLoghi.tsx`
**Do not change** unless asked to add/remove a logo. The `LOGOS` array lists all client logos from `public/client-logos/`. The `SCALE` dict adjusts individual logo sizes. Logos are distributed across 5 rows via `splitRows()`.

### 8. `PersonePrimaDiBrand.tsx`
**Do not change** unless asked. Contains 8 real client portraits from `public/people/`, positioned radially around the "Persone prima di Brand" heading. Source convergence point: `SOURCE = { x: 50, y: 54 }`.

### 9. `UnPartner.tsx`
The `ITEMS` array lists all the outcomes/benefits that converge via bezier lines to the Omira logo. These are generic. Only change if explicitly asked.

### 10. `ScenarioA.tsx`
Client-specific pricing. Change:
- The `heading-display` title (e.g. "Opzione 1: [Nome Cliente]")
- The `TIERS` array: `name`, `price`, `posts`, `features` for each of Essential / Pro / Premium
- The website add-on row inside each tier card: update client name and price if applicable
- `highlighted: true` marks the recommended tier (default: middle/Pro)

### 11. `ScenarioB.tsx`
Optional second pricing scenario. Same structure as ScenarioA but with a different scope/price point. Remove from `page.tsx` if the client only needs one scenario.

### 12. `ProssimiPassi.tsx`
**Do not change.** Generic 3-step close: "Mi dite sì → Contratto e primo pagamento → Kick-off". Footer shows Omira logo + `hello@byrivon.com`.

---

## Scroll snap

Every `<section>` must have:
```tsx
style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
```
The `<main>` in `page.tsx` has `style={{ scrollSnapType: "y mandatory" }}`. Do not remove either.

## "use client" rule

Only add `"use client"` to components that use `useRef`, `useEffect`, `useState`, or DOM event listeners. Server components (no interactivity) should remain without it.

## SVG bezier line components

`ChiSiamoRivon` and `UnPartner` use a `useRef` + `useEffect` + `getBoundingClientRect` pattern to draw accurate cubic bezier lines between DOM nodes. When modifying these, always preserve the `update` function and the `resize` event listener.

---

## Dev server

```
npm run dev   →   http://localhost:3000
```
Run `npm install` first if `node_modules` is missing.

---

## Deploying

```
git add -A && git commit -m "..." && git push
```
Vercel auto-deploys on push to main. Remote: `riccardo203/preventivi`.

---

## Do not touch

- `app/globals.css` — design tokens and base styles
- `app/layout.tsx` — root layout
- `next.config.mjs`, `tsconfig.json`, `package.json` — project config
- `public/omira-logo-new.png`, `public/rivon-logo-dark.png` — brand assets
