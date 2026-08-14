import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import { ExternalCta } from "@/shared/ui/external-cta";
import { Container } from "@/shared/ui/site-shell";
import uiStyles from "@/shared/ui/ui.module.css";
import { getHomeMarketingCopy } from "./home-content";
import styles from "./home.module.css";

export const HomeHero = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const marketingCopy = getHomeMarketingCopy(locale);

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
                label={copy.browseChromeLabel}
                placeholderLabel={copy.browseChromeLabel}
              />
              <Link
                className={uiStyles.secondaryButton}
                href={`/${locale}/chrome-extension/how-to-use`}
              >
                {copy.guideLabel}
              </Link>
            </div>
          </div>
          <div className={styles.heroArtwork}>
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
      </Container>
    </section>
  );
};
