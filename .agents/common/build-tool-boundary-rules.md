# Build Tool Boundary Rules

Purpose: inspect and respect build/workspace tooling for React and Next.js projects without changing it by default.

## Rules

- Inspect package scripts, workspace files, and project overlays before choosing commands.
- Use existing build, lint, format, typecheck, or preview commands.
- Treat Vite only as an existing build tool inside a supported React project, not as a target app stack.
- Do not change build tooling, bundlers, workspace managers, package managers, or scripts without explicit approval.
- Do not add monorepo tooling unless the project already uses it or the user explicitly requests it.
- Cache durable build and workspace facts in local-only `project/**` overlays.
