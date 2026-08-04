"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type SyntheticEvent,
} from "react";
import styles from "./article-figure.module.css";

const CLOSE_ANIMATION_DURATION = 200;
type PreviewStatus = "closed" | "open" | "closing";

export type ArticleFigureProps = {
  src: string;
  alt: string;
  caption: string;
  step: number;
  openLabel: string;
  closeLabel: string;
};

export const ArticleFigure = ({
  src,
  alt,
  caption,
  step,
  openLabel,
  closeLabel,
}: ArticleFigureProps): ReactNode => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const captionId = useId();
  const [previewStatus, setPreviewStatus] =
    useState<PreviewStatus>("closed");

  const finishClose = (): void => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    }
    setPreviewStatus("closed");
    triggerRef.current?.focus();
  };

  const requestClose = (): void => {
    if (previewStatus !== "open") {
      return;
    }
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduceMotion) {
      finishClose();
      return;
    }
    setPreviewStatus("closing");
    closeTimerRef.current = window.setTimeout(
      finishClose,
      CLOSE_ANIMATION_DURATION,
    );
  };

  const openPreview = (): void => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) {
      return;
    }
    dialog.showModal();
    setPreviewStatus("open");
  };

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>): void => {
    event.preventDefault();
    requestClose();
  };

  const handleBackdropClick = (
    event: MouseEvent<HTMLDialogElement>,
  ): void => {
    if (event.target === event.currentTarget) {
      requestClose();
    }
  };

  const handleNativeClose = (): void => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setPreviewStatus("closed");
  };

  useEffect(() => {
    if (previewStatus === "closed") {
      return;
    }
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return (): void => {
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [previewStatus]);

  useEffect(
    () => (): void => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    },
    [],
  );

  const dialogClassName = previewStatus === "closing"
    ? `${styles.dialog} ${styles.dialogClosing}`
    : styles.dialog;

  return (
    <figure className={styles.figure}>
      <button
        aria-expanded={previewStatus === "open"}
        aria-haspopup="dialog"
        aria-label={openLabel}
        className={styles.imageButton}
        onClick={openPreview}
        ref={triggerRef}
        type="button"
      >
        <Image
          alt={alt}
          className={styles.image}
          height={900}
          loading="lazy"
          src={src}
          unoptimized
          width={1600}
        />
      </button>
      <figcaption className={styles.caption} id={captionId}>
        <span aria-hidden="true" className={styles.step}>
          {step}
        </span>
        <span>{caption}</span>
      </figcaption>
      <dialog
        aria-labelledby={captionId}
        className={dialogClassName}
        onCancel={handleCancel}
        onClick={handleBackdropClick}
        onClose={handleNativeClose}
        ref={dialogRef}
      >
        <div className={styles.dialogSurface}>
          <button
            aria-label={closeLabel}
            className={styles.closeButton}
            onClick={requestClose}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
          <Image
            alt={alt}
            className={styles.dialogImage}
            height={900}
            priority={false}
            src={src}
            unoptimized
            width={1600}
          />
          <p className={styles.dialogCaption}>{caption}</p>
        </div>
      </dialog>
    </figure>
  );
};
