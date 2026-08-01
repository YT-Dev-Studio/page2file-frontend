# Architecture contract

## Route ownership

- Preserve every localized public URL.
- Replace the all-screen client `PageRouter` with explicit App Router
  entrypoints or server-owned family resolvers.
- Keep route metadata and page-family classification in typed data without JSX.
- Load only the matched screen family and its client islands.
- Keep technical and internal routes operational and outside the redesign.

## Server and client boundaries

Server components own route resolution, metadata, static content selection, and
page composition. Client components own only interactive forms, polling,
downloads, tabs, locale switching, and route-aware navigation state.

## Shared composition

Create small project-native composition primitives for public-page container,
lead, section, document shell, workflow steps, related links, and status
surfaces. Existing Button, ProductAction, fields, Select, Card, FormatBadge,
FileCard, Dropzone, Progress, and icons remain the control layer.

## Public interfaces

- Public URLs and BFF payloads remain unchanged.
- `LegalProfile` gains `address: string`.
- Page route data gains a typed family discriminant used by layout, navigation,
  and metadata.
- The header gains explicit home/non-home behavior and active route semantics.
- No new state manager, styling system, component library, or API adapter is
  introduced.

## Legal profile

```text
entityName: ИП YT DEV
address: Казахстан, Алматы, Жетысу‑4
jurisdiction: Казахстан
contactEmail: info@page2file.com
processors: Google Analytics, Cloudflare
```

`NEXT_PUBLIC_LEGAL_REVIEWED` remains the deployment release gate.
