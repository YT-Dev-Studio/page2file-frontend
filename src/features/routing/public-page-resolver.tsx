import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getBlogEntry, getUpdateEntry } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import { isRealJobId } from "@/shared/api/backend-contract";
import type { Locale } from "@/shared/i18n/locales";
import { isStaticRoute } from "@/shared/routes/routes";
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

  if (
    route === "convert-webpage-to-pdf" ||
    route === "convert-webpage-to-powerpoint"
  ) {
    const { ConverterPage } = await import("@/features/converter/converter-page");
    const format =
      route === "convert-webpage-to-powerpoint" ? "pptx" : "pdf";
    return <ConverterPage format={format} locale={locale} />;
  }

  if (route === "chrome-extension/how-to-use") {
    const { ExtensionGuide } = await import(
      "@/features/extension/extension-guide"
    );
    return <ExtensionGuide locale={locale} />;
  }

  if (route === "blog" || route === "updates") {
    const { ContentIndexPage } = await import(
      "@/features/content/content-pages"
    );
    const kind = route === "blog" ? "blog" : "updates";
    return <ContentIndexPage kind={kind} locale={locale} />;
  }

  if (
    (segments[0] === "blog" || segments[0] === "updates") &&
    segments.length === 2
  ) {
    const entry =
      segments[0] === "blog"
        ? getBlogEntry(locale, segments[1])
        : getUpdateEntry(locale, segments[1]);
    if (!entry) {
      notFound();
    }
    const { ContentArticlePage } = await import(
      "@/features/content/content-pages"
    );
    return <ContentArticlePage entry={entry} locale={locale} />;
  }

  if (route === "changelog") {
    const { ChangelogPage } = await import(
      "@/features/content/content-pages"
    );
    return <ChangelogPage locale={locale} />;
  }

  if (segments[0] === "preview" && segments.length === 2) {
    if (!isRealJobId(segments[1])) {
      notFound();
    }
    const { RealPreviewWorkspace } = await import(
      "@/features/preview/real-preview-workspace"
    );
    return (
      <Container>
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
    const content = getLandingContent(locale, route);
    if (!content) {
      notFound();
    }
    const { LandingPage } = await import("@/features/marketing/landing-page");
    return <LandingPage content={content} locale={locale} />;
  }

  notFound();
};
