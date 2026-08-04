import legalProfileData from "../../../content/legal-profile.json";
import type { Locale } from "@/shared/i18n/locales";

export type ExternalLinkKey =
  | "chromeExtension"
  | "page2pdfGpt"
  | "web2pdfGpt"
  | "html2pdfGpt"
  | "onePage2PowerpointGpt"
  | "web2powerpointGpt";

export type ExternalLinkStatus = "placeholder" | "live";

export type ExternalLink = {
  href: string;
  status: ExternalLinkStatus;
};

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
  addresses: Record<Locale, string>;
  jurisdictions: Record<Locale, string>;
  contactEmail: string;
  processors: ReadonlyArray<string>;
};

export const siteUrl = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteName = "Page 2 File";
export const siteDescription =
  "Preview and export webpages to PDF or PowerPoint without accounts or a stored conversion history.";

export const indexingEnabled =
  parseBoolean(process.env.NEXT_PUBLIC_ENABLE_INDEXING) &&
  siteUrl.protocol === "https:" &&
  !LOCAL_HOSTNAMES.has(siteUrl.hostname.toLowerCase()) &&
  !siteUrl.hostname.toLowerCase().endsWith(".localhost");

export const legalProfile: LegalProfile = legalProfileData;
export const legalDetailsComplete =
  legalProfile.entityName.trim().length > 0 &&
  Object.values(legalProfile.addresses).every(
    (address: string): boolean => address.trim().length > 0,
  ) &&
  Object.values(legalProfile.jurisdictions).every(
    (jurisdiction: string): boolean => jurisdiction.trim().length > 0,
  ) &&
  legalProfile.contactEmail.trim().length > 0 &&
  legalProfile.processors.length > 0;

export const legalReviewed =
  parseBoolean(process.env.NEXT_PUBLIC_LEGAL_REVIEWED) &&
  legalDetailsComplete;

export const conversionEnabled = false;

const rawGaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
export const gaMeasurementId = /^G-[A-Z0-9]+$/.test(rawGaMeasurementId)
  ? rawGaMeasurementId
  : "";

const externalLink = (
  value: string | undefined,
  placeholderHref: string,
): ExternalLink => {
  const liveHref = parseSafeExternalUrl(value);
  return liveHref
    ? { href: liveHref, status: "live" }
    : { href: placeholderHref, status: "placeholder" };
};

const GPT_CATALOG_URL = "https://chatgpt.com/gpts";
const CHROME_WEB_STORE_URL = "https://chromewebstore.google.com/";

export const externalLinks: Record<ExternalLinkKey, ExternalLink> = {
  chromeExtension: externalLink(
    process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL,
    CHROME_WEB_STORE_URL,
  ),
  page2pdfGpt: externalLink(
    process.env.NEXT_PUBLIC_PAGE2PDF_GPT_URL,
    GPT_CATALOG_URL,
  ),
  web2pdfGpt: externalLink(
    process.env.NEXT_PUBLIC_WEB2PDF_GPT_URL,
    GPT_CATALOG_URL,
  ),
  html2pdfGpt: externalLink(
    process.env.NEXT_PUBLIC_HTML2PDF_GPT_URL,
    GPT_CATALOG_URL,
  ),
  onePage2PowerpointGpt: externalLink(
    process.env.NEXT_PUBLIC_ONE_PAGE2POWERPOINT_GPT_URL,
    GPT_CATALOG_URL,
  ),
  web2powerpointGpt: externalLink(
    process.env.NEXT_PUBLIC_WEB2POWERPOINT_GPT_URL,
    GPT_CATALOG_URL,
  ),
};

export const absoluteUrl = (pathname: string): string =>
  new URL(pathname, siteUrl).toString();
