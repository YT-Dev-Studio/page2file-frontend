import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { getHomeCopy } from "./home-copy";
import { HomeFaq } from "./home-faq";

describe("HomeFaq", () => {
  test("opens, closes and switches one answer with synchronized ARIA", async () => {
    const user = userEvent.setup();
    const { container } = render(<HomeFaq locale="en" />);
    const copy = getHomeCopy("en").faq;
    const buttons = screen.getAllByRole<HTMLButtonElement>("button");

    expect(buttons).toHaveLength(copy.items.length);
    expect(buttons[0]?.getAttribute("aria-expanded")).toBe("true");
    expect(
      buttons
        .slice(1)
        .every(
          (button): boolean =>
            button.getAttribute("aria-expanded") === "false",
        ),
    ).toBe(true);
    expect(
      screen.getByRole("region", { name: copy.items[0]?.title }),
    ).not.toBeNull();
    expect(
      screen.getByRole("region", { name: copy.items[0]?.title })
        .textContent,
    ).toContain(
      copy.items[0]?.body,
    );

    await user.click(buttons[0]!);

    expect(buttons[0]?.getAttribute("aria-expanded")).toBe("false");
    expect(
      screen.queryByRole("region", { name: copy.items[0]?.title }),
    ).toBeNull();

    await user.click(buttons[1]!);

    expect(buttons[0]?.getAttribute("aria-expanded")).toBe("false");
    expect(buttons[1]?.getAttribute("aria-expanded")).toBe("true");
    expect(
      screen.getByRole("region", { name: copy.items[1]?.title }),
    ).not.toBeNull();
    expect(
      screen.getByRole("region", { name: copy.items[1]?.title })
        .textContent,
    ).toContain(
      copy.items[1]?.body,
    );

    copy.items.forEach((item): void => {
      expect(container.textContent).toContain(item.title);
      expect(container.textContent).toContain(item.body);
    });
  });
});
