import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { getLocaleDefinition, isLocale, localeRegistry } from "@/shared/i18n/locales";
import { SiteShell } from "@/shared/ui/site-shell";

export const generateStaticParams = (): ReadonlyArray<{ locale: string }> => {
  const localeParam = (
    definition: (typeof localeRegistry)[number],
  ): { locale: string } => ({ locale: definition.code });
  return localeRegistry.map(localeParam);
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<ReactNode> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const definition = getLocaleDefinition(locale);
  return (
    <html lang={definition.htmlLang}>
      <body>
        <a className="skipLink" href="#main-content">Skip to content</a>
        <SiteShell locale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
