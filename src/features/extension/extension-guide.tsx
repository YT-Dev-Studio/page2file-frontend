import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { SeoBreadcrumbs, type BreadcrumbItem } from "@/shared/seo/structured-data";
import { ExternalCta } from "@/shared/ui/external-cta";
import {
  ExtensionArtwork,
  type ExtensionArtworkVariant,
} from "@/shared/ui/extension-artwork";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import {
  getExtensionCopy,
  type ExtensionGuideFactCopy,
  type ExtensionInlineLinkCopy,
  type ExtensionStepCopy,
} from "./extension-copy";
import { ModeDescription } from "./mode-description";
import styles from "./guide.module.css";

type StepProps = ExtensionStepCopy & {
  variant: ExtensionArtworkVariant;
};

type GuideFactCardProps = ExtensionGuideFactCopy & {
  bodyLink?: ExtensionInlineLinkCopy;
  variant: ExtensionArtworkVariant;
};

type GuideDetailSectionProps = {
  children: ReactNode;
  lead?: string;
  title: string;
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

const modeArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "accurate",
  "editable",
  "chat",
];

const supportArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "chat",
  "conversation",
  "supported",
];

const limitArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "limits",
  "wait",
  "conversation",
  "file",
  "page",
];

const privacyArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "open",
  "wait",
  "privacy",
];

const getArtworkVariant = (
  variants: ReadonlyArray<ExtensionArtworkVariant>,
  index: number,
  fallback: ExtensionArtworkVariant,
): ExtensionArtworkVariant => variants[index] ?? fallback;

const Step = ({ body, title, variant }: StepProps): ReactNode => (
  <li className={styles.step}>
    <ExtensionArtwork className={styles.stepArtwork} variant={variant} />
    <div className={styles.stepCopy}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </li>
);

const GuideFactCard = ({
  body,
  bodyLink,
  title,
  variant,
}: GuideFactCardProps): ReactNode => (
  <article className={styles.factCard}>
    <ExtensionArtwork className={styles.factArtwork} variant={variant} />
    <div className={styles.factCopy}>
      <h3>{title}</h3>
      <ModeDescription body={body} bodyLink={bodyLink} />
    </div>
  </article>
);

const GuideDetailSection = ({
  children,
  lead,
  title,
  variant,
}: GuideDetailSectionProps): ReactNode => (
  <section className={styles.detailSection}>
    <header className={styles.detailHeader}>
      <div className={styles.detailHeading}>
        <h2>{title}</h2>
        {lead ? <p>{lead}</p> : null}
      </div>
      <ExtensionArtwork className={styles.detailArtwork} variant={variant} />
    </header>
    {children}
  </section>
);

export const ExtensionGuide = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const extensionAction = getSiteCopy(locale).header.extensionAction;
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: copy.homeLabel, href: `/${locale}` },
    { label: copy.guideLabel, href: `/${locale}/chrome-extension/how-to-use` },
  ];
  const mapStep = (step: ExtensionStepCopy, index: number): ReactNode => (
    <Step
      key={step.title}
      {...step}
      variant={getArtworkVariant(stepArtworkVariants, index, "open")}
    />
  );
  const mapMode = (mode: (typeof copy.modes)[number], index: number): ReactNode => (
    <GuideFactCard
      body={mode.body}
      bodyLink={mode.bodyLink}
      key={mode.title}
      title={mode.title}
      variant={getArtworkVariant(modeArtworkVariants, index, "accurate")}
    />
  );
  const mapSupportGroup = (
    group: (typeof copy.supportedGroups)[number],
    index: number,
  ): ReactNode => (
    <GuideFactCard
      {...group}
      key={group.title}
      variant={getArtworkVariant(supportArtworkVariants, index, "supported")}
    />
  );
  const mapLimit = (limit: string, index: number): ReactNode => (
    <GuideFactCard
      body={limit}
      key={copy.limitTitles[index]}
      title={copy.limitTitles[index] ?? copy.limitsTitle}
      variant={getArtworkVariant(limitArtworkVariants, index, "limits")}
    />
  );
  const mapPrivacyPoint = (point: string, index: number): ReactNode => (
    <GuideFactCard
      body={point}
      key={copy.privacyFactTitles[index]}
      title={copy.privacyFactTitles[index] ?? copy.privacyTitle}
      variant={getArtworkVariant(privacyArtworkVariants, index, "privacy")}
    />
  );

  return (
    <PublicPage className={styles.page} family="extension">
      <Container>
        <SeoBreadcrumbs items={breadcrumbs} label={copy.breadcrumbLabel} locale={locale} />
        <div className={styles.heroLayout}>
          <PublicHero eyebrow="PAGE 2 FILE · CHROME" lead={copy.guideLead} title={copy.guideTitle}>
            <ExternalCta
              externalLinkKey="chromeExtension"
              label={extensionAction}
              placeholderLabel={extensionAction}
            />
          </PublicHero>
          <ExtensionArtwork className={styles.heroArtwork} variant="flow" />
        </div>

        <ol className={styles.steps}>{copy.steps.map(mapStep)}</ol>

        <div className={styles.detailSections}>
          <GuideDetailSection title={copy.modesTitle} variant="choose">
            <div className={styles.factGrid}>{copy.modes.map(mapMode)}</div>
          </GuideDetailSection>

          <GuideDetailSection title={copy.supportedTitle} variant="supported">
            <div className={styles.factGrid}>
              {copy.supportedGroups.map(mapSupportGroup)}
            </div>
          </GuideDetailSection>

          <GuideDetailSection title={copy.limitsTitle} variant="limits">
            <div className={`${styles.factGrid} ${styles.limitGrid}`}>
              {copy.limits.map(mapLimit)}
            </div>
          </GuideDetailSection>

          <GuideDetailSection
            lead={copy.privacyBody}
            title={copy.privacyTitle}
            variant="privacy"
          >
            <div className={styles.factGrid}>
              {copy.privacyPoints.map(mapPrivacyPoint)}
            </div>
          </GuideDetailSection>
        </div>

        {locale === "en" ? (
          <section className={styles.workflowSection} aria-labelledby="workflow-guides">
            <div>
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
            </div>
            <ExtensionArtwork className={styles.workflowArtwork} variant="related" />
          </section>
        ) : null}
      </Container>
    </PublicPage>
  );
};
