import {
  act,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import {
  RelatedScenariosCarousel,
  type RelatedScenarioItem,
} from "./related-scenarios-carousel";

let resizeCallback: ResizeObserverCallback | null = null;

class ResizeObserverMock {
  constructor(callback: ResizeObserverCallback) {
    resizeCallback = callback;
  }

  disconnect(): void {}

  observe(): void {
    resizeCallback?.([], this as unknown as ResizeObserver);
  }

  unobserve(): void {}
}

const createItems = (count: number): ReadonlyArray<RelatedScenarioItem> =>
  Array.from({ length: count }, (_, index) => ({
    description: `Description ${index + 1}`,
    href: `/en/workflow-${index + 1}`,
    title: `Workflow ${index + 1}`,
  }));

const setDimensions = (
  viewport: HTMLElement,
  clientWidth: number,
  scrollWidth: number,
): void => {
  Object.defineProperties(viewport, {
    clientWidth: { configurable: true, value: clientWidth },
    scrollWidth: { configurable: true, value: scrollWidth },
  });
  act(() => {
    resizeCallback?.([], {} as ResizeObserver);
  });
};

const renderCarousel = (count: number): HTMLElement => {
  render(
    <RelatedScenariosCarousel
      heading="Related workflows"
      items={createItems(count)}
      nextLabel="Next workflow"
      previousLabel="Previous workflow"
    />,
  );
  return screen.getByRole("list");
};

beforeEach(() => {
  vi.stubGlobal("ResizeObserver", ResizeObserverMock);
});

afterEach(() => {
  resizeCallback = null;
  vi.unstubAllGlobals();
});

describe("RelatedScenariosCarousel", () => {
  test.each([
    { count: 3, width: 894 },
    { count: 4, width: 1200 },
  ])("shows $count fitting cards without controls", ({ count, width }) => {
    const viewport = renderCarousel(count);

    setDimensions(viewport, width, width);

    expect(
      screen.queryByRole("button", { name: "Previous workflow" }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: "Next workflow" }),
    ).toBeNull();
    expect(within(viewport).getAllByRole("link")).toHaveLength(count);
  });

  test("scrolls overflowing cards one at a time and updates edges", () => {
    const viewport = renderCarousel(5);
    let scrollLeft = 0;
    Object.defineProperty(viewport, "scrollLeft", {
      configurable: true,
      get: () => scrollLeft,
      set: (value: number) => {
        scrollLeft = value;
      },
    });
    Object.defineProperty(viewport.firstElementChild, "offsetWidth", {
      configurable: true,
      value: 282,
    });
    const scrollBy = vi.fn(({ left }: ScrollToOptions) => {
      scrollLeft += left ?? 0;
      fireEvent.scroll(viewport);
    });
    Object.defineProperty(viewport, "scrollBy", {
      configurable: true,
      value: scrollBy,
    });

    setDimensions(viewport, 1200, 1506);

    const previous = screen.getByRole<HTMLButtonElement>("button", {
      name: "Previous workflow",
    });
    const next = screen.getByRole<HTMLButtonElement>("button", {
      name: "Next workflow",
    });
    expect(previous.disabled).toBe(true);
    expect(next.disabled).toBe(false);

    fireEvent.click(next);

    expect(scrollBy).toHaveBeenCalledWith({
      behavior: "smooth",
      left: 306,
    });
    expect(previous.disabled).toBe(false);
    expect(next.disabled).toBe(true);
  });

  test("recalculates overflow after resize", () => {
    const viewport = renderCarousel(4);

    setDimensions(viewport, 1200, 1200);
    expect(screen.queryByRole("button")).toBeNull();

    setDimensions(viewport, 900, 1200);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
