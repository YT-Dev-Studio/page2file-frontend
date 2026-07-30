# Системная архитектура

## Deployment topology

```text
Users / Crawlers
       |
       v
page2file-web (Next.js, public)
  - localized public HTML
  - converter and preview UI
  - consent and analytics boundary
  - thin server-side BFF
       |
       | server-to-server authenticated requests
       v
page2file-backend (Node.js API, public gateway + private services)
  - client policy / validation / rate limits
  - job orchestration
       |
       v
Queue / Redis  --->  Worker pool  --->  Temporary object storage
                         |
                         v
                  isolated Chromium

GPT Actions ----------> dedicated GPT gateway routes

Chrome extension -----> local tab/chat conversion by default
                    \-> limited extension gateway only when server work is required
```

## Проект 1: `page2file-web`

### Ответственность frontend

- Публичные локализованные страницы.
- SEO metadata и structured content.
- Converter forms.
- Preview management UI.
- Consent/preferences UI.
- Google Analytics integration после consent.
- UTM normalization.
- Same-origin BFF для web conversion jobs.
- Статический контент из репозитория.

### Frontend не владеет

- Chromium.
- Queue.
- PDF/PPTX rendering.
- Crawler.
- Raw HTML execution.
- Artifact storage.
- GPT API keys.
- Worker credentials.

## Проект 2: `page2file-backend`

### Ответственность backend

- Public client gateways (`web`, `gpt`, `extension`).
- Private orchestration and worker APIs.
- Authentication/authorization policies.
- URL/HTML validation.
- Queue and job state.
- Page stabilization, DOM analysis and section detection.
- Preview image generation.
- PDF/PPTX generation.
- Short-lived artifact storage and deletion.
- Rate limiting, abuse protection, technical audit events.

### Backend не владеет

- Marketing pages.
- Blog and localized SEO copy.
- GA tags and cookie UI.
- Extension-local chat content.
- User profiles or conversion history.

## Внешний клиент: Chrome extension

- Отдельный repository/deployment lifecycle.
- Manifest V3.
- Минимальные permissions; `activeTab` вместо постоянного `<all_urls>` там, где возможно.
- Bundled code only; никакого remote executable code.
- Local preview and local output for current tab/AI chat.
- Platform adapters: ChatGPT, Claude, Gemini, Grok + generic fallback.
- Backend call только для явно серверных возможностей.

## Data ownership

| Data | Owner | Persistence |
| --- | --- | --- |
| Marketing/blog/translations | web repo | Git |
| Consent choice | browser | first-party, minimum necessary |
| UTM before consent | web page memory | current page only |
| Job status | backend/Redis | TTL |
| Source URL | backend job payload | minimum lifetime |
| Normalized document model | backend | preview TTL |
| Preview images | temporary storage | preview TTL |
| Final PDF/PPTX | temporary storage | download TTL |
| Extension tab/chat content | extension memory | current export only |
| Technical security counters | backend | bounded retention, no content |
| Conversion history | none | prohibited |

## Network boundaries

### Public

- Next.js site.
- Backend gateway host with only versioned gateway routes.
- Expiring download route/token.

### Private

- Worker control endpoints.
- Queue and Redis.
- Temporary storage write/list operations.
- Browser worker health/control.
- Metrics collector.

### Egress

- Chromium worker egress проходит через SSRF-aware policy/proxy.
- Private/reserved/metadata networks blocked at network and application layers.
- Redirect target проходит повторную validation.

## Contract strategy без monorepo

- Canonical OpenAPI contract хранится в backend repo.
- JSON Schema/OpenAPI описывает requests, states, errors и capabilities.
- Frontend использует version-pinned generated client/types или committed generated artifact после отдельного approval.
- Backward-incompatible изменения создают новый major API prefix.
- Contract compatibility проверяется в CI обоих проектов.
- Shared source package между repositories не является обязательным и не должен становиться скрытым третьим runtime.

## Рекомендуемая среда

### Web

- CDN/edge-capable Next.js host.
- Server runtime для тонкого BFF.
- Никаких conversion binaries в web deployment.

### Backend

- Container platform с контролем CPU/RAM/timeouts.
- Отдельные API и worker process types.
- Managed Redis/queue.
- Temporary S3-compatible storage с lifecycle cleanup.
- Network policy для Chromium.

Конкретные providers выбираются после load/fidelity spike; план не привязывает архитектуру к одному облаку.

## Текущая граница реализации на 2026-07-30

Архитектура реализована в двух независимых Git/npm-проектах. Frontend содержит
только thin BFF в `src/app/api/conversions/**`; Chromium, очередь, storage и
document renderers находятся в `page2file-backend`. Browser credential не
публикуется. Mock adapter ограничен localhost/test.

Фактическая проверка Redis/MinIO/remote Chromium network topology зависит от
Docker Desktop и пока не выполнена. Cloud ingress, WAF/CDN, autoscaling и
managed services остаются post-MVP.
