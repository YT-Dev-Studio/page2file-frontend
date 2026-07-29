"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import styles from "./guide.module.css";

type GuideMode = "steps" | "video";

const guideSteps: ReadonlyArray<{
  number: string;
  title: string;
  body: string;
  image: string;
}> = [
  {
    number: "01",
    title: "Open the source in your current tab",
    body: "Load the complete webpage or AI conversation. Expand collapsed material and scroll long virtualized chats so the content is present.",
    image: "/demos/extension-step-source.svg",
  },
  {
    number: "02",
    title: "Choose PDF or PowerPoint",
    body: "The output format is a direct choice in the extension panel. Then select Visual or Editable & clickable for the fidelity contract.",
    image: "/demos/extension-step-mode.svg",
  },
  {
    number: "03",
    title: "Review sections before download",
    body: "Inspect local thumbnails, reorder sections with drag or buttons, remove unwanted content and review every fallback warning.",
    image: "/demos/extension-step-preview.svg",
  },
];

export const ExtensionGuide = ({ locale }: { locale: Locale }): ReactNode => {
  const [mode, setMode] = useState<GuideMode>("steps");
  const showSteps = (): void => setMode("steps");
  const showVideo = (): void => setMode("video");
  const step = (
    item: (typeof guideSteps)[number],
  ): ReactNode => (
    <article className={styles.step} key={item.number}>
      <div className={styles.media}>
        <Image alt="" height={480} src={item.image} width={720} />
      </div>
      <div>
        <span className={styles.stepNumber}>STEP {item.number}</span>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    </article>
  );

  return (
    <main className={styles.page} id="main-content">
      <Container>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Extension guide · {locale.toUpperCase()}</p>
          <h1 className={styles.title}>From active tab to reviewed document</h1>
          <p className={styles.lead}>
            Choose a step-by-step walkthrough or an accessible demo video
            outline. Both instruction sets are present in the server-rendered page.
          </p>
        </header>
        <div aria-label="Instruction format" className={styles.tabs} role="tablist">
          <button aria-controls="steps-panel" aria-selected={mode === "steps"} className={styles.tab} onClick={showSteps} role="tab" type="button">
            Step-by-step
          </button>
          <button aria-controls="video-panel" aria-selected={mode === "video"} className={styles.tab} onClick={showVideo} role="tab" type="button">
            Video
          </button>
        </div>

        <section className={styles.panel} hidden={mode !== "steps"} id="steps-panel" role="tabpanel">
          <div className={styles.steps}>{guideSteps.map(step)}</div>
        </section>

        <section className={styles.panel} hidden={mode !== "video"} id="video-panel" role="tabpanel">
          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <div className={styles.videoPoster}>
                <Image alt="Demo video poster showing webpage sections flowing into document pages" height={720} src="/demos/video-poster.svg" width={1280} />
              </div>
              <ol className={styles.chapters}>
                <li><span>Prepare the source</span><time>00:00</time></li>
                <li><span>Choose format and mode</span><time>00:42</time></li>
                <li><span>Edit the local preview</span><time>01:28</time></li>
                <li><span>Download and verify</span><time>02:14</time></li>
              </ol>
            </div>
            <aside className={styles.transcript}>
              <h2>Transcript</h2>
              <p>Open the page or conversation you want to export and make sure every required section is loaded.</p>
              <p>Activate Page2File from the toolbar. Choose PDF or PowerPoint, then choose Visual for fidelity or Editable for supported document objects.</p>
              <p>Review the local section rail. Move, split, merge or remove sections and read the warnings before downloading.</p>
            </aside>
          </div>
          <p className={styles.note}>
            Demo media: the production tutorial video has not been recorded.
            This poster, chapter list and transcript are original prototype content.
          </p>
        </section>
      </Container>
    </main>
  );
};
