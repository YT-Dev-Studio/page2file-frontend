import type { Locale } from "@/shared/i18n/locales";

export type SupportCopy = {
  checkingButton: string;
  commentCount: string;
  commentError: string;
  commentHelper: string;
  commentLabel: string;
  contactLabel: string;
  cooldownButton: string;
  deliveryNote: string;
  emailError: string;
  emailHelper: string;
  emailLabel: string;
  eyebrow: string;
  formTitle: string;
  lead: string;
  metadataDescription: string;
  metadataTitle: string;
  privacyAfter: string;
  privacyBefore: string;
  privacyLabel: string;
  submitButton: string;
  submittingButton: string;
  submitError: string;
  submitSuccess: string;
  title: string;
  unavailableButton: string;
  unavailableMessage: string;
};

const supportCopy: Record<Locale, SupportCopy> = {
  en: {
    checkingButton: "Checking availability",
    commentCount: "{current} of {maximum} characters",
    commentError: "Enter a comment of up to 3,500 characters.",
    commentHelper: "Describe what happened and what result you expected.",
    commentLabel: "Comment",
    contactLabel: "Support email",
    cooldownButton: "Feedback sent",
    deliveryNote:
      "Your message is delivered to the Page 2 PDF development topic.",
    emailError: "Enter a valid email address.",
    emailHelper: "We use this address to identify the sender and reply if needed.",
    emailLabel: "Email",
    eyebrow: "PAGE 2 FILE · SUPPORT",
    formTitle: "Send feedback",
    lead:
      "Tell us about a problem, an unclear step, or an idea related to the Page 2 PDF.",
    metadataDescription:
      "Contact Page 2 PDF support to report an extension problem, describe an unclear step, or send product feedback to the Page 2 File team.",
    metadataTitle: "Page 2 PDF support",
    privacyAfter: ".",
    privacyBefore:
      "The email address and comment are sent to our support chat as described in the",
    privacyLabel: "Privacy Policy",
    submitButton: "Send comment",
    submittingButton: "Sending",
    submitError:
      "We could not send the comment. Try again or email support@page2file.com.",
    submitSuccess: "Your feedback was sent. Thank you.",
    title: "Page 2 PDF support",
    unavailableButton: "Sending unavailable",
    unavailableMessage:
      "The feedback form is temporarily unavailable. You can email us instead.",
  },
  ru: {
    checkingButton: "Проверяем доступность",
    commentCount: "{current} из {maximum} символов",
    commentError: "Введите комментарий длиной до 3 500 символов.",
    commentHelper: "Опишите, что произошло и какой результат вы ожидали.",
    commentLabel: "Комментарий",
    contactLabel: "Почта поддержки",
    cooldownButton: "Комментарий отправлен",
    deliveryNote:
      "Сообщение поступит в топик разработки расширения Page 2 PDF.",
    emailError: "Введите корректный адрес почты.",
    emailHelper:
      "Мы используем этот адрес, чтобы определить отправителя и при необходимости ответить.",
    emailLabel: "Почта",
    eyebrow: "PAGE 2 FILE · ПОДДЕРЖКА",
    formTitle: "Отправить комментарий",
    lead:
      "Расскажите о проблеме, непонятном шаге или идее, связанной с расширением Page 2 PDF.",
    metadataDescription:
      "Обратитесь в поддержку Page 2 PDF, чтобы сообщить о проблеме с расширением, непонятном шаге или отправить комментарий команде Page 2 File.",
    metadataTitle: "Поддержка Page 2 PDF",
    privacyAfter: ".",
    privacyBefore:
      "Почта и комментарий передаются в служебный чат согласно",
    privacyLabel: "Политике конфиденциальности",
    submitButton: "Отправить комментарий",
    submittingButton: "Отправляем",
    submitError:
      "Не удалось отправить комментарий. Попробуйте снова или напишите на support@page2file.com.",
    submitSuccess: "Комментарий отправлен. Спасибо.",
    title: "Поддержка Page 2 PDF",
    unavailableButton: "Отправка недоступна",
    unavailableMessage:
      "Форма временно недоступна. Вы можете написать нам по почту.",
  },
};

export const getSupportCopy = (locale: Locale): SupportCopy =>
  supportCopy[locale];
