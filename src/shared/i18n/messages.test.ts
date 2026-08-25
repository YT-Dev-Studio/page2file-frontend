import { describe, expect, test } from "vitest";
import type { Locale } from "./locales";
import { getMessages } from "./messages";

const converterLabels: ReadonlyArray<
  readonly [Locale, string, string]
> = [
  ["en", "Page snapshots", "Warnings"],
  ["ru", "Снимки страницы", "Предупреждения"],
];

describe("converter messages", () => {
  test.each(converterLabels)(
    "localizes mode and warning labels for %s",
    (locale, visual, warnings) => {
      const messages = getMessages(locale).converter;

      expect(messages.visual).toBe(visual);
      expect(messages.warnings).toBe(warnings);
    },
  );
});
