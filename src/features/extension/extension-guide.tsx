import type { ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/shared/i18n/locales";
import { SeoBreadcrumbs, type BreadcrumbItem } from "@/shared/seo/structured-data";
import { ExternalCta } from "@/shared/ui/external-cta";
import {
  ExtensionArtwork,
  type ExtensionArtworkVariant,
} from "@/shared/ui/extension-artwork";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import { getExtensionCopy, type ExtensionStepCopy } from "./extension-copy";
import styles from "./guide.module.css";

type StepProps = ExtensionStepCopy & {
  variant: ExtensionArtworkVariant;
};

const stepArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "open",
  "launch",
  "choose",
  "adjust",
  "wait",
  "save",
];

const Step = ({ body, title, variant }: StepProps): ReactNode => (
  <li className={styles.step}>
    <ExtensionArtwork className={styles.stepArtwork} variant={variant} />
    <div className={styles.stepCopy}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </li>
);

export const ExtensionGuide = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: copy.homeLabel, href: `/${locale}` },
    { label: copy.guideLabel, href: `/${locale}/chrome-extension/how-to-use` },
  ];
  const mapStep = (step: ExtensionStepCopy, index: number): ReactNode => (
    <Step
      key={step.title}
      {...step}
      variant={stepArtworkVariants[index] ?? "open"}
    />
  );
  const mapMode = (mode: (typeof copy.modes)[number]): ReactNode => (
    <div key={mode.title}>
      <h3>{mode.title}</h3>
      <p>{mode.body}</p>
    </div>
  );
  const mapLimit = (limit: string): ReactNode => <li key={limit}>{limit}</li>;
  const mapPrivacyPoint = (point: string): ReactNode => <li key={point}>{point}</li>;

  return (
    <PublicPage className={styles.page} family="extension">
      <Container>
        <SeoBreadcrumbs items={breadcrumbs} label={copy.breadcrumbLabel} locale={locale} />
        <div className={styles.heroLayout}>
        <PublicHero eyebrow="PAGE 2 FILE · CHROME" lead={copy.guideLead} title={copy.guideTitle}>
          <ExternalCta
            externalLinkKey="chromeExtension"
            label={copy.browseChromeLabel}
            placeholderLabel={copy.browseChromeLabel}
          />
        </PublicHero>
          <ExtensionArtwork className={styles.heroArtwork} variant="flow" />
        </div>

        <ol className={styles.steps}>{copy.steps.map(mapStep)}</ol>

        <section className={styles.details}>
          <article>
            <ExtensionArtwork className={styles.detailArtwork} variant="choose" />
            <h2>{copy.modesTitle}</h2>
            <div className={styles.modeList}>{copy.modes.map(mapMode)}</div>
          </article>
          <article>
            <ExtensionArtwork className={styles.detailArtwork} variant="supported" />
            <h2>{copy.supportedTitle}</h2>
            <p>{copy.supportedBody}</p>
          </article>
          <article>
            <ExtensionArtwork className={styles.detailArtwork} variant="limits" />
            <h2>{copy.limitsTitle}</h2>
            <ul>{copy.limits.map(mapLimit)}</ul>
          </article>
          <article>
            <ExtensionArtwork className={styles.detailArtwork} variant="privacy" />
            <h2>{copy.privacyTitle}</h2>
            <p>{copy.privacyBody}</p>
            <ul>{copy.privacyPoints.map(mapPrivacyPoint)}</ul>
          </article>
        </section>
        {locale === "en" ? (
          <section className={styles.details} aria-labelledby="workflow-guides">
            <article>
              <ExtensionArtwork className={styles.detailArtwork} variant="related" />
              <h2 id="workflow-guides">Explore PDF workflows</h2>
              <ul>
                <li>
                  <Link href="/en/chrome-extension/webpage-to-pdf">
                    Save the full webpage open in Chrome
                  </Link>
                </li>
                <li>
                  <Link href="/en/chrome-extension/ai-chat-to-pdf">
                    Export the current supported AI conversation
                  </Link>
                </li>
                <li>
                  <Link href="/en/chrome-extension/messenger-chat-to-pdf">
                    Export a supported WhatsApp or Telegram conversation
                  </Link>
                </li>
              </ul>
            </article>
          </section>
        ) : null}
      </Container>
    </PublicPage>
  );
};
