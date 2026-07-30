import type { NextRequest } from "next/server";
import {
  isRealJobId,
  isSafeSectionId,
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
  context: {
    params: Promise<{ jobId: string; sectionId: string }>;
  },
): Promise<Response> => {
  const { jobId, sectionId } = await context.params;
  if (!isRealJobId(jobId) || !isSafeSectionId(sectionId)) {
    return invalidRequest();
  }
  const session = await readBffSession();
  if (!session) return sessionFailure();
  try {
    return proxyBinary(
      await requestBackend({
        method: "GET",
        path: `/web/v1/jobs/${jobId}/thumbnails/${sectionId}`,
        session,
      }),
    );
  } catch {
    return backendUnavailable();
  }
};
