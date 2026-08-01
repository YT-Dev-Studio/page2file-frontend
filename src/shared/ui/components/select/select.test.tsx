import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { describe, expect, test, vi } from "vitest";
import { Select } from "./select";

const options = [
  { label: "PDF", value: "pdf" },
  { label: "PowerPoint", value: "pptx" },
];

const getCombobox = (name: string): HTMLButtonElement => {
  const element = screen.getByRole("combobox", { name });

  if (!(element instanceof HTMLButtonElement)) {
    throw new Error("Expected a button-based combobox.");
  }

  return element;
};

const ControlledSelect = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}): ReactNode => {
  const [value, setValue] = useState("pdf");

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    setValue(event.currentTarget.value);
    onValueChange(event.currentTarget.value);
  };

  return (
    <Select
      label="Output format"
      onChange={handleChange}
      options={options}
      value={value}
    />
  );
};

describe("Select", () => {
  test("renders placeholder and selected values", () => {
    const handleChange = vi.fn();
    const { rerender } = render(
      <Select
        label="Output format"
        onChange={handleChange}
        options={options}
        placeholder="Choose a format"
        value=""
      />,
    );

    expect(getCombobox("Output format").textContent).toContain(
      "Choose a format",
    );

    rerender(
      <Select
        label="Output format"
        onChange={handleChange}
        options={options}
        placeholder="Choose a format"
        value="pdf"
      />,
    );
    expect(getCombobox("Output format").textContent).toContain("PDF");
  });

  test("supports styled listbox and keyboard selection", async () => {
    const handleValueChange = vi.fn();
    const user = userEvent.setup();

    render(<ControlledSelect onValueChange={handleValueChange} />);
    const combobox = getCombobox("Output format");

    await user.click(combobox);
    expect(screen.getByRole("listbox")).not.toBeNull();
    expect(
      screen.getByRole("option", { name: "PDF" }).getAttribute(
        "aria-selected",
      ),
    ).toBe("true");

    await user.keyboard("{ArrowDown}{Enter}");
    expect(combobox.textContent).toContain("PowerPoint");
    expect(handleValueChange).toHaveBeenCalledWith("pptx");
    expect(handleValueChange).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("listbox")).toBeNull();
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
    const combobox = getCombobox("Output format");

    await user.click(combobox);
    expect(combobox.disabled).toBe(true);
    expect(combobox.getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByRole("alert").textContent).toBe(
      "Select one export format",
    );
    expect(screen.queryByRole("listbox")).toBeNull();
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

  test("can hide the selected option icon", async () => {
    const user = userEvent.setup();
    const { rerender } = render(
      <Select
        label="Output format"
        options={options}
        value="pdf"
      />,
    );
    const combobox = getCombobox("Output format");

    await user.click(combobox);
    expect(
      screen.getByRole("option", { name: "PDF" }).querySelector("svg"),
    ).not.toBeNull();

    rerender(
      <Select
        label="Output format"
        options={options}
        showSelectedIcon={false}
        value="pdf"
      />,
    );
    expect(
      screen.getByRole("option", { name: "PDF" }).querySelector("svg"),
    ).toBeNull();
  });
});
