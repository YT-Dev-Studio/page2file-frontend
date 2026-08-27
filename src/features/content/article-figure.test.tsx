import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { ArticleFigure } from "./article-figure";

const showModal = function showModal(this: HTMLDialogElement): void {
  this.setAttribute("open", "");
};

const closeDialog = function closeDialog(this: HTMLDialogElement): void {
  this.removeAttribute("open");
  this.dispatchEvent(new Event("close"));
};

const reducedMotionQuery = (): MediaQueryList =>
  ({ matches: true }) as MediaQueryList;

describe("ArticleFigure", () => {
  beforeEach(() => {
    Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
      configurable: true,
      value: showModal,
    });
    Object.defineProperty(HTMLDialogElement.prototype, "close", {
      configurable: true,
      value: closeDialog,
    });
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: reducedMotionQuery,
    });
  });

  afterEach(() => {
    Reflect.deleteProperty(HTMLDialogElement.prototype, "showModal");
    Reflect.deleteProperty(HTMLDialogElement.prototype, "close");
    Reflect.deleteProperty(window, "matchMedia");
  });

  test("keeps the caption associated with the preview and restores the trigger", () => {
    render(
      <ArticleFigure
        alt="Preview illustration"
        caption="A detailed caption that can wrap onto multiple lines."
        closeLabel="Close preview"
        openLabel="Open preview"
        src="/blog/demos/ai-chat-workflow.webp"
        step={1}
      />,
    );

    const trigger = screen.getByRole("button", { name: "Open preview" });
    const dialog = screen.getByRole("dialog", { hidden: true });
    const labelledBy = dialog.getAttribute("aria-labelledby");

    expect(labelledBy).toBeTruthy();
    expect(document.getElementById(labelledBy ?? "")?.textContent).toContain(
      "A detailed caption that can wrap onto multiple lines.",
    );

    fireEvent.click(trigger);
    expect(dialog.hasAttribute("open")).toBe(true);

    fireEvent.click(screen.getByRole("button", { name: "Close preview" }));
    expect(dialog.hasAttribute("open")).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });
});
