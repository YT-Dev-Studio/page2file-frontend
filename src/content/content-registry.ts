import type { ComponentType } from "react";
import type { Locale } from "@/shared/i18n/locales";

export type ContentKind = "blog" | "update";

export type ContentEntry = {
  kind: ContentKind;
  slug: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  component: ComponentType;
};

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  points: ReadonlyArray<string>;
};

// The publishing infrastructure intentionally accepts an empty corpus. New
// articles can be registered here once every indexed locale is ready.
export const blogEntries: ReadonlyArray<ContentEntry> = [];
export const updateEntries: ReadonlyArray<ContentEntry> = [];
export const changelogEntries: ReadonlyArray<ChangelogEntry> = [];

export const getBlogEntries = (locale: Locale): ReadonlyArray<ContentEntry> => {
  void locale;
  return blogEntries;
};

export const getUpdateEntries = (locale: Locale): ReadonlyArray<ContentEntry> => {
  void locale;
  return updateEntries;
};

export const getChangelogEntries = (
  locale: Locale,
): ReadonlyArray<ChangelogEntry> => {
  void locale;
  return changelogEntries;
};

export const getBlogEntry = (
  locale: Locale,
  slug: string,
): ContentEntry | null => {
  void locale;
  void slug;
  return null;
};

export const getUpdateEntry = (
  locale: Locale,
  slug: string,
): ContentEntry | null => {
  void locale;
  void slug;
  return null;
};
