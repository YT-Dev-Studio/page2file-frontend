import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentSection, LandingContent } from "@/content/landings";
import { legalProfile } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
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

const legalPageCopy: Record<Locale, LegalPageCopy> = {
  en: {
    updatedAt: "Updated 4 August 2026",
  },
  ru: {
    updatedAt: "Обновлено 4 августа 2026 года",
  },
  de: {
    updatedAt: "Aktualisiert am 4. August 2026",
  },
  fr: {
    updatedAt: "Mis à jour le 4 août 2026",
  },
  es: {
    updatedAt: "Actualizado el 4 de agosto de 2026",
  },
  nl: {
    updatedAt: "Bijgewerkt op 4 augustus 2026",
  },
  pt: {
    updatedAt: "Atualizado em 4 de agosto de 2026",
  },
  it: {
    updatedAt: "Aggiornato il 4 agosto 2026",
  },
  pl: {
    updatedAt: "Zaktualizowano 4 sierpnia 2026",
  },
  cs: {
    updatedAt: "Aktualizováno 4. srpna 2026",
  },
  sv: {
    updatedAt: "Uppdaterad 4 augusti 2026",
  },
  no: {
    updatedAt: "Oppdatert 4. august 2026",
  },
  da: {
    updatedAt: "Opdateret 4. august 2026",
  },
  fi: {
    updatedAt: "Päivitetty 4. elokuuta 2026",
  },
  ro: {
    updatedAt: "Actualizat la 4 august 2026",
  },
  hu: {
    updatedAt: "Frissítve: 2026. augusztus 4.",
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
  const copy = legalPageCopy[locale];
  const siteCopy = getSiteCopy(locale).footer;

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
          {content.route === "about" ? (
            <nav aria-label={siteCopy.legalTitle} className={styles.points}>
              <Link href={`mailto:${legalProfile.contactEmail}`}>
                {legalProfile.contactEmail}
              </Link>
              {" · "}
              <Link href={`/${locale}/privacy`}>{siteCopy.links.privacy}</Link>
              {" · "}
              <Link href={`/${locale}/terms`}>{siteCopy.links.terms}</Link>
            </nav>
          ) : null}
        </article>
      </Container>
    </PublicPage>
  );
};
