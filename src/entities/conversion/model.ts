export type ConversionFormat = "pdf" | "pptx";
export type ConversionMode = "visual" | "editable";

export type MockJobStage =
  | "idle"
  | "queued"
  | "loading-source"
  | "analyzing"
  | "rendering-preview"
  | "preview-ready"
  | "partial-warning"
  | "rendering-final"
  | "download-ready"
  | "human-verification"
  | "rate-limited"
  | "source-blocked"
  | "page-too-large"
  | "timeout"
  | "expired"
  | "failed";

export type MockScenario =
  | "happy"
  | "partial-warning"
  | "human-verification"
  | "rate-limited"
  | "source-blocked"
  | "page-too-large"
  | "timeout"
  | "expired"
  | "failed";

export type PreviewSection = {
  id: string;
  title: string;
  dimensions: string;
  kind: "editable" | "visual-fallback";
  warning?: string;
  removed: boolean;
};

export type PreviewOperation =
  | { type: "remove"; sectionId: string }
  | { type: "restore"; sectionId: string }
  | { type: "move"; sectionId: string; toIndex: number }
  | { type: "split"; sectionId: string }
  | { type: "merge"; sectionId: string; withSectionId: string };

export type CreatePreviewRequest = {
  sourceUrl: string;
  format: ConversionFormat;
  mode: ConversionMode;
  scenario: MockScenario;
};

export type MockJobReference = {
  jobId: string;
  format: ConversionFormat;
  mode: ConversionMode;
  scenario: MockScenario;
};
