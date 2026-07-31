import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Progress } from "./progress";
import styles from "./progress.module.css";

const getProgress = (name: string): HTMLProgressElement => {
  const element = screen.getByRole("progressbar", { name });

  if (!(element instanceof HTMLProgressElement)) {
    throw new Error("Expected a native HTMLProgressElement.");
  }

  return element;
};

describe("Progress", () => {
  test("renders determinate native progress and visible value", () => {
    render(<Progress label="Converting" value={75} />);
    const progress = getProgress("Converting");

    expect(progress.max).toBe(100);
    expect(progress.value).toBe(75);
    expect(progress.getAttribute("aria-valuemin")).toBe("0");
    expect(progress.getAttribute("aria-valuemax")).toBe("100");
    expect(progress.getAttribute("aria-valuenow")).toBe("75");
    expect(screen.getByText("75%")).not.toBeNull();
  });

  test("supports indeterminate and hidden-value modes", () => {
    const { rerender } = render(<Progress label="Preparing" />);
    const progress = getProgress("Preparing");

    expect(progress.hasAttribute("value")).toBe(false);
    expect(progress.hasAttribute("aria-valuenow")).toBe(false);
    expect(screen.queryByText(/%/)).toBeNull();

    rerender(<Progress label="Converting" showValue={false} value={25} />);
    expect(screen.queryByText("25%")).toBeNull();
  });

  test.each(["master", "pdf", "pptx", "slides"] as const)(
    "uses the %s format class",
    (format) => {
      render(<Progress format={format} label="Converting" value={50} />);

      expect(
        getProgress("Converting").parentElement?.classList.contains(
          styles[format],
        ),
      ).toBe(true);
    },
  );

  test("rejects invalid values instead of silently clamping", () => {
    expect(() =>
      render(<Progress label="Invalid" value={101} />),
    ).toThrow(RangeError);
  });
});
