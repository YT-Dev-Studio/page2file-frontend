import type { ReactNode } from "react";
import styles from "./ui.module.css";

export type RailItem = {
  index: string;
  title: string;
  meta: string;
};

const defaultItems: ReadonlyArray<RailItem> = [
  { index: "01", title: "Lead section", meta: "editable · links kept" },
  { index: "02", title: "Feature comparison", meta: "visual fallback" },
  { index: "03", title: "Article body", meta: "editable · 3 pages" },
  { index: "04", title: "Call to action", meta: "link verified" },
];

export const PageRail = ({
  items = defaultItems,
}: {
  items?: ReadonlyArray<RailItem>;
}): ReactNode => {
  const railItem = (item: RailItem): ReactNode => (
    <div className={styles.railItem} key={item.index}>
      <span className={styles.railIndex}>{item.index}</span>
      <div>
        <p className={styles.railTitle}>{item.title}</p>
        <span className={styles.railMeta}>{item.meta}</span>
      </div>
      <span className={styles.railArrow} aria-hidden="true">→</span>
    </div>
  );

  return <div className={styles.rail}>{items.map(railItem)}</div>;
};
