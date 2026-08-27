import { afterEach, describe, expect, test, vi } from "vitest";
import {
  buildFeedbackMessage,
  getSupportConfig,
  normalizeFeedback,
  sendFeedbackToTelegram,
} from "./support-server";

const originalEnvironment = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_GROUP_ID: process.env.TELEGRAM_GROUP_ID,
  TELEGRAM_TOPIC_ID: process.env.TELEGRAM_TOPIC_ID,
};

const restoreEnvironmentValue = (
  name: keyof typeof originalEnvironment,
): void => {
  const value = originalEnvironment[name];
  if (value === undefined) delete process.env[name];
  else process.env[name] = value;
};

afterEach((): void => {
  restoreEnvironmentValue("TELEGRAM_BOT_TOKEN");
  restoreEnvironmentValue("TELEGRAM_GROUP_ID");
  restoreEnvironmentValue("TELEGRAM_TOPIC_ID");
  vi.unstubAllGlobals();
});

describe("support Telegram configuration", (): void => {
  test("returns null for missing, partial, or invalid configuration", (): void => {
    delete process.env.TELEGRAM_BOT_TOKEN;
    delete process.env.TELEGRAM_GROUP_ID;
    delete process.env.TELEGRAM_TOPIC_ID;
    expect(getSupportConfig()).toBeNull();

    process.env.TELEGRAM_BOT_TOKEN = "123:token";
    process.env.TELEGRAM_GROUP_ID = "-100123";
    expect(getSupportConfig()).toBeNull();

    process.env.TELEGRAM_TOPIC_ID = "0";
    expect(getSupportConfig()).toBeNull();

    process.env.TELEGRAM_GROUP_ID = "0";
    process.env.TELEGRAM_TOPIC_ID = "42";
    expect(getSupportConfig()).toBeNull();
  });

  test("accepts a complete server-only configuration", (): void => {
    process.env.TELEGRAM_BOT_TOKEN = "123:token_value";
    process.env.TELEGRAM_GROUP_ID = "-100123";
    process.env.TELEGRAM_TOPIC_ID = "42";

    expect(getSupportConfig()).toEqual({
      botToken: "123:token_value",
      groupId: -100123,
      topicId: 42,
    });
  });

  test("converts a Telegram Web supergroup ID to the Bot API chat ID", (): void => {
    process.env.TELEGRAM_BOT_TOKEN = "123:token_value";
    process.env.TELEGRAM_GROUP_ID = "1673304144";
    process.env.TELEGRAM_TOPIC_ID = "1813";

    expect(getSupportConfig()).toEqual({
      botToken: "123:token_value",
      groupId: -1001673304144,
      topicId: 1813,
    });
  });
});

describe("support feedback payload", (): void => {
  test("normalizes line endings and rejects invalid fields", (): void => {
    expect(
      normalizeFeedback({
        comment: "  First line\r\nSecond line  ",
        email: "  user@example.com  ",
      }),
    ).toEqual({
      comment: "First line\nSecond line",
      email: "user@example.com",
    });
    expect(normalizeFeedback({ comment: "Text", email: "invalid" })).toBeNull();
    expect(
      normalizeFeedback({ comment: "x".repeat(3501), email: "user@example.com" }),
    ).toBeNull();
  });

  test("builds the exact requested Telegram message", (): void => {
    expect(
      buildFeedbackMessage({
        comment: "Основной текст",
        email: "sender@example.com",
      }),
    ).toBe(
      "Новый фидбэк от sender@example.com\n—————————————\nОсновной текст\n\ncc: @Ytvee",
    );
  });

  test("sends feedback to the configured group topic", async (): Promise<void> => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        headers: { "content-type": "application/json" },
        status: 200,
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      sendFeedbackToTelegram(
        { botToken: "123:token", groupId: -100456, topicId: 77 },
        { comment: "Feedback", email: "sender@example.com" },
      ),
    ).resolves.toBe(true);

    expect(fetchMock).toHaveBeenCalledOnce();
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://api.telegram.org/bot123:token/sendMessage");
    expect(init.method).toBe("POST");
    expect(JSON.parse(String(init.body))).toEqual({
      chat_id: -100456,
      link_preview_options: { is_disabled: true },
      message_thread_id: 77,
      text: "Новый фидбэк от sender@example.com\n—————————————\nFeedback\n\ncc: @Ytvee",
    });
  });
});
