import { NextResponse } from "next/server";
import { requestBackend } from "@/shared/api/server/backend-client";
import { backendUnavailable } from "@/shared/api/server/route-utils";
import { ensureBffSession } from "@/shared/api/server/session";

export const dynamic = "force-dynamic";

export const GET = async (): Promise<NextResponse> => {
  try {
    const { session, csrf } = await ensureBffSession();
    const response = await requestBackend({
      method: "POST",
      path: "/web/v1/sessions",
      session,
    });
    if (!response.ok) {
      return NextResponse.json(
        { code: "UNAUTHORIZED", correlationId: "bff-session-backend" },
        {
          status: response.status,
          headers: { "cache-control": "private, no-store, max-age=0" },
        },
      );
    }
    return NextResponse.json(
      { csrf, expiresInSeconds: 3600 },
      {
        status: 201,
        headers: { "cache-control": "private, no-store, max-age=0" },
      },
    );
  } catch {
    return backendUnavailable();
  }
};
