"use client";

import { useRouter } from "next/navigation";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useState } from "react";
import type {
  ConversionFormat,
  ConversionMode,
  MockScenario,
} from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import {
  conversionAdapter,
  mockControlsEnabled,
} from "@/shared/config/site";
import { getConversionRuntimeCopy } from "./conversion-runtime-copy";
import { createMockPreview, mockScenarios } from "./mock-adapter";
import {
  ConversionApiError,
  createRealPreview,
} from "./real-adapter";
import styles from "./converter.module.css";
import { getConverterCopy } from "./converter-copy";
import { validatePublicUrl } from "./url-validation";
import { WebsiteUrlField } from "./website-url-field";

type ConverterFormProps = {
  format: ConversionFormat;
  locale: Locale;
};

export const ConverterForm = ({
  format,
  locale,
}: ConverterFormProps): ReactNode => {
  const messages = getMessages(locale);
  const copy = getConverterCopy(locale);
  const runtimeCopy = getConversionRuntimeCopy(locale);
  const router = useRouter();
  const [sourceUrl, setSourceUrl] = useState("https://example.com/long-article");
  const [mode, setMode] = useState<ConversionMode>("visual");
  const [scenario, setScenario] = useState<MockScenario>("happy");
  const [error, setError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting"
  >("idle");

  const handleUrlChange = (value: string): void => {
    setSourceUrl(value);
    if (error) {
      setError("");
    }
  };
  const handleModeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMode(event.target.value === "editable" ? "editable" : "visual");
  };
  const handleScenarioChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setScenario(event.target.value as MockScenario);
  };
  const scenarioOption = (
    item: (typeof mockScenarios)[number],
  ): ReactNode => (
    <option key={item.value} value={item.value}>
      {copy.scenarios[item.value]}
    </option>
  );

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const validation = validatePublicUrl(sourceUrl);
    if (!validation.valid) {
      setError(copy.validation[validation.code]);
      document.getElementById(`${format}-source-url`)?.focus();
      return;
    }
    setSubmissionStatus("submitting");
    try {
      if (conversionAdapter === "mock") {
        const job = createMockPreview({
          sourceUrl: validation.normalizedUrl,
          format,
          mode,
          scenario,
        });
        router.push(`/${locale}/preview/${job.jobId}?mode=${job.mode}`);
        return;
      }
      const job = await createRealPreview({
        source: { kind: "url", value: validation.normalizedUrl },
        output: format,
        mode,
        clientRequestId: crypto.randomUUID(),
        options: {
          includeLinks: true,
          outputPreset: format === "pdf" ? "a4" : "wide",
          viewportPreset: "desktop-1440",
        },
      });
      router.push(`/${locale}/preview/${job.jobId}`);
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
      document.getElementById(`${format}-source-url`)?.focus();
    }
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <WebsiteUrlField
        emptyError={copy.validation.empty}
        error={error}
        helper={messages.converter.urlHint}
        id={`${format}-source-url`}
        invalidError={copy.validation.malformed}
        label={messages.converter.urlLabel}
        onValueChange={handleUrlChange}
        required
        value={sourceUrl}
      />

      <fieldset className={styles.modes}>
        <legend className="srOnly">{copy.modeLegend}</legend>
        <label className={styles.mode}>
          <input checked={mode === "visual"} name="mode" onChange={handleModeChange} type="radio" value="visual" />
          <span className={styles.modeTitle}>{messages.converter.visual}</span>
          <span className={styles.modeText}>{copy.visualText}</span>
        </label>
        <label className={styles.mode}>
          <input checked={mode === "editable"} name="mode" onChange={handleModeChange} type="radio" value="editable" />
          <span className={styles.modeTitle}>{messages.converter.editable}</span>
          <span className={styles.modeText}>{copy.editableText}</span>
        </label>
      </fieldset>

      {conversionAdapter === "mock" && mockControlsEnabled ? (
        <label className={styles.demo}>
          <strong>{copy.demoState}</strong>
          <span className={styles.hint}>{copy.demoHint}</span>
          <select className={styles.select} onChange={handleScenarioChange} value={scenario}>
            {mockScenarios.map(scenarioOption)}
          </select>
        </label>
      ) : null}

      <button
        className={styles.submit}
        disabled={submissionStatus === "submitting"}
        type="submit"
      >
        {submissionStatus === "submitting"
          ? runtimeCopy.submitPending
          : copy.submit[format]}
      </button>
    </form>
  );
};
