import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getBlogEntry, getUpdateEntry } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import { isRealJobId } from "@/shared/api/backend-contract";
import { conversionAdapter } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { isStaticRoute } from "@/shared/routes/routes";
import { Container } from "@/shared/ui/site-shell";

type PublicPageResolverProps = {
  locale: Locale;
  segments: ReadonlyArray<string>;
  mode?: string;
};

export const resolvePublicPage = async ({
  locale,
  segments,
  mode,
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
    if (isRealJobId(segments[1])) {
      const { RealPreviewWorkspace } = await import(
        "@/features/preview/real-preview-workspace"
      );
      return (
        <Container>
          <RealPreviewWorkspace jobId={segments[1]} locale={locale} />
        </Container>
      );
    }
    const { parseMockJob } = await import("@/features/converter/mock-adapter");
    const job =
      conversionAdapter === "mock" ? parseMockJob(segments[1], mode) : null;
    if (!job) {
      notFound();
    }
    const { PreviewWorkspace } = await import(
      "@/features/preview/preview-workspace"
    );
    return (
      <Container>
        <PreviewWorkspace job={job} locale={locale} />
      </Container>
    );
  }

  if (segments[0] === "download" && segments.length === 2) {
    if (isRealJobId(segments[1])) {
      const { RealDownloadPage } = await import(
        "@/features/preview/real-download-page"
      );
      return <RealDownloadPage jobId={segments[1]} locale={locale} />;
    }
    const { parseMockJob } = await import("@/features/converter/mock-adapter");
    const job =
      conversionAdapter === "mock" ? parseMockJob(segments[1], mode) : null;
    if (!job) {
      notFound();
    }
    const { DownloadPage } = await import("@/features/preview/download-page");
    return <DownloadPage job={job} locale={locale} />;
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
