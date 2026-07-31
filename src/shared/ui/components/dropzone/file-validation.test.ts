import { describe, expect, test } from "vitest";
import { validateFiles } from "./file-validation";

const createFile = (
  name: string,
  type: string,
  size?: number,
): File => {
  const file = new File(["content"], name, { type });

  if (size !== undefined) {
    Object.defineProperty(file, "size", { value: size });
  }

  return file;
};

describe("validateFiles", () => {
  test("accepts matching MIME types and extensions", () => {
    const pdf = createFile("report.pdf", "application/pdf");
    const pptx = createFile("deck.pptx", "");
    const result = validateFiles(
      [pdf, pptx],
      ["application/pdf", ".pptx"],
      25_000_000,
    );

    expect(result.accepted).toEqual([pdf, pptx]);
    expect(result.rejected).toEqual([]);
  });

  test("separates unsupported and oversized files", () => {
    const unsupported = createFile("notes.txt", "text/plain");
    const oversized = createFile(
      "report.pdf",
      "application/pdf",
      25_000_001,
    );
    const result = validateFiles(
      [unsupported, oversized],
      ["application/pdf", ".pdf"],
      25_000_000,
    );

    expect(result.accepted).toEqual([]);
    expect(result.rejected).toEqual([
      { file: unsupported, reason: "unsupported-type" },
      { file: oversized, reason: "too-large" },
    ]);
  });
});
