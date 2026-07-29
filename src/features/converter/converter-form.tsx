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
import { mockControlsEnabled } from "@/shared/config/site";
import { createMockPreview, mockScenarios } from "./mock-adapter";
import styles from "./converter.module.css";
import { validatePublicUrl } from "./url-validation";

type ConverterFormProps = {
  format: ConversionFormat;
  locale: Locale;
};

export const ConverterForm = ({
  format,
  locale,
}: ConverterFormProps): ReactNode => {
  const messages = getMessages(locale);
  const router = useRouter();
  const [sourceUrl, setSourceUrl] = useState("https://example.com/long-article");
  const [mode, setMode] = useState<ConversionMode>("visual");
  const [scenario, setScenario] = useState<MockScenario>("happy");
  const [error, setError] = useState("");

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSourceUrl(event.target.value);
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
      {item.label}
    </option>
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validation = validatePublicUrl(sourceUrl);
    if (!validation.valid) {
      setError(validation.message);
      document.getElementById(`${format}-source-url`)?.focus();
      return;
    }
    const job = createMockPreview({
      sourceUrl: validation.normalizedUrl,
      format,
      mode,
      scenario,
    });
    router.push(`/${locale}/preview/${job.jobId}?mode=${job.mode}`);
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={`${format}-source-url`}>
          {messages.converter.urlLabel}
        </label>
        <input
          aria-describedby={`${format}-url-hint ${error ? `${format}-url-error` : ""}`}
          aria-invalid={Boolean(error)}
          className={styles.input}
          id={`${format}-source-url`}
          inputMode="url"
          onChange={handleUrlChange}
          spellCheck={false}
          type="url"
          value={sourceUrl}
        />
        <span className={styles.hint} id={`${format}-url-hint`}>
          {messages.converter.urlHint}
        </span>
        {error ? (
          <span className={styles.error} id={`${format}-url-error`} role="alert">
            {error}
          </span>
        ) : null}
      </div>

      <fieldset className={styles.modes}>
        <legend className="srOnly">Conversion mode</legend>
        <label className={styles.mode}>
          <input checked={mode === "visual"} name="mode" onChange={handleModeChange} type="radio" value="visual" />
          <span className={styles.modeTitle}>{messages.converter.visual}</span>
          <span className={styles.modeText}>Prioritize layout fidelity. Each detected section becomes a stable image.</span>
        </label>
        <label className={styles.mode}>
          <input checked={mode === "editable"} name="mode" onChange={handleModeChange} type="radio" value="editable" />
          <span className={styles.modeTitle}>{messages.converter.editable}</span>
          <span className={styles.modeText}>Rebuild supported text, images and safe links; rasterize only complex blocks.</span>
        </label>
      </fieldset>

      {mockControlsEnabled ? (
        <label className={styles.demo}>
          <strong>DEMO STATE</strong>
          <span className={styles.hint}>Select a deterministic state without contacting the entered URL.</span>
          <select className={styles.select} onChange={handleScenarioChange} value={scenario}>
            {mockScenarios.map(scenarioOption)}
          </select>
        </label>
      ) : null}

      <button className={styles.submit} type="submit">
        {format === "pdf" ? "Generate PDF preview" : "Generate PowerPoint preview"}
      </button>
    </form>
  );
};
