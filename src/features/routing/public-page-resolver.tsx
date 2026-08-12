import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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

  if (route === "chrome-extension/how-to-use") {
    const { ExtensionGuide } = await import(
      "@/features/extension/extension-guide"
    );
    return <ExtensionGuide locale={locale} />;
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
