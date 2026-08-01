import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import featureOne from "@/app/assets/features/feat1.png";
import featureTwo from "@/app/assets/features/feat2.png";
import featureThree from "@/app/assets/features/feat3.png";
import featureFour from "@/app/assets/features/feat4.png";
import featureFive from "@/app/assets/features/feat5.png";
import featureSix from "@/app/assets/features/feat6.png";
import type { Locale } from "@/shared/i18n/locales";
import { Card } from "@/shared/ui/components/card/card";
import { getHomeCopy } from "./home-copy";
import styles from "./home.module.css";

type FeatureCardData = {
  body: string;
  image: StaticImageData;
  title: string;
  visualClassName: string;
};

const featureVisuals: ReadonlyArray<{
  image: StaticImageData;
  visualClassName: string;
}> = [
  {
    image: featureOne,
    visualClassName: styles.featureVisualOne,
  },
  {
    image: featureTwo,
    visualClassName: styles.featureVisualTwo,
  },
  {
    image: featureThree,
    visualClassName: styles.featureVisualThree,
  },
  {
    image: featureFour,
    visualClassName: styles.featureVisualFour,
  },
  {
    image: featureFive,
    visualClassName: styles.featureVisualFive,
  },
  {
    image: featureSix,
    visualClassName: styles.featureVisualSix,
  },
];

const FeatureCard = ({
  body,
  image,
  title,
  visualClassName,
}: FeatureCardData): ReactNode => (
  <Card
    body={body}
    className={styles.featureCard}
    media={
      <span className={`${styles.featureVisual} ${visualClassName}`}>
        <Image
          alt=""
          sizes="(max-width: 767px) 104px, (max-width: 1099px) 120px, 136px"
          src={image}
        />
      </span>
    }
    mediaLayout="floating"
    title={title}
  />
);

const featureToCard = (feature: FeatureCardData): ReactNode => (
  <FeatureCard key={feature.title} {...feature} />
);

export const HomeFeatures = ({
  locale,
}: {
  locale: Locale;
}): ReactNode => {
  const copy = getHomeCopy(locale).features;
  const featureCards = copy.items.map(
    (item, index): FeatureCardData => ({
      ...item,
      ...featureVisuals[index],
    }),
  );

  return (
    <section
      aria-labelledby="features-title"
      className={styles.featuresSection}
      id="features"
    >
      <div className={styles.pageGutters}>
        <div className={styles.featuresHeader}>
          <p className={styles.featuresEyebrow}>
            {copy.eyebrow}
          </p>
          <h2 className={styles.featuresTitle} id="features-title">
            {copy.title}
          </h2>
          <p className={styles.featuresLead}>
            {copy.body}
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {featureCards.map(featureToCard)}
        </div>
      </div>
    </section>
  );
};
