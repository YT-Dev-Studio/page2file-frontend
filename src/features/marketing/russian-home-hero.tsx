"use client";

import { useRouter } from "next/navigation";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import type {
  ConversionFormat,
  ConversionMode,
} from "@/entities/conversion/model";
import { conversionAdapter } from "@/shared/config/site";
import { Button } from "@/shared/ui/components/button/button";
import { FormatBadge } from "@/shared/ui/components/format-badge/format-badge";
import {
  Select,
  type SelectOption,
} from "@/shared/ui/components/select/select";
import { DownloadIcon } from "@/shared/ui/utilities/icons/glyphs/download-icon";
import { getConversionRuntimeCopy } from "@/features/converter/conversion-runtime-copy";
import { createMockPreview } from "@/features/converter/mock-adapter";
import {
  ConversionApiError,
  createRealPreview,
} from "@/features/converter/real-adapter";
import { getConverterCopy } from "@/features/converter/converter-copy";
import { validatePublicUrl } from "@/features/converter/url-validation";
import { WebsiteUrlField } from "@/features/converter/website-url-field";
import { russianHomeCopy } from "./russian-home-copy";
import styles from "./russian-home.module.css";

const formatOptions: ReadonlyArray<SelectOption> = [
  { label: "PDF", value: "pdf" },
  { label: "PowerPoint", value: "pptx" },
];

const pdfModeOptions: ReadonlyArray<SelectOption> = [
  { label: "Снимки страницы", value: "visual" },
  { label: "Редактируемый PDF", value: "editable" },
];

const powerpointModeOptions: ReadonlyArray<SelectOption> = [
  { label: "Снимки слайдов", value: "visual" },
  { label: "Редактируемая презентация", value: "editable" },
];

type PreviewCardProps = {
  format: ConversionFormat;
};

const PreviewCard = ({ format }: PreviewCardProps): ReactNode => {
  const isPdf = format === "pdf";
  const filename = isPdf ? "article.pdf" : "article.pptx";
  const meta = isPdf ? "12 страниц · готово" : "12 слайдов · готово";

  return (
    <aside
      aria-label="Пример результата конвертации"
      className={styles.previewCard}
    >
      <div className={styles.previewHeader}>
        <h2>{russianHomeCopy.preview.title}</h2>
        <FormatBadge format={format} style="subtle" />
      </div>

      <div className={styles.sourcePreview}>
        <div aria-hidden="true" className={styles.browserBar}>
          <span />
          <span />
          <span />
          <i />
        </div>
        <strong>{russianHomeCopy.preview.sourceTitle}</strong>
        <div aria-hidden="true" className={styles.textLines}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.imagePreview}>
          <span>{russianHomeCopy.preview.imageNote}</span>
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
        <strong>{russianHomeCopy.preview.divider}</strong>
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
        <span aria-hidden="true" className={styles.outputDownload}>
          <DownloadIcon />
        </span>
      </div>
    </aside>
  );
};

export const RussianHomeHero = (): ReactNode => {
  const router = useRouter();
  const converterCopy = getConverterCopy("ru");
  const runtimeCopy = getConversionRuntimeCopy("ru");
  const [format, setFormat] = useState<ConversionFormat>("pdf");
  const [mode, setMode] = useState<ConversionMode>("visual");
  const [sourceUrl, setSourceUrl] = useState("");
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting"
  >("idle");
  const modeOptions =
    format === "pdf" ? pdfModeOptions : powerpointModeOptions;
  const modeLabel =
    format === "pdf"
      ? russianHomeCopy.form.pdfModeLabel
      : russianHomeCopy.form.powerpointModeLabel;
  const submitLabel =
    format === "pdf"
      ? russianHomeCopy.form.submitPdf
      : russianHomeCopy.form.submitPowerpoint;

  const handleUrlChange = (value: string): void => {
    setSourceUrl(value);

    if (error) {
      setError("");
    }
  };

  const handleFormatChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    setFormat(event.currentTarget.value === "pptx" ? "pptx" : "pdf");
  };

  const handleModeChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    setMode(
      event.currentTarget.value === "editable" ? "editable" : "visual",
    );
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const validation = validatePublicUrl(sourceUrl);

    if (!validation.valid) {
      setError(converterCopy.validation[validation.code]);
      document.getElementById("home-source-url")?.focus();
      return;
    }

    setSubmissionStatus("submitting");

    try {
      if (conversionAdapter === "mock") {
        const job = createMockPreview({
          format,
          mode,
          scenario: "happy",
          sourceUrl: validation.normalizedUrl,
        });
        router.push(`/ru/preview/${job.jobId}?mode=${job.mode}`);
        return;
      }

      const job = await createRealPreview({
        clientRequestId: crypto.randomUUID(),
        mode,
        options: {
          includeLinks: true,
          outputPreset: format === "pdf" ? "a4" : "wide",
          viewportPreset: "desktop-1440",
        },
        output: format,
        source: {
          kind: "url",
          value: validation.normalizedUrl,
        },
      });
      router.push(`/ru/preview/${job.jobId}`);
    } catch (requestError) {
      const code =
        requestError instanceof ConversionApiError
          ? requestError.code
          : "INTERNAL_ERROR";
      const localizedCode =
        code in runtimeCopy.errors
          ? (code as keyof typeof runtimeCopy.errors)
          : "INTERNAL_ERROR";

      setError(runtimeCopy.errors[localizedCode]);
      setSubmissionStatus("idle");
      document.getElementById("home-source-url")?.focus();
    }
  };

  return (
    <div className={styles.heroLayout}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{russianHomeCopy.eyebrow}</p>
        <h1 className={styles.title}>{russianHomeCopy.title}</h1>
        <p className={styles.lead}>{russianHomeCopy.lead}</p>

        <form
          className={styles.converterForm}
          noValidate
          onSubmit={handleSubmit}
        >
          <WebsiteUrlField
            emptyError={converterCopy.validation.empty}
            error={error}
            helper={russianHomeCopy.form.urlHelper}
            id="home-source-url"
            invalidError={converterCopy.validation.malformed}
            label={russianHomeCopy.form.urlLabel}
            onValueChange={handleUrlChange}
            placeholder={russianHomeCopy.form.urlPlaceholder}
            required
            value={sourceUrl}
          />

          <div className={styles.selectRow}>
            <Select
              label={russianHomeCopy.form.formatLabel}
              onChange={handleFormatChange}
              options={formatOptions}
              showHelper={false}
              value={format}
            />
            <Select
              label={modeLabel}
              onChange={handleModeChange}
              options={modeOptions}
              showHelper={false}
              value={mode}
            />
          </div>

          <div className={styles.formFooter}>
            <span>{russianHomeCopy.form.meta}</span>
            <Button
              className={styles.submitButton}
              disabled={submissionStatus === "submitting"}
              icon={<DownloadIcon />}
              size="medium"
              type="submit"
            >
              {submissionStatus === "submitting"
                ? runtimeCopy.submitPending
                : submitLabel}
            </Button>
          </div>
        </form>

        <p className={styles.closingNote}>
          {russianHomeCopy.closingNote}
        </p>
      </div>

      <PreviewCard format={format} />
    </div>
  );
};
