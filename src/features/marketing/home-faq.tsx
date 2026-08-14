import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import { getHomeMarketingCopy } from "./home-content";
import styles from "./home.module.css";

type HomeFaqItemProps = {
  answer: string;
  question: string;
};

const HomeFaqItem = ({ answer, question }: HomeFaqItemProps): ReactNode => (
  <details className={styles.faqItem}>
    <summary className={styles.faqQuestion}>
      <span>{question}</span>
      <span aria-hidden="true" className={styles.faqIcon} />
    </summary>
    <div className={styles.faqAnswer}>
      <p>{answer}</p>
    </div>
  </details>
);

export const HomeFaq = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getHomeMarketingCopy(locale);
  const faqItem = ({ answer, question }: HomeFaqItemProps): ReactNode => (
    <HomeFaqItem answer={answer} key={question} question={question} />
  );

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
        <div className={styles.faqList}>{copy.faqItems.map(faqItem)}</div>
      </Container>
    </section>
  );
};
