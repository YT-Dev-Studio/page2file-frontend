import type { BackendPublicError } from "@/shared/api/backend-contract";
import type { Locale } from "@/shared/i18n/locales";

type RuntimeCopy = {
  submitPending: string;
  runtimeNotice: string;
  errors: Record<BackendPublicError["code"], string>;
};

const runtimeCopy: Record<Locale, RuntimeCopy> = {
  en: {
    submitPending: "Starting secure preview…",
    runtimeNotice:
      "The service opens the public URL in an isolated browser. Submitted page data and generated files are temporary and are not kept as conversion history.",
    errors: {
      INVALID_REQUEST:
        "The request is incomplete or contains an unsupported value.",
      INVALID_URL: "Enter a valid public URL and try again.",
      UNSUPPORTED_SCHEME: "Only HTTPS URLs are accepted.",
      PRIVATE_NETWORK_TARGET:
        "Private, local and infrastructure addresses are blocked.",
      DNS_VALIDATION_FAILED:
        "The destination could not be validated safely.",
      REDIRECT_BLOCKED:
        "The page redirected to a destination that is not allowed.",
      SOURCE_REQUIRES_AUTH:
        "This page requires sign-in. Use the active-tab extension workflow.",
      SOURCE_BLOCKED_AUTOMATION:
        "The submitted page does not allow automated access.",
      PAGE_TOO_LARGE:
        "The page exceeds the supported size. Try a smaller page.",
      RESOURCE_LIMIT_EXCEEDED:
        "The page used more resources than the safe processing limit.",
      LOAD_TIMEOUT:
        "The page did not stabilize before the processing deadline.",
      UNSUPPORTED_HTML: "The supplied HTML cannot be processed safely.",
      PREVIEW_EXPIRED:
        "This temporary preview expired. Start a new conversion.",
      REVISION_CONFLICT:
        "The preview changed in another request. Reload and try again.",
      RATE_LIMITED:
        "The service is busy or your temporary limit was reached. Try later.",
      HUMAN_VERIFICATION_REQUIRED:
        "Complete the verification step before continuing.",
      RENDER_FAILED:
        "The document could not be rendered. You can retry the conversion.",
      DOWNLOAD_EXPIRED:
        "The temporary download expired. Start a new conversion.",
      UNAUTHORIZED:
        "Your anonymous session expired. Refresh the page and try again.",
      FORBIDDEN: "This operation is not available for the current session.",
      NOT_FOUND: "The temporary conversion was not found or has expired.",
      CONFLICT:
        "The conversion is not ready for that operation yet.",
      INTERNAL_ERROR:
        "The conversion service is temporarily unavailable. Try again.",
    },
  },
  ru: {
    submitPending: "Запускаем безопасный предпросмотр…",
    runtimeNotice:
      "Сервис загружает общедоступный URL в изолированном браузере. Исходные данные и файлы временные и не сохраняются как история конвертаций.",
    errors: {
      INVALID_REQUEST:
        "Запрос неполный или содержит неподдерживаемое значение.",
      INVALID_URL: "Введите корректный общедоступный URL и повторите попытку.",
      UNSUPPORTED_SCHEME: "Разрешены только HTTPS URL.",
      PRIVATE_NETWORK_TARGET:
        "Частные, локальные и инфраструктурные адреса заблокированы.",
      DNS_VALIDATION_FAILED:
        "Не удалось безопасно проверить адрес назначения.",
      REDIRECT_BLOCKED:
        "Страница перенаправила запрос на запрещённый адрес.",
      SOURCE_REQUIRES_AUTH:
        "Страница требует входа. Используйте расширение для активной вкладки.",
      SOURCE_BLOCKED_AUTOMATION:
        "Переданная страница не разрешает автоматизированный доступ.",
      PAGE_TOO_LARGE:
        "Страница превышает допустимый размер. Выберите страницу меньшего размера.",
      RESOURCE_LIMIT_EXCEEDED:
        "Страница превысила безопасный лимит ресурсов.",
      LOAD_TIMEOUT:
        "Страница не стабилизировалась до окончания времени обработки.",
      UNSUPPORTED_HTML:
        "Этот HTML нельзя обработать в безопасном режиме.",
      PREVIEW_EXPIRED:
        "Срок временного предпросмотра истёк. Начните новую конвертацию.",
      REVISION_CONFLICT:
        "Предпросмотр уже изменился. Обновите данные и повторите действие.",
      RATE_LIMITED:
        "Сервис занят или достигнут временный лимит. Повторите позже.",
      HUMAN_VERIFICATION_REQUIRED:
        "Перед продолжением завершите проверку пользователя.",
      RENDER_FAILED:
        "Не удалось создать документ. Конвертацию можно повторить.",
      DOWNLOAD_EXPIRED:
        "Срок временного файла истёк. Начните новую конвертацию.",
      UNAUTHORIZED:
        "Анонимная сессия истекла. Обновите страницу и повторите попытку.",
      FORBIDDEN: "Эта операция недоступна для текущей сессии.",
      NOT_FOUND: "Временная конвертация не найдена или уже удалена.",
      CONFLICT: "Конвертация пока не готова к этому действию.",
      INTERNAL_ERROR:
        "Сервис конвертации временно недоступен. Повторите попытку.",
    },
  },
};

export const getConversionRuntimeCopy = (locale: Locale): RuntimeCopy =>
  runtimeCopy[locale];
