import { Manrope } from "next/font/google";
import {
  useId,
  type ComponentPropsWithRef,
  type ReactNode,
} from "react";
import { FieldFrame } from "@/shared/ui/internal/field-frame/field-frame";
import { ChevronDownIcon } from "@/shared/ui/utilities/icons/glyphs/chevron-down-icon";
import styles from "./select.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export type SelectOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

export type SelectProps = Omit<
  ComponentPropsWithRef<"select">,
  "children" | "size"
> & {
  error?: string;
  helper?: string;
  icon?: ReactNode;
  label: string;
  options: ReadonlyArray<SelectOption>;
  placeholder?: string;
  showHelper?: boolean;
  showLabel?: boolean;
};

const joinDescriptionIds = (
  consumerId: string | undefined,
  fieldId: string | undefined,
): string | undefined =>
  [consumerId, fieldId].filter(Boolean).join(" ") || undefined;

const renderOption = ({
  disabled,
  label,
  value,
}: SelectOption): ReactNode => (
  <option disabled={disabled} key={value} value={value}>
    {label}
  </option>
);

export const Select = ({
  "aria-describedby": ariaDescribedBy,
  className,
  error,
  helper,
  icon = <ChevronDownIcon />,
  id,
  label,
  options,
  placeholder,
  ref,
  showHelper = true,
  showLabel = true,
  ...selectProps
}: SelectProps): ReactNode => {
  const generatedId = useId();
  const controlId = id ?? `${generatedId}-control`;
  const helperId = `${controlId}-helper`;
  const errorId = `${controlId}-error`;
  const visibleMessageId = error
    ? errorId
    : showHelper && helper
      ? helperId
      : undefined;
  const selectClassName =
    `${styles.select} ${manrope.className} ${className ?? ""}`.trim();

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
      <span className={styles.control}>
        <select
          {...selectProps}
          aria-describedby={joinDescriptionIds(
            ariaDescribedBy,
            visibleMessageId,
          )}
          aria-invalid={error ? true : selectProps["aria-invalid"]}
          className={selectClassName}
          id={controlId}
          ref={ref}
        >
          {placeholder ? (
            <option disabled value="">
              {placeholder}
            </option>
          ) : null}
          {options.map(renderOption)}
        </select>
        {icon !== null ? (
          <span aria-hidden="true" className={styles.icon} data-select-icon="">
            {icon}
          </span>
        ) : null}
      </span>
    </FieldFrame>
  );
};
