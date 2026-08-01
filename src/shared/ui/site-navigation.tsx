"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import styles from "./site-header.module.css";

type NavigationLabels = {
  blog: string;
  faq: string;
  features: string;
  howItWorks: string;
};

type NavigationItem = {
  activePrefix?: string;
  href: string;
  label: string;
};

type SiteNavigationProps = {
  ariaLabel: string;
  className?: string;
  labels: NavigationLabels;
  locale: Locale;
};

const isHomePath = (pathname: string, locale: Locale): boolean =>
  pathname === `/${locale}` || pathname === `/${locale}/`;

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
  labels,
  locale,
}: SiteNavigationProps): ReactNode => {
  const pathname = usePathname();
  const home = isHomePath(pathname, locale);
  const homeItems: ReadonlyArray<NavigationItem> = [
    {
      href: `/${locale}#features`,
      label: labels.features,
    },
    {
      href: `/${locale}#how-it-works`,
      label: labels.howItWorks,
    },
    {
      href: `/${locale}#blog`,
      label: labels.blog,
    },
    {
      href: `/${locale}#faq`,
      label: labels.faq,
    },
  ];
  const productItems: ReadonlyArray<NavigationItem> = [
    {
      href: `/${locale}/convert-webpage-to-pdf`,
      label: "Web 2 PDF",
    },
    {
      href: `/${locale}/convert-webpage-to-powerpoint`,
      label: "Web 2 PowerPoint",
    },
    {
      activePrefix: `/${locale}/blog`,
      href: `/${locale}/blog`,
      label: labels.blog,
    },
  ];
  const items = home ? homeItems : productItems;
  const navigationClassName = className ?? "";

  return (
    <nav aria-label={ariaLabel} className={navigationClassName}>
      {items.map((item): ReactNode => {
        const active = !home && isNavigationItemActive(item, pathname);
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
