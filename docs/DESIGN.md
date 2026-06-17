# Design System — Felix Runtime

## Visual Identity

Futuristic dark theme with cyan/purple accents, glass morphism, and subtle motion.

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#0a0a0f` | Page background |
| `--color-surface` | `rgba(255,255,255,0.05)` | Glass cards |
| `--color-border` | `rgba(255,255,255,0.10)` | Card/input borders |
| `--color-text` | `#e2e8f0` | Body text |
| `--color-text-muted` | `#94a3b8` | Secondary text |
| `--color-accent-cyan` | `#00f0ff` | Primary accent |
| `--color-accent-purple` | `#a855f7` | Secondary accent |

Tailwind theme aliases: `background`, `surface`, `accent-cyan`, `accent-purple`, `text-muted`.

## Typography

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Headings | Orbitron | 600–700 | Google Fonts |
| Body | Inter | 400–500 | Google Fonts |

- `h1`: `text-4xl md:text-6xl font-bold tracking-tight`
- `h2`: `text-3xl md:text-4xl font-semibold`
- Body: `text-base md:text-lg leading-relaxed`

## Spacing & Layout

- Max container width: `1280px` (`max-w-7xl`)
- Section vertical padding: `py-20 md:py-28`
- Horizontal padding: `px-4 md:px-8`
- Grid gap: `gap-6 md:gap-8`

## Components

### Glass Card

```
bg-white/5 backdrop-blur-md border border-white/10 rounded-xl
```

Hover: `border-accent-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]`

### Primary Button

Gradient background `from-accent-cyan to-accent-purple`, white text, rounded-lg, padding `px-6 py-3`.

Hover: `scale-[1.02]` via Framer Motion (max scale 1.02).

### Secondary Button

Ghost style: `border border-white/20 text-text hover:border-accent-cyan/50`.

### Skill Chip

`bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-text-muted`

### Section Wrapper

Full-width with centered container, consistent `id` for anchor nav.

## Motion (Framer Motion)

| Pattern | Config |
|---------|--------|
| Fade-in on scroll | `initial: { opacity: 0, y: 20 }` → `animate: { opacity: 1, y: 0 }` |
| Stagger children | `staggerChildren: 0.1` |
| Hover scale | `whileHover: { scale: 1.02 }` |
| Page load hero | Subtle gradient shift on background |

Keep animations subtle — no distracting loops on primary content.

## Background

- Base: solid `#0a0a0f`
- Hero overlay: radial gradient `cyan/10` top-left + `purple/10` bottom-right
- Optional: subtle grid pattern at `opacity-5`

## Breakpoints

Mobile-first. Key breakpoints: `sm` (640px), `md` (768px), `lg` (1024px).

## Accessibility

- Minimum contrast ratio 4.5:1 on body text
- Focus rings: `ring-2 ring-accent-cyan/50`
- `aria-label` on icon-only links
- Respect `prefers-reduced-motion` — disable animations when set
