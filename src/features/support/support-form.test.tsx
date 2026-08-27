import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";
import { getSupportCopy } from "./support-copy";
import { SupportForm } from "./support-form";

const analyticsMocks = vi.hoisted(() => ({
  trackAnalyticsEvent: vi.fn(),
}));

vi.mock("@/features/analytics/analytics-events", () => analyticsMocks);

afterEach((): void => {
  analyticsMocks.trackAnalyticsEvent.mockReset();
  vi.unstubAllGlobals();
});

describe("support form", (): void => {
  test("keeps submission disabled when Telegram is unavailable", async (): Promise<void> => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ enabled: false }), { status: 200 }),
      ),
    );

    render(<SupportForm copy={getSupportCopy("en")} locale="en" />);

    const button = await screen.findByRole("button", {
      name: "Sending unavailable",
    });
    expect((button as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByRole("link", { name: "support@page2file.com" })).toBeTruthy();
  });

  test("validates fields before sending", async (): Promise<void> => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({ csrf: "csrf-token", enabled: true }),
          { status: 200 },
        ),
      ),
    );
    const user = userEvent.setup();
    render(<SupportForm copy={getSupportCopy("en")} locale="en" />);
    const button = await screen.findByRole("button", { name: "Send comment" });

    await user.click(button);

    expect(screen.getByText("Enter a valid email address.")).toBeTruthy();
    expect(
      screen.getByText("Enter a comment of up to 3,500 characters."),
    ).toBeTruthy();
  });

  test("clears the form after a successful submission", async (): Promise<void> => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({ csrf: "csrf-token", enabled: true }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: true }), { status: 200 }),
      );
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<SupportForm copy={getSupportCopy("en")} locale="en" />);

    const email = await screen.findByRole("textbox", { name: "Email" });
    const comment = screen.getByRole("textbox", { name: "Comment" });
    await user.type(email, "sender@example.com");
    await user.type(comment, "A useful comment");
    await user.click(screen.getByRole("button", { name: "Send comment" }));

    await waitFor((): void => {
      expect(screen.getByText("Your feedback was sent. Thank you.")).toBeTruthy();
    });
    expect((email as HTMLInputElement).value).toBe("");
    expect((comment as HTMLTextAreaElement).value).toBe("");
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(analyticsMocks.trackAnalyticsEvent).toHaveBeenCalledWith({
      locale: "en",
      name: "support_feedback_submit",
    });
    expect(JSON.stringify(analyticsMocks.trackAnalyticsEvent.mock.calls)).not.toMatch(
      /sender@example\.com|A useful comment/,
    );
  });

  test("preserves input when delivery fails", async (): Promise<void> => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({ csrf: "csrf-token", enabled: true }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ ok: false }), { status: 502 }),
      );
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<SupportForm copy={getSupportCopy("en")} locale="en" />);

    const email = await screen.findByRole("textbox", { name: "Email" });
    const comment = screen.getByRole("textbox", { name: "Comment" });
    await user.type(email, "sender@example.com");
    await user.type(comment, "Keep this text");
    await user.click(screen.getByRole("button", { name: "Send comment" }));

    await waitFor((): void => {
      expect(screen.getByText(/We could not send the comment/)).toBeTruthy();
    });
    expect((email as HTMLInputElement).value).toBe("sender@example.com");
    expect((comment as HTMLTextAreaElement).value).toBe("Keep this text");
  });
});
