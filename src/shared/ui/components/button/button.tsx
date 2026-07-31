import { Manrope } from "next/font/google";
import type {
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import styles from "./button.module.css";

const manrope = Manrope({
  display: "swap",
  subsets: ["cyrillic", "latin"],
});

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = Omit<
  ComponentPropsWithRef<"button">,
  "children"
> & {
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  icon?: ReactNode;
  showIcon?: boolean;
};

export const Button = ({
  children = "Button",
  className,
  icon = <ArrowRightIcon />,
  ref,
  showIcon = true,
  size = "small",
  type = "button",
  variant = "primary",
  ...buttonProps
}: ButtonProps): ReactNode => {
  const buttonClassName =
    `${styles.button} ${styles[size]} ${styles[variant]} ${manrope.className} ${className ?? ""}`.trim();
  const hasIcon = showIcon && icon !== null;

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      ref={ref}
      type={type}
    >
      <span className={styles.label}>{children}</span>
      {hasIcon ? (
        <span
          aria-hidden="true"
          className={styles.icon}
          data-button-icon=""
        >
          {icon}
        </span>
      ) : null}
    </button>
  );
};
