import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { TextField } from "./text-field";

const getInput = (name: string): HTMLInputElement => {
  const element = screen.getByRole("textbox", { name });

  if (!(element instanceof HTMLInputElement)) {
    throw new Error("Expected a native HTMLInputElement.");
  }

  return element;
};

describe("TextField", () => {
  test("links the label, helper, native props, and ref", () => {
    const ref = createRef<HTMLInputElement>();

    render(
      <TextField
        data-tracking-id="url"
        helper="Use a public URL"
        label="Website URL"
        ref={ref}
      />,
    );
    const input = getInput("Website URL");
    const helperId = input.getAttribute("aria-describedby");

    expect(input.dataset.trackingId).toBe("url");
    expect(ref.current).toBe(input);
    expect(helperId).not.toBeNull();
    expect(document.getElementById(helperId ?? "")?.textContent).toBe(
      "Use a public URL",
    );
  });

  test("uses error semantics and preserves consumer descriptions", () => {
    render(
      <>
        <span id="consumer-description">Consumer note</span>
        <TextField
          aria-describedby="consumer-description"
          error="Enter a valid URL"
          helper="Use a public URL"
          label="Website URL"
        />
      </>,
    );
    const input = getInput("Website URL");
    const describedBy = input.getAttribute("aria-describedby") ?? "";

    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(describedBy).toContain("consumer-description");
    expect(screen.getByRole("alert").textContent).toBe("Enter a valid URL");
    expect(screen.queryByText("Use a public URL")).toBeNull();
  });

  test("supports controlled input and a visually hidden label", async () => {
    const user = userEvent.setup();

    render(
      <TextField
        label="Website URL"
        onChange={() => undefined}
        showLabel={false}
      />,
    );
    const input = getInput("Website URL");

    await user.type(input, "https://example.com");
    expect(input.value).toBe("https://example.com");
  });
});
