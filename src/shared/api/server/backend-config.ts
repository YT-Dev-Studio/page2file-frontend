import "server-only";

type BackendConfig = {
  baseUrl: URL;
  keyId: string;
  hmacSecret: string;
};

const parseBackendUrl = (value: string | undefined): URL => {
  const candidate = value?.trim() || "http://127.0.0.1:4100";
  const url = new URL(candidate);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("PAGE2FILE_BACKEND_URL must use HTTP or HTTPS.");
  }
  if (url.username || url.password) {
    throw new Error("PAGE2FILE_BACKEND_URL must not contain credentials.");
  }
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return url;
};

export const getBackendConfig = (): BackendConfig => {
  const keyId = process.env.PAGE2FILE_WEB_KEY_ID?.trim() || "web-v1";
  const hmacSecret =
    process.env.PAGE2FILE_WEB_HMAC_SECRET?.trim() ||
    "development-only-service-secret";
  if (
    process.env.NODE_ENV === "production" &&
    (hmacSecret.includes("development-only") || hmacSecret.length < 32)
  ) {
    throw new Error("Production requires PAGE2FILE_WEB_HMAC_SECRET.");
  }
  return {
    baseUrl: parseBackendUrl(process.env.PAGE2FILE_BACKEND_URL),
    keyId,
    hmacSecret,
  };
};
