"use client";

import {
  useState,
  type ChangeEvent,
  type ClipboardEvent,
  type FocusEvent,
  type ReactNode,
} from "react";
import { TextField } from "@/shared/ui/components/text-field/text-field";
import { validatePublicUrl } from "./url-validation";

export type WebsiteUrlFieldProps = {
  disabled?: boolean;
  emptyError: string;
  error?: string;
  helper: string;
  id: string;
  invalidError: string;
  label: string;
  onValueChange: (value: string) => void;
  required?: boolean;
  value: string;
};

const getValidationError = (
  value: string,
  emptyError: string,
  invalidError: string,
): string => {
  const validation = validatePublicUrl(value);

  if (validation.valid) {
    return "";
  }

  return validation.code === "empty" ? emptyError : invalidError;
};

const getPastedValue = (
  event: ClipboardEvent<HTMLInputElement>,
): string => {
  const input = event.currentTarget;
  const selectionStart = input.selectionStart ?? input.value.length;
  const selectionEnd = input.selectionEnd ?? selectionStart;
  const pastedText = event.clipboardData.getData("text");

  return `${input.value.slice(0, selectionStart)}${pastedText}${input.value.slice(selectionEnd)}`;
};

export const WebsiteUrlField = ({
  disabled,
  emptyError,
  error,
  helper,
  id,
  invalidError,
  label,
  onValueChange,
  required,
  value,
}: WebsiteUrlFieldProps): ReactNode => {
  const [localError, setLocalError] = useState("");
  const [touched, setTouched] = useState(false);

  const validateValue = (nextValue: string): void => {
    setLocalError(
      getValidationError(nextValue, emptyError, invalidError),
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const nextValue = event.currentTarget.value;
    onValueChange(nextValue);

    if (touched) {
      validateValue(nextValue);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    setTouched(true);
    validateValue(event.currentTarget.value);
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>): void => {
    validateValue(getPastedValue(event));
  };

  return (
    <TextField
      disabled={disabled}
      error={error || localError}
      helper={helper}
      id={id}
      inputMode="url"
      label={label}
      onBlur={handleBlur}
      onChange={handleChange}
      onPaste={handlePaste}
      required={required}
      spellCheck={false}
      type="url"
      value={value}
    />
  );
};
