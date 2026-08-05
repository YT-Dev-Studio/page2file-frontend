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
  es: {
    submitPending: "Iniciando la vista previa segura…",
    runtimeNotice:
      "El servicio carga la URL pública en un navegador aislado. Los datos de origen y los archivos son temporales y no se conservan como historial de conversiones.",
    errors: {
      INVALID_REQUEST:
        "La solicitud está incompleta o contiene un valor no compatible.",
      INVALID_URL:
        "Introduzca una URL pública válida y vuelva a intentarlo.",
      UNSUPPORTED_SCHEME: "Solo se aceptan URL HTTPS.",
      PRIVATE_NETWORK_TARGET:
        "Las direcciones privadas, locales y de infraestructura están bloqueadas.",
      DNS_VALIDATION_FAILED:
        "No se pudo validar el destino de forma segura.",
      REDIRECT_BLOCKED:
        "La página redirigió a un destino que no está permitido.",
      SOURCE_REQUIRES_AUTH:
        "Esta página requiere iniciar sesión. Use el flujo de la extensión para la pestaña activa.",
      SOURCE_BLOCKED_AUTOMATION:
        "La fuente no permite el acceso automatizado.",
      PAGE_TOO_LARGE:
        "La página supera el tamaño admitido. Pruebe una fuente más pequeña.",
      RESOURCE_LIMIT_EXCEEDED:
        "La página utilizó más recursos que el límite de procesamiento seguro.",
      LOAD_TIMEOUT:
        "La página no se estabilizó antes de finalizar el plazo de procesamiento.",
      UNSUPPORTED_HTML:
        "El HTML proporcionado no se puede procesar de forma segura.",
      PREVIEW_EXPIRED:
        "Esta vista previa temporal ha caducado. Inicie una nueva conversión.",
      REVISION_CONFLICT:
        "La vista previa cambió en otra solicitud. Recárguela y vuelva a intentarlo.",
      RATE_LIMITED:
        "El servicio está ocupado o se alcanzó su límite temporal. Inténtelo más tarde.",
      HUMAN_VERIFICATION_REQUIRED:
        "Complete el paso de verificación antes de continuar.",
      RENDER_FAILED:
        "No se pudo generar el documento. Puede volver a intentar la conversión.",
      DOWNLOAD_EXPIRED:
        "La descarga temporal ha caducado. Inicie una nueva conversión.",
      UNAUTHORIZED:
        "Su sesión anónima ha caducado. Actualice la página y vuelva a intentarlo.",
      FORBIDDEN:
        "Esta operación no está disponible para la sesión actual.",
      NOT_FOUND:
        "La conversión temporal no se encontró o ha caducado.",
      CONFLICT:
        "La conversión todavía no está lista para esta operación.",
      INTERNAL_ERROR:
        "El servicio de conversión no está disponible temporalmente. Vuelva a intentarlo.",
    },
  },
  nl: {
    submitPending: "Veilig voorbeeld wordt gestart…",
    runtimeNotice:
      "De service laadt de openbare URL in een geïsoleerde browser. Brongegevens en bestanden zijn tijdelijk en worden niet als conversiegeschiedenis bewaard.",
    errors: {
      INVALID_REQUEST:
        "De aanvraag is onvolledig of bevat een niet-ondersteunde waarde.",
      INVALID_URL:
        "Voer een geldige openbare URL in en probeer het opnieuw.",
      UNSUPPORTED_SCHEME: "Alleen HTTPS-URL's worden geaccepteerd.",
      PRIVATE_NETWORK_TARGET:
        "Privé-, lokale en infrastructuuradressen zijn geblokkeerd.",
      DNS_VALIDATION_FAILED:
        "De bestemming kon niet veilig worden gevalideerd.",
      REDIRECT_BLOCKED:
        "De pagina stuurde door naar een bestemming die niet is toegestaan.",
      SOURCE_REQUIRES_AUTH:
        "Deze pagina vereist aanmelding. Gebruik de extensieworkflow voor het actieve tabblad.",
      SOURCE_BLOCKED_AUTOMATION:
        "De bron staat geautomatiseerde toegang niet toe.",
      PAGE_TOO_LARGE:
        "De pagina overschrijdt de ondersteunde grootte. Probeer een kleinere bron.",
      RESOURCE_LIMIT_EXCEEDED:
        "De pagina gebruikte meer middelen dan de veilige verwerkingslimiet.",
      LOAD_TIMEOUT:
        "De pagina werd niet stabiel vóór het einde van de verwerkingstijd.",
      UNSUPPORTED_HTML:
        "De opgegeven HTML kan niet veilig worden verwerkt.",
      PREVIEW_EXPIRED:
        "Dit tijdelijke voorbeeld is verlopen. Start een nieuwe conversie.",
      REVISION_CONFLICT:
        "Het voorbeeld is door een andere aanvraag gewijzigd. Laad opnieuw en probeer het nogmaals.",
      RATE_LIMITED:
        "De service is bezet of uw tijdelijke limiet is bereikt. Probeer het later opnieuw.",
      HUMAN_VERIFICATION_REQUIRED:
        "Voltooi de verificatiestap voordat u doorgaat.",
      RENDER_FAILED:
        "Het document kon niet worden gegenereerd. U kunt de conversie opnieuw proberen.",
      DOWNLOAD_EXPIRED:
        "De tijdelijke download is verlopen. Start een nieuwe conversie.",
      UNAUTHORIZED:
        "Uw anonieme sessie is verlopen. Vernieuw de pagina en probeer het opnieuw.",
      FORBIDDEN:
        "Deze bewerking is niet beschikbaar voor de huidige sessie.",
      NOT_FOUND:
        "De tijdelijke conversie is niet gevonden of is verlopen.",
      CONFLICT:
        "De conversie is nog niet gereed voor deze bewerking.",
      INTERNAL_ERROR:
        "De conversieservice is tijdelijk niet beschikbaar. Probeer het opnieuw.",
    },
  },
  pt: {
    submitPending: "A iniciar a pré-visualização segura…",
    runtimeNotice:
      "O serviço carrega o URL público num navegador isolado. Os dados de origem e os ficheiros são temporários e não são guardados como histórico de conversões.",
    errors: {
      INVALID_REQUEST:
        "O pedido está incompleto ou contém um valor não suportado.",
      INVALID_URL:
        "Introduza um URL público válido e tente novamente.",
      UNSUPPORTED_SCHEME: "Apenas são aceites URLs HTTPS.",
      PRIVATE_NETWORK_TARGET:
        "Os endereços privados, locais e de infraestrutura estão bloqueados.",
      DNS_VALIDATION_FAILED:
        "Não foi possível validar o destino de forma segura.",
      REDIRECT_BLOCKED:
        "A página redirecionou para um destino não permitido.",
      SOURCE_REQUIRES_AUTH:
        "Esta página requer início de sessão. Utilize o fluxo da extensão para o separador ativo.",
      SOURCE_BLOCKED_AUTOMATION:
        "A origem não permite acesso automatizado.",
      PAGE_TOO_LARGE:
        "A página excede o tamanho suportado. Tente uma origem menor.",
      RESOURCE_LIMIT_EXCEEDED:
        "A página utilizou mais recursos do que o limite seguro de processamento.",
      LOAD_TIMEOUT:
        "A página não estabilizou antes do fim do prazo de processamento.",
      UNSUPPORTED_HTML:
        "O HTML fornecido não pode ser processado de forma segura.",
      PREVIEW_EXPIRED:
        "Esta pré-visualização temporária expirou. Inicie uma nova conversão.",
      REVISION_CONFLICT:
        "A pré-visualização foi alterada noutro pedido. Recarregue e tente novamente.",
      RATE_LIMITED:
        "O serviço está ocupado ou o limite temporário foi atingido. Tente mais tarde.",
      HUMAN_VERIFICATION_REQUIRED:
        "Conclua o passo de verificação antes de continuar.",
      RENDER_FAILED:
        "Não foi possível gerar o documento. Pode repetir a conversão.",
      DOWNLOAD_EXPIRED:
        "A transferência temporária expirou. Inicie uma nova conversão.",
      UNAUTHORIZED:
        "A sua sessão anónima expirou. Atualize a página e tente novamente.",
      FORBIDDEN:
        "Esta operação não está disponível para a sessão atual.",
      NOT_FOUND:
        "A conversão temporária não foi encontrada ou expirou.",
      CONFLICT:
        "A conversão ainda não está pronta para esta operação.",
      INTERNAL_ERROR:
        "O serviço de conversão está temporariamente indisponível. Tente novamente.",
    },
  },
  it: {
    submitPending: "Avvio dell’anteprima sicura…",
    runtimeNotice:
      "Il servizio carica l’URL pubblico in un browser isolato. I dati di origine e i file sono temporanei e non vengono conservati come cronologia delle conversioni.",
    errors: {
      INVALID_REQUEST:
        "La richiesta è incompleta o contiene un valore non supportato.",
      INVALID_URL:
        "Inserisci un URL pubblico valido e riprova.",
      UNSUPPORTED_SCHEME: "Sono accettati solo URL HTTPS.",
      PRIVATE_NETWORK_TARGET:
        "Gli indirizzi privati, locali e di infrastruttura sono bloccati.",
      DNS_VALIDATION_FAILED:
        "Non è stato possibile convalidare la destinazione in modo sicuro.",
      REDIRECT_BLOCKED:
        "La pagina ha reindirizzato a una destinazione non consentita.",
      SOURCE_REQUIRES_AUTH:
        "Questa pagina richiede l’accesso. Usa il flusso dell’estensione per la scheda attiva.",
      SOURCE_BLOCKED_AUTOMATION:
        "La fonte non consente l’accesso automatizzato.",
      PAGE_TOO_LARGE:
        "La pagina supera le dimensioni supportate. Prova una fonte più piccola.",
      RESOURCE_LIMIT_EXCEEDED:
        "La pagina ha utilizzato più risorse del limite di elaborazione sicuro.",
      LOAD_TIMEOUT:
        "La pagina non si è stabilizzata entro il tempo di elaborazione.",
      UNSUPPORTED_HTML:
        "L’HTML fornito non può essere elaborato in modo sicuro.",
      PREVIEW_EXPIRED:
        "Questa anteprima temporanea è scaduta. Avvia una nuova conversione.",
      REVISION_CONFLICT:
        "L’anteprima è stata modificata da un’altra richiesta. Ricarica e riprova.",
      RATE_LIMITED:
        "Il servizio è occupato o è stato raggiunto il limite temporaneo. Riprova più tardi.",
      HUMAN_VERIFICATION_REQUIRED:
        "Completa il passaggio di verifica prima di continuare.",
      RENDER_FAILED:
        "Non è stato possibile generare il documento. Puoi ripetere la conversione.",
      DOWNLOAD_EXPIRED:
        "Il download temporaneo è scaduto. Avvia una nuova conversione.",
      UNAUTHORIZED:
        "La sessione anonima è scaduta. Aggiorna la pagina e riprova.",
      FORBIDDEN:
        "Questa operazione non è disponibile per la sessione corrente.",
      NOT_FOUND:
        "La conversione temporanea non è stata trovata oppure è scaduta.",
      CONFLICT:
        "La conversione non è ancora pronta per questa operazione.",
      INTERNAL_ERROR:
        "Il servizio di conversione è temporaneamente non disponibile. Riprova.",
    },
  },
  pl: {
    submitPending: "Uruchamianie bezpiecznego podglądu…",
    runtimeNotice:
      "Usługa pobiera publiczny URL w odizolowanej przeglądarce. Dane źródłowe i pliki są tymczasowe i nie są zachowywane jako historia konwersji.",
    errors: {
      INVALID_REQUEST: "Żądanie jest niepełne lub zawiera nieobsługiwaną wartość.",
      INVALID_URL: "Wprowadź prawidłowy publiczny URL i spróbuj ponownie.",
      UNSUPPORTED_SCHEME: "Akceptowane są tylko adresy URL HTTPS.",
      PRIVATE_NETWORK_TARGET: "Adresy prywatne, lokalne i infrastrukturalne są zablokowane.",
      DNS_VALIDATION_FAILED: "Nie udało się bezpiecznie zweryfikować miejsca docelowego.",
      REDIRECT_BLOCKED: "Strona przekierowała do niedozwolonego miejsca docelowego.",
      SOURCE_REQUIRES_AUTH: "Ta strona wymaga logowania. Użyj rozszerzenia dla aktywnej karty.",
      SOURCE_BLOCKED_AUTOMATION: "Źródło nie zezwala na automatyczny dostęp.",
      PAGE_TOO_LARGE: "Strona przekracza obsługiwany rozmiar. Wybierz mniejsze źródło.",
      RESOURCE_LIMIT_EXCEEDED: "Strona przekroczyła bezpieczny limit zasobów.",
      LOAD_TIMEOUT: "Strona nie ustabilizowała się przed upływem czasu przetwarzania.",
      UNSUPPORTED_HTML: "Dostarczonego HTML nie można bezpiecznie przetworzyć.",
      PREVIEW_EXPIRED: "Ten tymczasowy podgląd wygasł. Rozpocznij nową konwersję.",
      REVISION_CONFLICT: "Podgląd zmienił się w innym żądaniu. Odśwież i spróbuj ponownie.",
      RATE_LIMITED: "Usługa jest zajęta lub osiągnięto limit tymczasowy. Spróbuj później.",
      HUMAN_VERIFICATION_REQUIRED: "Przed kontynuacją ukończ etap weryfikacji.",
      RENDER_FAILED: "Nie udało się wygenerować dokumentu. Możesz ponowić konwersję.",
      DOWNLOAD_EXPIRED: "Tymczasowe pobieranie wygasło. Rozpocznij nową konwersję.",
      UNAUTHORIZED: "Sesja anonimowa wygasła. Odśwież stronę i spróbuj ponownie.",
      FORBIDDEN: "Ta operacja nie jest dostępna w bieżącej sesji.",
      NOT_FOUND: "Nie znaleziono tymczasowej konwersji lub wygasła.",
      CONFLICT: "Konwersja nie jest jeszcze gotowa do tej operacji.",
      INTERNAL_ERROR: "Usługa konwersji jest tymczasowo niedostępna. Spróbuj ponownie.",
    },
  },
  cs: {
    submitPending: "Spouštění bezpečného náhledu…",
    runtimeNotice:
      "Služba načte veřejnou URL v izolovaném prohlížeči. Zdrojová data a soubory jsou dočasné a neukládají se jako historie konverzí.",
    errors: {
      INVALID_REQUEST: "Požadavek je neúplný nebo obsahuje nepodporovanou hodnotu.",
      INVALID_URL: "Zadejte platnou veřejnou URL a zkuste to znovu.",
      UNSUPPORTED_SCHEME: "Přijímány jsou pouze URL s HTTPS.",
      PRIVATE_NETWORK_TARGET: "Soukromé, místní a infrastrukturní adresy jsou blokovány.",
      DNS_VALIDATION_FAILED: "Cíl se nepodařilo bezpečně ověřit.",
      REDIRECT_BLOCKED: "Stránka přesměrovala na nepovolený cíl.",
      SOURCE_REQUIRES_AUTH: "Tato stránka vyžaduje přihlášení. Použijte rozšíření pro aktivní kartu.",
      SOURCE_BLOCKED_AUTOMATION: "Zdroj nepovoluje automatizovaný přístup.",
      PAGE_TOO_LARGE: "Stránka překračuje podporovanou velikost. Zkuste menší zdroj.",
      RESOURCE_LIMIT_EXCEEDED: "Stránka překročila bezpečný limit prostředků.",
      LOAD_TIMEOUT: "Stránka se neustálila před uplynutím času zpracování.",
      UNSUPPORTED_HTML: "Zadaný HTML obsah nelze bezpečně zpracovat.",
      PREVIEW_EXPIRED: "Tento dočasný náhled vypršel. Spusťte novou konverzi.",
      REVISION_CONFLICT: "Náhled se změnil v jiném požadavku. Obnovte jej a zkuste to znovu.",
      RATE_LIMITED: "Služba je zaneprázdněná nebo byl dosažen dočasný limit. Zkuste to později.",
      HUMAN_VERIFICATION_REQUIRED: "Před pokračováním dokončete ověření.",
      RENDER_FAILED: "Dokument se nepodařilo vytvořit. Konverzi můžete zopakovat.",
      DOWNLOAD_EXPIRED: "Dočasné stažení vypršelo. Spusťte novou konverzi.",
      UNAUTHORIZED: "Anonymní relace vypršela. Obnovte stránku a zkuste to znovu.",
      FORBIDDEN: "Tato operace není pro aktuální relaci dostupná.",
      NOT_FOUND: "Dočasná konverze nebyla nalezena nebo vypršela.",
      CONFLICT: "Konverze ještě není pro tuto operaci připravena.",
      INTERNAL_ERROR: "Služba konverze je dočasně nedostupná. Zkuste to znovu.",
    },
  },
  sv: {
    submitPending: "Startar säker förhandsgranskning…",
    runtimeNotice:
      "Tjänsten hämtar den offentliga URL:en i en isolerad webbläsare. Källdata och filer är tillfälliga och sparas inte som konverteringshistorik.",
    errors: {
      INVALID_REQUEST: "Begäran är ofullständig eller innehåller ett värde som inte stöds.",
      INVALID_URL: "Ange en giltig offentlig URL och försök igen.",
      UNSUPPORTED_SCHEME: "Endast HTTPS-URL:er accepteras.",
      PRIVATE_NETWORK_TARGET: "Privata, lokala och infrastrukturella adresser är blockerade.",
      DNS_VALIDATION_FAILED: "Målet kunde inte valideras säkert.",
      REDIRECT_BLOCKED: "Sidan omdirigerade till ett mål som inte är tillåtet.",
      SOURCE_REQUIRES_AUTH: "Sidan kräver inloggning. Använd tillägget för den aktiva fliken.",
      SOURCE_BLOCKED_AUTOMATION: "Källan tillåter inte automatiserad åtkomst.",
      PAGE_TOO_LARGE: "Sidan överskrider storleken som stöds. Prova en mindre källa.",
      RESOURCE_LIMIT_EXCEEDED: "Sidan använde mer resurser än den säkra gränsen.",
      LOAD_TIMEOUT: "Sidan stabiliserades inte innan bearbetningstiden löpte ut.",
      UNSUPPORTED_HTML: "Den angivna HTML-koden kan inte bearbetas säkert.",
      PREVIEW_EXPIRED: "Den tillfälliga förhandsgranskningen har upphört. Starta en ny konvertering.",
      REVISION_CONFLICT: "Förhandsgranskningen ändrades i en annan begäran. Läs in igen och försök.",
      RATE_LIMITED: "Tjänsten är upptagen eller den tillfälliga gränsen har nåtts. Försök senare.",
      HUMAN_VERIFICATION_REQUIRED: "Slutför verifieringen innan du fortsätter.",
      RENDER_FAILED: "Dokumentet kunde inte skapas. Du kan försöka konvertera igen.",
      DOWNLOAD_EXPIRED: "Den tillfälliga hämtningen har upphört. Starta en ny konvertering.",
      UNAUTHORIZED: "Din anonyma session har upphört. Uppdatera sidan och försök igen.",
      FORBIDDEN: "Åtgärden är inte tillgänglig för den aktuella sessionen.",
      NOT_FOUND: "Den tillfälliga konverteringen hittades inte eller har upphört.",
      CONFLICT: "Konverteringen är ännu inte redo för åtgärden.",
      INTERNAL_ERROR: "Konverteringstjänsten är tillfälligt otillgänglig. Försök igen.",
    },
  },
  no: {
    submitPending: "Starter sikker forhåndsvisning…",
    runtimeNotice:
      "Tjenesten henter den offentlige URL-en i en isolert nettleser. Kildedata og filer er midlertidige og lagres ikke som konverteringshistorikk.",
    errors: {
      INVALID_REQUEST: "Forespørselen er ufullstendig eller inneholder en verdi som ikke støttes.",
      INVALID_URL: "Skriv inn en gyldig offentlig URL og prøv igjen.",
      UNSUPPORTED_SCHEME: "Bare HTTPS-URL-er godtas.",
      PRIVATE_NETWORK_TARGET: "Private, lokale og infrastrukturelle adresser er blokkert.",
      DNS_VALIDATION_FAILED: "Målet kunne ikke valideres på en sikker måte.",
      REDIRECT_BLOCKED: "Siden omdirigerte til et mål som ikke er tillatt.",
      SOURCE_REQUIRES_AUTH: "Siden krever pålogging. Bruk utvidelsen for den aktive fanen.",
      SOURCE_BLOCKED_AUTOMATION: "Kilden tillater ikke automatisert tilgang.",
      PAGE_TOO_LARGE: "Siden overskrider støttet størrelse. Prøv en mindre kilde.",
      RESOURCE_LIMIT_EXCEEDED: "Siden brukte mer ressurser enn den sikre grensen.",
      LOAD_TIMEOUT: "Siden stabiliserte seg ikke før behandlingstiden løp ut.",
      UNSUPPORTED_HTML: "Den oppgitte HTML-en kan ikke behandles på en sikker måte.",
      PREVIEW_EXPIRED: "Den midlertidige forhåndsvisningen er utløpt. Start en ny konvertering.",
      REVISION_CONFLICT: "Forhåndsvisningen ble endret i en annen forespørsel. Last inn på nytt og prøv igjen.",
      RATE_LIMITED: "Tjenesten er opptatt eller den midlertidige grensen er nådd. Prøv senere.",
      HUMAN_VERIFICATION_REQUIRED: "Fullfør bekreftelsestrinnet før du fortsetter.",
      RENDER_FAILED: "Dokumentet kunne ikke opprettes. Du kan prøve konverteringen på nytt.",
      DOWNLOAD_EXPIRED: "Den midlertidige nedlastingen er utløpt. Start en ny konvertering.",
      UNAUTHORIZED: "Den anonyme økten er utløpt. Oppdater siden og prøv igjen.",
      FORBIDDEN: "Denne handlingen er ikke tilgjengelig for gjeldende økt.",
      NOT_FOUND: "Den midlertidige konverteringen ble ikke funnet eller er utløpt.",
      CONFLICT: "Konverteringen er ikke klar for denne handlingen ennå.",
      INTERNAL_ERROR: "Konverteringstjenesten er midlertidig utilgjengelig. Prøv igjen.",
    },
  },
  da: {
    submitPending: "Starter sikker forhåndsvisning…",
    runtimeNotice:
      "Tjenesten henter den offentlige URL i en isoleret browser. Kildedata og filer er midlertidige og gemmes ikke som konverteringshistorik.",
    errors: {
      INVALID_REQUEST: "Anmodningen er ufuldstændig eller indeholder en værdi, der ikke understøttes.",
      INVALID_URL: "Indtast en gyldig offentlig URL, og prøv igen.",
      UNSUPPORTED_SCHEME: "Kun HTTPS-URL'er accepteres.",
      PRIVATE_NETWORK_TARGET: "Private, lokale og infrastrukturelle adresser er blokeret.",
      DNS_VALIDATION_FAILED: "Målet kunne ikke valideres på en sikker måde.",
      REDIRECT_BLOCKED: "Siden videresendte til et mål, der ikke er tilladt.",
      SOURCE_REQUIRES_AUTH: "Siden kræver login. Brug udvidelsen til den aktive fane.",
      SOURCE_BLOCKED_AUTOMATION: "Kilden tillader ikke automatiseret adgang.",
      PAGE_TOO_LARGE: "Siden overskrider den understøttede størrelse. Prøv en mindre kilde.",
      RESOURCE_LIMIT_EXCEEDED: "Siden brugte flere ressourcer end den sikre grænse.",
      LOAD_TIMEOUT: "Siden blev ikke stabil, før behandlingstiden udløb.",
      UNSUPPORTED_HTML: "Den angivne HTML kan ikke behandles sikkert.",
      PREVIEW_EXPIRED: "Den midlertidige forhåndsvisning er udløbet. Start en ny konvertering.",
      REVISION_CONFLICT: "Forhåndsvisningen blev ændret i en anden anmodning. Genindlæs, og prøv igen.",
      RATE_LIMITED: "Tjenesten er optaget, eller den midlertidige grænse er nået. Prøv senere.",
      HUMAN_VERIFICATION_REQUIRED: "Fuldfør bekræftelsestrinnet, før du fortsætter.",
      RENDER_FAILED: "Dokumentet kunne ikke oprettes. Du kan prøve konverteringen igen.",
      DOWNLOAD_EXPIRED: "Den midlertidige download er udløbet. Start en ny konvertering.",
      UNAUTHORIZED: "Din anonyme session er udløbet. Opdatér siden, og prøv igen.",
      FORBIDDEN: "Handlingen er ikke tilgængelig for den aktuelle session.",
      NOT_FOUND: "Den midlertidige konvertering blev ikke fundet eller er udløbet.",
      CONFLICT: "Konverteringen er endnu ikke klar til denne handling.",
      INTERNAL_ERROR: "Konverteringstjenesten er midlertidigt utilgængelig. Prøv igen.",
    },
  },
  fi: {
    submitPending: "Käynnistetään turvallista esikatselua…",
    runtimeNotice:
      "Palvelu noutaa julkisen URL-osoitteen eristetyssä selaimessa. Lähdetiedot ja tiedostot ovat väliaikaisia, eikä niitä tallenneta muunnoshistoriaksi.",
    errors: {
      INVALID_REQUEST: "Pyyntö on puutteellinen tai sisältää arvon, jota ei tueta.",
      INVALID_URL: "Anna kelvollinen julkinen URL ja yritä uudelleen.",
      UNSUPPORTED_SCHEME: "Vain HTTPS-URL-osoitteet hyväksytään.",
      PRIVATE_NETWORK_TARGET: "Yksityiset, paikalliset ja infrastruktuurin osoitteet on estetty.",
      DNS_VALIDATION_FAILED: "Kohdetta ei voitu vahvistaa turvallisesti.",
      REDIRECT_BLOCKED: "Sivu uudelleenohjasi kohteeseen, jota ei sallita.",
      SOURCE_REQUIRES_AUTH: "Sivu vaatii kirjautumisen. Käytä aktiivisen välilehden laajennusta.",
      SOURCE_BLOCKED_AUTOMATION: "Lähde ei salli automatisoitua käyttöä.",
      PAGE_TOO_LARGE: "Sivu ylittää tuetun koon. Kokeile pienempää lähdettä.",
      RESOURCE_LIMIT_EXCEEDED: "Sivu käytti enemmän resursseja kuin turvallinen raja sallii.",
      LOAD_TIMEOUT: "Sivu ei vakiintunut käsittelyajan kuluessa.",
      UNSUPPORTED_HTML: "Annettua HTML:ää ei voida käsitellä turvallisesti.",
      PREVIEW_EXPIRED: "Väliaikainen esikatselu on vanhentunut. Aloita uusi muunnos.",
      REVISION_CONFLICT: "Esikatselua muutettiin toisessa pyynnössä. Lataa uudelleen ja yritä uudelleen.",
      RATE_LIMITED: "Palvelu on varattu tai väliaikainen raja on saavutettu. Yritä myöhemmin.",
      HUMAN_VERIFICATION_REQUIRED: "Suorita vahvistusvaihe ennen jatkamista.",
      RENDER_FAILED: "Asiakirjaa ei voitu luoda. Voit yrittää muunnosta uudelleen.",
      DOWNLOAD_EXPIRED: "Väliaikainen lataus on vanhentunut. Aloita uusi muunnos.",
      UNAUTHORIZED: "Anonyymi istuntosi on vanhentunut. Päivitä sivu ja yritä uudelleen.",
      FORBIDDEN: "Toiminto ei ole käytettävissä nykyisessä istunnossa.",
      NOT_FOUND: "Väliaikaista muunnosta ei löytynyt tai se on vanhentunut.",
      CONFLICT: "Muunnos ei ole vielä valmis tähän toimintoon.",
      INTERNAL_ERROR: "Muunnospalvelu ei ole tilapäisesti käytettävissä. Yritä uudelleen.",
    },
  },
  ro: {
    submitPending: "Se pornește previzualizarea sigură…",
    runtimeNotice: "Serviciul preia URL-ul public într-un browser izolat. Datele sursă și fișierele sunt temporare și nu sunt păstrate ca istoric al conversiilor.",
    errors: {
      INVALID_REQUEST: "Solicitarea este incompletă sau conține o valoare neacceptată.",
      INVALID_URL: "Introduceți un URL public valid și încercați din nou.",
      UNSUPPORTED_SCHEME: "Sunt acceptate numai URL-uri HTTPS.",
      PRIVATE_NETWORK_TARGET: "Adresele private, locale și de infrastructură sunt blocate.",
      DNS_VALIDATION_FAILED: "Ținta nu a putut fi validată în siguranță.",
      REDIRECT_BLOCKED: "Pagina a redirecționat către o țintă nepermisă.",
      SOURCE_REQUIRES_AUTH: "Pagina necesită autentificare. Folosiți extensia pentru fila activă.",
      SOURCE_BLOCKED_AUTOMATION: "Sursa nu permite accesul automat.",
      PAGE_TOO_LARGE: "Pagina depășește dimensiunea acceptată. Încercați o sursă mai mică.",
      RESOURCE_LIMIT_EXCEEDED: "Pagina a folosit mai multe resurse decât limita sigură.",
      LOAD_TIMEOUT: "Pagina nu s-a stabilizat înainte de expirarea timpului de procesare.",
      UNSUPPORTED_HTML: "HTML-ul furnizat nu poate fi procesat în siguranță.",
      PREVIEW_EXPIRED: "Previzualizarea temporară a expirat. Începeți o nouă conversie.",
      REVISION_CONFLICT: "Previzualizarea a fost modificată de altă solicitare. Reîncărcați și încercați din nou.",
      RATE_LIMITED: "Serviciul este ocupat sau limita temporară a fost atinsă. Încercați mai târziu.",
      HUMAN_VERIFICATION_REQUIRED: "Finalizați pasul de verificare înainte de a continua.",
      RENDER_FAILED: "Documentul nu a putut fi creat. Puteți încerca din nou conversia.",
      DOWNLOAD_EXPIRED: "Descărcarea temporară a expirat. Începeți o nouă conversie.",
      UNAUTHORIZED: "Sesiunea anonimă a expirat. Reîmprospătați pagina și încercați din nou.",
      FORBIDDEN: "Acțiunea nu este disponibilă pentru sesiunea curentă.",
      NOT_FOUND: "Conversia temporară nu a fost găsită sau a expirat.",
      CONFLICT: "Conversia nu este încă pregătită pentru această acțiune.",
      INTERNAL_ERROR: "Serviciul de conversie este temporar indisponibil. Încercați din nou.",
    },
  },
  hu: {
    submitPending: "Biztonságos előnézet indítása…",
    runtimeNotice: "A szolgáltatás elszigetelt böngészőben tölti be a nyilvános URL-t. A forrásadatok és fájlok ideiglenesek, és nem kerülnek konvertálási előzményként tárolásra.",
    errors: {
      INVALID_REQUEST: "A kérés hiányos vagy nem támogatott értéket tartalmaz.",
      INVALID_URL: "Adjon meg érvényes nyilvános URL-t, és próbálja újra.",
      UNSUPPORTED_SCHEME: "Csak HTTPS URL-ek fogadhatók el.",
      PRIVATE_NETWORK_TARGET: "A privát, helyi és infrastruktúra-címek blokkolva vannak.",
      DNS_VALIDATION_FAILED: "A cél nem volt biztonságosan ellenőrizhető.",
      REDIRECT_BLOCKED: "Az oldal nem engedélyezett célra irányított át.",
      SOURCE_REQUIRES_AUTH: "Az oldal bejelentkezést igényel. Használja a bővítményt az aktív laphoz.",
      SOURCE_BLOCKED_AUTOMATION: "A forrás nem engedélyezi az automatizált hozzáférést.",
      PAGE_TOO_LARGE: "Az oldal meghaladja a támogatott méretet. Próbáljon kisebb forrást.",
      RESOURCE_LIMIT_EXCEEDED: "Az oldal a biztonságos korlátnál több erőforrást használt.",
      LOAD_TIMEOUT: "Az oldal nem stabilizálódott a feldolgozási időn belül.",
      UNSUPPORTED_HTML: "A megadott HTML nem dolgozható fel biztonságosan.",
      PREVIEW_EXPIRED: "Az ideiglenes előnézet lejárt. Indítson új konvertálást.",
      REVISION_CONFLICT: "Az előnézetet egy másik kérés módosította. Töltse újra, és próbálja ismét.",
      RATE_LIMITED: "A szolgáltatás foglalt, vagy elérte az ideiglenes korlátot. Próbálja később.",
      HUMAN_VERIFICATION_REQUIRED: "A folytatás előtt fejezze be az ellenőrzési lépést.",
      RENDER_FAILED: "A dokumentum nem hozható létre. Megpróbálhatja újra a konvertálást.",
      DOWNLOAD_EXPIRED: "Az ideiglenes letöltés lejárt. Indítson új konvertálást.",
      UNAUTHORIZED: "Az anonim munkamenet lejárt. Frissítse az oldalt, és próbálja újra.",
      FORBIDDEN: "A művelet nem érhető el az aktuális munkamenetben.",
      NOT_FOUND: "Az ideiglenes konvertálás nem található vagy lejárt.",
      CONFLICT: "A konvertálás még nem áll készen erre a műveletre.",
      INTERNAL_ERROR: "A konvertálási szolgáltatás átmenetileg nem érhető el. Próbálja újra.",
    },
  },
};

export const getConversionRuntimeCopy = (locale: Locale): RuntimeCopy =>
  runtimeCopy[locale];
