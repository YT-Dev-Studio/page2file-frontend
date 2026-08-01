import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import page2FileLogo from "@/app/assets/logo.png";
import { externalLinks } from "@/shared/config/site";
import {
  ButtonLink,
} from "@/shared/ui/components/button/button";
import { ChromeIcon } from "@/shared/ui/utilities/icons/glyphs/chrome-icon";
import { LocaleSwitcher } from "./locale-switcher";
import styles from "./russian-site-header.module.css";

type NavigationItem = {
  href: string;
  label: string;
};

const navigationItems: ReadonlyArray<NavigationItem> = [
  { href: "/ru#features", label: "Преимущества" },
  { href: "/ru#how-it-works", label: "Как начать" },
  { href: "/ru#reviews", label: "Отзывы" },
  { href: "/ru#faq", label: "FAQ" },
];

const mapNavigationItem = ({
  href,
  label,
}: NavigationItem): ReactNode => (
  <Link className={styles.navigationLink} href={href} key={href}>
    {label}
  </Link>
);

const ExtensionButton = ({
  className,
}: {
  className?: string;
}): ReactNode => {
  const chromeExtensionUrl = externalLinks.chromeExtension;
  const buttonClassName =
    `${styles.extensionButton} ${className ?? ""}`.trim();

  if (chromeExtensionUrl) {
    return (
      <ButtonLink
        className={buttonClassName}
        href={chromeExtensionUrl}
        icon={<ChromeIcon />}
        iconPosition="start"
        rel="noopener noreferrer"
        target="_blank"
      >
        Скачать расширение
      </ButtonLink>
    );
  }

  return (
    <ButtonLink
      className={buttonClassName}
      href="/ru/chrome-extension"
      icon={<ChromeIcon />}
      iconPosition="start"
    >
      Скачать расширение
    </ButtonLink>
  );
};

export const RussianSiteHeader = (): ReactNode => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link
        aria-label="Page2File — главная"
        className={styles.brand}
        href="/ru"
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
        aria-label="Основная навигация"
        className={styles.desktopNavigation}
      >
        {navigationItems.map(mapNavigationItem)}
      </nav>

      <div className={styles.desktopActions}>
        <LocaleSwitcher
          className={styles.localeSwitcher}
          display="code"
          locale="ru"
        />
        <ExtensionButton />
      </div>

      <details className={styles.mobileNavigation}>
        <summary aria-label="Открыть меню">
          <span aria-hidden="true" className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </span>
        </summary>
        <div className={styles.mobilePanel}>
          <nav aria-label="Мобильная навигация">
            {navigationItems.map(mapNavigationItem)}
          </nav>
          <div className={styles.mobileActions}>
            <LocaleSwitcher
              className={styles.localeSwitcher}
              display="code"
              locale="ru"
            />
            <ExtensionButton className={styles.mobileExtensionButton} />
          </div>
        </div>
      </details>
    </div>
  </header>
);
