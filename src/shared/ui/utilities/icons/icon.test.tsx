import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CheckIcon } from "@/shared/ui/utilities/icons/glyphs/check-icon";
import { Icon } from "@/shared/ui/utilities/icons/icon";

describe("Icon", () => {
  it("is decorative by default", () => {
    const { container } = render(
      <Icon>
        <CheckIcon />
      </Icon>,
    );

    const wrapper = container.firstElementChild;
    const svg = container.querySelector("svg");

    expect(wrapper?.getAttribute("aria-hidden")).toBe("true");
    expect(svg?.getAttribute("focusable")).toBe("false");
  });

  it("supports an accessible standalone label", () => {
    render(
      <Icon label="Complete">
        <CheckIcon />
      </Icon>,
    );

    expect(screen.getByRole("img", { name: "Complete" })).not.toBeNull();
  });
});
