import { describe, expect, test } from "vitest";
import { staticRoutes } from "@/shared/routes/routes";

describe("removed website URL converter", () => {
  test("is absent from the public static route registry", () => {
    expect(staticRoutes).not.toContain("convert-url-to-pdf");
    expect(staticRoutes).not.toContain("convert-url-to-pptx");
  });
});
