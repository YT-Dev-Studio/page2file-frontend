# Source register

Дата проверки: 2026-07-29.

Источники используются для архитектурных ограничений. Product decisions остаются решениями Page2File.

## Next.js

- [Next.js internationalization guide, v16.2.9](https://github.com/vercel/next.js/blob/v16.2.9/docs/01-app/02-guides/internationalization.mdx) — locale segments и static params.
- [Next.js generateStaticParams, v16.2.9](https://github.com/vercel/next.js/blob/v16.2.9/docs/01-app/03-api-reference/04-functions/generate-static-params.mdx) — статическая генерация dynamic segments.
- [Next.js generateMetadata, v16.2.9](https://github.com/vercel/next.js/blob/v16.2.9/docs/01-app/03-api-reference/04-functions/generate-metadata.mdx) — canonical и language alternates.
- [Next.js sitemap convention, v16.2.9](https://github.com/vercel/next.js/blob/v16.2.9/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.mdx) — localized sitemap alternates.

Архитектурный вывод: locale routes можно статически генерировать; Metadata API поддерживает canonical/language alternates; sitemap может перечислять локализованные варианты.

## Google Search

- [Localized versions of your pages](https://developers.google.com/search/docs/specialty/international/localized-versions) — reciprocal hreflang, fully qualified URLs, self-reference и x-default.
- [Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites) — отдельные language URLs и явные locale signals.

Архитектурный вывод: все locale variants должны быть реальными переводами и взаимно ссылаться; массовые почти одинаковые country pages не нужны.

## Google Analytics consent

- [Set up consent mode on websites](https://developers.google.com/tag-platform/security/guides/consent) — default/update consent states.
- [Consent mode overview](https://developers.google.com/tag-platform/security/concepts/consent-mode) — различие Basic и Advanced Consent Mode.

Архитектурный вывод: для privacy-first MVP рекомендуется Basic mode, где Google tags не загружаются до consent; Advanced mode отправляет cookieless measurements и требует отдельного решения.

## Privacy law references

- [GDPR, Regulation (EU) 2016/679, Article 5](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679) — data minimisation и storage limitation.
- [EDPB summary: Consent under GDPR](https://www.edpb.europa.eu/system/files/2026-04/edpb-summary-consent_en.pdf) — условия valid consent.
- [EDPB cookie banner taskforce report](https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf) — consent-required cookies и reject path.

Эти ссылки не заменяют legal advice для конкретных стран запуска.

## Backend security

- [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html) — IP/domain validation, redirect risks и DNS pinning/rebinding concerns.

Архитектурный вывод: URL converter обязан проверять resolved IP и redirects и иметь network-level egress controls; строковой URL allowlist недостаточен.

## Chrome extensions

- [Manifest V3 overview](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3) — service workers и запрет remotely hosted code.
- [Improve extension security](https://developer.chrome.com/docs/extensions/develop/migrate/improve-security) — CSP и запрет arbitrary string execution.
- [Protect user privacy](https://developer.chrome.com/docs/extensions/develop/security-privacy/user-privacy) — `activeTab` как временная альтернатива broad host access.
- [chrome.scripting](https://developer.chrome.com/docs/extensions/reference/api/scripting) — script injection permissions.
- [chrome.downloads](https://developer.chrome.com/docs/extensions/reference/api/downloads) — local download API и required permission.

Архитектурный вывод: current-tab export должен использовать минимальные permissions, local bundled code и user gesture.

## GPT Actions

- [Configuring actions in GPTs](https://help.openai.com/en/articles/9442513) — OpenAPI schema, authentication modes, API key для server-to-server access, privacy policy URL для public GPT actions.
- [Creating a GPT](https://help.openai.com/en/articles/8554397-creating-a-gpt) — custom actions imported/defined through external API schema.

Архитектурный вывод: четыре GPT используют отдельные scoped API keys и OpenAPI operations. API key не отменяет quotas, rotation и revoke.
