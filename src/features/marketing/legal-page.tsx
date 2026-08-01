import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentSection, LandingContent } from "@/content/landings";
import { legalProfile } from "@/shared/config/site";
import type {
  Locale,
  LocalizedPublished,
} from "@/shared/i18n/locales";
import { isPublishedLocale } from "@/shared/i18n/locales";
import type { PublicPageFamily } from "@/shared/routes/routes";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import styles from "./legal-page.module.css";

type LegalPageProps = {
  content: LandingContent;
  family: Extract<PublicPageFamily, "legal" | "security">;
  locale: Locale;
};

type LegalPageCopy = {
  addressLabel: string;
  contactLabel: string;
  contentsTitle: string;
  effectiveDate: string;
  jurisdictionLabel: string;
  operatorTitle: string;
  processorsLabel: string;
  relatedLabel: string;
  relatedPages: Record<LegalRoute, string>;
};

type LegalRoute =
  | "privacy"
  | "terms"
  | "cookie-policy"
  | "acceptable-use"
  | "security";

const legalRoutes: ReadonlyArray<LegalRoute> = [
  "privacy",
  "terms",
  "cookie-policy",
  "acceptable-use",
  "security",
];

const legalPageCopy: LocalizedPublished<LegalPageCopy> = {
  en: {
    addressLabel: "Public address",
    contactLabel: "Contact",
    contentsTitle: "On this page",
    effectiveDate: "Effective 1 August 2026",
    jurisdictionLabel: "Jurisdiction",
    operatorTitle: "Service operator",
    processorsLabel: "Service providers",
    relatedLabel: "Related documents",
    relatedPages: {
      privacy: "Privacy policy",
      terms: "Terms of service",
      "cookie-policy": "Cookie and analytics policy",
      "acceptable-use": "Acceptable use",
      security: "Security",
    },
  },
  ru: {
    addressLabel: "Публичный адрес",
    contactLabel: "Контакт",
    contentsTitle: "Содержание",
    effectiveDate: "Действует с 1 августа 2026 года",
    jurisdictionLabel: "Юрисдикция",
    operatorTitle: "Оператор сервиса",
    processorsLabel: "Поставщики услуг",
    relatedLabel: "Связанные документы",
    relatedPages: {
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      "cookie-policy": "Политика cookies и аналитики",
      "acceptable-use": "Допустимое использование",
      security: "Безопасность",
    },
  },
};

const toClauseNumber = (index: number): string =>
  String(index + 1).padStart(2, "0");

export const LegalPage = ({
  content,
  family,
  locale,
}: LegalPageProps): ReactNode => {
  const copy = legalPageCopy[isPublishedLocale(locale) ? locale : "en"];
  const contentItem = (
    section: ContentSection,
    index: number,
  ): ReactNode => {
    const id = `section-${index + 1}`;
    return (
      <li key={section.heading}>
        <a href={`#${id}`}>
          <span aria-hidden="true">{toClauseNumber(index)}</span>
          {section.heading}
        </a>
      </li>
    );
  };
  const clause = (
    section: ContentSection,
    index: number,
  ): ReactNode => {
    const id = `section-${index + 1}`;
    return (
      <section className={styles.clause} id={id} key={section.heading}>
        <span aria-hidden="true">{toClauseNumber(index)}</span>
        <h2>{section.heading}</h2>
        <p>{section.body}</p>
        {section.points ? (
          <ul>
            {section.points.map((point: string): ReactNode => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </section>
    );
  };
  const relatedRoutes = legalRoutes.filter(
    (route: LegalRoute): boolean => route !== content.route,
  );
  const relatedLink = (route: LegalRoute): ReactNode => (
    <Link href={`/${locale}/${route}`} key={route}>
      {copy.relatedPages[route]}
    </Link>
  );

  return (
    <PublicPage className={styles.page} family={family}>
      <Container>
        <div className={styles.documentHeader}>
          <div>
            <PublicHero
              eyebrow={content.eyebrow}
              lead={content.lead}
              title={content.title}
            />
            <p className={styles.effectiveDate}>{copy.effectiveDate}</p>
          </div>

          <aside className={styles.operatorCard}>
            <h2>{copy.operatorTitle}</h2>
            <dl>
              <div>
                <dt>{copy.operatorTitle}</dt>
                <dd>{legalProfile.entityName}</dd>
              </div>
              <div>
                <dt>{copy.addressLabel}</dt>
                <dd>{legalProfile.address}</dd>
              </div>
              <div>
                <dt>{copy.jurisdictionLabel}</dt>
                <dd>{legalProfile.jurisdiction}</dd>
              </div>
              <div>
                <dt>{copy.contactLabel}</dt>
                <dd>
                  <a href={`mailto:${legalProfile.contactEmail}`}>
                    {legalProfile.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt>{copy.processorsLabel}</dt>
                <dd>{legalProfile.processors.join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className={styles.documentLayout}>
          <nav aria-label={copy.contentsTitle} className={styles.contents}>
            <h2>{copy.contentsTitle}</h2>
            <ol>{content.sections.map(contentItem)}</ol>
          </nav>
          <article className={styles.document}>
            {content.sections.map(clause)}
          </article>
        </div>

        <nav aria-label={copy.relatedLabel} className={styles.related}>
          <h2>{copy.relatedLabel}</h2>
          <div>{relatedRoutes.map(relatedLink)}</div>
        </nav>
      </Container>
    </PublicPage>
  );
};
