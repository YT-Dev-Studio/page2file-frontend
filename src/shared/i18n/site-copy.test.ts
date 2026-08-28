import { describe, expect, test } from "vitest";
import { getSiteCopy } from "./site-copy";

describe("site shell copy", () => {
  test("contains only copy used by the reduced site shell", () => {
    const russianCopy = getSiteCopy("ru");

    expect(russianCopy.header).not.toHaveProperty("navigation");
    expect(russianCopy.footer).not.toHaveProperty("brandDescription");
    expect(Object.keys(russianCopy.footer.links).sort()).toEqual([
      "cookiePolicy",
      "extension",
      "privacy",
      "support",
      "terms",
    ]);
  });

  test("keeps English and Russian shell copy localized", () => {
    expect(getSiteCopy("en").header.downloadAction).toBe("Download extension");
    expect(getSiteCopy("ru").header.downloadAction).toBe("Скачать расширение");
    expect(getSiteCopy("en").header.extensionAction).toBe("Install Page 2 PDF");
    expect(getSiteCopy("ru").header.extensionAction).toBe("Установить Page 2 PDF");
    expect(getSiteCopy("en").extensionUnavailableTooltip).toBe(
      "The extension will be available soon.",
    );
    expect(getSiteCopy("ru").extensionUnavailableTooltip).toBe(
      "Расширение заработает в ближайшее время.",
    );
    expect(getSiteCopy("ru").footer.links.privacy).toBe(
      "Политика конфиденциальности",
    );
    expect(getSiteCopy("en").footer.links.support).toBe("Support");
    expect(getSiteCopy("ru").footer.links.support).toBe("Поддержка");
  });
});
