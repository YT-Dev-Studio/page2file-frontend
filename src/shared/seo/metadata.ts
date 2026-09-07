import type { Metadata } from "next";
import { absoluteUrl, indexingEnabled, siteName } from "@/shared/config/site";
import {
  getLocaleDefinition,
  localeRegistry,
  type Locale,
} from "@/shared/i18n/locales";
import { routePath } from "@/shared/routes/routes";

export type MetadataInput = {
  locale: Locale;
  route: string;
  title: string;
  description: string;
  noindex?: boolean;
  kind?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  availableLocales?: ReadonlyArray<Locale>;
  image?: string;
  imageAlt?: string;
};

const getLanguageAlternates = (
  route: string,
  availableLocales: ReadonlyArray<Locale>,
): Record<string, string> => {
  const alternates: Record<string, string> = {
    "x-default": absoluteUrl(routePath("en", route)),
  };
  const addReviewedLocale = (locale: (typeof localeRegistry)[number]): void => {
    if (
      locale.reviewed &&
      locale.indexable &&
      availableLocales.includes(locale.code)
    ) {
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
  kind = "website",
  publishedAt,
  updatedAt,
  author,
  availableLocales = localeRegistry.map((candidate) => candidate.code),
  image = "/og/page2file-share.png",
  imageAlt,
}: MetadataInput): Metadata => {
  const definition = getLocaleDefinition(locale);
  const routeIsIndexable = definition.indexable && !noindex;
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
        candidate.code !== locale &&
        availableLocales.includes(candidate.code),
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
        url: absoluteUrl(image),
        width: 1200,
        height: image.startsWith("/blog/mocks/") ? 675 : 630,
        alt: imageAlt ?? `${title} — ${siteName}`,
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
      languages: canIndex
        ? getLanguageAlternates(route, availableLocales)
        : undefined,
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
      images: [absoluteUrl(image)],
    },
  };
};
