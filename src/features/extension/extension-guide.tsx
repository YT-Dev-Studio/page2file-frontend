"use client";

import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import type { Locale } from "@/shared/i18n/locales";
import { getSiteCopy } from "@/shared/i18n/site-copy";
import { getExtensionActionLabel } from "@/shared/routes/extension-link";
import { ExternalCta } from "@/shared/ui/external-cta";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import {
  SeoBreadcrumbs,
  type BreadcrumbItem,
} from "@/shared/seo/structured-data";
import { getExtensionCopy } from "./extension-copy";
import styles from "./guide.module.css";

type GuideMode = "steps" | "video";

const guidePoint = (point: string): ReactNode => (
  <li key={point}>{point}</li>
);

export const ExtensionGuide = ({ locale }: { locale: Locale }): ReactNode => {
  const copy = getExtensionCopy(locale);
  const siteCopy = getSiteCopy(locale);
  const breadcrumbs: ReadonlyArray<BreadcrumbItem> = [
    { label: copy.homeLabel, href: `/${locale}` },
    {
      label: copy.guideLabel,
      href: `/${locale}/chrome-extension/how-to-use`,
    },
  ];
  const [mode, setMode] = useState<GuideMode>("steps");
  const stepsTabRef = useRef<HTMLButtonElement>(null);
  const videoTabRef = useRef<HTMLButtonElement>(null);
  const selectMode = (nextMode: GuideMode): void => {
    setMode(nextMode);
  };
  const showSteps = (): void => selectMode("steps");
  const showVideo = (): void => selectMode("video");
  const focusMode = (nextMode: GuideMode): void => {
    selectMode(nextMode);
    const target =
      nextMode === "steps" ? stepsTabRef.current : videoTabRef.current;
    target?.focus();
  };
  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
  ): void => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      focusMode(mode === "steps" ? "video" : "steps");
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      focusMode("steps");
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      focusMode("video");
    }
  };
  const step = (item: (typeof copy.steps)[number]): ReactNode => (
    <article className={styles.step} key={item.number}>
      <span className={styles.stepNumber}>
        {copy.stepLabel} {item.number}
      </span>
      <div className={styles.stepContent}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        {item.points ? (
          <ol className={styles.stepPoints}>
            {item.points.map(guidePoint)}
          </ol>
        ) : null}
      </div>
      <figure className={styles.media}>
        <Image
          alt={item.imageAlt}
          height={item.imageHeight ?? 480}
          src={item.image}
          width={item.imageWidth ?? 720}
        />
        {item.imageCaption ? (
          <figcaption>{item.imageCaption}</figcaption>
        ) : null}
      </figure>
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
    <PublicPage className={styles.page} family="extension">
      <Container>
        <SeoBreadcrumbs
          items={breadcrumbs}
          label={copy.breadcrumbLabel}
          locale={locale}
        />
        <PublicHero
          className={styles.hero}
          eyebrow={`${copy.eyebrow} · ${locale.toUpperCase()}`}
          lead={copy.lead}
          title={copy.title}
        >
          <ExternalCta
            externalLinkKey="chromeExtension"
            label={siteCopy.header.extensionAction}
            placeholderLabel={getExtensionActionLabel(
              locale,
              siteCopy.header.extensionAction,
            )}
          />
        </PublicHero>
        <div
          aria-label={copy.formatLabel}
          className={styles.tabs}
          role="tablist"
        >
          <button
            aria-controls="steps-panel"
            aria-selected={mode === "steps"}
            className={styles.tab}
            id="steps-tab"
            onClick={showSteps}
            onKeyDown={handleTabKeyDown}
            ref={stepsTabRef}
            role="tab"
            tabIndex={mode === "steps" ? 0 : -1}
            type="button"
          >
            {copy.stepsTab}
          </button>
          <button
            aria-controls="video-panel"
            aria-selected={mode === "video"}
            className={styles.tab}
            id="video-tab"
            onClick={showVideo}
            onKeyDown={handleTabKeyDown}
            ref={videoTabRef}
            role="tab"
            tabIndex={mode === "video" ? 0 : -1}
            type="button"
          >
            {copy.videoTab}
          </button>
        </div>

        <section
          className={styles.panel}
          hidden={mode !== "steps"}
          id="steps-panel"
          aria-labelledby="steps-tab"
          role="tabpanel"
        >
          <div className={styles.steps}>{copy.steps.map(step)}</div>
        </section>

        <section
          className={styles.panel}
          hidden={mode !== "video"}
          id="video-panel"
          aria-labelledby="video-tab"
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

        <nav
          aria-label={copy.relatedArticlesLabel}
          className={styles.articleLinks}
        >
          <strong>{copy.relatedArticlesLabel}</strong>
          <ul>
            {copy.relatedArticles.map((article) => (
              <li key={article.slug}>
                <Link href={`/${locale}/blog/${article.slug}`}>
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </PublicPage>
  );
};
