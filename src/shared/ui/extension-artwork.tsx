import type { ReactNode } from "react";
import styles from "./extension-artwork.module.css";

export type ExtensionArtworkVariant =
  | "accurate"
  | "editable"
  | "chat"
  | "page"
  | "file"
  | "workspace"
  | "conversation"
  | "open"
  | "launch"
  | "choose"
  | "adjust"
  | "wait"
  | "save"
  | "privacy"
  | "supported"
  | "limits"
  | "related"
  | "flow";

type ExtensionArtworkProps = {
  className?: string;
  variant: ExtensionArtworkVariant;
};

type ArtworkTone = "blue" | "coral" | "orange" | "violet";

const toneByVariant: Record<ExtensionArtworkVariant, ArtworkTone> = {
  accurate: "blue",
  editable: "coral",
  chat: "violet",
  page: "blue",
  file: "coral",
  workspace: "orange",
  conversation: "violet",
  open: "blue",
  launch: "coral",
  choose: "violet",
  adjust: "orange",
  wait: "blue",
  save: "coral",
  privacy: "blue",
  supported: "blue",
  limits: "orange",
  related: "violet",
  flow: "blue",
};

const BrowserShell = ({ children }: { children: ReactNode }): ReactNode => (
  <g>
    <rect className={styles.frame} height="92" rx="12" width="126" x="18" y="22" />
    <path className={styles.divider} d="M18 43h126" />
    <circle className={styles.dotAccent} cx="31" cy="33" r="3.5" />
    <circle className={styles.dotMuted} cx="42" cy="33" r="3.5" />
    <circle className={styles.dotMuted} cx="53" cy="33" r="3.5" />
    {children}
  </g>
);

const DocumentShell = ({ children }: { children: ReactNode }): ReactNode => (
  <g>
    <path className={styles.frame} d="M166 27h42l18 18v67h-60z" />
    <path className={styles.divider} d="M208 27v19h18" />
    {children}
  </g>
);

const AccurateScene = (): ReactNode => (
  <>
    <BrowserShell>
      <rect className={styles.accentSoft} height="20" rx="4" width="100" x="31" y="53" />
      <path className={styles.mutedLine} d="M31 82h78M31 91h91M31 100h63" />
    </BrowserShell>
    <path className={styles.arrow} d="M145 68h18m-7-7 7 7-7 7" />
    <DocumentShell>
      <rect className={styles.accentSoft} height="18" rx="3" width="43" x="176" y="54" />
      <path className={styles.mutedLine} d="M176 82h39M176 90h39M176 98h28" />
    </DocumentShell>
  </>
);

const EditableScene = (): ReactNode => (
  <>
    <BrowserShell>
      <path className={styles.inkLine} d="M31 56h73" />
      <rect className={styles.accentSoft} height="13" rx="3" width="83" x="31" y="67" />
      <path className={styles.mutedLine} d="M31 89h91M31 98h65" />
      <path className={styles.accentLine} d="M31 106h42" />
    </BrowserShell>
    <path className={styles.arrow} d="M145 68h18m-7-7 7 7-7 7" />
    <DocumentShell>
      <path className={styles.inkLine} d="M176 58h35" />
      <path className={styles.mutedLine} d="M176 70h39M176 79h34M176 88h39" />
      <path className={styles.accentLine} d="M176 98h28" />
    </DocumentShell>
  </>
);

const ChatScene = (): ReactNode => (
  <>
    <BrowserShell>
      <rect className={styles.accentSoft} height="19" rx="8" width="64" x="62" y="52" />
      <rect className={styles.mutedSoft} height="23" rx="8" width="74" x="31" y="78" />
    </BrowserShell>
    <path className={styles.arrow} d="M145 68h18m-7-7 7 7-7 7" />
    <DocumentShell>
      <rect className={styles.accentSoft} height="13" rx="6" width="34" x="184" y="55" />
      <rect className={styles.mutedSoft} height="18" rx="6" width="39" x="176" y="75" />
      <rect className={styles.accentSoft} height="12" rx="6" width="30" x="188" y="99" />
    </DocumentShell>
  </>
);

const PageScene = (): ReactNode => (
  <BrowserShell>
    <rect className={styles.accentSoft} height="22" rx="5" width="100" x="31" y="52" />
    <path className={styles.inkLine} d="M38 61h49" />
    <path className={styles.mutedLine} d="M31 84h91M31 93h72M31 102h84" />
    <circle className={styles.accentFill} cx="196" cy="68" r="28" />
    <path className={styles.inverseLine} d="M184 68h24M196 56v24" />
  </BrowserShell>
);

