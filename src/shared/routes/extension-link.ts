import { externalLinks } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";

export type ExtensionLink = {
  external: boolean;
  href: string;
};

export const getExtensionLink = (locale: Locale): ExtensionLink => {
  const href = externalLinks.chromeExtension;

  return href
    ? { external: true, href }
    : { external: false, href: `/${locale}/chrome-extension` };
};
