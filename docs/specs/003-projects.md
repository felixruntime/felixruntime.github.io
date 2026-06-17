# 003 — Projects Section

## Objective

Showcase featured projects in a responsive card grid with hover glow and external links.

## References

- Design: `docs/DESIGN.md` (Glass Card, Motion, Secondary Button)
- Global spec: `docs/SPEC.md`

## Behavior

- Section heading: "Projects"
- Render project cards from `projects.ts` in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card shows: title, description, tech stack tags, GitHub link, optional demo link
- Card hover: border glow + subtle scale via Framer Motion
- Cards fade in on scroll with stagger

## Components

- `src/sections/ProjectsSection.tsx` (implement)
- `src/components/ui/Card.tsx` (reuse)
- `src/components/ui/Button.tsx` (reuse for links)
- `src/data/projects.ts` (read)

## Data

```ts
projects: {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
}[]
```

## Responsive

- Mobile: 1 column, full-width cards
- `md`: 2 columns
- `lg`: 3 columns

## Out of Scope

- Project filtering or search
- Modal detail view
- Image screenshots (text-only cards in v1)

## Acceptance Criteria

- [ ] All projects from `projects.ts` rendered
- [ ] GitHub links open in new tab with `rel="noopener noreferrer"`
- [ ] Demo links shown only when `demoUrl` is defined
- [ ] Hover glow effect on cards (desktop)
- [ ] Grid reflows correctly at 375px, 768px, 1024px
- [ ] Section has `id="projects"` for anchor navigation
- [ ] No console errors
