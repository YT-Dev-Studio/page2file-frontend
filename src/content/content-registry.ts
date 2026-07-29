import type { ComponentType } from "react";
import Article01 from "../../content/blog/save-webpage-as-pdf.mdx";
import Article02 from "../../content/blog/preserve-clickable-links.mdx";
import Article03 from "../../content/blog/visual-vs-editable.mdx";
import Article04 from "../../content/blog/long-webpage-page-breaks.mdx";
import Article05 from "../../content/blog/webpage-to-powerpoint.mdx";
import Article06 from "../../content/blog/export-ai-chats-privately.mdx";
import Article07 from "../../content/blog/html-to-pdf-safely.mdx";
import Article08 from "../../content/blog/multi-page-website-to-pdf.mdx";
import Article09 from "../../content/blog/why-print-to-pdf-breaks.mdx";
import Article10 from "../../content/blog/sections-to-slides.mdx";
import UpdatePreview from "../../content/updates/preview-workspace.mdx";
import UpdateChat from "../../content/updates/local-chat-export.mdx";

export type ContentKind = "blog" | "update";

export type ContentEntry = {
  kind: ContentKind;
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  component: ComponentType;
};

export const blogEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "blog",
    slug: "save-webpage-as-pdf",
    title: "How to save a webpage as a PDF",
    description: "Choose the right capture boundary before page breaks become a problem.",
    author: "Page2File editorial",
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-29",
    readingMinutes: 4,
    component: Article01,
  },
  {
    kind: "blog",
    slug: "preserve-clickable-links",
    title: "How to preserve clickable links in a webpage PDF",
    description: "Understand when links survive conversion and when they must be removed.",
    author: "Page2File editorial",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article02,
  },
  {
    kind: "blog",
    slug: "visual-vs-editable",
    title: "Visual vs editable webpage conversion",
    description: "A practical fidelity contract for choosing the right output mode.",
    author: "Page2File editorial",
    publishedAt: "2026-07-03",
    updatedAt: "2026-07-29",
    readingMinutes: 4,
    component: Article03,
  },
  {
    kind: "blog",
    slug: "long-webpage-page-breaks",
    title: "How to convert a long webpage without broken page breaks",
    description: "Use semantic sections and preview controls instead of blind viewport cuts.",
    author: "Page2File editorial",
    publishedAt: "2026-07-04",
    updatedAt: "2026-07-29",
    readingMinutes: 6,
    component: Article04,
  },
  {
    kind: "blog",
    slug: "webpage-to-powerpoint",
    title: "How to convert a webpage into PowerPoint slides",
    description: "Translate webpage hierarchy into a presentation rather than a screenshot dump.",
    author: "Page2File editorial",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article05,
  },
  {
    kind: "blog",
    slug: "export-ai-chats-privately",
    title: "How to export AI chats to PDF privately",
    description: "Why the active browser tab is the right boundary for private chat export.",
    author: "Page2File editorial",
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article06,
  },
  {
    kind: "blog",
    slug: "html-to-pdf-safely",
    title: "How to convert HTML to PDF safely",
    description: "Treat supplied HTML as code and isolate it from scripts and networks.",
    author: "Page2File editorial",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-29",
    readingMinutes: 6,
    component: Article07,
  },
  {
    kind: "blog",
    slug: "multi-page-website-to-pdf",
    title: "How to convert a multi-page website to PDF",
    description: "Bound the crawl before collecting a website into one document.",
    author: "Page2File editorial",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-29",
    readingMinutes: 6,
    component: Article08,
  },
  {
    kind: "blog",
    slug: "why-print-to-pdf-breaks",
    title: "Why browser Print to PDF breaks complex pages",
    description: "Print CSS, lazy content and interactive layouts change what reaches paper.",
    author: "Page2File editorial",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article09,
  },
  {
    kind: "blog",
    slug: "sections-to-slides",
    title: "How webpage sections become presentation slides",
    description: "Use content hierarchy to create a coherent deck with reviewable boundaries.",
    author: "Page2File editorial",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-29",
    readingMinutes: 5,
    component: Article10,
  },
];

export const updateEntries: ReadonlyArray<ContentEntry> = [
  {
    kind: "update",
    slug: "preview-workspace",
    title: "A section-first preview workspace",
    description: "The prototype now makes page and slide boundaries visible before download.",
    author: "Page2File product",
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-29",
    readingMinutes: 2,
    component: UpdatePreview,
  },
  {
    kind: "update",
    slug: "local-chat-export",
    title: "Local AI chat export direction",
    description: "ChatGPT, Claude, Gemini and Grok receive dedicated local-export pages.",
    author: "Page2File product",
    publishedAt: "2026-07-18",
    updatedAt: "2026-07-29",
    readingMinutes: 2,
    component: UpdateChat,
  },
];

export type ChangelogEntry = {
  version: string;
  date: string;
  added: ReadonlyArray<string>;
  improved: ReadonlyArray<string>;
  fixed: ReadonlyArray<string>;
  relatedUpdate?: string;
};

export const changelogEntries: ReadonlyArray<ChangelogEntry> = [
  {
    version: "0.3.0-prototype",
    date: "2026-07-29",
    added: ["PDF and PowerPoint mock converters", "Section preview operations", "15 locale route shells"],
    improved: ["Consent-first analytics boundary", "Route and content validation"],
    fixed: ["Draft locales are excluded from sitemap"],
    relatedUpdate: "preview-workspace",
  },
  {
    version: "0.2.0-prototype",
    date: "2026-07-24",
    added: ["Extension instruction modes", "AI chat export landing cluster"],
    improved: ["Local-processing copy and platform disclaimers"],
    fixed: ["Welcome page indexing policy"],
    relatedUpdate: "local-chat-export",
  },
  {
    version: "0.1.0-prototype",
    date: "2026-07-18",
    added: ["Initial product route map", "Privacy-first no-account foundation"],
    improved: ["Visual and editable mode language"],
    fixed: [],
  },
];

const findEntry = (
  entries: ReadonlyArray<ContentEntry>,
  slug: string,
): ContentEntry | null => {
  const matchesSlug = (entry: ContentEntry): boolean => entry.slug === slug;
  return entries.find(matchesSlug) ?? null;
};

export const getBlogEntry = (slug: string): ContentEntry | null =>
  findEntry(blogEntries, slug);

export const getUpdateEntry = (slug: string): ContentEntry | null =>
  findEntry(updateEntries, slug);
