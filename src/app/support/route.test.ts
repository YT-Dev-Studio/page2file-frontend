import { NextRequest } from "next/server";
import { describe, expect, test } from "vitest";
import { GET } from "./route";

describe("support locale route", (): void => {
  test("redirects to the English support page without query parameters", (): void => {
    const request = new NextRequest(
      "https://page2file.test/support?utm_source=campaign",
    );

    const response = GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://page2file.test/en/support",
    );
  });
});
