"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import styles from "./related-scenarios-carousel.module.css";

export type RelatedScenarioItem = {
  description: string;
  href: string;
  title: string;
};

type RelatedScenariosCarouselProps = {
  heading: string;
  items: ReadonlyArray<RelatedScenarioItem>;
  nextLabel: string;
  previousLabel: string;
};

const EDGE_TOLERANCE = 2;
const CARD_GAP = 24;
const CARD_WIDTH = 282;

export const RelatedScenariosCarousel = ({
  heading,
  items,
  nextLabel,
  previousLabel,
}: RelatedScenariosCarouselProps): ReactNode => {
  const viewportRef = useRef<HTMLUListElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const updateState = useCallback((): void => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const overflow =
      viewport.scrollWidth > viewport.clientWidth + EDGE_TOLERANCE;
    const maximumScroll = Math.max(
      0,
      viewport.scrollWidth - viewport.clientWidth,
    );

    setHasOverflow(overflow);
    setAtStart(viewport.scrollLeft <= EDGE_TOLERANCE);
    setAtEnd(
      !overflow ||
        viewport.scrollLeft >= maximumScroll - EDGE_TOLERANCE,
    );
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    updateState();
    viewport.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(updateState);
    resizeObserver?.observe(viewport);

    return () => {
      viewport.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
      resizeObserver?.disconnect();
    };
  }, [items, updateState]);

  const scrollOneCard = (direction: -1 | 1): void => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const firstCard = viewport.firstElementChild as HTMLElement | null;
    const distance = (firstCard?.offsetWidth || CARD_WIDTH) + CARD_GAP;
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
      false;

    viewport.scrollBy({
      behavior: reduceMotion ? "auto" : "smooth",
      left: direction * distance,
    });
  };

  return (
    <nav aria-label={heading} className={styles.carousel}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        {hasOverflow ? (
          <div className={styles.controls}>
            <button
              aria-label={previousLabel}
              disabled={atStart}
              onClick={() => scrollOneCard(-1)}
              type="button"
            >
              <span className={styles.previousIcon}>
                <ArrowRightIcon />
              </span>
            </button>
            <button
              aria-label={nextLabel}
              disabled={atEnd}
              onClick={() => scrollOneCard(1)}
              type="button"
            >
              <ArrowRightIcon />
            </button>
          </div>
        ) : null}
      </div>
      <ul className={styles.viewport} ref={viewportRef}>
        {items.map((item): ReactNode => (
          <li className={styles.card} key={item.href}>
            <h3>
              <Link href={item.href}>{item.title}</Link>
            </h3>
            <p>{item.description}</p>
            <span aria-hidden="true">
              <ArrowRightIcon />
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
