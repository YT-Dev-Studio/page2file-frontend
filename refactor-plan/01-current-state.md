# Current state

## Platform

- Next.js App Router, React, strict TypeScript, CSS Modules, Vitest, OpenNext.
- One localized optional catch-all page delegates rendering to a client
  `PageRouter`.
- `PageRouter` statically imports all screen families, weakening route-level
  ownership and client bundle isolation.
- Shared primitives already cover buttons, actions, fields, selects, cards,
  file/dropzone/progress states, format badges, and the project icon system.

## Public surfaces

- Home.
- Webpage to PDF and PowerPoint converters.
- Browser extension guide.
- GPT conversion workflows.
- AI-chat export workflows.
- Blog index and articles, updates, and changelog.
- Privacy, terms, cookie policy, acceptable use, and security.

Technical preview/download and internal `/pages`, `/button-showcase`, and
`/component-showcase` remain outside the visual redesign.

## Confirmed issues

- The same home anchor navigation is rendered on non-home pages.
- Public screen families use generic layouts that do not express their task.
- Legal and fallback content expose visible draft notices.
- Legal profile data is incomplete and has no address field.
- The home demo can reach a ready state without a usable download target.
- Draft and legacy copy remains distributed across marketing content and
  translation data.

## Baseline

Before the redesign, lint, typecheck, 73 existing tests, content/route/BFF
validators, and the Next production compilation passed. OpenNext packaging can
hit a Windows `.open-next` cleanup `EPERM`; this is an environment-class failure
unless the application build itself fails.
