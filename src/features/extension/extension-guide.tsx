"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { Container } from "@/shared/ui/site-shell";
import {
  SeoBreadcrumbs,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
import { getExtensionCopy } from "./extension-copy";
import styles from "./guide.module.css";

type GuideMode = "steps" | "video";

export const ExtensionGuide = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: copy.homeLabel, href: `/${locale}` },
    {
      label: copy.guideLabel,
      href: `/${locale}/chrome-extension/how-to-use`,
    },
  ];
  const [mode, setMode] = useState<GuideMode>("steps");
  const showSteps = (): void => setMode("steps");
  const showVideo = (): void => setMode("video");
  const step = (item: (typeof copy.steps)[number]): ReactNode => (
    <article className={styles.step} key={item.number}>
      <div className={styles.media}>
        <Image alt={item.imageAlt} height={480} src={item.image} width={720} />
      </div>
      <div>
        <span className={styles.stepNumber}>
          {copy.stepLabel} {item.number}
        </span>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    </article>
  );
  const chapterItem = (chapter: (typeof copy.chapters)[number]): ReactNode => (
    <li key={chapter.time}>
      <span>{chapter.title}</span>
      <time>{chapter.time}</time>
    </li>
  );
  const transcriptParagraph = (paragraph: string): ReactNode => (
    <p key={paragraph}>{paragraph}</p>
  );

  return (
    <main className={styles.page} id="main-content">
      <Container>
        <SeoBreadcrumbs
          items={breadcrumbs}
          label={copy.breadcrumbLabel}
          locale={locale}
        />
        <header className={styles.hero}>
          <p className={styles.eyebrow}>
            {copy.eyebrow} · {locale.toUpperCase()}
          </p>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.lead}>{copy.lead}</p>
        </header>
        <div
          aria-label={copy.formatLabel}
          className={styles.tabs}
          role="tablist"
        >
          <button
            aria-controls="steps-panel"
            aria-selected={mode === "steps"}
            className={styles.tab}
            onClick={showSteps}
            role="tab"
            type="button"
          >
            {copy.stepsTab}
          </button>
          <button
            aria-controls="video-panel"
            aria-selected={mode === "video"}
            className={styles.tab}
            onClick={showVideo}
            role="tab"
            type="button"
          >
            {copy.videoTab}
          </button>
        </div>

        <section
          className={styles.panel}
          hidden={mode !== "steps"}
          id="steps-panel"
          role="tabpanel"
        >
          <div className={styles.steps}>{copy.steps.map(step)}</div>
        </section>

        <section
          className={styles.panel}
          hidden={mode !== "video"}
          id="video-panel"
          role="tabpanel"
        >
          <div className={styles.videoGrid}>
            <div className={styles.videoCard}>
              <div className={styles.videoPoster}>
                <Image
                  alt={copy.videoPosterAlt}
                  height={720}
                  src="/demos/video-poster.svg"
                  width={1280}
                />
              </div>
              <ol className={styles.chapters}>
                {copy.chapters.map(chapterItem)}
              </ol>
            </div>
            <aside className={styles.transcript}>
              <h2>{copy.transcriptTitle}</h2>
              {copy.transcript.map(transcriptParagraph)}
            </aside>
          </div>
        </section>
      </Container>
    </main>
  );
};
