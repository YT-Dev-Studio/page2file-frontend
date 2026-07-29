# Delivery roadmap

## Strategy

Frontend и backend развиваются как два независимых repositories с contract-first синхронизацией.

Порядок:

1. Зафиксировать contracts и ограничения.
2. Полностью собрать test frontend на mock adapter.
3. Поднять узкий test backend для одного Visual happy path.
4. Соединить web BFF с backend.
5. Добавить Visual PDF/PPTX.
6. Добавить adaptive Editable по capability matrix.
7. Только после этого добавлять crawler, raw HTML и GPT production keys.

## Definition of test release

### Frontend

- Все public routes из inventory реализованы.
- English test copy полная.
- Остальные locale shells и test translations доступны, но `noindex` до review.
- Converter и preview UI покрывают все состояния через mock backend.
- Consent и UTM flow реализованы в test mode.
- Blog/updates/changelog/legal drafts загружаются из repo.
- Один web happy path подключен к test backend.

### Backend

- Отдельный deployable service.
- Web gateway + internal worker.
- Strict URL security.
- Queue/job lifecycle.
- Visual preview.
- Visual PDF и Visual PPTX на controlled fixtures.
- Temporary artifacts и cleanup.
- Editable возвращает честную capability/warning behavior; полный engine не обязателен.
- GPT/crawler/HTML routes могут быть contract stubs с disabled capability, но не fake-success.

## Milestone 0 — решения и scaffold approval

### Результат

- Подтверждены два repo names/locations.
- Подтверждены package managers.
- Подтверждены styling/i18n/content choices.
- Подтвержден test environment.
- Подтверждено, какие новые test tools разрешены.
- OpenAPI v1 skeleton согласован.

### Stop gate

Не запускать scaffold, install или config changes без точного approval.

## Milestone 1 — contract и content foundation

### Backend contract

- Client channels.
- Create/status/revision/render/download schemas.
- Error catalog.
- State machine.
- TTL fields.
- Capabilities endpoint.

### Web content model

- Route registry.
- Locale registry.
- Page content schema.
- Blog/update/changelog frontmatter.
- SEO metadata schema.
- Index policy.

### Verification

- Каждый public route имеет owner/content type/index policy.
- Каждый API operation имеет scope и error contract.
- Frontend может сгенерировать typed mocks без backend runtime.

## Milestone 2 — full test frontend

### Foundation

- Locale layout.
- Header/footer/navigation.
- Responsive shell.
- Consent/preferences.
- SEO helpers.
- Content loaders.

### Public pages

- Home.
- Two converters.
- Extension marketing/welcome/guide.
- Four GPT landings.
- Parent + four AI-chat landings.
- Blog index + up to 10 articles.
- Updates/changelog.
- Privacy/terms/cookie/security/acceptable use.

### Tool UI

- PDF and PPTX forms.
- Mode cards.
- Mock job stages.
- Preview editor.
- Warnings.
- All error states.
- Download state.

### Gate Milestone 3

- Полный route inventory проходит content/metadata/visual review.
- Технические routes noindex.
- Mock backend может быть заменен real adapter без изменения page components.

## Milestone 3 — test backend foundation

### Gateway

- Health/readiness.
- Capabilities.
- Web service identity.
- Anonymous job session.
- Schema validation.
- Rate limit placeholder с безопасными defaults.

### Infrastructure

- Queue.
- Redis job state.
- Worker process.
- Temporary local storage только для dev; object-store adapter boundary.
- Cleanup worker.

### Security

- URL parser/range checks.
- Redirect/DNS controls.
- Request limits.
- Log redaction.

### Gate Milestone 4

- Invalid/private URLs отклоняются до Chromium.
- Job status переживает API process restart.
- Expired jobs удаляются.

## Milestone 4 — Visual vertical slice

### Scope

- One public URL.
- Controlled Chromium.
- Stabilization v0.
- Section detection v0.
- Thumbnails.
- Preview manifest.
- Reorder/remove.
- Final Visual PDF.
- Final Visual PPTX.
- Link overlays.

### Gate Milestone 5

- Controlled fixture outputs открываются.
- Preview revision соответствует final.
- No orphan artifact.
- Web BFF happy path работает end-to-end.

Это первая реальная product slice.

## Milestone 5 — Preview editor completeness

- Safe split candidates.
- Merge.
- Restore.
- Revision conflicts.
- Keyboard operations.
- Expiration UX.
- Download retry/grace.
- Cancellation.
- Warning localization.

### Gate

- Все commands валидируются backend.
- Cross-job section IDs отклоняются.
- Refresh/expired behavior соответствует copy.

## Milestone 6 — Editable foundation

### Capability order

1. Text blocks.
2. Safe hyperlinks.
3. Images.
4. Rectangles/backgrounds/borders.
5. Buttons.
6. Simple SVG.
7. Typography approximation.
8. Layering/transforms.
9. Raster block fallback.

