import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomeModes, HomePrivacy, HomeProcess, HomeSources } from "./home-sections";

describe("homepage sections", () => {
  test("renders the approved modes and linear workflow semantically", () => {
    const { container } = render(
      <>
        <HomeModes locale="en" />
        <HomeSources locale="en" />
        <HomeProcess locale="en" />
        <HomePrivacy locale="en" />
      </>,
    );

    expect(screen.getByRole("heading", { name: "Accurate copy" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Editable document" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "AI / Chat" })).toBeTruthy();
    expect(screen.getByText("Open the source").closest("ol")).not.toBeNull();
    expect(screen.getByText(/Local HTML files/).closest("ul")).not.toBeNull();
    expect(container.querySelectorAll("section")).toHaveLength(4);
    expect(container.textContent).not.toMatch(/PPTX|merge|split|reorder/i);
  });
});
