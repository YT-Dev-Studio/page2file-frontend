import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FormatBadge } from "./format-badge";
import styles from "./format-badge.module.css";

describe("FormatBadge", () => {
  test.each([
    ["master", "Master"],
    ["pdf", "PDF"],
    ["pptx", "PPTX"],
    ["slides", "Slides"],
  ] as const)("maps %s to %s", (format, label) => {
    render(<FormatBadge format={format} />);
    const badge = screen.getByText(label);

    expect(badge.tagName).toBe("SPAN");
    expect(badge.classList.contains(styles[format])).toBe(true);
    expect(badge.classList.contains(styles.solid)).toBe(true);
  });

  test("supports subtle styling and native span attributes", () => {
    render(
      <FormatBadge
        className="consumer-class"
        data-testid="badge"
        format="pdf"
        style="subtle"
      />,
    );
    const badge = screen.getByTestId("badge");

    expect(badge.classList.contains("consumer-class")).toBe(true);
    expect(badge.classList.contains(styles.subtle)).toBe(true);
    expect(badge.getAttribute("role")).toBeNull();
  });
});
