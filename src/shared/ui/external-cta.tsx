import type { ReactNode } from "react";
import {
  analyticsDataAttributes,
  type AnalyticsPlacement,
} from "@/features/analytics/analytics-events";
import { externalLinks, type ExternalLinkKey } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { ButtonLink } from "@/shared/ui/components/button/button";

type ExternalCtaProps = {
  externalLinkKey: ExternalLinkKey;
  label: string;
  locale: Locale;
  placeholderLabel: string;
  analyticsPlacement: AnalyticsPlacement;
  compact?: boolean;
};

export const ExternalCta = ({
  externalLinkKey,
  label,
  locale,
  placeholderLabel,
  analyticsPlacement,
}: ExternalCtaProps): ReactNode => {
  const link = externalLinks[externalLinkKey];
  const analyticsAttributes =
    externalLinkKey === "chromeExtension"
      ? analyticsDataAttributes({
          locale,
          name: "extension_install_click",
          placement: analyticsPlacement,
        })
      : analyticsDataAttributes({
          contentId: externalLinkKey,
          contentType: "gpt_tool",
          locale,
          name: "select_content",
          placement: "workflow_hero",
        });

  return (
    <ButtonLink
      {...analyticsAttributes}
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
