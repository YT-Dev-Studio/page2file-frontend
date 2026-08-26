import Image from "next/image";
import type { ReactNode } from "react";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import { ExternalCta } from "@/shared/ui/external-cta";
import { ButtonLink } from "@/shared/ui/components/button/button";
import { Container } from "@/shared/ui/site-shell";
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
              <ButtonLink
                href={`/${locale}/chrome-extension/how-to-use`}
                showIcon={false}
                size="medium"
                variant="secondary"
              >
                {copy.guideLabel}
              </ButtonLink>
            </div>
          </div>
          <div className={styles.heroArtwork}>
            <div className={styles.heroStage}>
              <div aria-hidden="true" className={styles.heroStageBar}>
                <span />
                <span />
                <span />
                <i />
              </div>
              <Image
                alt={marketingCopy.heroIllustrationAlt}
                className={styles.heroImage}
                height={1254}
                priority
                sizes="(max-width: 900px) 90vw, 42vw"
                src="/brand/extension-flow-gel-pen.png"
                width={1254}
              />
              <span aria-hidden="true" className={styles.heroExtensionChip}>
                <Image alt="" height={52} src="/demos/icon.svg" width={52} />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
