# Feature Specs Convention

## What is a spec?

A spec is the technical contract for one section or feature. Code implements the spec — not the other way around.

## Rules

1. Write or update the spec **before** asking the Agent to implement.
2. If scope changes, update the spec first, then the code.
3. One spec = one primary file in `src/sections/`.
4. Do not implement `000-template.md` — it is a mold only.

## Naming

| Pattern | Example |
|---------|---------|
| Template (never implement) | `000-template.md` |
| Feature spec | `001-hero.md`, `002-about.md` |

## Review

Validate implementation against the **Critérios de aceite** checklist in each spec, not personal preference.
