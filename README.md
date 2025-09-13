# Huemn Interactive — Scroll‑Driven Animations

Recreation of Chrome homepage–style, scroll‑scrubbed feature animations using React, SCSS, and GSAP with a sticky pinned stage. Four scenes animate in sequence while the user scrolls.

## Overview
- Sticky scroll container (`position: sticky`) with a tall section (~400vh)
- GSAP + ScrollTrigger timeline scrubs with scroll
- Scenes
  - Scene 1: “The browser built to be yours” — headline, browser mock, color swatches
  - Scene 2: “Extensions” — title + logo cards
  - Scene 3: “Take control of your tabs” — tab group cards
  - Scene 4: “Helpful features built‑in” — feature cards (Password Manager, Safety Check)

## Tech Stack
- React 18 (Vite 5)
- GSAP 3 (ScrollTrigger)
- Sass (SCSS)
- ESLint 9 (flat config) + Prettier

## Getting Started
Prereqs: Node 20+, npm 10+ (Windows + PowerShell)

Install deps:
```powershell
cd "c:\Users\lohit\OneDrive\Desktop\new project\huemn-interactive"
npm install
```

Run dev server:
```powershell
npm run dev
```
- Open the printed URL (e.g., http://localhost:5173 or :5174 if 5173 is busy).

If port 5173 is in use:
```powershell
npm run dev -- --port 5174 --strictPort --clearScreen false
```

## Scripts
```json
{
  "start": "vite",
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint \"src/**/*.{js,jsx}\"",
  "lint:fix": "eslint \"src/**/*.{js,jsx}\" --fix",
  "format": "prettier --write \"src/**/*.{js,jsx,scss}\"",
  "format:check": "prettier --check \"src/**/*.{js,jsx,scss}\""
}
```

## Lint, Format, Build
```powershell
npm run format:check
npm run lint
npm run build
npm run preview
```
- Preview runs a static server (default http://localhost:4173)

## Deployment
Vercel (recommended):
1) Import GitHub repo in Vercel dashboard
2) Framework: Vite
3) Build command: `npm run build`
4) Output dir: `dist`

Netlify (alternative):
- `netlify deploy --dir=dist --prod` (after `npm run build`), or connect repo in Netlify UI with the same settings.

## Accessibility & Performance Notes
- Uses semantic headings and lists; swatches are real `<button>`s with `aria-label`s.
- Focus rings enabled via `:focus-visible`.
- `will-change`, `translateZ(0)`, and `contain` hints for smoother animation.

## Structure
- `src/components/AnimatedFeatures.jsx` — sticky stage + GSAP timeline & scenes
- `src/components/HeroSection.jsx` — top hero
- `src/sections/Home.jsx` — assembles page
- `src/styles/**` — global styles + component partials

## Known Notes
- Dart Sass legacy JS API deprecation warning is informational only.
- Mobile responsiveness is not required per assignment brief.

