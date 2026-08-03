"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { routePath } from "@/shared/routes/routes";
import type { FaqBodySegment } from "./home-copy";
import { getHomeCopy } from "./home-copy";
import { HomeSectionHeader } from "./home-section-header";
import styles from "./home.module.css";

const FaqSegmentContent = ({
  locale,
  segment,
}: {
  locale: Locale;
  segment: FaqBodySegment;
}): ReactNode => {
  if (segment.kind === "link") {
    return (
      <Link href={routePath(locale, segment.route)}>
        {segment.label}
      </Link>
    );
  }

  return segment.text;
};

const FaqAnswerBody = ({
  body,
  locale,
}: {
  body: string | ReadonlyArray<FaqBodySegment>;
  locale: Locale;
}): ReactNode => {
  if (typeof body === "string") {
    return body;
  }

  const segmentToNode = (
    segment: FaqBodySegment,
    index: number,
  ): ReactNode => (
    <FaqSegmentContent
      key={`${segment.kind}-${index}`}
      locale={locale}
      segment={segment}
    />
  );

  return body.map(segmentToNode);
};

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
                      <p>
                        <FaqAnswerBody body={item.body} locale={locale} />
                      </p>
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
