import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import { Container } from "@/shared/ui/site-shell";
import { PageRail } from "@/shared/ui/page-rail";
import uiStyles from "@/shared/ui/ui.module.css";
import styles from "./marketing.module.css";

export const HomePage = ({ locale }: { locale: Locale }): ReactNode => {
  const messages = getMessages(locale);
  return (
    <main className={styles.main} id="main-content">
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>Webpage → reviewed document</p>
              <h1 className={styles.title}>Keep the page. Change the format.</h1>
              <p className={styles.lead}>
                Turn a public webpage into a PDF or a PowerPoint deck, inspect
                every section first, and choose whether fidelity or editability
                matters more.
              </p>
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
              <PageRail />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className={styles.trustStrip} aria-label="Product boundaries">
          <div className={styles.trustItem}><strong>NO ACCOUNT</strong><span>Start without registration</span></div>
          <div className={styles.trustItem}><strong>NO HISTORY</strong><span>No saved conversion list</span></div>
          <div className={styles.trustItem}><strong>2 MODES</strong><span>Visual or editable</span></div>
          <div className={styles.trustItem}><strong>PREVIEW FIRST</strong><span>See degradation before download</span></div>
        </div>
      </Container>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Output contract</span>
            <h2 className={styles.sectionTitle}>Two modes because one promise cannot fit every webpage</h2>
          </div>
          <div className={styles.comparison}>
            <article className={styles.comparisonPanel}>
              <h3>Visual</h3>
              <p>Capture each meaningful section with the strongest possible visual fidelity. Ideal when layout matters more than editing.</p>
            </article>
            <article className={styles.comparisonPanel}>
              <h3>Editable & clickable</h3>
              <p>Rebuild supported text, buttons, images and links. Complex blocks fall back to images and remain visible in preview warnings.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Choose the source</span>
            <h2 className={styles.sectionTitle}>Public URL on the web. Private tab in the extension.</h2>
          </div>
          <div className={styles.contentGrid}>
            <article className={styles.contentBlock}>
              <h3>Public webpage</h3>
              <p>The future server workflow will temporarily process a public HTTPS URL. This prototype demonstrates the complete review UI with mock jobs.</p>
            </article>
            <article className={styles.contentBlock}>
              <h3>Current tab or AI chat</h3>
              <p>The extension flow is designed for content already visible in your browser and keeps chat export positioned as local processing.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Focused workflows</span>
            <h2 className={styles.sectionTitle}>Use the interface that already knows the output</h2>
          </div>
          <div className={styles.linkGrid}>
            <Link className={styles.textLink} href={`/${locale}/page2pdf-gpt`}>Page2PDF GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/web2pdf-gpt`}>Web2PDF GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/html2pdf-gpt`}>HTML2PDF GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/web2powerpoint-gpt`}>Web2PowerPoint GPT <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/export-ai-chat-to-pdf`}>Export AI chats locally <span>→</span></Link>
            <Link className={styles.textLink} href={`/${locale}/blog`}>Read practical conversion guides <span>→</span></Link>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Questions</span>
            <h2 className={styles.sectionTitle}>Clear boundaries before real conversion begins</h2>
          </div>
          <div className={styles.faq}>
            <details><summary>Does this prototype fetch my URL?</summary><p>No. It validates the shape locally and runs a deterministic mock job.</p></details>
            <details><summary>Can every element stay editable?</summary><p>No. The production design uses adaptive raster fallback and shows those decisions before download.</p></details>
            <details><summary>Is conversion history stored?</summary><p>No account or history feature exists. The browser stores only your optional analytics preference.</p></details>
          </div>
        </Container>
      </section>
    </main>
  );
};
