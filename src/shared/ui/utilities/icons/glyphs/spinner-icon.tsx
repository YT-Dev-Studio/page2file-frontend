import type { ReactNode } from "react";

export const SpinnerIcon = (): ReactNode => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12A8 8 0 1 1 12 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);
