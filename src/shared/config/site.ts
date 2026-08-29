import legalProfileData from "../../../content/legal-profile.json";
import type { Locale } from "@/shared/i18n/locales";

export type ExternalLinkKey =
  | "chromeExtension"
  | "page2pdfGpt"
  | "html2pdfGpt";

export type ExternalLinkStatus = "placeholder" | "live";

export type ExternalLink = {
  href: string;
  status: ExternalLinkStatus;
};

const DEFAULT_SITE_URL = "https://page2file.com";
const INDEXABLE_SITE_HOSTNAMES: ReadonlySet<string> = new Set([
  "page2file.com",
]);

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
  "Save the current webpage or a supported browser chat as PDF with the Page 2 PDF Chrome extension from Page 2 File.";

export const indexingEnabled =
  siteUrl.protocol === "https:" &&
  INDEXABLE_SITE_HOSTNAMES.has(siteUrl.hostname.toLowerCase());

export const legalProfile: LegalProfile = legalProfileData;

export const extensionInstallAvailable = true;
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
const PAGE2PDF_GPT_URL =
  "https://chatgpt.com/g/g-6a6911cbe52c819182c9cc66d9e68d01-web2file-webpage-to-pdf-converter";
const HTML2PDF_GPT_URL =
  "https://chatgpt.com/g/g-6a7227252b1081918497653732efb3a8-web2file-html-to-pdf-converter";
const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/page-2-pdf-%E2%80%94-webpages-cha/ifonfoadgcmgfmoknphjgcgfbeampdmi";

export const externalLinks: Record<ExternalLinkKey, ExternalLink> = {
  chromeExtension: externalLink(
    process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL?.trim() ||
      CHROME_WEB_STORE_URL,
    CHROME_WEB_STORE_URL,
  ),
  page2pdfGpt: externalLink(
    process.env.NEXT_PUBLIC_PAGE2PDF_GPT_URL ?? PAGE2PDF_GPT_URL,
    GPT_CATALOG_URL,
  ),
  html2pdfGpt: externalLink(
    process.env.NEXT_PUBLIC_HTML2PDF_GPT_URL ?? HTML2PDF_GPT_URL,
    GPT_CATALOG_URL,
  ),
};

export const absoluteUrl = (pathname: string): string =>
  new URL(pathname, siteUrl).toString();

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");
