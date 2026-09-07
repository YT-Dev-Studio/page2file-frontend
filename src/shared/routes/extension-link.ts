import { externalLinks } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";

export type ExtensionLink = {
  external: boolean;
  href: string;
  placeholder: boolean;
};

export type ExtensionLinkContext = {
  page: string;
  placement: "final" | "header" | "hero" | "promo";
};

const normalizeCampaignPart = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

const campaignPage = (locale: Locale, page: string): string => {
  const segments = page.split("/").filter(Boolean);
  const routeSegments = segments[0] === locale ? segments.slice(1) : segments;

  return normalizeCampaignPart(routeSegments.join("_")) || "home";
};

const buildExtensionCampaign = (
  locale: Locale,
  context: ExtensionLinkContext,
): string =>
  [locale, campaignPage(locale, context.page), context.placement].join("_");

const addExtensionAttribution = (
  href: string,
  locale: Locale,
  context: ExtensionLinkContext,
): string => {
  const url = new URL(href);
  url.searchParams.set("utm_source", "page2file.com");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set(
    "utm_campaign",
    buildExtensionCampaign(locale, context),
  );
  return url.toString();
};

export const getExtensionLink = (
  locale: Locale,
  context: ExtensionLinkContext,
): ExtensionLink => {
  const link = externalLinks.chromeExtension;

  return link.href
    ? {
        external: true,
        href: addExtensionAttribution(link.href, locale, context),
        placeholder: link.status === "placeholder",
      }
    : {
        external: false,
        href: `/${locale}/chrome-extension/how-to-use`,
        placeholder: false,
      };
};
