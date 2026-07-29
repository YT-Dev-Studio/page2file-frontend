# План Next.js frontend

## Архитектурный вопрос

Как собрать полностью реализованный тестовый web frontend, который индексируется, поддерживает локали, содержит десятки публичных страниц и preview flow, но не втягивает тяжелый backend в Next.js.

## Базовые решения

- Next.js App Router.
- TypeScript.
- Locale prefix для каждой публичной страницы, включая English.
- Server Components по умолчанию.
- Client Components только для converter form, preview editor, language/consent controls и интерактивных demos.
- Repo-based content.
- CSS Modules как безопасный baseline до отдельного design decision.
- Next.js Route Handlers используются только как BFF/proxy; conversion не выполняется в них.
- Package manager, i18n package, MDX integration и analytics wrapper требуют отдельного scaffold approval.

## Предлагаемая структура проекта

```text
page2file-web/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ robots.ts
│  │  ├─ sitemap.ts
│  │  ├─ manifest.ts
│  │  ├─ api/
│  │  │  └─ web/
│  │  │     └─ v1/                  # thin same-origin BFF only
│  │  └─ [locale]/
│  │     ├─ layout.tsx
│  │     ├─ page.tsx
│  │     ├─ (marketing)/
│  │     ├─ (tools)/
│  │     ├─ (extension)/
│  │     ├─ (gpt-landings)/
│  │     ├─ (chat-export-landings)/
│  │     ├─ (content)/
│  │     └─ (legal)/
│  ├─ features/
│  │  ├─ converter/
│  │  ├─ preview/
│  │  ├─ consent/
│  │  ├─ locale/
│  │  ├─ analytics/
│  │  └─ extension-cta/
│  ├─ entities/
│  │  ├─ conversion-job/
│  │  ├─ preview-section/
│  │  └─ content-entry/
│  ├─ shared/
│  │  ├─ api/
│  │  ├─ config/
│  │  ├─ seo/
│  │  ├─ ui/
│  │  ├─ validation/
│  │  └─ styles/
│  └─ instrumentation/
├─ content/
│  ├─ blog/
│  ├─ updates/
│  ├─ changelog/
│  └─ legal/
├─ messages/
│  ├─ en/
│  ├─ de/
│  └─ ...
├─ public/
│  ├─ images/
│  ├─ extension-guide/
│  ├─ demos/
│  └─ video-posters/
├─ contracts/
│  └─ backend-api/                   # generated, version-pinned
└─ scripts/
   └─ content-validation/            # only after explicit implementation approval
```

Папки отражают ownership, а не требуют создания отдельного слоя для каждой мелочи. Во время реализации структура должна быть уменьшена, если первая vertical slice этого не требует.

## Route ownership

- `app/[locale]/**/page.tsx`:
  - получает локализованный content model;
  - формирует route-level metadata;
  - собирает feature components;
  - не содержит API workflow logic.
- `features/converter`:
  - URL input;
  - mode selection;
  - start preview;
  - отображение статуса и ошибок.
- `features/preview`:
  - section/slide navigation;
  - reorder/delete/split/merge commands;
  - warning summary;
  - final render/download.
- `shared/api`:
  - typed BFF client;
  - error normalization;
  - abort/cancellation;
  - polling/backoff.
- `shared/seo`:
  - canonical/hreflang builders;
  - structured data builders;
  - public/noindex route policies.

## Server/client boundary

### Server

- Marketing/SEO copy.
- Blog/update/changelog loading.
- Metadata and structured data.
- Locale catalog selection.
- Initial converter page shell.
- Privacy/terms/security pages.
- BFF request signing and backend credentials.

### Client

- URL form interaction.
- Job polling.
- Preview editor.
- Consent modal/preferences.
- Analytics event dispatch after consent.
- Video/step-by-step toggle.
- Language switcher interaction.

Нельзя передавать server credentials, raw internal errors или storage locators в client bundle.

## State ownership

### URL/form state

Локальный React state. Form library не нужна, пока обычная controlled/uncontrolled form покрывает требования.

### Job remote state

