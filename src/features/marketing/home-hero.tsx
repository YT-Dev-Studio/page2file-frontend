"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import type { BackendJob } from "@/shared/api/backend-contract";
import type {
  ConversionFormat,
  ConversionMode,
} from "@/entities/conversion/model";
import { conversionAdapter } from "@/shared/config/site";
import { Button } from "@/shared/ui/components/button/button";
import {
  Select,
  type SelectOption,
} from "@/shared/ui/components/select/select";
import type { Locale } from "@/shared/i18n/locales";
import { DownloadIcon } from "@/shared/ui/utilities/icons/glyphs/download-icon";
import { getConversionRuntimeCopy } from "@/features/converter/conversion-runtime-copy";
import { createMockPreview } from "@/features/converter/mock-adapter";
import {
  ConversionApiError,
  createRealPreview,
  getRealJob,
  renderRealJob,
} from "@/features/converter/real-adapter";
import { getConverterCopy } from "@/features/converter/converter-copy";
import { validatePublicUrl } from "@/features/converter/url-validation";
import { WebsiteUrlField } from "@/features/converter/website-url-field";
import { getHomeCopy } from "./home-copy";
import {
  HomeHeroPreview,
  HomeHeroStatusPanel,
  type ConverterFlow,
} from "./home-hero-status";
import styles from "./home.module.css";

const formatOptions: ReadonlyArray<SelectOption> = [
  { label: "PDF", value: "pdf" },
  { label: "PowerPoint", value: "pptx" },
];
const demoSourceUrl = "https://example.com/article";
const processingStatuses: ReadonlySet<BackendJob["status"]> = new Set([
  "accepted",
  "queued",
  "loading",
  "analyzing",
  "preview_rendering",
  "final_queued",
  "final_rendering",
]);
const failedStatuses: ReadonlySet<BackendJob["status"]> = new Set([
  "failed_recoverable",
  "failed_terminal",
  "cancelled",
  "expired",
]);
const demoProgressSteps: ReadonlyArray<number> = [12, 28, 49, 73, 91, 100];

const wait = async (duration: number): Promise<void> =>
  new Promise((resolve): void => {
    window.setTimeout(resolve, duration);
  });

