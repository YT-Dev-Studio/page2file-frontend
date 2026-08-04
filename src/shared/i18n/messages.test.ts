import { describe, expect, test } from "vitest";
import type { Locale } from "./locales";
import { getMessages } from "./messages";

const converterLabels: ReadonlyArray<
  readonly [Locale, string, string]
> = [
  ["en", "Page snapshots", "Warnings"],
  ["ru", "Снимки страницы", "Предупреждения"],
  ["de", "Seitenaufnahmen", "Warnungen"],
  ["fr", "Captures de page", "Avertissements"],
  ["es", "Capturas de página", "Advertencias"],
  ["nl", "Pagina-opnamen", "Waarschuwingen"],
  ["pt", "Capturas de página", "Avisos"],
  ["it", "Acquisizioni della pagina", "Avvisi"],
  ["pl", "Zrzuty strony", "Ostrzeżenia"],
  ["sv", "Sidbilder", "Varningar"],
  ["no", "Sidebilder", "Advarsler"],
  ["da", "Sidebilleder", "Advarsler"],
  ["fi", "Sivukaappaukset", "Varoitukset"],
  ["cs", "Snímky stránky", "Upozornění"],
  ["ro", "Capturi de pagină", "Avertismente"],
  ["hu", "Oldal-pillanatképek", "Figyelmeztetések"],
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
