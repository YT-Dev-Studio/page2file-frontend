import type { ReactNode } from "react";
import { externalLinks, type ExternalLinkKey } from "@/shared/config/site";
import styles from "./ui.module.css";

type ExternalCtaProps = {
  externalLinkKey: ExternalLinkKey;
  label: string;
  comingSoonLabel: string;
  compact?: boolean;
};

export const ExternalCta = ({
  externalLinkKey,
  label,
  comingSoonLabel,
}: ExternalCtaProps): ReactNode => {
  const href = externalLinks[externalLinkKey];
  if (!href) {
    return (
      <span className={`${styles.secondaryButton} ${styles.disabledButton}`} aria-disabled="true">
        {comingSoonLabel}
      </span>
    );
  }
  return (
    <a className={styles.button} href={href} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  );
};
