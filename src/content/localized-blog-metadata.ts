import germanBlogMetadata from "../../content/de/blog-manifest.json";
import frenchBlogMetadata from "../../content/fr/blog-manifest.json";
import spanishBlogMetadata from "../../content/es/blog-manifest.json";
import dutchBlogMetadata from "../../content/nl/blog-manifest.json";
import portugueseBlogMetadata from "../../content/pt/blog-manifest.json";
import italianBlogMetadata from "../../content/it/blog-manifest.json";
import polishBlogMetadata from "../../content/pl/blog-manifest.json";
import czechBlogMetadata from "../../content/cs/blog-manifest.json";
import swedishBlogMetadata from "../../content/sv/blog-manifest.json";
import norwegianBlogMetadata from "../../content/no/blog-manifest.json";
import danishBlogMetadata from "../../content/da/blog-manifest.json";
import finnishBlogMetadata from "../../content/fi/blog-manifest.json";
import romanianBlogMetadata from "../../content/ro/blog-manifest.json";
import hungarianBlogMetadata from "../../content/hu/blog-manifest.json";
import type { Locale } from "@/shared/i18n/locales";

export type LocalizedBlogMetadata = {
  author: string;
  description: string;
  imageAlt: string;
  title: string;
};

export const localizedBlogMetadata: Record<
  Exclude<Locale, "en" | "ru">,
  Record<string, LocalizedBlogMetadata>
> = {
  de: germanBlogMetadata,
  fr: frenchBlogMetadata,
  es: spanishBlogMetadata,
  nl: dutchBlogMetadata,
  pt: portugueseBlogMetadata,
  it: italianBlogMetadata,
  pl: polishBlogMetadata,
  cs: czechBlogMetadata,
  sv: swedishBlogMetadata,
  no: norwegianBlogMetadata,
  da: danishBlogMetadata,
  fi: finnishBlogMetadata,
  ro: romanianBlogMetadata,
  hu: hungarianBlogMetadata,
};
