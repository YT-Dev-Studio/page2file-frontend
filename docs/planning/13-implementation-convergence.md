# Implementation convergence

Дата среза: 2026-07-30.

## Репозитории

- Frontend: `C:\Users\yt\Desktop\DEV\page2file-converter`.
- Backend: `C:\Users\yt\Desktop\DEV\page2file-backend`.
- Оба каталога являются независимыми Git/npm-проектами и рассчитаны на
  отдельные deployments.

## Реализованный frontend

- Все публичные EN/RU страницы, 14 draft locale-деревьев, SEO, MDX content,
  legal drafts, consent-first GA4 и UTM sanitization.
- Pinned OpenAPI v1, проверяемая генерация TypeScript типов и contract checksum.
- Same-origin BFF с HttpOnly anonymous session, double-submit CSRF, Origin
  validation и server-only HMAC signing.
- Реальный create/poll/revise/render/cancel/thumbnail/download flow.
- Авторитетная revision preview, локализованные EN/RU backend errors/warnings и
  корректные terminal download states.
- Mock adapter доступен только в localhost/test режиме и не принимается
  production route dispatch.

## Реализованный backend

- Fastify API, TypeBox schemas, OpenAPI v1, health/readiness и нормализованный
  public error catalog.
- Web HMAC, Redis nonce replay protection, GPT key hashes/scopes/revoke/quota,
  атомарное concurrency ограничение и cross-owner isolation.
- URL/DNS/IP/redirect validation, SSRF corpus, validation egress proxy и
  browser-only internal proxy network.
- Redis/BullMQ lifecycle, допустимые custom job IDs, atomic idempotency,
  terminal-safe state machine, accepted/queued restart recovery, retries,
  deadlines и backpressure.
- Отдельная очередь `page2file-html` с concurrency one.
- AES-256-GCM source/artifact protection, filesystem/MinIO adapters, opaque
  locators, preview/artifact/job TTL, download attempts/grace и orphan sweep.
- Isolated BrowserContext, WebSocket/download/service-worker blocking,
  stabilization, resource budgets, section analysis и immutable thumbnails.
- Visual PDF/PPTX с pagination, сохранением aspect ratio и безопасными link
  overlays.
- Editable PDF/PPTX с координатными text/image/shape/simple-SVG primitives,
  approved font substitution и видимым raster fallback.
- Revision-safe remove/restore/move/split/merge с переносом element/link/crop
  geometry и materialized thumbnails.
- Single-fetch same-origin Web2PDF crawler с обязательным robots.txt,
  crawl-delay, trap detection, dedupe, redirect binding и skip warnings.
- HTML sandbox без scripts/network/file/WebSocket, отдельный malicious-container
  corpus и extension local-first capability/challenge boundary.
- Queue/request metrics, redacted structured logs, CI, real signed-job load
  gate, deletion/restart instructions и security/operations runbooks.

## Выполненная проверка

Backend:

- `npm run check` passed.
- 20 unit tests passed.
- 9 security tests passed.
- 3 in-process integration tests passed, включая четыре GPT gateway endpoints.
- OpenAPI v1 содержит 19 обязательных paths и только разрешённые local refs.
- Build passed; production dependency audit: 0 vulnerabilities.

Frontend:

- `npm run check` passed.
- Content: 10 EN + 10 RU articles и 2 updates на локаль.
- Routes: 22 public routes × 16 locales и 8 BFF routes.
- Pinned contract checksum:
  `fb8bc514f8d7554e337ab4834ddc633018c50bdade4d814ecd76129f57d782c4`.
- Next.js production build сгенерировал 567 страниц.
- Production dependency audit: 0 vulnerabilities.

## Незакрытые внешние gates

Docker CLI/Desktop отсутствует на текущем хосте (`DOCKER_UNAVAILABLE`).
Поэтому следующие проверки подготовлены, но не могли фактически выполниться:

- `docker compose config` и `docker compose up --build --wait`;
- Redis/MinIO/remote Chromium integration;
- controlled visual/editable fixture E2E;
- malicious HTML container test;
- Redis/worker restart и MinIO deletion/orphan drills;
- реальные load/fidelity/performance thresholds.

`test:fixtures` сообщил один явный skip, `test:e2e` — два явных skip, а
`test:load` — отсутствие запущенного Docker API/HMAC environment. Эти результаты
не считаются успешными gates.

Встроенный Browser runtime был повторно подключён по проектному workflow, но
вернул пустой список доступных браузеров. Поэтому rendered desktop/tablet/mobile
QA для real conversion states также остаётся внешним gate.

## Следующий точный шаг

1. Установить и запустить Docker Desktop с WSL2.
2. В backend выполнить:

```text
docker compose config
docker compose up --build --wait
npm run test:fixtures
npm run test:e2e
npm run test:load
```

3. Выполнить deletion/restart/orphan drill из `docs/operations-runbook.md`.
4. Когда Browser runtime станет доступен, повторить rendered EN/RU QA для real
   PDF/PPTX preview/download, consent/network, keyboard и responsive states.

Только успешный проход этих gates закрывает `G-004` и позволяет называть
self-hosted MVP полностью проверенным.
