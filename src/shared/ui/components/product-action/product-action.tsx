import { manrope } from "@/shared/ui/manrope-font";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ProductFormat } from "@/shared/ui/types/product-format";
import { DownloadIcon } from "@/shared/ui/utilities/icons/glyphs/download-icon";
import styles from "./product-action.module.css";

export type ProductActionProps = {
  accessibleLabel?: string;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  format?: ProductFormat;
  href: string;
  icon?: ReactNode;
  label: ReactNode;
  showIcon?: boolean;
};

export const ProductAction = ({
  accessibleLabel,
  className,
  disabled = false,
  external = false,
  format = "master",
  href,
  icon = <DownloadIcon />,
  label,
  showIcon = true,
}: ProductActionProps): ReactNode => {
  const actionClassName =
    `${styles.action} ${styles[format]} ${disabled ? styles.disabled : ""} ${manrope.className} ${className ?? ""}`.trim();
  const hasIcon = showIcon && icon !== null;
  const content = (
    <>
      <span className={styles.label}>{label}</span>
      {hasIcon ? (
        <span aria-hidden="true" className={styles.icon} data-product-action-icon="">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        aria-label={accessibleLabel}
        className={actionClassName}
      >
        {content}
      </span>
    );
  }

  if (external) {
    return (
      <a
        aria-label={accessibleLabel}
        className={actionClassName}
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
      className={actionClassName}
      href={href}
    >
      {content}
    </Link>
  );
};
