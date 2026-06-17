# Felix Runtime — Portfolio v1

## Objective

Personal developer portfolio in English with a futuristic dark aesthetic, deployed as a static site at `https://felixruntime.github.io`.

## Sections

Single-page layout with anchor navigation:

| Section | ID | Purpose |
|---------|-----|---------|
| Hero | `#hero` | Name, tagline, primary CTAs |
| About | `#about` | Bio and skill chips |
| Projects | `#projects` | Project showcase grid |
| Contact | `#contact` | Social links and email |

## Tech Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll animations, hover effects)
- GitHub Pages (`base: '/'`)

## Non-Functional Requirements

- Mobile-first responsive design
- Lighthouse Performance score ≥ 90
- WCAG AA contrast on primary text
- No backend, no database, 100% static
- Content sourced from `src/data/` files

## Out of Scope (v1)

- Blog or CMS
- Authentication
- Internationalization (i18n)
- Dark/light theme toggle
- Contact form with backend
- Analytics integration

## Directory Conventions

```
src/sections/     → one file per spec (001–004)
src/components/ui/ → reusable primitives (Button, Card)
src/data/         → static content (profile, projects, skills, links)
docs/specs/       → feature contracts (implement only what is specified)
```
