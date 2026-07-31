import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ProductAction } from "./product-action";
import styles from "./product-action.module.css";

describe("ProductAction", () => {
  test("renders an internal Next link with defaults", () => {
    render(<ProductAction href="/convert" label="Convert" />);
    const action = screen.getByRole("link", { name: "Convert" });

    expect(action.getAttribute("href")).toBe("/convert");
    expect(action.classList.contains(styles.master)).toBe(true);
    expect(action.querySelector("svg")).not.toBeNull();
  });

  test("renders a secured external anchor only when requested", () => {
    render(
      <ProductAction
        external
        href="https://example.com"
        label="Download"
      />,
    );
    const action = screen.getByRole("link", { name: "Download" });

    expect(action.getAttribute("target")).toBe("_blank");
    expect(action.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("removes navigation semantics while disabled", () => {
    render(
      <ProductAction
        disabled
        href="/convert"
        label="Convert"
      />,
    );
    const action = screen.getByText("Convert").parentElement;

    expect(screen.queryByRole("link")).toBeNull();
    expect(action?.getAttribute("aria-disabled")).toBe("true");
    expect(action?.getAttribute("href")).toBeNull();
  });

  test("supports accessible labels, format classes, and icon removal", () => {
    render(
      <ProductAction
        accessibleLabel="Download presentation"
        format="pptx"
        href="/download"
        label="Download"
        showIcon={false}
      />,
    );
    const action = screen.getByRole("link", {
      name: "Download presentation",
    });

    expect(action.classList.contains(styles.pptx)).toBe(true);
    expect(action.querySelector("[data-product-action-icon]")).toBeNull();
  });

  test("renders a custom icon and removes a null icon slot", () => {
    const { rerender } = render(
      <ProductAction
        href="/next"
        icon={<span data-testid="custom-icon">+</span>}
        label="Next"
      />,
    );

    expect(screen.getByTestId("custom-icon")).not.toBeNull();

    rerender(
      <ProductAction href="/next" icon={null} label="Next" />,
    );
    expect(
      document.querySelector("[data-product-action-icon]"),
    ).toBeNull();
  });
});
