import { manrope } from "@/shared/ui/manrope-font";
import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import { FormatBadge } from "@/shared/ui/components/format-badge/format-badge";
import type { ProductFormat } from "@/shared/ui/types/product-format";
import { DownloadIcon } from "@/shared/ui/utilities/icons/glyphs/download-icon";
import { FileIcon } from "@/shared/ui/utilities/icons/glyphs/file-icon";
import styles from "./file-card.module.css";

export type FileCardProps = Omit<
  ComponentPropsWithoutRef<"article">,
  "children"
> & {
  actionIcon?: ReactNode;
  actionLabel: string;
  disabled?: boolean;
  filename: string;
  format?: ProductFormat;
  meta: string;
  onAction?: () => void;
  selected?: boolean;
  showAction?: boolean;
};

export const FileCard = ({
  actionIcon = <DownloadIcon />,
  actionLabel,
  className,
  disabled = false,
  filename,
  format = "master",
  meta,
  onAction,
  selected = false,
  showAction = true,
  ...articleProps
}: FileCardProps): ReactNode => {
  const cardClassName =
    `${styles.card} ${styles[format]} ${selected ? styles.selected : ""} ${disabled ? styles.disabled : ""} ${manrope.className} ${className ?? ""}`.trim();
  const hasAction = showAction && actionIcon !== null;

  return (
    <article
      {...articleProps}
      className={cardClassName}
      data-disabled={disabled || undefined}
      data-selected={selected || undefined}
    >
      <span aria-hidden="true" className={styles.tile}>
        <span className={styles.tileIcon}>
          <FileIcon />
        </span>
      </span>
      <div className={styles.content}>
        <strong className={styles.filename} title={filename}>
          {filename}
        </strong>
        <span className={styles.meta}>{meta}</span>
        <FormatBadge
          className={styles.badge}
          format={format}
          style="subtle"
        />
      </div>
      {hasAction ? (
        <button
          aria-label={`${actionLabel}: ${filename}`}
          className={styles.action}
          disabled={disabled}
          onClick={onAction}
          type="button"
        >
          <span aria-hidden="true" className={styles.actionIcon}>
            {actionIcon}
          </span>
        </button>
      ) : null}
    </article>
  );
};
