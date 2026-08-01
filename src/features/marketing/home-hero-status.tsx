import type { ReactNode } from "react";
import type {
  ConversionFormat,
  ConversionMode,
} from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import { Button } from "@/shared/ui/components/button/button";
import { FormatBadge } from "@/shared/ui/components/format-badge/format-badge";
import { Progress } from "@/shared/ui/components/progress/progress";
import { DownloadIcon } from "@/shared/ui/utilities/icons/glyphs/download-icon";
import type { HomeCopy } from "./home-copy";
import styles from "./home.module.css";

export type ConverterFlow =
  | { status: "form" }
  | {
      format: ConversionFormat;
      mode: ConversionMode;
      progress: number;
      status: "processing";
    }
  | {
      downloadUrl: string;
      format: ConversionFormat;
      mode: ConversionMode;
      status: "ready";
    };

type HomeHeroPreviewProps = {
  copy: HomeCopy;
  format: ConversionFormat;
};

export const HomeHeroPreview = ({
  copy,
  format,
}: HomeHeroPreviewProps): ReactNode => {
  const isPdf = format === "pdf";
  const filename = isPdf ? "article.pdf" : "article.pptx";
  const meta = isPdf ? copy.preview.pdfMeta : copy.preview.powerpointMeta;

  return (
    <aside
      aria-label={copy.preview.accessibleLabel}
      className={styles.previewCard}
    >
      <div className={styles.previewHeader}>
        <h2>{copy.preview.title}</h2>
        <FormatBadge format={format} style="subtle" />
      </div>

      <div className={styles.sourcePreview}>
        <div aria-hidden="true" className={styles.browserBar}>
          <span />
          <span />
          <span />
          <i />
        </div>
        <strong>{copy.preview.sourceTitle}</strong>
        <div aria-hidden="true" className={styles.textLines}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.imagePreview}>
          <span>{copy.preview.imageNote}</span>
          <div aria-hidden="true" className={styles.imageTiles}>
            <i />
            <i />
            <i className={styles.activeTile} />
            <i />
          </div>
        </div>
      </div>

      <div className={styles.pageBreak}>
        <span aria-hidden="true" />
        <strong>{copy.preview.divider}</strong>
        <span aria-hidden="true" />
      </div>

      <div className={styles.outputFile}>
        <div aria-hidden="true" className={styles.fileIcon}>
          <DownloadIcon />
        </div>
        <div className={styles.outputFileCopy}>
          <strong>{filename}</strong>
          <span>{meta}</span>
          <FormatBadge format={format} style="subtle" />
        </div>
        <span
          aria-hidden="true"
          className={styles.outputDownload}
        >
          <DownloadIcon />
        </span>
      </div>
    </aside>
  );
};

type HomeHeroStatusPanelProps = {
  copy: HomeCopy;
  flow: Exclude<ConverterFlow, { status: "form" }>;
  locale: Locale;
  onBack: () => void;
  onDownload: () => void;
};

export const HomeHeroStatusPanel = ({
  copy,
  flow,
  locale,
  onBack,
  onDownload,
}: HomeHeroStatusPanelProps): ReactNode => {
  const downloadLabel = getMessages(locale).actions.download;

  if (flow.status === "processing") {
    return (
      <section aria-live="polite" className={styles.converterStatePanel}>
        <div className={styles.converterStateCopy}>
          <h2>{copy.converterFlow.processingTitle}</h2>
          <p>{copy.converterFlow.processingBody}</p>
        </div>
        <Progress
          format={flow.format}
          label={copy.converterFlow.processingTitle}
          value={flow.progress}
        />
        <Button
          className={styles.backButton}
          onClick={onBack}
          showIcon={false}
          size="medium"
          variant="secondary"
        >
          {copy.converterFlow.backAction}
        </Button>
      </section>
    );
  }

  const isPdf = flow.format === "pdf";
  const filename = isPdf ? "article.pdf" : "article.pptx";
  const baseMeta = isPdf ? copy.preview.pdfMeta : copy.preview.powerpointMeta;
  const modeOptions = isPdf ? copy.form.pdfModes : copy.form.powerpointModes;
  const modeLabel =
    modeOptions.find(({ value }): boolean => value === flow.mode)?.label ?? "";
  const meta = modeLabel ? `${baseMeta} · ${modeLabel}` : baseMeta;

  return (
    <section aria-live="polite" className={styles.converterStatePanel}>
      <div className={styles.converterStateCopy}>
        <h2>{copy.converterFlow.readyTitle}</h2>
        <p>{copy.converterFlow.readyBody}</p>
      </div>
      <button
        aria-label={`${downloadLabel}: ${filename}`}
        className={`${styles.outputFile} ${styles.readyFileButton}`}
        onClick={onDownload}
        type="button"
      >
        <span aria-hidden="true" className={styles.fileIcon}>
          <DownloadIcon />
        </span>
        <span className={styles.outputFileCopy}>
          <strong>{filename}</strong>
          <span>{meta}</span>
          <FormatBadge format={flow.format} style="subtle" />
        </span>
        <span aria-hidden="true" className={styles.outputDownload}>
          <DownloadIcon />
        </span>
      </button>
      <Button
        className={styles.backButton}
        onClick={onBack}
        showIcon={false}
        size="medium"
        variant="secondary"
      >
        {copy.converterFlow.backAction}
      </Button>
    </section>
  );
};
