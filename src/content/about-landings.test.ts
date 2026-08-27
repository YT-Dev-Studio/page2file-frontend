import { describe, expect, test } from "vitest";
import { getLandingContent } from "./landings";

describe("Page 2 File positioning", () => {
  test("describes the website and Page 2 PDF product relationship in English", () => {
    const content = getLandingContent("en", "about");

    expect(content?.title).toBe("Editorial principles");
    expect(content?.sections[0]?.body).toContain(
      "Page 2 File is an information website about Page 2 PDF, a Chrome extension.",
    );
  });

  test("describes the website and Page 2 PDF product relationship in Russian", () => {
    const content = getLandingContent("ru", "about");

    expect(content?.title).toBe("Редакционные принципы");
    expect(content?.sections[0]?.body).toContain(
      "Page 2 File — информационный сайт о Page 2 PDF, расширении для Chrome.",
    );
  });
});
