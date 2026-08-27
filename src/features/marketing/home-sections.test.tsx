import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeFaq } from "./home-faq";
import { HomeModes, HomePrivacy, HomeProcess, HomeSources } from "./home-sections";

describe("homepage sections", () => {
  test("renders the approved modes and linear workflow semantically", () => {
    const { container } = render(
      <>
        <HomeModes locale="en" />
        <HomeSources locale="en" />
        <HomeProcess locale="en" />
        <HomePrivacy locale="en" />
        <HomeFaq locale="en" />
      </>,
    );

    expect(screen.getByRole("heading", { name: "Accurate copy" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Editable document" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "AI / Chat" })).toBeTruthy();
    expect(screen.getByText("Open a website").closest("ol")).not.toBeNull();
    expect(screen.getByText(/Authorized pages/).closest("ul")).not.toBeNull();
    expect(screen.getByRole("link", { name: "project archive" }).getAttribute("href")).toBe(
      "/en/blog/preserve-webpage-links-forms-text",
    );
    expect(container.querySelectorAll("section")).toHaveLength(5);
    const faqSection = screen
      .getByRole("heading", {
        name: "Questions about saving webpages and chats as PDF",
      })
      .closest("section");
    expect(faqSection).not.toBeNull();
    const faqButtons = within(faqSection as HTMLElement).getAllByRole("button");
    expect(faqButtons).toHaveLength(7);
    expect(faqButtons[0]?.getAttribute("aria-expanded")).toBe("false");
    expect(faqButtons[1]?.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(faqButtons[0]);
    fireEvent.click(faqButtons[1]);
    expect(faqButtons[0]?.getAttribute("aria-expanded")).toBe("true");
    expect(faqButtons[1]?.getAttribute("aria-expanded")).toBe("true");
    expect(
      screen.getByRole("heading", {
        name: "Questions about saving webpages and chats as PDF",
      }),
    ).toBeTruthy();
    expect(
      screen.getByText("How do I export a ChatGPT, Claude, or Gemini chat to PDF?"),
    ).toBeTruthy();
    expect(container.textContent).not.toMatch(/PPTX|merge|split|reorder/i);
  });
});
