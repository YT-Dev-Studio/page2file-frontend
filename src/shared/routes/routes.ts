export type StaticRoute =
  | ""
  | "chrome-extension/how-to-use"
  | "page2pdf-gpt"
  | "html2pdf-gpt"
  | "privacy"
  | "terms"
  | "about";

export type PublicPageFamily =
  | "home"
  | "extension"
  | "gpt-workflow"
  | "legal";

export const staticRoutes: ReadonlyArray<StaticRoute> = [
  "",
  "chrome-extension/how-to-use",
  "page2pdf-gpt",
  "html2pdf-gpt",
  "privacy",
  "terms",
  "about",
];

const publicPageFamilyByRoute: Record<StaticRoute, PublicPageFamily> = {
  "": "home",
  "chrome-extension/how-to-use": "extension",
  "html2pdf-gpt": "gpt-workflow",
  "page2pdf-gpt": "gpt-workflow",
  "privacy": "legal",
  "terms": "legal",
  "about": "legal",
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
