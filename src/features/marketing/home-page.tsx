import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import { Container } from "@/shared/ui/site-shell";
import { PageRail } from "@/shared/ui/page-rail";
import { WebsiteJsonLd } from "@/shared/seo/structured-data";
import uiStyles from "@/shared/ui/ui.module.css";
import { getMarketingCopy } from "./marketing-copy";
import styles from "./marketing.module.css";

export const HomePage = ({ locale }: { locale: Locale }): ReactNode => {
  const messages = getMessages(locale);
  const { home } = getMarketingCopy(locale);
  const trustItem = (
    item: (typeof home.trustItems)[number],
  ): ReactNode => (
    <div className={styles.trustItem} key={item.label}>
      <strong>{item.label}</strong>
      <span>{item.text}</span>
    </div>
  );
  const modeItem = (item: (typeof home.modes)[number]): ReactNode => (
    <article className={styles.comparisonPanel} key={item.title}>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
  const sourceItem = (item: (typeof home.sources)[number]): ReactNode => (
    <article className={styles.contentBlock} key={item.title}>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
  const faqItem = (item: (typeof home.faq)[number]): ReactNode => (
    <details key={item.question}>
      <summary>{item.question}</summary>
      <p>{item.answer}</p>
    </details>
  );
  return (
    <main className={styles.main} id="main-content">
      <WebsiteJsonLd locale={locale} />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>{home.eyebrow}</p>
              <h1 className={styles.title}>{home.title}</h1>
              <p className={styles.lead}>{home.lead}</p>
              <div className={styles.actions}>
                <Link className={uiStyles.button} href={`/${locale}/convert-webpage-to-pdf`}>
                  {messages.actions.pdf}
                </Link>
                <Link className={uiStyles.secondaryButton} href={`/${locale}/convert-webpage-to-powerpoint`}>
                  {messages.actions.powerpoint}
                </Link>
              </div>
            </div>
            <div className={styles.heroProof}>
              <PageRail items={home.railItems} />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className={styles.trustStrip} aria-label={home.productBoundariesLabel}>
          {home.trustItems.map(trustItem)}
        </div>
      </Container>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{home.outputLabel}</span>
            <h2 className={styles.sectionTitle}>{home.outputTitle}</h2>
          </div>
          <div className={styles.comparison}>
            {home.modes.map(modeItem)}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{home.sourceLabel}</span>
            <h2 className={styles.sectionTitle}>{home.sourceTitle}</h2>
          </div>
          <div className={styles.contentGrid}>
            {home.sources.map(sourceItem)}
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{home.workflowsLabel}</span>
            <h2 className={styles.sectionTitle}>{home.workflowsTitle}</h2>
          </div>
          <div className={styles.linkGrid}>
            <Link className={styles.textLink} href={`/${locale}/page2pdf-gpt`}>Page2PDF GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/web2pdf-gpt`}>Web2PDF GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/html2pdf-gpt`}>HTML2PDF GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/web2powerpoint-gpt`}>Web2PowerPoint GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/export-ai-chat-to-pdf`}>{home.aiChatLink} <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/blog`}>{home.blogLink} <span>→</span></Link>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{home.questionsLabel}</span>
            <h2 className={styles.sectionTitle}>{home.questionsTitle}</h2>
          </div>
          <div className={styles.faq}>
            {home.faq.map(faqItem)}
          </div>
        </Container>
      </section>
    </main>
  );
};
