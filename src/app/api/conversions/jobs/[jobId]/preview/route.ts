import type { NextRequest } from "next/server";
import type { NextResponse } from "next/server";
import { isRealJobId } from "@/shared/api/backend-contract";
import { requestBackend } from "@/shared/api/server/backend-client";
import {
  csrfFailure,
  jsonFromBackend,
  sessionFailure,
} from "@/shared/api/server/bff-response";
import {
  backendUnavailable,
  invalidRequest,
  readJsonBody,
} from "@/shared/api/server/route-utils";
import { readBffSession, validateCsrf } from "@/shared/api/server/session";

export const dynamic = "force-dynamic";

export const PATCH = async (
  request: NextRequest,
  context: { params: Promise<{ jobId: string }> },
): Promise<NextResponse> => {
  const { jobId } = await context.params;
  if (!isRealJobId(jobId)) return invalidRequest();
  if (!(await validateCsrf(request))) return csrfFailure();
  const session = await readBffSession();
  if (!session) return sessionFailure();
  const body = await readJsonBody(request);
  if (body === null) return invalidRequest();
  try {
    return jsonFromBackend(
      await requestBackend({
        method: "PATCH",
        path: `/web/v1/jobs/${jobId}/preview`,
        session,
        body,
      }),
    );
  } catch {
    return backendUnavailable();
  }
};
