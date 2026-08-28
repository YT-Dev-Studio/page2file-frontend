import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  analyticsDataAttributes,
  type AnalyticsPlacement,
} from "@/features/analytics/analytics-events";
import { extensionInstallAvailable } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { getExtensionLink } from "@/shared/routes/extension-link";
import { ExtensionUnavailableTooltip } from "@/shared/ui/extension-unavailable-tooltip";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import { ChromeIcon } from "@/shared/ui/utilities/icons/glyphs/chrome-icon";
import styles from "./extension-promo-banner.module.css";

type ExtensionPromoBannerProps = {
  actionLabel: string;
  analyticsPlacement: Extract<
    AnalyticsPlacement,
    "home_promo" | "home_final"
  >;
  body: string;
  className?: string;
  headingId: string;
  locale: Locale;
  title: string;
  variant?: "compact" | "wide";
};

const PuzzleIcon = (): ReactNode => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 5.5h6.2a3.3 3.3 0 1 1 4.6 0h6.2a2 2 0 0 1 2 2v6.2a3.3 3.3 0 1 0 0 4.6v6.2a2 2 0 0 1-2 2h-6.2a3.3 3.3 0 1 0-4.6 0H7.5a2 2 0 0 1-2-2v-6.2a3.3 3.3 0 1 0 0-4.6V7.5a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ChromeStoreArtwork = (): ReactNode => (
  <div aria-hidden="true" className={styles.artwork}>
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className={styles.storeGrid}>
        <div className={`${styles.storeTile} ${styles.primaryTile}`}>
          <Image
            alt=""
            height={42}
            src="/demos/icon.svg"
            unoptimized
            width={42}
          />
          <span>
            <i />
            <i />
          </span>
        </div>
        <div className={styles.storeTile}>
          <span className={styles.puzzleIcon}>
            <PuzzleIcon />
          </span>
          <span>
            <i />
            <i />
          </span>
        </div>
        <div className={styles.storeTile}>
          <span className={styles.chromeIcon}>
            <ChromeIcon />
          </span>
          <span>
            <i />
            <i />
          </span>
        </div>
      </div>
    </div>
    <span className={styles.floatingPuzzle}>
      <PuzzleIcon />
    </span>
  </div>
);

const BannerContent = ({
  actionLabel,
  body,
  headingId,
  title,
}: Pick<
  ExtensionPromoBannerProps,
  "actionLabel" | "body" | "headingId" | "title"
>): ReactNode => (
  <>
    <div className={styles.copy}>
      <h2 id={headingId}>{title}</h2>
      <span>{body}</span>
      <strong className={styles.action}>
        <span className={styles.actionChrome}>
          <ChromeIcon />
        </span>
        <span>{actionLabel}</span>
        <span aria-hidden="true" className={styles.actionArrow}>
          <ArrowRightIcon />
        </span>
      </strong>
    </div>
    <ChromeStoreArtwork />
  </>
);

export const ExtensionPromoBanner = ({
  actionLabel,
  analyticsPlacement,
  body,
  className,
  headingId,
  locale,
  title,
  variant = "wide",
}: ExtensionPromoBannerProps): ReactNode => {
  const extensionLink = getExtensionLink(locale);
  const analyticsAttributes = analyticsDataAttributes({
    locale,
    name: "extension_install_click",
    placement: analyticsPlacement,
  });
  const bannerClassName =
    `${styles.banner} ${styles[variant]} ${className ?? ""}`.trim();
  const content = (
    <BannerContent
      actionLabel={actionLabel}
      body={body}
      headingId={headingId}
      title={title}
    />
  );

  if (!extensionInstallAvailable) {
    const tooltip = getSiteCopy(locale).extensionUnavailableTooltip;

    return (
      <ExtensionUnavailableTooltip
        label={`${title}. ${actionLabel}. ${tooltip}`}
        message={tooltip}
        stretch
      >
        <article
          aria-labelledby={headingId}
          className={`${bannerClassName} ${styles.disabled}`}
        >
          {content}
        </article>
      </ExtensionUnavailableTooltip>
    );
  }

  return extensionLink.external ? (
    <a
      {...analyticsAttributes}
      aria-label={`${title}. ${actionLabel}`}
      className={bannerClassName}
      href={extensionLink.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </a>
  ) : (
    <Link
      {...analyticsAttributes}
      aria-label={`${title}. ${actionLabel}`}
      className={bannerClassName}
      href={extensionLink.href}
    >
      {content}
    </Link>
  );
};
