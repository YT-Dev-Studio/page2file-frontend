import type { ReactNode } from "react";
import styles from "./extension-unavailable-tooltip.module.css";

type ExtensionUnavailableTooltipProps = {
  children: ReactNode;
  label: string;
  message: string;
  placement?: "top" | "bottom";
  stretch?: boolean;
};

export const ExtensionUnavailableTooltip = ({
  children,
  label,
  message,
  placement = "top",
  stretch = false,
}: ExtensionUnavailableTooltipProps): ReactNode => {
  const className =
    `${styles.trigger} ${styles[placement]} ${stretch ? styles.stretch : styles.inline}`.trim();

  return (
    <div
      aria-disabled="true"
      aria-label={label}
      className={className}
      data-extension-unavailable=""
      role="group"
      tabIndex={0}
    >
      {children}
      <span className={styles.tooltip} role="tooltip">
        {message}
      </span>
    </div>
  );
};
