import Link from "next/link";
import type { ReactNode } from "react";
import type { ConversionFormat } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import styles from "./converter.module.css";
import { ConverterForm } from "./converter-form";

export const ConverterPage = ({
  format,
  locale,
}: {
  format: ConversionFormat;
  locale: Locale;
}): ReactNode => {
  const isPdf = format === "pdf";
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <div className={styles.layout}>
          <div>
            <p className={styles.eyebrow}>{isPdf ? "Public URL → PDF" : "Public URL → 16:9 slides"}</p>
            <h1 className={styles.title}>
              {isPdf ? "Convert one webpage to PDF" : "Convert a webpage to PowerPoint"}
            </h1>
            <p className={styles.lead}>
              {isPdf
                ? "Validate a public URL, choose a fidelity contract and review every page before the sample download."
                : "Map meaningful webpage sections to slides, choose visual or editable output and inspect every fallback."}
            </p>
            <ConverterForm format={format} locale={locale} />
          </div>
          <aside className={styles.aside}>
            <h2>{isPdf ? "Preview before pagination" : "Preview before the deck"}</h2>
            <p>
              This prototype never fetches the entered URL. It demonstrates the
              intended review flow with deterministic sample data.
            </p>
            <ul className={styles.asideList}>
              <li><strong>Visual mode</strong><span>Highest layout fidelity through section images.</span></li>
              <li><strong>Editable mode</strong><span>Supported text and links remain editable and clickable.</span></li>
              <li><strong>Honest warnings</strong><span>Fonts, canvas, media and unsafe links show their fallback before download.</span></li>
            </ul>
            <p>
              Signed-in or private page?{" "}
              <Link href={`/${locale}/chrome-extension`}>Use the extension workflow</Link>.
            </p>
          </aside>
        </div>
      </Container>
    </main>
  );
};
