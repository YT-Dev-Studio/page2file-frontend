import "server-only";

import { NextResponse } from "next/server";
import type { BackendJob } from "../backend-contract";

const noStoreHeaders = {
  "cache-control": "private, no-store, max-age=0",
  "x-robots-tag": "noindex, nofollow",
};

const rewriteJobUrls = (job: BackendJob): BackendJob => ({
  ...job,
  preview: job.preview
    ? {
        ...job.preview,
        sections: job.preview.sections.map((section) => ({
          ...section,
          thumbnailUrl: `/api/conversions/jobs/${job.jobId}/thumbnails/${encodeURIComponent(section.id)}`,
        })),
      }
    : undefined,
  downloadUrl: job.downloadUrl
    ? `/api/conversions/jobs/${job.jobId}/download`
    : undefined,
});

export const jsonFromBackend = async (
  response: Response,
): Promise<NextResponse> => {
  const contentType = response.headers.get("content-type") ?? "";
  const payload: unknown = contentType.includes("application/json")
    ? await response.json()
    : {
        code: "INTERNAL_ERROR",
        correlationId: "bff-invalid-response",
      };
  const body =
    response.ok &&
    typeof payload === "object" &&
    payload !== null &&
    "jobId" in payload
      ? rewriteJobUrls(payload as BackendJob)
      : payload;
  return NextResponse.json(body, {
    status: response.status,
    headers: {
      ...noStoreHeaders,
      ...(response.headers.get("retry-after")
        ? { "retry-after": response.headers.get("retry-after") ?? "" }
        : {}),
    },
  });
};

export const proxyBinary = async (response: Response): Promise<Response> => {
  const headers = new Headers(noStoreHeaders);
  for (const name of [
    "content-type",
    "content-length",
    "content-disposition",
  ]) {
    const value = response.headers.get(name);
    if (value) headers.set(name, value);
  }
  return new Response(response.body, {
    status: response.status,
    headers,
  });
};

export const csrfFailure = (): NextResponse =>
  NextResponse.json(
    { code: "FORBIDDEN", correlationId: "bff-csrf" },
    { status: 403, headers: noStoreHeaders },
  );

export const sessionFailure = (): NextResponse =>
  NextResponse.json(
    { code: "UNAUTHORIZED", correlationId: "bff-session" },
    { status: 401, headers: noStoreHeaders },
  );
