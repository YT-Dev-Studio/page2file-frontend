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
  kind?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
};

const getLanguageAlternates = (
  route: string,
): Record<string, string> => {
  const alternates: Record<string, string> = {
    "x-default": absoluteUrl(routePath("en", route)),
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
  kind = "website",
  publishedAt,
  updatedAt,
  author,
}: MetadataInput): Metadata => {
  const definition = getLocaleDefinition(locale);
  const routeIsIndexable =
    definition.indexable &&
    !noindex &&
    (!legal || legalReviewed);
  const canIndex = indexingEnabled && routeIsIndexable;
  const pathname = routePath(locale, route);
  const canonical = absoluteUrl(pathname);
  const titleWithBrand = `${title} | ${siteName}`;
  const fullTitle = titleWithBrand.length <= 65 ? titleWithBrand : title;
  const alternateLocales = localeRegistry
    .filter(
      (candidate): boolean =>
        candidate.reviewed &&
        candidate.indexable &&
        candidate.code !== locale,
    )
    .map((candidate): string => candidate.openGraphLocale);
  const commonOpenGraph = {
    locale: definition.openGraphLocale,
    alternateLocale: canIndex ? alternateLocales : undefined,
    title: fullTitle,
    description,
    url: canonical,
    siteName,
    images: [
      {
        url: absoluteUrl("/og/page2file-share.png"),
        width: 1200,
        height: 630,
        alt: `${title} — ${siteName}`,
      },
    ],
  };
  const openGraph: Metadata["openGraph"] =
    kind === "article"
      ? {
          ...commonOpenGraph,
          type: "article",
          publishedTime: publishedAt,
          modifiedTime: updatedAt,
          authors: author ? [author] : undefined,
        }
      : {
          ...commonOpenGraph,
          type: "website",
        };

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: canIndex ? getLanguageAlternates(route) : undefined,
    },
    robots: {
      index: canIndex,
      follow: canIndex,
      googleBot: {
        index: canIndex,
        follow: canIndex,
      },
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/og/page2file-share.png")],
    },
  };
};
