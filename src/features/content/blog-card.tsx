import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentEntry } from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import { formatContentDate, getContentCopy } from "./content-copy";
import styles from "./blog-card.module.css";

export const BlogCard = ({
  entry,
  locale,
}: {
  entry: ContentEntry;
  locale: Locale;
}): ReactNode => {
  const copy = getContentCopy(locale);
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          alt={entry.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) calc(50vw - 28px), 360px"
          src={entry.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <time dateTime={entry.updatedAt}>
            {formatContentDate(locale, entry.updatedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{copy.minuteLabel(entry.readingMinutes)}</span>
        </div>
        <h2 className={styles.title}>
          <Link
            aria-label={`${copy.readArticleLabel}: ${entry.title}`}
            className={styles.link}
            href={`/${locale}/blog/${entry.slug}`}
          >
            {entry.title}
          </Link>
        </h2>
        <p className={styles.description}>{entry.description}</p>
        <span aria-hidden="true" className={styles.action}>
          {copy.readArticleLabel} <span>→</span>
        </span>
      </div>
    </article>
  );
};
