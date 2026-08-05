import { externalLinks } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";

export type ExtensionLink = {
  external: boolean;
  href: string;
  placeholder: boolean;
};

const extensionCatalogLabels: Record<Locale, string> = {
  en: "Browse Chrome extensions",
  ru: "Каталог расширений Chrome",
  de: "Chrome-Erweiterungen durchsuchen",
  fr: "Parcourir les extensions Chrome",
  es: "Explorar extensiones de Chrome",
  nl: "Chrome-extensies bekijken",
  pt: "Explorar extensões do Chrome",
  it: "Sfoglia le estensioni Chrome",
  pl: "Przeglądaj rozszerzenia Chrome",
  cs: "Procházet rozšíření Chrome",
  sv: "Bläddra bland Chrome-tillägg",
  no: "Bla gjennom Chrome-utvidelser",
  da: "Gennemse Chrome-udvidelser",
  fi: "Selaa Chrome-laajennuksia",
  ro: "Răsfoiți extensiile Chrome",
  hu: "Chrome-bővítmények böngészése",
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
  return extensionCatalogLabels[locale];
};