export const HomeHero = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getHomeCopy(locale);
  const converterCopy = getConverterCopy(locale);
  const runtimeCopy = getConversionRuntimeCopy(locale);
  const [format, setFormat] = useState<ConversionFormat>("pdf");
  const [mode, setMode] = useState<ConversionMode>("visual");
  const [sourceUrl, setSourceUrl] = useState("");
  const [error, setError] = useState("");
  const [flow, setFlow] = useState<ConverterFlow>({ status: "form" });
  const runIdRef = useRef(0);
  const modeOptions: ReadonlyArray<SelectOption> =
    format === "pdf" ? copy.form.pdfModes : copy.form.powerpointModes;
  const modeLabel =
    format === "pdf" ? copy.form.pdfModeLabel : copy.form.powerpointModeLabel;
  const submitLabel =
    format === "pdf" ? copy.form.submitPdf : copy.form.submitPowerpoint;

  useEffect(function cancelFlowOnUnmount(): () => void {
    return (): void => {
      runIdRef.current += 1;
    };
  }, []);

  const handleUrlChange = (value: string): void => {
    setSourceUrl(value);

    if (error) {
      setError("");
    }
  };

  const handleFormatChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFormat(event.currentTarget.value === "pptx" ? "pptx" : "pdf");
  };

  const handleModeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setMode(event.currentTarget.value === "editable" ? "editable" : "visual");
  };

  const setRequestError = (requestError: unknown): void => {
    const code =
      requestError instanceof ConversionApiError
        ? requestError.code
        : requestError instanceof Error &&
            requestError.message in runtimeCopy.errors
          ? requestError.message
          : "INTERNAL_ERROR";
    const localizedCode =
      code in runtimeCopy.errors
        ? (code as keyof typeof runtimeCopy.errors)
        : "INTERNAL_ERROR";

    setError(runtimeCopy.errors[localizedCode]);
    setFlow({ status: "form" });
  };

  const runDemoFlow = async (
    selectedFormat: ConversionFormat,
    selectedMode: ConversionMode,
    mockSourceUrl: string = demoSourceUrl,
  ): Promise<void> => {
    const runId = ++runIdRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const job = createMockPreview({
      format: selectedFormat,
      mode: selectedMode,
      scenario: "happy",
      sourceUrl: mockSourceUrl,
    });
    const mockDownloadUrl =
      `/${locale}/download/${job.jobId}?mode=${job.mode}`;
    setFlow({
      format: selectedFormat,
      mode: selectedMode,
      progress: 4,
      status: "processing",
    });

    for (const progress of demoProgressSteps) {
      await wait(reduceMotion ? 40 : 480);
      if (runId !== runIdRef.current) return;
      setFlow({
        format: selectedFormat,
        mode: selectedMode,
        progress,
        status: "processing",
      });
    }

    await wait(reduceMotion ? 0 : 180);
    if (runId !== runIdRef.current) return;
    setFlow({
      downloadUrl: mockDownloadUrl,
      format: selectedFormat,
      mode: selectedMode,
      status: "ready",
    });
  };

  const runRealFlow = async (
    normalizedUrl: string,
    selectedFormat: ConversionFormat,
    selectedMode: ConversionMode,
  ): Promise<void> => {
    const runId = ++runIdRef.current;
    setFlow({
      format: selectedFormat,
      mode: selectedMode,
      progress: 4,
      status: "processing",
    });

    try {
      let job = await createRealPreview({
        clientRequestId: crypto.randomUUID(),
        mode: selectedMode,
        options: {
          includeLinks: true,
          outputPreset: selectedFormat === "pdf" ? "a4" : "wide",
          viewportPreset: "desktop-1440",
        },
        output: selectedFormat,
        source: {
          kind: "url",
          value: normalizedUrl,
        },
      });
      let finalRenderStarted = false;

      while (runId === runIdRef.current) {
        setFlow((current): ConverterFlow => {
          if (current.status !== "processing") return current;
          return {
            ...current,
            progress: Math.max(current.progress, Math.min(job.progress, 99)),
          };
        });

        if (job.status === "download_ready" && job.downloadUrl) {
          setFlow({
            downloadUrl: job.downloadUrl,
            format: selectedFormat,
            mode: selectedMode,
            status: "ready",
          });
          return;
        }

        if (failedStatuses.has(job.status)) {
          throw new Error(job.error?.code ?? "RENDER_FAILED");
        }

        if (
          job.status === "preview_ready" &&
          job.preview &&
          !finalRenderStarted
        ) {
          finalRenderStarted = true;
          job = await renderRealJob(job.jobId, job.preview.revision);
          continue;
        }

        if (!processingStatuses.has(job.status)) {
          throw new Error(job.error?.code ?? "RENDER_FAILED");
        }

        await wait(1_000);
        if (runId !== runIdRef.current) return;
        job = await getRealJob(job.jobId);
      }
    } catch (requestError) {
      if (runId !== runIdRef.current) return;
      setRequestError(requestError);
      document.getElementById("home-source-url")?.focus();
    }
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

    if (conversionAdapter === "mock") {
      void runDemoFlow(format, mode, validation.normalizedUrl);
      return;
    }

    await runRealFlow(validation.normalizedUrl, format, mode);
  };

  const handleDemo = (): void => {
    setSourceUrl(demoSourceUrl);
    setError("");
    void runDemoFlow(format, mode);
  };

  const handleBack = (): void => {
    runIdRef.current += 1;
    setError("");
    setFlow({ status: "form" });
  };

  const handleDownload = (): void => {
    if (flow.status !== "ready") return;
    window.location.assign(flow.downloadUrl);
  };

  return (
    <div className={styles.heroLayout} id="converter">
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{copy.title}</h1>
        <p className={styles.lead}>{copy.lead}</p>

        {flow.status === "form" ? (
          <form
            className={styles.converterForm}
            noValidate
            onSubmit={handleSubmit}
          >
            <WebsiteUrlField
              emptyError={converterCopy.validation.empty}
              error={error}
              helper={copy.form.urlHelper}
              id="home-source-url"
              invalidError={converterCopy.validation.malformed}
              label={copy.form.urlLabel}
              onValueChange={handleUrlChange}
              placeholder={copy.form.urlPlaceholder}
              required
              value={sourceUrl}
            />

            <div className={styles.selectRow}>
              <Select
                label={copy.form.formatLabel}
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
              <span>{copy.form.meta}</span>
              <div className={styles.formActions}>
                <Button
                  className={styles.demoButton}
                  onClick={handleDemo}
                  showIcon={false}
                  size="medium"
                  type="button"
                  variant="secondary"
                >
                  {copy.form.demoAction}
                </Button>
                <Button
                  className={styles.submitButton}
                  icon={<DownloadIcon />}
                  size="medium"
                  type="submit"
                >
                  {submitLabel}
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <HomeHeroStatusPanel
            copy={copy}
            flow={flow}
            locale={locale}
            onBack={handleBack}
            onDownload={handleDownload}
          />
        )}

        <p className={styles.closingNote}>{copy.closingNote}</p>
      </div>

      <HomeHeroPreview copy={copy} format={format} />
    </div>
  );
};
