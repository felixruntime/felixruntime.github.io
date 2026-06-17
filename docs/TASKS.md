# Roadmap — Felix Runtime Portfolio

## Phase 1 — SDD + Scaffold (current)

- [x] `docs/SPEC.md` — global scope
- [x] `docs/DESIGN.md` — design system
- [x] `docs/specs/` — feature specs 001–004
- [x] `.cursor/rules/` — Agent conventions
- [x] Vite + React + TS + Tailwind v4 + Framer Motion scaffold
- [x] Layout shell (Header, Footer, Section)
- [x] Data placeholders in `src/data/`
- [x] GitHub Pages deploy config
- [x] Build validation

## Phase 2 — Section Implementation

One spec per Agent session, in order:

- [ ] `001-hero.md` — Hero section
- [ ] `002-about.md` — About section
- [ ] `003-projects.md` — Projects grid
- [ ] `004-contact.md` — Contact section

Prompt template:

> Implement `docs/specs/00N-*.md`. Follow `docs/DESIGN.md` and `.cursor/rules/`. Do not alter other sections.

## Phase 3 — Polish

- [ ] Replace placeholder content in `src/data/`
- [ ] SEO meta tags and Open Graph
- [ ] `og-image.png` in `public/`
- [ ] Lighthouse audit and fixes
- [ ] Favicon refinement

## Phase 4 — Deploy

- [ ] `npm run deploy` to GitHub Pages
- [ ] Verify live site at `https://felixruntime.github.io`
