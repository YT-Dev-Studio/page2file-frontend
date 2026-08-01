import Link from "next/link";
import type { ReactNode } from "react";
import type {
  LandingContent,
  ContentSection,
  RelatedRoute,
} from "@/content/landings";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import { getPublicPageFamily } from "@/shared/routes/routes";
import { ExternalCta } from "@/shared/ui/external-cta";
import {
  PublicHero,
  PublicPage,
  PublicSection,
} from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import uiStyles from "@/shared/ui/ui.module.css";
import { getMarketingCopy } from "./marketing-copy";
import styles from "./marketing.module.css";
import { WorkflowLanding } from "./workflow-landing";

const ContentBlock = ({ section }: { section: ContentSection }): ReactNode => {
  const pointItem = (point: string): ReactNode => <li key={point}>{point}</li>;
  return (
    <article className={styles.contentBlock}>
      <h2>{section.heading}</h2>
      <p>{section.body}</p>
      {section.points ? <ul>{section.points.map(pointItem)}</ul> : null}
    </article>
  );
};

export const LandingPage = ({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}): ReactNode => {
  const messages = getMessages(locale);
  const { landing } = getMarketingCopy(locale);
  const family = getPublicPageFamily(content.route);
  if (family === "gpt-workflow" || family === "chat-export") {
    return (
      <WorkflowLanding content={content} family={family} locale={locale} />
    );
  }
  const sectionBlock = (section: ContentSection): ReactNode => (
    <ContentBlock key={section.heading} section={section} />
  );
  const internalHref = content.primaryHref
    ? `/${locale}${content.primaryHref}`
    : null;
  const relatedRoutes = content.relatedRoutes?.filter(
    (relatedRoute: RelatedRoute): boolean =>
      relatedRoute.route !== content.route,
  );
  const relatedLink = (relatedRoute: RelatedRoute): ReactNode => (
    <Link
      href={`/${locale}/${relatedRoute.route}`}
      key={relatedRoute.route}
    >
      {relatedRoute.label}
    </Link>
  );

  return (
    <PublicPage
      className={styles.main}
      family={family}
    >
      <section className={styles.hero}>
        <Container>
          {content.legal ? (
            <div className={styles.draftLegal}>
              {landing.legalDraft}
            </div>
          ) : null}
          <PublicHero
            eyebrow={content.eyebrow}
            lead={content.lead}
            title={content.title}
          >
            <div className={styles.actions}>
              {content.externalLinkKey && content.primaryLabel ? (
                <ExternalCta
                  comingSoonLabel={messages.actions.comingSoon}
                  externalLinkKey={content.externalLinkKey}
                  label={content.primaryLabel}
                />
              ) : null}
              {internalHref && content.primaryLabel ? (
                <Link className={uiStyles.button} href={internalHref}>
                  {content.primaryLabel}
                </Link>
              ) : null}
              {!content.legal ? (
                <Link
                  className={uiStyles.secondaryButton}
                  href={`/${locale}/convert-webpage-to-pdf`}
                >
                  {landing.tryPrototype}
                </Link>
              ) : null}
            </div>
          </PublicHero>
        </Container>
      </section>
      <PublicSection className={styles.section} tone="subtle">
        <Container>
          <div className={styles.contentGrid}>{content.sections.map(sectionBlock)}</div>
          {relatedRoutes && relatedRoutes.length > 0 ? (
            <nav aria-label={landing.relatedPages} className={styles.relatedLinks}>
              <h2>{landing.relatedPages}</h2>
              <div>{relatedRoutes.map(relatedLink)}</div>
            </nav>
          ) : null}
        </Container>
      </PublicSection>
    </PublicPage>
  );
};
