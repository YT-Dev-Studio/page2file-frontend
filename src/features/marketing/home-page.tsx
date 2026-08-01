import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { WebsiteJsonLd } from "@/shared/seo/structured-data";
import { HomeFeatures } from "./home-features";
import { HomeHero } from "./home-hero";
import {
  ExtensionButtonLink,
  HomeBlog,
  HomeFaq,
  HomeFinalCta,
  HomeHowItWorks,
} from "./home-sections";
import { getHomeCopy } from "./home-copy";
import styles from "./home.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export const HomePage = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale);

  return (
    <main
      className={`${styles.page} ${manrope.className}`}
      id="main-content"
    >
      <WebsiteJsonLd locale={locale} />

      <section className={styles.heroSection}>
        <div className={styles.pageGutters}>
          <HomeHero locale={locale} />
        </div>
      </section>

      <section
        aria-labelledby="extension-promo-title"
        className={styles.promoSection}
      >
        <div className={styles.pageGutters}>
          <div className={styles.promoCard}>
            <div className={styles.promoCopy}>
              <p>{copy.promo.eyebrow}</p>
              <h2 id="extension-promo-title">
                {copy.promo.title}
              </h2>
              <span>{copy.promo.body}</span>
            </div>
            <ExtensionButtonLink
              className={styles.promoAction}
              locale={locale}
              size="medium"
            >
              {copy.promo.action}
            </ExtensionButtonLink>
          </div>
        </div>
      </section>

      <HomeFeatures locale={locale} />
      <HomeHowItWorks locale={locale} />
      <HomeBlog locale={locale} />
      <HomeFaq locale={locale} />
      <HomeFinalCta locale={locale} />
    </main>
  );
};
