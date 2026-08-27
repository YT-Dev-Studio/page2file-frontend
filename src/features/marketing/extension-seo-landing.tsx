import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ExtensionSeoLandingContent } from "@/content/extension-seo-landings";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { routePath } from "@/shared/routes/routes";
import {
  SeoBreadcrumbs,
  SoftwareApplicationJsonLd,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
import { ExternalCta } from "@/shared/ui/external-cta";
import {
  ExtensionArtwork,
  type ExtensionArtworkVariant,
} from "@/shared/ui/extension-artwork";
import { FaqAccordion } from "@/shared/ui/faq-accordion";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import styles from "./extension-seo-landing.module.css";

type ExtensionSeoLandingProps = {
  content: ExtensionSeoLandingContent;
};

const stepArtworkVariants: ReadonlyArray<ExtensionArtworkVariant> = [
  "open",
  "choose",
  "save",
];

const formatRoutePart = (part: string): string =>
  part === "pdf" ? "PDF" : part.charAt(0).toUpperCase() + part.slice(1);

const formatRelatedRoute = (route: string): string =>
  route
    .replace("chrome-extension/", "")
    .split("-")
    .map(formatRoutePart)
    .join(" ");

export const ExtensionSeoLanding = ({
  content,
}: ExtensionSeoLandingProps): ReactNode => {
  const locale = "en";
  const extensionAction = getSiteCopy(locale).header.extensionAction;
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: "Page 2 File", href: routePath(locale, "") },
    {
      label: "Page 2 PDF",
      href: routePath(locale, "chrome-extension/how-to-use"),
    },
    { label: content.heading, href: routePath(locale, content.route) },
  ];
  const mapStep = (
    step: (typeof content.steps)[number],
    index: number,
  ): ReactNode => (
    <li key={step.title}>
      <ExtensionArtwork
        className={styles.stepArtwork}
        variant={stepArtworkVariants[index] ?? "open"}
      />
      <div className={styles.stepCopy}>
        <span aria-hidden="true">{index + 1}</span>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>
    </li>
  );
  const mapListItem = (item: string): ReactNode => <li key={item}>{item}</li>;
  const mapRelatedRoute = (route: string): ReactNode => (
    <Link key={route} href={routePath(locale, route)}>
      {formatRelatedRoute(route)}
      <span aria-hidden="true">→</span>
    </Link>
  );

  return (
    <PublicPage className={styles.page} family="extension-seo">
      <SoftwareApplicationJsonLd
        description={content.description}
        locale={locale}
        route={content.route}
      />
      <Container>
        <SeoBreadcrumbs
          items={breadcrumbs}
          label="Breadcrumb"
          locale={locale}
        />
        <div className={styles.heroLayout}>
          <PublicHero
            className={styles.hero}
            eyebrow={content.eyebrow}
            lead={content.lead}
            title={content.heading}
          >
            <div className={styles.actions}>
              <ExternalCta
                analyticsPlacement="extension_seo"
                externalLinkKey="chromeExtension"
                label={extensionAction}
                locale={locale}
                placeholderLabel={extensionAction}
              />
              <a className={styles.sampleLink} href={content.demo.samplePdf}>
                {content.demo.sampleLabel}
              </a>
            </div>
          </PublicHero>
          <ExtensionArtwork className={styles.heroArtwork} variant="flow" />
        </div>

        <section className={styles.demo} aria-labelledby="sample-result">
          <div className={styles.demoCopy}>
            <p className={styles.kicker}>REAL SAMPLE OUTPUT</p>
            <h2 id="sample-result">{content.demo.title}</h2>
            <p>{content.demo.body}</p>
            <a href={content.demo.samplePdf}>Open verified sample PDF</a>
          </div>
          <a
            className={styles.previewLink}
            href={content.demo.samplePdf}
            aria-label={content.demo.sampleLabel}
          >
            <Image
              alt={content.demo.imageAlt}
              className={styles.previewImage}
              height={720}
              priority
              src={content.demo.image}
              width={1080}
            />
          </a>
        </section>

        <section className={styles.section} aria-labelledby="how-it-works">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>THREE STEPS</p>
            <h2 id="how-it-works">From open tab to PDF preview</h2>
          </div>
          <ol className={styles.steps}>{content.steps.map(mapStep)}</ol>
        </section>

        <section className={styles.boundaries}>
          <article>
            <ExtensionArtwork className={styles.boundaryArtwork} variant="supported" />
            <p className={styles.kicker}>SUPPORTED</p>
            <h2>{content.supportedTitle}</h2>
            <ul>{content.supported.map(mapListItem)}</ul>
          </article>
          <article>
            <ExtensionArtwork className={styles.boundaryArtwork} variant="limits" />
            <p className={styles.kicker}>BOUNDARIES</p>
            <h2>{content.limitsTitle}</h2>
            <ul>{content.limits.map(mapListItem)}</ul>
          </article>
        </section>

        <section className={styles.privacy} aria-labelledby="privacy-boundary">
          <ExtensionArtwork className={styles.privacyArtwork} variant="privacy" />
          <div>
            <p className={styles.kicker}>PRIVACY BOUNDARY</p>
            <h2 id="privacy-boundary">The tab you choose, not a URL upload</h2>
          </div>
          <p>{content.privacy}</p>
        </section>

        <section className={styles.section} aria-labelledby="questions">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>FAQ</p>
            <h2 id="questions">Common questions</h2>
          </div>
          <FaqAccordion items={content.faqs} />
        </section>

        <section className={styles.related} aria-labelledby="related-guides">
          <div className={styles.relatedHeading}>
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>RELATED GUIDES</p>
              <h2 id="related-guides">Choose the next workflow</h2>
            </div>
            <ExtensionArtwork className={styles.relatedArtwork} variant="related" />
          </div>
          <div className={styles.relatedGrid}>{content.related.map(mapRelatedRoute)}</div>
        </section>
      </Container>
    </PublicPage>
  );
};
