import type { ReactNode } from "react";
import {
  getExtensionCopy,
  type ExtensionModeCopy,
  type ExtensionStepCopy,
} from "@/features/extension/extension-copy";
import { ModeDescription } from "@/features/extension/mode-description";
import type { Locale } from "@/shared/i18n/locales";
import {
  ExtensionArtwork,
  type ExtensionArtworkVariant,
} from "@/shared/ui/extension-artwork";
import { Container } from "@/shared/ui/site-shell";
import styles from "./home.module.css";

type SectionIntroProps = {
  body: string;
  title: string;
};

const SectionIntro = ({ body, title }: SectionIntroProps): ReactNode => (
  <header className={styles.sectionIntro}>
    <h2>{title}</h2>
    <p>{body}</p>
  </header>
);

type VisualCardProps = ExtensionModeCopy & {
  variant: ExtensionArtworkVariant;
};

type StepCardProps = ExtensionStepCopy & {
  variant: ExtensionArtworkVariant;
};

type SourceCardProps = {
  body: string;
  variant: ExtensionArtworkVariant;
};

const modeArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "accurate",
  "editable",
  "chat",
];

const sourceArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "page",
  "file",
  "workspace",
  "conversation",
];

const stepArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "open",
  "launch",
  "choose",
  "adjust",
  "wait",
  "save",
];

const getArtworkVariant = (
  variants: ReadonlyArray<ExtensionArtworkVariant>,
  index: number,
  fallback: ExtensionArtworkVariant,
): ExtensionArtworkVariant => variants[index] ?? fallback;

const ModeCard = ({ body, bodyLink, title, variant }: VisualCardProps): ReactNode => (
  <article className={styles.modeCard}>
    <ExtensionArtwork className={styles.cardArtwork} variant={variant} />
    <div className={styles.cardCopy}>
      <h3>{title}</h3>
      <ModeDescription body={body} bodyLink={bodyLink} />
    </div>
  </article>
);

const SourceCard = ({ body, variant }: SourceCardProps): ReactNode => (
  <li className={styles.sourceCard}>
    <ExtensionArtwork className={styles.sourceArtwork} variant={variant} />
    <span>{body}</span>
  </li>
);

const StepCard = ({ body, title, variant }: StepCardProps): ReactNode => (
  <li className={styles.stepCard}>
    <ExtensionArtwork className={styles.stepArtwork} variant={variant} />
    <div className={styles.cardCopy}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  </li>
);

export const HomeModes = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const mapModeToCard = (mode: ExtensionModeCopy, index: number): ReactNode => (
    <ModeCard
      key={mode.title}
      {...mode}
      variant={getArtworkVariant(modeArtworkVariants, index, "accurate")}
    />
  );

  return (
    <section className={`${styles.section} ${styles.sectionSurface}`} id="modes">
      <Container>
        <SectionIntro body={copy.modesLead} title={copy.modesTitle} />
        <div className={styles.modeGrid}>{copy.modes.map(mapModeToCard)}</div>
      </Container>
    </section>
  );
};

export const HomeSources = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const mapSourceToCard = (source: string, index: number): ReactNode => (
    <SourceCard
      body={source}
      key={source}
      variant={getArtworkVariant(sourceArtworkVariants, index, "page")}
    />
  );

  return (
    <section className={styles.section} id="supported">
      <Container>
        <SectionIntro body={copy.sourcesBody} title={copy.sourcesTitle} />
        <ul className={styles.sourceList}>{copy.sources.map(mapSourceToCard)}</ul>
      </Container>
    </section>
  );
};

export const HomeProcess = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const mapStepToCard = (step: ExtensionStepCopy, index: number): ReactNode => (
    <StepCard
      key={step.title}
      {...step}
      variant={getArtworkVariant(stepArtworkVariants, index, "open")}
    />
  );

  return (
    <section className={`${styles.section} ${styles.sectionSurface}`} id="how-it-works">
      <Container>
        <SectionIntro body={copy.processBody} title={copy.processTitle} />
        <ol className={styles.stepGrid}>{copy.steps.map(mapStepToCard)}</ol>
      </Container>
    </section>
  );
};

export const HomePrivacy = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const mapPrivacyPoint = (point: string): ReactNode => <li key={point}>{point}</li>;

  return (
    <section className={styles.section} id="privacy">
      <Container>
        <SectionIntro body={copy.privacyBody} title={copy.homePrivacyTitle} />
        <div className={styles.privacyPanel}>
          <ExtensionArtwork className={styles.privacyArtwork} variant="privacy" />
          <ul className={styles.privacyList}>
            {copy.privacyPoints.map(mapPrivacyPoint)}
          </ul>
        </div>
      </Container>
    </section>
  );
};
