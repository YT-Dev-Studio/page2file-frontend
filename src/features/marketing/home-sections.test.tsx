import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { getHomeCopy } from "./home-copy";
import { HomeFaq } from "./home-faq";

describe("HomeFaq", () => {
  test("renders one exclusive accordion with the first answer open", () => {
    const { container } = render(<HomeFaq locale="en" />);
    const details = Array.from(
      container.querySelectorAll<HTMLDetailsElement>("details"),
    );
    const copy = getHomeCopy("en").faq;

    expect(details).toHaveLength(copy.items.length);
    expect(
      details.every(
        (item): boolean =>
          item.getAttribute("name") === "home-faq",
      ),
    ).toBe(true);
    expect(details[0]?.open).toBe(true);
    expect(details.slice(1).every((item): boolean => !item.open)).toBe(
      true,
    );

    copy.items.forEach((item): void => {
      expect(container.textContent).toContain(item.title);
      expect(container.textContent).toContain(item.body);
    });
  });
});
