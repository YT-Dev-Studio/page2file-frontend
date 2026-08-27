import Image from "next/image";
import type { ReactNode } from "react";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { ExternalCta } from "@/shared/ui/external-cta";
import { ButtonLink } from "@/shared/ui/components/button/button";
import { Container } from "@/shared/ui/site-shell";
import { getHomeMarketingCopy } from "./home-content";
import styles from "./home.module.css";

type BrowserGlyphVariant =
  | "back"
  | "forward"
  | "lock"
  | "menu"
  | "profile"
  | "puzzle"
  | "reload"
  | "star";

type BrowserGlyphProps = {
  className?: string;
  variant: BrowserGlyphVariant;
};

const BrowserGlyph = ({
  className,
  variant,
}: BrowserGlyphProps): ReactNode => {
  const glyphClassName = `${styles.browserGlyph} ${className ?? ""}`.trim();

  if (variant === "back" || variant === "forward") {
    return (
      <svg className={glyphClassName} viewBox="0 0 24 24">
        <path
          d={variant === "back" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      </svg>
    );
  }

  if (variant === "reload") {
    return (
      <svg className={glyphClassName} viewBox="0 0 24 24">
        <path
          d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.75 10h-2.1A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "lock") {
    return (
      <svg className={glyphClassName} viewBox="0 0 24 24">
        <rect
          fill="none"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
          width="12"
          x="6"
          y="10"
        />
        <path
          d="M9 10V7a3 3 0 0 1 6 0v3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (variant === "star") {
    return (
      <svg className={glyphClassName} viewBox="0 0 24 24">
        <path
          d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (variant === "puzzle") {
    return (
      <svg className={glyphClassName} viewBox="0 0 24 24">
        <path
          d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "profile") {
    return (
      <svg className={glyphClassName} viewBox="0 0 24 24">
        <circle cx="12" cy="8" fill="none" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M6.5 19a5.5 5.5 0 0 1 11 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg className={glyphClassName} viewBox="0 0 24 24">
      <circle cx="12" cy="5" fill="currentColor" r="1.5" />
      <circle cx="12" cy="12" fill="currentColor" r="1.5" />
      <circle cx="12" cy="19" fill="currentColor" r="1.5" />
    </svg>
  );
};

const ChromeBrowserChrome = (): ReactNode => (
  <div aria-hidden="true" className={styles.browserChrome}>
    <div className={styles.browserTabStrip}>
      <span className={styles.browserWindowControls}>
        <i />
        <i />
        <i />
      </span>
      <span className={styles.browserTab}>
        <Image
          alt=""
          height={16}
          src="/brand/page-2-pdf-icon-16.png"
          width={16}
        />
        <span className={styles.browserTabTitle}>Page 2 File — extension</span>
        <i className={styles.browserTabClose}>×</i>
      </span>
      <span className={styles.browserNewTab}>+</span>
    </div>
    <div className={styles.browserToolbar}>
      <span className={styles.browserNavigation}>
        <BrowserGlyph className={styles.browserMobileHidden} variant="back" />
        <BrowserGlyph className={styles.browserMobileHidden} variant="forward" />
        <BrowserGlyph variant="reload" />
      </span>
      <span className={styles.browserOmnibox}>
        <BrowserGlyph variant="lock" />
        <span className={styles.browserAddress}>page2file.com/chrome-extension</span>
        <BrowserGlyph className={styles.browserMobileHidden} variant="star" />
      </span>
      <span className={styles.browserActions}>
        <span className={styles.browserExtensionIcon}>
          <Image
            alt=""
            height={20}
            src="/brand/page-2-pdf-icon-32.png"
            width={20}
          />
        </span>
        <BrowserGlyph className={styles.browserMobileHidden} variant="puzzle" />
        <BrowserGlyph className={styles.browserMobileHidden} variant="profile" />
        <BrowserGlyph className={styles.browserMobileHidden} variant="menu" />
      </span>
    </div>
  </div>
);

export const HomeHero = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const marketingCopy = getHomeMarketingCopy(locale);
  const siteCopy = getSiteCopy(locale);

  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>PAGE 2 FILE · CHROME EXTENSION</p>
            <h1 className={styles.title}>{copy.homeTitle}</h1>
            <p className={styles.lead}>{copy.homeLead}</p>
            <div className={styles.heroActions}>
              <ExternalCta
                externalLinkKey="chromeExtension"
                label={siteCopy.header.extensionAction}
                placeholderLabel={siteCopy.header.extensionAction}
              />
              <ButtonLink
                href={`/${locale}/chrome-extension/how-to-use`}
                showIcon={false}
                size="medium"
                variant="secondary"
              >
                {copy.guideActionLabel}
              </ButtonLink>
            </div>
          </div>
          <div className={styles.heroArtwork}>
            <div className={styles.heroStage}>
              <ChromeBrowserChrome />
              <div className={styles.heroCanvas}>
                <Image
                  alt={marketingCopy.heroIllustrationAlt}
                  className={styles.heroImage}
                  height={1254}
                  priority
                  sizes="(max-width: 900px) 90vw, 42vw"
                  src="/brand/extension-flow-gel-pen.png"
                  width={1254}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
