import type { ReactNode } from "react";

export const ClickCursorIcon = (): ReactNode => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 3.5v12.2l-2.7-2.5a2.3 2.3 0 0 0-3.2.1 2.3 2.3 0 0 0 .1 3.2l7.2 7.3c1.4 1.4 3.3 2.2 5.3 2.2h2.3c3.9 0 7-3.1 7-7v-6.5a2.25 2.25 0 0 0-4.1-1.3A2.25 2.25 0 0 0 19.5 10a2.25 2.25 0 0 0-4-1.4V3.5a2 2 0 1 0-4 0Z"
      fill="var(--p2f-color-background-surface)"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="m21.5 3 1.4-2M26 6l2.4-.7M18 1l-.3-2.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);
