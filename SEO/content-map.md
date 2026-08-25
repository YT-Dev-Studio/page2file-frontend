# Page 2 File content map

Updated: 2026-08-25

## Published architecture

Page 2 File is the website. Page 2 PDF is the Chrome extension. Web2File names only the two confirmed GPTs.

Seven routes are published in both English and Russian:

| Route | Primary job |
|---|---|
| `/{locale}` | Choose the correct Page 2 PDF mode for the active Chrome tab. |
| `/{locale}/chrome-extension/how-to-use` | Follow the complete active-tab export procedure and check its limits. |
| `/{locale}/page2pdf-gpt` | Process exact public URLs, webpage PDFs, or ordered screenshots with Web2File. |
| `/{locale}/html2pdf-gpt` | Render one uploaded HTML document with Web2File. |
| `/{locale}/about` | Explain operator, evidence, editorial review, and corrections. |
| `/{locale}/privacy` | Explain website and extension data processing. |
| `/{locale}/terms` | Define permitted use, responsibilities, and output limits. |

Eleven additional extension routes are published in English only:

| Cluster | Routes | Boundary |
|---|---|---|
| Webpage | `webpage-to-pdf`, `full-page-pdf`, `webpage-to-pdf-with-links`, `html-page-to-pdf`, `chrome-print-vs-page-2-pdf` | Active Chrome tab only; separate appearance-first and selectable workflows. |
| AI chat | `ai-chat-to-pdf`, `chatgpt-to-pdf`, `claude-to-pdf` | Current supported conversation, not an account archive. |
| Messenger | `messenger-chat-to-pdf`, `whatsapp-chat-to-pdf`, `telegram-chat-to-pdf` | Current WhatsApp Web thread or Telegram Web chat/channel only. |

English-only routes emit only `x-default` and `en` alternates. Their language switcher sends Russian readers to `/ru/chrome-extension/how-to-use` rather than inventing untranslated URLs.

## Verified Page 2 PDF contract

- Page 2 PDF works on the active accessible Chrome tab. It does not accept a pasted URL, crawl a site, or bypass authentication and other access controls.
- Accurate copy prepares the primary scroll area, performs a bounded lazy-content pass, freezes animation during capture, and creates image-based pages. The workflow restores scroll, focus, selection, and temporary layout changes afterward.
- Editable document uses Chromium PDF output. It supports selectable source text, safe links, `As viewed` and `Print optimized`, optional image/link/style removal, eligible non-sensitive form controls, bounded regional OCR for canvas-like regions, and an optional scrubbed project archive.
- AI / Chat builds a semantic transcript from the current conversation. Supported structures include headings, lists, quotes, code, tables, citations, files, images, video posters, and audio or voice references when exposed by the platform.
- Dedicated adapters exist for ChatGPT, Gemini, Claude, Grok, Perplexity, Microsoft Copilot, Manus, WhatsApp Web, and Telegram Web chat/channel. Generic AI compatibility is conditional on unambiguous user and assistant roles.
- Chat history loading is bounded to the latest 2,000 retrievable messages. Users can choose all messages or replies only and remove supported media categories or links.
- Slack, Instagram, Discord, Messenger, Microsoft Teams, account-wide export, pasted-URL conversion, website crawling, full-document OCR, built-in PDF editing, and project-archive import are not supported claims.
- The source tab must remain open during preparation. Very tall pages, virtualized lists, protected frames, unavailable assets, and platform DOM changes can produce partial output or require an adapter update.
- Page and conversation content is not uploaded to Page 2 File servers by the extension. Temporary preview data follows the extension lifecycle, with orphaned data older than two hours cleared on a later run.

## Intent ownership

- The homepage owns the broad product choice and mode comparison.
- The guide owns the complete procedural query.
- The webpage hub owns the general active-tab conversion task; its spokes own full-page capture, links/selectable text, local HTML, and Chrome Print comparison.
- The AI and messenger hubs explain category-wide boundaries. Platform pages answer only the current-conversation workflow for that platform.
- The two GPT routes remain separate from the extension because their inputs and processing boundaries differ.
- About, Privacy, and Terms are not acquisition landing pages and must not absorb product queries.

## Evidence policy

Source priority is extension code and tests, reproducible sample PDFs, current release checks, first-party platform documentation, then external research. Competitor copy and user counts may explain a pattern but never establish a Page 2 PDF capability.

US SERP validation is recorded per query in `us-serp-validation.csv`. Only directly checked rows may be `validated`; the remaining long-tail queue stays `pending`. Worldwide Google Trends values are source-relative signals and are not treated as US search volume.

## Unpublished content

The blog, updates, changelog, public URL/PPTX converters, unconfirmed GPTs, and former standalone platform pages are not published. Their routes return `404` without redirects. Empty editorial registries remain valid; new publication requires current product evidence, English/Russian parity where applicable, intent review, and rendered QA.
