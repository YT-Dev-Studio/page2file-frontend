# Routes, контент, SEO и локализация

## URL strategy

- Все публичные content pages имеют locale prefix: `/en/...`, `/de/...`.
- Английский тоже находится под `/en`.
- `/` — `x-default` language chooser или нейтральный redirect без IP-based crawler redirect.
- Slugs остаются одинаковыми на всех языках для поддержки и аналитики.
- Язык страницы задается реальным переведенным контентом и `<html lang>`.
- Canonical указывает на текущую locale URL, не на English для всех языков.
- Каждая locale variant перечисляет себя и остальные доступные варианты через hreflang.

## Locale registry

### Wave 1

- `en`
- `de`
- `fr`
- `es`
- `nl`

### Wave 2

- `pt`
- `it`
- `pl`
- `sv`
- `no`
- `da`
- `fi`
- `cs`
- `ro`
- `hu`

Это список, подтвержденный историей как разумная продуктовая цель, а не юридическое определение «всех западных стран». Region variants (`en-US`, `en-GB`, `pt-BR`, `pt-PT`) добавляются только при реальных различиях. Locale registry должен позволять расширение без изменения route templates.

## Indexing gate для locale

Locale становится indexable только когда:

- все required UI strings переведены;
- hero/body/FAQ/legal copy переведены человеком или проверены редактором;
- metadata и structured data переведены;
- internal links ведут на ту же locale;
- hreflang reciprocal links полны;
- screenshots/video captions не вводят в заблуждение;
- legal copy соответствует доступности сервиса в регионе;
- content QA пройден.

До этого locale доступна только на preview/staging или возвращает `noindex`.

## Public route inventory

| Route under `/[locale]` | Назначение | Index |
| --- | --- | --- |
| `/` | Главная продукта | yes |
| `/convert-webpage-to-pdf` | Публичный URL → PDF | yes |
| `/convert-webpage-to-powerpoint` | Публичный URL → PPTX | yes |
| `/chrome-extension` | Marketing/install extension | yes |
| `/chrome-extension/welcome` | Post-install welcome | noindex by default |
| `/chrome-extension/how-to-use` | Step-by-step + video guide | yes |
| `/page2pdf-gpt` | GPT: одна страница → PDF | yes |
| `/web2pdf-gpt` | GPT: bounded multi-page website → PDF | yes |
| `/html2pdf-gpt` | GPT: HTML → PDF | yes |
| `/web2powerpoint-gpt` | GPT: webpage → PowerPoint | yes |
| `/export-ai-chat-to-pdf` | Parent chat-export landing | yes |
| `/export-chatgpt-to-pdf` | ChatGPT local export landing | yes |
| `/export-claude-to-pdf` | Claude local export landing | yes |
| `/export-gemini-to-pdf` | Gemini local export landing | yes |
| `/export-grok-to-pdf` | Grok local export landing | yes |
| `/blog` | Article index | yes |
| `/blog/[slug]` | Article | yes if reviewed |
| `/updates` | Human-readable releases | yes |
| `/updates/[slug]` | Optional update detail | yes |
| `/changelog` | Technical version history | yes |
| `/privacy` | Privacy policy | yes |
| `/terms` | Terms of service | yes |
| `/cookie-policy` | Cookie/analytics policy | yes |
| `/security` | Security and responsible use | yes |
| `/acceptable-use` | Abuse/copyright/crawl rules | yes; may merge with terms |

## Technical route inventory

| Route | Index policy |
| --- | --- |
| `/[locale]/preview/[jobId]` | `noindex, nofollow`, `no-store` |
| `/[locale]/download/[jobId]` | `noindex, nofollow`, `no-store` |
| `/api/**` | not in sitemap; X-Robots-Tag |
| backend `/web/**`, `/gpt/**`, `/extension/**` | not in sitemap; X-Robots-Tag |
| backend `/download/**` | tokenized; noindex/no-store |
| internal services | not publicly routable |

## Page templates

### Home

1. Hero: webpage → PDF or PowerPoint.
2. Два primary CTAs ведут на отдельные converter pages.
3. Объяснение `Visual` и `Editable & clickable`.
4. Demo outputs/preview.
5. Extension value: current/private tab.
6. Privacy-first distinction: local vs temporary server processing.
7. GPT tools.
8. AI chat export cluster.
9. Use cases.
10. FAQ.
11. Blog links.
12. Final CTA.

### PDF converter

Уникальный intent: convert one public webpage URL into PDF.

1. Working converter form above fold.
2. Visual vs editable comparison.
3. Preview explanation.
4. Clickable links behavior.
5. Long page/section behavior.
6. What is/is not supported.
7. Private tab → extension CTA.
8. Security/privacy.
9. FAQ.
10. Related articles/GPT.

### PowerPoint converter

Уникальный intent: webpage URL into presentation slides.

