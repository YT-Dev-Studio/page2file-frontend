"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { BackendJob } from "@/shared/api/backend-contract";
import {
  ConversionApiError,
  getRealJob,
} from "@/features/converter/real-adapter";
import { getConversionRuntimeCopy } from "@/features/converter/conversion-runtime-copy";
import type { Locale } from "@/shared/i18n/locales";
import { getRealPreviewCopy } from "./real-preview-copy";
import styles from "./preview.module.css";

type DownloadState =
  | { status: "loading" }
  | { status: "ready"; job: BackendJob }
  | { status: "error"; code: string };

const pollingStatuses: ReadonlySet<BackendJob["status"]> = new Set([
  "accepted",
  "queued",
  "loading",
  "analyzing",
  "preview_rendering",
  "preview_ready",
  "final_queued",
  "final_rendering",
]);

const terminalStatuses: ReadonlySet<BackendJob["status"]> = new Set([
  "downloaded",
  "failed_recoverable",
  "failed_terminal",
  "cancelled",
  "expired",
]);

export const RealDownloadPage = ({
  jobId,
  locale,
}: {
  jobId: string;
  locale: Locale;
}): ReactNode => {
  const copy = getRealPreviewCopy(locale);
  const runtimeCopy = getConversionRuntimeCopy(locale);
  const [state, setState] = useState<DownloadState>({ status: "loading" });

  useEffect(
    function pollDownload(): (() => void) {
      let active = true;
      let timer = 0;
      const load = async (): Promise<void> => {
        try {
          const job = await getRealJob(jobId);
          if (!active) return;
          setState({ status: "ready", job });
          if (pollingStatuses.has(job.status)) {
            timer = window.setTimeout(load, 1_000);
          }
        } catch (error) {
          if (!active) return;
          setState({
            status: "error",
            code:
              error instanceof ConversionApiError
                ? error.code
                : "INTERNAL_ERROR",
          });
        }
      };
      void load();
      return (): void => {
        active = false;
        window.clearTimeout(timer);
      };
    },
    [jobId],
  );

  const downloadReady =
    state.status === "ready" &&
    state.job.status === "download_ready" &&
    Boolean(state.job.downloadUrl);
  const localizedError =
    state.status === "error"
      ? runtimeCopy.errors[
          state.code in runtimeCopy.errors
            ? (state.code as keyof typeof runtimeCopy.errors)
            : "INTERNAL_ERROR"
        ]
      : "";
  const terminalJob =
    state.status === "ready" && terminalStatuses.has(state.job.status)
      ? state.job
      : null;
  const statusText =
    state.status === "error"
      ? localizedError
      : downloadReady
        ? copy.status.download_ready.text
        : terminalJob
          ? copy.status[terminalJob.status].text
          : copy.downloadPending;

  return (
    <main id="main-content">
      <section className={styles.downloadCard}>
        <p className={styles.eyebrow}>{copy.downloadEyebrow}</p>
        <h1>{copy.downloadTitle}</h1>
        <p aria-live="polite">{statusText}</p>
        {downloadReady && state.status === "ready" ? (
          <a
            className={styles.downloadLink}
            download
            href={state.job.downloadUrl}
          >
            {copy.downloadFile} {state.job.output.toUpperCase()}
          </a>
        ) : null}
        {terminalJob ? (
          <p>
            <Link
              href={`/${locale}/chrome-extension/how-to-use`}
            >
              {copy.openExtensionGuide}
            </Link>
          </p>
        ) : null}
        <p>
          <Link href={`/${locale}/preview/${jobId}`}>
            {copy.returnToPreview}
          </Link>
        </p>
      </section>
    </main>
  );
};
