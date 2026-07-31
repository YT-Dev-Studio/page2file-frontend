import { Manrope } from "next/font/google";
import {
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { ProductFormat } from "@/shared/ui/types/product-format";
import styles from "./progress.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export type ProgressProps = Omit<
  ComponentPropsWithoutRef<"progress">,
  "children" | "max" | "value"
> & {
  format?: ProductFormat;
  label: string;
  showValue?: boolean;
  value?: number;
};

const assertProgressValue = (value: number | undefined): void => {
  if (
    value !== undefined &&
    (!Number.isFinite(value) || value < 0 || value > 100)
  ) {
    throw new RangeError("Progress value must be between 0 and 100.");
  }
};

export const Progress = ({
  className,
  format = "master",
  id,
  label,
  showValue = true,
  value,
  ...progressProps
}: ProgressProps): ReactNode => {
  assertProgressValue(value);

  const generatedId = useId();
  const progressId = id ?? `${generatedId}-progress`;
  const labelId = `${progressId}-label`;
  const isDeterminate = value !== undefined;
  const wrapperClassName =
    `${styles.progress} ${styles[format]} ${manrope.className} ${className ?? ""}`.trim();

  return (
    <div className={wrapperClassName}>
      <div className={styles.info}>
        <span className={styles.label} id={labelId}>
          {label}
        </span>
        {showValue && isDeterminate ? (
          <span aria-hidden="true" className={styles.value}>
            {value}%
          </span>
        ) : null}
      </div>
      <progress
        {...progressProps}
        aria-labelledby={labelId}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={isDeterminate ? value : undefined}
        className={styles.track}
        id={progressId}
        max={100}
        value={value}
      />
    </div>
  );
};
