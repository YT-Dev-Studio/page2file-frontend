import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { SeoBreadcrumbs, type BreadcrumbItem } from "@/shared/seo/structured-data";
import { ExternalCta } from "@/shared/ui/external-cta";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import { getExtensionCopy, type ExtensionStepCopy } from "./extension-copy";
import styles from "./guide.module.css";

const Step = ({ body, title }: ExtensionStepCopy): ReactNode => (
  <li className={styles.step}>
    <div>
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

  return (
    <PublicPage className={styles.page} family="extension">
      <Container>
        <SeoBreadcrumbs items={breadcrumbs} label={copy.breadcrumbLabel} locale={locale} />
        <PublicHero eyebrow="PAGE 2 FILE · CHROME" lead={copy.guideLead} title={copy.guideTitle}>
          <ExternalCta
            externalLinkKey="chromeExtension"
            label={copy.browseChromeLabel}
            placeholderLabel={copy.browseChromeLabel}
          />
        </PublicHero>

        <ol className={styles.steps}>
          {copy.steps.map((step): ReactNode => <Step key={step.title} {...step} />)}
        </ol>

        <section className={styles.details}>
          <article>
            <h2>{copy.modesTitle}</h2>
            <div className={styles.modeList}>
              {copy.modes.map((mode): ReactNode => (
                <div key={mode.title}>
                  <h3>{mode.title}</h3>
                  <p>{mode.body}</p>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h2>{copy.supportedTitle}</h2>
            <p>{copy.supportedBody}</p>
          </article>
          <article>
            <h2>{copy.limitsTitle}</h2>
            <ul>
              {copy.limits.map((limit): ReactNode => <li key={limit}>{limit}</li>)}
            </ul>
          </article>
          <article>
            <h2>{copy.privacyTitle}</h2>
            <p>{copy.privacyBody}</p>
            <ul>
              {copy.privacyPoints.map((point): ReactNode => <li key={point}>{point}</li>)}
            </ul>
          </article>
        </section>
      </Container>
    </PublicPage>
  );
};
