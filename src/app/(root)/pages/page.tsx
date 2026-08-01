import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { getBlogEntries, getUpdateEntries } from "@/content/content-registry";
import { localeRegistry, type Locale } from "@/shared/i18n/locales";
import {
  routePath,
  staticRoutes,
  type StaticRoute,
} from "@/shared/routes/routes";

export const metadata: Metadata = {
  title: "Все страницы Page2File",
  robots: {
    follow: false,
    index: false,
  },
};

type PageLink = {
  href: string;
  label: string;
};

type PageCategory = {
  links: ReadonlyArray<PageLink>;
  title: string;
};

const getStaticCategory = (route: StaticRoute): string => {
  if (route === "") return "Главная";
  if (route.startsWith("convert-webpage-to-")) return "Конвертеры";
  if (route.startsWith("chrome-extension")) return "Расширение Chrome";
  if (route.endsWith("-gpt")) return "GPT-инструменты";
  if (route.startsWith("export-")) return "Экспорт AI-чатов";
  if (route === "blog" || route === "updates" || route === "changelog") {
    return "Контент";
  }
  return "Документы и безопасность";
};

const getStaticLabel = (route: StaticRoute): string =>
  route === "" ? "Главная страница" : route;

const getStaticCategories = (locale: Locale): ReadonlyArray<PageCategory> => {
  const categoryOrder: ReadonlyArray<string> = [
    "Главная",
    "Конвертеры",
    "Расширение Chrome",
    "GPT-инструменты",
    "Экспорт AI-чатов",
    "Контент",
    "Документы и безопасность",
  ];

  return categoryOrder.map((title): PageCategory => ({
    title,
    links: staticRoutes
      .filter((route): boolean => getStaticCategory(route) === title)
      .map((route): PageLink => ({
        href: routePath(locale, route),
        label: getStaticLabel(route),
      })),
  }));
};

const getContentCategories = (locale: Locale): ReadonlyArray<PageCategory> => [
  {
    title: "Статьи блога",
    links: getBlogEntries(locale).map((entry): PageLink => ({
      href: routePath(locale, `blog/${entry.slug}`),
      label: entry.title,
    })),
  },
  {
    title: "Обновления",
    links: getUpdateEntries(locale).map((entry): PageLink => ({
      href: routePath(locale, `updates/${entry.slug}`),
      label: entry.title,
    })),
  },
];

const PageLinkList = ({
  links,
}: {
  links: ReadonlyArray<PageLink>;
}): ReactNode => (
  <ul>
    {links.map(({ href, label }): ReactNode => (
      <li key={href}>
        <Link href={href}>{label}</Link>
      </li>
    ))}
  </ul>
);

const LocalePages = ({
  locale,
  languageName,
}: {
  languageName: string;
  locale: Locale;
}): ReactNode => {
  const categories = [
    ...getStaticCategories(locale),
    ...getContentCategories(locale),
  ];

  return (
    <section>
      <h2>
        {languageName} ({locale})
      </h2>
      {categories.map(({ links, title }): ReactNode => (
        <section key={title}>
          <h3>{title}</h3>
          <PageLinkList links={links} />
        </section>
      ))}
    </section>
  );
};

const PagesIndex = (): ReactNode => {
  return (
    <main id="main-content">
      <h1>Все страницы сайта</h1>

      <section>
        <h2>Служебные маршруты</h2>
        <ul>
          <li>
            <Link href="/">Корневой редирект</Link>
          </li>
          <li>
            <Link href="/pages">Эта страница</Link>
          </li>
        </ul>
      </section>

      {localeRegistry.map(({ code, languageName }): ReactNode => (
        <LocalePages key={code} languageName={languageName} locale={code} />
      ))}
    </main>
  );
};

export default PagesIndex;
