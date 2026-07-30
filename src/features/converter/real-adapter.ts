"use client";

import type {
  BackendCreatePreviewRequest,
  BackendJob,
  BackendPreviewOperation,
  BackendPublicError,
} from "@/shared/api/backend-contract";

export class ConversionApiError extends Error {
  public readonly code: string;
  public readonly correlationId: string;
  public readonly retryAfterMs?: number;

  public constructor(error: BackendPublicError) {
    super(error.code);
    this.name = "ConversionApiError";
    this.code = error.code;
    this.correlationId = error.correlationId;
    this.retryAfterMs = error.retryAfterMs;
  }
}

let csrfToken = "";

const parseError = (value: unknown): BackendPublicError => {
  if (
    typeof value === "object" &&
    value !== null &&
    "code" in value &&
    typeof value.code === "string" &&
    "correlationId" in value &&
    typeof value.correlationId === "string"
  ) {
    return {
      code: value.code as BackendPublicError["code"],
      correlationId: value.correlationId,
      retryAfterMs:
        "retryAfterMs" in value && typeof value.retryAfterMs === "number"
          ? value.retryAfterMs
          : undefined,
    };
  }
  return { code: "INTERNAL_ERROR", correlationId: "frontend-invalid-error" };
};

const parseJob = (value: unknown): BackendJob => {
  if (
    typeof value !== "object" ||
    value === null ||
    !("jobId" in value) ||
    typeof value.jobId !== "string" ||
    !("status" in value) ||
    typeof value.status !== "string"
  ) {
    throw new ConversionApiError({
      code: "INTERNAL_ERROR",
      correlationId: "frontend-invalid-job",
    });
  }
  return value as BackendJob;
};

const ensureSession = async (): Promise<string> => {
  if (csrfToken) return csrfToken;
  const response = await fetch("/api/conversions/session", {
    cache: "no-store",
    credentials: "same-origin",
  });
  const payload: unknown = await response.json();
  if (!response.ok) throw new ConversionApiError(parseError(payload));
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("csrf" in payload) ||
    typeof payload.csrf !== "string"
  ) {
    throw new ConversionApiError({
      code: "INTERNAL_ERROR",
      correlationId: "frontend-invalid-session",
    });
  }
  csrfToken = payload.csrf;
  return csrfToken;
};

const apiRequest = async ({
  path,
  method,
  body,
}: {
  path: string;
  method: "GET" | "POST" | "PATCH";
  body?: object;
}): Promise<BackendJob> => {
  let csrf = method === "GET" ? "" : await ensureSession();
  const sendRequest = async (): Promise<Response> =>
    fetch(path, {
      method,
      cache: "no-store",
      credentials: "same-origin",
      headers: {
        accept: "application/json",
        ...(body ? { "content-type": "application/json" } : {}),
        ...(csrf ? { "x-p2f-csrf": csrf } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  let response = await sendRequest();
  if (response.status === 401) {
    csrfToken = "";
    csrf = method === "GET" ? "" : await ensureSession();
    if (method === "GET") await ensureSession();
    response = await sendRequest();
  }
  const payload: unknown = await response.json();
  if (!response.ok) throw new ConversionApiError(parseError(payload));
  return parseJob(payload);
};

export const createRealPreview = async (
  request: BackendCreatePreviewRequest,
): Promise<BackendJob> =>
  apiRequest({
    path: "/api/conversions/previews",
    method: "POST",
    body: request,
  });

export const getRealJob = async (jobId: string): Promise<BackendJob> => {
  await ensureSession();
  return apiRequest({
    path: `/api/conversions/jobs/${encodeURIComponent(jobId)}`,
    method: "GET",
  });
};

export const reviseRealPreview = async ({
  jobId,
  revision,
  operations,
}: {
  jobId: string;
  revision: number;
  operations: ReadonlyArray<BackendPreviewOperation>;
}): Promise<BackendJob> =>
  apiRequest({
    path: `/api/conversions/jobs/${encodeURIComponent(jobId)}/preview`,
    method: "PATCH",
    body: { revision, operations },
  });

export const renderRealJob = async (
  jobId: string,
  revision: number,
): Promise<BackendJob> =>
  apiRequest({
    path: `/api/conversions/jobs/${encodeURIComponent(jobId)}/render`,
    method: "POST",
    body: { revision },
  });

export const cancelRealJob = async (jobId: string): Promise<BackendJob> =>
  apiRequest({
    path: `/api/conversions/jobs/${encodeURIComponent(jobId)}/cancel`,
    method: "POST",
  });
