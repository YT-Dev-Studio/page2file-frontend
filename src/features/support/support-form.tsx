"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import type { Locale } from "@/shared/i18n/locales";
import { Button } from "@/shared/ui/components/button/button";
import type { SupportCopy } from "./support-copy";
import styles from "./support-page.module.css";

const MAX_EMAIL_LENGTH = 254;
const MAX_COMMENT_LENGTH = 3500;
const SUCCESS_COOLDOWN_MS = 15_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type AvailabilityState =
  | { status: "checking" }
  | { csrf: string; status: "available" }
  | { status: "unavailable" };

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error" };

type FieldErrors = {
  comment?: string;
  email?: string;
};

type AvailabilityPayload = {
  csrf?: unknown;
  enabled?: unknown;
};

const parseAvailability = (value: unknown): AvailabilityState => {
  if (typeof value !== "object" || value === null) {
    return { status: "unavailable" };
  }
  const payload = value as AvailabilityPayload;
  if (payload.enabled === true && typeof payload.csrf === "string") {
    return { csrf: payload.csrf, status: "available" };
  }
  return { status: "unavailable" };
};

const validateFields = (
  email: string,
  comment: string,
  copy: SupportCopy,
): FieldErrors => {
  const errors: FieldErrors = {};
  const normalizedEmail = email.trim();
  const normalizedComment = comment.trim();

  if (
    normalizedEmail.length === 0 ||
    normalizedEmail.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(normalizedEmail)
  ) {
    errors.email = copy.emailError;
  }
  if (
    normalizedComment.length === 0 ||
    normalizedComment.length > MAX_COMMENT_LENGTH
  ) {
    errors.comment = copy.commentError;
  }
  return errors;
};

const hasFieldErrors = (errors: FieldErrors): boolean =>
  Boolean(errors.email || errors.comment);

export const SupportForm = ({
  copy,
  locale,
}: {
  copy: SupportCopy;
  locale: Locale;
}): ReactNode => {
  const [availability, setAvailability] =
    useState<AvailabilityState>({ status: "checking" });
  const [submission, setSubmission] =
    useState<SubmissionState>({ status: "idle" });
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [cooldown, setCooldown] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const cooldownTimerRef = useRef<number | null>(null);

  useEffect((): (() => void) => {
    const controller = new AbortController();
    const loadAvailability = async (): Promise<void> => {
      try {
        const response = await fetch("/api/support/feedback", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) {
          setAvailability({ status: "unavailable" });
          return;
        }
        const payload: unknown = await response.json();
        setAvailability(parseAvailability(payload));
      } catch {
        if (!controller.signal.aborted) {
          setAvailability({ status: "unavailable" });
        }
      }
    };

    void loadAvailability();
    return (): void => {
      controller.abort();
      if (cooldownTimerRef.current !== null) {
        window.clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setEmail(event.target.value);
    setErrors((current): FieldErrors => ({ ...current, email: undefined }));
    if (submission.status !== "submitting") {
      setSubmission({ status: "idle" });
    }
  };

  const handleCommentChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setComment(event.target.value);
    setErrors((current): FieldErrors => ({ ...current, comment: undefined }));
    if (submission.status !== "submitting") {
      setSubmission({ status: "idle" });
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    if (availability.status !== "available" || cooldown) return;

    const nextErrors = validateFields(email, comment, copy);
    setErrors(nextErrors);
    if (hasFieldErrors(nextErrors)) {
      if (nextErrors.email) emailRef.current?.focus();
      else commentRef.current?.focus();
      return;
    }

    setSubmission({ status: "submitting" });
    try {
      const response = await fetch("/api/support/feedback", {
        body: JSON.stringify({
          comment: comment.trim(),
          email: email.trim(),
          website: honeypotRef.current?.value ?? "",
        }),
        headers: {
          "content-type": "application/json",
          "x-p2f-csrf": availability.csrf,
        },
        method: "POST",
      });
      if (!response.ok) {
        setSubmission({ status: "error" });
        return;
      }

      setEmail("");
      setComment("");
      if (honeypotRef.current) honeypotRef.current.value = "";
      setSubmission({ status: "success" });
      setCooldown(true);
      cooldownTimerRef.current = window.setTimeout((): void => {
        setCooldown(false);
        cooldownTimerRef.current = null;
      }, SUCCESS_COOLDOWN_MS);
    } catch {
      setSubmission({ status: "error" });
    }
  };

  const isUnavailable = availability.status === "unavailable";
  const isSubmitting = submission.status === "submitting";
  const isDisabled =
    availability.status !== "available" || isSubmitting || cooldown;
  const commentCount = copy.commentCount
    .replace("{current}", String(comment.length))
    .replace("{maximum}", String(MAX_COMMENT_LENGTH));
  const buttonLabel = isUnavailable
    ? copy.unavailableButton
    : availability.status === "checking"
      ? copy.checkingButton
      : isSubmitting
        ? copy.submittingButton
        : cooldown
          ? copy.cooldownButton
          : copy.submitButton;

  return (
    <section className={styles.formCard} aria-labelledby="support-form-title">
      <div className={styles.formHeader}>
        <h2 id="support-form-title">{copy.formTitle}</h2>
        <p>{copy.deliveryNote}</p>
      </div>

      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="support-email">{copy.emailLabel}</label>
          <input
            aria-describedby={`support-email-helper${errors.email ? " support-email-error" : ""}`}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            id="support-email"
            maxLength={MAX_EMAIL_LENGTH}
            name="email"
            onChange={handleEmailChange}
            ref={emailRef}
            required
            type="email"
            value={email}
          />
          <p className={styles.helper} id="support-email-helper">
            {copy.emailHelper}
          </p>
          {errors.email ? (
            <p className={styles.fieldError} id="support-email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="support-comment">{copy.commentLabel}</label>
          <textarea
            aria-describedby={`support-comment-helper support-comment-count${errors.comment ? " support-comment-error" : ""}`}
            aria-invalid={Boolean(errors.comment)}
            id="support-comment"
            maxLength={MAX_COMMENT_LENGTH}
            name="comment"
            onChange={handleCommentChange}
            ref={commentRef}
            required
            rows={8}
            value={comment}
          />
          <div className={styles.fieldMeta}>
            <p className={styles.helper} id="support-comment-helper">
              {copy.commentHelper}
            </p>
            <span id="support-comment-count">{commentCount}</span>
          </div>
          {errors.comment ? (
            <p className={styles.fieldError} id="support-comment-error">
              {errors.comment}
            </p>
          ) : null}
        </div>

        <input
          aria-hidden="true"
          autoComplete="off"
          hidden
          name="website"
          ref={honeypotRef}
          tabIndex={-1}
          type="text"
        />

        <Button
          disabled={isDisabled}
          showIcon={false}
          size="large"
          type="submit"
        >
          {buttonLabel}
        </Button>

        <div aria-live="polite" className={styles.status}>
          {isUnavailable ? (
            <p className={styles.statusError}>
              {copy.unavailableMessage}{" "}
              <Link href="mailto:support@page2file.com">
                support@page2file.com
              </Link>
            </p>
          ) : null}
          {submission.status === "success" ? (
            <p className={styles.statusSuccess}>{copy.submitSuccess}</p>
          ) : null}
          {submission.status === "error" ? (
            <p className={styles.statusError}>{copy.submitError}</p>
          ) : null}
        </div>

        <p className={styles.privacyNote}>
          {copy.privacyBefore}{" "}
          <Link href={`/${locale}/privacy`}>{copy.privacyLabel}</Link>
          {copy.privacyAfter}
        </p>
      </form>
    </section>
  );
};
