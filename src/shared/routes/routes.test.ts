import { describe, expect, test } from "vitest";
import {
  isStaticRouteAvailable,
  staticRoutesForLocale,
} from "./routes";

describe("localized static route availability", () => {
  test("publishes extension SEO routes in English and German only", () => {
    const route = "chrome-extension/webpage-to-pdf" as const;

    expect(isStaticRouteAvailable("en", route)).toBe(true);
    expect(isStaticRouteAvailable("de", route)).toBe(true);
    expect(isStaticRouteAvailable("ru", route)).toBe(false);
    expect(staticRoutesForLocale("de")).toContain(route);
    expect(staticRoutesForLocale("ru")).not.toContain(route);
  });
});
