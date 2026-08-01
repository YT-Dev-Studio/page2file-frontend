import Link from "next/link";
import type { ReactNode } from "react";
import type { ConversionFormat } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import { conversionAdapter } from "@/shared/config/site";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
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
  const runtimeCopy = getConversionRuntimeCopy(locale);
  const formatCopy = copy.formats[format];
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
              {conversionAdapter === "mock"
                ? copy.prototypeNotice
                : runtimeCopy.runtimeNotice}
            </p>
            <ol className={styles.asideList}>
              <li>
                <span aria-hidden="true">A</span>
                <div>
                  <strong>{copy.visualTitle}</strong>
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
                  <strong>{copy.warningsTitle}</strong>
                  <p>{copy.warningsText}</p>
                </div>
              </li>
            </ol>
          </aside>
        </section>

        <aside className={styles.extensionCallout}>
          <div>
            <p className={styles.calloutLabel}>{copy.privateQuestion}</p>
            <h2>{copy.extensionTitle}</h2>
          </div>
          <Link href={`/${locale}/chrome-extension/how-to-use`}>
            {copy.extensionLink}
          </Link>
        </aside>
      </Container>
    </PublicPage>
  );
};
