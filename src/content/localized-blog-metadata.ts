import germanBlogMetadata from "../../content/de/blog-manifest.json";
import frenchBlogMetadata from "../../content/fr/blog-manifest.json";
import type { Locale } from "@/shared/i18n/locales";

export type LocalizedBlogMetadata = {
  author: string;
  description: string;
  imageAlt: string;
  title: string;
};

export const localizedBlogMetadata: Partial<
  Record<Locale, Record<string, LocalizedBlogMetadata>>
> = {
  de: germanBlogMetadata,
  fr: frenchBlogMetadata,
};
