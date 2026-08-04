import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import type { LandingContent } from "@/content/landings";
import type { Locale } from "@/shared/i18n/locales";
import { getPublicPageFamily } from "@/shared/routes/routes";
import { LegalPage } from "./legal-page";
import { WorkflowLanding } from "./workflow-landing";

export const LandingPage = ({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}): ReactNode => {
  const family = getPublicPageFamily(content.route);
  if (family === "gpt-workflow" || family === "chat-export") {
    return (
      <WorkflowLanding content={content} family={family} locale={locale} />
    );
  }
  if (family === "legal") {
    return <LegalPage content={content} locale={locale} />;
  }
  notFound();
};
