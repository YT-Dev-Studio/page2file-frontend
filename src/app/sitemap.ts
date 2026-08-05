import type { MetadataRoute } from "next";
import { blogEntries, updateEntries } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import {
  absoluteUrl,
  indexingEnabled,
  legalReviewed,
} from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import {
  routePath,
  staticRoutes,
  type StaticRoute,
} from "@/shared/routes/routes";

const isIndexableRoute = (route: StaticRoute): boolean => {
  const content = getLandingContent("en", route);
  if (content?.noindex) return false;
  if (content?.legal && !legalReviewed) return false;
  return true;
};

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) {
    return [];
  }
  const routes = staticRoutes.filter(isIndexableRoute);
  const articleRoutes = blogEntries.map(
    (entry): string => `blog/${entry.slug}`,
  );
  const updateRoutes = updateEntries.map(
    (entry): string => `updates/${entry.slug}`,
  );
  const allRoutes: ReadonlyArray<string> = [
    ...routes,
    ...articleRoutes,
    ...updateRoutes,
  ];
  const indexableLocales = localeRegistry.filter(
    (locale): boolean => locale.indexable && locale.reviewed,
  );
  const entries: MetadataRoute.Sitemap = [];
  const getAlternates = (route: string): Record<string, string> => {
    const languages: Record<string, string> = {
      "x-default": absoluteUrl(routePath("en", route)),
    };
    const addLanguage = (
      locale: (typeof localeRegistry)[number],
    ): void => {
      languages[locale.htmlLang] = absoluteUrl(routePath(locale.code, route));
    };
    indexableLocales.forEach(addLanguage);
    return languages;
  };
  const getLastModified = (route: string): Date | undefined => {
    if (route.startsWith("blog/")) {
      const slug = route.slice("blog/".length);
      const entry = blogEntries.find(
        (candidate): boolean => candidate.slug === slug,
      );
      return entry?.updatedAt
        ? new Date(`${entry.updatedAt}T00:00:00Z`)
        : undefined;
    }
    if (route.startsWith("updates/")) {
      const slug = route.slice("updates/".length);
      const entry = updateEntries.find(
        (candidate): boolean => candidate.slug === slug,
      );
      return entry?.updatedAt
        ? new Date(`${entry.updatedAt}T00:00:00Z`)
        : undefined;
    }
    return undefined;
  };
  const addLocale = (
    locale: (typeof localeRegistry)[number],
  ): void => {
    const addRoute = (route: string): void => {
      entries.push({
        url: absoluteUrl(routePath(locale.code, route)),
        lastModified: getLastModified(route),
        changeFrequency: route.startsWith("blog/") ? "monthly" : undefined,
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: getAlternates(route),
        },
      });
    };
    allRoutes.forEach(addRoute);
  };
  indexableLocales.forEach(addLocale);
  return entries;
}
