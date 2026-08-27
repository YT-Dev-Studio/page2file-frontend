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
  heading: string;
  home: string;
  guide: string;
  hint: string;
};

const actions: Record<Locale, NotFoundActions> = {
  en: {
    heading: "This page wandered off",
    home: "Return home",
    guide: "Open the extension guide",
    hint: "Check the address, or continue from one of the useful pages above.",
  },
  ru: {
    heading: "Эта страница потерялась",
    home: "Вернуться на главную",
    guide: "Открыть инструкцию по расширению",
    hint: "Проверьте адрес или продолжите с одной из полезных страниц выше.",
  },
};

const NotFoundArtwork = (): ReactNode => (
  <div aria-hidden="true" className={styles.artwork}>
    <svg
      className={styles.illustration}
      fill="none"
      focusable="false"
      viewBox="0 0 520 380"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          height="8"
          id="not-found-hatching"
          patternUnits="userSpaceOnUse"
          width="8"
        >
          <path className={styles.hatchLine} d="M-2 8 8-2M2 10 10 2" />
        </pattern>
      </defs>
      <path
        className={styles.browserShadow}
        d="M63 77c0-15 12-27 27-27h338c15 0 27 12 27 27v223c0 15-12 27-27 27H90c-15 0-27-12-27-27V77Z"
      />
      <path
        className={styles.browserFrame}
        d="M55 69c0-15 12-27 27-27h338c15 0 27 12 27 27v223c0 15-12 27-27 27H82c-15 0-27-12-27-27V69Z"
      />
      <path className={styles.browserDivider} d="M56 101h390" />
      <circle className={styles.dotCoral} cx="80" cy="71" r="6" />
      <circle className={styles.dotOrange} cx="99" cy="71" r="6" />
      <circle className={styles.dotGreen} cx="118" cy="71" r="6" />
      <path
        className={styles.addressBar}
        d="M149 60h244c9 0 16 7 16 16s-7 16-16 16H149c-9 0-16-7-16-16s7-16 16-16Z"
      />
      <path className={styles.addressMark} d="M165 76h149" />
      <path
        className={styles.pageShape}
        d="M183 141h116l48 49v75c0 14-11 25-25 25H183c-14 0-25-11-25-25v-99c0-14 11-25 25-25Z"
      />
      <path className={styles.pageFold} d="M299 143v47h46" />
      <path
        className={styles.hatching}
        d="M183 154h102v48H171v-36c0-7 5-12 12-12Z"
      />
      <path className={styles.copyLine} d="M190 226h93M190 247h72" />
      <path
        className={styles.searchCircle}
        d="M341 234a45 45 0 1 1 0 90 45 45 0 0 1 0-90Z"
      />
      <path className={styles.searchHandle} d="m374 296 42 42" />
      <path className={styles.lostMark} d="M325 259c3-13 29-15 32 1 2 11-13 13-13 24M344 298h.2" />
      <path className={styles.sparkBlue} d="m126 170-20-8M119 190H96M132 151l-10-18" />
      <path className={styles.sparkOrange} d="m404 177 18-11M409 197l22-2M394 160l8-19" />
    </svg>
  </div>
);

export const NotFoundPage = ({
  locale: localeOverride,
}: {
  locale?: Locale;
} = {}): ReactNode => {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "en";
  const locale = localeOverride ?? (isLocale(firstSegment) ? firstSegment : "en");
  const copy = getSeoCopy(locale, "notFound");
  const actionCopy = actions[locale];
  return (
    <PublicPage className={styles.page}>
      <Container>
        <div className={styles.layout}>
          <PublicHero
            className={styles.copy}
            eyebrow="404 · PAGE 2 FILE"
            lead={copy.description}
            title={actionCopy.heading}
          >
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
            <p className={styles.hint}>{actionCopy.hint}</p>
          </PublicHero>
          <NotFoundArtwork />
        </div>
      </Container>
    </PublicPage>
  );
};
