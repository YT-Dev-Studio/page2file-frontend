import type { ReactNode } from "react";
import styles from "./home.module.css";

export const HomeSectionHeader = ({
  body,
  eyebrow,
  id,
  title,
}: {
  body: string;
  eyebrow: string;
  id: string;
  title: string;
}): ReactNode => (
  <div className={styles.sectionHeader}>
    <p className={styles.sectionEyebrow}>{eyebrow}</p>
    <h2 className={styles.sectionTitle} id={id}>
      {title}
    </h2>
    <p className={styles.sectionLead}>{body}</p>
  </div>
);
