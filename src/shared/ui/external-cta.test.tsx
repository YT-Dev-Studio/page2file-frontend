import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { externalLinks } from "@/shared/config/site";
import { ExternalCta } from "./external-cta";

const originalPage2PdfUrl = externalLinks.page2pdfGpt;

afterEach(() => {
  externalLinks.page2pdfGpt = originalPage2PdfUrl;
});

describe("ExternalCta", () => {
  test("shows an honest, service-specific unavailable state", () => {
    externalLinks.page2pdfGpt = "";

    render(
      <ExternalCta
        comingSoonLabel="Coming soon"
        externalLinkKey="page2pdfGpt"
        label="Open Page2PDF in ChatGPT"
      />,
    );

    const state = screen.getByText(
      "Open Page2PDF in ChatGPT · Coming soon",
    );
    expect(state.getAttribute("aria-disabled")).toBe("true");
    expect(screen.queryByRole("link")).toBeNull();
  });

  test("opens a configured HTTPS URL in a new tab", () => {
    externalLinks.page2pdfGpt = "https://chatgpt.com/g/example";

    render(
      <ExternalCta
        comingSoonLabel="Coming soon"
        externalLinkKey="page2pdfGpt"
        label="Open Page2PDF in ChatGPT"
      />,
    );

    const link = screen.getByRole("link", {
      name: "Open Page2PDF in ChatGPT",
    });
    expect(link.getAttribute("href")).toBe(
      "https://chatgpt.com/g/example",
    );
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
