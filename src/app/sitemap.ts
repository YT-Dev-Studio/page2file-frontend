import type { MetadataRoute } from "next";
import { getLandingContent } from "@/content/landings";
import {
  absoluteUrl,
  indexingEnabled,
  legalReviewed,
} from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import {
  isExtensionSeoRoute,
  isStaticRouteAvailable,
  routePath,
  staticRoutes,
  type StaticRoute,
} from "@/shared/routes/routes";

const isIndexableRoute = (route: StaticRoute): boolean => {
  if (isExtensionSeoRoute(route)) return true;
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
  const indexableLocales = localeRegistry.filter(
    (locale): boolean => locale.indexable && locale.reviewed,
  );
  const entries: MetadataRoute.Sitemap = [];
  const getAlternates = (route: StaticRoute): Record<string, string> => {
    const languages: Record<string, string> = {
      "x-default": absoluteUrl(routePath("en", route)),
    };
    const addLanguage = (
      locale: (typeof localeRegistry)[number],
    ): void => {
      languages[locale.htmlLang] = absoluteUrl(routePath(locale.code, route));
    };
    indexableLocales
      .filter((locale): boolean => isStaticRouteAvailable(locale.code, route))
      .forEach(addLanguage);
    return languages;
  };
  const addLocale = (
    locale: (typeof localeRegistry)[number],
  ): void => {
    const addRoute = (route: StaticRoute): void => {
      entries.push({
        url: absoluteUrl(routePath(locale.code, route)),
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: getAlternates(route),
        },
      });
    };
    routes
      .filter((route): boolean => isStaticRouteAvailable(locale.code, route))
      .forEach(addRoute);
  };
  indexableLocales.forEach(addLocale);
  return entries;
}
