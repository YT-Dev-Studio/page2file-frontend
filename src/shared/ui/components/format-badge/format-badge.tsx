import { manrope } from "@/shared/ui/manrope-font";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { ProductFormat } from "@/shared/ui/types/product-format";
import styles from "./format-badge.module.css";

const formatLabels: Record<ProductFormat, string> = {
  master: "Master",
  pdf: "PDF",
  pptx: "PPTX",
  slides: "Slides",
};

export type FormatBadgeProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children" | "style"
> & {
  children?: ReactNode;
  format?: ProductFormat;
  style?: "solid" | "subtle";
};

export const FormatBadge = ({
  children,
  className,
  format = "master",
  style = "solid",
  ...spanProps
}: FormatBadgeProps): ReactNode => {
  const badgeClassName =
    `${styles.badge} ${styles[format]} ${styles[style]} ${manrope.className} ${className ?? ""}`.trim();

  return (
    <span {...spanProps} className={badgeClassName}>
      {children ?? formatLabels[format]}
    </span>
  );
};
