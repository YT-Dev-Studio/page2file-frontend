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

export const getExtensionActionLabel = (
  locale: Locale,
  liveLabel: string,
): string => {
  const link = getExtensionLink(locale);
  if (!link.placeholder) {
    return liveLabel;
  }
  return locale === "ru"
    ? "Каталог расширений Chrome"
    : "Browse Chrome extensions";
};