1. Working converter form.
2. Section-to-slide explanation.
3. Visual deck vs editable deck.
4. Text/buttons/images/link behavior.
5. Font and complex graphic fallback.
6. Preview/reorder flow.
7. Example deck.
8. Limitations.
9. FAQ.
10. Related GPT/article.

### Chrome extension marketing

1. Current-tab positioning.
2. Authenticated/private page use.
3. Local conversion explanation.
4. PDF/PPTX modes.
5. AI chat export.
6. Permission explanation.
7. Screenshots/demo.
8. Install CTA.
9. Guide link.
10. Privacy/FAQ.

### Post-install welcome

1. Confirmation/install success.
2. Three-step first export.
3. `Open extension`/toolbar guidance.
4. Permission explanation.
5. Local vs URL server processing.
6. Link to full guide.
7. Updates/version.
8. Privacy link.

По умолчанию `noindex`, потому что это activation page, а не отдельный search intent.

### How to use extension

1. Intro and prerequisites.
2. Accessible tabs:
   - `Step-by-step`;
   - `Video`.
3. Step-by-step screenshots + captions.
4. Video poster, chapters and transcript.
5. PDF flow.
6. PPTX flow.
7. AI-chat flow.
8. Troubleshooting.
9. Permissions/privacy.
10. FAQ/install CTA.

Весь основной instruction text присутствует в server-rendered HTML независимо от активного tab.

## GPT landing templates

### Page2PDF GPT

- One public page.
- PDF only.
- Visual/editable description.
- GPT CTA.
- Web converter alternative.
- Explicit public URL limitation.

### Web2PDF GPT

- Same-origin multi-page crawl.
- Page/depth limits.
- Link discovery/deduplication.
- Output decision.
- Respectful crawl limitations.
- No authenticated/private site crawling.

### HTML2PDF GPT

- Accepted input: raw HTML + inline/allowed CSS.
- Sandbox/no internal network.
- Size and scripts policy.
- ZIP excluded initially.
- Output PDF only.

### Web2PowerPoint GPT

- Webpage/limited site → PPTX.
- Visual/editable slides.
- Section-to-slide behavior.
- Font/raster fallback.
- GPT CTA and web converter alternative.

## AI-chat landing cluster

### Parent page

- Supported platforms table.
- Original look vs Clean document.
- Local browser processing.
- Common export steps.
- Links to all platform pages.
- Install CTA.

### Common child template

1. Platform-specific hero.
2. Extension CTA, не URL form.
3. Platform screenshot/demo.
4. What is preserved.
5. `Original look` and `Clean document`.
6. Six-step use flow.
7. Local privacy block.
8. Platform-specific limitations.
9. Platform-specific FAQ.
10. Independence disclaimer.
11. Links to parent, guide and other supported platforms.

### Уникальный контент

- ChatGPT: messages, code blocks, tables, long conversations, shared links.
- Claude: long responses, artifacts, documents, Markdown and code.
- Gemini: source cards, images available in DOM, code and citations.
- Grok: X links/posts, source citations, threads and formatting.

### Trademark disclaimer

Page2File должен быть представлен как независимый продукт, без имитации официального расширения и без использования чужого логотипа как основного бренда.

## Blog plan: максимум 10 статей

1. How to save a webpage as a PDF.
2. How to preserve clickable links in a webpage PDF.
3. Visual vs editable webpage conversion.
4. How to convert a long webpage without broken page breaks.
5. How to convert a webpage into PowerPoint slides.
6. How to export AI chats to PDF privately.
7. How to convert HTML to PDF safely.
8. How to convert a multi-page website to PDF.
9. Why browser Print to PDF breaks complex pages.
10. How webpage sections become presentation slides.

Каждая статья:

- отвечает отдельному intent;
- не копирует landing page;
- содержит полезный standalone answer;
- ссылается на один primary tool CTA;
- имеет translation key и reviewed locale variants;
- содержит author/date/update metadata;
- не генерируется массово ради количества URL.

## Updates и changelog

### Updates

- Пользовательская ценность.
- Screenshots/demo.
- Что изменилось.
- Для кого.
- CTA.

### Changelog

- Version/date.
- Added.
- Improved.
- Fixed.
- Security, если раскрытие безопасно.
- Ссылка на related update.

## Metadata requirements

Для каждой public page:

- уникальные title/description;
- canonical;
- locale alternates;
- Open Graph/Twitter metadata;
- share image;
- robots policy;
- breadcrumbs там, где есть hierarchy;
- structured data только когда оно соответствует видимому контенту.

Не добавлять фиктивные rating/review/FAQ данные ради rich result.

## Sitemap

- Генерируется из route registry + content entries + enabled locales.
- Содержит только canonical indexable pages.
- Для каждой URL перечисляет locale alternates.
- Технические routes исключены.
- `lastModified` берется из content metadata, а не всегда `now`.

## Canonical и UTM

- UTM никогда не входит в canonical.
- Query variants не создают новые индексируемые страницы.
- Converter job ID/token не входит в public canonical.
- Language switch сохраняет semantic route, но не UTM и не job secrets.
