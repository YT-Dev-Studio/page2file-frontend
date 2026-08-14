import type { ReactNode } from "react";
import {
  getExtensionCopy,
  type ExtensionModeCopy,
  type ExtensionStepCopy,
} from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
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

const ModeCard = ({ body, title }: ExtensionModeCopy): ReactNode => (
  <article className={styles.modeCard}>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
);

const StepCard = ({ body, title }: ExtensionStepCopy): ReactNode => (
  <li className={styles.stepCard}>
    <h3>{title}</h3>
    <p>{body}</p>
  </li>
);

export const HomeModes = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);

  return (
    <section className={styles.section} id="modes">
      <Container>
        <SectionIntro body={copy.modesLead} title={copy.modesTitle} />
        <div className={styles.modeGrid}>
          {copy.modes.map((mode): ReactNode => <ModeCard key={mode.title} {...mode} />)}
        </div>
      </Container>
    </section>
  );
};

export const HomeSources = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);

  return (
    <section className={styles.section} id="supported">
      <Container>
        <SectionIntro body={copy.sourcesBody} title={copy.sourcesTitle} />
        <ul className={styles.sourceList}>
          {copy.sources.map((source): ReactNode => <li key={source}>{source}</li>)}
        </ul>
      </Container>
    </section>
  );
};

export const HomeProcess = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);

  return (
    <section className={styles.section} id="how-it-works">
      <Container>
        <SectionIntro body={copy.processBody} title={copy.processTitle} />
        <ol className={styles.stepGrid}>
          {copy.steps.map((step): ReactNode => <StepCard key={step.title} {...step} />)}
        </ol>
      </Container>
    </section>
  );
};

export const HomePrivacy = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);

  return (
    <section className={styles.section} id="privacy">
      <Container>
        <SectionIntro body={copy.privacyBody} title={copy.privacyTitle} />
        <ul className={styles.privacyList}>
          {copy.privacyPoints.map((point): ReactNode => <li key={point}>{point}</li>)}
        </ul>
      </Container>
    </section>
  );
};
