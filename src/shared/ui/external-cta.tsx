import type { ReactNode } from "react";
import {
  analyticsDataAttributes,
  type AnalyticsPlacement,
} from "@/features/analytics/analytics-events";
import {
  extensionInstallAvailable,
  externalLinks,
  type ExternalLinkKey,
} from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import {
  Button,
  ButtonLink,
  type ButtonSize,
} from "@/shared/ui/components/button/button";
import { ExtensionUnavailableTooltip } from "@/shared/ui/extension-unavailable-tooltip";

type ExternalCtaProps = {
  externalLinkKey: ExternalLinkKey;
  label: string;
  locale: Locale;
  placeholderLabel: string;
  analyticsPlacement: AnalyticsPlacement;
  compact?: boolean;
  size?: ButtonSize;
};

export const ExternalCta = ({
  externalLinkKey,
  label,
  locale,
  placeholderLabel,
  analyticsPlacement,
  size = "medium",
}: ExternalCtaProps): ReactNode => {
  const link = externalLinks[externalLinkKey];
  const buttonLabel = link.status === "placeholder" ? placeholderLabel : label;

  if (externalLinkKey === "chromeExtension" && !extensionInstallAvailable) {
    const tooltip = getSiteCopy(locale).extensionUnavailableTooltip;

    return (
      <ExtensionUnavailableTooltip
        label={`${buttonLabel}. ${tooltip}`}
        message={tooltip}
      >
        <Button disabled showIcon={false} size={size}>
          {buttonLabel}
        </Button>
      </ExtensionUnavailableTooltip>
    );
  }

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
      size={size}
      target="_blank"
    >
      {buttonLabel}
    </ButtonLink>
  );
};
