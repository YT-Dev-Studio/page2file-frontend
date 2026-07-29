import Link from "next/link";
import type { ReactNode } from "react";
import { ConsentBanner } from "@/features/consent/consent-banner";
import { getMessages } from "@/shared/i18n/messages";
import { getLocaleDefinition, type Locale } from "@/shared/i18n/locales";
import { ExternalCta } from "./external-cta";
import { LocaleSwitcher } from "./locale-switcher";
import styles from "./ui.module.css";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
};

export const Container = ({ children }: { children: ReactNode }): ReactNode => (
  <div className={styles.container}>{children}</div>
);

export const DraftTranslationNotice = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const definition = getLocaleDefinition(locale);
  if (definition.reviewed) {
    return null;
  }
  const messages = getMessages(locale);
  return (
    <div className={styles.draft} role="status">
      <Container>
        <div className={styles.draftInner}>{messages.draftTranslation}</div>
      </Container>
    </div>
  );
};

const SiteHeader = ({ locale }: { locale: Locale }): ReactNode => {
  const messages = getMessages(locale);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerRow}>
          <Link className={styles.brand} href={`/${locale}`}>
            <span className={styles.brandMark} aria-hidden="true">P2F</span>
            <span>Page2File</span>
          </Link>
          <nav className={styles.nav} aria-label="Primary navigation">
            <Link className={styles.navLink} href={`/${locale}/convert-webpage-to-pdf`}>
              {messages.navigation.convert}
            </Link>
            <Link className={styles.navLink} href={`/${locale}/chrome-extension`}>
              {messages.navigation.extension}
            </Link>
            <Link className={styles.navLink} href={`/${locale}/chrome-extension/how-to-use`}>
              {messages.navigation.guides}
            </Link>
            <Link className={styles.navLink} href={`/${locale}/blog`}>
              {messages.navigation.blog}
            </Link>
          </nav>
          <div className={styles.headerActions}>
            <LocaleSwitcher locale={locale} />
            <span className={styles.desktopAction}>
              <ExternalCta
                externalLinkKey="chromeExtension"
                label={messages.actions.install}
                comingSoonLabel={messages.actions.comingSoon}
                compact
              />
            </span>
            <details className={styles.mobileNav}>
              <summary>Menu</summary>
              <nav className={styles.mobilePanel} aria-label="Mobile navigation">
                <Link className={styles.navLink} href={`/${locale}/convert-webpage-to-pdf`}>
                  PDF
                </Link>
                <Link className={styles.navLink} href={`/${locale}/convert-webpage-to-powerpoint`}>
                  PowerPoint
                </Link>
                <Link className={styles.navLink} href={`/${locale}/chrome-extension`}>
                  {messages.navigation.extension}
                </Link>
                <Link className={styles.navLink} href={`/${locale}/blog`}>
                  {messages.navigation.blog}
                </Link>
              </nav>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
};

const SiteFooter = ({ locale }: { locale: Locale }): ReactNode => {
  const messages = getMessages(locale);
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          <div>
            <h2 className={styles.footerTitle}>Page2File</h2>
            <p className={styles.footerText}>
              A privacy-first prototype for turning webpage sections into
              reviewed PDF pages or PowerPoint slides.
            </p>
          </div>
          <nav className={styles.footerLinks} aria-label="Product">
            <Link href={`/${locale}/convert-webpage-to-pdf`}>Webpage to PDF</Link>
            <Link href={`/${locale}/convert-webpage-to-powerpoint`}>Webpage to PowerPoint</Link>
            <Link href={`/${locale}/chrome-extension`}>Chrome extension</Link>
            <Link href={`/${locale}/changelog`}>Changelog</Link>
          </nav>
          <nav className={styles.footerLinks} aria-label="Legal">
            <Link href={`/${locale}/privacy`}>{messages.footer.privacy}</Link>
            <Link href={`/${locale}/terms`}>{messages.footer.terms}</Link>
            <Link href={`/${locale}/security`}>{messages.footer.security}</Link>
            <Link href={`/${locale}/acceptable-use`}>Acceptable use</Link>
          </nav>
        </div>
        <div className={styles.footerMeta}>
          Prototype · No accounts · No conversion history · Sample outputs only
        </div>
      </Container>
    </footer>
  );
};

export const SiteShell = ({ children, locale }: SiteShellProps): ReactNode => (
  <div className={styles.shell}>
    <SiteHeader locale={locale} />
    <DraftTranslationNotice locale={locale} />
    {children}
    <SiteFooter locale={locale} />
    <ConsentBanner locale={locale} />
  </div>
);
