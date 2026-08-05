import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { externalLinks } from "@/shared/config/site";
import { ExternalCta } from "./external-cta";

const originalPage2PdfLink = externalLinks.page2pdfGpt;

afterEach(() => {
  externalLinks.page2pdfGpt = originalPage2PdfLink;
});

describe("ExternalCta", () => {
  test("uses the direct HTML 2 PDF GPT URL", () => {
    render(
      <ExternalCta
        externalLinkKey="html2pdfGpt"
        label="Open GPT HTML 2 PDF"
        placeholderLabel="Browse GPTs"
      />,
    );

    const link = screen.getByRole("link", { name: "Open GPT HTML 2 PDF" });
    expect(link.getAttribute("href")).toBe(
      "https://chatgpt.com/g/g-6a7227252b1081918497653732efb3a8-web2file-html-to-pdf-converter",
    );
  });

  test("links an honest placeholder label to the GPT catalog", () => {
    externalLinks.page2pdfGpt = {
      href: "https://chatgpt.com/gpts",
      status: "placeholder",
    };

    render(
      <ExternalCta
        externalLinkKey="page2pdfGpt"
        label="Open GPT Webpage 2 PDF"
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
        label="Open GPT Webpage 2 PDF"
        placeholderLabel="Browse GPTs"
      />,
    );

    const link = screen.getByRole("link", {
      name: "Open GPT Webpage 2 PDF",
    });
    expect(link.getAttribute("href")).toBe(
      "https://chatgpt.com/g/example",
    );
  });
});
