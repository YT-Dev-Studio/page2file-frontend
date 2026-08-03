"use client";

import { manrope } from "@/shared/ui/manrope-font";
import {
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type ReactNode,
} from "react";
import { UploadIcon } from "@/shared/ui/utilities/icons/glyphs/upload-icon";
import {
  validateFiles,
  type RejectedFile,
} from "./file-validation";
import styles from "./dropzone.module.css";

const DEFAULT_MAX_BYTES = 25_000_000;

export type DropzoneProps = {
  accept: ReadonlyArray<string>;
  actionLabel?: string;
  description: string;
  disabled?: boolean;
  error?: string;
  icon?: ReactNode;
  maxBytes?: number;
  multiple?: boolean;
  onFilesAccepted: (files: ReadonlyArray<File>) => void;
  onFilesRejected: (files: ReadonlyArray<RejectedFile>) => void;
  showAction?: boolean;
  title: string;
};

const hasDraggedFiles = (event: DragEvent<HTMLDivElement>): boolean =>
  Array.from(event.dataTransfer.types).includes("Files");

export const Dropzone = ({
  accept,
  actionLabel,
  description,
  disabled = false,
  error,
  icon = <UploadIcon />,
  maxBytes = DEFAULT_MAX_BYTES,
  multiple = false,
  onFilesAccepted,
  onFilesRejected,
  showAction = true,
  title,
}: DropzoneProps): ReactNode => {
  const generatedId = useId();
  const titleId = `${generatedId}-title`;
  const descriptionId = `${generatedId}-description`;
  const errorId = `${generatedId}-error`;
  const dragDepth = useRef(0);
  const [isActive, setIsActive] = useState(false);
  const describedBy = `${descriptionId}${error ? ` ${errorId}` : ""}`;
  const dropzoneClassName =
    `${styles.dropzone} ${isActive ? styles.active : ""} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""} ${manrope.className}`.trim();

  const processFiles = (fileList: ReadonlyArray<File>): void => {
    if (disabled) {
      return;
    }

    const files = multiple ? fileList : fileList.slice(0, 1);
    const result = validateFiles(files, accept, maxBytes);

    if (result.accepted.length > 0) {
      onFilesAccepted(result.accepted);
    }
    if (result.rejected.length > 0) {
      onFilesRejected(result.rejected);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    processFiles(Array.from(event.currentTarget.files ?? []));
    event.currentTarget.value = "";
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    if (disabled || !hasDraggedFiles(event)) {
      return;
    }

    dragDepth.current += 1;
    setIsActive(true);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    if (!disabled && hasDraggedFiles(event)) {
      event.dataTransfer.dropEffect = "copy";
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    if (disabled || !hasDraggedFiles(event)) {
      return;
    }

    dragDepth.current = Math.max(0, dragDepth.current - 1);
    if (dragDepth.current === 0) {
      setIsActive(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    dragDepth.current = 0;
    setIsActive(false);

    if (disabled || !hasDraggedFiles(event)) {
      return;
    }

    processFiles(Array.from(event.dataTransfer.files));
  };

  return (
    <div
      className={dropzoneClassName}
      data-drop-active={isActive || undefined}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        accept={accept.join(",")}
        aria-describedby={describedBy}
        aria-labelledby={titleId}
        className={styles.input}
        disabled={disabled}
        multiple={multiple}
        onChange={handleChange}
        type="file"
      />
      <div className={styles.content}>
        {icon !== null ? (
          <span aria-hidden="true" className={styles.iconTile}>
            <span className={styles.icon}>{icon}</span>
          </span>
        ) : null}
        <h3 className={styles.title} id={titleId}>
          {title}
        </h3>
        <p className={styles.description} id={descriptionId}>
          {description}
        </p>
        {showAction && actionLabel ? (
          <span className={styles.action}>{actionLabel}</span>
        ) : null}
        {error ? (
          <span className={styles.alert} id={errorId} role="alert">
            {error}
          </span>
        ) : null}
      </div>
    </div>
  );
};
