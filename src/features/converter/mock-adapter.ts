import type {
  CreatePreviewRequest,
  MockJobReference,
  MockScenario,
  PreviewSection,
} from "@/entities/conversion/model";

export const mockScenarios: ReadonlyArray<{
  value: MockScenario;
  label: string;
}> = [
  { value: "happy", label: "Happy path" },
  { value: "partial-warning", label: "Partial fallback warning" },
  { value: "human-verification", label: "Human verification" },
  { value: "rate-limited", label: "Rate limited" },
  { value: "source-blocked", label: "Source blocked / auth required" },
  { value: "page-too-large", label: "Page too large" },
  { value: "timeout", label: "Timeout" },
  { value: "expired", label: "Expired" },
  { value: "failed", label: "Recoverable failure" },
];

export const createMockPreview = (
  request: CreatePreviewRequest,
): MockJobReference => {
  const { format, mode, scenario } = request;
  return {
    jobId: `mock-${format}-${scenario}`,
    format,
    mode,
    scenario,
  };
};

export const parseMockJob = (
  jobId: string,
  mode: string | undefined,
): MockJobReference | null => {
  const match = /^mock-(pdf|pptx)-([a-z-]+)$/.exec(jobId);
  if (!match) {
    return null;
  }
  const format = match[1] === "pdf" ? "pdf" : "pptx";
  const scenarioValue = match[2];
  const scenarioMatch = (
    scenario: (typeof mockScenarios)[number],
  ): boolean => scenario.value === scenarioValue;
  const scenarioDefinition = mockScenarios.find(scenarioMatch);
  if (!scenarioDefinition) {
    return null;
  }
  return {
    jobId,
    format,
    mode: mode === "editable" ? "editable" : "visual",
    scenario: scenarioDefinition.value,
  };
};

export const createPreviewSections = (
  format: "pdf" | "pptx",
): ReadonlyArray<PreviewSection> => [
  {
    id: "hero",
    title: format === "pdf" ? "Opening section" : "Title slide",
    dimensions: format === "pdf" ? "A4 · 1 page" : "16:9",
    kind: "editable",
    removed: false,
  },
  {
    id: "comparison",
    title: "Mode comparison",
    dimensions: format === "pdf" ? "A4 · 1 page" : "16:9",
    kind: "editable",
    removed: false,
  },
  {
    id: "canvas",
    title: "Complex graphic",
    dimensions: format === "pdf" ? "A4 · 1 page" : "16:9",
    kind: "visual-fallback",
    warning: "Canvas block rasterized to preserve its appearance.",
    removed: false,
  },
  {
    id: "article",
    title: "Article body",
    dimensions: format === "pdf" ? "A4 · 2 pages" : "16:9 · 2 slides",
    kind: "editable",
    warning: "One web font was substituted.",
    removed: false,
  },
];
