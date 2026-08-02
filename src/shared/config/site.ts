import legalProfileData from "../../../content/legal-profile.json";

export type ExternalLinkKey =
  | "chromeExtension"
  | "page2pdfGpt"
  | "web2pdfGpt"
  | "html2pdfGpt"
  | "web2powerpointGpt";

const DEFAULT_SITE_URL = "http://localhost:3000";
const LOCAL_HOSTNAMES: ReadonlySet<string> = new Set([
  "0.0.0.0",
  "127.0.0.1",
  "::1",
  "[::1]",
  "localhost",
]);

const parseBoolean = (value: string | undefined): boolean => value === "true";

const parseSiteUrl = (value: string | undefined): URL => {
  try {
    const url = new URL(value ?? DEFAULT_SITE_URL);
    return ["http:", "https:"].includes(url.protocol)
      ? url
      : new URL(DEFAULT_SITE_URL);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
};

const parseSafeExternalUrl = (value: string | undefined): string => {
  const candidate = value?.trim();
  if (!candidate) {
    return "";
  }
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" ? url.toString() : "";
  } catch {
    return "";
  }
};

export type LegalProfile = {
  entityName: string;
  address: string;
  jurisdiction: string;
  contactEmail: string;
  processors: ReadonlyArray<string>;
};

export const siteUrl = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteName = "Page2File";
export const siteDescription =
  "Preview and export public webpages to PDF or PowerPoint without accounts or conversion history.";

export const indexingEnabled =
  parseBoolean(process.env.NEXT_PUBLIC_ENABLE_INDEXING) &&
  siteUrl.protocol === "https:" &&
  !LOCAL_HOSTNAMES.has(siteUrl.hostname.toLowerCase()) &&
  !siteUrl.hostname.toLowerCase().endsWith(".localhost");

export const legalProfile: LegalProfile = legalProfileData;
export const legalDetailsComplete =
  legalProfile.entityName.trim().length > 0 &&
  legalProfile.address.trim().length > 0 &&
  legalProfile.jurisdiction.trim().length > 0 &&
  legalProfile.contactEmail.trim().length > 0 &&
  legalProfile.processors.length > 0;

export const legalReviewed =
  parseBoolean(process.env.NEXT_PUBLIC_LEGAL_REVIEWED) &&
  legalDetailsComplete;

export const mockControlsEnabled =
  parseBoolean(process.env.NEXT_PUBLIC_ENABLE_MOCK_CONTROLS) ||
  process.env.NODE_ENV === "development";

export type ConversionAdapter = "mock" | "real";
export const conversionEnabled = false;

const requestedConversionAdapter =
  process.env.NEXT_PUBLIC_CONVERSION_ADAPTER === "mock" ? "mock" : "real";
const localSite =
  LOCAL_HOSTNAMES.has(siteUrl.hostname.toLowerCase()) ||
  siteUrl.hostname.toLowerCase().endsWith(".localhost");
export const conversionAdapter: ConversionAdapter =
  requestedConversionAdapter === "mock" &&
  (process.env.NODE_ENV !== "production" || localSite)
    ? "mock"
    : "real";

const rawGaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
export const gaMeasurementId = /^G-[A-Z0-9]+$/.test(rawGaMeasurementId)
  ? rawGaMeasurementId
  : "";

export const externalLinks: Record<ExternalLinkKey, string> = {
  chromeExtension: parseSafeExternalUrl(
    process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL,
  ),
  page2pdfGpt: parseSafeExternalUrl(
    process.env.NEXT_PUBLIC_PAGE2PDF_GPT_URL,
  ),
  web2pdfGpt: parseSafeExternalUrl(
    process.env.NEXT_PUBLIC_WEB2PDF_GPT_URL,
  ),
  html2pdfGpt: parseSafeExternalUrl(
    process.env.NEXT_PUBLIC_HTML2PDF_GPT_URL,
  ),
  web2powerpointGpt: parseSafeExternalUrl(
    process.env.NEXT_PUBLIC_WEB2POWERPOINT_GPT_URL,
  ),
};

export const absoluteUrl = (pathname: string): string =>
  new URL(pathname, siteUrl).toString();
