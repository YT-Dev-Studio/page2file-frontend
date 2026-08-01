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
import { getLocaleDefinition } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import {
  ArticleJsonLd,
  SeoBreadcrumbs,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
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
        <h2><Link href={`/${locale}/${base}/${entry.slug}`}>{entry.title}</Link></h2>
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
  const entryRow = (entry: ContentEntry): ReactNode => (
    <EntryRow entry={entry} key={entry.slug} locale={locale} />
  );
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <header className={styles.hero}>
          <div className={styles.draft}>
            {copy.prototypeSamples}
          </div>
          <p className={styles.eyebrow}>{indexCopy.eyebrow}</p>
          <h1 className={styles.title}>{indexCopy.title}</h1>
          <p className={styles.description}>{indexCopy.description}</p>
          {kind === "updates" ? (
            <p>
              <Link href={`/${locale}/changelog`}>
                {copy.changelogLink}
              </Link>
            </p>
          ) : null}
        </header>
        <div className={styles.list}>{entries.map(entryRow)}</div>
      </Container>
    </main>
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
  const definition = getLocaleDefinition(locale);
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
        entry.kind === "blog"
          ? copy.blogBreadcrumb
          : copy.updatesBreadcrumb,
      href: `/${locale}/${base}`,
    },
    { label: entry.title, href: `/${locale}/${base}/${entry.slug}` },
  ];
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <SeoBreadcrumbs
          items={breadcrumbs}
          label={copy.breadcrumbLabel}
          locale={locale}
        />
        <ArticleJsonLd entry={entry} locale={locale} />
        <header className={articleHeaderClassName}>
          <div className={styles.draft}>
            {copy.articleSample}
          </div>
          {!definition.reviewed ? <div className={styles.draft}>{copy.fallbackArticle}</div> : null}
          <p className={styles.eyebrow}>{isBlog ? copy.guideLabel : copy.updateLabel}</p>
          <h1 className={styles.title}>{entry.title}</h1>
          <p className={styles.description}>{entry.description}</p>
          <div className={styles.articleMeta}>
            <span>{entry.author}</span>
            <time dateTime={entry.updatedAt}>
              {copy.updatedLabel} {formatContentDate(locale, entry.updatedAt)}
            </time>
            <span>{copy.readLabel(entry.readingMinutes)}</span>
          </div>
        </header>
        <article className={articleClassName}>
          <Article />
          {entry.kind === "update" ? (
            <p><Link href={`/${locale}/changelog`}>{copy.seeChangelog}</Link></p>
          ) : (
            <p><Link href={`/${locale}/convert-webpage-to-pdf`}>{copy.openPdf}</Link></p>
          )}
        </article>
      </Container>
    </main>
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
        {entry.fixed.length > 0 ? <><h3>{copy.fixed}</h3><ul>{entry.fixed.map(listItem)}</ul></> : null}
        {entry.relatedUpdate ? <Link href={`/${locale}/updates/${entry.relatedUpdate}`}>{copy.relatedUpdate}</Link> : null}
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
    <main className={styles.page} id="main-content">
      <Container>
        <header className={styles.hero}>
          <div className={styles.draft}>
            {copy.prototypeSamples}
          </div>
          <p className={styles.eyebrow}>{copy.changelog.eyebrow}</p>
          <h1 className={styles.title}>{copy.changelog.title}</h1>
          <p className={styles.description}>{copy.changelog.description}</p>
        </header>
        <div className={styles.changelog}>{entries.map(release)}</div>
      </Container>
    </main>
  );
};
