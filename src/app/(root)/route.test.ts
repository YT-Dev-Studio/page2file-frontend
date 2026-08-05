import { NextRequest } from "next/server";
import { describe, expect, test } from "vitest";
import { dynamic, GET } from "./route";

const createRequest = (
  headers: Record<string, string> = {},
): NextRequest =>
  new NextRequest("https://page2file.test/?utm_source=campaign", { headers });

describe("root locale route", (): void => {
  test("is request-dependent", (): void => {
    expect(dynamic).toBe("force-dynamic");
  });

  test("redirects a Russian visitor with request-dependent headers", (): void => {
    const response = GET(
      createRequest({
        "accept-language": "en-US,en;q=0.9",
        "cf-ipcountry": "RU",
      }),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://page2file.test/ru",
    );
    expect(response.headers.get("cache-control")).toBe("private, no-store");
    expect(response.headers.get("vary")).toBe(
      "Accept-Language, CF-IPCountry",
    );
  });

  test("falls back to English when request signals are missing", (): void => {
    const response = GET(createRequest());

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://page2file.test/en",
    );
  });

  test("redirects to any supported browser locale", (): void => {
    const response = GET(
      createRequest({
        "accept-language": "hu-HU,es;q=0.8,en;q=0.5",
        "cf-ipcountry": "HU",
      }),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://page2file.test/hu",
    );
  });
});
