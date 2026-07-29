import Link from "next/link";
import type { ReactNode } from "react";
import type { LandingContent, ContentSection } from "@/content/landings";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import { ExternalCta } from "@/shared/ui/external-cta";
import { Container } from "@/shared/ui/site-shell";
import uiStyles from "@/shared/ui/ui.module.css";
import styles from "./marketing.module.css";

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
  const sectionBlock = (section: ContentSection): ReactNode => (
    <ContentBlock key={section.heading} section={section} />
  );
  const internalHref = content.primaryHref
    ? `/${locale}${content.primaryHref}`
    : null;

  return (
    <main className={styles.main} id="main-content">
      <section className={styles.hero}>
        <Container>
          {content.legal ? (
            <div className={styles.draftLegal}>
              Draft content — legal owner, jurisdiction and processor review are required before indexing.
            </div>
          ) : null}
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 className={styles.landingTitle}>{content.title}</h1>
          <p className={styles.lead}>{content.lead}</p>
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
              <Link className={uiStyles.secondaryButton} href={`/${locale}/convert-webpage-to-pdf`}>
                Try the web prototype
              </Link>
            ) : null}
          </div>
        </Container>
      </section>
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.contentGrid}>{content.sections.map(sectionBlock)}</div>
        </Container>
      </section>
    </main>
  );
};