const FileScene = (): ReactNode => (
  <>
    <BrowserShell>
      <path className={styles.mutedLine} d="M31 56h91M31 66h72M31 96h84" />
      <rect className={styles.accentSoft} height="18" rx="5" width="88" x="31" y="74" />
    </BrowserShell>
    <DocumentShell>
      <path className={styles.accentLine} d="M177 58h30" />
      <path className={styles.mutedLine} d="M177 70h38M177 79h31M177 88h38M177 97h24" />
    </DocumentShell>
  </>
);

const WorkspaceScene = (): ReactNode => (
  <>
    <BrowserShell>
      <path className={styles.gridLine} d="M31 53h92v51H31zM62 53v51M93 53v51M31 70h92M31 87h92" />
      <rect className={styles.accentSoft} height="15" rx="2" width="28" x="64" y="71" />
    </BrowserShell>
    <circle className={styles.accentFill} cx="193" cy="68" r="29" />
    <path className={styles.inverseLine} d="M181 61h24M181 68h24M181 75h16" />
  </>
);

const ConversationScene = (): ReactNode => (
  <>
    <BrowserShell>
      <rect className={styles.mutedSoft} height="19" rx="8" width="74" x="31" y="53" />
      <rect className={styles.accentSoft} height="19" rx="8" width="61" x="62" y="78" />
    </BrowserShell>
    <path className={styles.arrow} d="M145 68h18m-7-7 7 7-7 7" />
    <rect className={styles.accentFill} height="54" rx="12" width="54" x="171" y="42" />
    <path className={styles.inverseLine} d="M183 59h30M183 68h24M183 77h28" />
  </>
);

const OpenScene = (): ReactNode => (
  <>
    <BrowserShell>
      <rect className={styles.accentSoft} height="42" rx="7" width="89" x="31" y="54" />
      <path className={styles.mutedLine} d="M38 64h52M38 74h73M38 84h43" />
    </BrowserShell>
    <path className={styles.pointer} d="m176 52 17 39 8-11 14 14 8-8-14-14 11-8z" />
  </>
);

const LaunchScene = (): ReactNode => (
  <>
    <BrowserShell>
      <rect className={styles.mutedSoft} height="40" rx="7" width="88" x="31" y="55" />
      <path className={styles.mutedLine} d="M39 66h54M39 77h70M39 87h42" />
    </BrowserShell>
    <path className={styles.accentFill} d="M188 43h15v13a10 10 0 1 1 0 20v18h-18a10 10 0 1 1-20 0h-13V76a10 10 0 1 0 0-20V43h16a10 10 0 1 0 20 0Z" />
  </>
);

const ChooseScene = (): ReactNode => (
  <>
    <rect className={styles.frame} height="82" rx="12" width="202" x="19" y="27" />
    <rect className={styles.accentFill} height="54" rx="8" width="51" x="32" y="41" />
    <rect className={styles.mutedSoft} height="54" rx="8" width="51" x="94" y="41" />
    <rect className={styles.accentSoft} height="54" rx="8" width="51" x="157" y="41" />
    <path className={styles.inverseLine} d="M45 55h25M45 65h20M45 75h25" />
    <path className={styles.inkLine} d="M107 55h25M107 65h20M107 75h25M170 55h25M170 65h20M170 75h25" />
  </>
);

const AdjustScene = (): ReactNode => (
  <>
    <rect className={styles.frame} height="82" rx="12" width="202" x="19" y="27" />
    <path className={styles.mutedLine} d="M42 51h156M42 68h156M42 85h156" />
    <circle className={styles.accentFill} cx="86" cy="51" r="8" />
    <circle className={styles.accentFill} cx="164" cy="68" r="8" />
    <circle className={styles.accentFill} cx="113" cy="85" r="8" />
  </>
);

const WaitScene = (): ReactNode => (
  <>
    <BrowserShell>
      <path className={styles.mutedLine} d="M31 57h91M31 68h67" />
      <rect className={styles.mutedSoft} height="11" rx="5.5" width="88" x="31" y="86" />
      <rect className={styles.accentFill} height="11" rx="5.5" width="56" x="31" y="86" />
    </BrowserShell>
    <circle className={styles.accentOutline} cx="194" cy="67" r="28" />
    <path className={styles.accentLine} d="M194 50v18l12 7" />
  </>
);

const SaveScene = (): ReactNode => (
  <>
    <DocumentShell>
      <path className={styles.mutedLine} d="M177 58h35M177 68h38M177 78h29" />
    </DocumentShell>
    <circle className={styles.accentFill} cx="89" cy="69" r="38" />
    <path className={styles.inverseLine} d="m69 69 14 14 27-29" />
    <path className={styles.arrow} d="M126 69h36m-8-8 8 8-8 8" />
  </>
);

