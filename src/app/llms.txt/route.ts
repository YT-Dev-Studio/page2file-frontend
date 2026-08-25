import { absoluteUrl, legalProfile, siteDescription } from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import { routePath, staticRoutes } from "@/shared/routes/routes";

export const dynamic = "force-static";

const routeLabel = (route: string): string =>
  route.length === 0 ? "Chrome extension overview" : route;

export function GET(): Response {
  const englishRoutes = staticRoutes.map(
    (route): string =>
      `- ${routeLabel(route)}: ${absoluteUrl(routePath("en", route))}`,
  );
  const languages = localeRegistry
    .map(
      (locale): string =>
        `${locale.languageName} (${locale.htmlLang}): ${absoluteUrl(
          routePath(locale.code, ""),
        )}`,
    )
    .join("\n");

  const body = [
    "# Page 2 File",
    "",
    siteDescription,
    "Page 2 File is the website for Page 2 PDF, a Chrome extension that saves the active webpage or a supported browser conversation as a visual, selectable, or transcript-focused PDF.",
    "",
    "## Languages",
    languages,
    "",
    "## Main pages",
    ...englishRoutes,
    "",
    "## Discovery and contact",
    `- Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    `- Robots policy: ${absoluteUrl("/robots.txt")}`,
    `- Editorial principles: ${absoluteUrl("/en/about")}`,
    `- Privacy: ${absoluteUrl("/en/privacy")}`,
    `- Terms: ${absoluteUrl("/en/terms")}`,
    `- Contact: mailto:${legalProfile.contactEmail}`,
    "",
    "Localized versions use the same path after their language prefix. HTML pages are the primary source of truth.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
