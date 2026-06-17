# 001 — Hero Section

## Objective

First screen visitors see: name, tagline, and two CTAs that guide them to projects or GitHub.

## References

- Design: `docs/DESIGN.md` (Typography, Background, Motion, Primary Button)
- Global spec: `docs/SPEC.md`

## Behavior

- Display `profile.name` as animated headline
- Display `profile.tagline` as subtitle
- CTA "View Projects" scrolls smoothly to `#projects`
- CTA "GitHub" opens GitHub profile in new tab (`rel="noopener noreferrer"`)
- Background: dark base with subtle animated cyan/purple gradient overlay
- Content fades in on page load via Framer Motion

## Components

- `src/sections/HeroSection.tsx` (implement)
- `src/components/ui/Button.tsx` (reuse)
- `src/data/profile.ts` (read)
- `src/data/social-links.ts` (read GitHub URL)

## Data

```ts
profile.name, profile.tagline
socialLinks.github
```

## Responsive

- Mobile (375px): stacked layout, full-width CTAs, headline `text-4xl`
- Desktop: headline `text-6xl`, CTAs side by side

## Out of Scope

- Profile photo or avatar
- Video or particle background
- Typing animation on headline

## Acceptance Criteria

- [ ] Headline and tagline visible above the fold at 375px viewport
- [ ] "View Projects" scrolls smoothly to `#projects`
- [ ] GitHub CTA opens correct URL in new tab
- [ ] Background gradient renders without layout shift
- [ ] Fade-in animation respects `prefers-reduced-motion`
- [ ] No console errors
