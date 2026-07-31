import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { FileCard } from "./file-card";
import styles from "./file-card.module.css";

describe("FileCard", () => {
  test("renders semantic file metadata and format content", () => {
    render(
      <FileCard
        actionLabel="Download"
        filename="Report.pdf"
        format="pdf"
        meta="2.4 MB · Ready"
      />,
    );
    const card = screen.getByRole("article");

    expect(screen.getByText("Report.pdf").getAttribute("title")).toBe(
      "Report.pdf",
    );
    expect(screen.getByText("2.4 MB · Ready")).not.toBeNull();
    expect(screen.getByText("PDF")).not.toBeNull();
    expect(card.classList.contains(styles.pdf)).toBe(true);
  });

  test("invokes the native icon action with a filename-aware name", async () => {
    const handleAction = vi.fn();
    const user = userEvent.setup();

    render(
      <FileCard
        actionLabel="Download"
        filename="Report.pdf"
        meta="2.4 MB · Ready"
        onAction={handleAction}
      />,
    );
    const action = screen.getByRole("button", {
      name: "Download: Report.pdf",
    });

    expect(action.getAttribute("type")).toBe("button");
    await user.click(action);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  test("suppresses disabled actions and exposes persistent states", async () => {
    const handleAction = vi.fn();
    const user = userEvent.setup();

    render(
      <FileCard
        actionLabel="Download"
        disabled
        filename="Report.pdf"
        meta="2.4 MB · Ready"
        onAction={handleAction}
        selected
      />,
    );
    const card = screen.getByRole("article");
    const action = screen.getByRole("button", {
      name: "Download: Report.pdf",
    });

    await user.click(action);
    expect(handleAction).not.toHaveBeenCalled();
    expect(action.hasAttribute("disabled")).toBe(true);
    expect(card.dataset.disabled).toBe("true");
    expect(card.dataset.selected).toBe("true");
  });

  test("removes the entire action slot when hidden or null", () => {
    const { rerender } = render(
      <FileCard
        actionLabel="Download"
        filename="Report.pdf"
        meta="2.4 MB · Ready"
        showAction={false}
      />,
    );

    expect(screen.queryByRole("button")).toBeNull();

    rerender(
      <FileCard
        actionIcon={null}
        actionLabel="Download"
        filename="Report.pdf"
        meta="2.4 MB · Ready"
      />,
    );
    expect(screen.queryByRole("button")).toBeNull();
  });

  test("supports a custom action icon", () => {
    render(
      <FileCard
        actionIcon={<span data-testid="custom-icon">+</span>}
        actionLabel="Open"
        filename="Report.pdf"
        meta="2.4 MB · Ready"
      />,
    );

    expect(screen.getByTestId("custom-icon")).not.toBeNull();
  });
});
