import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { blogEntries, getBlogEntry, getUpdateEntry, updateEntries } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import { PageRouter } from "@/features/routing/page-router";
import { isLocale, localeRegistry, type Locale } from "@/shared/i18n/locales";
import { buildMetadata } from "@/shared/seo/metadata";
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
    return buildMetadata({
      locale,
      route,
      title: "Webpage to PDF or PowerPoint",
      description: "Preview public webpage sections before exporting a PDF or PowerPoint sample.",
    });
  }
  if (route === "convert-webpage-to-pdf") {
    return buildMetadata({
      locale,
      route,
      title: "Convert a webpage to PDF",
      description: "Choose visual or editable PDF output and review page sections before download.",
    });
  }
  if (route === "convert-webpage-to-powerpoint") {
    return buildMetadata({
      locale,
      route,
      title: "Convert a webpage to PowerPoint",
      description: "Turn webpage sections into previewable visual or editable 16:9 slides.",
    });
  }
  if (route === "chrome-extension/how-to-use") {
    return buildMetadata({
      locale,
      route,
      title: "How to use the Page2File Chrome extension",
      description:
        "Follow the step-by-step guide or video transcript to export webpages and AI chats to PDF or PowerPoint.",
    });
  }
  if (segments[0] === "preview" || segments[0] === "download") {
    return buildMetadata({
      locale,
      route: segments[0] === "preview" ? "convert-webpage-to-pdf" : "",
      title: segments[0] === "preview" ? "Private preview" : "Sample download",
      description: "Temporary prototype state.",
      noindex: true,
    });
  }
  if (segments[0] === "blog" && segments.length === 2) {
    const entry = getBlogEntry(segments[1]);
    return entry
      ? buildMetadata({ locale, route, title: entry.title, description: entry.description })
      : buildMetadata({ locale, route: "blog", title: "Article not found", description: "Unknown article.", noindex: true });
  }
  if (segments[0] === "updates" && segments.length === 2) {
    const entry = getUpdateEntry(segments[1]);
    return entry
      ? buildMetadata({ locale, route, title: entry.title, description: entry.description })
      : buildMetadata({ locale, route: "updates", title: "Update not found", description: "Unknown update.", noindex: true });
  }
  if (route === "blog") {
    return buildMetadata({ locale, route, title: "Webpage export guides", description: "Ten practical guides to PDF, PowerPoint, links, HTML and private chat export." });
  }
  if (route === "updates") {
    return buildMetadata({ locale, route, title: "Product updates", description: "Human-readable Page2File prototype updates." });
  }
  if (route === "changelog") {
    return buildMetadata({ locale, route, title: "Changelog", description: "Versioned Page2File prototype changes." });
  }
  if (isStaticRoute(route)) {
    const content = getLandingContent(route);
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
    route: "",
    title: "Page not found",
    description: "The requested Page2File page does not exist.",
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
