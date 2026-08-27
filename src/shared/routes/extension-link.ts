import { externalLinks } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";

export type ExtensionLink = {
  external: boolean;
  href: string;
  placeholder: boolean;
};

export const getExtensionLink = (locale: Locale): ExtensionLink => {
  const link = externalLinks.chromeExtension;

  return link.href
    ? {
        external: true,
        href: link.href,
        placeholder: link.status === "placeholder",
      }
    : {
        external: false,
        href: `/${locale}/chrome-extension/how-to-use`,
        placeholder: false,
      };
};
