import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import page2FileLogo from "@/app/assets/logo.png";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import {
  getExtensionActionLabel,
  getExtensionLink,
} from "@/shared/routes/extension-link";
import { ButtonLink } from "@/shared/ui/components/button/button";
import { LocaleSwitcher } from "./locale-switcher";
import { SiteNavigation } from "./site-navigation";
import styles from "./site-header.module.css";

const ExtensionButton = ({
  className,
  locale,
}: {
  className?: string;
  locale: Locale;
}): ReactNode => {
  const copy = getSiteCopy(locale).header;
  const extensionLink = getExtensionLink(locale);
  const buttonClassName =
    `${styles.extensionButton} ${className ?? ""}`.trim();

  return (
    <ButtonLink
      className={buttonClassName}
      href={extensionLink.href}
      rel={extensionLink.external ? "noopener noreferrer" : undefined}
      target={extensionLink.external ? "_blank" : undefined}
    >
      {getExtensionActionLabel(locale, copy.extensionAction)}
    </ButtonLink>
  );
};

export const SiteHeader = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getSiteCopy(locale).header;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          aria-label={copy.brandLabel}
          className={styles.brand}
          href={`/${locale}`}
        >
          <Image
            alt=""
            className={styles.brandImage}
            fetchPriority="high"
            height={40}
            src={page2FileLogo}
            width={40}
          />
          <span className={styles.brandName}>PAGE 2 FILE</span>
        </Link>

        <SiteNavigation
          ariaLabel={copy.navigationLabel}
          className={styles.desktopNavigation}
          locale={locale}
        />

        <div className={styles.desktopActions}>
          <LocaleSwitcher
            className={styles.localeSwitcher}
            display="code"
            locale={locale}
          />
          <ExtensionButton locale={locale} />
        </div>

        <details className={styles.mobileNavigation}>
          <summary aria-label={copy.menuLabel}>
            <span aria-hidden="true" className={styles.menuIcon}>
              <span />
              <span />
              <span />
            </span>
          </summary>
          <div className={styles.mobilePanel}>
            <SiteNavigation
              ariaLabel={copy.mobileNavigationLabel}
              locale={locale}
            />
            <div className={styles.mobileActions}>
              <LocaleSwitcher
                className={styles.localeSwitcher}
                display="code"
                locale={locale}
              />
              <ExtensionButton
                className={styles.mobileExtensionButton}
                locale={locale}
              />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
};
