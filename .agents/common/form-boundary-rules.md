# Form Boundary Rules

Purpose: keep frontend forms accessible, predictable, and aligned with existing
validation patterns.

## Rules

- Follow existing form state, validation, and submission conventions.
- Preserve labels, errors, focus behavior, keyboard flow, and disabled/loading
  states.
- Keep client validation and server validation boundaries explicit.
- Do not add form libraries without explicit approval.
- Do not change persistence or auth behavior as a side effect of form work.
