import Link from "next/link";
import type { ReactNode } from "react";
import { ConsentBanner } from "@/features/consent/consent-banner";
import { getMessages } from "@/shared/i18n/messages";
import { getLocaleDefinition, type Locale } from "@/shared/i18n/locales";
import { ExternalCta } from "./external-cta";
import { LocaleSwitcher } from "./locale-switcher";
import { RussianSiteHeader } from "./russian-site-header";
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
          <nav className={styles.nav} aria-label={messages.shell.primaryNavigation}>
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
              <summary>{messages.shell.menu}</summary>
              <nav className={styles.mobilePanel} aria-label={messages.shell.mobileNavigation}>
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

const SiteFooter = ({
  flushTop = false,
  locale,
}: {
  flushTop?: boolean;
  locale: Locale;
}): ReactNode => {
  const messages = getMessages(locale);
  const footerClassName =
    `${styles.footer} ${flushTop ? styles.footerFlush : ""}`.trim();
  return (
    <footer className={footerClassName}>
      <Container>
        <div className={styles.footerGrid}>
          <div>
            <h2 className={styles.footerTitle}>Page2File</h2>
            <p className={styles.footerText}>
              {messages.shell.footerDescription}
            </p>
          </div>
          <nav className={styles.footerLinks} aria-label={messages.shell.productNavigation}>
            <Link href={`/${locale}/convert-webpage-to-pdf`}>{messages.shell.pdfLink}</Link>
            <Link href={`/${locale}/convert-webpage-to-powerpoint`}>{messages.shell.powerpointLink}</Link>
            <Link href={`/${locale}/chrome-extension`}>{messages.shell.extensionLink}</Link>
            <Link href={`/${locale}/changelog`}>{messages.shell.changelogLink}</Link>
          </nav>
          <nav className={styles.footerLinks} aria-label={messages.shell.legalNavigation}>
            <Link href={`/${locale}/privacy`}>{messages.footer.privacy}</Link>
            <Link href={`/${locale}/terms`}>{messages.footer.terms}</Link>
            <Link href={`/${locale}/security`}>{messages.footer.security}</Link>
            <Link href={`/${locale}/acceptable-use`}>{messages.shell.acceptableUse}</Link>
          </nav>
        </div>
        <div className={styles.footerMeta}>
          {messages.shell.footerMeta}
        </div>
      </Container>
    </footer>
  );
};

export const SiteShell = ({ children, locale }: SiteShellProps): ReactNode => (
  <div className={styles.shell}>
    {locale === "ru" ? <RussianSiteHeader /> : <SiteHeader locale={locale} />}
    <DraftTranslationNotice locale={locale} />
    {children}
    <SiteFooter flushTop={locale === "ru"} locale={locale} />
    <ConsentBanner locale={locale} />
  </div>
);
