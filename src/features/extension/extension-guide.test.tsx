import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ExtensionGuide } from "./extension-guide";

describe("ExtensionGuide", () => {
  test("renders the English six-step current-tab workflow", () => {
    const { container } = render(<ExtensionGuide locale="en" />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "How to use the Page 2 PDF Chrome extension",
    );
    expect(screen.getByText("Open a website").closest("ol")?.querySelectorAll("li")).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "Supported browser chats" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "AI chats" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Messengers" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Conditional compatibility" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Automatic cleanup" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "project archive" }).getAttribute("href")).toBe(
      "/en/blog/preserve-webpage-links-forms-text",
    );
    expect(screen.getByRole("link", { name: "Install Page 2 PDF" })).toBeTruthy();
    expect(container.textContent).toContain("latest 2,000 messages");
    expect(container.textContent).toContain("the next time the extension runs");
    expect(container.textContent).not.toContain("within two hours");
    expect(container.textContent).not.toMatch(/PowerPoint|PPTX|merge|split|reorder/i);
  });

  test("renders a localized Russian workflow with the same contract", () => {
    const { container } = render(<ExtensionGuide locale="ru" />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Как пользоваться расширением Page 2 PDF для Chrome",
    );
    expect(screen.getByText("Откройте сайт").closest("ol")?.querySelectorAll("li")).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "Точная копия" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Редактируемый документ" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "AI / Чат" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Автоматическая очистка" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "архив проекта" }).getAttribute("href")).toBe(
      "/ru/blog/preserve-webpage-links-forms-text",
    );
    expect(screen.getByRole("link", { name: "Установить Page 2 PDF" })).toBeTruthy();
    expect(container.textContent).toContain("2 000 последних сообщений");
    expect(container.textContent).toContain("при следующем запуске расширения");
    expect(container.textContent).not.toContain("не позднее чем через два часа");
    expect(container.textContent).not.toMatch(/PowerPoint|PPTX/i);
  });
});
