"use client";

import { manrope } from "@/shared/ui/manrope-font";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { FieldFrame } from "@/shared/ui/internal/field-frame/field-frame";
import { CheckIcon } from "@/shared/ui/utilities/icons/glyphs/check-icon";
import { ChevronDownIcon } from "@/shared/ui/utilities/icons/glyphs/chevron-down-icon";
import styles from "./select.module.css";

export type SelectOption = {
  disabled?: boolean;
  label: string;
  value: string;
};

export type SelectProps = Omit<
  ComponentPropsWithRef<"select">,
  "children" | "multiple" | "size"
> & {
  error?: string;
  helper?: string;
  icon?: ReactNode;
  label: string;
  options: ReadonlyArray<SelectOption>;
  placeholder?: string;
  showHelper?: boolean;
  showLabel?: boolean;
  showSelectedIcon?: boolean;
};

const joinDescriptionIds = (
  consumerId: string | undefined,
  fieldId: string | undefined,
): string | undefined =>
  [consumerId, fieldId].filter(Boolean).join(" ") || undefined;

const normalizeValue = (
  value: string | number | readonly string[] | undefined,
): string => {
  if (Array.isArray(value)) {
    return String(value[0] ?? "");
  }

  return value === undefined ? "" : String(value);
};

const getInitialValue = (
  defaultValue: string | number | readonly string[] | undefined,
  options: ReadonlyArray<SelectOption>,
  placeholder: string | undefined,
  value: string | number | readonly string[] | undefined,
): string => {
  if (value !== undefined || defaultValue !== undefined) {
    return normalizeValue(value ?? defaultValue);
  }

  if (placeholder) {
    return "";
  }

  return options.find((option) => !option.disabled)?.value ?? "";
};

const preventFocusMove = (
  event: ReactMouseEvent<HTMLButtonElement>,
): void => {
  event.preventDefault();
};

