import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getExtensionSeoLanding } from "@/content/extension-seo-landings";
import { getLandingContent } from "@/content/landings";
import { getBlogEntry } from "@/content/content-registry";
import { isRealJobId } from "@/shared/api/backend-contract";
import type { Locale } from "@/shared/i18n/locales";
import {
  isExtensionSeoRoute,
  isStaticRoute,
  isStaticRouteAvailable,
} from "@/shared/routes/routes";
import { Container } from "@/shared/ui/site-shell";

type PublicPageResolverProps = {
  locale: Locale;
  segments: ReadonlyArray<string>;
};

export const resolvePublicPage = async ({
  locale,
  segments,
}: PublicPageResolverProps): Promise<ReactNode> => {
  const route = segments.join("/");

  if (!route) {
    const { HomePage } = await import("@/features/marketing/home-page");
    return <HomePage locale={locale} />;
  }

  if (route === "chrome-extension/how-to-use") {
    const { ExtensionGuide } = await import(
      "@/features/extension/extension-guide"
    );
    return <ExtensionGuide locale={locale} />;
  }

  if (route === "blog") {
    const { ContentIndexPage } = await import(
      "@/features/content/content-pages"
    );
    return <ContentIndexPage locale={locale} />;
  }

  if (route === "support") {
    const { SupportPage } = await import("@/features/support/support-page");
    return <SupportPage locale={locale} />;
  }

  if (segments[0] === "blog" && segments.length === 2) {
    const entry = getBlogEntry(locale, segments[1]);
    if (!entry) {
      notFound();
    }
    const { ContentArticlePage } = await import(
      "@/features/content/content-pages"
    );
    return <ContentArticlePage entry={entry} locale={locale} />;
  }

  if (segments[0] === "preview" && segments.length === 2) {
    if (!isRealJobId(segments[1])) {
      notFound();
    }
    const { RealPreviewWorkspace } = await import(
      "@/features/preview/real-preview-workspace"
    );
    return (
      <Container variant="workspace">
        <RealPreviewWorkspace jobId={segments[1]} locale={locale} />
      </Container>
    );
  }

  if (segments[0] === "download" && segments.length === 2) {
    if (!isRealJobId(segments[1])) {
      notFound();
    }
    const { RealDownloadPage } = await import(
      "@/features/preview/real-download-page"
    );
    return <RealDownloadPage jobId={segments[1]} locale={locale} />;
  }

  if (isStaticRoute(route)) {
    if (!isStaticRouteAvailable(locale, route)) {
      notFound();
    }
    if (isExtensionSeoRoute(route)) {
      const content = getExtensionSeoLanding(route);
      const { ExtensionSeoLanding } = await import(
        "@/features/marketing/extension-seo-landing"
      );
      return <ExtensionSeoLanding content={content} />;
    }
    const content = getLandingContent(locale, route);
    if (!content) {
      notFound();
    }
    const { LandingPage } = await import("@/features/marketing/landing-page");
    return <LandingPage content={content} locale={locale} />;
  }

  notFound();
};
