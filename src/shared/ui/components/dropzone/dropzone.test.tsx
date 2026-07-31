import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { Dropzone } from "./dropzone";

const createProps = () => ({
  accept: ["application/pdf", ".pdf"],
  description: "PDF · up to 25 MB",
  onFilesAccepted: vi.fn(),
  onFilesRejected: vi.fn(),
  title: "Drop files here",
});

const getInput = (): HTMLInputElement => {
  const input = screen.getByLabelText("Drop files here");

  if (!(input instanceof HTMLInputElement)) {
    throw new Error("Expected a native HTMLInputElement.");
  }

  return input;
};

describe("Dropzone", () => {
  test("uses one native file input with the requested contract", async () => {
    const user = userEvent.setup();
    const props = createProps();

    render(
      <Dropzone
        {...props}
        actionLabel="Browse files"
        multiple
      />,
    );
    const input = getInput();

    expect(input.type).toBe("file");
    expect(input.accept).toBe("application/pdf,.pdf");
    expect(input.multiple).toBe(true);
    expect(screen.getByText("Browse files")).not.toBeNull();

    await user.tab();
    expect(document.activeElement).toBe(input);
  });

  test("routes accepted and rejected dialog files separately", () => {
    const props = createProps();
    const accepted = new File(["pdf"], "report.pdf", {
      type: "application/pdf",
    });
    const rejected = new File(["text"], "notes.txt", {
      type: "text/plain",
    });

    render(<Dropzone {...props} multiple />);
    fireEvent.change(getInput(), {
      target: { files: [accepted, rejected] },
    });

    expect(props.onFilesAccepted).toHaveBeenCalledWith([accepted]);
    expect(props.onFilesRejected).toHaveBeenCalledWith([
      { file: rejected, reason: "unsupported-type" },
    ]);
  });

  test("uses the same validation pipeline for drop and clears active state", () => {
    const props = createProps();
    const file = new File(["pdf"], "report.pdf", {
      type: "application/pdf",
    });
    const dataTransfer = {
      dropEffect: "none",
      files: [file],
      types: ["Files"],
    };

    const { container } = render(<Dropzone {...props} />);
    const dropzone = container.firstElementChild;

    fireEvent.dragEnter(dropzone ?? container, { dataTransfer });
    expect(dropzone?.getAttribute("data-drop-active")).toBe("true");

    fireEvent.drop(dropzone ?? container, { dataTransfer });
    expect(props.onFilesAccepted).toHaveBeenCalledWith([file]);
    expect(dropzone?.getAttribute("data-drop-active")).toBeNull();
  });

  test("disabled blocks dialog and drop callbacks", () => {
    const props = createProps();
    const file = new File(["pdf"], "report.pdf", {
      type: "application/pdf",
    });
    const dataTransfer = {
      dropEffect: "none",
      files: [file],
      types: ["Files"],
    };

    const { container } = render(<Dropzone {...props} disabled />);
    fireEvent.change(getInput(), { target: { files: [file] } });
    fireEvent.drop(container.firstElementChild ?? container, {
      dataTransfer,
    });

    expect(getInput().disabled).toBe(true);
    expect(props.onFilesAccepted).not.toHaveBeenCalled();
    expect(props.onFilesRejected).not.toHaveBeenCalled();
  });

  test("wires errors and removes optional visual slots", () => {
    const props = createProps();

    render(
      <Dropzone
        {...props}
        error="report.pdf is too large"
        icon={null}
        showAction={false}
      />,
    );
    const input = getInput();
    const describedBy = input.getAttribute("aria-describedby") ?? "";

    expect(screen.getByRole("alert").textContent).toBe(
      "report.pdf is too large",
    );
    expect(describedBy).toContain(
      screen.getByRole("alert").getAttribute("id"),
    );
    expect(screen.queryByText("Browse files")).toBeNull();
    expect(document.querySelector("svg")).toBeNull();
  });
});
