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
      "terms",
    ]);
  });

  test("localizes shell copy independently from indexing review state", () => {
    expect(getSiteCopy("de").header.extensionAction).toBe(
      "Jetzt installieren",
    );
    expect(getSiteCopy("fr").footer.links.privacy).toBe(
      "Confidentialité",
    );
    expect(getSiteCopy("es").header.extensionAction).toBe("Instalar ahora");
    expect(getSiteCopy("nl").footer.links.privacy).toBe("Privacy");
    expect(getSiteCopy("pt").header.extensionAction).toBe("Instalar agora");
    expect(getSiteCopy("it").footer.links.privacy).toBe("Privacy");
    expect(getSiteCopy("pl").header.extensionAction).toBe(
      "Zainstaluj teraz",
    );
    expect(getSiteCopy("cs").footer.links.privacy).toBe("Soukromí");
    expect(getSiteCopy("sv").header.extensionAction).toBe("Installera nu");
    expect(getSiteCopy("no").footer.links.privacy).toBe("Personvern");
    expect(getSiteCopy("da").header.extensionAction).toBe("Installer nu");
    expect(getSiteCopy("fi").footer.links.privacy).toBe("Tietosuoja");
    expect(getSiteCopy("ro").header.extensionAction).toBe("Instalează acum");
    expect(getSiteCopy("hu").footer.links.privacy).toBe("Adatvédelem");
  });
});
