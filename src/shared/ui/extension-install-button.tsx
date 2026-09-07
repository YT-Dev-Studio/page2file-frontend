"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { analyticsDataAttributes } from "@/features/analytics/analytics-events";
import { extensionInstallAvailable } from "@/shared/config/site";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { getExtensionLink } from "@/shared/routes/extension-link";
import { Button, ButtonLink } from "@/shared/ui/components/button/button";
import { ExtensionUnavailableTooltip } from "@/shared/ui/extension-unavailable-tooltip";

export const ExtensionInstallButton = ({
  className,
  locale,
}: {
  className?: string;
  locale: Locale;
}): ReactNode => {
  const pathname = usePathname();
  const siteCopy = getSiteCopy(locale);
  const copy = siteCopy.header;
  const extensionLink = getExtensionLink(locale, {
    page: pathname,
    placement: "header",
  });

  if (!extensionInstallAvailable) {
    return (
      <ExtensionUnavailableTooltip
        label={`${copy.downloadAction}. ${siteCopy.extensionUnavailableTooltip}`}
        message={siteCopy.extensionUnavailableTooltip}
        placement="bottom"
      >
        <Button className={className} disabled>
          {copy.downloadAction}
        </Button>
      </ExtensionUnavailableTooltip>
    );
  }

  return (
    <ButtonLink
      {...analyticsDataAttributes({
        locale,
        name: "extension_install_click",
        placement: "header",
      })}
      className={className}
      href={extensionLink.href}
      rel={extensionLink.external ? "noopener noreferrer" : undefined}
      target={extensionLink.external ? "_blank" : undefined}
    >
      {copy.downloadAction}
    </ButtonLink>
  );
};
