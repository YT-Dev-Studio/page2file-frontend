import "server-only";

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const SESSION_COOKIE = "p2f_session";
export const CSRF_COOKIE = "p2f_csrf";

const cookieOptions = {
  path: "/",
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60,
};

const randomToken = (): string => randomBytes(32).toString("base64url");

const constantEqual = (left: string, right: string): boolean => {
  const leftHash = createHash("sha256").update(left).digest();
  const rightHash = createHash("sha256").update(right).digest();
  return timingSafeEqual(leftHash, rightHash);
};

export const ensureBffSession = async (): Promise<{
  session: string;
  csrf: string;
}> => {
  const store = await cookies();
  const existingSession = store.get(SESSION_COOKIE)?.value;
  const existingCsrf = store.get(CSRF_COOKIE)?.value;
  const session = existingSession || randomToken();
  const csrf = existingCsrf || randomToken();
  if (!existingSession) {
    store.set(SESSION_COOKIE, session, {
      ...cookieOptions,
      httpOnly: true,
    });
  }
  if (!existingCsrf) {
    store.set(CSRF_COOKIE, csrf, {
      ...cookieOptions,
      httpOnly: false,
    });
  }
  return { session, csrf };
};

export const readBffSession = async (): Promise<string | null> => {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value ?? null;
};

export const validateCsrf = async (request: NextRequest): Promise<boolean> => {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) {
    return false;
  }
  let originUrl: URL;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }
  const forwardedProtocol = request.headers
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol = forwardedProtocol || request.nextUrl.protocol.slice(0, -1);
  if (originUrl.host !== host || originUrl.protocol !== `${protocol}:`) {
    return false;
  }
  const store = await cookies();
  const cookieToken = store.get(CSRF_COOKIE)?.value;
  const headerToken = request.headers.get("x-p2f-csrf");
  return Boolean(
    cookieToken &&
      headerToken &&
      constantEqual(cookieToken, headerToken),
  );
};
