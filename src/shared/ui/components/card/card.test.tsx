import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Card } from "./card";
import styles from "./card.module.css";

describe("Card", () => {
  test("renders semantic article content without button behavior", () => {
    render(
      <Card
        body="Keep source fidelity."
        title="Convert with confidence"
      />,
    );

    expect(screen.getByRole("article")).not.toBeNull();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Convert with confidence",
      }),
    ).not.toBeNull();
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.queryByRole("link")).toBeNull();
  });

  test("renders an action as a separate internal link", () => {
    render(
      <Card
        action={{ href: "/learn", label: "Learn more" }}
        body="Keep source fidelity."
        title="Convert with confidence"
      />,
    );
    const action = screen.getByRole("link", { name: "Learn more" });

    expect(action.getAttribute("href")).toBe("/learn");
    expect(action.closest("article")?.getAttribute("role")).toBeNull();
  });

  test("supports secured external actions", () => {
    render(
      <Card
        action={{
          external: true,
          href: "https://example.com",
          label: "Learn more",
        }}
        body="Keep source fidelity."
        title="Convert with confidence"
      />,
    );
    const action = screen.getByRole("link", { name: "Learn more" });

    expect(action.getAttribute("target")).toBe("_blank");
    expect(action.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("applies accent, selected, interactive, and native classes", () => {
    render(
      <Card
        body="Keep source fidelity."
        className="consumer-class"
        emphasis="accent"
        interactive
        selected
        title="Convert with confidence"
      />,
    );
    const card = screen.getByRole("article");

    expect(card.classList.contains("consumer-class")).toBe(true);
    expect(card.classList.contains(styles.interactive)).toBe(true);
    expect(card.classList.contains(styles.selected)).toBe(true);
    expect(card.querySelector(`.${styles.rail}`)).not.toBeNull();
    expect(card.dataset.selected).toBe("true");
  });

  test("renders media only when the optional slot is provided", () => {
    const { rerender } = render(
      <Card
        body="Keep source fidelity."
        title="Convert with confidence"
      />,
    );
    const card = screen.getByRole("article");

    expect(card.querySelector(`.${styles.rail}`)).toBeNull();
    expect(card.querySelector(`.${styles.action}`)).toBeNull();
    expect(card.querySelector(`.${styles.media}`)).toBeNull();

    rerender(
      <Card
        body="Keep source fidelity."
        media={<span>Card preview</span>}
        title="Convert with confidence"
      />,
    );

    expect(card.querySelector(`.${styles.media}`)?.textContent).toBe(
      "Card preview",
    );
    expect(card.querySelector(`.${styles.mediaContent}`)).not.toBeNull();
  });
});
