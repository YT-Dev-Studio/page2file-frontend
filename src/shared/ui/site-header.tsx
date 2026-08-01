import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import page2FileLogo from "@/app/assets/logo.png";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { getExtensionLink } from "@/shared/routes/extension-link";
import { ButtonLink } from "@/shared/ui/components/button/button";
import { LocaleSwitcher } from "./locale-switcher";
import styles from "./site-header.module.css";

type NavigationItem = {
  href: string;
  label: string;
};

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
      {copy.extensionAction}
    </ButtonLink>
  );
};

export const SiteHeader = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getSiteCopy(locale).header;
  const navigationItems: ReadonlyArray<NavigationItem> = [
    {
      href: `/${locale}#features`,
      label: copy.navigation.features,
    },
    {
      href: `/${locale}#how-it-works`,
      label: copy.navigation.howItWorks,
    },
    {
      href: `/${locale}#blog`,
      label: copy.navigation.blog,
    },
    {
      href: `/${locale}#faq`,
      label: copy.navigation.faq,
    },
  ];
  const renderNavigationItem = ({
    href,
    label,
  }: NavigationItem): ReactNode => (
    <Link className={styles.navigationLink} href={href} key={href}>
      {label}
    </Link>
  );

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
            height={40}
            priority
            src={page2FileLogo}
            width={40}
          />
          <span className={styles.brandName}>PAGE2FILE</span>
        </Link>

        <nav
          aria-label={copy.navigationLabel}
          className={styles.desktopNavigation}
        >
          {navigationItems.map(renderNavigationItem)}
        </nav>

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
            <nav aria-label={copy.mobileNavigationLabel}>
              {navigationItems.map(renderNavigationItem)}
            </nav>
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
