import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ExtensionGuide } from "./extension-guide";

describe("ExtensionGuide", () => {
  test("renders the English four-step screenshot workflow", () => {
    const { container } = render(<ExtensionGuide locale="en" />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "How to use the Page 2 PDF Chrome extension",
    );
    const steps = screen.getByText("Pin the extension").closest("ol");
    expect(steps?.querySelectorAll("li")).toHaveLength(4);
    expect(
      Array.from(steps?.querySelectorAll("h2") ?? []).map((heading) => heading.textContent),
    ).toEqual([
      "Pin the extension",
      "Open any page",
      "Click the extension",
      "Get the PDF",
    ]);
    expect(
      Array.from(steps?.querySelectorAll("img") ?? []).map((image) => image.getAttribute("src")),
    ).toEqual([
      "/guides/page-2-pdf/en/01-pin-extension-clean.png",
      "/guides/page-2-pdf/en/02-open-page-clean.png",
      "/guides/page-2-pdf/en/03-click-extension-clean.png",
      "/guides/page-2-pdf/en/04-pdf-result-clean.png",
    ]);
    expect(screen.getByRole("heading", { name: "Want to customize the PDF?" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Choose an output mode" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Open the settings" })).toBeTruthy();
    expect(
      screen
        .getByRole("img", {
          name: "Page 2 PDF panel showing Accurate copy, Editable document, and AI / Chat",
        })
        .getAttribute("src"),
    ).toBe("/guides/page-2-pdf/en/05-output-modes.png");
    expect(screen.getByRole("heading", { name: "Accurate copy" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Editable document" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "AI / Chat" })).toBeTruthy();
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

  test("renders a localized Russian screenshot workflow with the same contract", () => {
    const { container } = render(<ExtensionGuide locale="ru" />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Как пользоваться расширением Page 2 PDF для Chrome",
    );
    const steps = screen.getByText("Закрепите расширение").closest("ol");
    expect(steps?.querySelectorAll("li")).toHaveLength(4);
    expect(
      Array.from(steps?.querySelectorAll("h2") ?? []).map((heading) => heading.textContent),
    ).toEqual([
      "Закрепите расширение",
      "Откройте любую страницу",
      "Кликните на расширение",
      "Получите PDF",
    ]);
    expect(
      Array.from(steps?.querySelectorAll("img") ?? []).map((image) => image.getAttribute("src")),
    ).toEqual([
      "/guides/page-2-pdf/ru/01-pin-extension-clean.png",
      "/guides/page-2-pdf/ru/02-open-page-clean.png",
      "/guides/page-2-pdf/ru/03-click-extension-clean.png",
      "/guides/page-2-pdf/ru/04-pdf-result-clean.png",
    ]);
    expect(screen.getByRole("heading", { name: "Хотите настроить PDF?" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Выберите режим" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Откройте настройки" })).toBeTruthy();
    expect(
      screen
        .getByRole("img", {
          name: "Панель Page 2 PDF с настройками профиля, ориентации и содержимого редактируемого документа",
        })
        .getAttribute("src"),
    ).toBe("/guides/page-2-pdf/ru/06-customize-settings.png");
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
