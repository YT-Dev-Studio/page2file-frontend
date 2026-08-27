import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getExtensionSeoLanding } from "@/content/extension-seo-landings";
import { getLandingContent } from "@/content/landings";
import { getBlogEntries, getBlogEntry } from "@/content/content-registry";
import { getContentCopy } from "@/features/content/content-copy";
import { getSupportCopy } from "@/features/support/support-copy";
import { resolvePublicPage } from "@/features/routing/public-page-resolver";
import { isLocale, localeRegistry, type Locale } from "@/shared/i18n/locales";
import { buildMetadata } from "@/shared/seo/metadata";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import {
  isExtensionSeoRoute,
  isStaticRoute,
  isStaticRouteAvailable,
  staticRoutesForLocale,
} from "@/shared/routes/routes";

type RouteParams = {
  locale: string;
  slug?: ReadonlyArray<string>;
};

type PageProps = {
  params: Promise<RouteParams>;
};

export const generateStaticParams = (): Array<RouteParams> => {
  const params: Array<RouteParams> = [];
  const addLocale = (
    definition: (typeof localeRegistry)[number],
  ): void => {
    const addRoute = (route: string): void => {
      params.push({
        locale: definition.code,
        slug: route ? route.split("/") : [],
      });
    };
    staticRoutesForLocale(definition.code).forEach(addRoute);
    addRoute("blog");
    getBlogEntries(definition.code).forEach((entry): void => {
      addRoute(`blog/${entry.slug}`);
    });
  };
  localeRegistry.forEach(addLocale);
  return params;
};

const getRouteMetadata = (
  locale: Locale,
  segments: ReadonlyArray<string>,
): Metadata => {
  const route = segments.join("/");
  if (!route) {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "home") });
  }
  if (route === "chrome-extension/how-to-use") {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "guide") });
  }
  if (route === "blog") {
    const copy = getContentCopy(locale).blog;
    return buildMetadata({
      locale,
      route,
      title: copy.title,
      description: copy.description,
    });
  }
  if (route === "support") {
    const copy = getSupportCopy(locale);
    return buildMetadata({
      locale,
      route,
      title: copy.metadataTitle,
      description: copy.metadataDescription,
    });
  }
  if (segments[0] === "blog" && segments.length === 2) {
    const entry = getBlogEntry(locale, segments[1]);
    if (entry) {
      return buildMetadata({
        locale,
        route,
        title: entry.title,
        description: entry.description,
        kind: "article",
        publishedAt: entry.publishedAt,
        updatedAt: entry.updatedAt,
        author: entry.author,
        image: entry.image,
        imageAlt: entry.imageAlt,
      });
    }
  }
  if (segments[0] === "preview" || segments[0] === "download") {
    const key = segments[0] === "preview" ? "preview" : "download";
    return buildMetadata({
      locale,
      route,
      ...getSeoCopy(locale, key),
      noindex: true,
    });
  }
  if (isStaticRoute(route)) {
    if (!isStaticRouteAvailable(locale, route)) {
      return buildMetadata({
        locale,
        route,
        ...getSeoCopy(locale, "notFound"),
        noindex: true,
      });
    }
    if (isExtensionSeoRoute(route)) {
      const content = getExtensionSeoLanding(route);
      return buildMetadata({
        locale,
        route,
        title: content.title,
        description: content.description,
        localized: false,
      });
    }
    const content = getLandingContent(locale, route);
    if (content) {
      return buildMetadata({
        locale,
        route,
        title: content.title,
        description: content.description,
        noindex: content.noindex,
        legal: content.legal,
      });
    }
  }
  return buildMetadata({
    locale,
    route,
    ...getSeoCopy(locale, "notFound"),
    noindex: true,
  });
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return getRouteMetadata(locale, slug);
};

export default async function LocalizedPage({
  params,
}: PageProps): Promise<ReactNode> {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return resolvePublicPage({ locale, segments: slug });
}
