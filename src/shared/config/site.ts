export type ExternalLinkKey =
  | "chromeExtension"
  | "page2pdfGpt"
  | "web2pdfGpt"
  | "html2pdfGpt"
  | "web2powerpointGpt";

const DEFAULT_SITE_URL = "http://localhost:3000";

const parseBoolean = (value: string | undefined): boolean => value === "true";

const parseSiteUrl = (value: string | undefined): URL => {
  try {
    return new URL(value ?? DEFAULT_SITE_URL);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
};

export const siteUrl = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteName = "Page2File";
export const siteDescription =
  "Preview and export public webpages to PDF or PowerPoint without accounts or conversion history.";

export const indexingEnabled =
  parseBoolean(process.env.NEXT_PUBLIC_ENABLE_INDEXING) &&
  !["localhost", "127.0.0.1"].includes(siteUrl.hostname);

export const legalReviewed = parseBoolean(
  process.env.NEXT_PUBLIC_LEGAL_REVIEWED,
);

export const mockControlsEnabled =
  parseBoolean(process.env.NEXT_PUBLIC_ENABLE_MOCK_CONTROLS) ||
  process.env.NODE_ENV === "development";

export const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const externalLinks: Record<ExternalLinkKey, string> = {
  chromeExtension: process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL?.trim() ?? "",
  page2pdfGpt: process.env.NEXT_PUBLIC_PAGE2PDF_GPT_URL?.trim() ?? "",
  web2pdfGpt: process.env.NEXT_PUBLIC_WEB2PDF_GPT_URL?.trim() ?? "",
  html2pdfGpt: process.env.NEXT_PUBLIC_HTML2PDF_GPT_URL?.trim() ?? "",
  web2powerpointGpt:
    process.env.NEXT_PUBLIC_WEB2POWERPOINT_GPT_URL?.trim() ?? "",
};

export const absoluteUrl = (pathname: string): string =>
  new URL(pathname, siteUrl).toString();
