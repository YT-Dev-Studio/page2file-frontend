import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentEntry } from "@/content/content-registry";
import type { Locale } from "@/shared/i18n/locales";
import { formatContentDate, getContentCopy } from "./content-copy";
import styles from "./blog-card.module.css";

type BlogCardProps = {
  actionLabel: string;
  entry: ContentEntry;
  locale: Locale;
};

export const BlogCard = ({
  actionLabel,
  entry,
  locale,
}: BlogCardProps): ReactNode => {
  const copy = getContentCopy(locale);
  const href = `/${locale}/blog/${entry.slug}`;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          alt={entry.imageAlt}
          fill
          sizes="(max-width: 735px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 28px), (max-width: 1279px) calc(33.333vw - 32px), 282px"
          src={entry.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <time dateTime={entry.publishedAt}>
            {formatContentDate(locale, entry.publishedAt)}
          </time>
          <span aria-hidden="true">·</span>
          <span>{copy.minuteLabel(entry.readingMinutes)}</span>
        </div>
        <h3 className={styles.title}>
          <Link
            aria-label={`${actionLabel}: ${entry.title}`}
            className={styles.link}
            href={href}
          >
            {entry.title}
          </Link>
        </h3>
        <p className={styles.description}>{entry.description}</p>
        <span aria-hidden="true" className={styles.action}>
          {actionLabel}
          <span>↗</span>
        </span>
      </div>
    </article>
  );
};
