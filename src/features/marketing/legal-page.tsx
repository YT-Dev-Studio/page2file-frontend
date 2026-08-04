import type { ReactNode } from "react";
import type { ContentSection, LandingContent } from "@/content/landings";
import { legalProfile } from "@/shared/config/site";
import type { Locale, LocalizedPublished } from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";
import { PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import styles from "./legal-page.module.css";

type LegalPageProps = {
  content: LandingContent;
  locale: Locale;
};

type LegalPageCopy = {
  updatedAt: string;
};

type LegalSectionProps = {
  index: number;
  locale: Locale;
  section: ContentSection;
};

const legalPageCopy: LocalizedPublished<LegalPageCopy> = {
  en: {
    updatedAt: "Updated 4 August 2026",
  },
  ru: {
    updatedAt: "Обновлено 4 августа 2026 года",
  },
};

const interpolateLegalText = (value: string, locale: Locale): string =>
  value
    .replaceAll("{{entityName}}", legalProfile.entityName)
    .replaceAll("{{address}}", legalProfile.addresses[locale])
    .replaceAll("{{jurisdiction}}", legalProfile.jurisdictions[locale])
    .replaceAll("{{contactEmail}}", legalProfile.contactEmail)
    .replaceAll("{{processors}}", legalProfile.processors.join(", "));

const LegalSection = ({
  index,
  locale,
  section,
}: LegalSectionProps): ReactNode => {
  return (
    <section className={styles.section}>
      <h2
        className={styles.sectionTitle}
        id={section.id ?? `section-${index + 1}`}
      >
        {section.heading}
      </h2>
      <p className={styles.sectionBody}>
        {interpolateLegalText(section.body, locale)}
      </p>
      {section.points ? (
        <ul className={styles.points}>
          {section.points.map((point: string): ReactNode => (
            <li key={point}>{interpolateLegalText(point, locale)}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export const LegalPage = ({
  content,
  locale,
}: LegalPageProps): ReactNode => {
  const copy = legalPageCopy[isPublishedLocale(locale) ? locale : "en"];

  return (
    <PublicPage className={styles.page} family="legal">
      <Container>
        <article className={styles.document}>
          <header className={styles.header}>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.updatedAt}>{copy.updatedAt}</p>
            <p className={styles.lead}>{content.lead}</p>
          </header>

          <div className={styles.sections}>
            {content.sections.map(
              (section: ContentSection, index: number): ReactNode => (
                <LegalSection
                  index={index}
                  key={section.id ?? section.heading}
                  locale={locale}
                  section={section}
                />
              ),
            )}
          </div>
        </article>
      </Container>
    </PublicPage>
  );
};
