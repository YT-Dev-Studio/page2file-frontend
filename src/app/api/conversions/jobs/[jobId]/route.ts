import type { NextRequest } from "next/server";
import type { NextResponse } from "next/server";
import { isRealJobId } from "@/shared/api/backend-contract";
import { requestBackend } from "@/shared/api/server/backend-client";
import {
  jsonFromBackend,
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
): Promise<NextResponse> => {
  const { jobId } = await context.params;
  if (!isRealJobId(jobId)) return invalidRequest();
  const session = await readBffSession();
  if (!session) return sessionFailure();
  try {
    return jsonFromBackend(
      await requestBackend({
        method: "GET",
        path: `/web/v1/jobs/${jobId}`,
        session,
      }),
    );
  } catch {
    return backendUnavailable();
  }
};
