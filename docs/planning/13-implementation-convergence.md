# Implementation convergence

Дата среза: 2026-07-30.

## Репозитории

- Frontend: `C:\Users\yt\Desktop\DEV\Page2File\page2file-converter`.
- Backend: `C:\Users\yt\Desktop\DEV\Page2File\page2file-backend`.
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
  `408461d0dab29ecd739037b0d789efadec93f0e18652a1ce266810313a0b7b08`.
- Next.js production build сгенерировал 567 страниц.
- Production dependency audit: 0 vulnerabilities.

## Исторический заблокированный срез

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

Этот раздел сохранён как историческая запись предыдущего checkpoint. Указанные
Docker и Browser gates впоследствии стали доступны и успешно пройдены; текущее
состояние зафиксировано ниже.

## Финальный convergence — 2026-07-30

Docker Desktop/WSL2, Docker Engine и in-app Browser доступны. Полная topology
`api`, `worker`, `cleanup`, `redis`, `minio`, `browser`, `egress-proxy` и
`fixture-server` собрана и проверена.

Backend:

- `npm run check` прошёл: lint, strict TypeScript, OpenAPI с 19 обязательными
  paths, 20 unit и 9 security tests, production build.
- 3 integration tests, 1 container fixture и 2 E2E scenarios прошли без skip.
- URL PDF lifecycle прошёл create, preview, revision, render и download;
  malicious HTML не выполнил script, network, WebSocket или file access.
- Load gate: 20 принятых jobs, 75 контролируемых `RATE_LIMITED`, accept p95
  61.6 ms, preview p95 265.7 ms, final render p95 3101.8 ms.
- Operations drill подтвердил restart recovery, лимит download attempts,
  retention deletion и нулевое число orphan objects.

Frontend:

- `npm run check` прошёл, включая EN/RU content, 16 locale trees, BFF routes,
  pinned OpenAPI checksum и production build на 567 страниц.
- В Browser пройдены реальные Visual PDF и Editable PPTX preview/render/download
  flows, включая remove/restore и автоматический переход к `download_ready`.
- Desktop 1440, tablet 768 и mobile 375 проверки подтвердили один H1,
  отсутствие overflow, EN/RU локализацию, keyboard focus и русскую 404.
- До consent Google tag отсутствует; на localhost аналитика не загружается и
  после consent. Language switch удаляет UTM и другие query parameters.
- Production SEO gate подтвердил self-canonical, EN/RU/x-default reciprocity,
  article/website JSON-LD и 58 sitemap URLs (29 EN + 29 RU, 174 alternates).
  Welcome, preview/download и draft legal остаются noindex и исключены из
  sitemap.

Во время живой проверки устранены четыре integration gap: DNS ownership между
worker и egress proxy, перезапуск frontend polling после render acceptance,
ложный fixture skip и разбор opaque locator, начинающегося с `-`.

Итог: все acceptance criteria G-004 подтверждены. Незакрыты только launch-gates,
не входящие в self-hosted MVP: production deployment/domain, облачные
credentials, юридическое утверждение, публикация GPT/Chrome extension и
независимый внешний pentest.
