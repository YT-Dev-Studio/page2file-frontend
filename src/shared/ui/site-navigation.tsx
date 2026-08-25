"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { getLandingContent } from "@/content/landings";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import styles from "./site-header.module.css";

type NavigationItem = {
  activePrefix?: string;
  href: string;
  label: string;
};

type SiteNavigationProps = {
  ariaLabel: string;
  className?: string;
  locale: Locale;
};

const isNavigationItemActive = (
  item: NavigationItem,
  pathname: string,
): boolean =>
  item.activePrefix
    ? pathname === item.href || pathname.startsWith(`${item.activePrefix}/`)
    : pathname === item.href;

export const SiteNavigation = ({
  ariaLabel,
  className,
  locale,
}: SiteNavigationProps): ReactNode => {
  const pathname = usePathname();
  const extensionCopy = getExtensionCopy(locale);
  const about = getLandingContent(locale, "about");
  const items: ReadonlyArray<NavigationItem> = [
    {
      href: `/${locale}`,
      label: extensionCopy.homeLabel,
    },
    {
      activePrefix: `/${locale}/chrome-extension/how-to-use`,
      href: `/${locale}/chrome-extension/how-to-use`,
      label: extensionCopy.guideLabel,
    },
    {
      activePrefix: `/${locale}/page2pdf-gpt`,
      href: `/${locale}/page2pdf-gpt`,
      label: "Webpage 2 PDF",
    },
    {
      activePrefix: `/${locale}/html2pdf-gpt`,
      href: `/${locale}/html2pdf-gpt`,
      label: "HTML 2 PDF",
    },
    {
      activePrefix: `/${locale}/blog`,
      href: `/${locale}/blog`,
      label: locale === "ru" ? "Блог" : "Blog",
    },
    {
      activePrefix: `/${locale}/about`,
      href: `/${locale}/about`,
      label: about?.title ?? "About Page 2 File",
    },
  ];
  const navigationClassName = className ?? "";

  return (
    <nav aria-label={ariaLabel} className={navigationClassName}>
      {items.map((item): ReactNode => {
        const active = isNavigationItemActive(item, pathname);
        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={styles.navigationLink}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
