import Link from "next/link";
import type { ReactNode } from "react";
import { legalProfile } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import { getSupportCopy } from "./support-copy";
import { SupportForm } from "./support-form";
import styles from "./support-page.module.css";

const SupportArtwork = (): ReactNode => (
  <div aria-hidden="true" className={styles.artwork}>
    <svg fill="none" viewBox="0 0 300 132">
      <path
        className={styles.artworkPaper}
        d="M26 24c0-7 6-12 13-12h91c7 0 12 5 12 12v66c0 7-5 12-12 12H39c-7 0-13-5-13-12V24Z"
      />
      <path className={styles.artworkInk} d="m31 28 53 39 53-39" />
      <path className={styles.artworkInk} d="m31 95 39-37m67 37-38-37" />
      <path className={styles.artworkArrow} d="M153 58h35m-10-10 10 10-10 10" />
      <path
        className={styles.artworkBubble}
        d="M202 25c0-7 6-12 13-12h46c7 0 12 5 12 12v46c0 7-5 12-12 12h-18l-17 18 2-18h-13c-7 0-13-5-13-12V25Z"
      />
      <path className={styles.artworkInk} d="M218 36h39m-39 13h29m-29 13h35" />
      <path className={styles.artworkAccent} d="M220 112h37m-29 8h21" />
    </svg>
  </div>
);

export const SupportPage = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getSupportCopy(locale);

  return (
    <PublicPage className={styles.page} family="support">
      <Container>
        <div className={styles.layout}>
          <section className={styles.intro}>
            <PublicHero
              eyebrow={copy.eyebrow}
              lead={copy.lead}
              title={copy.title}
            />
            <div className={styles.contact}>
              <span>{copy.contactLabel}</span>
              <Link href={`mailto:${legalProfile.contactEmail}`}>
                {legalProfile.contactEmail}
              </Link>
            </div>
            <SupportArtwork />
          </section>

          <SupportForm copy={copy} locale={locale} />
        </div>
      </Container>
    </PublicPage>
  );
};
