import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { getLocaleDefinition, isLocale, localeRegistry } from "@/shared/i18n/locales";
import { SiteShell } from "@/shared/ui/site-shell";
import { getMessages } from "@/shared/i18n/messages";
import { manrope } from "@/shared/ui/manrope-font";
import { OrganizationJsonLd } from "@/shared/seo/structured-data";

export const generateStaticParams = (): Array<{ locale: string }> => {
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
  const messages = getMessages(locale);
  return (
    <html data-scroll-behavior="smooth" lang={definition.htmlLang}>
      <body className={manrope.className}>
        <OrganizationJsonLd locale={locale} />
        <a className="skipLink" href="#main-content">
          {messages.shell.skipToContent}
        </a>
        <SiteShell locale={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
