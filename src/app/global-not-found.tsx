import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { NotFoundPage } from "@/features/routing/not-found-page";
import { getMessages } from "@/shared/i18n/messages";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import { manrope } from "@/shared/ui/manrope-font";
import { SiteShell } from "@/shared/ui/site-shell";

const locale = "en";
const copy = getSeoCopy(locale, "notFound");

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  robots: {
    follow: false,
    index: false,
  },
};

const GlobalNotFound = (): ReactNode => {
  const messages = getMessages(locale);

  return (
    <html lang="en">
      <head>
        <title>{copy.title}</title>
        <meta content={copy.description} name="description" />
      </head>
      <body className={manrope.className}>
        <a className="skipLink" href="#main-content">
          {messages.shell.skipToContent}
        </a>
        <SiteShell locale={locale}>
          <NotFoundPage locale={locale} />
        </SiteShell>
      </body>
    </html>
  );
};

export default GlobalNotFound;
