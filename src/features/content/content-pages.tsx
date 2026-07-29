import Link from "next/link";
import type { ReactNode } from "react";
import {
  blogEntries,
  changelogEntries,
  type ChangelogEntry,
  type ContentEntry,
  updateEntries,
} from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import { getLocaleDefinition } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import styles from "./content.module.css";

const EntryRow = ({
  entry,
  locale,
}: {
  entry: ContentEntry;
  locale: Locale;
}): ReactNode => {
  const base = entry.kind === "blog" ? "blog" : "updates";
  return (
    <article className={styles.entry}>
      <time className={styles.entryDate} dateTime={entry.publishedAt}>{entry.publishedAt}</time>
      <div>
        <h2><Link href={`/${locale}/${base}/${entry.slug}`}>{entry.title}</Link></h2>
        <p>{entry.description}</p>
      </div>
      <span className={styles.entryMeta}>{entry.readingMinutes} min</span>
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
  const entries = kind === "blog" ? blogEntries : updateEntries;
  const entryRow = (entry: ContentEntry): ReactNode => (
    <EntryRow entry={entry} key={entry.slug} locale={locale} />
  );
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>{kind === "blog" ? "Conversion field notes" : "Product updates"}</p>
          <h1 className={styles.title}>{kind === "blog" ? "Practical webpage export guides" : "What changed and why"}</h1>
          <p className={styles.description}>
            {kind === "blog"
              ? "Ten focused articles about fidelity, links, page breaks, slides, private chats and safe HTML."
              : "Human-readable prototype changes, each connected to the technical changelog."}
          </p>
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
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <header className={styles.articleHeader}>
          {!definition.reviewed ? <div className={styles.draft}>English fallback article — this locale is not indexed.</div> : null}
          <p className={styles.eyebrow}>{entry.kind === "blog" ? "Guide" : "Product update"}</p>
          <h1 className={styles.title}>{entry.title}</h1>
          <p className={styles.description}>{entry.description}</p>
          <div className={styles.articleMeta}>
            <span>{entry.author}</span>
            <time dateTime={entry.updatedAt}>Updated {entry.updatedAt}</time>
            <span>{entry.readingMinutes} min read</span>
          </div>
        </header>
        <article className={styles.article}>
          <Article />
          {entry.kind === "update" ? (
            <p><Link href={`/${locale}/changelog`}>See the technical changelog →</Link></p>
          ) : (
            <p><Link href={`/${locale}/convert-webpage-to-pdf`}>Open the PDF prototype →</Link></p>
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
  const listItem = (item: string): ReactNode => <li key={item}>{item}</li>;
  return (
    <article className={styles.release}>
      <div>
        <h2>{entry.version}</h2>
        <time className={styles.entryDate} dateTime={entry.date}>{entry.date}</time>
      </div>
      <div>
        <h3>Added</h3>
        <ul>{entry.added.map(listItem)}</ul>
        <h3>Improved</h3>
        <ul>{entry.improved.map(listItem)}</ul>
        {entry.fixed.length > 0 ? <><h3>Fixed</h3><ul>{entry.fixed.map(listItem)}</ul></> : null}
        {entry.relatedUpdate ? <Link href={`/${locale}/updates/${entry.relatedUpdate}`}>Read the related update →</Link> : null}
      </div>
    </article>
  );
};

export const ChangelogPage = ({ locale }: { locale: Locale }): ReactNode => {
  const release = (entry: ChangelogEntry): ReactNode => (
    <Release entry={entry} key={entry.version} locale={locale} />
  );
  return (
    <main className={styles.page} id="main-content">
      <Container>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Technical history</p>
          <h1 className={styles.title}>Changelog</h1>
          <p className={styles.description}>Versioned prototype changes. Sample entries are clearly labelled and link back to product updates.</p>
        </header>
        <div className={styles.changelog}>{changelogEntries.map(release)}</div>
      </Container>
    </main>
  );
};
