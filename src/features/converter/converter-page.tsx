import Link from "next/link";
import type { ReactNode } from "react";
import type { ConversionFormat } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import styles from "./converter.module.css";
import { getConverterCopy } from "./converter-copy";
import { ConverterForm } from "./converter-form";

export const ConverterPage = ({
  format,
  locale,
}: {
  format: ConversionFormat;
  locale: Locale;
}): ReactNode => {
  const copy = getConverterCopy(locale);
  const formatCopy = copy.formats[format];
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <div className={styles.layout}>
          <div>
            <p className={styles.eyebrow}>{formatCopy.eyebrow}</p>
            <h1 className={styles.title}>{formatCopy.title}</h1>
            <p className={styles.lead}>{formatCopy.lead}</p>
            <ConverterForm format={format} locale={locale} />
          </div>
          <aside className={styles.aside}>
            <h2>{formatCopy.asideTitle}</h2>
            <p>{copy.prototypeNotice}</p>
            <ul className={styles.asideList}>
              <li><strong>{copy.visualTitle}</strong><span>{copy.visualText}</span></li>
              <li><strong>{copy.editableTitle}</strong><span>{copy.editableText}</span></li>
              <li><strong>{copy.warningsTitle}</strong><span>{copy.warningsText}</span></li>
            </ul>
            <p>
              {copy.privateQuestion}{" "}
              <Link href={`/${locale}/chrome-extension`}>{copy.extensionLink}</Link>.
            </p>
          </aside>
        </div>
      </Container>
    </main>
  );
};
