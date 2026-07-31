import type { ReactNode } from "react";
import styles from "./field-frame.module.css";

export type FieldFrameProps = {
  children: ReactNode;
  className?: string;
  controlId: string;
  error?: string;
  errorId: string;
  helper?: string;
  helperId: string;
  label: string;
  showHelper?: boolean;
  showLabel?: boolean;
};

export const FieldFrame = ({
  children,
  className,
  controlId,
  error,
  errorId,
  helper,
  helperId,
  label,
  showHelper = true,
  showLabel = true,
}: FieldFrameProps): ReactNode => {
  const fieldClassName =
    `${styles.field} ${className ?? ""}`.trim();
  const labelClassName = showLabel
    ? styles.label
    : styles.visuallyHidden;
  const message = error || (showHelper ? helper : undefined);

  return (
    <div className={fieldClassName}>
      <label className={labelClassName} htmlFor={controlId}>
        {label}
      </label>
      {children}
      {message ? (
        <span
          className={`${styles.message} ${error ? styles.error : ""}`.trim()}
          id={error ? errorId : helperId}
          role={error ? "alert" : undefined}
        >
          {message}
        </span>
      ) : null}
    </div>
  );
};
