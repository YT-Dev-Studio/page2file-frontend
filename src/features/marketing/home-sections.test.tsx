import { render, screen } from "@testing-library/react";
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
    expect(screen.getByText("Open the source").closest("ol")).not.toBeNull();
    expect(screen.getByText(/Local HTML files/).closest("ul")).not.toBeNull();
    expect(container.querySelectorAll("section")).toHaveLength(5);
    expect(container.querySelectorAll("details")).toHaveLength(7);
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
