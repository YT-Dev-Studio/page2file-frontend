import type { ReactNode } from "react";
import {
  Button,
  type ButtonProps,
} from "./button";
import styles from "./button.module.css";

export type ButtonPreviewState =
  | "default"
  | "hover"
  | "focused"
  | "pressed"
  | "disabled";

type ButtonPreviewProps = ButtonProps & {
  previewState: ButtonPreviewState;
};

const previewClassNames: Record<ButtonPreviewState, string | undefined> = {
  default: undefined,
  hover: styles.previewHover,
  focused: styles.previewFocused,
  pressed: styles.previewPressed,
  disabled: styles.previewDisabled,
};

export const ButtonPreview = ({
  className,
  disabled,
  previewState,
  ...buttonProps
}: ButtonPreviewProps): ReactNode => {
  const previewClassName = previewClassNames[previewState];
  const combinedClassName =
    `${previewClassName ?? ""} ${className ?? ""}`.trim();

  return (
    <Button
      {...buttonProps}
      className={combinedClassName}
      disabled={disabled || previewState === "disabled"}
    />
  );
};
