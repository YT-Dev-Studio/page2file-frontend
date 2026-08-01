import { Manrope } from "next/font/google";
import Link from "next/link";
import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import styles from "./card.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export type CardAction = {
  accessibleLabel?: string;
  external?: boolean;
  href: string;
  label: string;
};

export type CardProps = Omit<
  ComponentPropsWithoutRef<"article">,
  "children"
> & {
  action?: CardAction;
  body: ReactNode;
  emphasis?: "default" | "accent";
  interactive?: boolean;
  media?: ReactNode;
  mediaLayout?: "floating" | "split";
  selected?: boolean;
  title: ReactNode;
};

const renderAction = ({
  accessibleLabel,
  external,
  href,
  label,
}: CardAction): ReactNode => {
  const content = (
    <>
      <span className={styles.actionLabel}>{label}</span>
      <span aria-hidden="true" className={styles.actionIcon}>
        <ArrowRightIcon />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        aria-label={accessibleLabel}
        className={styles.action}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      aria-label={accessibleLabel}
      className={styles.action}
      href={href}
    >
      {content}
    </Link>
  );
};

export const Card = ({
  action,
  body,
  className,
  emphasis = "default",
  interactive = false,
  media,
  mediaLayout = "split",
  selected = false,
  title,
  ...articleProps
}: CardProps): ReactNode => {
  const cardClassName =
    `${styles.card} ${interactive ? styles.interactive : ""} ${selected ? styles.selected : ""} ${manrope.className} ${className ?? ""}`.trim();
  const hasAccent = emphasis === "accent";
  const hasMedia = media !== undefined && media !== null;
  const hasFloatingMedia = hasMedia && mediaLayout === "floating";
  const mediaContentClassName = hasFloatingMedia
    ? styles.floatingMediaContent
    : styles.mediaContent;
  const contentClassName =
    `${styles.content} ${hasMedia ? mediaContentClassName : ""}`.trim();

  return (
    <article
      {...articleProps}
      className={cardClassName}
      data-selected={selected || undefined}
    >
      <div
        className={`${styles.layout} ${hasAccent ? styles.accentLayout : ""}`.trim()}
      >
        <span aria-hidden="true" className={styles.rail} />
        <div className={contentClassName}>
          <h3 className={styles.title}>{title}</h3>
          {hasMedia ? <div className={styles.media}>{media}</div> : null}
          <div className={styles.body}>{body}</div>
          {action ? renderAction(action) : null}
        </div>
      </div>
    </article>
  );
};
