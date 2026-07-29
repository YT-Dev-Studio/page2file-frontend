import type { Metadata } from "next";
import { absoluteUrl, indexingEnabled, legalReviewed, siteName } from "@/shared/config/site";
import { getLocaleDefinition, localeRegistry, type Locale } from "@/shared/i18n/locales";
import { routePath } from "@/shared/routes/routes";

export type MetadataInput = {
  locale: Locale;
  route: string;
  title: string;
  description: string;
  noindex?: boolean;
  legal?: boolean;
};

const getLanguageAlternates = (
  route: string,
): Record<string, string> => {
  const alternates: Record<string, string> = {
    "x-default": absoluteUrl("/"),
  };
  const addReviewedLocale = (locale: (typeof localeRegistry)[number]): void => {
    if (locale.reviewed && locale.indexable) {
      alternates[locale.htmlLang] = absoluteUrl(routePath(locale.code, route));
    }
  };
  localeRegistry.forEach(addReviewedLocale);
  return alternates;
};

export const buildMetadata = ({
  locale,
  route,
  title,
  description,
  noindex = false,
  legal = false,
}: MetadataInput): Metadata => {
  const definition = getLocaleDefinition(locale);
  const canIndex =
    indexingEnabled &&
    definition.indexable &&
    !noindex &&
    (!legal || legalReviewed);
  const pathname = routePath(locale, route);
  const canonical = absoluteUrl(pathname);
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(route),
    },
    robots: {
      index: canIndex,
      follow: canIndex,
      googleBot: {
        index: canIndex,
        follow: canIndex,
      },
    },
    openGraph: {
      type: "website",
      locale: definition.htmlLang,
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      images: [{ url: absoluteUrl("/demos/share-card.svg"), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/demos/share-card.svg")],
    },
  };
};
