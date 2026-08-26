import Image from "next/image";
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
  type ExtensionGuideScreenId,
  type ExtensionGuideStepCopy,
  type ExtensionGuideStepId,
  type ExtensionInlineLinkCopy,
} from "./extension-copy";
import {
  GuideSectionIcon,
  type GuideSectionIconVariant,
} from "./guide-section-icon";
import { ModeDescription } from "./mode-description";
import styles from "./guide.module.css";

type GuideModeCardProps = ExtensionGuideFactCopy & {
  bodyLink?: ExtensionInlineLinkCopy;
  variant: ExtensionArtworkVariant;
};

type GuideDetailFactProps = ExtensionGuideFactCopy & {
  bodyLink?: ExtensionInlineLinkCopy;
};

type GuideScreenshotCardProps = {
  alt: string;
  className?: string;
  sizes: string;
  src: string;
};

type GuideDetailSectionProps = {
  children: ReactNode;
  icon: GuideSectionIconVariant;
  lead?: string;
  title: string;
};

const modeArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "accurate",
  "editable",
  "chat",
];

const getArtworkVariant = (
  variants: ReadonlyArray<ExtensionArtworkVariant>,
  index: number,
  fallback: ExtensionArtworkVariant,
): ExtensionArtworkVariant => variants[index] ?? fallback;

const guideStepFileById: Record<ExtensionGuideStepId, string> = {
  pin: "01-pin-extension-clean.png",
  open: "02-open-page-clean.png",
  launch: "03-click-extension-clean.png",
  result: "04-pdf-result-clean.png",
};

const guideScreenFileById: Record<ExtensionGuideScreenId, string> = {
  modes: "05-output-modes.png",
  settings: "06-customize-settings.png",
};

const getGuideScreenshotSrc = (locale: Locale, fileName: string): string =>
  `/guides/page-2-pdf/${locale}/${fileName}`;

const GuideScreenshotCard = ({
  alt,
  className,
  sizes,
  src,
}: GuideScreenshotCardProps): ReactNode => (
  <figure className={`${styles.screenshotCard} ${className ?? ""}`.trim()}>
    <Image
      alt={alt}
      className={styles.screenshotImage}
      height={800}
      sizes={sizes}
      src={src}
      unoptimized
      width={1280}
    />
  </figure>
);

const GuideStep = ({
  index,
  locale,
  step,
}: {
  index: number;
  locale: Locale;
  step: ExtensionGuideStepCopy;
}): ReactNode => (
  <li className={styles.step}>
    <div className={styles.stepHeading}>
      <span aria-hidden="true" className={styles.stepNumber}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2>{step.title}</h2>
    </div>
    <GuideScreenshotCard
      alt={step.imageAlt}
      sizes="(max-width: 960px) calc(100vw - 2rem), 960px"
      src={getGuideScreenshotSrc(locale, guideStepFileById[step.id])}
    />
  </li>
);

const GuideModeCard = ({
  body,
  bodyLink,
  title,
  variant,
}: GuideModeCardProps): ReactNode => (
  <article className={styles.modeCard}>
    <ExtensionArtwork className={styles.modeArtwork} variant={variant} />
    <div className={styles.modeCopy}>
      <h3>{title}</h3>
      <ModeDescription body={body} bodyLink={bodyLink} />
    </div>
  </article>
);

const GuideDetailFact = ({
  body,
  bodyLink,
  title,
}: GuideDetailFactProps): ReactNode => (
  <article className={styles.detailFact}>
    <h3>{title}</h3>
    <ModeDescription body={body} bodyLink={bodyLink} />
  </article>
);

const GuideLimitItem = ({ body, title }: ExtensionGuideFactCopy): ReactNode => (
  <li className={styles.limitItem}>
    <h3>{title}</h3>
    <ModeDescription body={body} />
  </li>
);

const GuideDetailSection = ({
  children,
  icon,
  lead,
  title,
}: GuideDetailSectionProps): ReactNode => (
  <section className={styles.detailSection}>
    <header className={styles.detailHeader}>
      <GuideSectionIcon className={styles.detailIcon} variant={icon} />
      <div className={styles.detailHeading}>
        <h2>{title}</h2>
        {lead ? <p>{lead}</p> : null}
      </div>
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
  const mapStep = (step: ExtensionGuideStepCopy, index: number): ReactNode => (
    <GuideStep
      index={index}
      key={step.title}
      locale={locale}
      step={step}
    />
  );
  const mapMode = (mode: (typeof copy.modes)[number], index: number): ReactNode => (
    <GuideModeCard
      body={mode.body}
      bodyLink={mode.bodyLink}
      key={mode.title}
      title={mode.title}
      variant={getArtworkVariant(modeArtworkVariants, index, "accurate")}
    />
  );
  const mapSupportGroup = (
    group: (typeof copy.supportedGroups)[number],
  ): ReactNode => (
    <GuideDetailFact
      {...group}
      key={group.title}
    />
  );
  const mapLimit = (limit: string, index: number): ReactNode => (
    <GuideLimitItem
      body={limit}
      key={copy.limitTitles[index]}
      title={copy.limitTitles[index] ?? copy.limitsTitle}
    />
  );
  const mapPrivacyPoint = (point: string, index: number): ReactNode => (
    <GuideDetailFact
      body={point}
      key={copy.privacyFactTitles[index]}
      title={copy.privacyFactTitles[index] ?? copy.privacyTitle}
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
        </div>

        <ol className={styles.steps}>{copy.guideSteps.map(mapStep)}</ol>

        <section className={styles.optionsSection} aria-labelledby="guide-options-title">
          <header className={styles.optionsHeader}>
            <h2 id="guide-options-title">{copy.guideOptionsTitle}</h2>
            <p>{copy.guideOptionsLead}</p>
          </header>
          <div className={styles.optionScreens}>
            {copy.guideOptionScreens.map((screen) => (
              <article className={styles.optionScreen} key={screen.id}>
                <h3>{screen.title}</h3>
                <GuideScreenshotCard
                  alt={screen.imageAlt}
                  className={styles.optionScreenshot}
                  sizes="(max-width: 900px) calc(100vw - 3rem), 540px"
                  src={getGuideScreenshotSrc(locale, guideScreenFileById[screen.id])}
                />
              </article>
            ))}
          </div>
          <div className={styles.modeGrid}>{copy.modes.map(mapMode)}</div>
        </section>

        <div className={styles.detailSections}>
          <GuideDetailSection icon="supported" title={copy.supportedTitle}>
            <div className={styles.detailFactGrid}>
              {copy.supportedGroups.map(mapSupportGroup)}
            </div>
          </GuideDetailSection>

          <GuideDetailSection icon="limits" title={copy.limitsTitle}>
            <ul className={styles.limitList}>{copy.limits.map(mapLimit)}</ul>
          </GuideDetailSection>

          <GuideDetailSection
            icon="privacy"
            lead={copy.privacyBody}
            title={copy.privacyTitle}
          >
            <div className={styles.detailFactGrid}>
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