const PrivacyScene = (): ReactNode => (
  <>
    <BrowserShell>
      <path className={styles.mutedLine} d="M31 57h91M31 68h72M31 92h84" />
      <rect className={styles.accentSoft} height="13" rx="4" width="84" x="31" y="75" />
    </BrowserShell>
    <path className={styles.accentFill} d="M194 34c11 8 22 9 31 10v23c0 22-13 36-31 44-18-8-31-22-31-44V44c9-1 20-2 31-10Z" />
    <path className={styles.inverseLine} d="m181 70 9 9 18-21" />
  </>
);

const SupportedScene = (): ReactNode => (
  <>
    <rect className={styles.frame} height="88" rx="12" width="202" x="19" y="24" />
    <circle className={styles.accentFill} cx="47" cy="49" r="10" />
    <circle className={styles.accentFill} cx="47" cy="70" r="10" />
    <circle className={styles.accentFill} cx="47" cy="91" r="10" />
    <path className={styles.inverseLineSmall} d="m42 49 3 3 6-7M42 70l3 3 6-7M42 91l3 3 6-7" />
    <path className={styles.mutedLine} d="M67 49h124M67 70h98M67 91h114" />
  </>
);

const LimitsScene = (): ReactNode => (
  <>
    <rect className={styles.frame} height="88" rx="12" width="202" x="19" y="24" />
    <path className={styles.accentOutline} d="m56 93 24-45 24 45z" />
    <path className={styles.accentLine} d="M80 62v16M80 85v1" />
    <path className={styles.mutedLine} d="M120 51h72M120 65h58M120 79h72M120 93h49" />
  </>
);

const RelatedScene = (): ReactNode => (
  <>
    <circle className={styles.accentFill} cx="48" cy="68" r="22" />
    <circle className={styles.mutedSoft} cx="192" cy="43" r="20" />
    <circle className={styles.accentSoft} cx="192" cy="93" r="20" />
    <path className={styles.arrow} d="M70 68h53m-8-8 8 8-8 8M123 68l48-25M123 68l48 25" />
    <path className={styles.inverseLine} d="M40 62h16M40 69h16M40 76h11" />
  </>
);

const FlowScene = (): ReactNode => (
  <>
    <BrowserShell>
      <rect className={styles.accentSoft} height="20" rx="4" width="100" x="31" y="53" />
      <path className={styles.mutedLine} d="M31 83h89M31 93h66" />
    </BrowserShell>
    <path className={styles.arrow} d="M145 68h15m-6-6 6 6-6 6" />
    <path className={styles.accentFill} d="M174 46h13v11a9 9 0 1 1 0 18v16h-16a9 9 0 1 1-18 0V75a9 9 0 1 0 0-18V46h12a9 9 0 1 0 9 0Z" />
    <path className={styles.arrow} d="M194 68h12m-6-6 6 6-6 6" />
    <path className={styles.frame} d="M210 37h18l9 9v54h-27z" />
    <path className={styles.mutedLine} d="M216 61h14M216 70h14M216 79h10" />
  </>
);

const getArtworkScene = (variant: ExtensionArtworkVariant): ReactNode => {
  switch (variant) {
    case "accurate":
      return <AccurateScene />;
    case "editable":
      return <EditableScene />;
    case "chat":
      return <ChatScene />;
    case "page":
      return <PageScene />;
    case "file":
      return <FileScene />;
    case "workspace":
      return <WorkspaceScene />;
    case "conversation":
      return <ConversationScene />;
    case "open":
      return <OpenScene />;
    case "launch":
      return <LaunchScene />;
    case "choose":
      return <ChooseScene />;
    case "adjust":
      return <AdjustScene />;
    case "wait":
      return <WaitScene />;
    case "save":
      return <SaveScene />;
    case "privacy":
      return <PrivacyScene />;
    case "supported":
      return <SupportedScene />;
    case "limits":
      return <LimitsScene />;
    case "related":
      return <RelatedScene />;
    case "flow":
      return <FlowScene />;
  }
};

export const ExtensionArtwork = ({
  className,
  variant,
}: ExtensionArtworkProps): ReactNode => {
  const tone = toneByVariant[variant];
  const artworkClassName = `${styles.artwork} ${styles[tone]} ${className ?? ""}`.trim();

  return (
    <div aria-hidden="true" className={artworkClassName} data-variant={variant}>
      <svg fill="none" focusable="false" viewBox="0 0 240 136">
        {getArtworkScene(variant)}
      </svg>
    </div>
  );
};
