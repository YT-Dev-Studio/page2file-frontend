export type StaticRoute =
  | ""
  | "convert-webpage-to-pdf"
  | "convert-webpage-to-powerpoint"
  | "chrome-extension/how-to-use"
  | "page2pdf-gpt"
  | "web2pdf-gpt"
  | "html2pdf-gpt"
  | "one-page2powerpoint-gpt"
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

export type PublicPageFamily =
  | "home"
  | "converter"
  | "extension"
  | "gpt-workflow"
  | "chat-export"
  | "content"
  | "legal"
  | "security";

export const staticRoutes: ReadonlyArray<StaticRoute> = [
  "",
  "convert-webpage-to-pdf",
  "convert-webpage-to-powerpoint",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "web2pdf-gpt",
  "html2pdf-gpt",
  "one-page2powerpoint-gpt",
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

const publicPageFamilyByRoute: Record<StaticRoute, PublicPageFamily> = {
  "": "home",
  "acceptable-use": "legal",
  "blog": "content",
  "changelog": "content",
  "chrome-extension/how-to-use": "extension",
  "convert-webpage-to-pdf": "converter",
  "convert-webpage-to-powerpoint": "converter",
  "cookie-policy": "legal",
  "export-ai-chat-to-pdf": "chat-export",
  "export-chatgpt-to-pdf": "chat-export",
  "export-claude-to-pdf": "chat-export",
  "export-gemini-to-pdf": "chat-export",
  "export-grok-to-pdf": "chat-export",
  "html2pdf-gpt": "gpt-workflow",
  "one-page2powerpoint-gpt": "gpt-workflow",
  "page2pdf-gpt": "gpt-workflow",
  "privacy": "legal",
  "security": "security",
  "terms": "legal",
  "updates": "content",
  "web2pdf-gpt": "gpt-workflow",
  "web2powerpoint-gpt": "gpt-workflow",
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

export const getPublicPageFamily = (
  route: StaticRoute,
): PublicPageFamily => publicPageFamilyByRoute[route];
