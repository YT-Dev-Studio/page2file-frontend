import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ExtensionGuide } from "./extension-guide";

describe("ExtensionGuide mode step", () => {
  test("renders the English four-point walkthrough and explanatory caption", () => {
    render(<ExtensionGuide locale="en" />);

    const firstPoint = screen.getByText(
      "Choose PDF for sharing and archiving or PowerPoint for presenting and editing.",
    );
    const list = firstPoint.closest("ol");
    const image = screen.getByAltText(
      "The original Page 2 File panel with numbered callouts for format, output style, customization, and preview",
    );

    expect(
      screen.getByRole("heading", {
        name: "Configure the export and create a preview",
      }),
    ).not.toBeNull();
    expect(list?.querySelectorAll("li")).toHaveLength(4);
    expect(image.getAttribute("width")).toBe("900");
    expect(image.getAttribute("height")).toBe("900");
    expect(
      screen.getByText(
        "The Notion card identifies the webpage open in the current tab; it is not a separate Page 2 File integration.",
      ).closest("figcaption"),
    ).not.toBeNull();
  });

  test("renders localized Russian instructions for the shared image", () => {
    render(<ExtensionGuide locale="ru" />);

    const firstPoint = screen.getByText(
      "Выберите PDF для передачи и архивирования или PowerPoint для презентации и редактирования.",
    );

    expect(
      screen.getByRole("heading", {
        name: "Настройте экспорт и создайте предпросмотр",
      }),
    ).not.toBeNull();
    expect(firstPoint.closest("ol")?.querySelectorAll("li")).toHaveLength(
      4,
    );
    expect(
      screen.getByText(
        "Карточка Notion обозначает страницу, открытую в текущей вкладке, а не отдельную интеграцию Page 2 File.",
      ).closest("figcaption"),
    ).not.toBeNull();
  });
});
