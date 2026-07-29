export type StaticRoute =
  | ""
  | "convert-webpage-to-pdf"
  | "convert-webpage-to-powerpoint"
  | "chrome-extension"
  | "chrome-extension/welcome"
  | "chrome-extension/how-to-use"
  | "page2pdf-gpt"
  | "web2pdf-gpt"
  | "html2pdf-gpt"
  | "web2powerpoint-gpt"
  | "export-ai-chat-to-pdf"
  | "export-chatgpt-to-pdf"
  | "export-claude-to-pdf"
  | "export-gemini-to-pdf"
  | "export-grok-to-pdf"
  | "blog"
  | "updates"
  | "changelog"
  | "privacy"
  | "terms"
  | "cookie-policy"
  | "security"
  | "acceptable-use";

export const staticRoutes: ReadonlyArray<StaticRoute> = [
  "",
  "convert-webpage-to-pdf",
  "convert-webpage-to-powerpoint",
  "chrome-extension",
  "chrome-extension/welcome",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "web2pdf-gpt",
  "html2pdf-gpt",
  "web2powerpoint-gpt",
  "export-ai-chat-to-pdf",
  "export-chatgpt-to-pdf",
  "export-claude-to-pdf",
  "export-gemini-to-pdf",
  "export-grok-to-pdf",
  "blog",
  "updates",
  "changelog",
  "privacy",
  "terms",
  "cookie-policy",
  "security",
  "acceptable-use",
];

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
