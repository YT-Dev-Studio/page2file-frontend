import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  getBlogEntries,
  type ContentEntry,
} from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import {
  ArticleJsonLd,
  SeoBreadcrumbs,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import { BlogCard } from "./blog-card";
import { formatContentDate, getContentCopy } from "./content-copy";
import styles from "./content.module.css";

export const ContentIndexPage = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getContentCopy(locale);
  const entries = getBlogEntries(locale);
  return (
    <PublicPage className={styles.page} family="content">
      <Container>
        <PublicHero
          className={styles.hero}
          eyebrow={copy.blog.eyebrow}
          lead={copy.blog.description}
          title={copy.blog.title}
        />
        <section aria-labelledby="blog-list-title" className={styles.indexSection}>
          <h2 id="blog-list-title">{copy.allEntriesLabel}</h2>
          <div className={styles.blogGrid}>
            {entries.map((entry): ReactNode => (
              <BlogCard entry={entry} key={entry.slug} locale={locale} />
            ))}
          </div>
        </section>
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
  const route = `blog/${entry.slug}`;
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: copy.homeLabel, href: `/${locale}` },
    { label: copy.blogBreadcrumb, href: `/${locale}/blog` },
    { label: entry.title, href: `/${locale}/${route}` },
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
          className={styles.articleHeader}
          eyebrow={copy.guideLabel}
          lead={entry.description}
          title={entry.title}
        >
          <div className={styles.articleMeta}>
            <Link href={`/${locale}/about`}>{entry.author}</Link>
            <time dateTime={entry.updatedAt}>
              {copy.updatedLabel} {formatContentDate(locale, entry.updatedAt)}
            </time>
            <span>{copy.readLabel(entry.readingMinutes)}</span>
          </div>
        </PublicHero>
        <div className={styles.cover}>
          <Image
            alt={entry.imageAlt}
            fill
            priority
            sizes="(max-width: 767px) calc(100vw - 32px), 960px"
            src={entry.image}
          />
        </div>
        <article className={styles.article}>
          <Article />
          <aside className={styles.nextStep}>
            <Link href={`/${locale}/chrome-extension/how-to-use`}>
              {copy.nextStepLabel} →
            </Link>
          </aside>
        </article>
      </Container>
    </PublicPage>
  );
};
