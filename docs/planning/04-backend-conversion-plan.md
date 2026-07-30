# План backend и conversion engine

## Цель backend

Отдельный Node.js проект должен безопасно принимать ограниченные conversion requests, создавать короткоживущие jobs, строить preview и финальные PDF/PPTX, не сохраняя пользовательскую историю.

## Предлагаемая структура

```text
page2file-backend/
├─ src/
│  ├─ bootstrap/
│  ├─ config/
│  ├─ gateways/
│  │  ├─ web/
│  │  ├─ gpt/
│  │  └─ extension/
│  ├─ internal/
│  │  ├─ jobs/
│  │  ├─ workers/
│  │  └─ files/
│  ├─ modules/
│  │  ├─ access-control/
│  │  ├─ abuse-protection/
│  │  ├─ url-security/
│  │  ├─ html-sandbox/
│  │  ├─ jobs/
│  │  ├─ crawler/
│  │  ├─ browser-pool/
│  │  ├─ page-stabilizer/
│  │  ├─ page-analyzer/
│  │  ├─ section-detector/
│  │  ├─ document-model/
│  │  ├─ preview/
│  │  ├─ pdf-renderer/
│  │  ├─ pptx-renderer/
│  │  ├─ storage/
│  │  └─ telemetry/
│  ├─ workers/
│  │  ├─ preview-visual/
│  │  ├─ preview-editable/
│  │  ├─ render-pdf/
│  │  ├─ render-pptx/
│  │  └─ crawl-site/
│  └─ shared/
│     ├─ errors/
│     ├─ schemas/
│     └─ security/
├─ contracts/
│  ├─ openapi/
│  └─ examples/
├─ fixtures/
│  ├─ pages/
│  ├─ expected-sections/
│  └─ expected-capabilities/
├─ docker/
└─ docs/
```

Это целевая карта ownership. Первый test backend создает только папки, нужные первой vertical slice.

## Process model

### API process

- Неблокирующий HTTP gateway.
- Request validation.
- Client policy.
- Rate limit/idempotency.
- Job creation/status/download authorization.
- Не держит Chromium в памяти.

### Worker process

- Получает job из очереди.
- Резолвит URL через security layer.
- Использует browser pool.
- Создает normalized document/preview/artifact.
- Обновляет job state.
- Не принимает public HTTP traffic.

### Cleanup process

- Удаляет expired objects и job metadata.
- Проверяет orphan artifacts.
- Не восстанавливает историю.
- Может быть scheduled task или queue worker.

## Основные модули

### URL security

- Parse стандартным URL parser.
- Allowlist schemes: `https`; `http` только если продукт явно разрешит.
- Reject credentials in URL.
- Reject local names, reserved/private/link-local/multicast/metadata ranges.
- Resolve A и AAAA.
- Normalize IPv4/IPv6 и mapped addresses.
- Проверять каждый resolved IP.
- Redirect handling вручную; каждый target проверяется заново.
- Повторная проверка непосредственно перед connect.
- Защита от DNS rebinding через controlled resolver/egress proxy.
- Port allowlist.
- Limits на redirects, response bytes и resources.

### Browser pool

- Не запускать новый Chromium process для каждой job.
- Один browser process обслуживает ограниченное число isolated contexts.
- Context создается на job и уничтожается после job.
- Browser process recycling по job count/RSS/crash.
- Concurrency ограничена benchmark, не интуицией.
- Downloads, file access, clipboard, geolocation и unnecessary APIs выключены.

### Page stabilizer

- Установить viewport/device scale.
- Дождаться `document.fonts.ready` с timeout.
- Проверить загрузку изображений.
- Controlled scroll для lazy content.
- Ограниченно дождаться network quiet.
- Заморозить animations/transitions.
- Остановить autoplay media.
- Обработать sticky/fixed duplicates.
- Определить и исключить cookie banners/chat widgets только по безопасным правилам.
- Зафиксировать warnings, если стабилизация неполная.

### Page analyzer

Собирает:

- DOM relationship;
- visible text runs;
- ARIA/semantic role;
- bounding boxes;
- computed style subset;
- z-order/stacking;
- backgrounds/borders/radii/shadows;
- images/SVG;
- links и безопасные href;
- clipping/transforms;
- pseudo-element raster fallback markers.

Не хранит полный DOM дольше job TTL.

### Section detector

Сигналы:

- semantic containers;
- background change;
- whitespace/gaps;
- heading boundaries;
- density changes;
- viewport-sized blocks;
- horizontal separators;
- repeating layout;
- output page/slide constraints.

Правила:

- не разрывать интерактивный элемент;
- не отрывать heading от первого блока;
- не резать небольшое изображение;
- делить oversized section по безопасным break candidates;
- объединять undersized sections;
- не дублировать fixed header/footer;
- исключать overlays, если это подтвержденный nuisance element.

### Document model

Normalized model — единственный вход для preview/final render:

```text
ConversionDocument
  metadata
  viewport
  sections[]
    id
    sourceBounds
    outputBounds
    elements[]
    links[]
    warnings[]
    fidelity
    thumbnailLocator
  capabilitySummary
  revision
```

