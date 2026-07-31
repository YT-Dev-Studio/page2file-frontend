import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import styles from "./icon.module.css";

export type IconSize = "small" | "medium" | "large";

export type IconProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  children: ReactNode;
  label?: string;
  size?: IconSize;
  spinning?: boolean;
};

export const Icon = ({
  children,
  className,
  label,
  size = "large",
  spinning = false,
  ...spanProps
}: IconProps): ReactNode => {
  const iconClassName =
    `${styles.icon} ${styles[size]} ${spinning ? styles.spinner : ""} ${className ?? ""}`.trim();

  return (
    <span
      {...spanProps}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={iconClassName}
      role={label ? "img" : undefined}
    >
      {children}
    </span>
  );
};
