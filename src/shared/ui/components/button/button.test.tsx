import { createRef, type ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { Button } from "./button";
import styles from "./button.module.css";

const getButton = (name: string | RegExp = "Button"): HTMLButtonElement => {
  const element = screen.getByRole("button", { name });

  if (!(element instanceof HTMLButtonElement)) {
    throw new Error("Expected a native HTMLButtonElement.");
  }

  return element;
};

const buttonTestSuite = (): void => {
  const rendersDefaults = (): void => {
    render(<Button />);
    const button = getButton();

    expect(button.type).toBe("button");
    expect(button.textContent).toBe("Button");
    expect(button.classList.contains(styles.small)).toBe(true);
    expect(button.classList.contains(styles.primary)).toBe(true);
    expect(button.querySelector("svg")).not.toBeNull();
  };

  const forwardsNativePropsAndRef = (): void => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Button
        aria-label="Save document"
        className="consumer-class"
        data-tracking-id="save"
        name="save"
        ref={ref}
        type="submit"
      >
        Save
      </Button>,
    );
    const button = getButton("Save document");

    expect(button.type).toBe("submit");
    expect(button.name).toBe("save");
    expect(button.dataset.trackingId).toBe("save");
    expect(button.classList.contains("consumer-class")).toBe(true);
    expect(ref.current).toBe(button);
  };

  const handlesPointerActivation = async (): Promise<void> => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Run</Button>);
    await user.click(getButton("Run"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  };

  const suppressesDisabledActivation = async (): Promise<void> => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button disabled onClick={handleClick}>
        Run
      </Button>,
    );
    await user.click(getButton("Run"));

    expect(handleClick).not.toHaveBeenCalled();
  };

  const supportsKeyboardFocusAndActivation = async (): Promise<void> => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Continue</Button>);
    const button = getButton("Continue");

    await user.tab();
    expect(document.activeElement).toBe(button);

    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(handleClick).toHaveBeenCalledTimes(2);
  };

  const appliesSizeAndVariantClasses = (): void => {
    render(
      <Button size="large" variant="secondary">
        Export
      </Button>,
    );
    const button = getButton("Export");

    expect(button.classList.contains(styles.large)).toBe(true);
    expect(button.classList.contains(styles.secondary)).toBe(true);
  };

  const rendersCustomIcon = (): void => {
    const customIcon: ReactNode = <span data-testid="custom-icon">+</span>;

    const { rerender } = render(<Button icon={customIcon}>Add</Button>);

    expect(screen.getByTestId("custom-icon")).not.toBeNull();
    expect(getButton("Add").querySelector("svg")).toBeNull();

    rerender(
      <Button icon={customIcon} iconPosition="start">
        Add
      </Button>,
    );
    const buttonChildren = Array.from(getButton("Add").children);

    expect(buttonChildren[0].getAttribute("data-button-icon")).not.toBeNull();
    expect(buttonChildren[1].textContent).toBe("Add");
  };

  const removesHiddenOrNullIconWrappers = (): void => {
    const { rerender } = render(<Button showIcon={false}>Plain</Button>);

    expect(getButton("Plain").querySelector("[data-button-icon]")).toBeNull();

    rerender(<Button icon={null}>Plain</Button>);
    expect(getButton("Plain").querySelector("[data-button-icon]")).toBeNull();
  };

  const hasNoNestedInteractiveElements = (): void => {
    render(<Button>Safe action</Button>);
    const nestedInteractiveElement = getButton("Safe action").querySelector(
      "a, button, input, select, textarea, [role='button'], [role='link']",
    );

    expect(nestedInteractiveElement).toBeNull();
  };

  test("renders native defaults and the default icon", rendersDefaults);
  test("forwards native attributes, className, and ref", forwardsNativePropsAndRef);
  test("handles pointer activation", handlesPointerActivation);
  test("suppresses activation while disabled", suppressesDisabledActivation);
  test("supports keyboard focus and activation", supportsKeyboardFocusAndActivation);
  test("applies size and variant classes", appliesSizeAndVariantClasses);
  test("renders a custom icon", rendersCustomIcon);
  test("removes the icon wrapper when hidden or null", removesHiddenOrNullIconWrappers);
  test("does not nest interactive elements by default", hasNoNestedInteractiveElements);
};

describe("Button", buttonTestSuite);
