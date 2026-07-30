"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type {
  BackendJob,
  BackendJobStatus,
  BackendPreviewOperation,
  BackendPreviewSection,
} from "@/shared/api/backend-contract";
import {
  cancelRealJob,
  ConversionApiError,
  getRealJob,
  renderRealJob,
  reviseRealPreview,
} from "@/features/converter/real-adapter";
import { getConversionRuntimeCopy } from "@/features/converter/conversion-runtime-copy";
import type { Locale } from "@/shared/i18n/locales";
import {
  getRealPreviewCopy,
  type RealPreviewCopy,
} from "./real-preview-copy";
import styles from "./preview.module.css";

type WorkspaceState =
  | { status: "loading" }
  | { status: "ready"; job: BackendJob }
  | {
      status: "error";
      code: string;
      output: BackendJob["output"];
    };

const activeStatuses: ReadonlySet<BackendJobStatus> = new Set([
  "accepted",
  "queued",
  "loading",
  "analyzing",
  "preview_rendering",
  "final_queued",
  "final_rendering",
]);
const stoppedStatuses: ReadonlySet<BackendJobStatus> = new Set([
  "failed_recoverable",
  "failed_terminal",
  "cancelled",
  "expired",
  "downloaded",
]);

type SectionCardProps = {
  section: BackendPreviewSection;
  index: number;
  sectionCount: number;
  selected: boolean;
  disabled: boolean;
  copy: RealPreviewCopy;
  onSelect: (sectionId: string) => void;
  onOperation: (operation: BackendPreviewOperation) => void;
};

const RealSectionCard = ({
  section,
  index,
  sectionCount,
  selected,
  disabled,
  copy,
  onSelect,
  onOperation,
}: SectionCardProps): ReactNode => {
  const selectSection = (): void => onSelect(section.id);
  const moveUp = (): void =>
    onOperation({ type: "move", sectionId: section.id, toIndex: index - 1 });
  const moveDown = (): void =>
    onOperation({ type: "move", sectionId: section.id, toIndex: index + 1 });
  const toggleRemoved = (): void =>
    onOperation({
      type: section.removed ? "restore" : "remove",
      sectionId: section.id,
    });
  const split = (): void =>
    onOperation({ type: "split", sectionId: section.id });
  const merge = (): void =>
    onOperation({
      type: "merge",
      sectionId: section.id,
      withSectionId: "",
    });

  return (
    <article
      className={styles.sectionCard}
      data-removed={section.removed}
      data-selected={selected}
    >
      <button
        className={styles.sectionSelect}
        disabled={disabled}
        onClick={selectSection}
        type="button"
      >
        <strong>
          {String(index + 1).padStart(2, "0")} · {section.title}
        </strong>
        <span>
          {copy.dimensions(section)} · {copy.fidelity[section.fidelity]}
        </span>
      </button>
      <div className={styles.sectionActions}>
        <button
          className={styles.smallButton}
          disabled={disabled || index === 0}
          onClick={moveUp}
          type="button"
        >
          {copy.up}
        </button>
        <button
          className={styles.smallButton}
          disabled={disabled || index === sectionCount - 1}
          onClick={moveDown}
          type="button"
        >
          {copy.down}
        </button>
        <button
          className={styles.smallButton}
          disabled={disabled}
          onClick={toggleRemoved}
          type="button"
        >
          {section.removed ? copy.restore : copy.remove}
        </button>
        <button
          className={styles.smallButton}
          disabled={disabled || !section.canSplit}
          onClick={split}
          type="button"
        >
          {copy.split}
        </button>
        <button
          className={styles.smallButton}
          disabled={disabled || index === sectionCount - 1}
          onClick={merge}
          type="button"
        >
          {copy.merge}
        </button>
      </div>
    </article>
  );
};

const normalizeMergeOperation = (
  operation: BackendPreviewOperation,
  sections: ReadonlyArray<BackendPreviewSection>,
): BackendPreviewOperation | null => {
  if (operation.type !== "merge") return operation;
  const index = sections.findIndex(
    (section: BackendPreviewSection): boolean =>
      section.id === operation.sectionId,
  );
  const nextSection = sections[index + 1];
  return nextSection
    ? {
        ...operation,
        withSectionId: nextSection.id,
      }
    : null;
};

