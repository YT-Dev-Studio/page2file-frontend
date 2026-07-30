import "server-only";

import { NextResponse } from "next/server";
import type { JsonValue } from "./backend-client";

const noStoreHeaders = {
  "cache-control": "private, no-store, max-age=0",
  "x-robots-tag": "noindex, nofollow",
};

export const isJsonValue = (value: unknown): value is JsonValue => {
  if (
    value === null ||
    typeof value === "boolean" ||
    typeof value === "number" ||
    typeof value === "string"
  ) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }
  if (typeof value !== "object") {
    return false;
  }
  return Object.values(value).every(isJsonValue);
};

export const readJsonBody = async (
  request: Request,
): Promise<JsonValue | null> => {
  try {
    const value: unknown = await request.json();
    return isJsonValue(value) ? value : null;
  } catch {
    return null;
  }
};

export const invalidRequest = (): NextResponse =>
  NextResponse.json(
    { code: "INVALID_REQUEST", correlationId: "bff-invalid-request" },
    { status: 400, headers: noStoreHeaders },
  );

export const backendUnavailable = (): NextResponse =>
  NextResponse.json(
    { code: "INTERNAL_ERROR", correlationId: "bff-backend-unavailable" },
    { status: 503, headers: noStoreHeaders },
  );
