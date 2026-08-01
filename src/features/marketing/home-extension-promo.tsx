import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { getExtensionLink } from "@/shared/routes/extension-link";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import { ChromeIcon } from "@/shared/ui/utilities/icons/glyphs/chrome-icon";
import { ClickCursorIcon } from "@/shared/ui/utilities/icons/glyphs/click-cursor-icon";
import { getChromeInstallLabel, getHomeCopy } from "./home-copy";
import styles from "./home.module.css";

type HomeExtensionBannerProps = {
  body: string;
  eyebrow: string;
  headingId: string;
  locale: Locale;
  title: string;
};

export const HomeExtensionBanner = ({
  body,
  eyebrow,
  headingId,
  locale,
  title,
}: HomeExtensionBannerProps): ReactNode => {
  const extensionLink = getExtensionLink(locale);
  const chromeInstallLabel = getChromeInstallLabel(locale);

  return (
    <Link
      aria-label={`${title}. ${chromeInstallLabel}`}
      className={styles.promoCard}
      href={extensionLink.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.promoCopy}>
        <p>{eyebrow}</p>
        <h2 id={headingId}>{title}</h2>
        <span>{body}</span>
      </div>
      <span aria-hidden="true" className={styles.promoArrow}>
        <ArrowRightIcon />
      </span>
      <span className={styles.chromeBadge}>
        <span aria-hidden="true" className={styles.chromeBadgeLogo}>
          <ChromeIcon />
        </span>
        <span>{chromeInstallLabel}</span>
        <span aria-hidden="true" className={styles.chromeBadgeCursor}>
          <ClickCursorIcon />
        </span>
      </span>
    </Link>
  );
};

export const HomeExtensionPromo = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).promo;

  return (
    <section
      aria-labelledby="extension-promo-title"
      className={styles.promoSection}
    >
      <div className={styles.pageGutters}>
        <HomeExtensionBanner
          body={copy.body}
          eyebrow={copy.eyebrow}
          headingId="extension-promo-title"
          locale={locale}
          title={copy.title}
        />
      </div>
    </section>
  );
};
