import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import type { FaqBodySegment } from "./home-copy";
import { getHomeCopy } from "./home-copy";
import { HomeCopyBody } from "./home-copy-body";
import { HomeFaq } from "./home-faq";

const faqBodyToText = (
  body: string | ReadonlyArray<FaqBodySegment>,
): string => {
  if (typeof body === "string") {
    return body;
  }

  const segmentToText = (segment: FaqBodySegment): string =>
    segment.kind === "link" ? segment.label : segment.text;

  return body.map(segmentToText).join("");
};

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
      faqBodyToText(copy.items[0]!.body),
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
      faqBodyToText(copy.items[1]!.body),
    );

    copy.items.forEach((item): void => {
      expect(container.textContent).toContain(item.title);
      expect(container.textContent).toContain(
        faqBodyToText(item.body),
      );
    });
  });

  test("renders localized internal links for one-page and website GPT services", async () => {
    const user = userEvent.setup();
    render(<HomeFaq locale="ru" />);
    await user.click(
      screen.getByRole("button", {
        name: "Можно конвертировать только одну страницу или весь сайт?",
      }),
    );

    expect(
      screen.getByRole("link", { name: "One Page 2 PDF" })
        .getAttribute("href"),
    ).toBe("/ru/page2pdf-gpt");
    expect(
      screen.getByRole("link", { name: "One Page 2 PowerPoint" })
        .getAttribute("href"),
    ).toBe("/ru/one-page2powerpoint-gpt");
    expect(
      screen.getByRole("link", { name: "Web 2 PDF" })
        .getAttribute("href"),
    ).toBe("/ru/web2pdf-gpt");
    expect(
      screen.getByRole("link", { name: "Web 2 PowerPoint" })
        .getAttribute("href"),
    ).toBe("/ru/web2powerpoint-gpt");
  });
});

describe("homepage content lists", () => {
  test("renders feature points and extension steps as semantic lists", () => {
    const featureList = getHomeCopy("en").features.items[1]?.list;
    const stepList = getHomeCopy("en").howItWorks.items[1]?.list;

    render(
      <>
        <HomeCopyBody list={featureList} />
        <HomeCopyBody list={stepList} />
      </>,
    );

    expect(
      screen
        .getByText("Save screenshots as PDF/PPTX.")
        .closest("ul"),
    ).not.toBeNull();
    expect(
      screen.getByText("Click EXPORT.").closest("ol"),
    ).not.toBeNull();
  });
});
