import type { ReactNode } from "react";
import { externalLinks, type ExternalLinkKey } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/components/button/button";

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
    <ButtonLink
      href={link.href}
      rel="noopener noreferrer"
      showIcon={false}
      size="medium"
      target="_blank"
    >
      {link.status === "placeholder" ? placeholderLabel : label}
    </ButtonLink>
  );
};
