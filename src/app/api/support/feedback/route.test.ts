import { NextRequest } from "next/server";
import { afterEach, describe, expect, test, vi } from "vitest";

const sessionMocks = vi.hoisted(() => ({
  ensureBffSession: vi.fn(),
  validateCsrf: vi.fn(),
}));

vi.mock("@/shared/api/server/session", () => sessionMocks);

import { GET, POST } from "./route";

const setValidEnvironment = (): void => {
  process.env.TELEGRAM_BOT_TOKEN = "123:token";
  process.env.TELEGRAM_GROUP_ID = "-100123";
  process.env.TELEGRAM_TOPIC_ID = "42";
};

const createPostRequest = (body: unknown): NextRequest =>
  new NextRequest("https://page2file.test/api/support/feedback", {
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      origin: "https://page2file.test",
      "x-p2f-csrf": "csrf-token",
    },
    method: "POST",
  });

afterEach((): void => {
  delete process.env.TELEGRAM_BOT_TOKEN;
  delete process.env.TELEGRAM_GROUP_ID;
  delete process.env.TELEGRAM_TOPIC_ID;
  sessionMocks.ensureBffSession.mockReset();
  sessionMocks.validateCsrf.mockReset();
  vi.unstubAllGlobals();
});

describe("support feedback API", (): void => {
  test("returns a disabled status without leaking configuration", async (): Promise<void> => {
    process.env.TELEGRAM_BOT_TOKEN = "123:secret-token";

    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ enabled: false });
    expect(JSON.stringify(body)).not.toContain("secret-token");
    expect(sessionMocks.ensureBffSession).not.toHaveBeenCalled();
  });

  test("returns availability and CSRF for complete configuration", async (): Promise<void> => {
    setValidEnvironment();
    sessionMocks.ensureBffSession.mockResolvedValue({
      csrf: "csrf-token",
      session: "session-token",
    });

    const response = await GET();

    expect(await response.json()).toEqual({
      csrf: "csrf-token",
      enabled: true,
    });
    expect(response.headers.get("cache-control")).toContain("no-store");
  });

  test("rejects invalid data and a failed CSRF check", async (): Promise<void> => {
    setValidEnvironment();
    sessionMocks.validateCsrf.mockResolvedValue(false);
    const forbidden = await POST(
      createPostRequest({ comment: "Feedback", email: "sender@example.com" }),
    );
    expect(forbidden.status).toBe(403);

    sessionMocks.validateCsrf.mockResolvedValue(true);
    const invalid = await POST(
      createPostRequest({ comment: "", email: "not-an-email" }),
    );
    expect(invalid.status).toBe(400);
  });

  test("silently accepts honeypot submissions without Telegram", async (): Promise<void> => {
    setValidEnvironment();
    sessionMocks.validateCsrf.mockResolvedValue(true);
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const response = await POST(
      createPostRequest({
        comment: "Feedback",
        email: "sender@example.com",
        website: "https://spam.test",
      }),
    );

    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("returns a recoverable error when Telegram fails", async (): Promise<void> => {
    setValidEnvironment();
    sessionMocks.validateCsrf.mockResolvedValue(true);
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("timeout")));

    const response = await POST(
      createPostRequest({ comment: "Feedback", email: "sender@example.com" }),
    );

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({
      code: "DELIVERY_FAILED",
      ok: false,
    });
  });
});
