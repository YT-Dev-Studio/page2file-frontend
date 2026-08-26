import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { FaqAccordion } from "@/shared/ui/faq-accordion";
import { Container } from "@/shared/ui/site-shell";
import { getHomeMarketingCopy } from "./home-content";
import styles from "./home.module.css";

export const HomeFaq = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getHomeMarketingCopy(locale);

  return (
    <section
      aria-labelledby="home-faq-title"
      className={`${styles.section} ${styles.faqSection}`}
      id="faq"
    >
      <Container>
        <header className={styles.faqIntro}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 id="home-faq-title">{copy.faqTitle}</h2>
        </header>
        <FaqAccordion items={copy.faqItems} />
      </Container>
    </section>
  );
};
