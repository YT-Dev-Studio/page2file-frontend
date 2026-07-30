import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { blogEntries, getBlogEntry, getUpdateEntry, updateEntries } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import { PageRouter } from "@/features/routing/page-router";
import { isLocale, localeRegistry, type Locale } from "@/shared/i18n/locales";
import { buildMetadata } from "@/shared/seo/metadata";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import { isStaticRoute, staticRoutes } from "@/shared/routes/routes";

type RouteParams = {
  locale: string;
  slug?: ReadonlyArray<string>;
};

type PageProps = {
  params: Promise<RouteParams>;
  searchParams: Promise<Record<string, string | ReadonlyArray<string> | undefined>>;
};

const staticContentRoutes: ReadonlyArray<string> = [
  ...staticRoutes,
  ...blogEntries.map((entry): string => `blog/${entry.slug}`),
  ...updateEntries.map((entry): string => `updates/${entry.slug}`),
];

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
    staticContentRoutes.forEach(addRoute);
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
  if (route === "convert-webpage-to-pdf") {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "pdf") });
  }
  if (route === "convert-webpage-to-powerpoint") {
    return buildMetadata({
      locale,
      route,
      ...getSeoCopy(locale, "powerpoint"),
    });
  }
  if (route === "chrome-extension/how-to-use") {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "guide") });
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
  if (segments[0] === "blog" && segments.length === 2) {
    const entry = getBlogEntry(locale, segments[1]);
    return entry
      ? buildMetadata({
          locale,
          route,
          title: entry.title,
          description: entry.description,
          kind: "article",
          publishedAt: entry.publishedAt,
          updatedAt: entry.updatedAt,
          author: entry.author,
        })
      : buildMetadata({
          locale,
          route,
          ...getSeoCopy(locale, "notFound"),
          noindex: true,
        });
  }
  if (segments[0] === "updates" && segments.length === 2) {
    const entry = getUpdateEntry(locale, segments[1]);
    return entry
      ? buildMetadata({
          locale,
          route,
          title: entry.title,
          description: entry.description,
          kind: "article",
          publishedAt: entry.publishedAt,
          updatedAt: entry.updatedAt,
          author: entry.author,
        })
      : buildMetadata({
          locale,
          route,
          ...getSeoCopy(locale, "notFound"),
          noindex: true,
        });
  }
  if (route === "blog") {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "blog") });
  }
  if (route === "updates") {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "updates") });
  }
  if (route === "changelog") {
    return buildMetadata({ locale, route, ...getSeoCopy(locale, "changelog") });
  }
  if (isStaticRoute(route)) {
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
  searchParams,
}: PageProps): Promise<ReactNode> {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const query = await searchParams;
  const rawMode = query.mode;
  const mode = typeof rawMode === "string" ? rawMode : undefined;
  return <PageRouter locale={locale} mode={mode} segments={slug} />;
}
