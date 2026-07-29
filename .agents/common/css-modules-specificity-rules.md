# CSS Modules Specificity Rules

Purpose: keep CSS Modules stable, local, and easy to review.

Use when implementing or reviewing component styles, route styles, visual states, and responsive layout rules.

## Core Rules

- Prefer explicit module class ownership over broad element selectors.
- Keep selectors shallow unless a local component boundary requires a descendant selector.
- Do not rely on selector order to override unrelated spacing, typography, color, or state rules.
- Keep section rhythm, component gaps, container padding, and control padding as separate responsibilities.
- State classes should describe the visible UI state.
- Responsive overrides should follow the existing project breakpoint convention.
- A style module must not become a hidden global theme layer.

## Handoff Checklist

Before code changes, identify the module owner, layout classes, typography classes, state classes, responsive breakpoints, and reused tokens or variables.

## Validation Gate

Before final reporting, verify that changed CSS Modules have clear ownership, stable selector specificity, no hidden global styling dependency, and no unapproved new styling system.
