"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  isLocale,
  isPublishedLocale,
  type LocalizedPublished,
} from "@/shared/i18n/locales";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import { Container } from "@/shared/ui/site-shell";
import uiStyles from "@/shared/ui/ui.module.css";
import styles from "@/features/marketing/marketing.module.css";

type NotFoundActions = {
  home: string;
  converter: string;
};

const actions: LocalizedPublished<NotFoundActions> = {
  en: {
    home: "Return home",
    converter: "Open the PDF converter",
  },
  ru: {
    home: "Вернуться на главную",
    converter: "Открыть конвертер PDF",
  },
};

export const NotFoundPage = (): ReactNode => {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "en";
  const locale = isLocale(firstSegment) ? firstSegment : "en";
  const publishedLocale = isPublishedLocale(locale) ? locale : "en";
  const copy = getSeoCopy(locale, "notFound");
  const actionCopy = actions[publishedLocale];
  return (
    <main className={styles.main} id="main-content">
      <section className={styles.hero}>
        <Container>
          <p className={styles.eyebrow}>404</p>
          <h1 className={styles.landingTitle}>{copy.title}</h1>
          <p className={styles.lead}>{copy.description}</p>
          <div className={styles.actions}>
            <Link className={uiStyles.button} href={`/${locale}`}>
              {actionCopy.home}
            </Link>
            <Link
              className={uiStyles.secondaryButton}
              href={`/${locale}/convert-webpage-to-pdf`}
            >
              {actionCopy.converter}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};
