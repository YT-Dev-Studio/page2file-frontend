# API и защита каналов доступа

## Принцип

Нельзя сделать public client JavaScript или Chrome extension единственным владельцем некрадущегося постоянного секрета. Поэтому «API работает только с нашими клиентами» достигается сочетанием:

- private internal services;
- server-to-server credentials;
- отдельными gateway routes и scopes;
- short-lived tokens;
- quotas/rate limits;
- abuse detection;
- ability to revoke;
- минимизацией серверных операций для extension.

Это control of abuse and privilege, а не абсолютное доказательство происхождения каждого запроса.

## API surfaces

```text
Public gateway
├─ /web/v1/**
├─ /gpt/v1/**
├─ /extension/v1/**
└─ /download/v1/**

Private service network
├─ /internal/v1/jobs/**
├─ /internal/v1/workers/**
├─ /internal/v1/artifacts/**
└─ /internal/v1/admin/health/**
```

`internal/**` не маршрутизируется через public load balancer.

## Web channel

### Поток

```text
Browser
  -> same-origin Next.js BFF
  -> authenticated backend web gateway
  -> private job service
```

### Controls

- HttpOnly same-site anonymous session cookie.
- CSRF token/custom header для state-changing requests.
- Origin/Referer как secondary signal.
- Turnstile/challenge для suspicious/high-cost requests.
- Per-session + rotating-IP-hash + global rate limits.
- Next.js BFF подписывает canonical request server-side.
- Backend принимает web operations только от разрешенного BFF service identity.
- Browser никогда не получает backend service credential.
- CORS не является security boundary; public backend CORS для web browser закрыт.

## GPT channel

### Официальный integration contract

- GPT Action описывается OpenAPI schema.
- Для server-to-server access используется API key authentication.
- Для каждого GPT создается отдельный key/client identity:
  - `page2pdf`;
  - `web2pdf`;
  - `html2pdf`;
  - `web2powerpoint`.
- У каждого client свой scope, quota, concurrency и revoke switch.
- Public GPT с action должен иметь корректную privacy policy URL.

### Разрешения

| GPT client | Разрешенные операции |
| --- | --- |
| Page2PDF | single URL → PDF |
| Web2PDF | bounded same-origin crawl → PDF |
| HTML2PDF | bounded sandboxed HTML → PDF |
| Web2PowerPoint | single/bounded URL → PPTX |

Формат не принимается как произвольный enum, если он уже фиксирован endpoint scope.

### Ограничения

- API key может утечь; нужны rotation, quotas и anomaly signals.
- Не полагаться на User-Agent.
- Не разрешать одному GPT key вызывать чужие operations.
- Download URL короткоживущая, opaque и scope-bound.
- OpenAPI descriptions не должны подталкивать модель к обходу ограничений.

## Extension channel

### Local-first

- Current tab/AI chat export не вызывает backend.
- `activeTab` выдаёт временный доступ только после user gesture.
- Extension не хранит разговоры и не отправляет их в telemetry.

### Если server call нужен

- Published extension ID allowlist — только signal.
- Challenge endpoint выдает короткоживущий nonce/token.
- Token связан с operation, timestamp и body hash.
- Replay protection.
- Aggressive per-token/per-IP quotas.
- Optional human challenge при аномалии.
- Никакого постоянного master key в bundle.
- Нельзя обещать криптографически доказанное происхождение от unmodified extension.

## Contract objects

### Create preview

```text
CreatePreviewRequest
- source
  - kind: url | html
  - value
- output: pdf | pptx
- mode: visual | editable
- options
  - viewportPreset
  - pageOrSlidePreset
  - includeLinks
- clientRequestId
```

Gateway scope может фиксировать `source.kind` и `output` вместо доверия client fields.

### Response

```text
CreatePreviewResponse
- jobId
- accessToken or scoped session binding
- status
- expiresAt
- statusUrl
```

### Job status

```text
JobStatusResponse
- jobId
- status
- progress
- stage
- warnings[]
- retryAfterMs
- expiresAt
- preview (only when ready)
- error (public normalized error only)
```

### Preview operations

```text
PreviewRevisionRequest
- revision
- operations[]
  - remove
  - restore
  - move
  - split
  - merge
```

Backend проверяет ownership всех section IDs и revision.

### Render/download

```text
CreateRenderRequest
- previewRevision
- options

RenderReadyResponse
- jobId
- downloadUrl
- expiresAt
- remainingDownloadAttempts
```

Storage locator и bucket key никогда не возвращаются.

## State machine

```text
accepted
  -> queued
  -> loading
  -> analyzing
  -> preview_rendering
  -> preview_ready
  -> final_queued
  -> final_rendering
  -> download_ready
  -> downloaded
  -> expired

Any processing state
  -> failed_recoverable | failed_terminal | cancelled | expired
```

Client не может произвольно назначать status.

## Error model

Stable public codes:

- `INVALID_URL`
- `UNSUPPORTED_SCHEME`
- `PRIVATE_NETWORK_TARGET`
- `DNS_VALIDATION_FAILED`
- `REDIRECT_BLOCKED`
- `SOURCE_REQUIRES_AUTH`
- `SOURCE_BLOCKED_AUTOMATION`
- `PAGE_TOO_LARGE`
- `RESOURCE_LIMIT_EXCEEDED`
- `LOAD_TIMEOUT`
- `UNSUPPORTED_HTML`
- `PREVIEW_EXPIRED`
- `REVISION_CONFLICT`
- `RATE_LIMITED`
- `HUMAN_VERIFICATION_REQUIRED`
- `RENDER_FAILED`
- `DOWNLOAD_EXPIRED`

Public message локализуется web frontend. Backend logs используют correlation ID и technical code, но не полный URL/content.

## Versioning/idempotency

- URL path major version.
- Request/response schema version в OpenAPI.
- `clientRequestId` + client identity для idempotency.
- Повтор create request в коротком окне возвращает ту же job, если payload hash совпадает.
- Breaking state/error changes только в новом major version.
- Preview revision использует optimistic concurrency.

## Download security

- Opaque random token.
- Token hash хранится, raw token не логируется.
- Scope: один artifact, один client/session.
- Short TTL.
- `Content-Disposition: attachment`.
- Correct MIME и `X-Content-Type-Options: nosniff`.
- `Cache-Control: private, no-store`.
- Неиндексируемый route + `X-Robots-Tag: noindex, nofollow`.
- Ограниченное число повторных попыток для interrupted download.
