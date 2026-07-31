"use client";

import type { ReactNode } from "react";
import { Button } from "@/shared/ui/components/button/button";
import { Card } from "@/shared/ui/components/card/card";
import { Dropzone } from "@/shared/ui/components/dropzone/dropzone";
import { FileCard } from "@/shared/ui/components/file-card/file-card";
import { FormatBadge } from "@/shared/ui/components/format-badge/format-badge";
import { ProductAction } from "@/shared/ui/components/product-action/product-action";
import { Progress } from "@/shared/ui/components/progress/progress";
import { Select } from "@/shared/ui/components/select/select";
import { TextField } from "@/shared/ui/components/text-field/text-field";
import type { ProductFormat } from "@/shared/ui/types/product-format";
import { ArrowRightIcon } from "@/shared/ui/utilities/icons/glyphs/arrow-right-icon";
import { CheckIcon } from "@/shared/ui/utilities/icons/glyphs/check-icon";
import { ChevronDownIcon } from "@/shared/ui/utilities/icons/glyphs/chevron-down-icon";
import { CloseIcon } from "@/shared/ui/utilities/icons/glyphs/close-icon";
import { DownloadIcon } from "@/shared/ui/utilities/icons/glyphs/download-icon";
import { FileIcon } from "@/shared/ui/utilities/icons/glyphs/file-icon";
import { SpinnerIcon } from "@/shared/ui/utilities/icons/glyphs/spinner-icon";
import { UploadIcon } from "@/shared/ui/utilities/icons/glyphs/upload-icon";
import { Icon } from "@/shared/ui/utilities/icons/icon";
import styles from "./component-showcase.module.css";

const formats: ReadonlyArray<ProductFormat> = [
  "master",
  "pdf",
  "pptx",
  "slides",
];
const progressValues: ReadonlyArray<number> = [25, 50, 75, 100];
const selectOptions = [
  { label: "PDF", value: "pdf" },
  { label: "PowerPoint", value: "pptx" },
];
const iconSamples = [
  { icon: <ArrowRightIcon />, label: "Arrow Right" },
  { icon: <ChevronDownIcon />, label: "Chevron Down" },
  { icon: <UploadIcon />, label: "Upload" },
  { icon: <FileIcon />, label: "File" },
  { icon: <DownloadIcon />, label: "Download" },
  { icon: <CheckIcon />, label: "Check" },
  { icon: <CloseIcon />, label: "Close" },
  { icon: <SpinnerIcon />, label: "Spinner" },
];

const handleFilesAccepted = (): void => undefined;

const handleFilesRejected = (): void => undefined;

const renderBadgePair = (format: ProductFormat): ReactNode => (
  <div className={styles.inlineGroup} key={format}>
    <FormatBadge format={format} />
    <FormatBadge format={format} style="subtle" />
  </div>
);

const renderProgressValue = (
  format: ProductFormat,
  value: number,
): ReactNode => (
  <Progress
    format={format}
    key={`${format}-${value}`}
    label="Converting"
    value={value}
  />
);

const renderProgressRow = (format: ProductFormat): ReactNode => (
  <div className={styles.progressRow} key={format}>
    {progressValues.map((value) => renderProgressValue(format, value))}
  </div>
);

const renderProductAction = (format: ProductFormat): ReactNode => (
  <ProductAction
    format={format}
    href="/"
    key={format}
    label="Convert"
  />
);

const renderFileCards = (format: ProductFormat): ReactNode => (
  <div className={styles.fileCardRow} key={format}>
    <FileCard
      actionLabel="Download"
      filename="Report.pdf"
      format={format}
      meta="2.4 MB · Ready"
    />
    <FileCard
      actionLabel="Download"
      filename="Report.pdf"
      format={format}
      meta="2.4 MB · Ready"
      selected
    />
    <FileCard
      actionLabel="Download"
      disabled
      filename="Report.pdf"
      format={format}
      meta="2.4 MB · Ready"
    />
  </div>
);

const renderIconSample = ({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}): ReactNode => (
  <div className={styles.iconSample} key={label}>
    <Icon size="large">{icon}</Icon>
    <span>{label}</span>
  </div>
);

