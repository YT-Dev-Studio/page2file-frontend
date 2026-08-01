import type { ReactNode } from "react";
import { getBlogEntry } from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import { getExtensionLink } from "@/shared/routes/extension-link";
import {
  ButtonLink,
  type ButtonLinkProps,
} from "@/shared/ui/components/button/button";
import { Card } from "@/shared/ui/components/card/card";
import { getHomeCopy, type HomeCopy } from "./home-copy";
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

const SectionHeader = ({
  body,
  eyebrow,
  id,
  title,
}: {
  body: string;
  eyebrow: string;
  id: string;
  title: string;
}): ReactNode => (
  <div className={styles.sectionHeader}>
    <p className={styles.sectionEyebrow}>{eyebrow}</p>
    <h2 className={styles.sectionTitle} id={id}>
      {title}
    </h2>
    <p className={styles.sectionLead}>{body}</p>
  </div>
);

export const HomeHowItWorks = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).howItWorks;
  const extensionLink = getExtensionLink(locale);

  return (
    <section
      aria-labelledby="how-it-works-title"
      className={`${styles.contentSection} ${styles.howSection}`}
      id="how-it-works"
    >
      <div className={styles.pageGutters}>
        <SectionHeader
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
              title={item.title}
            />
          ))}
        </div>

        <div className={styles.howFooter}>
          <ButtonLink
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
      key={item.slug}
      title={item.title}
    />
  );
};

export const HomeBlog = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).blog;

  return (
    <section
      aria-labelledby="home-blog-title"
      className={styles.contentSection}
      id="blog"
    >
      <div className={styles.pageGutters}>
        <SectionHeader
          body={copy.body}
          eyebrow={copy.eyebrow}
          id="home-blog-title"
          title={copy.title}
        />

        <div className={styles.blogGrid}>
          {copy.items.map(
            (item): ReactNode =>
              renderBlogCard(item, locale, copy.action),
          )}
        </div>

        <div className={styles.sectionAction}>
          <ButtonLink href={`/${locale}/blog`} size="small">
            {copy.allAction}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export const HomeFaq = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).faq;

  return (
    <section
      aria-labelledby="home-faq-title"
      className={`${styles.contentSection} ${styles.faqSection}`}
      id="faq"
    >
      <div className={styles.pageGutters}>
        <SectionHeader
          body={copy.body}
          eyebrow={copy.eyebrow}
          id="home-faq-title"
          title={copy.title}
        />

        <div className={styles.faqGrid}>
          {copy.items.map((item): ReactNode => (
            <Card
              body={item.body}
              className={styles.faqCard}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeFinalCta = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).finalCta;

  return (
    <section
      aria-labelledby="home-final-cta-title"
      className={styles.finalCtaSection}
    >
      <div className={styles.pageGutters}>
        <div className={styles.finalCtaCard}>
          <div className={styles.finalCtaCopy}>
            <p>{copy.eyebrow}</p>
            <h2 id="home-final-cta-title">{copy.title}</h2>
            <span>{copy.body}</span>
          </div>
          <div className={styles.finalCtaActions}>
            <ButtonLink
              className={styles.finalPrimaryAction}
              href="#converter"
              size="medium"
            >
              {copy.primaryAction}
            </ButtonLink>
            <ExtensionButtonLink
              className={styles.finalSecondaryAction}
              locale={locale}
              size="medium"
              variant="secondary"
            >
              {copy.extensionAction}
            </ExtensionButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
