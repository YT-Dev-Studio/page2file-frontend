import Link from "next/link";
import type { ReactNode } from "react";
import type { MockJobReference } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import styles from "./preview.module.css";
import { getPreviewCopy } from "./preview-copy";

export const DownloadPage = ({
  job,
  locale,
}: {
  job: MockJobReference;
  locale: Locale;
}): ReactNode => {
  const copy = getPreviewCopy(locale);
  const artifact =
    job.format === "pdf" ? "/demos/page2file-sample.pdf" : "/demos/page2file-sample.pptx";
  return (
    <main id="main-content">
      <section className={styles.downloadCard}>
        <p className={styles.eyebrow}>{copy.downloadEyebrow}</p>
        <h1>{copy.downloadTitle}</h1>
        <p>{copy.downloadText}</p>
        <a className={styles.downloadLink} download href={artifact}>
          {copy.downloadSample} {job.format.toUpperCase()}
        </a>
        <p>
          <Link href={`/${locale}/preview/${job.jobId}?mode=${job.mode}`}>{copy.returnToPreview}</Link>
        </p>
      </section>
    </main>
  );
};