export const ComponentShowcase = (): ReactNode => (
  <main className={styles.page}>
    <header className={styles.header}>
      <h1 className={styles.title}>Page2File components</h1>
      <p className={styles.lead}>
        Development-only reference for geometry, native states,
        accessibility, responsive behavior, and frozen-token usage.
      </p>
    </header>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Button</h2>
      <div className={styles.inlineGroup}>
        <Button>Small</Button>
        <Button size="medium" variant="secondary">
          Medium
        </Button>
        <Button showIcon={false} size="large">
          Large without icon
        </Button>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Text Field</h2>
      <div className={styles.controlGrid}>
        <TextField
          helper="Enter a valid public URL"
          label="Website URL"
          placeholder="https://example.com"
        />
        <TextField
          defaultValue="https://example.com"
          helper="Enter a valid public URL"
          label="Website URL"
        />
        <TextField
          defaultValue="example.com"
          error="Enter a valid URL starting with http:// or https://"
          label="Website URL"
        />
        <TextField
          defaultValue="https://example.com"
          disabled
          helper="Enter a valid public URL"
          label="Website URL"
        />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Select</h2>
      <div className={styles.controlGrid}>
        <Select
          helper="Select one export format"
          label="Output format"
          options={selectOptions}
          placeholder="Choose a format"
        />
        <Select
          defaultValue="pdf"
          helper="Select one export format"
          label="Output format"
          options={selectOptions}
        />
        <Select
          error="Select one export format"
          label="Output format"
          options={selectOptions}
          placeholder="Choose a format"
        />
        <Select
          disabled
          helper="Select one export format"
          label="Output format"
          options={selectOptions}
          placeholder="Choose a format"
        />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Format Badge</h2>
      <div className={styles.badgeGrid}>
        {formats.map(renderBadgePair)}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Progress</h2>
      <div className={styles.progressMatrix}>
        {formats.map(renderProgressRow)}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Product Action</h2>
      <div className={styles.inlineGroup}>
        {formats.map(renderProductAction)}
        <ProductAction disabled href="/" label="Disabled" />
        <ProductAction href="/" label="Without icon" showIcon={false} />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Card</h2>
      <div className={styles.cardGrid}>
        <Card
          action={{ href: "/", label: "Learn more" }}
          body="Keep source fidelity while exporting a clean, editable file."
          title="Convert with confidence"
        />
        <Card
          action={{ href: "/", label: "Learn more" }}
          body="Keep source fidelity while exporting a clean, editable file."
          interactive
          title="Convert with confidence"
        />
        <Card
          action={{ href: "/", label: "Learn more" }}
          body="Keep source fidelity while exporting a clean, editable file."
          selected
          title="Convert with confidence"
        />
        <Card
          action={{ href: "/", label: "Learn more" }}
          body="Keep source fidelity while exporting a clean, editable file."
          emphasis="accent"
          title="Convert with confidence"
        />
        <Card
          action={{ href: "/", label: "Learn more" }}
          body="Keep source fidelity while exporting a clean, editable file."
          emphasis="accent"
          interactive
          title="Convert with confidence"
        />
        <Card
          action={{ href: "/", label: "Learn more" }}
          body="Keep source fidelity while exporting a clean, editable file."
          emphasis="accent"
          selected
          title="Convert with confidence"
        />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>File Card</h2>
      <div className={styles.fileCardMatrix}>
        {formats.map(renderFileCards)}
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Dropzone</h2>
      <div className={styles.dropzoneGrid}>
        <Dropzone
          accept={["application/pdf", ".pdf", ".pptx"]}
          actionLabel="Browse files"
          description="PDF or PPTX · up to 25 MB"
          onFilesAccepted={handleFilesAccepted}
          onFilesRejected={handleFilesRejected}
          title="Drop files here"
        />
        <Dropzone
          accept={["application/pdf", ".pdf", ".pptx"]}
          actionLabel="Browse files"
          description="PDF or PPTX · up to 25 MB"
          error="Choose a supported file up to 25 MB"
          onFilesAccepted={handleFilesAccepted}
          onFilesRejected={handleFilesRejected}
          title="Drop files here"
        />
        <Dropzone
          accept={["application/pdf", ".pdf", ".pptx"]}
          actionLabel="Browse files"
          description="PDF or PPTX · up to 25 MB"
          disabled
          onFilesAccepted={handleFilesAccepted}
          onFilesRejected={handleFilesRejected}
          title="Drop files here"
        />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Icons</h2>
      <div className={styles.iconGrid}>
        {iconSamples.map(renderIconSample)}
      </div>
    </section>
  </main>
);
