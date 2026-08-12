# Page 2 File content map

Updated: 2026-08-12

## Published product pages

The public site now describes the working Chrome extension. The same seven routes are available in all 16 indexed locales:

| Route | Intent | Status |
|---|---|---|
| `/{locale}` | Webpage to PDF Chrome extension overview | Published |
| `/{locale}/chrome-extension/how-to-use` | Save a webpage as PDF in Chrome | Published |
| `/{locale}/page2pdf-gpt` | Confirmed Web2File webpage-to-PDF GPT | Published |
| `/{locale}/html2pdf-gpt` | Confirmed Web2File HTML-to-PDF GPT | Published |
| `/{locale}/about` | Product and operator information | Published |
| `/{locale}/privacy` | Extension processing and website privacy | Published |
| `/{locale}/terms` | Terms of use | Published |

The homepage owns the broad product intent. The instruction page owns the procedural Chrome intent. The two GPT pages describe only their confirmed, separate GPT workflows.

## Product boundary

- Page 2 File works on the current accessible Chrome tab: public pages, pages already available after sign-in, local HTML with file-URL permission, browser-based Google Docs/Sheets/Slides, and recognised browser chats.
- `Accurate copy` creates an image-based visual copy. `Editable document` keeps supported text and links and can omit images, links, or styling. `AI / Chat` exports all messages or replies only and can omit images or links.
- PDF content is created locally in the extension. The preview result is temporary and is removed when the preview closes or within two hours.
- The product does not accept a URL on the website, upload Word/Excel/PowerPoint files directly, produce PPTX, edit sections, merge/split/reorder PDFs, or guarantee unrecognised chat pages.

## Unpublished legacy content

The former blog, updates, changelog, public URL/PPTX converters, three unconfirmed GPT pages, and separate ChatGPT/Claude/Gemini/Grok SEO landings were removed from routing, navigation, sitemap, hreflang, and the content registry. Their old addresses intentionally return `404` without redirects.

All 24 former articles and their 16-language MDX copies are withdrawn. Their text and article-only assets were removed because the material described obsolete or unsupported behavior. Any future publication requires new copy, current product verification, locale parity, editorial review, and a fresh route registration.

## Planned editorial clusters

Planned URLs remain targets in the semantic core; they are not published routes yet.

| Cluster | Planned target | Editorial boundary |
|---|---|---|
| `PDF-DEFINITION` | `/en/blog/what-is-a-pdf` | Keep `what is pdf`, `what is a pdf`, PDF meaning, reader, and format questions. |
| `PDF-HTML` | `/en/blog/html-to-pdf-safely` | Explain opening a local HTML file in Chrome and saving the current tab with the extension. |
| `OFFICE-WORD-GDOCS` | `/en/blog/word-to-pdf-with-google-docs` | Browser workflow through Google Docs; never promise direct Word upload. |
| `OFFICE-EXCEL-GSHEETS` | `/en/blog/excel-to-pdf-with-google-sheets` | Browser workflow through Google Sheets; never promise direct Excel upload. |
| `OFFICE-PPT-GSLIDES` | `/en/blog/powerpoint-to-pdf-with-google-slides` | Browser workflow through Google Slides; never promise direct PowerPoint upload. |
| `PDF-WEBPAGE` | Future article after rewrite | Do not compete with the homepage or extension instruction intent. |
| AI and messenger export | Future platform articles after rewrite | Use only confirmed adapters and label generic AI compatibility as conditional. |

## Semantic-core routing

- `webpage to pdf chrome extension` and `webpage to pdf chrome` target `/en`.
- `save webpage as pdf chrome` and `how to save webpage as pdf chrome` target `/en/chrome-extension/how-to-use`.
- Future article targets, including `what is pdf`, HTML-to-PDF, and Office-through-Google workflows, remain in `semantic-core-en.csv` even while unpublished.

Google Trends values remain source-relative signals, not absolute search volume. Provenance and the existing source ledger remain authoritative for imported query batches.