### Gate Milestone 6 по каждой capability

- Controlled fixture.
- PDF verification.
- PPTX verification.
- Preview warning behavior.
- Visual diff/raster ratio evidence.
- Product copy обновлена только после pass.

## Milestone 7 — SEO/i18n launch preparation

- Human-reviewed Wave 1 translations.
- Reciprocal hreflang.
- Locale sitemap.
- Canonical validation.
- Structured data review.
- Broken internal links.
- Search Console setup plan.
- Staging remains noindex.

### Gate Milestone 7

- Нельзя индексировать locale с test/machine-only content.

## Milestone 8 — analytics/legal production preparation

- Final consent implementation choice.
- GA property/config.
- Accept/reject/revoke tests.
- UTM sanitization.
- Vendor/retention inventory.
- Legal counsel review.
- Privacy copy vs observed runtime audit.

## Milestone 9 — GPT test integrations

- Four dedicated API clients.
- Four scoped endpoints/schemas.
- Per-client quota/revoke.
- OpenAPI descriptions.
- Test GPT preview.
- Privacy policy URL.
- Temporary download behavior.

### Gate Milestone 9

- Key A cannot invoke B/C/D operations.
- Keys rotate/revoke.
- GPT polling bounded.
- No source content in logs.

## Milestone 10 — Web2PDF crawler

- Same-origin normalization.
- Page/depth/query limits.
- Trap detection.
- Crawl budget.
- Per-host courtesy.
- Aggregate preview/output design.

Crawler не включается до отдельного legal/robots/product decision.

## Milestone 11 — HTML2PDF sandbox

- Input contract.
- Script/network/file defaults.
- Resource limits.
- Malicious fixture corpus.
- PDF output only.
- No ZIP in first release.

## Milestone 12 — Extension integration boundary

В web/backend repositories:

- Extension install/deep links.
- Welcome/guide pages.
- Extension gateway contract if necessary.
- UTM campaign.
- Privacy wording.

В отдельном extension repo:

- Manifest V3.
- activeTab.
- Local conversion.
- Chat platform adapters.
- Local preview/download.

## Milestone 13 — scale and production hardening

- Managed Redis/storage adapters.
- Horizontal worker pool.
- Autoscaling.
- Failure injection.
- Load tests.
- Security review/pentest.
- Incident and deletion runbooks.
- Budget/cost monitoring.

## Detailed implementation slices

- `S-001 [AC-001]` Confirm two-repository/deployment boundary.
- `S-002 [AC-003, AC-004, AC-007]` Freeze OpenAPI v1 domain contract.
- `S-003 [AC-002, AC-009, AC-012]` Freeze route/locale/content registry.
- `S-004 [AC-012]` Scaffold web only after approval.
- `S-005 [AC-012]` Build localized public shell/content loaders.
- `S-006 [AC-002, AC-009]` Implement all public page templates and test content.
- `S-007 [AC-003, AC-004, AC-012]` Implement converter and preview mock states.
- `S-008 [AC-010]` Implement consent/UTM boundary.
- `S-009 [AC-011]` Scaffold backend only after approval.
- `S-010 [AC-007, AC-008]` Implement gateway/auth/schema/security foundation.
- `S-011 [AC-005, AC-006]` Implement jobs, queue, TTL and cleanup.
- `S-012 [AC-008, AC-011]` Implement isolated browser loader/stabilizer.
- `S-013 [AC-004, AC-011]` Implement section detector and preview manifest v0.
- `S-014 [AC-003, AC-004, AC-011]` Implement Visual PDF.
- `S-015 [AC-003, AC-004, AC-011]` Implement Visual PPTX.
- `S-016 [AC-004]` Implement preview operations/revisions.
- `S-017 [AC-001, AC-007, AC-012]` Connect Next.js BFF to backend.
- `S-018 [AC-003, AC-011]` Implement Editable native primitives incrementally.
- `S-019 [AC-003, AC-011]` Implement adaptive raster fallback/warnings.
- `S-020 [AC-009]` Review translations and enable Wave 1 indexing.
- `S-021 [AC-007]` Implement GPT scoped clients/actions.
- `S-022 [AC-008, AC-011]` Implement bounded Web2PDF crawler.
- `S-023 [AC-008, AC-011]` Implement HTML2PDF sandbox.
- `S-024 [AC-005, AC-006, AC-008]` Run privacy/security/deletion review.
- `S-025 [AC-011]` Run fidelity/load/failure tests.
- `S-026 [AC-002, AC-009, AC-010]` Production SEO/consent/legal gate.

## Stop/resume rule

Каждый slice завершается:

- changed surfaces;
- verification evidence;
- failed/blocked checks;
- next exact slice;
- decisions/approval needed.

Нельзя переходить к crawler/HTML/GPT production integration, если Visual single-page slice не прошла security, TTL и preview consistency gates.
