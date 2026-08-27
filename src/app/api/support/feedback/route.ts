import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getSupportConfig,
  hasFilledHoneypot,
  normalizeFeedback,
  sendFeedbackToTelegram,
} from "@/features/support/support-server";
import { ensureBffSession, validateCsrf } from "@/shared/api/server/session";

export const dynamic = "force-dynamic";

const noStoreHeaders = {
  "cache-control": "private, no-store, max-age=0",
  "x-robots-tag": "noindex, nofollow",
};

const jsonResponse = (
  body: Record<string, boolean | string>,
  status = 200,
): NextResponse =>
  NextResponse.json(body, { headers: noStoreHeaders, status });

const readRequestBody = async (request: Request): Promise<unknown | null> => {
  try {
    return await request.json();
  } catch {
    return null;
  }
};

export const GET = async (): Promise<NextResponse> => {
  if (!getSupportConfig()) return jsonResponse({ enabled: false });

  try {
    const { csrf } = await ensureBffSession();
    return jsonResponse({ csrf, enabled: true });
  } catch {
    return jsonResponse({ enabled: false });
  }
};

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const config = getSupportConfig();
  if (!config) return jsonResponse({ code: "UNAVAILABLE", ok: false }, 503);
  if (!(await validateCsrf(request))) {
    return jsonResponse({ code: "FORBIDDEN", ok: false }, 403);
  }

  const body = await readRequestBody(request);
  if (body === null) {
    return jsonResponse({ code: "INVALID_REQUEST", ok: false }, 400);
  }
  if (hasFilledHoneypot(body)) return jsonResponse({ ok: true });

  const feedback = normalizeFeedback(body);
  if (!feedback) {
    return jsonResponse({ code: "INVALID_REQUEST", ok: false }, 400);
  }

  try {
    const delivered = await sendFeedbackToTelegram(config, feedback);
    return delivered
      ? jsonResponse({ ok: true })
      : jsonResponse({ code: "DELIVERY_FAILED", ok: false }, 502);
  } catch {
    return jsonResponse({ code: "DELIVERY_FAILED", ok: false }, 502);
  }
};
