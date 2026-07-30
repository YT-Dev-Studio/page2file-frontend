import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getBlogEntry, getUpdateEntry } from "@/content/content-registry";
import { getLandingContent } from "@/content/landings";
import { ConverterPage } from "@/features/converter/converter-page";
import { parseMockJob } from "@/features/converter/mock-adapter";
import {
  ChangelogPage,
  ContentArticlePage,
  ContentIndexPage,
} from "@/features/content/content-pages";
import { ExtensionGuide } from "@/features/extension/extension-guide";
import { HomePage } from "@/features/marketing/home-page";
import { LandingPage } from "@/features/marketing/landing-page";
import { DownloadPage } from "@/features/preview/download-page";
import { PreviewWorkspace } from "@/features/preview/preview-workspace";
import type { Locale } from "@/shared/i18n/locales";
import { isStaticRoute } from "@/shared/routes/routes";
import { Container } from "@/shared/ui/site-shell";

type PageRouterProps = {
  locale: Locale;
  segments: ReadonlyArray<string>;
  mode?: string;
};

export const PageRouter = ({
  locale,
  segments,
  mode,
}: PageRouterProps): ReactNode => {
  const route = segments.join("/");

  if (!route) {
    return <HomePage locale={locale} />;
  }
  if (route === "convert-webpage-to-pdf") {
    return <ConverterPage format="pdf" locale={locale} />;
  }
  if (route === "convert-webpage-to-powerpoint") {
    return <ConverterPage format="pptx" locale={locale} />;
  }
  if (route === "chrome-extension/how-to-use") {
    return <ExtensionGuide locale={locale} />;
  }
  if (route === "blog") {
    return <ContentIndexPage kind="blog" locale={locale} />;
  }
  if (segments[0] === "blog" && segments.length === 2) {
    const entry = getBlogEntry(locale, segments[1]);
    return entry ? <ContentArticlePage entry={entry} locale={locale} /> : notFound();
  }
  if (route === "updates") {
    return <ContentIndexPage kind="updates" locale={locale} />;
  }
  if (segments[0] === "updates" && segments.length === 2) {
    const entry = getUpdateEntry(locale, segments[1]);
    return entry ? <ContentArticlePage entry={entry} locale={locale} /> : notFound();
  }
  if (route === "changelog") {
    return <ChangelogPage locale={locale} />;
  }
  if (segments[0] === "preview" && segments.length === 2) {
    const job = parseMockJob(segments[1], mode);
    return job ? (
      <Container>
        <PreviewWorkspace job={job} locale={locale} />
      </Container>
    ) : notFound();
  }
  if (segments[0] === "download" && segments.length === 2) {
    const job = parseMockJob(segments[1], mode);
    return job ? <DownloadPage job={job} locale={locale} /> : notFound();
  }
  if (isStaticRoute(route)) {
    const content = getLandingContent(locale, route);
    return content ? <LandingPage content={content} locale={locale} /> : notFound();
  }
  return notFound();
};