`elements` имеют discriminated types: text, image, shape, svg, link-region, raster-layer.

## Visual mode

### Pipeline

1. Стабилизировать страницу.
2. Найти секции.
3. Сделать section screenshots.
4. Сжать до допустимого quality/size budget.
5. Извлечь безопасные ссылки и geometry.
6. Создать preview thumbnails.
7. Для PDF: section image → page image, поверх link annotations.
8. Для PPTX: section image → slide background/image, поверх transparent hyperlinks.

### Критерии

- Не режет основные элементы.
- Не дублирует fixed UI.
- Ссылки соответствуют видимым безопасным targets.
- Aspect ratio управляется predictably.
- Preview соответствует финальному composition.

## Editable & clickable mode

### Native primitives

- Текстовые runs → PDF text / PPTX text boxes.
- Links → annotations/hyperlinks.
- Buttons → shape + text + hyperlink.
- Raster images → image objects.
- Простые SVG → SVG/vector where supported, иначе image.
- Backgrounds → fills/images.
- Borders/radii → shapes.
- Простые shadows → approximated effect, если стабильно.

### Raster fallback

Автоматически растрируются:

- canvas/WebGL;
- video;
- complex filters/masks;
- backdrop-filter;
- unsupported blend modes;
- deeply transformed groups;
- visually unstable third-party widgets;
- blocks, для которых native composition превышает error threshold.

### Fidelity score

Для section рассчитывается:

- доля native text;
- доля native interactive geometry;
- rasterized area;
- font substitution;
- unsupported assets;
- visual diff score на controlled fixtures.

Preview показывает понятные warnings, а не внутренний numerical score.

## PDF renderer

- Visual: image pages + link annotations.
- Editable: native text/vector/image layers + raster fallback.
- Selectable text проверяется extraction smoke test.
- Link targets проходят scheme validation.
- Page sizes определяются source sections и выбранным output preset.
- Metadata не содержит секретных URL/query params сверх product decision.

## PPTX renderer

- Visual: section image per slide + hyperlink overlays.
- Editable: text boxes, shapes, images, SVG и raster layers.
- Default ratio 16:9; 4:3 можно добавить позже.
- Нельзя автоматически embed web fonts без license policy.
- Font substitution фиксируется в preview.
- Slide content не должен выходить за bounds.

## Web2PDF crawler

Отдельная capability, не скрытый флаг single-page converter.

- Same-origin only.
- URL normalization/deduplication.
- Depth limit.
- Page-count limit.
- Query-parameter policy.
- Calendar/session/logout traps.
- Per-host concurrency/delay.
- Общий byte/time budget.
- Robots/legal policy требует продуктового решения до production.
- Результат: один PDF с page boundaries или ZIP — выбрать отдельно; ZIP не входит в первый slice.

## HTML2PDF sandbox

- Принимается raw HTML + inline/allowed CSS в установленном size limit.
- Scripts выключены по умолчанию.
- Нет network access по умолчанию.
- Если assets разрешены, только через validated controlled fetcher.
- Нет file access.
- Отдельный sandbox/container profile.
- ZIP, arbitrary executables и server-side template execution запрещены.

## Queue design

Очереди по workload class:

- `preview-visual`;
- `preview-editable`;
- `render-pdf`;
- `render-pptx`;
- `crawl-site`;
- `cleanup`.

Приоритеты:

1. Interactive preview.
2. Final render уже просмотренной job.
3. Single-page background work.
4. Multi-page crawl.

Каждая job имеет deadline, retry class и idempotency key. Retry не применяется к deterministic validation failures.

## Test backend: первая vertical slice

Цель — проверить архитектуру, а не изображать production-ready engine.

1. Versioned health/capabilities contract.
2. Web BFF-authenticated create preview endpoint.
3. Strict URL security validator.
4. Один Playwright/Chromium worker.
5. Только публичные test fixtures/allowlisted internet fixture.
6. Section detection v0 по semantic/vertical boundaries.
7. Visual preview thumbnails.
8. Visual PDF.
9. Visual PPTX.
10. Job status и TTL cleanup.
11. Editable endpoint возвращает capability warning или поддерживает минимальные text/link primitives, но не притворяется завершенным.

## Расширение после spike

- Editable document model.
- Font policy.
- Raster fallback thresholds.
- Multi-worker queue.
- Temporary object store.
- GPT gateway.
- Web2PDF crawler.
- HTML2PDF sandbox.
- Load testing/autoscaling.

## Статус реализации на 2026-07-30

Все перечисленные модули до self-hosted MVP реализованы в
`page2file-backend`: Fastify gateway, BullMQ, encrypted storage, isolated
Chromium, analyzer, thumbnails, visual/editable PDF/PPTX, revision operations,
crawler и HTML sandbox. PDF содержит bookmarks и safe link annotations; PPTX
использует bounded hyperlink overlays.

Unit rendering и security corpus проходят. Remote Chromium/egress, MinIO,
crawler/HTML fixtures и fidelity thresholds не проверены без Docker Desktop.
Autoscaling и cloud provider остаются post-MVP.
