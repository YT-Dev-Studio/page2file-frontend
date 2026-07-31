import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { Select } from "./select";

const options = [
  { label: "PDF", value: "pdf" },
  { label: "PowerPoint", value: "pptx" },
];

const getSelect = (name: string): HTMLSelectElement => {
  const element = screen.getByRole("combobox", { name });

  if (!(element instanceof HTMLSelectElement)) {
    throw new Error("Expected a native HTMLSelectElement.");
  }

  return element;
};

describe("Select", () => {
  test("renders placeholder and selected native values", () => {
    const { rerender } = render(
      <Select
        label="Output format"
        options={options}
        placeholder="Choose a format"
        value=""
      />,
    );

    expect(getSelect("Output format").value).toBe("");
    expect(screen.getByRole("option", { name: "Choose a format" })).not.toBeNull();

    rerender(
      <Select
        label="Output format"
        options={options}
        placeholder="Choose a format"
        value="pdf"
      />,
    );
    expect(getSelect("Output format").value).toBe("pdf");
  });

  test("supports native change and keyboard interaction", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Select
        label="Output format"
        onChange={handleChange}
        options={options}
      />,
    );
    const select = getSelect("Output format");

    await user.selectOptions(select, "pptx");
    expect(select.value).toBe("pptx");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("wires error and disabled behavior", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Select
        disabled
        error="Select one export format"
        label="Output format"
        onChange={handleChange}
        options={options}
      />,
    );
    const select = getSelect("Output format");

    await user.selectOptions(select, "pptx");
    expect(select.disabled).toBe(true);
    expect(select.getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByRole("alert").textContent).toBe(
      "Select one export format",
    );
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("supports custom and omitted icons", () => {
    const { rerender } = render(
      <Select
        icon={<span data-testid="custom-icon">v</span>}
        label="Output format"
        options={options}
      />,
    );

    expect(screen.getByTestId("custom-icon")).not.toBeNull();

    rerender(
      <Select icon={null} label="Output format" options={options} />,
    );
    expect(document.querySelector("[data-select-icon]")).toBeNull();
  });
});
