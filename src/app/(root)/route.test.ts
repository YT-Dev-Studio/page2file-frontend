import { NextRequest } from "next/server";
import { describe, expect, test } from "vitest";
import { GET } from "./route";

const createRequest = (
  headers: Record<string, string> = {},
): NextRequest =>
  new NextRequest("https://page2file.test/?utm_source=campaign", { headers });

describe("root locale route", (): void => {
  test("always redirects to English and removes request query parameters", (): void => {
    const response = GET(
      createRequest({
        "accept-language": "ru-RU,ru;q=0.9",
        "cf-ipcountry": "RU",
      }),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://page2file.test/en",
    );
    expect(response.headers.get("vary")).toBeNull();
  });
});
