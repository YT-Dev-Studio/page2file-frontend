"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  isLocale,
  type Locale,
} from "@/shared/i18n/locales";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import uiStyles from "@/shared/ui/ui.module.css";
import styles from "./not-found-page.module.css";

type NotFoundActions = {
  home: string;
  guide: string;
};

const actions: Record<Locale, NotFoundActions> = {
  en: {
    home: "Return home",
    guide: "Open the extension guide",
  },
  ru: {
    home: "Вернуться на главную",
    guide: "Открыть инструкцию по расширению",
  },
};

export const NotFoundPage = (): ReactNode => {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "en";
  const locale = isLocale(firstSegment) ? firstSegment : "en";
  const copy = getSeoCopy(locale, "notFound");
  const actionCopy = actions[locale];
  return (
    <PublicPage className={styles.page}>
      <Container>
        <PublicHero eyebrow="404" lead={copy.description} title={copy.title}>
          <div className={styles.actions}>
            <Link className={uiStyles.button} href={`/${locale}`}>
              {actionCopy.home}
            </Link>
            <Link
              className={uiStyles.secondaryButton}
              href={`/${locale}/chrome-extension/how-to-use`}
            >
              {actionCopy.guide}
            </Link>
          </div>
        </PublicHero>
      </Container>
    </PublicPage>
  );
};
