import { describe, expect, test } from "vitest";
import { getSiteCopy } from "./site-copy";

describe("site shell copy", () => {
  test("contains the copy used by the reduced site shell", () => {
    const russianCopy = getSiteCopy("ru");

    expect(russianCopy.header).not.toHaveProperty("navigation");
    expect(russianCopy.footer.brandDescription).toBe(
      "Веб-страница в редактируемый PDF или PowerPoint с настраиваемым предпросмотром.",
    );
    expect(Object.keys(russianCopy.footer.links).sort()).toEqual([
      "aiChatPdf",
      "cookiePolicy",
      "extension",
      "messengerChatPdf",
      "privacy",
      "support",
      "terms",
      "webpagePdf",
    ]);
  });

  test("keeps English, Russian, and German shell copy localized", () => {
    expect(getSiteCopy("en").header.downloadAction).toBe("Download extension");
    expect(getSiteCopy("ru").header.downloadAction).toBe("Скачать расширение");
    expect(getSiteCopy("de").header.downloadAction).toBe("Erweiterung herunterladen");
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
    expect(getSiteCopy("de").footer.links.support).toBe("Support");
  });
});