export const RealPreviewWorkspace = ({
  jobId,
  locale,
}: {
  jobId: string;
  locale: Locale;
}): ReactNode => {
  const copy = getRealPreviewCopy(locale);
  const runtimeCopy = getConversionRuntimeCopy(locale);
  const [workspace, setWorkspace] = useState<WorkspaceState>({
    status: "loading",
  });
  const [selectedId, setSelectedId] = useState("");
  const [operationStatus, setOperationStatus] = useState<
    "idle" | "submitting"
  >("idle");
  const [pollVersion, setPollVersion] = useState(0);

  useEffect(
    function pollRealJob(): (() => void) {
      let active = true;
      let timer = 0;
      const load = async (): Promise<void> => {
        try {
          const job = await getRealJob(jobId);
          if (!active) return;
          setWorkspace({ status: "ready", job });
          if (job.preview?.sections[0]) {
            setSelectedId(
              (currentSelection): string =>
                currentSelection || job.preview?.sections[0]?.id || "",
            );
          }
          if (activeStatuses.has(job.status)) {
            timer = window.setTimeout(load, 1_000);
          }
        } catch (error) {
          if (!active) return;
          const code =
            error instanceof ConversionApiError
              ? error.code
              : "INTERNAL_ERROR";
          setWorkspace((current) => ({
            status: "error",
            code,
            output: current.status === "ready" ? current.job.output : "pdf",
          }));
        }
      };
      void load();
      return (): void => {
        active = false;
        window.clearTimeout(timer);
      };
    },
    [jobId, pollVersion],
  );

  if (workspace.status === "loading") {
    const status = copy.status.queued;
    return (
      <main className={styles.page} id="main-content">
        <section
          aria-live="polite"
          className={styles.statusPanel}
          data-tone={status.tone}
        >
          <p className={styles.statusTitle}>{status.title}</p>
          <p className={styles.statusText}>{status.text}</p>
          <div className={styles.progressTrack}>
            <div className={styles.progressValue} />
          </div>
        </section>
      </main>
    );
  }

  if (workspace.status === "error") {
    const localizedCode =
      workspace.code in runtimeCopy.errors
        ? (workspace.code as keyof typeof runtimeCopy.errors)
        : "INTERNAL_ERROR";
    return (
      <main className={styles.page} id="main-content">
        <section className={styles.statusPanel} data-tone="error">
          <h1 className={styles.statusTitle}>
            {copy.status.failed_recoverable.title}
          </h1>
          <p className={styles.statusText}>
            {runtimeCopy.errors[localizedCode]}
          </p>
          <Link
            className={styles.secondaryAction}
            href={`/${locale}/convert-webpage-to-${workspace.output === "pdf" ? "pdf" : "powerpoint"}`}
          >
            {copy.retryFromConverter}
          </Link>
        </section>
      </main>
    );
  }

  const { job } = workspace;
  const manifest = job.preview;
  const status = copy.status[job.status];
  const backendErrorCode = job.error?.code;
  const localizedBackendError =
    backendErrorCode && backendErrorCode in runtimeCopy.errors
      ? runtimeCopy.errors[
          backendErrorCode as keyof typeof runtimeCopy.errors
        ]
      : "";
  const sections = manifest?.sections ?? [];
  const selected =
    sections.find(
      (section: BackendPreviewSection): boolean =>
        section.id === selectedId,
    ) ?? sections[0];
  const canEdit = job.status === "preview_ready" && operationStatus === "idle";

  const selectSection = (sectionId: string): void => setSelectedId(sectionId);
  const applyOperation = async (
    operation: BackendPreviewOperation,
  ): Promise<void> => {
    if (!manifest || !canEdit) return;
    const normalized = normalizeMergeOperation(operation, sections);
    if (!normalized) return;
    setOperationStatus("submitting");
    try {
      const nextJob = await reviseRealPreview({
        jobId,
        revision: manifest.revision,
        operations: [normalized],
      });
      setWorkspace({ status: "ready", job: nextJob });
    } catch (error) {
      if (
        error instanceof ConversionApiError &&
        error.code === "REVISION_CONFLICT"
      ) {
        const currentJob = await getRealJob(jobId);
        setWorkspace({ status: "ready", job: currentJob });
      } else {
        const code =
          error instanceof ConversionApiError
            ? error.code
            : "INTERNAL_ERROR";
        setWorkspace({
          status: "error",
          code,
          output: job.output,
        });
      }
    } finally {
      setOperationStatus("idle");
    }
  };
  const sectionToCard = (
    section: BackendPreviewSection,
    index: number,
  ): ReactNode => (
    <RealSectionCard
      copy={copy}
      disabled={!canEdit}
      index={index}
      key={section.id}
      onOperation={applyOperation}
      onSelect={selectSection}
      section={section}
      sectionCount={sections.length}
      selected={section.id === selected?.id}
    />
  );
  const startFinalRender = async (): Promise<void> => {
    if (!manifest || !canEdit) return;
    setOperationStatus("submitting");
    try {
      const nextJob = await renderRealJob(jobId, manifest.revision);
      setWorkspace({ status: "ready", job: nextJob });
      setPollVersion((currentVersion): number => currentVersion + 1);
    } catch (error) {
      const code =
        error instanceof ConversionApiError
          ? error.code
          : "INTERNAL_ERROR";
      setWorkspace({ status: "error", code, output: job.output });
    } finally {
      setOperationStatus("idle");
    }
  };
  const cancelJob = async (): Promise<void> => {
    setOperationStatus("submitting");
    try {
      const nextJob = await cancelRealJob(jobId);
      setWorkspace({ status: "ready", job: nextJob });
    } catch (error) {
      const code =
        error instanceof ConversionApiError
          ? error.code
          : "INTERNAL_ERROR";
      setWorkspace({ status: "error", code, output: job.output });
    } finally {
      setOperationStatus("idle");
    }
  };
  const warningToListItem = (warning: string): ReactNode => (
    <li className={styles.warning} key={warning}>
      {copy.warnings[warning] ?? warning}
    </li>
  );

  return (
    <main className={styles.page} id="main-content">
      <div className={styles.topbar}>
        <div>
          <p className={styles.eyebrow}>{copy.workspaceEyebrow}</p>
          <h1 className={styles.title}>
            {job.output === "pdf" ? copy.pdfTitle : copy.pptxTitle}
          </h1>
        </div>
        <p className={styles.jobMeta}>
          {job.jobId}
          {manifest ? ` · ${copy.revision(manifest.revision)}` : ""}
        </p>
      </div>

      <section
        aria-live="polite"
        className={styles.statusPanel}
        data-tone={status.tone}
      >
        <p className={styles.statusTitle}>{status.title}</p>
        <p className={styles.statusText}>
          {localizedBackendError || status.text}
        </p>
        {status.pending ? (
          <div className={styles.progressTrack}>
            <div
              className={styles.progressValue}
              style={{ width: `${Math.max(8, job.progress)}%` }}
            />
          </div>
        ) : null}
        {activeStatuses.has(job.status) ? (
          <button
            className={styles.secondaryAction}
            disabled={operationStatus === "submitting"}
            onClick={cancelJob}
            type="button"
          >
            {copy.cancel}
          </button>
        ) : null}
        {stoppedStatuses.has(job.status) ? (
          <Link
            className={styles.secondaryAction}
            href={`/${locale}/convert-webpage-to-${job.output === "pdf" ? "pdf" : "powerpoint"}`}
          >
            {copy.retryFromConverter}
          </Link>
        ) : null}
      </section>

      {manifest ? (
        <div className={styles.workspace}>
          <aside className={styles.rail}>
            <h2 className={styles.panelTitle}>{copy.sectionsTitle}</h2>
            <div className={styles.sectionList}>
              {sections.map(sectionToCard)}
            </div>
          </aside>
          <section
            aria-label={copy.previewLabel}
            className={styles.canvasArea}
          >
            {selected ? (
              <div className={styles.canvas} data-format={job.output}>
                <Image
                  alt={selected.title}
                  className={styles.realThumbnail}
                  height={Math.max(1, Math.round(selected.height))}
                  priority
                  src={selected.thumbnailUrl}
                  unoptimized
                  width={Math.max(1, Math.round(selected.width))}
                />
              </div>
            ) : (
              <p>{copy.noPreviewYet}</p>
            )}
          </section>
          <aside className={styles.inspector}>
            <h2 className={styles.panelTitle}>{copy.inspectorTitle}</h2>
            {selected ? (
              <>
                <span className={styles.badge}>
                  {copy.fidelity[selected.fidelity]}
                </span>
                <p className={styles.inspectorText}>
                  {selected.warnings.length
                    ? copy.warnings[selected.warnings[0]] ??
                      selected.warnings[0]
                    : copy.noWarnings}
                </p>
              </>
            ) : null}
            <h3 className={styles.panelTitle}>
              {copy.globalWarningsTitle}
            </h3>
            {job.warnings.length ? (
              <ul className={styles.warningList}>
                {job.warnings.map(warningToListItem)}
              </ul>
            ) : (
              <p className={styles.inspectorText}>{copy.noWarnings}</p>
            )}
            {job.status === "download_ready" && job.downloadUrl ? (
              <Link
                className={styles.primaryAction}
                href={`/${locale}/download/${job.jobId}`}
              >
                {copy.openDownload}
              </Link>
            ) : job.status === "preview_ready" ? (
              <button
                className={styles.primaryAction}
                disabled={!canEdit}
                onClick={startFinalRender}
                type="button"
              >
                {copy.renderFinal}
              </button>
            ) : null}
          </aside>
        </div>
      ) : (
        <p className={styles.statusText}>{copy.noPreviewYet}</p>
      )}
    </main>
  );
};
