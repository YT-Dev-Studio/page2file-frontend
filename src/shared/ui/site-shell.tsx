import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import page2FileLogo from "@/app/assets/logo.png";
import { getLandingContent } from "@/content/landings";
import { AnalyticsBootstrap } from "@/features/analytics/analytics-bootstrap";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { SiteHeader } from "./site-header";
import styles from "./ui.module.css";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
};

export const Container = ({ children }: { children: ReactNode }): ReactNode => (
  <div className={styles.container}>{children}</div>
);

const SiteFooter = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getSiteCopy(locale).footer;
  const extensionCopy = getExtensionCopy(locale);
  const about = getLandingContent(locale, "about");

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link
              aria-label="Page 2 File"
              className={styles.footerBrandLink}
              href={`/${locale}`}
            >
              <Image
                alt=""
                className={styles.footerLogo}
                height={80}
                src={page2FileLogo}
                width={80}
              />
              <span>PAGE 2 FILE</span>
            </Link>
            <p>{extensionCopy.homeLead}</p>
          </div>

          <nav aria-label={copy.servicesTitle} className={styles.footerLinks}>
            <h2>{copy.servicesTitle}</h2>
            <Link href={`/${locale}/chrome-extension/how-to-use`}>
              {copy.links.extension}
            </Link>
            <Link href={`/${locale}/blog`}>
              {locale === "ru" ? "Блог" : "Blog"}
            </Link>
            {locale === "en" ? (
              <>
                <Link href="/en/chrome-extension/webpage-to-pdf">
                  Webpage to PDF
                </Link>
                <Link href="/en/chrome-extension/ai-chat-to-pdf">
                  AI chat to PDF
                </Link>
                <Link href="/en/chrome-extension/messenger-chat-to-pdf">
                  Messenger chat to PDF
                </Link>
              </>
            ) : null}
          </nav>

          <nav aria-label={copy.gptsTitle} className={styles.footerLinks}>
            <h2>{copy.gptsTitle}</h2>
            <Link href={`/${locale}/page2pdf-gpt`}>
              Webpage 2 PDF
            </Link>
            <Link href={`/${locale}/html2pdf-gpt`}>HTML 2 PDF</Link>
          </nav>

          <nav aria-label={copy.companyTitle} className={styles.footerLinks}>
            <h2>{copy.companyTitle}</h2>
            <Link href={`/${locale}/about`}>
              {about?.title ?? "About Page 2 File"}
            </Link>
            <Link href={`/${locale}/support`}>{copy.links.support}</Link>
            <Link href={`/${locale}/privacy`}>{copy.links.privacy}</Link>
            <Link href={`/${locale}/privacy#cookies`}>
              {copy.links.cookiePolicy}
            </Link>
          </nav>
        </div>

        <div className={styles.footerMeta}>
          <span>{copy.copyright}</span>
          <nav aria-label={copy.legalTitle}>
            <Link href={`/${locale}/terms`}>{copy.links.terms}</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export const SiteShell = ({ children, locale }: SiteShellProps): ReactNode => (
  <div className={styles.shell}>
    <SiteHeader locale={locale} />
    {children}
    <SiteFooter locale={locale} />
    <AnalyticsBootstrap locale={locale} />
  </div>
);
