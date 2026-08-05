import { blogEntries } from "@/content/content-registry";
import { absoluteUrl, legalProfile, siteDescription } from "@/shared/config/site";
import { localeRegistry } from "@/shared/i18n/locales";
import { routePath, staticRoutes } from "@/shared/routes/routes";

export const dynamic = "force-static";

const routeLabel = (route: string): string =>
  route.length === 0 ? "Home and webpage converter" : route;

export function GET(): Response {
  const englishRoutes = staticRoutes.map(
    (route): string =>
      `- ${routeLabel(route)}: ${absoluteUrl(routePath("en", route))}`,
  );
  const englishGuides = blogEntries.map(
    (entry): string =>
      `- ${entry.title}: ${absoluteUrl(routePath("en", `blog/${entry.slug}`))}`,
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
    "Page 2 File helps people preview and save public webpages or permitted active browser tabs as PDF or PowerPoint files. Product pages explain the difference between visual snapshots and files with reusable text and links.",
    "",
    "## Languages",
    languages,
    "",
    "## Main pages",
    ...englishRoutes,
    "",
    "## Practical guides",
    ...englishGuides,
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
