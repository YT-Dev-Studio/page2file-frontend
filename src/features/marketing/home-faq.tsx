"use client";

import type { ReactNode } from "react";
import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          {copy.items.map((item, index): ReactNode => {
            const isOpen = openIndex === index;
            const buttonId = `home-faq-question-${index}`;
            const answerId = `home-faq-answer-${index}`;

            return (
              <article
                className={`${styles.faqItem} ${
                  isOpen ? styles.faqItemOpen : ""
                }`}
                key={item.title}
              >
                <h3 className={styles.faqHeading}>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className={styles.faqButton}
                    id={buttonId}
                    onClick={() =>
                      setOpenIndex((currentIndex): number | null =>
                        currentIndex === index ? null : index,
                      )
                    }
                    type="button"
                  >
                    <span>{item.title}</span>
                    <span
                      aria-hidden="true"
                      className={styles.faqToggleIcon}
                    />
                  </button>
                </h3>
                <span aria-hidden="true" className={styles.faqRail} />
                <div
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className={styles.faqAnswerGrid}
                  id={answerId}
                  inert={!isOpen}
                  role="region"
                >
                  <div className={styles.faqAnswerClip}>
                    <div className={styles.faqAnswer}>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
