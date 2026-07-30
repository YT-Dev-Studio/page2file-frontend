import type { components } from "./generated/backend";

export type BackendCreatePreviewRequest =
  components["schemas"]["CreatePreviewRequest"];
export type BackendJob = components["schemas"]["JobView"];
export type BackendPreviewManifest =
  components["schemas"]["PreviewManifest"];
export type BackendPreviewSection =
  components["schemas"]["PreviewSection"];
export type BackendPreviewOperation =
  components["schemas"]["PreviewOperation"];
export type BackendPublicError = components["schemas"]["PublicError"];
export type BackendJobStatus = components["schemas"]["JobStatus"];

export const REAL_JOB_ID_PATTERN = /^job_[A-Za-z0-9_-]{20,80}$/;
export const SECTION_ID_PATTERN = /^[A-Za-z0-9_-]{1,128}$/;

export const isRealJobId = (value: string): boolean =>
  REAL_JOB_ID_PATTERN.test(value);

export const isSafeSectionId = (value: string): boolean =>
  SECTION_ID_PATTERN.test(value);
