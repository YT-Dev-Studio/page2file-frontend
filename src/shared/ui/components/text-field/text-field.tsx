import { Manrope } from "next/font/google";
import {
  useId,
  type ComponentPropsWithRef,
  type ReactNode,
} from "react";
import { FieldFrame } from "@/shared/ui/internal/field-frame/field-frame";
import styles from "./text-field.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export type TextFieldProps = Omit<
  ComponentPropsWithRef<"input">,
  "children" | "size"
> & {
  error?: string;
  helper?: string;
  label: string;
  showHelper?: boolean;
  showLabel?: boolean;
};

const joinDescriptionIds = (
  consumerId: string | undefined,
  fieldId: string | undefined,
): string | undefined =>
  [consumerId, fieldId].filter(Boolean).join(" ") || undefined;

export const TextField = ({
  "aria-describedby": ariaDescribedBy,
  className,
  error,
  helper,
  id,
  label,
  ref,
  showHelper = true,
  showLabel = true,
  ...inputProps
}: TextFieldProps): ReactNode => {
  const generatedId = useId();
  const controlId = id ?? `${generatedId}-control`;
  const helperId = `${controlId}-helper`;
  const errorId = `${controlId}-error`;
  const visibleMessageId = error
    ? errorId
    : showHelper && helper
      ? helperId
      : undefined;
  const inputClassName =
    `${styles.input} ${manrope.className} ${className ?? ""}`.trim();

  return (
    <FieldFrame
      controlId={controlId}
      error={error}
      errorId={errorId}
      helper={helper}
      helperId={helperId}
      label={label}
      showHelper={showHelper}
      showLabel={showLabel}
    >
      <input
        {...inputProps}
        aria-describedby={joinDescriptionIds(
          ariaDescribedBy,
          visibleMessageId,
        )}
        aria-invalid={error ? true : inputProps["aria-invalid"]}
        className={inputClassName}
        id={controlId}
        ref={ref}
      />
    </FieldFrame>
  );
};
