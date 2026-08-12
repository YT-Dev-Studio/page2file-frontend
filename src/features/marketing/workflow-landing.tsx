import type { ReactNode } from "react";
import {
  getLandingContent,
  type ContentSection,
  type LandingContent,
  type RelatedRoute,
} from "@/content/landings";
import type { Locale } from "@/shared/i18n/locales";
import type { PublicPageFamily } from "@/shared/routes/routes";
import { ExternalCta } from "@/shared/ui/external-cta";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import { getMarketingCopy } from "./marketing-copy";
import {
  RelatedScenariosCarousel,
  type RelatedScenarioItem,
} from "./related-scenarios-carousel";
import styles from "./workflow-landing.module.css";

type WorkflowLandingProps = {
  content: LandingContent;
  family: Extract<PublicPageFamily, "gpt-workflow">;
  locale: Locale;
};

const toStepNumber = (index: number): string =>
  String(index + 1).padStart(2, "0");

export const WorkflowLanding = ({
  content,
  family,
  locale,
}: WorkflowLandingProps): ReactNode => {
  const copy = getMarketingCopy(locale);
  const workflowCopy = copy.gptWorkflow;
  const relatedRoutes = content.relatedRoutes?.filter(
    (relatedRoute: RelatedRoute): boolean =>
      relatedRoute.route !== content.route,
  );
  const relatedItems = relatedRoutes?.flatMap(
    (relatedRoute: RelatedRoute): ReadonlyArray<RelatedScenarioItem> => {
      const targetContent = getLandingContent(
        locale,
        relatedRoute.route,
      );

      return targetContent
        ? [
            {
              description: targetContent.description,
              href: `/${locale}/${relatedRoute.route}`,
              title: relatedRoute.label,
            },
          ]
        : [];
    },
  );
  const workflowStep = (
    label: string,
    index: number,
  ): ReactNode => {
    const stageLabel =
      index === 0
        ? content.workflowOverride?.firstStageLabel ?? label
        : label;
    const stageDescription =
      index === 0
        ? content.workflowOverride?.firstStageDescription ??
          workflowCopy.stageDescriptions[index]
        : workflowCopy.stageDescriptions[index];

    return (
      <li key={stageLabel}>
        <span aria-hidden="true">{toStepNumber(index)}</span>
        <div>
          <strong>{stageLabel}</strong>
          <small>{stageDescription}</small>
        </div>
      </li>
    );
  };
  const detailStep = (
    section: ContentSection,
    index: number,
  ): ReactNode => (
    <li className={styles.step} key={section.heading}>
      <span aria-hidden="true">{toStepNumber(index)}</span>
      <div>
        <h3>{section.heading}</h3>
        <p>{section.body}</p>
        {section.points ? (
          <ul>
            {section.points.map((point: string): ReactNode => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
  return (
    <PublicPage className={styles.page} family={family}>
      <Container>
        <div className={styles.heroLayout}>
          <PublicHero
            eyebrow={content.eyebrow}
            lead={content.lead}
            title={content.displayTitle ?? content.title}
          >
            <div className={styles.actions}>
              {content.externalLinkKey && content.primaryLabel ? (
                <ExternalCta
                  externalLinkKey={content.externalLinkKey}
                  label={content.primaryLabel}
                  placeholderLabel={
                    family === "gpt-workflow"
                      ? copy.landing.browseGpts
                      : copy.landing.browseChromeExtensions
                  }
                />
              ) : null}
            </div>
          </PublicHero>

          <aside
            aria-label={workflowCopy.mapLabel}
            className={styles.workflowMap}
          >
            <p>{workflowCopy.mapLabel}</p>
            <ol>{workflowCopy.stages.map(workflowStep)}</ol>
          </aside>
        </div>

        <section className={styles.detailsSection}>
          <div className={styles.detailsLayout}>
            <header className={styles.detailsIntro}>
              <p>{copy.landing.stepsLabel}</p>
              <h2>
                {content.workflowOverride?.detailsTitle ??
                  workflowCopy.detailsTitle}
              </h2>
            </header>
            <ol className={styles.steps}>
              {content.sections.map(detailStep)}
            </ol>
          </div>
        </section>

        {relatedItems && relatedItems.length > 0 ? (
          <RelatedScenariosCarousel
            heading={copy.landing.relatedPages}
            items={relatedItems}
            nextLabel={copy.landing.nextScenario}
            previousLabel={copy.landing.previousScenario}
          />
        ) : null}
      </Container>
    </PublicPage>
  );
};
