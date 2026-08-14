import type { ReactNode } from "react";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import { ExtensionPromoBanner } from "@/shared/ui/extension-promo-banner";
import styles from "./home.module.css";

type HomeExtensionBannerProps = {
  body: string;
  headingId: string;
  locale: Locale;
  title: string;
};

const HomeExtensionBanner = ({
  body,
  headingId,
  locale,
  title,
}: HomeExtensionBannerProps): ReactNode => {
  const copy = getExtensionCopy(locale);

  return (
    <ExtensionPromoBanner
      actionLabel={copy.browseChromeLabel}
      body={body}
      eyebrow="PAGE 2 FILE · CHROME"
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
  const copy = getExtensionCopy(locale);

  return (
    <section
      aria-labelledby="home-extension-promo-title"
      className={styles.promoSection}
    >
      <Container>
        <HomeExtensionBanner
          body={copy.processBody}
          headingId="home-extension-promo-title"
          locale={locale}
          title={copy.processTitle}
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
  const copy = getExtensionCopy(locale);

  return (
    <section
      aria-labelledby="home-final-cta-title"
      className={styles.finalCtaSection}
    >
      <Container>
        <HomeExtensionBanner
          body={copy.privacyBody}
          headingId="home-final-cta-title"
          locale={locale}
          title={copy.privacyTitle}
        />
      </Container>
    </section>
  );
};
