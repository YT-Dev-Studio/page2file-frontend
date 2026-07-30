# Открытые решения и approval gates

Эти вопросы не мешают планированию, но должны быть закрыты до соответствующего implementation slice.

## Project/scaffold

### Q-001: repositories

Рекомендация:

- `page2file-web`;
- `page2file-backend`;
- extension — отдельный существующий/будущий repo.

Нужно подтвердить расположение и ownership.

### Q-002: package manager

Нужно выбрать отдельно или одинаково для двух repositories. Нельзя молча создавать pnpm/npm/yarn/bun manifests.

### Q-003: baseline dependencies

Требуют approval до install:

- i18n library;
- MDX integration;
- runtime schema validator;
- backend HTTP framework;
- queue client;
- browser automation;
- PDF/PPTX/image libraries;
- analytics/consent wrapper;
- test tools.

План рекомендует оценивать текущие stable версии в момент scaffold, а не фиксирует памятью конкретные versions.

## Product behavior

### Q-004: label второго режима

Рекомендация:

- UI label: `Editable & clickable`;
- API enum: `editable`;
- chat UI: `Clean document`.

### Q-005: HTTP URLs

Рекомендация: production принимает только HTTPS; HTTP можно разрешить только test fixtures/controlled environments.

### Q-006: PDF page sizing

Выбрать:

- natural section height;
- standard page presets с pagination;
- оба варианта как advanced option.

Для MVP рекомендуется standard preset + intelligent pagination, потому что giant custom pages плохо печатаются.

### Q-007: PPTX aspect ratio

Рекомендация: только 16:9 в MVP; 4:3 позже.

### Q-008: Web2PDF output

Выбрать:

- один merged PDF;
- ZIP отдельных PDF;
- оба.

Рекомендация MVP: один merged PDF с bookmarks/page titles; ZIP позже.

### Q-009: crawler robots policy

Требует legal/product решения: соблюдать robots.txt как product policy, какие User-Agent/rate limits и как обрабатывать запрещенные paths.

### Q-010: raw HTML behavior

Рекомендация MVP:

- HTML + inline CSS;
- scripts disabled;
- network disabled;
- no ZIP.

### Q-011: artifact deletion

Рекомендация: 15 минут + до 3 download attempts; удаление после success grace period, не мгновенно на первый response byte.

## Localization/content

### Q-012: target locale commitment

Подтвердить Wave 1/Wave 2 и editorial owners. Нельзя включить indexing только потому, что locale folder существует.

### Q-013: legal jurisdictions

Нужны страна владельца/компании, рынки запуска, контакты и processors. Без этого legal drafts не финальны.

### Q-014: brand/trademark review

Подтвердить disclaimer и допустимые изображения ChatGPT/Claude/Gemini/Grok.

### Q-015: video hosting

Выбрать provider/self-hosting с учетом consent, privacy и performance. Third-party iframe не должен загружаться до соответствующего consent, если это требуется.

## Analytics

### Q-016: Consent Mode

Рекомендация privacy-first: Basic Consent Mode. Advanced mode — только после отдельного legal/product approval.

### Q-017: UTM retention

Рекомендация: memory before consent, GA session after consent, без собственных attribution cookies в MVP.

### Q-018: error monitoring

Если добавляется vendor, определить redaction, sampling, retention и consent/legal basis до integration.

## Backend/infrastructure

### Q-019: deployment providers

Выбрать после spike:

- web host;
- API/worker container platform;
- Redis;
- temporary object storage;
- CDN/WAF.

### Q-020: BFF-to-backend authentication

Выбрать mTLS, workload identity или rotated HMAC/service token согласно provider capabilities. Static long-lived secret — только временный test option.

### Q-021: source egress control

Нужно подтвердить, поддерживает ли выбранная platform network-level deny/private metadata protection. Application validation недостаточна как единственный слой.

### Q-022: font policy

Определить:

- разрешенные built-in fonts;
- substitution map;
- embedding/license policy;
- preview warning copy.

### Q-023: external AI fallback

Рекомендация: section detection не зависит от LLM. Любой AI fallback — позже, opt-in, cost/privacy reviewed.

## Test/verification approval

Пользователь отдельно разрешил в full-stack implementation plan:

- создание test infrastructure;
- browser E2E;
- visual regression baseline;
- load-test scripts;
- security corpus/tests;
- CI workflows.

Backend test infrastructure, Docker Compose, security corpus, load script и CI
созданы. Frontend сохраняет внешний Browser QA без repository Playwright
dependency.

## Decisions already safe to treat as fixed

- Next.js frontend.
- Separate Node.js backend deployment/project.
- No registration/history.
- Separate PDF/PPTX pages.
- Visual and editable modes.
- Preview for both formats.
- Repo-based blog ≤ 10 articles.
- GPT landing set limited to four named GPTs.
- ChatGPT/Claude/Gemini/Grok landing pages.
- Temporary server storage only for URL/GPT jobs.
- Local extension processing for current tab/AI chats.

## Решения, зафиксированные реализацией 2026-07-30

- Node.js 24, Fastify 5.11, BullMQ 5.81, Playwright 1.62, MinIO, pdf-lib,
  PptxGenJS и Sharp.
- HMAC BFF-to-backend с key id/timestamp/nonce/session/body binding.
- Production source URLs только HTTPS:443; HTTP только allowlisted fixture.
- PDF A4 portrait, PPTX 16:9, Web2PDF same-origin depth 2/pages 20/robots.
- Fonts substitute to Arial/Times New Roman/Courier New families.
- Basic Consent Mode; UTM не создаёт собственную историю.
- Docker Desktop устанавливает и запускает пользователь.
- Cloud provider, published extension/GPT, final legal profile и external
  pentest не выбраны.
