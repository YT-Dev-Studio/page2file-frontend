import Link from "next/link";
import type { ReactNode } from "react";
import {
  getBlogEntries,
  getChangelogEntries,
  getUpdateEntries,
  type ChangelogEntry,
  type ContentEntry,
} from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import {
  ArticleJsonLd,
  SeoBreadcrumbs,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
import { BlogCard } from "./blog-card";
import { formatContentDate, getContentCopy } from "./content-copy";
import styles from "./content.module.css";

const EntryRow = ({
  entry,
  locale,
}: {
  entry: ContentEntry;
  locale: Locale;
}): ReactNode => {
  const copy = getContentCopy(locale);
  const base = entry.kind === "blog" ? "blog" : "updates";
  return (
    <article className={styles.entry}>
      <time className={styles.entryDate} dateTime={entry.publishedAt}>
        {formatContentDate(locale, entry.publishedAt)}
      </time>
      <div>
        <h3>
          <Link href={`/${locale}/${base}/${entry.slug}`}>{entry.title}</Link>
        </h3>
        <p>{entry.description}</p>
      </div>
      <span className={styles.entryMeta}>
        {copy.minuteLabel(entry.readingMinutes)}
      </span>
    </article>
  );
};

export const ContentIndexPage = ({
  kind,
  locale,
}: {
  kind: "blog" | "updates";
  locale: Locale;
}): ReactNode => {
  const copy = getContentCopy(locale);
  const entries =
    kind === "blog" ? getBlogEntries(locale) : getUpdateEntries(locale);
  const indexCopy = kind === "blog" ? copy.blog : copy.updates;
  return (
    <PublicPage className={styles.page} family="content">
      <Container>
        <PublicHero
          className={styles.hero}
          eyebrow={indexCopy.eyebrow}
          lead={indexCopy.description}
          title={indexCopy.title}
        >
          {kind === "updates" ? (
            <p>
              <Link href={`/${locale}/changelog`}>{copy.changelogLink}</Link>
            </p>
          ) : null}
        </PublicHero>
        {entries.length > 0 ? (
          <section className={styles.indexSection}>
            {kind === "blog" ? <h2>{copy.allEntriesLabel}</h2> : null}
            {kind === "blog" ? (
              <div className={styles.blogGrid}>
                {entries.map((entry): ReactNode => (
                  <BlogCard
                    actionLabel={copy.readArticleLabel}
                    entry={entry}
                    key={entry.slug}
                    locale={locale}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.list}>
                {entries.map((entry): ReactNode => (
                  <EntryRow entry={entry} key={entry.slug} locale={locale} />
                ))}
              </div>
            )}
          </section>
        ) : (
          <section className={styles.emptyState}>
            <p aria-hidden="true">00</p>
            <div>
              <h2>{copy.emptyTitle}</h2>
              <p>{copy.emptyBody}</p>
              <Link href={`/${locale}/changelog`}>
                {copy.changelogLink}
              </Link>
            </div>
          </section>
        )}
      </Container>
    </PublicPage>
  );
};

export const ContentArticlePage = ({
  entry,
  locale,
}: {
  entry: ContentEntry;
  locale: Locale;
}): ReactNode => {
  const Article = entry.component;
  const copy = getContentCopy(locale);
  const isBlog = entry.kind === "blog";
  const base = isBlog ? "blog" : "updates";
  const articleHeaderClassName = isBlog
    ? `${styles.articleHeader} ${styles.blogArticleHeader}`
    : styles.articleHeader;
  const articleClassName = isBlog
    ? `${styles.article} ${styles.blogArticle}`
    : styles.article;
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: copy.homeLabel, href: `/${locale}` },
    {
      label:
        entry.kind === "blog" ? copy.blogBreadcrumb : copy.updatesBreadcrumb,
      href: `/${locale}/${base}`,
    },
    { label: entry.title, href: `/${locale}/${base}/${entry.slug}` },
  ];
  return (
    <PublicPage className={styles.page} family="content">
      <Container>
        <SeoBreadcrumbs
          items={breadcrumbs}
          label={copy.breadcrumbLabel}
          locale={locale}
        />
        <ArticleJsonLd entry={entry} locale={locale} />
        <PublicHero
          className={articleHeaderClassName}
          eyebrow={isBlog ? copy.guideLabel : copy.updateLabel}
          lead={entry.description}
          title={entry.title}
        >
          <div className={styles.articleMeta}>
            <span>{entry.author}</span>
            <time dateTime={entry.updatedAt}>
              {copy.updatedLabel} {formatContentDate(locale, entry.updatedAt)}
            </time>
            <span>{copy.readLabel(entry.readingMinutes)}</span>
          </div>
        </PublicHero>
        <article className={articleClassName}>
          <Article />
          {entry.kind === "update" ? (
            <p>
              <Link href={`/${locale}/changelog`}>{copy.seeChangelog}</Link>
            </p>
          ) : (
            <p>
              <Link href={`/${locale}/convert-webpage-to-pdf`}>
                {copy.openPdf}
              </Link>
            </p>
          )}
        </article>
      </Container>
    </PublicPage>
  );
};

const Release = ({
  entry,
  locale,
}: {
  entry: ChangelogEntry;
  locale: Locale;
}): ReactNode => {
  const copy = getContentCopy(locale);
  const listItem = (item: string): ReactNode => <li key={item}>{item}</li>;
  return (
    <article className={styles.release}>
      <div>
        <h2>{entry.version}</h2>
        <time className={styles.entryDate} dateTime={entry.date}>
          {formatContentDate(locale, entry.date)}
        </time>
      </div>
      <div>
        <h3>{copy.added}</h3>
        <ul>{entry.added.map(listItem)}</ul>
        <h3>{copy.improved}</h3>
        <ul>{entry.improved.map(listItem)}</ul>
        {entry.fixed.length > 0 ? (
          <>
            <h3>{copy.fixed}</h3>
            <ul>{entry.fixed.map(listItem)}</ul>
          </>
        ) : null}
      </div>
    </article>
  );
};

export const ChangelogPage = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getContentCopy(locale);
  const entries = getChangelogEntries(locale);
  const release = (entry: ChangelogEntry): ReactNode => (
    <Release entry={entry} key={entry.version} locale={locale} />
  );
  return (
    <PublicPage className={styles.page} family="content">
      <Container>
        <PublicHero
          className={styles.hero}
          eyebrow={copy.changelog.eyebrow}
          lead={copy.changelog.description}
          title={copy.changelog.title}
        />
        <div className={styles.changelog}>{entries.map(release)}</div>
      </Container>
    </PublicPage>
  );
};
