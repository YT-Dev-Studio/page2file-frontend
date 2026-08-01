import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { getHomeCopy } from "./home-copy";
import { HomeSectionHeader } from "./home-section-header";
import styles from "./home.module.css";

export const HomeFaq = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).faq;

  return (
    <section
      aria-labelledby="home-faq-title"
      className={`${styles.contentSection} ${styles.faqSection}`}
      id="faq"
    >
      <div className={styles.pageGutters}>
        <HomeSectionHeader
          body={copy.body}
          eyebrow={copy.eyebrow}
          id="home-faq-title"
          title={copy.title}
        />

        <div className={styles.faqList}>
          {copy.items.map((item, index): ReactNode => (
            <details
              className={styles.faqItem}
              key={item.title}
              name="home-faq"
              open={index === 0}
            >
              <summary className={styles.faqSummary}>
                <h3>{item.title}</h3>
                <span
                  aria-hidden="true"
                  className={styles.faqToggleIcon}
                />
              </summary>
              <span aria-hidden="true" className={styles.faqRail} />
              <div className={styles.faqAnswer}>
                <p>{item.body}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
