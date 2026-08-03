import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import page2FileLogo from "@/app/assets/logo.png";
import { AnalyticsBootstrap } from "@/features/analytics/analytics-bootstrap";
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
                loading="eager"
                src={page2FileLogo}
                width={80}
              />
              <span>PAGE 2 FILE</span>
            </Link>
            <p>{copy.brandDescription}</p>
          </div>

          <nav aria-label={copy.servicesTitle} className={styles.footerLinks}>
            <h2>{copy.servicesTitle}</h2>
            <Link href={`/${locale}/convert-webpage-to-pdf`}>
              {copy.links.webpageToPdf}
            </Link>
            <Link href={`/${locale}/convert-webpage-to-powerpoint`}>
              {copy.links.webpageToPowerpoint}
            </Link>
            <Link href={`/${locale}/chrome-extension/how-to-use`}>
              {copy.links.extension}
            </Link>
          </nav>

          <nav aria-label={copy.gptsTitle} className={styles.footerLinks}>
            <h2>{copy.gptsTitle}</h2>
            <Link href={`/${locale}/page2pdf-gpt`}>One Page 2 PDF</Link>
            <Link href={`/${locale}/web2pdf-gpt`}>Web 2 PDF</Link>
            <Link href={`/${locale}/html2pdf-gpt`}>HTML 2 PDF</Link>
            <Link href={`/${locale}/one-page2powerpoint-gpt`}>
              One Page 2 PowerPoint
            </Link>
            <Link href={`/${locale}/web2powerpoint-gpt`}>Web 2 PowerPoint</Link>
          </nav>

          <nav aria-label={copy.companyTitle} className={styles.footerLinks}>
            <h2>{copy.companyTitle}</h2>
            <Link href={`/${locale}/blog`}>{copy.links.blog}</Link>
            <Link href={`/${locale}/security`}>{copy.links.security}</Link>
            <Link href={`/${locale}/privacy`}>{copy.links.privacy}</Link>
          </nav>
        </div>

        <div className={styles.footerMeta}>
          <span>{copy.copyright}</span>
          <nav aria-label={copy.legalTitle}>
            <Link href={`/${locale}/terms`}>{copy.links.terms}</Link>
            <Link href={`/${locale}/cookie-policy`}>
              {copy.links.cookiePolicy}
            </Link>
            <Link href={`/${locale}/acceptable-use`}>
              {copy.links.acceptableUse}
            </Link>
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
    <AnalyticsBootstrap />
  </div>
);
