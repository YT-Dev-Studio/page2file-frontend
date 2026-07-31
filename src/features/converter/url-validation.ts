export type UrlValidationCode =
  | "empty"
  | "tooLong"
  | "malformed"
  | "insecure"
  | "credentials"
  | "blockedHost";

export type UrlValidationResult =
  | { valid: true; normalizedUrl: string }
  | { valid: false; code: UrlValidationCode };

const MAX_URL_LENGTH = 2048;
const BLOCKED_HOSTS: ReadonlyArray<string> = [
  "localhost",
  "metadata.google.internal",
  "metadata.google",
  "instance-data",
];

const isBlockedIpv4 = (hostname: string): boolean => {
  const parts = hostname.split(".").map(Number);
  if (parts.length !== 4 || parts.some(Number.isNaN)) {
    return false;
  }
  const [first, second] = parts;
  return (
    first === 0 ||
    first === 10 ||
    first === 127 ||
    first >= 224 ||
    (first === 100 && second >= 64 && second <= 127) ||
    (first === 169 && second === 254) ||
    (first === 172 && second >= 16 && second <= 31) ||
    (first === 192 && second === 168) ||
    (first === 198 && (second === 18 || second === 19))
  );
};

const isBlockedIpv6 = (hostname: string): boolean => {
  const normalized = hostname.replace(/^\[|\]$/g, "").toLowerCase();
  return (
    normalized === "::1" ||
    normalized === "::" ||
    normalized.startsWith("fc") ||
    normalized.startsWith("fd") ||
    normalized.startsWith("fe8") ||
    normalized.startsWith("fe9") ||
    normalized.startsWith("fea") ||
    normalized.startsWith("feb") ||
    normalized.startsWith("::ffff:")
  );
};

const isBlockedHostname = (hostname: string): boolean => {
  const normalized = hostname.toLowerCase();
  return (
    BLOCKED_HOSTS.includes(normalized) ||
    normalized.endsWith(".local") ||
    normalized.endsWith(".localhost") ||
    normalized.endsWith(".internal") ||
    isBlockedIpv4(normalized) ||
    isBlockedIpv6(normalized)
  );
};

export const validatePublicUrl = (value: string): UrlValidationResult => {
  const trimmedValue = value.trim();
  if (!trimmedValue) {
    return { valid: false, code: "empty" };
  }
  if (trimmedValue.length > MAX_URL_LENGTH) {
    return { valid: false, code: "tooLong" };
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(trimmedValue);
  } catch {
    return { valid: false, code: "malformed" };
  }

  if (
    parsedUrl.protocol !== "http:" &&
    parsedUrl.protocol !== "https:"
  ) {
    return { valid: false, code: "insecure" };
  }
  if (parsedUrl.username || parsedUrl.password) {
    return { valid: false, code: "credentials" };
  }
  if (isBlockedHostname(parsedUrl.hostname)) {
    return { valid: false, code: "blockedHost" };
  }

  return { valid: true, normalizedUrl: trimmedValue };
};
