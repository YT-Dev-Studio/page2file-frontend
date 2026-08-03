import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { externalLinks } from "@/shared/config/site";
import { ExternalCta } from "./external-cta";

const originalPage2PdfLink = externalLinks.page2pdfGpt;

afterEach(() => {
  externalLinks.page2pdfGpt = originalPage2PdfLink;
});

describe("ExternalCta", () => {
  test("links an honest placeholder label to the GPT catalog", () => {
    externalLinks.page2pdfGpt = {
      href: "https://chatgpt.com/gpts",
      status: "placeholder",
    };

    render(
      <ExternalCta
        externalLinkKey="page2pdfGpt"
        label="Open One Page 2 PDF GPT App"
        placeholderLabel="Browse GPTs"
      />,
    );

    const link = screen.getByRole("link", { name: "Browse GPTs" });
    expect(link.getAttribute("href")).toBe("https://chatgpt.com/gpts");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("uses the product-specific label for a configured live URL", () => {
    externalLinks.page2pdfGpt = {
      href: "https://chatgpt.com/g/example",
      status: "live",
    };

    render(
      <ExternalCta
        externalLinkKey="page2pdfGpt"
        label="Open One Page 2 PDF GPT App"
        placeholderLabel="Browse GPTs"
      />,
    );

    const link = screen.getByRole("link", {
      name: "Open One Page 2 PDF GPT App",
    });
    expect(link.getAttribute("href")).toBe(
      "https://chatgpt.com/g/example",
    );
  });
});
