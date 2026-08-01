import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { WebsiteJsonLd } from "@/shared/seo/structured-data";
import { externalLinks } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/components/button/button";
import { RussianHomeFeatures } from "./russian-home-features";
import { RussianHomeHero } from "./russian-home-hero";
import { russianHomeCopy } from "./russian-home-copy";
import styles from "./russian-home.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

const ExtensionPromoAction = (): ReactNode => {
  const chromeExtensionUrl = externalLinks.chromeExtension;

  if (chromeExtensionUrl) {
    return (
      <ButtonLink
        className={styles.promoAction}
        href={chromeExtensionUrl}
        rel="noopener noreferrer"
        size="medium"
        target="_blank"
      >
        {russianHomeCopy.promo.action}
      </ButtonLink>
    );
  }

  return (
    <ButtonLink
      className={styles.promoAction}
      href="/ru/chrome-extension"
      size="medium"
    >
      {russianHomeCopy.promo.action}
    </ButtonLink>
  );
};

export const RussianHomePage = (): ReactNode => (
  <main
    className={`${styles.page} ${manrope.className}`}
    id="main-content"
  >
    <WebsiteJsonLd locale="ru" />

    <section className={styles.heroSection}>
      <div className={styles.pageGutters}>
        <RussianHomeHero />
      </div>
    </section>

    <section
      aria-labelledby="extension-promo-title"
      className={styles.promoSection}
    >
      <div className={styles.pageGutters}>
        <div className={styles.promoCard}>
          <div className={styles.promoCopy}>
            <p>{russianHomeCopy.promo.eyebrow}</p>
            <h2 id="extension-promo-title">
              {russianHomeCopy.promo.title}
            </h2>
            <span>{russianHomeCopy.promo.body}</span>
          </div>
          <ExtensionPromoAction />
        </div>
      </div>
    </section>

    <RussianHomeFeatures />
  </main>
);
