import type { ReactNode } from "react";
import { externalLinks, type ExternalLinkKey } from "@/shared/config/site";
import styles from "./ui.module.css";

type ExternalCtaProps = {
  externalLinkKey: ExternalLinkKey;
  label: string;
  placeholderLabel: string;
  compact?: boolean;
};

export const ExternalCta = ({
  externalLinkKey,
  label,
  placeholderLabel,
}: ExternalCtaProps): ReactNode => {
  const link = externalLinks[externalLinkKey];

  return (
    <a
      className={styles.button}
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {link.status === "placeholder" ? placeholderLabel : label}
    </a>
  );
};
