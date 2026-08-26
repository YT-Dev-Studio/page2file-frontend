import Link from "next/link";
import type { ReactNode } from "react";
import type { ExtensionInlineLinkCopy } from "./extension-copy";

type ModeDescriptionProps = {
  body: string;
  bodyLink?: ExtensionInlineLinkCopy;
  className?: string;
};

export const ModeDescription = ({
  body,
  bodyLink,
  className,
}: ModeDescriptionProps): ReactNode => {
  if (!bodyLink) {
    return <p className={className}>{body}</p>;
  }

  const linkStart = body.indexOf(bodyLink.label);
  if (linkStart < 0) {
    return <p className={className}>{body}</p>;
  }

  const linkEnd = linkStart + bodyLink.label.length;

  return (
    <p className={className}>
      {body.slice(0, linkStart)}
      <Link href={bodyLink.href}>{bodyLink.label}</Link>
      {body.slice(linkEnd)}
    </p>
  );
};
