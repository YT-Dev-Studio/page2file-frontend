import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import featureOne from "@/app/assets/features/feat1.png";
import featureTwo from "@/app/assets/features/feat2.png";
import featureThree from "@/app/assets/features/feat3.png";
import featureFour from "@/app/assets/features/feat4.png";
import featureFive from "@/app/assets/features/feat5.png";
import featureSix from "@/app/assets/features/feat6.png";
import { Card } from "@/shared/ui/components/card/card";
import { russianHomeCopy } from "./russian-home-copy";
import styles from "./russian-home.module.css";

type RussianFeatureCardData = {
  body: string;
  image: StaticImageData;
  title: string;
};

const featureCards: ReadonlyArray<RussianFeatureCardData> = [
  { ...russianHomeCopy.features.items[0], image: featureOne },
  { ...russianHomeCopy.features.items[1], image: featureTwo },
  { ...russianHomeCopy.features.items[2], image: featureThree },
  { ...russianHomeCopy.features.items[3], image: featureFour },
  { ...russianHomeCopy.features.items[4], image: featureFive },
  { ...russianHomeCopy.features.items[5], image: featureSix },
];

const RussianFeatureCard = ({
  body,
  image,
  title,
}: RussianFeatureCardData): ReactNode => (
  <Card
    body={body}
    className={styles.featureCard}
    media={
      <Image
        alt=""
        sizes="(max-width: 767px) 104px, (max-width: 1099px) 120px, 136px"
        src={image}
      />
    }
    title={title}
  />
);

const featureToCard = (feature: RussianFeatureCardData): ReactNode => (
  <RussianFeatureCard key={feature.title} {...feature} />
);

export const RussianHomeFeatures = (): ReactNode => (
  <section
    aria-labelledby="features-title"
    className={styles.featuresSection}
    id="features"
  >
    <div className={styles.pageGutters}>
      <div className={styles.featuresHeader}>
        <p className={styles.featuresEyebrow}>
          {russianHomeCopy.features.eyebrow}
        </p>
        <h2 className={styles.featuresTitle} id="features-title">
          {russianHomeCopy.features.title}
        </h2>
        <p className={styles.featuresLead}>
          {russianHomeCopy.features.body}
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {featureCards.map(featureToCard)}
      </div>
    </div>
  </section>
);
