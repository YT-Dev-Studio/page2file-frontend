"use client";

import Link from "next/link";
import type {
  DragEvent,
  ReactNode,
} from "react";
import { useEffect, useState } from "react";
import type {
  MockJobReference,
  MockJobStage,
  PreviewOperation,
  PreviewSection,
} from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import { createPreviewSections } from "@/features/converter/mock-adapter";
import styles from "./preview.module.css";

type StatusContent = {
  title: string;
  text: string;
  tone: "progress" | "warning" | "error" | "success";
  pending: boolean;
};

const statusContent: Record<MockJobStage, StatusContent> = {
  idle: { title: "Waiting to start", text: "Choose a source and mode.", tone: "progress", pending: false },
  queued: { title: "Queued", text: "A worker slot is reserved for this mock job.", tone: "progress", pending: true },
  "loading-source": { title: "Loading page", text: "The production service would load and stabilize the public page here.", tone: "progress", pending: true },
  analyzing: { title: "Analyzing sections", text: "Headings, visual breaks and safe links are being mapped.", tone: "progress", pending: true },
  "rendering-preview": { title: "Rendering preview", text: "Page and slide thumbnails are being prepared.", tone: "progress", pending: true },
  "preview-ready": { title: "Preview ready", text: "Review sections and warnings before final render.", tone: "success", pending: false },
  "partial-warning": { title: "Preview ready with fallbacks", text: "One complex block was rasterized; the rest remains editable.", tone: "warning", pending: false },
  "rendering-final": { title: "Rendering final file", text: "Your selected operations are being applied to the sample.", tone: "progress", pending: true },
  "download-ready": { title: "Download ready", text: "This is a static sample artifact, not a conversion of the entered URL.", tone: "success", pending: false },
  "human-verification": { title: "Human verification needed", text: "A production service could ask for a privacy-preserving challenge before expensive work.", tone: "warning", pending: false },
  "rate-limited": { title: "Rate limit reached", text: "Wait before starting another conversion. No job history was stored.", tone: "error", pending: false },
  "source-blocked": { title: "Source blocked or sign-in required", text: "The public converter does not bypass access controls. Use the current-tab extension.", tone: "error", pending: false },
  "page-too-large": { title: "Page is too large", text: "Reduce the source scope or use a bounded multi-page workflow.", tone: "error", pending: false },
  timeout: { title: "Source timed out", text: "The page did not stabilize within the allowed processing window.", tone: "error", pending: false },
  expired: { title: "Preview expired", text: "Temporary jobs are not kept as history. Start a new preview.", tone: "error", pending: false },
  failed: { title: "Preview could not be completed", text: "This mock failure is recoverable. Retry the workflow.", tone: "error", pending: false },
};

const scenarioStage = (job: MockJobReference): MockJobStage => {
  if (job.scenario === "happy") return "preview-ready";
  if (job.scenario === "partial-warning") return "partial-warning";
  return job.scenario;
};

const isTerminalError = (stage: MockJobStage): boolean =>
  ["rate-limited", "source-blocked", "page-too-large", "timeout", "expired", "failed"].includes(stage);

