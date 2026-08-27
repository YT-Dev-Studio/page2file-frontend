const MAX_EMAIL_LENGTH = 254;
const MAX_COMMENT_LENGTH = 3500;
const TELEGRAM_TIMEOUT_MS = 8_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BOT_TOKEN_PATTERN = /^\d+:[A-Za-z0-9_-]+$/;

export type SupportConfig = {
  botToken: string;
  groupId: number;
  topicId: number;
};

export type SupportFeedback = {
  comment: string;
  email: string;
};

type TelegramResponse = {
  ok?: unknown;
};

const parseInteger = (
  value: string | undefined,
  allowNegative: boolean,
): number | null => {
  const normalized = value?.trim() ?? "";
  const pattern = allowNegative ? /^-?\d+$/ : /^\d+$/;
  if (!pattern.test(normalized)) return null;
  const result = Number(normalized);
  if (!Number.isSafeInteger(result)) return null;
  if (!allowNegative && result <= 0) return null;
  return result;
};

const parseTelegramGroupId = (value: string | undefined): number | null => {
  const normalized = value?.trim() ?? "";
  if (!/^-?\d+$/.test(normalized) || normalized === "0") return null;

  // Telegram Web links expose a supergroup's positive internal ID, while the
  // Bot API requires the full chat ID with the -100 prefix.
  const botApiId = normalized.startsWith("-")
    ? normalized
    : `-100${normalized}`;
  const result = Number(botApiId);
  return Number.isSafeInteger(result) && result < 0 ? result : null;
};

export const getSupportConfig = (): SupportConfig | null => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim() ?? "";
  const groupId = parseTelegramGroupId(process.env.TELEGRAM_GROUP_ID);
  const topicId = parseInteger(process.env.TELEGRAM_TOPIC_ID, false);

  if (
    !BOT_TOKEN_PATTERN.test(botToken) ||
    groupId === null ||
    topicId === null
  ) {
    return null;
  }
  return { botToken, groupId, topicId };
};

export const normalizeFeedback = (value: unknown): SupportFeedback | null => {
  if (typeof value !== "object" || value === null) return null;
  const candidate = value as Record<string, unknown>;
  if (
    typeof candidate.email !== "string" ||
    typeof candidate.comment !== "string"
  ) {
    return null;
  }

  const email = candidate.email.trim();
  const comment = candidate.comment.replace(/\r\n?/g, "\n").trim();
  if (
    email.length === 0 ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email) ||
    comment.length === 0 ||
    comment.length > MAX_COMMENT_LENGTH
  ) {
    return null;
  }
  return { comment, email };
};

export const hasFilledHoneypot = (value: unknown): boolean => {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate.website === "string" && candidate.website.trim() !== "";
};

export const buildFeedbackMessage = ({
  comment,
  email,
}: SupportFeedback): string =>
  `Новый фидбэк от ${email}\n—————————————\n${comment}\n\ncc: @Ytvee`;

export const sendFeedbackToTelegram = async (
  config: SupportConfig,
  feedback: SupportFeedback,
): Promise<boolean> => {
  const response = await fetch(
    `https://api.telegram.org/bot${config.botToken}/sendMessage`,
    {
      body: JSON.stringify({
        chat_id: config.groupId,
        link_preview_options: { is_disabled: true },
        message_thread_id: config.topicId,
        text: buildFeedbackMessage(feedback),
      }),
      headers: { "content-type": "application/json" },
      method: "POST",
      signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
    },
  );
  if (!response.ok) return false;

  try {
    const payload = (await response.json()) as TelegramResponse;
    return payload.ok === true;
  } catch {
    return false;
  }
};
