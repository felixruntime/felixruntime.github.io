# 004 — Contact Section

## Objective

Provide clear ways to reach the developer via social links and email with a final CTA.

## References

- Design: `docs/DESIGN.md` (Primary Button, Glass Card, Motion)
- Global spec: `docs/SPEC.md`

## Behavior

- Section heading: "Get in Touch"
- Short inviting line (from `profile.contactMessage` or static copy)
- Display social links from `social-links.ts` as icon+label buttons
- Email displayed as clickable `mailto:` link
- Final CTA button: "Let's Connect" scrolls to top or opens primary social link
- Section fades in on scroll

## Components

- `src/sections/ContactSection.tsx` (implement)
- `src/components/ui/Button.tsx` (reuse)
- `src/data/social-links.ts` (read)
- `src/data/profile.ts` (read email if present)

## Data

```ts
socialLinks: { github, linkedin, email }
profile.contactMessage (optional)
```

## Responsive

- Mobile: stacked link buttons, full width
- Desktop: horizontal row of social links, centered

## Out of Scope

- Contact form with submission
- reCAPTCHA or spam protection
- Calendar booking integration

## Acceptance Criteria

- [ ] GitHub and LinkedIn links open in new tab
- [ ] Email link uses correct `mailto:` href
- [ ] All links have `aria-label` when icon-only
- [ ] Section has `id="contact"` for anchor navigation
- [ ] WCAG AA contrast on all link text
- [ ] No console errors
