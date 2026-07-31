import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  ButtonPreview,
  type ButtonPreviewState,
} from "@/shared/ui/components/button/button-preview";
import {
  Button,
  type ButtonSize,
  type ButtonVariant,
} from "@/shared/ui/components/button/button";
import styles from "./button-showcase.module.css";

type ButtonStateRowProps = {
  label: string;
  size: ButtonSize;
  variant: ButtonVariant;
};

type PreviewCellProps = {
  size: ButtonSize;
  state: ButtonPreviewState;
  variant: ButtonVariant;
};

const PreviewCell = ({
  size,
  state,
  variant,
}: PreviewCellProps): ReactNode => (
  <div className={styles.cell}>
    <ButtonPreview
      previewState={state}
      size={size}
      variant={variant}
    />
  </div>
);

const ButtonStateRow = ({
  label,
  size,
  variant,
}: ButtonStateRowProps): ReactNode => (
  <>
    <div className={styles.rowHeading}>{label}</div>
    <PreviewCell size={size} state="default" variant={variant} />
    <PreviewCell size={size} state="hover" variant={variant} />
    <PreviewCell size={size} state="focused" variant={variant} />
    <PreviewCell size={size} state="pressed" variant={variant} />
    <PreviewCell size={size} state="disabled" variant={variant} />
  </>
);

const ButtonShowcasePage = (): ReactNode => {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Button</h1>
        <p className={styles.description}>
          Buttons trigger a single action. Use Primary for the
          highest-emphasis action and Secondary for supporting actions.
        </p>
        <p className={styles.contract}>
          Style: Primary, Secondary · Size: Small, Medium, Large · State:
          Default, Hover, Focused, Pressed, Disabled
        </p>
      </header>

      <div className={styles.matrixViewport}>
        <section className={styles.matrix} aria-label="Button state matrix">
          <div aria-hidden="true" />
          <div className={styles.columnHeading}>Default</div>
          <div className={styles.columnHeading}>Hover</div>
          <div className={styles.columnHeading}>Focused</div>
          <div className={styles.columnHeading}>Pressed</div>
          <div className={styles.columnHeading}>Disabled</div>

          <ButtonStateRow label="Small · Primary" size="small" variant="primary" />
          <ButtonStateRow label="Small · Secondary" size="small" variant="secondary" />
          <ButtonStateRow label="Medium · Primary" size="medium" variant="primary" />
          <ButtonStateRow label="Medium · Secondary" size="medium" variant="secondary" />
          <ButtonStateRow label="Large · Primary" size="large" variant="primary" />
          <ButtonStateRow label="Large · Secondary" size="large" variant="secondary" />
        </section>
      </div>

      <section className={styles.examples}>
        <h2 className={styles.sectionTitle}>Responsive examples</h2>
        <div className={styles.exampleRow}>
          <Button showIcon={false}>Without icon</Button>
          <Button icon={<span>+</span>} size="medium" variant="secondary">
            Custom icon
          </Button>
          <div className={styles.narrowExample}>
            <Button size="large">
              A deliberately long button label for narrow containers
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ButtonShowcasePage;
