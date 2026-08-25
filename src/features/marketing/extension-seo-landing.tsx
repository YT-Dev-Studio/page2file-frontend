import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ExtensionSeoLandingContent } from "@/content/extension-seo-landings";
import { routePath } from "@/shared/routes/routes";
import {
  SeoBreadcrumbs,
  SoftwareApplicationJsonLd,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
import { ExternalCta } from "@/shared/ui/external-cta";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import styles from "./extension-seo-landing.module.css";

type ExtensionSeoLandingProps = {
  content: ExtensionSeoLandingContent;
};

export const ExtensionSeoLanding = ({
  content,
}: ExtensionSeoLandingProps): ReactNode => {
  const locale = "en";
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: "Page 2 PDF", href: routePath(locale, "") },
    {
      label: "Chrome extension",
      href: routePath(locale, "chrome-extension/how-to-use"),
    },
    { label: content.heading, href: routePath(locale, content.route) },
  ];

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
        <PublicHero
          className={styles.hero}
          eyebrow={content.eyebrow}
          lead={content.lead}
          title={content.heading}
        >
          <div className={styles.actions}>
            <ExternalCta
              externalLinkKey="chromeExtension"
              label="Add Page 2 PDF to Chrome"
              placeholderLabel="View Page 2 PDF in Chrome Web Store"
            />
            <a className={styles.sampleLink} href={content.demo.samplePdf}>
              {content.demo.sampleLabel}
            </a>
          </div>
        </PublicHero>

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
          <ol className={styles.steps}>
            {content.steps.map((step, index): ReactNode => (
              <li key={step.title}>
                <span aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.boundaries}>
          <article>
            <p className={styles.kicker}>SUPPORTED</p>
            <h2>{content.supportedTitle}</h2>
            <ul>
              {content.supported.map((item): ReactNode => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className={styles.kicker}>BOUNDARIES</p>
            <h2>{content.limitsTitle}</h2>
            <ul>
              {content.limits.map((item): ReactNode => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className={styles.privacy} aria-labelledby="privacy-boundary">
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
          <div className={styles.faqs}>
            {content.faqs.map((faq): ReactNode => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.related} aria-labelledby="related-guides">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>RELATED GUIDES</p>
            <h2 id="related-guides">Choose the next workflow</h2>
          </div>
          <div className={styles.relatedGrid}>
            {content.related.map((route): ReactNode => (
              <Link key={route} href={routePath(locale, route)}>
                {route
                  .replace("chrome-extension/", "")
                  .split("-")
                  .map((part): string =>
                    part === "pdf"
                      ? "PDF"
                      : part.charAt(0).toUpperCase() + part.slice(1),
                  )
                  .join(" ")}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </PublicPage>
  );
};
