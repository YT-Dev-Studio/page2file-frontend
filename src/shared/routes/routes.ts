import type { Locale } from "@/shared/i18n/locales";

export type ExtensionSeoRoute =
  | "chrome-extension/webpage-to-pdf"
  | "chrome-extension/ai-chat-to-pdf"
  | "chrome-extension/messenger-chat-to-pdf"
  | "chrome-extension/full-page-pdf"
  | "chrome-extension/webpage-to-pdf-with-links"
  | "chrome-extension/html-page-to-pdf"
  | "chrome-extension/chatgpt-to-pdf"
  | "chrome-extension/claude-to-pdf"
  | "chrome-extension/whatsapp-chat-to-pdf"
  | "chrome-extension/telegram-chat-to-pdf"
  | "chrome-extension/chrome-print-vs-page-2-pdf";

export type StaticRoute =
  | ""
  | "chrome-extension/how-to-use"
  | "page2pdf-gpt"
  | "html2pdf-gpt"
  | "privacy"
  | "terms"
  | "about"
  | ExtensionSeoRoute;

export type PublicPageFamily =
  | "home"
  | "extension"
  | "extension-seo"
  | "gpt-workflow"
  | "content"
  | "legal";

export const extensionSeoRoutes: ReadonlyArray<ExtensionSeoRoute> = [
  "chrome-extension/webpage-to-pdf",
  "chrome-extension/ai-chat-to-pdf",
  "chrome-extension/messenger-chat-to-pdf",
  "chrome-extension/full-page-pdf",
  "chrome-extension/webpage-to-pdf-with-links",
  "chrome-extension/html-page-to-pdf",
  "chrome-extension/chatgpt-to-pdf",
  "chrome-extension/claude-to-pdf",
  "chrome-extension/whatsapp-chat-to-pdf",
  "chrome-extension/telegram-chat-to-pdf",
  "chrome-extension/chrome-print-vs-page-2-pdf",
];

export const staticRoutes: ReadonlyArray<StaticRoute> = [
  "",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "html2pdf-gpt",
  "privacy",
  "terms",
  "about",
  ...extensionSeoRoutes,
];

const publicPageFamilyByRoute: Record<StaticRoute, PublicPageFamily> = {
  "": "home",
  "chrome-extension/how-to-use": "extension",
  "html2pdf-gpt": "gpt-workflow",
  "page2pdf-gpt": "gpt-workflow",
  "privacy": "legal",
  "terms": "legal",
  "about": "legal",
  "chrome-extension/webpage-to-pdf": "extension-seo",
  "chrome-extension/ai-chat-to-pdf": "extension-seo",
  "chrome-extension/messenger-chat-to-pdf": "extension-seo",
  "chrome-extension/full-page-pdf": "extension-seo",
  "chrome-extension/webpage-to-pdf-with-links": "extension-seo",
  "chrome-extension/html-page-to-pdf": "extension-seo",
  "chrome-extension/chatgpt-to-pdf": "extension-seo",
  "chrome-extension/claude-to-pdf": "extension-seo",
  "chrome-extension/whatsapp-chat-to-pdf": "extension-seo",
  "chrome-extension/telegram-chat-to-pdf": "extension-seo",
  "chrome-extension/chrome-print-vs-page-2-pdf": "extension-seo",
};

export const technicalRoutePrefixes: ReadonlyArray<string> = [
  "preview/",
  "download/",
];

export const routePath = (locale: string, route: string): string =>
  route.length > 0 ? `/${locale}/${route}` : `/${locale}`;

export const slugToRoute = (slug: ReadonlyArray<string> | undefined): string =>
  slug?.join("/") ?? "";

export const isStaticRoute = (route: string): route is StaticRoute => {
  const matchesRoute = (candidate: StaticRoute): boolean => candidate === route;
  return staticRoutes.some(matchesRoute);
};

export const isExtensionSeoRoute = (
  route: string,
): route is ExtensionSeoRoute => {
  const matchesRoute = (candidate: ExtensionSeoRoute): boolean =>
    candidate === route;
  return extensionSeoRoutes.some(matchesRoute);
};

export const isStaticRouteAvailable = (
  locale: Locale,
  route: StaticRoute,
): boolean => !isExtensionSeoRoute(route) || locale === "en";

export const staticRoutesForLocale = (
  locale: Locale,
): ReadonlyArray<StaticRoute> =>
  staticRoutes.filter((route): boolean => isStaticRouteAvailable(locale, route));

export const getPublicPageFamily = (
  route: StaticRoute,
): PublicPageFamily => publicPageFamilyByRoute[route];
