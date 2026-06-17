# 002 — About Section

## Objective

Introduce the developer with a short bio and a visual grid of skill chips.

## References

- Design: `docs/DESIGN.md` (Skill Chip, Glass Card, Motion)
- Global spec: `docs/SPEC.md`

## Behavior

- Section heading: "About"
- Display `profile.bio` as paragraph text
- Render skills from `skills.ts` as chips in a responsive flex/grid wrap
- Section fades in when scrolled into view (Framer Motion)
- Skill chips stagger in with `staggerChildren: 0.05`

## Components

- `src/sections/AboutSection.tsx` (implement)
- `src/data/profile.ts` (read `bio`)
- `src/data/skills.ts` (read skill list)

## Data

```ts
profile.bio
skills: { name: string; category?: string }[]
```

## Responsive

- Mobile: single column, chips wrap naturally
- Desktop: bio max-width `prose-lg`, chips in flex-wrap grid

## Out of Scope

- Resume download button
- Timeline or work history
- Skill proficiency bars or percentages

## Acceptance Criteria

- [ ] Bio text readable with WCAG AA contrast
- [ ] All skills from `skills.ts` rendered as chips
- [ ] Scroll-triggered fade-in works on first viewport entry
- [ ] Layout does not break with 10+ skill chips
- [ ] Section has `id="about"` for anchor navigation
- [ ] No console errors
