import { manrope } from "@/shared/ui/manrope-font";
import Link from "next/link";
import type {
  ComponentPropsWithRef,
  ReactNode,
} from "react";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import styles from "./button.module.css";

export type ButtonSize = "small" | "medium" | "large" | "cta";
export type ButtonVariant = "primary" | "secondary";
export type ButtonIconPosition = "start" | "end";

type ButtonVisualProps = {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  showIcon?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export type ButtonProps = Omit<
  ComponentPropsWithRef<"button">,
  "children"
> &
  ButtonVisualProps;

export type ButtonLinkProps = Omit<
  ComponentPropsWithRef<typeof Link>,
  "children"
> &
  ButtonVisualProps;

type ButtonContentProps = {
  children: ReactNode;
  icon: ReactNode;
  iconPosition: ButtonIconPosition;
  showIcon: boolean;
};

const ButtonContent = ({
  children,
  icon,
  iconPosition,
  showIcon,
}: ButtonContentProps): ReactNode => {
  const hasIcon = showIcon && icon !== null;
  const iconNode = hasIcon ? (
    <span
      aria-hidden="true"
      className={styles.icon}
      data-button-icon=""
    >
      {icon}
    </span>
  ) : null;

  return (
    <>
      {iconPosition === "start" ? iconNode : null}
      <span className={styles.label}>{children}</span>
      {iconPosition === "end" ? iconNode : null}
    </>
  );
};

const getButtonClassName = (
  className: string | undefined,
  size: ButtonSize,
  variant: ButtonVariant,
): string =>
  `${styles.button} ${styles[size]} ${styles[variant]} ${manrope.className} ${className ?? ""}`.trim();

export const Button = ({
  children = "Button",
  className,
  icon = <ArrowRightIcon />,
  iconPosition = "end",
  ref,
  showIcon = true,
  size = "small",
  type = "button",
  variant = "primary",
  ...buttonProps
}: ButtonProps): ReactNode => {
  const buttonClassName = getButtonClassName(className, size, variant);

  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      ref={ref}
      type={type}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        showIcon={showIcon}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

export const ButtonLink = ({
  children = "Link",
  className,
  icon = <ArrowRightIcon />,
  iconPosition = "end",
  ref,
  showIcon = true,
  size = "small",
  variant = "primary",
  ...linkProps
}: ButtonLinkProps): ReactNode => {
  const buttonClassName = getButtonClassName(className, size, variant);

  return (
    <Link
      {...linkProps}
      className={buttonClassName}
      ref={ref}
    >
      <ButtonContent
        icon={icon}
        iconPosition={iconPosition}
        showIcon={showIcon}
      >
        {children}
      </ButtonContent>
    </Link>
  );
};
