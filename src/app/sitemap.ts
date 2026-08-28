import type { MetadataRoute } from "next";
import { getBlogEntries } from "@/content/content-registry";
import { absoluteUrl, indexingEnabled } from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import {
  isStaticRouteAvailable,
  routePath,
  staticRoutes,
  type StaticRoute,
} from "@/shared/routes/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) {
    return [];
  }
  const routes = staticRoutes;
  const indexableLocales = localeRegistry.filter(
    (locale): boolean => locale.indexable && locale.reviewed,
  );
  const entries: MetadataRoute.Sitemap = [];
  const addLocale = (
    locale: (typeof localeRegistry)[number],
  ): void => {
    const addRoute = (route: StaticRoute): void => {
      entries.push({
        url: absoluteUrl(routePath(locale.code, route)),
        priority: route === "" ? 1 : 0.7,
      });
    };
    routes
      .filter((route): boolean => isStaticRouteAvailable(locale.code, route))
      .forEach(addRoute);
  };
  indexableLocales.forEach(addLocale);
  const blogSlugs = getBlogEntries("en").map((entry) => entry.slug);
  const blogRoutes = ["blog", ...blogSlugs.map((slug) => `blog/${slug}`)];
  for (const locale of indexableLocales) {
    for (const route of blogRoutes) {
      const article = route === "blog"
        ? undefined
        : getBlogEntries(locale.code).find(
            (entry) => `blog/${entry.slug}` === route,
          );
      entries.push({
        url: absoluteUrl(routePath(locale.code, route)),
        lastModified: article?.updatedAt,
        priority: route === "blog" ? 0.7 : 0.6,
      });
    }
  }
  return entries;
}
