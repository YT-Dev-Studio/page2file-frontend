import type { ReactNode } from "react";
import { getBlogEntry } from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import { getExtensionLink } from "@/shared/routes/extension-link";
import {
  ButtonLink,
  type ButtonLinkProps,
} from "@/shared/ui/components/button/button";
import { Card } from "@/shared/ui/components/card/card";
import { FormatBadge } from "@/shared/ui/components/format-badge/format-badge";
import { TimerIcon } from "@/shared/ui/utilities/icons/glyphs/timer-icon";
import { getHomeCopy, type HomeCopy } from "./home-copy";
import { HomeExtensionBanner } from "./home-extension-promo";
import { HomeSectionHeader } from "./home-section-header";
import styles from "./home.module.css";

type ExtensionButtonProps = Omit<ButtonLinkProps, "href"> & {
  locale: Locale;
};

export const ExtensionButtonLink = ({
  locale,
  ...buttonProps
}: ExtensionButtonProps): ReactNode => {
  const extensionLink = getExtensionLink(locale);

  return (
    <ButtonLink
      {...buttonProps}
      href={extensionLink.href}
      rel={extensionLink.external ? "noopener noreferrer" : undefined}
      target={extensionLink.external ? "_blank" : undefined}
    />
  );
};

export const HomeHowItWorks = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getHomeCopy(locale).howItWorks;
  const extensionLink = getExtensionLink(locale);

  return (
    <section
      aria-labelledby="how-it-works-title"
      className={`${styles.contentSection} ${styles.howSection}`}
      id="how-it-works"
    >
      <div className={styles.pageGutters}>
        <HomeSectionHeader
          body={copy.body}
          eyebrow={copy.eyebrow}
          id="how-it-works-title"
          title={copy.title}
        />

        <div className={styles.howGrid}>
          {copy.items.map((item, index): ReactNode => (
            <Card
              action={
                index === 0
                  ? {
                      external: extensionLink.external,
                      href: extensionLink.href,
                      label: copy.extensionAction,
                    }
                  : undefined
              }
              body={item.body}
              className={styles.informationCard}
              key={item.title}
              title={
                <span className={styles.howCardHeading}>
                  <span className={styles.stepTitle}>
                    {copy.stepLabels[index]}
                  </span>
                  <span className={styles.howCardTitle}>
                    <span>{item.title}</span>
                    {index === 0 ? (
                      <FormatBadge
                        className={styles.installTimeBadge}
                        format="master"
                        style="subtle"
                      >
                        <TimerIcon />
                        {copy.installTime}
                      </FormatBadge>
                    ) : null}
                  </span>
                </span>
              }
            />
          ))}
        </div>

        <div className={styles.howFooter}>
          <ButtonLink
            className={styles.lightTextAction}
            href={`/${locale}/chrome-extension/how-to-use`}
            size="small"
          >
            {copy.action}
          </ButtonLink>
          <span>{copy.note}</span>
        </div>
      </div>
    </section>
  );
};

const renderBlogCard = (
  item: HomeCopy["blog"]["items"][number],
  locale: Locale,
  actionLabel: string,
): ReactNode => {
  const entry = getBlogEntry(locale, item.slug);

  if (!entry) {
    throw new Error(`Missing homepage blog entry: ${item.slug}`);
  }

  return (
    <Card
      action={{
        accessibleLabel: `${actionLabel}: ${item.title}`,
        href: `/${locale}/blog/${entry.slug}`,
        label: actionLabel,
      }}
      body={item.body}
      className={styles.informationCard}
      interactive
      key={item.slug}
      title={item.title}
    />
  );
};

export const HomeBlog = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getHomeCopy(locale).blog;

  return (
    <section
      aria-labelledby="home-blog-title"
      className={styles.contentSection}
      id="blog"
    >
      <div className={styles.pageGutters}>
        <HomeSectionHeader
          body={copy.body}
          eyebrow={copy.eyebrow}
          id="home-blog-title"
          title={copy.title}
        />

        <div className={styles.blogGrid}>
          {copy.items.map((item): ReactNode =>
            renderBlogCard(item, locale, copy.action),
          )}
        </div>

        <div className={styles.sectionAction}>
          <ButtonLink
            className={styles.lightTextAction}
            href={`/${locale}/blog`}
            size="small"
          >
            {copy.allAction}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export const HomeFinalCta = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getHomeCopy(locale).finalCta;

  return (
    <section
      aria-labelledby="home-final-cta-title"
      className={styles.finalCtaSection}
    >
      <div className={styles.pageGutters}>
        <HomeExtensionBanner
          body={copy.body}
          eyebrow={copy.eyebrow}
          headingId="home-final-cta-title"
          locale={locale}
          title={copy.title}
        />
      </div>
    </section>
  );
};
