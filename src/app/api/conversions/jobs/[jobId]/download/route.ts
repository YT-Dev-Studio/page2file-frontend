import type { NextRequest } from "next/server";
import {
  isRealJobId,
  type BackendJob,
} from "@/shared/api/backend-contract";
import { requestBackend } from "@/shared/api/server/backend-client";
import {
  proxyBinary,
  sessionFailure,
} from "@/shared/api/server/bff-response";
import {
  backendUnavailable,
  invalidRequest,
} from "@/shared/api/server/route-utils";
import { readBffSession } from "@/shared/api/server/session";

export const dynamic = "force-dynamic";

export const GET = async (
  _request: NextRequest,
  context: { params: Promise<{ jobId: string }> },
): Promise<Response> => {
  const { jobId } = await context.params;
  if (!isRealJobId(jobId)) return invalidRequest();
  const session = await readBffSession();
  if (!session) return sessionFailure();
  try {
    const statusResponse = await requestBackend({
      method: "GET",
      path: `/web/v1/jobs/${jobId}`,
      session,
    });
    if (!statusResponse.ok) return proxyBinary(statusResponse);
    const job = (await statusResponse.json()) as BackendJob;
    const backendDownloadUrl = job.downloadUrl;
    if (!backendDownloadUrl) return invalidRequest();
    const token = new URL(
      backendDownloadUrl,
      "https://backend.invalid",
    ).searchParams.get("token");
    if (!token || !/^[A-Za-z0-9_-]{32,128}$/.test(token)) {
      return invalidRequest();
    }
    return proxyBinary(
      await requestBackend({
        method: "GET",
        path: `/web/v1/jobs/${jobId}/download?token=${encodeURIComponent(token)}`,
        session,
      }),
    );
  } catch {
    return backendUnavailable();
  }
};
