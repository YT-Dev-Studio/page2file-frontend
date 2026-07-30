# Preview, jobs, TTL и удаление

## Зачем preview — отдельная модель

Preview не должен быть случайным screenshot финального файла. Page analyzer сначала создает normalized `ConversionDocument`, и из одной revision строятся:

- thumbnails;
- preview canvas;
- PDF;
- PPTX.

Это позволяет переставлять или удалять секции без повторной загрузки source page.

## Жизненный цикл

### 1. Anonymous session

- Web BFF создает scoped session.
- Session не является аккаунтом.
- Session не связывается с историей после TTL.
- GPT/extension используют собственные client bindings.

### 2. Preview request

- Input проходит schema validation.
- URL/HTML проходит security validation.
- Cost estimate определяет queue class и необходимость challenge.
- Backend возвращает opaque job reference.

### 3. Extraction

- Worker загружает source.
- Создает section model и warnings.
- Полный source не сохраняется после extraction, если он не нужен для current render.
- Если повторный final render требует source assets, они копируются только в scoped temporary workspace/storage.

### 4. Preview ready

Frontend получает:

- revision;
- section descriptors;
- thumbnail URLs/tokens;
- warnings;
- capability summary;
- expiration time.

### 5. Preview edits

- UI хранит local operations.
- Backend валидирует и применяет operations к revision.
- Split разрешается только в safe break candidates.
- Merge проверяет output size/aspect limits.
- Removed sections остаются восстановимыми только внутри job TTL.

### 6. Final render

- Render request фиксирует revision.
- Worker создает PDF/PPTX.
- Result получает отдельный download TTL.
- Preview остается до общего job TTL или удаляется раньше по policy.

### 7. Download

- Разрешить 2–3 попытки в коротком окне для browser/network interruption.
- Successful complete response помечает artifact как consumed.
- Физическое удаление можно выполнить сразу после grace period.

### 8. Expiration/cleanup

- Metadata удаляется.
- Preview images удаляются.
- Final artifacts удаляются.
- Source temp workspace удаляется.
- Orphan sweep подтверждает cleanup.

## Начальные TTL

| Объект | Начальный TTL | Примечание |
| --- | --- | --- |
| Anonymous web session | 60 минут | security/session binding only |
| Job metadata | 60 минут | no history, operational state |
| Normalized preview model | 30 минут | с момента preview ready |
| Preview thumbnails | 30 минут | private signed access |
| Final artifact | 15 минут | или после successful download + grace |
| Download token | 15 минут | artifact-scoped |
| Request nonce | 5 минут | replay protection |
| Rotating abuse hash | до 24 часов | без raw IP, legal/security review |

TTL — начальные design values; production launch требует privacy review и failure-mode tests.

## Что не хранить

- Аккаунт/email/profile.
- Conversion list.
- Raw page HTML после job need.
- AI chat content.
- Full URL в analytics.
- Query parameters в logs.
- Unredacted headers/cookies.
- Screenshot/preview после TTL.
- Final file после TTL.
- Cross-session identifier.

## Redis/job metadata

Допустимые fields:

- opaque job ID;
- client/channel ID;
- status/stage;
- output/mode;
- created/expires timestamps;
- sanitized progress;
- capability/warning codes;
- temporary locator reference;
- retry count;
- idempotency hash;
- access binding hash.

Source URL хранится только в защищенном payload столько, сколько нужно loader/crawler. После успешной загрузки URL удаляется из active metadata, если дальнейшие redirects/assets не требуют его.

## Temporary storage

- Bucket/container private.
- Lifecycle rule — defense in depth, не единственный cleanup.
- Object keys случайные; без hostname/title.
- Server-side encryption.
- Signed access выдает backend download endpoint или narrow presigned URL.
- No public listing.
- No backups/versioning для user artifacts.
- Отдельные prefixes/credentials для preview и final artifacts.

## Cancellation

- Пользователь может отменить queued/running job.
- Worker cooperative cancellation проверяется между stages.
- Browser context закрывается.
- Partial artifacts удаляются.
- Cancellation не создает history entry.

## Recovery

- API process может перезапуститься без потери queued state.
- Worker crash переводит job в bounded retry, если error transient.
- Deterministic validation/fidelity error не retry.
- Storage write и state transition должны быть идемпотентны.
- Expired job никогда не «воскресает».

## Preview consistency

- Thumbnail и final output строятся из одной revision.
- Render request с устаревшей revision возвращает `REVISION_CONFLICT`.
- Warnings не исчезают без новой extraction/render evidence.
- Если final renderer применил дополнительный fallback, download-ready response добавляет новый warning.

## Privacy copy contract

Для web:

> Public webpage URLs are processed temporarily to create your preview and file. We do not keep a conversion history. Temporary data is automatically deleted.

Для extension:

> When exporting the current tab or an AI conversation locally, page content and the generated file stay in your browser.

Точный текст должен пройти legal/content review и соответствовать фактической реализации.

## Статус реализации на 2026-07-30

State machine, revision conflict, remove/restore/move/split/merge, cancellation,
three download attempts, success grace и TTL cleanup реализованы. Split/merge
materialize новые thumbnails, поэтому preview и final используют одну revision,
а заменённые objects удаляются.

Filesystem TTL/encryption проверены unit tests. Redis restart recovery,
MinIO lifecycle, cancellation under active Chromium и orphan-zero drill
остаются Docker-dependent verification gates.
