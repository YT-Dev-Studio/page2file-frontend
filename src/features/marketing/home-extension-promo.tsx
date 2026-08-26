import type { ReactNode } from "react";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import { ExtensionPromoBanner } from "@/shared/ui/extension-promo-banner";
import styles from "./home.module.css";

type HomeExtensionBannerProps = {
  headingId: string;
  locale: Locale;
};

const HomeExtensionBanner = ({
  headingId,
  locale,
}: HomeExtensionBannerProps): ReactNode => {
  const copy = getExtensionCopy(locale);

  return (
    <ExtensionPromoBanner
      actionLabel={copy.bannerActionLabel}
      body={copy.bannerBody}
      headingId={headingId}
      locale={locale}
      title={copy.bannerTitle}
    />
  );
};

export const HomeExtensionPromo = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  return (
    <section
      aria-labelledby="home-extension-promo-title"
      className={styles.promoSection}
    >
      <Container>
        <HomeExtensionBanner
          headingId="home-extension-promo-title"
          locale={locale}
        />
      </Container>
    </section>
  );
};

export const HomeFinalCta = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  return (
    <section
      aria-labelledby="home-final-cta-title"
      className={styles.finalCtaSection}
    >
      <Container>
        <HomeExtensionBanner
          headingId="home-final-cta-title"
          locale={locale}
        />
      </Container>
    </section>
  );
};
