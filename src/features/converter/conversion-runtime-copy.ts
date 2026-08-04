import type { BackendPublicError } from "@/shared/api/backend-contract";
import type { Locale } from "@/shared/i18n/locales";

type RuntimeCopy = {
  submitPending: string;
  runtimeNotice: string;
  errors: Record<BackendPublicError["code"], string>;
};

const runtimeCopy: Record<"en" | "ru" | "de" | "fr", RuntimeCopy> = {
  en: {
    submitPending: "Starting secure preview…",
    runtimeNotice:
      "The service fetches the public URL in an isolated browser. Source data and artifacts are temporary and are not kept as conversion history.",
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
        "The source does not allow automated access.",
      PAGE_TOO_LARGE:
        "The page exceeds the supported size. Try a smaller source.",
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
        "Источник не разрешает автоматизированный доступ.",
      PAGE_TOO_LARGE:
        "Страница превышает допустимый размер. Выберите меньший источник.",
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
  de: {
    submitPending: "Sichere Vorschau wird gestartet…",
    runtimeNotice:
      "Der Dienst lädt die öffentliche URL in einem isolierten Browser. Quelldaten und Dateien sind temporär und werden nicht als Konvertierungsverlauf gespeichert.",
    errors: {
      INVALID_REQUEST:
        "Die Anfrage ist unvollständig oder enthält einen nicht unterstützten Wert.",
      INVALID_URL:
        "Geben Sie eine gültige öffentliche URL ein und versuchen Sie es erneut.",
      UNSUPPORTED_SCHEME: "Es werden nur HTTPS-URLs akzeptiert.",
      PRIVATE_NETWORK_TARGET:
        "Private, lokale und interne Infrastrukturadressen sind gesperrt.",
      DNS_VALIDATION_FAILED:
        "Das Ziel konnte nicht sicher überprüft werden.",
      REDIRECT_BLOCKED:
        "Die Seite hat zu einem nicht zulässigen Ziel weitergeleitet.",
      SOURCE_REQUIRES_AUTH:
        "Diese Seite erfordert eine Anmeldung. Verwenden Sie die Erweiterung für den aktiven Tab.",
      SOURCE_BLOCKED_AUTOMATION:
        "Die Quelle erlaubt keinen automatisierten Zugriff.",
      PAGE_TOO_LARGE:
        "Die Seite überschreitet die unterstützte Größe. Verwenden Sie eine kleinere Quelle.",
      RESOURCE_LIMIT_EXCEEDED:
        "Die Seite hat das sichere Ressourcenlimit überschritten.",
      LOAD_TIMEOUT:
        "Die Seite wurde vor Ablauf der Verarbeitungszeit nicht stabil.",
      UNSUPPORTED_HTML:
        "Der bereitgestellte HTML-Inhalt kann nicht sicher verarbeitet werden.",
      PREVIEW_EXPIRED:
        "Diese temporäre Vorschau ist abgelaufen. Starten Sie eine neue Konvertierung.",
      REVISION_CONFLICT:
        "Die Vorschau wurde in einer anderen Anfrage geändert. Laden Sie sie neu und versuchen Sie es erneut.",
      RATE_LIMITED:
        "Der Dienst ist ausgelastet oder das temporäre Limit wurde erreicht. Versuchen Sie es später erneut.",
      HUMAN_VERIFICATION_REQUIRED:
        "Schließen Sie die Überprüfung ab, bevor Sie fortfahren.",
      RENDER_FAILED:
        "Das Dokument konnte nicht erstellt werden. Sie können die Konvertierung erneut versuchen.",
      DOWNLOAD_EXPIRED:
        "Der temporäre Download ist abgelaufen. Starten Sie eine neue Konvertierung.",
      UNAUTHORIZED:
        "Ihre anonyme Sitzung ist abgelaufen. Aktualisieren Sie die Seite und versuchen Sie es erneut.",
      FORBIDDEN:
        "Dieser Vorgang ist für die aktuelle Sitzung nicht verfügbar.",
      NOT_FOUND:
        "Die temporäre Konvertierung wurde nicht gefunden oder ist abgelaufen.",
      CONFLICT:
        "Die Konvertierung ist für diesen Vorgang noch nicht bereit.",
      INTERNAL_ERROR:
        "Der Konvertierungsdienst ist vorübergehend nicht verfügbar. Versuchen Sie es erneut.",
    },
  },
  fr: {
    submitPending: "Démarrage de l’aperçu sécurisé…",
    runtimeNotice:
      "Le service charge l’URL publique dans un navigateur isolé. Les données source et les fichiers sont temporaires et ne sont pas conservés comme historique de conversion.",
    errors: {
      INVALID_REQUEST:
        "La demande est incomplète ou contient une valeur non prise en charge.",
      INVALID_URL:
        "Saisissez une URL publique valide et réessayez.",
      UNSUPPORTED_SCHEME: "Seules les URL HTTPS sont acceptées.",
      PRIVATE_NETWORK_TARGET:
        "Les adresses privées, locales et d’infrastructure sont bloquées.",
      DNS_VALIDATION_FAILED:
        "La destination n’a pas pu être validée de manière sûre.",
      REDIRECT_BLOCKED:
        "La page a redirigé la demande vers une destination non autorisée.",
      SOURCE_REQUIRES_AUTH:
        "Cette page nécessite une connexion. Utilisez l’extension pour l’onglet actif.",
      SOURCE_BLOCKED_AUTOMATION:
        "La source n’autorise pas l’accès automatisé.",
      PAGE_TOO_LARGE:
        "La page dépasse la taille prise en charge. Essayez une source plus petite.",
      RESOURCE_LIMIT_EXCEEDED:
        "La page a dépassé la limite de ressources autorisée.",
      LOAD_TIMEOUT:
        "La page ne s’est pas stabilisée avant la fin du délai de traitement.",
      UNSUPPORTED_HTML:
        "Le contenu HTML fourni ne peut pas être traité de manière sûre.",
      PREVIEW_EXPIRED:
        "Cet aperçu temporaire a expiré. Lancez une nouvelle conversion.",
      REVISION_CONFLICT:
        "L’aperçu a été modifié par une autre demande. Rechargez-le et réessayez.",
      RATE_LIMITED:
        "Le service est occupé ou votre limite temporaire a été atteinte. Réessayez plus tard.",
      HUMAN_VERIFICATION_REQUIRED:
        "Terminez l’étape de vérification avant de continuer.",
      RENDER_FAILED:
        "Le document n’a pas pu être généré. Vous pouvez relancer la conversion.",
      DOWNLOAD_EXPIRED:
        "Le téléchargement temporaire a expiré. Lancez une nouvelle conversion.",
      UNAUTHORIZED:
        "Votre session anonyme a expiré. Actualisez la page et réessayez.",
      FORBIDDEN:
        "Cette opération n’est pas disponible pour la session actuelle.",
      NOT_FOUND:
        "La conversion temporaire est introuvable ou a expiré.",
      CONFLICT:
        "La conversion n’est pas encore prête pour cette opération.",
      INTERNAL_ERROR:
        "Le service de conversion est temporairement indisponible. Réessayez.",
    },
  },
};

const hasRuntimeCopy = (
  locale: Locale,
): locale is keyof typeof runtimeCopy => locale in runtimeCopy;

export const getConversionRuntimeCopy = (locale: Locale): RuntimeCopy =>
  runtimeCopy[hasRuntimeCopy(locale) ? locale : "en"];
