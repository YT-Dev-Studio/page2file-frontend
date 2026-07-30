import "server-only";

import {
  createHash,
  createHmac,
  randomBytes,
} from "node:crypto";
import { getBackendConfig } from "./backend-config";

export type JsonValue =
  | null
  | boolean
  | number
  | string
  | ReadonlyArray<JsonValue>
  | { readonly [key: string]: JsonValue };

const canonicalJson = (value: JsonValue): string => {
  if (
    value === null ||
    typeof value === "boolean" ||
    typeof value === "number" ||
    typeof value === "string"
  ) {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJson).join(",")}]`;
  }
  const entries = Object.entries(value).sort(([left], [right]) =>
    left < right ? -1 : left > right ? 1 : 0,
  );
  return `{${entries
    .map(([key, item]) => `${JSON.stringify(key)}:${canonicalJson(item)}`)
    .join(",")}}`;
};

const sha256 = (value: string): string =>
  createHash("sha256").update(value).digest("hex");

export const requestBackend = async ({
  method,
  path,
  session,
  body,
}: {
  method: "GET" | "POST" | "PATCH";
  path: string;
  session: string;
  body?: JsonValue;
}): Promise<Response> => {
  const canonicalPath = path.split("?")[0] ?? path;
  if (!canonicalPath.startsWith("/web/v1/")) {
    throw new Error("Backend path is outside the web API boundary.");
  }
  const config = getBackendConfig();
  const timestamp = String(Date.now());
  const nonce = randomBytes(24).toString("base64url");
  const serializedBody = body === undefined ? "" : canonicalJson(body);
  const canonical = [
    method,
    canonicalPath,
    timestamp,
    nonce,
    sha256(session),
    sha256(serializedBody),
  ].join("\n");
  const signature = createHmac("sha256", config.hmacSecret)
    .update(canonical)
    .digest("base64url");
  return fetch(new URL(path, config.baseUrl), {
    method,
    cache: "no-store",
    headers: {
      accept: "application/json",
      ...(body === undefined ? {} : { "content-type": "application/json" }),
      "x-p2f-key-id": config.keyId,
      "x-p2f-timestamp": timestamp,
      "x-p2f-nonce": nonce,
      "x-p2f-session": sha256(session),
      "x-p2f-signature": signature,
    },
    body: body === undefined ? undefined : serializedBody,
    signal: AbortSignal.timeout(95_000),
  });
};
