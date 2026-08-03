import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentEntry } from "@/content/content-registry";
import {
  absoluteUrl,
  indexingEnabled,
  siteName,
} from "@/shared/config/site";
import {
  getLocaleDefinition,
  type Locale,
} from "@/shared/i18n/locales";
import { routePath } from "@/shared/routes/routes";
import { getSeoCopy } from "./seo-copy";
import styles from "@/shared/ui/ui.module.css";

type JsonLdProps = {
  data: Readonly<Record<string, unknown>>;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

const serializeJsonLd = (
  data: Readonly<Record<string, unknown>>,
): string => JSON.stringify(data).replace(/</g, "\\u003c");

export const JsonLd = ({ data }: JsonLdProps): ReactNode => (
  <script type="application/ld+json">{serializeJsonLd(data)}</script>
);

export const WebsiteJsonLd = ({ locale }: { locale: Locale }): ReactNode => {
  const definition = getLocaleDefinition(locale);
  if (!indexingEnabled || !definition.indexable || !definition.reviewed) {
    return null;
  }
  const copy = getSeoCopy(locale, "home");
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        description: copy.description,
        inLanguage: definition.htmlLang,
        url: absoluteUrl(routePath(locale, "")),
      }}
    />
  );
};

export const SeoBreadcrumbs = ({
  items,
  label,
  locale,
}: {
  items: ReadonlyArray<BreadcrumbItem>;
  label: string;
  locale: Locale;
}): ReactNode => {
  const definition = getLocaleDefinition(locale);
  const breadcrumbLink = (
    item: BreadcrumbItem,
    index: number,
  ): ReactNode => (
    <li key={item.href}>
      {index > 0 ? <span aria-hidden="true">/</span> : null}
      <Link href={item.href}>{item.label}</Link>
    </li>
  );
  const schemaItem = (
    item: BreadcrumbItem,
    index: number,
  ): Record<string, unknown> => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  });
  return (
    <>
      <nav aria-label={label} className={styles.breadcrumbs}>
        <ol>{items.map(breadcrumbLink)}</ol>
      </nav>
      {indexingEnabled && definition.indexable && definition.reviewed ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map(schemaItem),
          }}
        />
      ) : null}
    </>
  );
};

export const ArticleJsonLd = ({
  entry,
  locale,
}: {
  entry: ContentEntry;
  locale: Locale;
}): ReactNode => {
  const definition = getLocaleDefinition(locale);
  if (!indexingEnabled || !definition.indexable || !definition.reviewed) {
    return null;
  }
  const base = entry.kind === "blog" ? "blog" : "updates";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: entry.title,
        description: entry.description,
        image: absoluteUrl(entry.image),
        author: {
          "@type": "Organization",
          name: entry.author,
          url: absoluteUrl(routePath(locale, "")),
        },
        datePublished: entry.publishedAt,
        dateModified: entry.updatedAt,
        inLanguage: definition.htmlLang,
        mainEntityOfPage: absoluteUrl(
          routePath(locale, `${base}/${entry.slug}`),
        ),
        publisher: {
          "@type": "Organization",
          name: siteName,
          url: absoluteUrl(routePath(locale, "")),
        },
      }}
    />
  );
};
