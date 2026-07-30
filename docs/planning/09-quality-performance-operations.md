# Quality, performance и operations

## Quality model

Система должна проверяться по четырем независимым направлениям:

1. Безопасность source loading.
2. Визуальная fidelity.
3. Native/editable capability.
4. Надежность job lifecycle.

Один «conversion succeeded» не доказывает качество файла.

## Fixture matrix

Минимальный controlled corpus:

- simple article;
- long article with images;
- marketing landing with gradients;
- CSS grid/flex layout;
- sticky header;
- lazy-loaded content;
- custom fonts;
- SVG/icons;
- tables/code blocks;
- RTL fixture для future support;
- canvas/WebGL fallback;
- video block;
- multi-column layout;
- nested transforms;
- very tall page;
- cookie banner/chat widget;
- redirect chain;
- blocked/private URL cases;
- raw HTML safe/malicious cases.

Fixtures должны быть локальными или специально контролируемыми; нельзя строить CI на случайных сторонних сайтах.

## Fidelity verification

### Visual mode

- Render source section и output preview в одинаковых dimensions.
- Visual diff с documented threshold.
- Отдельные masks для known nondeterministic areas.
- Проверка разрывов и fixed elements.
- Проверка link overlay geometry.

### Editable mode

- Text extraction соответствует expected text.
- Links кликабельны и безопасны.
- PPTX objects остаются отдельными там, где capability обещана.
- Raster fallback area измеряется.
- Font substitution отмечается.
- Output bounds/overlap проверяются.

## Frontend verification

- Route coverage.
- Locale completeness.
- Metadata/canonical/hreflang consistency.
- Sitemap/robots.
- Content schema.
- Accessibility critical flow.
- Keyboard preview editing.
- Responsive layouts.
- Loading/error/expired states.
- Consent accept/reject/revoke.
- UTM sanitization.
- API error localization.

## Backend verification

- OpenAPI contract.
- Runtime validation.
- State transitions.
- Idempotency.
- Job ownership.
- Queue retry policy.
- Cleanup/TTL.
- SSRF/security corpus.
- Browser crash recovery.
- Artifact integrity/MIME.
- PDF selectable text/link smoke tests.
- PPTX opens and contains expected slides/objects.

## Provisional performance budgets

Это начальные SLO для benchmark, а не marketing promise.

### Simple public page under normal load

- API accept response p95: < 500 ms.
- Queue wait p95: < 5 s.
- Visual preview p50: < 15 s.
- Visual preview p95: < 45 s.
- Final render after preview p95: < 20 s.

### Complex bounded page

- Preview hard deadline: 90 s.
- Final render hard deadline: 60 s.
- Clear timeout/partial warning вместо бесконечного ожидания.

### Reliability

- Gateway availability target: 99.9% после production hardening.
- Successful controlled-fixture conversion: > 98%.
- Expired artifacts remaining after lifecycle window: 0.
- Cross-job unauthorized access: 0.
- Private-network fetch success: 0.

Budgets пересматриваются после baseline benchmark.

## Resource budgets per job

- Navigation timeout.
- Total job deadline.
- Max redirects.
- Max DOM nodes.
- Max page height.
- Max resource count.
- Max total downloaded bytes.
- Max single resource bytes.
- Max output bytes.
- Max sections/slides.
- Max crawl pages/depth.
- Max browser memory/concurrency.

Точные значения определяются spike и записываются как config, не разбросанные constants.

## Backpressure

- API проверяет queue depth до acceptance.
- Expensive jobs имеют отдельную quota.
- Multi-page crawl не вытесняет interactive preview.
- При перегрузке возвращается retryable `RATE_LIMITED`/capacity response.
- Autoscaling смотрит на queue wait, active workers, RSS/crashes, а не только CPU.
- Browser concurrency уменьшается при memory pressure.

## Retry policy

### Retryable

- browser crash;
- transient network reset;
- temporary storage failure;
- worker termination;
- bounded 5xx source failure по policy.

### Not retryable

- invalid/private URL;
- auth required;
- resource limits;
- unsupported input;
- policy block;
- expired/cancelled job.

Максимум попыток задается по stage; повтор использует новую browser context и не повторяет тот же failed strategy бесконечно.

## Observability

### Metrics

- accepted/rejected jobs by channel;
- queue depth/wait;
- stage duration;
- preview/final duration;
- success/error codes;
- browser crash/recycle;
- memory per job;
- output size;
- section count;
- raster fallback ratio;
- font substitution rate;
- timeout rate;
- cleanup lag;
- orphan artifact count;
- rate-limit/challenge counts.

### Traces

- Correlation ID от gateway до worker/storage.
- Source content и full URL не записываются.
- Trace spans агрегируют stage timing.

### Alerts

- Private-network validation failure anomaly.
- Cleanup lag/orphans.
- Queue wait SLO.
- Browser crash spike.
- Storage access failure.
- Elevated cross-job authorization failures.
- GPT key quota anomaly.

## Capacity test stages

1. One worker, controlled fixtures.
2. Concurrency sweep до memory/latency knee.
3. API-only load.
4. Mixed visual/editable load.
5. Preview + final render mix.
6. Crawl isolation.
7. Worker crash/kill.
8. Redis/storage transient failure.
9. Cleanup under load.
10. Horizontal scale up/down.

## Launch gates

- Security corpus passes.
- Deletion drill passes.
- Queue overload degrades predictably.
- Preview matches final revision.
- Controlled visual fixtures meet thresholds.
- Editable capability copy соответствует фактическим results.
- Logs redacted.
- Consent verified in supported regions.
- Public legal/security copy matches runtime.
- Incident runbooks exist.

## Статус реализации на 2026-07-30

Добавлены backend unit/security/integration/fixture/E2E/load suites, CI,
Prometheus metrics с закрытым bearer endpoint, redacted structured logs,
backpressure и operations/security runbooks. Non-container suites проходят.

Fixture, E2E и load suites корректно помечены skipped без Docker, а не считаются
пройденными. Поэтому visual diff, p50/p95, restart/failure injection и
deletion/orphan thresholds остаются незакрытыми launch gates.
