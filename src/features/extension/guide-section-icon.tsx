import type { ReactNode } from "react";

export type GuideSectionIconVariant = "limits" | "privacy" | "supported";

type GuideSectionIconProps = {
  className?: string;
  variant: GuideSectionIconVariant;
};

const SupportedIcon = (): ReactNode => (
  <svg
    fill="none"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5.75A2.75 2.75 0 0 1 6.75 3h7.5A2.75 2.75 0 0 1 17 5.75v4.5A2.75 2.75 0 0 1 14.25 13H9l-4.25 3v-3.66A2.75 2.75 0 0 1 4 10.25v-4.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="m14.5 18.25 1.75 1.75L20 15.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const LimitsIcon = (): ReactNode => (
  <svg
    fill="none"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3.5h7.75L19 7.75V20.5H7V3.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M14.5 3.75V8H18.5M10 11.25h5.5M10 14.5h5.5M10 17.75h3.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="m4 10.75 1 1 1.75-2M4 14l1 1 1.75-2M4 17.25l1 1 1.75-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const PrivacyIcon = (): ReactNode => (
  <svg
    fill="none"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.75c2.2 1.55 4.42 1.83 6.25 2v5.75c0 5.03-2.88 8.27-6.25 10-3.37-1.73-6.25-4.97-6.25-10V4.75c1.83-.17 4.05-.45 6.25-2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="m9 11.75 2 2 4-4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const getGuideSectionIcon = (variant: GuideSectionIconVariant): ReactNode => {
  switch (variant) {
    case "limits":
      return <LimitsIcon />;
    case "privacy":
      return <PrivacyIcon />;
    case "supported":
      return <SupportedIcon />;
  }
};

export const GuideSectionIcon = ({
  className,
  variant,
}: GuideSectionIconProps): ReactNode => (
  <span
    aria-hidden="true"
    className={className}
    data-variant={variant}
  >
    {getGuideSectionIcon(variant)}
  </span>
);
