import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { WebsiteJsonLd } from "@/shared/seo/structured-data";
import { HomeExtensionPromo, HomeFinalCta } from "./home-extension-promo";
import { HomeFaq } from "./home-faq";
import { HomeHero } from "./home-hero";
import {
  HomeModes,
  HomePrivacy,
  HomeProcess,
  HomeSources,
} from "./home-sections";
import styles from "./home.module.css";

export const HomePage = ({ locale }: { locale: Locale }): ReactNode => (
  <main className={styles.page} id="main-content">
    <WebsiteJsonLd locale={locale} />
    <HomeHero locale={locale} />
    <HomeExtensionPromo locale={locale} />
    <HomeModes locale={locale} />
    <HomeSources locale={locale} />
    <HomeProcess locale={locale} />
    <HomePrivacy locale={locale} />
    <HomeFaq locale={locale} />
    <HomeFinalCta locale={locale} />
  </main>
);
