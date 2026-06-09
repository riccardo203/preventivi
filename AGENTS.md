# AGENTS.md — Omira Preventivi

## What this is

This project exists for one purpose: **building and presenting commercial proposals (preventivi) for Omira clients.**

It is a Next.js app. You do not need to understand Next.js. Just tell Codex what you need and it will handle the code. Your job is to describe the client, the services, and the prices.

---

## How to preview your work

Before you can see anything, you need a dev server running. Ask Codex:

> "Avvia il dev server"

Then open your browser at **http://localhost:3000**. The page will live-update as you make changes.

---

## How proposals work

Each proposal is a fullscreen, scroll-snap presentation — one slide per section. You scroll down to advance.

Every proposal lives at:
```
app/proposals/[nome-cliente]/
  page.tsx          ← puts the slides in order
  sections/         ← one file per slide
```

---

## The template: Aria & Janas Hotel

The existing proposal at `app/proposals/aria-janas/` is the **reference template**. It contains these slides in order:

1. **Cover** — client name, location, date
2. **ChiSiamo** — team portraits and intro
3. **QuelloCheSiamoVisto** — opening observation about the client
4. **ComeLavoriamo** — 4-step process
5. **IlNostroLavoro** — Transumanza case study
6. **UnPartner** — convergence diagram (list of outcomes → Omira logo)
7. **ScenarioA** — pricing for one client
8. **ScenarioB** — pricing for two clients (e.g. restaurant + hotel)
9. **ProssimiPassi** — next steps

---

## How to create a new proposal

Tell Codex something like:

> "Devo fare un preventivo per [Nome Cliente], un ristorante a [Città]. Si chiama [nome]. Scenario singolo. I prezzi sono Essential 1.200€, Pro 1.500€, Premium 2.200€."

Codex will:
1. Duplicate the aria-janas folder with a new name
2. Update all the text, names, prices, and copy
3. Add it to the home page

You can then refine slide by slide.

---

## Team portraits

Portrait photos are in `public/founder-portraits/`. If you need to add or update a photo, drop the file in that folder and tell Codex the filename.

---

## Deploying

When the proposal is ready:
1. Ask Codex: "Fai push su GitHub"
2. Vercel deploys automatically — the live URL is ready in ~1 minute

---

## What NOT to do

- Do not touch `app/globals.css` — it contains the design tokens
- Do not create pages outside of `app/proposals/` — this project is only for proposals
- Do not install new packages unless Codex specifically recommends it
