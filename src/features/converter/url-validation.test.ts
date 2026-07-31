import { describe, expect, test } from "vitest";
import { validatePublicUrl } from "./url-validation";

describe("validatePublicUrl", () => {
  test.each([
    "http://example.com/path?query=1#section",
    "https://sub.example.com:8443/report",
    " https://пример.рф/страница#часть ",
  ])("accepts a public absolute HTTP(S) URL: %s", (value) => {
    const result = validatePublicUrl(value);

    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.normalizedUrl).toBe(value.trim());
    }
  });

  test.each([
    ["", "empty"],
    ["example.com", "malformed"],
    ["ftp://example.com/file", "insecure"],
    ["https://user:pass@example.com", "credentials"],
    ["https://localhost/path", "blockedHost"],
    ["http://192.168.1.10", "blockedHost"],
    ["https://[::1]/", "blockedHost"],
  ])("rejects %s with %s", (value, code) => {
    expect(validatePublicUrl(value)).toEqual({ valid: false, code });
  });
});
