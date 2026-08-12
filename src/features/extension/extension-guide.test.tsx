import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ExtensionGuide } from "./extension-guide";

describe("ExtensionGuide", () => {
  test("renders the English six-step current-tab workflow", () => {
    const { container } = render(<ExtensionGuide locale="en" />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "How to use the Page 2 File Chrome extension",
    );
    expect(screen.getByText("Open the source").closest("ol")?.querySelectorAll("li")).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "Supported browser chats" })).toBeTruthy();
    expect(container.textContent).toContain("latest 2,000 messages");
    expect(container.textContent).toContain("within two hours");
    expect(container.textContent).not.toMatch(/PowerPoint|PPTX|merge|split|reorder/i);
  });

  test("renders a localized Russian workflow with the same contract", () => {
    const { container } = render(<ExtensionGuide locale="ru" />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Как пользоваться расширением Page 2 File для Chrome",
    );
    expect(screen.getByText("Откройте материал").closest("ol")?.querySelectorAll("li")).toHaveLength(6);
    expect(container.textContent).toContain("2 000 последних сообщений");
    expect(container.textContent).toContain("не позднее чем через два часа");
    expect(container.textContent).not.toMatch(/PowerPoint|PPTX/i);
  });
});
