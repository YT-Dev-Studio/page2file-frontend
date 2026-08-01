import type { ReactNode } from "react";
import type { PublicPageFamily } from "@/shared/routes/routes";
import styles from "./public-page.module.css";

type PublicPageProps = {
  children: ReactNode;
  className?: string;
  family?: PublicPageFamily;
};

type PublicHeroProps = {
  children?: ReactNode;
  className?: string;
  eyebrow: string;
  lead: string;
  title: string;
};

type PublicSectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "subtle";
};

const joinClasses = (
  ...classNames: ReadonlyArray<string | undefined | false>
): string => classNames.filter(Boolean).join(" ");

export const PublicPage = ({
  children,
  className,
  family,
}: PublicPageProps): ReactNode => (
  <main
    className={joinClasses(styles.page, className)}
    data-page-family={family}
    id="main-content"
  >
    {children}
  </main>
);

export const PublicHero = ({
  children,
  className,
  eyebrow,
  lead,
  title,
}: PublicHeroProps): ReactNode => (
  <header className={joinClasses(styles.hero, className)}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.lead}>{lead}</p>
    {children ? <div className={styles.heroContent}>{children}</div> : null}
  </header>
);

export const PublicSection = ({
  children,
  className,
  tone = "default",
}: PublicSectionProps): ReactNode => (
  <section
    className={joinClasses(
      styles.section,
      tone === "subtle" && styles.sectionSubtle,
      className,
    )}
  >
    {children}
  </section>
);