- Источник правды — backend.
- Клиент хранит только текущий `jobId`, scoped access token, status и preview model.
- Не использовать Redux для remote job state.
- TanStack Query может быть рассмотрен только после approval; MVP может использовать небольшой typed polling hook.

### Preview edit state

- Локальный ordered command list поверх immutable preview manifest.
- Команды: `remove`, `move`, `split`, `merge`, `restore`.
- Перед render отправляется revision + operations, а не весь raw document.
- Refresh страницы не обещает восстановление после истечения session/job TTL.

### Consent state

- Отдельный feature owner.
- Не смешивать с converter state.
- Analytics module получает только derived `canMeasure` и sanitized attribution.

## Converter page contract

### PDF page

- Format фиксирован `pdf`.
- Два radio/card options: `Visual` и `Editable & clickable`.
- URL input с понятным label.
- CTA: `Generate PDF preview`.
- Ссылка на extension для private/current tab.

### PowerPoint page

- Format фиксирован `pptx`.
- Те же два режима.
- CTA: `Generate PowerPoint preview`.
- Дополнительное краткое объяснение «section → slide».

### Required states

- Idle.
- URL validation error.
- Unsupported scheme/private host.
- Human verification needed.
- Queued.
- Loading page.
- Analyzing sections.
- Rendering preview.
- Preview ready.
- Partial fallback warning.
- Final rendering.
- Download ready.
- Download interrupted/retry available.
- Expired.
- Rate limited.
- Source blocked/auth required.
- Page too large.
- Timeout.
- Generic recoverable failure.

## Preview UI

- Desktop: preview canvas + section list + inspector/warnings.
- Mobile: section list and preview stacked; drag reorder имеет keyboard/button fallback.
- Каждая секция имеет:
  - thumbnail;
  - index/title;
  - dimensions;
  - mode/fallback badge;
  - warnings;
  - remove/move/split/merge actions.
- Global warnings:
  - fonts substituted;
  - unsupported animation/video;
  - external image omitted;
  - block rasterized;
  - link removed as unsafe.
- Нужны accessible labels, focus management, `aria-live` для job progress и явный download result.

## Content architecture

- Page copy хранится как typed content model, не как giant translation JSON с JSX.
- Короткие UI strings — locale messages.
- Длинные landing sections — locale-specific MDX/structured data.
- Blog — до 10 MDX entries на locale или translation-key mapped variants.
- Updates — human-readable MDX.
- Changelog — versioned structured Markdown/MDX.
- Нельзя рендерить недоверенный HTML через `dangerouslySetInnerHTML`.

## BFF boundary

Разрешенные обязанности:

- создать anonymous web session/challenge;
- проверить same-origin/CSRF signal;
- передать Turnstile token;
- вызвать backend server-to-server;
- поставить HMAC/mTLS/service token;
- убрать internal fields из response;
- установить `Cache-Control: no-store` для job routes.

Запрещенные обязанности:

- запуск Chromium;
- хранить preview/file;
- реализовывать очередь;
- повторно моделировать backend state machine;
- логировать полный URL/request body.

## Test frontend с test content

Frontend считается «полностью тестово реализованным», когда:

- все public routes существуют;
- navigation/internal links работают;
- все converter/preview states доступны через mock adapter;
- один end-to-end happy path работает с test backend;
- non-English test copy виден только в preview/staging или имеет `noindex`;
- production indexing включается только после translation review;
- legal copy помечен как draft до legal review;
- demo artifacts явно помечены как sample.

## Verification plan

- Route inventory check.
- Build/typecheck/lint существующими командами после scaffold.
- Content schema validation.
- Broken link and locale completeness checks.
- Metadata/canonical/hreflang/sitemap snapshot inspection.
- Keyboard and screen-reader critical flow review.
- Responsive visual QA на converter, preview, article и landing templates.
- Browser E2E только после отдельного approval на test setup.

## Статус реализации на 2026-07-29

План реализован в текущем репозитории как Next.js `16.2.12` frontend prototype.
Production data boundary — будущий контракт; текущая реализация использует только
mock adapter, локальные MDX-материалы и sample PDF/PPTX. BFF и `src/app/api` не
реализованы. Browser QA выполняется внешним Playwright MCP без добавления
Playwright/Vitest-конфигурации в репозиторий.
