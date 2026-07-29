import Link from "next/link";
import type { ReactNode } from "react";
import type { MockJobReference } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import styles from "./preview.module.css";

export const DownloadPage = ({
  job,
  locale,
}: {
  job: MockJobReference;
  locale: Locale;
}): ReactNode => {
  const artifact =
    job.format === "pdf" ? "/demos/page2file-sample.pdf" : "/demos/page2file-sample.pptx";
  return (
    <main id="main-content">
      <section className={styles.downloadCard}>
        <p className={styles.eyebrow}>Static demo artifact</p>
        <h1>Your sample is ready</h1>
        <p>
          This file demonstrates the download state. It was not generated from
          a submitted URL and contains no user content.
        </p>
        <a className={styles.downloadLink} download href={artifact}>
          Download sample {job.format.toUpperCase()}
        </a>
        <p>
          <Link href={`/${locale}/preview/${job.jobId}?mode=${job.mode}`}>Return to preview</Link>
        </p>
      </section>
    </main>
  );
};
