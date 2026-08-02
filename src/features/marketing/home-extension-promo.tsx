import type { ReactNode } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { ExtensionPromoBanner } from "@/shared/ui/extension-promo-banner";
import { getChromeInstallLabel, getHomeCopy } from "./home-copy";
import styles from "./home.module.css";

type HomeExtensionBannerProps = {
  body: string;
  eyebrow: string;
  headingId: string;
  locale: Locale;
  title: string;
};

export const HomeExtensionBanner = ({
  body,
  eyebrow,
  headingId,
  locale,
  title,
}: HomeExtensionBannerProps): ReactNode => {
  const chromeInstallLabel = getChromeInstallLabel(locale);

  return (
    <ExtensionPromoBanner
      actionLabel={chromeInstallLabel}
      body={body}
      eyebrow={eyebrow}
      headingId={headingId}
      locale={locale}
      title={title}
    />
  );
};

export const HomeExtensionPromo = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).promo;

  return (
    <section
      aria-labelledby="extension-promo-title"
      className={styles.promoSection}
    >
      <div className={styles.pageGutters}>
        <HomeExtensionBanner
          body={copy.body}
          eyebrow={copy.eyebrow}
          headingId="extension-promo-title"
          locale={locale}
          title={copy.title}
        />
      </div>
    </section>
  );
};
