import type { MetadataRoute } from "next";
import { blogEntries, updateEntries } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import { absoluteUrl, indexingEnabled, legalReviewed } from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import { routePath, staticRoutes, type StaticRoute } from "@/shared/routes/routes";

const isIndexableRoute = (route: StaticRoute): boolean => {
  const content = getLandingContent(route);
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
  const addLocale = (
    locale: (typeof localeRegistry)[number],
  ): void => {
    const addRoute = (route: string): void => {
      entries.push({
        url: absoluteUrl(routePath(locale.code, route)),
        lastModified: new Date("2026-07-29"),
        changeFrequency: route.startsWith("blog/") ? "monthly" : "weekly",
        priority: route === "" ? 1 : 0.7,
      });
    };
    allRoutes.forEach(addRoute);
  };
  indexableLocales.forEach(addLocale);
  return entries;
}
