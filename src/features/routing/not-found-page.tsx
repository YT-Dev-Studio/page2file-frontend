"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  isLocale,
  type Locale,
} from "@/shared/i18n/locales";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import { ButtonLink } from "@/shared/ui/components/button/button";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
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
            <ButtonLink href={`/${locale}`} showIcon={false} size="medium">
              {actionCopy.home}
            </ButtonLink>
            <ButtonLink
              href={`/${locale}/chrome-extension/how-to-use`}
              showIcon={false}
              size="medium"
              variant="secondary"
            >
              {actionCopy.guide}
            </ButtonLink>
          </div>
        </PublicHero>
      </Container>
    </PublicPage>
  );
};
