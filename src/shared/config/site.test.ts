import { describe, expect, test } from "vitest";
import { legalProfile } from "./site";

describe("legalProfile", () => {
  test("uses the support mailbox", () => {
    expect(legalProfile.contactEmail).toBe("support@page2file.com");
  });
});
