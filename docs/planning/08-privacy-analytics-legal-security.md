# Privacy, analytics, legal и application security

## Privacy-first contract

### Не делаем

- Не создаем аккаунты.
- Не ведем conversion history.
- Не используем document content для обучения/маркетинга.
- Не сохраняем AI-чаты на сервере.
- Не сохраняем raw URLs в analytics.
- Не отправляем Google Analytics events до разрешенного consent state.
- Не обещаем то, чего архитектура не выполняет.

### Делаем

- Data minimization.
- Purpose limitation.
- Short TTL.
- Private temporary storage.
- Transparent local/server distinction.
- User-visible expiration.
- Deletion verification.
- Security logs без document content.

## Google Analytics и consent

### Рекомендуемый privacy-first вариант

Basic Consent Mode:

- Google tag не загружается до выбора пользователя там, где consent необходим.
- Banner предоставляет одинаково доступные:
  - `Accept analytics`;
  - `Reject non-essential`;
  - `Manage preferences`.
- Отказ не блокирует конвертер.
- Preferences можно изменить позже.
- Functional/security storage описывается отдельно.

Advanced Consent Mode отправляет cookieless pings при denied state; для privacy-first позиционирования он не должен включаться автоматически без отдельного legal/product approval.

### Consent state

- Default: analytics denied/not loaded.
- On accept: load GA and send sanitized page/session attribution.
- On reject: не загружать GA, удалить previously set non-essential identifiers.
- On revoke: update state и удалить non-essential cookies/storage, насколько это контролируется приложением.
- Consent copy локализуется.

## UTM flow

Поддерживаются:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`.

### До consent

- Parse и normalize в memory текущей страницы.
- Validate length/charset.
- Не писать в server logs.
- Не сохранять в cookie/localStorage/sessionStorage по умолчанию.
- Не отправлять third parties.

### После consent

- Передать sanitized values в GA event/session.
- Optional first-touch session attribution только с отдельным product/legal approval.
- Не связывать с profile/account, потому что аккаунтов нет.
- Не помещать source URL пользователя в analytics event.

### Expected campaigns

- GPT: `utm_source=page2pdf_gpt`, `utm_medium=gpt`.
- Extension welcome: `utm_source=chrome_extension`, `utm_medium=extension`.
- Blog/internal links обычно не требуют UTM; использовать internal event parameters, чтобы не ломать attribution.

## Infrastructure logging

### Разрешено

- timestamp;
- correlation ID;
- client channel;
- endpoint/operation;
- normalized error code;
- duration;
- output/mode;
- size buckets;
- queue/worker metrics;
- truncated/rotating abuse identifier.

### Запрещено

- raw request body;
- raw HTML;
- full URL/query;
- cookies/Authorization;
- download tokens;
- file contents;
- chat content;
- screenshots.

Log retention задается отдельно и документируется в Privacy Policy.

## Legal pages

### Privacy Policy

- Controller/contact.
- Какие категории данных обрабатываются.
- Local vs server conversion.
- URL/source processing.
- Preview/file TTL.
- Analytics and consent.
- UTM.
- Security/hosting logs.
- Vendors/processors.
- International transfers, если применимо.
- Retention table.
- User rights/contact.
- Cookies/preferences.
- Changes/effective date.

### Terms of Service

- Service description.
- No account/no guaranteed availability.
- User rights to submitted content.
- Prohibited use.
- Output accuracy/fidelity limitations.
- Third-party site terms.
- Rate limits.
- Warranty/liability language.
- Termination/blocking abuse.
- Governing law after legal decision.

### Cookie Policy

- Essential/security storage.
- Analytics storage.
- Provider/purpose/duration.
- How to change preference.
- Basic/advanced consent behavior actually used.

### Acceptable Use

- No internal-network scanning.
- No bypassing authentication/paywalls.
- No malicious HTML.
- No copyright abuse.
- No excessive crawling.
- No credential/cookie submission.
- No automation beyond quotas.

### Security page

- High-level safeguards.
- Local export claims.
- Temporary server processing.
- Responsible disclosure contact/process.
- Не раскрывать operational secrets.

Юридические документы в test frontend — drafts. Production publication требует counsel review для целевых jurisdictions.

## Threat model

| Threat | Primary controls |
| --- | --- |
| SSRF/private network access | URL/IP validation, DNS/redirect recheck, egress deny, metadata block |
| DNS rebinding | controlled resolver, connect-time validation, egress proxy |
| Redirect bypass | manual bounded redirects, target revalidation |
| Oversized page/resource | byte/resource/time budgets, abort |
| Browser escape | unprivileged container, sandbox, read-only FS, seccomp/platform policy |
| HTML/script injection | scripts off, isolated sandbox, no network/file access |
| XSS in preview/web | output encoding, sanitizer, CSP, no raw HTML render |
| Malicious SVG | sanitize or rasterize |
| Shell injection | no shell string construction, argument arrays/library APIs |
| CSRF | same-site cookies, CSRF token/header, origin signal |
| Credential leakage | server-only secrets, redaction, scoped credentials |
| API replay | nonce, timestamp, body hash, short token |
| Queue abuse | quotas, cost limits, backpressure, challenge |
| Storage exposure | private bucket, opaque keys, signed access, no listing |
| Token leak | hash-at-rest, no logs, short TTL, scope binding |
| Cross-job access | ownership/session binding on every read/mutation |
| Malicious hyperlink | scheme validation, unsafe target removal warning |
| Dependency/supply chain | lockfile, review, scanning after scaffold approval |

## Injection checklist

### Backend input

- Runtime schemas reject unknown fields where possible.
- Length/range/enum limits.
- URL normalized once and canonical value passed between layers.
- No dynamic `eval`, `Function`, templates or shell.
- HTML parser has size/depth/node limits.
- JSON has body size/depth limits.
- Filenames generated server-side.

### Frontend output

- Backend messages treated as codes/data, not markup.
- Page titles/URLs escaped by React.
- Preview does not embed source page DOM directly.
- Iframes, если используются для video/demo, имеют sandbox/allowlist.
- CSP не содержит broad unsafe sources без documented exception.
- Third-party scripts centralized behind consent owner.

### Downloads

- MIME hardcoded per output.
- Filename sanitized and length-limited.
- Attachment response.
- `nosniff`.
- No user-controlled response headers.

## Security verification gates

- SSRF test corpus.
- Redirect chain tests.
- IPv4/IPv6/private-range cases.
- DNS rebinding design review.
- Raw HTML sandbox escape review.
- Cross-job authorization tests.
- Download token replay/expiry tests.
- CSP report-only trial, затем enforcement.
- Secrets/log redaction review.
- Storage lifecycle/orphan cleanup drill.
- Dependency/container scanning after technology approval.
- External penetration test before broad public launch.
