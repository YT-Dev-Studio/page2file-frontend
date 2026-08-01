# Decisions and release gates

## Localization

Shared layout changes apply to all locales. New publication-ready legal copy is
Russian-only. English content is preserved. Other locales remain unreviewed and
`noindex`; removing visible draft labels does not change that status.

## Analytics

Google Analytics continues to load automatically for the current Kazakhstan
launch. EU/EEA/UK launch and monetization remain blocked until regional consent
and legal review are implemented and approved. US monetization requires a
separate CCPA/CPRA applicability and opt-out review.

## Legal publication

Russian legal and security pages disclose ИП YT DEV, the public address
`Казахстан, Алматы, Жетысу‑4`, `info@page2file.com`, Google Analytics, and
Cloudflare. Copy describes actual behavior and does not claim absolute GDPR,
CCPA, or Kazakhstan-law compliance.

Before setting `NEXT_PUBLIC_LEGAL_REVIEWED`, confirm retention, deletion,
international processing/data-location, processor agreements, and the final
wording through the deployment owner or counsel.

## Delivery

This work produces local source changes and local commits only. Packages,
testing infrastructure, backend contracts, production systems, push, PR, and
deployment are excluded.
