"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
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

type NavigationLabels = {
  about: string;
  blog: string;
  guide: string;
  home: string;
  htmlToPdf: string;
  webToPdf: string;
};

const navigationLabels: Record<Locale, NavigationLabels> = {
  en: {
    about: "Editorial principles",
    blog: "Blog",
    guide: "How to use",
    home: "Home",
    htmlToPdf: "HTML 2 PDF",
    webToPdf: "Web 2 PDF",
  },
  ru: {
    about: "Редакционные принципы",
    blog: "Блог",
    guide: "Как использовать",
    home: "Главная",
    htmlToPdf: "HTML 2 PDF",
    webToPdf: "Web 2 PDF",
  },
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
  const labels = navigationLabels[locale];
  const items: ReadonlyArray<NavigationItem> = [
    {
      href: `/${locale}`,
      label: labels.home,
    },
    {
      activePrefix: `/${locale}/chrome-extension/how-to-use`,
      href: `/${locale}/chrome-extension/how-to-use`,
      label: labels.guide,
    },
    {
      activePrefix: `/${locale}/page2pdf-gpt`,
      href: `/${locale}/page2pdf-gpt`,
      label: labels.webToPdf,
    },
    {
      activePrefix: `/${locale}/html2pdf-gpt`,
      href: `/${locale}/html2pdf-gpt`,
      label: labels.htmlToPdf,
    },
    {
      activePrefix: `/${locale}/blog`,
      href: `/${locale}/blog`,
      label: labels.blog,
    },
    {
      activePrefix: `/${locale}/about`,
      href: `/${locale}/about`,
      label: labels.about,
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
