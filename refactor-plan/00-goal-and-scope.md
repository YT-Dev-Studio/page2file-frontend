# G-005: Page2File public experience redesign

## Objective

Bring every public product and content page into the visual and interaction
language established by the current home page while preserving public URLs,
backend contracts, localization behavior, accessibility, and technical routes.

## Acceptance criteria

- **AC-201** — the home page keeps its anchor navigation; every non-home page
  links to Web 2 PDF, Web 2 PowerPoint, and Blog with an accessible active state.
- **AC-202** — every in-scope public page belongs to an approved page-family
  concept documented in `03-page-concepts.md`.
- **AC-203** — redesigned surfaces are coherent with the home page and work at
  375, 768, and 1440 px without horizontal overflow or hidden primary actions.
- **AC-204** — converter and home demo flows keep their BFF contracts and expose
  usable idle, pending, ready, and error states.
- **AC-205** — visible draft notices are gone; Russian legal content identifies
  the operator and processors accurately; unreviewed locales remain `noindex`.
- **AC-206** — preview/download and internal showcase routes retain their
  behavior apart from the shared header.
- **AC-207** — route ownership no longer requires one client router to import
  every screen family.
- **AC-208** — only demonstrably unused legacy code, styles, and copy are
  removed after their replacements are verified.
- **AC-209** — lint, typecheck, existing tests, validators, production build,
  accessibility review, and rendered QA pass or have an explicit environment
  blocker recorded.
- **AC-210** — each verified slice is committed locally; no push, PR, or
  deployment is performed.

## In scope

Home maintenance, converters, extension guide, GPT and AI-chat workflows, blog,
articles, updates, changelog, privacy, terms, cookies, acceptable use, security,
shared public composition, navigation, route ownership, and related cleanup.

## Out of scope

Backend/API contract changes, new packages, new test infrastructure, deployment,
technical preview/download redesign, internal showcase redesign, and claims of
legal compliance that have not been reviewed by counsel.
