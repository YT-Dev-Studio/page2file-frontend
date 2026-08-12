import type { Locale } from "@/shared/i18n/locales";

export type LocalizedBlogMetadata = {
  title: string;
  description: string;
  imageAlt: string;
};

export const localizedBlogMetadata: Record<
  Exclude<Locale, "en" | "ru">,
  Record<string, LocalizedBlogMetadata>
> = {
  de: {}, fr: {}, es: {}, nl: {}, pt: {}, it: {}, pl: {}, cs: {},
  sv: {}, no: {}, da: {}, fi: {}, ro: {}, hu: {},
};
