import Link from "next/link";
import type { ReactNode } from "react";
import { getBlogEntry } from "@/content/content-registry";
import type { ConversionFormat } from "@/entities/conversion/model";
import { getMessages } from "@/shared/i18n/messages";
import type { Locale } from "@/shared/i18n/locales";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { ExtensionPromoBanner } from "@/shared/ui/extension-promo-banner";
import { Container } from "@/shared/ui/site-shell";
import styles from "./converter.module.css";
import { getConverterCopy } from "./converter-copy";
import { getConversionRuntimeCopy } from "./conversion-runtime-copy";
import { ConverterForm } from "./converter-form";

export const ConverterPage = ({
  format,
  locale,
}: {
  format: ConversionFormat;
  locale: Locale;
}): ReactNode => {
  const copy = getConverterCopy(locale);
  const messages = getMessages(locale);
  const runtimeCopy = getConversionRuntimeCopy(locale);
  const formatCopy = copy.formats[format];
  const relatedSlugs =
    format === "pdf"
      ? [
          "save-webpage-as-pdf",
          "visual-vs-editable",
          "website-types-to-pdf-or-powerpoint",
        ]
      : [
          "webpage-to-powerpoint",
          "sections-to-slides",
          "website-types-to-pdf-or-powerpoint",
        ];
  const relatedArticles = relatedSlugs.flatMap((slug) => {
    const entry = getBlogEntry(locale, slug);

    return entry ? [entry] : [];
  });
  return (
    <PublicPage className={styles.page} family="converter">
      <Container>
        <div className={styles.intro}>
          <PublicHero
            eyebrow={formatCopy.eyebrow}
            lead={formatCopy.lead}
            title={formatCopy.title}
          />
        </div>

        <section className={styles.workbench}>
          <div className={styles.formPanel}>
            <header className={styles.panelHeader}>
              <span aria-hidden="true">01</span>
              <div>
                <h2>{copy.sourceTitle}</h2>
                <p>{copy.sourceHint}</p>
              </div>
            </header>
            <ConverterForm format={format} locale={locale} />
          </div>
          <aside className={styles.aside}>
            <header className={styles.panelHeader}>
              <span aria-hidden="true">02</span>
              <div>
                <h2>{copy.reviewTitle}</h2>
                <p>{formatCopy.asideTitle}</p>
              </div>
            </header>
            <p className={styles.runtimeNotice}>
              {runtimeCopy.runtimeNotice}
            </p>
            <ol className={styles.asideList}>
              <li>
                <span aria-hidden="true">A</span>
                <div>
                  <strong>{messages.converter.visual}</strong>
                  <p>{copy.visualText}</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">B</span>
                <div>
                  <strong>{copy.editableTitle}</strong>
                  <p>{copy.editableText}</p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">C</span>
                <div>
                  <strong>{messages.converter.warnings}</strong>
                  <p>{copy.warningsText}</p>
                </div>
              </li>
            </ol>
          </aside>
        </section>

        <nav
          aria-label={copy.relatedArticlesLabel}
          className={styles.articleLinks}
        >
          <strong>{copy.relatedArticlesLabel}</strong>
          <ul>
            {relatedArticles.map((entry) => (
              <li key={entry.slug}>
                <Link href={`/${locale}/blog/${entry.slug}`}>
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ExtensionPromoBanner
          actionLabel={copy.extensionLink}
          body={copy.extensionBody}
          eyebrow={copy.privateQuestion}
          headingId={`${format}-extension-title`}
          locale={locale}
          title={copy.extensionTitle}
          variant="compact"
        />
      </Container>
    </PublicPage>
  );
};
