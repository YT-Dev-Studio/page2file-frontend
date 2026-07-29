# Routing Boundary Rules

Purpose: keep routing changes aligned with the detected router and existing
route ownership.

## Rules

- Follow the existing router and file convention.
- Treat route files as integration boundaries, not dumping grounds for shared
  logic.
- Keep route params, loaders, metadata, and navigation behavior consistent with
  nearby routes.
- Do not add a router or migrate routing systems without explicit approval.
- Verify changed routes through the smallest available build, lint, or rendered
  check.