export const Select = ({
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  className,
  defaultValue,
  disabled = false,
  error,
  helper,
  icon = <ChevronDownIcon />,
  id,
  label,
  onChange,
  options,
  placeholder,
  ref,
  required,
  showHelper = true,
  showLabel = true,
  showSelectedIcon = true,
  value,
  ...selectProps
}: SelectProps): ReactNode => {
  const generatedId = useId();
  const controlId = id ?? `${generatedId}-control`;
  const listboxId = `${controlId}-listbox`;
  const helperId = `${controlId}-helper`;
  const errorId = `${controlId}-error`;
  const visibleMessageId = error
    ? errorId
    : showHelper && helper
      ? helperId
      : undefined;
  const descriptionIds = joinDescriptionIds(
    ariaDescribedBy,
    visibleMessageId,
  );
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string>(() =>
    getInitialValue(defaultValue, options, placeholder, value),
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const controlRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const nativeSelectRef = useRef<HTMLSelectElement | null>(null);
  const selectedValue = isControlled
    ? normalizeValue(value)
    : internalValue;
  const selectedIndex = options.findIndex(
    (option) => option.value === selectedValue,
  );
  const selectedOption =
    selectedIndex >= 0 ? options[selectedIndex] : undefined;
  const triggerClassName =
    `${styles.trigger} ${manrope.className} ${className ?? ""}`.trim();

  const setNativeSelectRef = (node: HTMLSelectElement | null): void => {
    nativeSelectRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const getFirstEnabledIndex = (): number =>
    options.findIndex((option) => !option.disabled);

  const getLastEnabledIndex = (): number => {
    for (let index = options.length - 1; index >= 0; index -= 1) {
      if (!options[index].disabled) {
        return index;
      }
    }

    return -1;
  };

  const getInitialActiveIndex = (): number => {
    if (selectedIndex >= 0 && !options[selectedIndex].disabled) {
      return selectedIndex;
    }

    return getFirstEnabledIndex();
  };

  const openListbox = (): void => {
    if (disabled) {
      return;
    }

    const initialIndex = getInitialActiveIndex();

    setActiveIndex(initialIndex >= 0 ? initialIndex : null);
    setIsOpen(true);
  };

  const closeListbox = (): void => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  const moveActiveIndex = (direction: 1 | -1): void => {
    if (options.length === 0) {
      return;
    }

    let nextIndex =
      activeIndex ?? (direction === 1 ? -1 : options.length);

    for (let step = 0; step < options.length; step += 1) {
      nextIndex =
        (nextIndex + direction + options.length) % options.length;

      if (!options[nextIndex].disabled) {
        setActiveIndex(nextIndex);
        return;
      }
    }
  };

  const selectOption = (optionIndex: number): void => {
    const option = options[optionIndex];
    const nativeSelect = nativeSelectRef.current;

    if (!option || option.disabled || disabled || !nativeSelect) {
      return;
    }

    if (!isControlled) {
      setInternalValue(option.value);
    }

    nativeSelect.value = option.value;
    nativeSelect.dispatchEvent(new Event("input", { bubbles: true }));
    nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
    closeListbox();
    triggerRef.current?.focus();
  };

  const handleTriggerClick = (): void => {
    if (isOpen) {
      closeListbox();
    } else {
      openListbox();
    }
  };

  const handleTriggerKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ): void => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          openListbox();
        } else {
          moveActiveIndex(1);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          openListbox();
        } else {
          moveActiveIndex(-1);
        }
        break;
      case "Home":
        if (isOpen) {
          event.preventDefault();
          const firstEnabledIndex = getFirstEnabledIndex();

          setActiveIndex(
            firstEnabledIndex >= 0 ? firstEnabledIndex : null,
          );
        }
        break;
      case "End":
        if (isOpen) {
          event.preventDefault();
          const lastEnabledIndex = getLastEnabledIndex();

          setActiveIndex(lastEnabledIndex >= 0 ? lastEnabledIndex : null);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (isOpen && activeIndex !== null) {
          selectOption(activeIndex);
        } else {
          openListbox();
        }
        break;
      case "Escape":
        if (isOpen) {
          event.preventDefault();
          closeListbox();
        }
        break;
      case "Tab":
        closeListbox();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleOutsidePointerDown = (event: PointerEvent): void => {
      if (
        event.target instanceof Node &&
        !controlRef.current?.contains(event.target)
      ) {
        closeListbox();
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);

    return (): void => {
      document.removeEventListener(
        "pointerdown",
        handleOutsidePointerDown,
      );
    };
  }, [isOpen]);

  useEffect(() => {
    const nativeSelect = nativeSelectRef.current;
    const form = nativeSelect?.form;

    if (isControlled || !nativeSelect || !form) {
      return;
    }

    const handleReset = (): void => {
      queueMicrotask(() => {
        setInternalValue(nativeSelect.value);
        closeListbox();
      });
    };

    form.addEventListener("reset", handleReset);

    return (): void => {
      form.removeEventListener("reset", handleReset);
    };
  }, [isControlled]);

  const activeOptionId =
    isOpen && activeIndex !== null
      ? `${listboxId}-option-${activeIndex}`
      : undefined;

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
      <span className={styles.control} ref={controlRef}>
        <button
          aria-activedescendant={activeOptionId}
          aria-controls={listboxId}
          aria-describedby={descriptionIds}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-invalid={error ? true : ariaInvalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-required={required || undefined}
          className={triggerClassName}
          disabled={disabled}
          id={controlId}
          onClick={handleTriggerClick}
          onKeyDown={handleTriggerKeyDown}
          ref={triggerRef}
          role="combobox"
          type="button"
        >
          <span
            className={`${styles.value} ${
              selectedOption ? "" : styles.placeholder
            }`.trim()}
          >
            {selectedOption?.label ?? placeholder ?? ""}
          </span>
          {icon !== null ? (
            <span
              aria-hidden="true"
              className={`${styles.icon} ${
                isOpen ? styles.iconOpen : ""
              }`.trim()}
              data-select-icon=""
            >
              {icon}
            </span>
          ) : null}
        </button>

        {isOpen ? (
          <div
            aria-labelledby={
              ariaLabel || ariaLabelledBy ? undefined : controlId
            }
            className={styles.listbox}
            id={listboxId}
            role="listbox"
          >
            {options.map((option, optionIndex) => {
              const isActive = activeIndex === optionIndex;
              const isSelected = selectedValue === option.value;
              const optionClassName =
                `${styles.option} ${
                  isActive ? styles.optionActive : ""
                } ${isSelected ? styles.optionSelected : ""}`.trim();

              return (
                <button
                  aria-disabled={option.disabled || undefined}
                  aria-selected={isSelected}
                  className={optionClassName}
                  disabled={option.disabled}
                  id={`${listboxId}-option-${optionIndex}`}
                  key={option.value}
                  onClick={() => selectOption(optionIndex)}
                  onMouseDown={preventFocusMove}
                  onMouseEnter={() => {
                    if (!option.disabled) {
                      setActiveIndex(optionIndex);
                    }
                  }}
                  role="option"
                  tabIndex={-1}
                  type="button"
                >
                  <span className={styles.optionLabel}>{option.label}</span>
                  {isSelected && showSelectedIcon ? (
                    <span aria-hidden="true" className={styles.check}>
                      <CheckIcon />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}

        <select
          {...selectProps}
          aria-hidden="true"
          className={styles.nativeSelect}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          ref={setNativeSelectRef}
          required={required}
          tabIndex={-1}
          value={value}
        >
          {placeholder ? (
            <option disabled value="">
              {placeholder}
            </option>
          ) : null}
          {options.map(
            ({
              disabled: optionDisabled,
              label: optionLabel,
              value: optionValue,
            }) => (
              <option
                disabled={optionDisabled}
                key={optionValue}
                value={optionValue}
              >
                {optionLabel}
              </option>
            ),
          )}
        </select>
      </span>
    </FieldFrame>
  );
};