export const PreviewWorkspace = ({
  job,
  locale,
}: {
  job: MockJobReference;
  locale: Locale;
}): ReactNode => {
  const [stage, setStage] = useState<MockJobStage>(
    job.scenario === "human-verification" ? "human-verification" : "queued",
  );
  const [verified, setVerified] = useState(false);
  const [retryAsHappyPath, setRetryAsHappyPath] = useState(false);
  const [sections, setSections] = useState<ReadonlyArray<PreviewSection>>(
    createPreviewSections(job.format),
  );
  const [selectedId, setSelectedId] = useState("hero");
  const [operations, setOperations] = useState<ReadonlyArray<PreviewOperation>>([]);
  const [draggedId, setDraggedId] = useState("");

  useEffect(function advanceMockJob(): (() => void) | undefined {
    if (job.scenario === "human-verification" && !verified) {
      return undefined;
    }
    const terminalStage: MockJobStage = retryAsHappyPath
      ? "preview-ready"
      : scenarioStage(job);
    const stages: ReadonlyArray<MockJobStage> = [
      "queued",
      "loading-source",
      "analyzing",
      "rendering-preview",
      terminalStage,
    ];
    const currentIndex = stages.indexOf(stage);
    if (currentIndex < 0 || currentIndex === stages.length - 1) {
      return undefined;
    }
    const timer = window.setTimeout(function advanceStage(): void {
      setStage(stages[currentIndex + 1]);
    }, 520);
    return (): void => window.clearTimeout(timer);
  }, [job, retryAsHappyPath, stage, verified]);

  const selectedSection =
    sections.find((section: PreviewSection): boolean => section.id === selectedId) ??
    sections[0];

  const addOperation = (operation: PreviewOperation): void => {
    setOperations((currentOperations: ReadonlyArray<PreviewOperation>): ReadonlyArray<PreviewOperation> => [
      ...currentOperations,
      operation,
    ]);
  };

  const updateRemoved = (sectionId: string, removed: boolean): void => {
    const updateSection = (section: PreviewSection): PreviewSection =>
      section.id === sectionId ? { ...section, removed } : section;
    setSections((currentSections: ReadonlyArray<PreviewSection>): ReadonlyArray<PreviewSection> =>
      currentSections.map(updateSection),
    );
    addOperation({ type: removed ? "remove" : "restore", sectionId });
  };

  const moveSection = (sectionId: string, toIndex: number): void => {
    setSections((currentSections: ReadonlyArray<PreviewSection>): ReadonlyArray<PreviewSection> => {
      const fromIndex = currentSections.findIndex(
        (section: PreviewSection): boolean => section.id === sectionId,
      );
      if (fromIndex < 0 || toIndex < 0 || toIndex >= currentSections.length) {
        return currentSections;
      }
      const nextSections = [...currentSections];
      const [movedSection] = nextSections.splice(fromIndex, 1);
      nextSections.splice(toIndex, 0, movedSection);
      return nextSections;
    });
    addOperation({ type: "move", sectionId, toIndex });
  };

  const splitSection = (sectionId: string): void => {
    setSections((currentSections: ReadonlyArray<PreviewSection>): ReadonlyArray<PreviewSection> => {
      const sourceIndex = currentSections.findIndex(
        (section: PreviewSection): boolean => section.id === sectionId,
      );
      const source = currentSections[sourceIndex];
      if (!source || currentSections.some(
        (section: PreviewSection): boolean => section.id === `${sectionId}-split`,
      )) {
        return currentSections;
      }
      const nextSections = [...currentSections];
      nextSections.splice(sourceIndex + 1, 0, {
        ...source,
        id: `${sectionId}-split`,
        title: `${source.title} · continuation`,
      });
      return nextSections;
    });
    addOperation({ type: "split", sectionId });
  };

  const mergeWithNext = (sectionId: string): void => {
    const sourceIndex = sections.findIndex(
      (section: PreviewSection): boolean => section.id === sectionId,
    );
    const nextSection = sections[sourceIndex + 1];
    if (sourceIndex < 0 || !nextSection) {
      return;
    }

    setSections((currentSections: ReadonlyArray<PreviewSection>): ReadonlyArray<PreviewSection> => {
      const currentSourceIndex = currentSections.findIndex(
        (section: PreviewSection): boolean => section.id === sectionId,
      );
      const currentNextSection = currentSections[currentSourceIndex + 1];
      if (currentSourceIndex < 0 || !currentNextSection) {
        return currentSections;
      }
      const mergedSection: PreviewSection = {
        ...currentSections[currentSourceIndex],
        title: `${currentSections[currentSourceIndex].title} + ${currentNextSection.title}`,
      };
      const remainingSections = currentSections.filter(
        (section: PreviewSection): boolean => section.id !== currentNextSection.id,
      );
      const replaceMerged = (section: PreviewSection): PreviewSection =>
        section.id === sectionId ? mergedSection : section;
      return remainingSections.map(replaceMerged);
    });
    addOperation({ type: "merge", sectionId, withSectionId: nextSection.id });
  };

  const handleDragStart = (event: DragEvent<HTMLElement>, sectionId: string): void => {
    setDraggedId(sectionId);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (event: DragEvent<HTMLElement>, toIndex: number): void => {
    event.preventDefault();
    if (draggedId) {
      moveSection(draggedId, toIndex);
      setDraggedId("");
    }
  };

  const allowDrop = (event: DragEvent<HTMLElement>): void => event.preventDefault();

  const startFinalRender = (): void => {
    setStage("rendering-final");
    window.setTimeout(function completeRender(): void {
      setStage("download-ready");
    }, 900);
  };

  const retryJob = (): void => {
    setRetryAsHappyPath(true);
    setStage("queued");
  };
  const completeVerification = (): void => {
    setVerified(true);
    setStage("queued");
  };
  const currentStatus = statusContent[stage];
  const showWorkspace = !isTerminalError(stage) && stage !== "human-verification";

  const sectionCard = (section: PreviewSection, index: number): ReactNode => {
    const selectSection = (): void => setSelectedId(section.id);
    const removeOrRestore = (): void => updateRemoved(section.id, !section.removed);
    const moveUp = (): void => moveSection(section.id, index - 1);
    const moveDown = (): void => moveSection(section.id, index + 1);
    const split = (): void => splitSection(section.id);
    const merge = (): void => mergeWithNext(section.id);
    const dragStart = (event: DragEvent<HTMLElement>): void =>
      handleDragStart(event, section.id);
    const drop = (event: DragEvent<HTMLElement>): void => handleDrop(event, index);

    return (
      <article
        className={styles.sectionCard}
        data-removed={section.removed}
        data-selected={section.id === selectedId}
        draggable
        key={section.id}
        onDragOver={allowDrop}
        onDragStart={dragStart}
        onDrop={drop}
      >
        <button className={styles.sectionSelect} onClick={selectSection} type="button">
          <strong>{String(index + 1).padStart(2, "0")} · {section.title}</strong>
          <span>{section.dimensions} · {section.kind}</span>
        </button>
        <div className={styles.sectionActions}>
          <button className={styles.smallButton} disabled={index === 0} onClick={moveUp} type="button">Up</button>
          <button className={styles.smallButton} disabled={index === sections.length - 1} onClick={moveDown} type="button">Down</button>
          <button className={styles.smallButton} onClick={removeOrRestore} type="button">{section.removed ? "Restore" : "Remove"}</button>
          <button className={styles.smallButton} onClick={split} type="button">Split</button>
          <button className={styles.smallButton} disabled={index === sections.length - 1} onClick={merge} type="button">Merge</button>
        </div>
      </article>
    );
  };

  return (
    <main className={styles.page} id="main-content">
      <div className={styles.topbar}>
        <div>
          <p className={styles.eyebrow}>Mock preview workspace</p>
          <h1 className={styles.title}>{job.format === "pdf" ? "PDF pages" : "PowerPoint slides"}</h1>
        </div>
        <p className={styles.jobMeta}>{job.jobId} · {job.mode}</p>
      </div>

      <section aria-live="polite" className={styles.statusPanel} data-tone={currentStatus.tone}>
        <p className={styles.statusTitle}>{currentStatus.title}</p>
        <p className={styles.statusText}>{currentStatus.text}</p>
        {currentStatus.pending ? <div className={styles.progressTrack}><div className={styles.progressValue} /></div> : null}
        {stage === "human-verification" ? (
          <button className={styles.secondaryAction} onClick={completeVerification} type="button">Complete demo verification</button>
        ) : null}
        {isTerminalError(stage) ? (
          <button className={styles.secondaryAction} onClick={retryJob} type="button">Retry with the happy path</button>
        ) : null}
      </section>

      {showWorkspace ? (
        <div className={styles.workspace}>
          <aside className={styles.rail}>
            <h2 className={styles.panelTitle}>Sections</h2>
            <div className={styles.sectionList}>{sections.map(sectionCard)}</div>
          </aside>
          <section className={styles.canvasArea} aria-label="Document preview">
            <div className={styles.canvas} data-format={job.format}>
              <div className={styles.canvasHeader}>
                <span>{job.format.toUpperCase()} · {job.mode}</span>
                <h2>{selectedSection?.title}</h2>
              </div>
              <div className={styles.canvasBody}>
                <div className={styles.mockLine} />
                <div className={styles.mockLine} />
                <div className={styles.mockLine} />
                <div className={styles.mockMedia} />
              </div>
              <div className={styles.canvasFooter}>
                <span>PAGE2FILE SAMPLE</span>
                <span>{selectedSection?.dimensions}</span>
              </div>
            </div>
          </section>
          <aside className={styles.inspector}>
            <h2 className={styles.panelTitle}>Inspector</h2>
            <span className={styles.badge}>{selectedSection?.kind}</span>
            <p className={styles.inspectorText}>
              {selectedSection?.warning ?? "No conversion warnings for this section."}
            </p>
            <h3 className={styles.panelTitle}>Global warnings</h3>
            <ul className={styles.warningList}>
              <li className={styles.warning}>Demo output — no source URL was fetched.</li>
              <li className={styles.warning}>Video and animation use static poster frames.</li>
              {job.mode === "editable" ? <li className={styles.warning}>One complex graphic remains a visual fallback.</li> : null}
            </ul>
            <p className={styles.inspectorText}>{operations.length} local edit operations</p>
            {stage === "download-ready" ? (
              <Link className={styles.primaryAction} href={`/${locale}/download/${job.jobId}?mode=${job.mode}`}>
                Open sample download
              </Link>
            ) : (
              <button
                className={styles.primaryAction}
                disabled={currentStatus.pending}
                onClick={startFinalRender}
                type="button"
              >
                Render final sample
              </button>
            )}
          </aside>
        </div>
      ) : null}
    </main>
  );
};
