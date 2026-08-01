import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { WebsiteJsonLd } from "@/shared/seo/structured-data";
import { HomeExtensionPromo } from "./home-extension-promo";
import { HomeFaq } from "./home-faq";
import { HomeFeatures } from "./home-features";
import { HomeHero } from "./home-hero";
import {
  HomeBlog,
  HomeFinalCta,
  HomeHowItWorks,
} from "./home-sections";
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

      <HomeExtensionPromo locale={locale} />

      <HomeFeatures locale={locale} />
      <HomeHowItWorks locale={locale} />
      <HomeBlog locale={locale} />
      <HomeFaq locale={locale} />
      <HomeFinalCta locale={locale} />
    </main>
  );
};
