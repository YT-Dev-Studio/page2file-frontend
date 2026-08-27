"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./faq-accordion.module.css";

export type FaqAccordionItem = {
  answer: string;
  question: string;
};

type FaqAccordionProps = {
  items: ReadonlyArray<FaqAccordionItem>;
};

type FaqItemProps = FaqAccordionItem & {
  answerId: string;
  index: number;
  open: boolean;
  onToggle: (index: number) => void;
  triggerId: string;
};

const FaqItem = ({
  answer,
  answerId,
  index,
  open,
  onToggle,
  question,
  triggerId,
}: FaqItemProps): ReactNode => {
  const handleToggle = (): void => onToggle(index);

  return (
    <article className={styles.item} data-open={open ? "true" : "false"}>
      <h3 className={styles.heading}>
        <button
          aria-controls={answerId}
          aria-expanded={open}
          className={styles.trigger}
          id={triggerId}
          onClick={handleToggle}
          type="button"
        >
          <span>{question}</span>
          <span aria-hidden="true" className={styles.icon} />
        </button>
      </h3>
      <div
        aria-hidden={!open}
        aria-labelledby={triggerId}
        className={styles.panel}
        id={answerId}
        role="region"
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </article>
  );
};

export const FaqAccordion = ({ items }: FaqAccordionProps): ReactNode => {
  const accordionId = useId();
  const [openIndexes, setOpenIndexes] = useState<ReadonlySet<number>>(
    new Set<number>(),
  );

  const toggleItem = (index: number): void => {
    const getNextOpenIndexes = (
      currentIndexes: ReadonlySet<number>,
    ): ReadonlySet<number> => {
      const nextIndexes = new Set(currentIndexes);

      if (nextIndexes.has(index)) {
        nextIndexes.delete(index);
      } else {
        nextIndexes.add(index);
      }

      return nextIndexes;
    };

    setOpenIndexes(getNextOpenIndexes);
  };

  const mapItem = (item: FaqAccordionItem, index: number): ReactNode => {
    const itemId = `${accordionId}-${index}`;

    return (
      <FaqItem
        {...item}
        answerId={`${itemId}-answer`}
        index={index}
        key={item.question}
        onToggle={toggleItem}
        open={openIndexes.has(index)}
        triggerId={`${itemId}-trigger`}
      />
    );
  };

  return <div className={styles.list}>{items.map(mapItem)}</div>;
};
