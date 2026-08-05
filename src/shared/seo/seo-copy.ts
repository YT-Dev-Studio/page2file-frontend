import type { Locale } from "@/shared/i18n/locales";

export type SeoCopy = {
  title: string;
  description: string;
};

export type SeoCopyKey =
  | "home"
  | "pdf"
  | "powerpoint"
  | "guide"
  | "preview"
  | "download"
  | "blog"
  | "updates"
  | "changelog"
  | "notFound";

const seoCopy: Record<
  Locale,
  Record<SeoCopyKey, SeoCopy>
> = {
  en: {
    home: {
      title: "Convert webpages to PDF or PowerPoint",
      description:
        "Preview meaningful webpage sections, choose screenshot or editable output, and export a reviewed PDF or PowerPoint sample without creating an account.",
    },
    pdf: {
      title: "Convert one webpage to a reviewed PDF",
      description:
        "Enter a public HTTPS URL, choose screenshot or editable PDF output, and inspect page sections and conversion warnings before downloading a sample.",
    },
    powerpoint: {
      title: "Convert a webpage to PowerPoint slides",
      description:
        "Turn meaningful webpage sections into screenshot or editable 16:9 PowerPoint slides and review every fallback before downloading the sample deck.",
    },
    guide: {
      title: "How to use the Page 2 File Chrome extension",
      description:
        "Follow a step-by-step guide or accessible video transcript to export active webpages and supported AI chats to PDF or PowerPoint.",
    },
    preview: {
      title: "Private conversion preview workspace",
      description:
        "Temporary prototype preview for reviewing pages, slides, preview operations and conversion warnings before creating a static sample file.",
    },
    download: {
      title: "Download a static Page 2 File sample",
      description:
        "Temporary noindex download page for a static PDF or PowerPoint demonstration file that contains no submitted URL or user document content.",
    },
    blog: {
      title: "Practical webpage export guides and notes",
      description:
        "Read practical guides about webpage fidelity, PDF and PowerPoint output, private AI chats, browser messengers and safer HTML conversion.",
    },
    updates: {
      title: "Page 2 File product updates and decisions",
      description:
        "Page 2 File product updates will be published here after the first public release, with concise notes about shipped changes and decisions.",
    },
    changelog: {
      title: "Page 2 File technical prototype changelog",
      description:
        "Review versioned Page 2 File prototype changes for converters, preview operations, localized routes, consent-first analytics and security controls.",
    },
    notFound: {
      title: "Page 2 File page could not be found",
      description:
        "The requested Page 2 File route does not exist. Return to the converter, Chrome extension guide, practical blog or product updates.",
    },
  },
  ru: {
    home: {
      title: "Конвертация веб-страниц в PDF и PowerPoint",
      description:
        "Проверяйте смысловые секции веб-страницы, выбирайте режим скриншотов или редактируемый режим и экспортируйте PDF либо PowerPoint без регистрации.",
    },
    pdf: {
      title: "Конвертация одной веб-страницы в PDF",
      description:
        "Введите общедоступный HTTPS URL, выберите PDF в режиме скриншотов или редактируемом режиме и проверьте секции и предупреждения до скачивания примера.",
    },
    powerpoint: {
      title: "Конвертация веб-страницы в PowerPoint",
      description:
        "Превратите смысловые секции веб-страницы в слайды-скриншоты или редактируемые слайды 16:9 и проверьте каждую замену до скачивания презентации.",
    },
    guide: {
      title: "Как использовать расширение Page 2 File для Chrome",
      description:
        "Следуйте пошаговой инструкции или доступной расшифровке видео, чтобы экспортировать открытые страницы и AI-чаты в PDF или PowerPoint.",
    },
    preview: {
      title: "Закрытая рабочая область предпросмотра",
      description:
        "Временный noindex-предпросмотр страниц, слайдов, локальных операций и предупреждений перед созданием итогового файла.",
    },
    download: {
      title: "Скачивание готового файла Page 2 File",
      description:
        "Временная noindex-страница скачивания готового PDF или PowerPoint после успешной обработки; ссылка относится только к конкретной временной задаче.",
    },
    blog: {
      title: "Руководства по экспорту веб-страниц",
      description:
        "Читайте практические статьи о точности веб-страниц, PDF и PowerPoint, приватных AI-чатах, браузерных мессенджерах и безопасном HTML.",
    },
    updates: {
      title: "Обновления и продуктовые решения Page 2 File",
      description:
        "Обновления продукта Page 2 File появятся здесь после первого публичного релиза с краткими описаниями выпущенных изменений и решений.",
    },
    changelog: {
      title: "Техническая история версий Page 2 File",
      description:
        "Изучайте версии прототипа Page 2 File: конвертеры, операции предпросмотра, локализованные маршруты, consent-first аналитику и защитные меры.",
    },
    notFound: {
      title: "Страница Page 2 File не найдена",
      description:
        "Запрошенный маршрут Page 2 File не существует. Вернитесь к конвертеру, инструкции по расширению, практическому блогу или обновлениям продукта.",
    },
  },
  de: {
    home: {
      title: "Webseiten in PDF oder PowerPoint umwandeln",
      description:
        "Prüfen Sie Webseitenabschnitte, wählen Sie Seitenaufnahmen oder eine bearbeitbare Ausgabe und exportieren Sie PDF oder PowerPoint ohne Konto.",
    },
    pdf: {
      title: "Eine Webseite in ein geprüftes PDF umwandeln",
      description:
        "Geben Sie eine öffentliche HTTPS-URL ein, wählen Sie Seitenaufnahmen oder eine bearbeitbare PDF-Ausgabe und prüfen Sie Abschnitte sowie Warnungen vor dem Download.",
    },
    powerpoint: {
      title: "Eine Webseite in PowerPoint-Folien umwandeln",
      description:
        "Wandeln Sie sinnvolle Webseitenabschnitte in 16:9-PowerPoint-Folien als Seitenaufnahmen oder bearbeitbare Inhalte um und prüfen Sie jede Ersetzung vor dem Download.",
    },
    guide: {
      title: "So verwenden Sie die Page 2 File Chrome-Erweiterung",
      description:
        "Folgen Sie der Schritt-für-Schritt-Anleitung oder dem barrierefreien Videotranskript, um aktive Webseiten und unterstützte AI-Chats in PDF oder PowerPoint zu exportieren.",
    },
    preview: {
      title: "Privater Arbeitsbereich für die Konvertierungsvorschau",
      description:
        "Temporäre Vorschau zum Prüfen von Seiten, Folien, Vorschauaktionen und Konvertierungswarnungen vor der Erstellung einer Beispieldatei.",
    },
    download: {
      title: "Eine Page 2 File Beispieldatei herunterladen",
      description:
        "Temporäre noindex-Downloadseite für eine statische PDF- oder PowerPoint-Demodatei ohne übermittelte URL oder Inhalte aus Benutzerdokumenten.",
    },
    blog: {
      title: "Praktische Anleitungen und Hinweise zum Webseitenexport",
      description:
        "Lesen Sie praktische Anleitungen zu Webseitentreue, PDF- und PowerPoint-Ausgabe, privaten AI-Chats, Browser-Messengern und sicherer HTML-Konvertierung.",
    },
    updates: {
      title: "Page 2 File Produktupdates und Entscheidungen",
      description:
        "Nach der ersten öffentlichen Veröffentlichung erscheinen hier kurze Hinweise zu ausgelieferten Änderungen und Produktentscheidungen.",
    },
    changelog: {
      title: "Technischer Changelog des Page 2 File Prototyps",
      description:
        "Prüfen Sie versionierte Änderungen an Konvertern, Vorschauaktionen, lokalisierten Routen, zustimmungsbasierter Analyse und Sicherheitskontrollen.",
    },
    notFound: {
      title: "Page 2 File Seite nicht gefunden",
      description:
        "Die angeforderte Page 2 File Route existiert nicht. Kehren Sie zum Konverter, zur Erweiterungsanleitung, zum Blog oder zu den Produktupdates zurück.",
    },
  },
  fr: {
    home: {
      title: "Convertir des pages web en PDF ou PowerPoint",
      description:
        "Prévisualisez les sections pertinentes, choisissez des captures de page ou une sortie modifiable, puis exportez un exemple PDF ou PowerPoint vérifié sans créer de compte.",
    },
    pdf: {
      title: "Convertir une page web en PDF vérifié",
      description:
        "Saisissez une URL HTTPS publique, choisissez des captures de page ou une sortie PDF modifiable, puis vérifiez les sections et les avertissements avant le téléchargement.",
    },
    powerpoint: {
      title: "Convertir une page web en diapositives PowerPoint",
      description:
        "Transformez les sections pertinentes d’une page web en diapositives PowerPoint 16:9 sous forme de captures ou d’éléments modifiables, puis vérifiez chaque remplacement.",
    },
    guide: {
      title: "Comment utiliser l’extension Chrome Page 2 File",
      description:
        "Suivez le guide pas à pas ou la transcription vidéo accessible pour exporter les pages actives et les conversations AI prises en charge vers PDF ou PowerPoint.",
    },
    preview: {
      title: "Espace privé de prévisualisation de conversion",
      description:
        "Aperçu temporaire permettant de vérifier les pages, les diapositives, les opérations et les avertissements avant de créer un fichier d’exemple.",
    },
    download: {
      title: "Télécharger un exemple Page 2 File",
      description:
        "Page de téléchargement temporaire noindex pour un fichier de démonstration PDF ou PowerPoint statique, sans URL soumise ni contenu de document utilisateur.",
    },
    blog: {
      title: "Guides pratiques et conseils pour exporter des pages web",
      description:
        "Consultez des guides sur la fidélité des pages, les sorties PDF et PowerPoint, les conversations AI privées, les messageries web et la conversion HTML sécurisée.",
    },
    updates: {
      title: "Mises à jour et décisions produit de Page 2 File",
      description:
        "Après la première version publique, de brèves notes présenteront ici les changements livrés et les décisions produit.",
    },
    changelog: {
      title: "Journal technique du prototype Page 2 File",
      description:
        "Consultez les changements versionnés des convertisseurs, opérations d’aperçu, routes localisées, analyses fondées sur le consentement et contrôles de sécurité.",
    },
    notFound: {
      title: "Page Page 2 File demandée introuvable",
      description:
        "La route Page 2 File demandée n’existe pas. Revenez au convertisseur, au guide de l’extension, au blog pratique ou aux mises à jour du produit.",
    },
  },
  es: {
    home: {
      title: "Convertir páginas web en PDF o PowerPoint",
      description:
        "Previsualice secciones relevantes, elija capturas de página o una salida editable y exporte un PDF o PowerPoint revisado sin crear una cuenta.",
    },
    pdf: {
      title: "Convertir una página web en un PDF revisado",
      description:
        "Introduzca una URL HTTPS pública, elija capturas de página o una salida PDF editable y revise las secciones y advertencias antes de descargar.",
    },
    powerpoint: {
      title: "Convertir una página web en diapositivas de PowerPoint",
      description:
        "Convierta secciones relevantes en diapositivas 16:9 como capturas o elementos editables y revise cada sustitución antes de descargar.",
    },
    guide: {
      title: "Cómo usar la extensión Page 2 File para Chrome",
      description:
        "Siga la guía paso a paso o la transcripción accesible para exportar páginas activas y chats AI compatibles a PDF o PowerPoint.",
    },
    preview: {
      title: "Espacio privado de vista previa de conversión",
      description:
        "Vista previa temporal para revisar páginas, diapositivas, operaciones y advertencias antes de crear un archivo de ejemplo.",
    },
    download: {
      title: "Descargar un archivo de ejemplo de Page 2 File",
      description:
        "Página temporal noindex para descargar un archivo PDF o PowerPoint de demostración sin URL enviada ni contenido de documentos del usuario.",
    },
    blog: {
      title: "Guías prácticas para exportar páginas web",
      description:
        "Lea guías sobre fidelidad de páginas, PDF y PowerPoint, chats AI privados, mensajería web y conversión segura de HTML.",
    },
    updates: {
      title: "Actualizaciones y decisiones de Page 2 File",
      description:
        "Después de la primera versión pública se publicarán aquí notas breves sobre cambios entregados y decisiones del producto.",
    },
    changelog: {
      title: "Registro técnico del prototipo Page 2 File",
      description:
        "Revise cambios versionados de convertidores, operaciones de vista previa, rutas localizadas, analítica basada en consentimiento y controles de seguridad.",
    },
    notFound: {
      title: "No se encontró la página de Page 2 File",
      description:
        "La ruta solicitada no existe. Vuelva al convertidor, a la guía de la extensión, al blog práctico o a las actualizaciones del producto.",
    },
  },
  nl: {
    home: {
      title: "Webpagina's naar PDF of PowerPoint converteren",
      description:
        "Bekijk betekenisvolle secties, kies pagina-opnamen of bewerkbare uitvoer en exporteer een gecontroleerde PDF of PowerPoint zonder account.",
    },
    pdf: {
      title: "Een webpagina naar een gecontroleerde PDF converteren",
      description:
        "Voer een openbare HTTPS-URL in, kies pagina-opnamen of bewerkbare PDF-uitvoer en controleer secties en waarschuwingen vóór het downloaden.",
    },
    powerpoint: {
      title: "Een webpagina naar PowerPoint-dia's converteren",
      description:
        "Zet betekenisvolle secties om in 16:9-dia's als opnamen of bewerkbare elementen en controleer iedere vervanging vóór het downloaden.",
    },
    guide: {
      title: "De Page 2 File Chrome-extensie gebruiken",
      description:
        "Volg de stapsgewijze handleiding of het toegankelijke videotranscript om actieve webpagina's en ondersteunde AI-chats naar PDF of PowerPoint te exporteren.",
    },
    preview: {
      title: "Privéwerkruimte voor conversievoorbeelden",
      description:
        "Tijdelijk voorbeeld om pagina's, dia's, handelingen en waarschuwingen te controleren voordat een voorbeeldbestand wordt gemaakt.",
    },
    download: {
      title: "Een Page 2 File-voorbeeldbestand downloaden",
      description:
        "Tijdelijke noindex-downloadpagina voor een statisch PDF- of PowerPoint-demobestand zonder ingediende URL of gebruikersdocumentinhoud.",
    },
    blog: {
      title: "Praktische gidsen voor webpagina-export",
      description:
        "Lees gidsen over paginanauwkeurigheid, PDF- en PowerPoint-uitvoer, privé-AI-chats, browsermessengers en veilige HTML-conversie.",
    },
    updates: {
      title: "Page 2 File-productupdates en beslissingen",
      description:
        "Na de eerste openbare release verschijnen hier korte notities over geleverde wijzigingen en productbeslissingen.",
    },
    changelog: {
      title: "Technisch wijzigingslogboek van het Page 2 File-prototype",
      description:
        "Bekijk geversioneerde wijzigingen aan converters, voorbeeldhandelingen, gelokaliseerde routes, toestemmingsgerichte analyse en beveiligingsmaatregelen.",
    },
    notFound: {
      title: "Page 2 File-pagina niet gevonden",
      description:
        "De gevraagde route bestaat niet. Ga terug naar de converter, extensiehandleiding, praktische blog of productupdates.",
    },
  },
  pt: {
    home: {
      title: "Converter páginas web em PDF ou PowerPoint",
      description:
        "Pré-visualize secções relevantes, escolha capturas de página ou uma saída editável e exporte um PDF ou PowerPoint revisto sem criar uma conta.",
    },
    pdf: {
      title: "Converter uma página web num PDF revisto",
      description:
        "Introduza um URL HTTPS público, escolha capturas de página ou uma saída PDF editável e reveja as secções e os avisos antes de transferir.",
    },
    powerpoint: {
      title: "Converter uma página web em diapositivos PowerPoint",
      description:
        "Transforme secções relevantes em diapositivos 16:9 como capturas ou elementos editáveis e reveja cada substituição antes de transferir.",
    },
    guide: {
      title: "Como utilizar a extensão Page 2 File para Chrome",
      description:
        "Siga o guia passo a passo ou a transcrição acessível para exportar páginas ativas e conversas AI compatíveis para PDF ou PowerPoint.",
    },
    preview: {
      title: "Área privada de pré-visualização da conversão",
      description:
        "Pré-visualização temporária para rever páginas, diapositivos, operações e avisos antes de criar um ficheiro de exemplo.",
    },
    download: {
      title: "Transferir um ficheiro de exemplo do Page 2 File",
      description:
        "Página temporária noindex para transferir um ficheiro PDF ou PowerPoint de demonstração sem URL enviado nem conteúdo de documentos do utilizador.",
    },
    blog: {
      title: "Guias práticos para exportar páginas web",
      description:
        "Leia guias sobre fidelidade de páginas, PDF e PowerPoint, conversas AI privadas, mensagens no navegador e conversão segura de HTML.",
    },
    updates: {
      title: "Atualizações e decisões do Page 2 File",
      description:
        "Após a primeira versão pública, serão publicadas aqui notas breves sobre alterações entregues e decisões do produto.",
    },
    changelog: {
      title: "Registo técnico do protótipo Page 2 File",
      description:
        "Consulte alterações versionadas dos conversores, operações de pré-visualização, rotas localizadas, analítica baseada em consentimento e controlos de segurança.",
    },
    notFound: {
      title: "Página do Page 2 File não encontrada",
      description:
        "A rota pedida não existe. Volte ao conversor, ao guia da extensão, ao blog prático ou às atualizações do produto.",
    },
  },
  it: {
    home: {
      title: "Convertire pagine web in PDF o PowerPoint",
      description:
        "Visualizza le sezioni, scegli acquisizioni della pagina o un output modificabile ed esporta un PDF o PowerPoint verificato senza creare un account.",
    },
    pdf: {
      title: "Convertire una pagina web in un PDF verificato",
      description:
        "Inserisci un URL HTTPS pubblico, scegli acquisizioni della pagina o un output PDF modificabile e verifica sezioni e avvisi prima del download.",
    },
    powerpoint: {
      title: "Convertire una pagina web in diapositive PowerPoint",
      description:
        "Trasforma le sezioni significative in diapositive 16:9 come acquisizioni o elementi modificabili e verifica ogni sostituzione prima del download.",
    },
    guide: {
      title: "Come usare l’estensione Page 2 File per Chrome",
      description:
        "Segui la guida passo per passo o la trascrizione accessibile per esportare pagine attive e chat AI supportate in PDF o PowerPoint.",
    },
    preview: {
      title: "Area privata per l’anteprima della conversione",
      description:
        "Anteprima temporanea per verificare pagine, diapositive, operazioni e avvisi prima di creare un file di esempio.",
    },
    download: {
      title: "Scaricare un file di esempio di Page 2 File",
      description:
        "Pagina temporanea noindex per scaricare un file demo PDF o PowerPoint senza URL inviato né contenuti dei documenti dell’utente.",
    },
    blog: {
      title: "Guide pratiche per esportare pagine web",
      description:
        "Leggi guide su fedeltà delle pagine, output PDF e PowerPoint, chat AI private, messaggistica web e conversione HTML sicura.",
    },
    updates: {
      title: "Aggiornamenti e decisioni di Page 2 File",
      description:
        "Dopo la prima versione pubblica appariranno qui brevi note sulle modifiche rilasciate e sulle decisioni del prodotto.",
    },
    changelog: {
      title: "Registro tecnico del prototipo Page 2 File",
      description:
        "Consulta le modifiche versionate a convertitori, operazioni di anteprima, percorsi localizzati, analytics basati sul consenso e controlli di sicurezza.",
    },
    notFound: {
      title: "Pagina di Page 2 File non trovata",
      description:
        "Il percorso richiesto non esiste. Torna al convertitore, alla guida dell’estensione, al blog pratico o agli aggiornamenti del prodotto.",
    },
  },
  pl: {
    home: { title: "Konwertuj strony internetowe do PDF lub PowerPoint", description: "Przejrzyj istotne sekcje, wybierz zrzuty strony lub edytowalny wynik i eksportuj sprawdzony PDF lub PowerPoint bez zakładania konta." },
    pdf: { title: "Konwertuj stronę internetową do sprawdzonego PDF", description: "Wprowadź publiczny URL HTTPS, wybierz zrzuty strony lub edytowalny PDF i sprawdź sekcje oraz ostrzeżenia przed pobraniem." },
    powerpoint: { title: "Konwertuj stronę internetową do slajdów PowerPoint", description: "Zamień istotne sekcje w slajdy 16:9 jako zrzuty lub edytowalne elementy i sprawdź każde zastąpienie przed pobraniem." },
    guide: { title: "Jak używać rozszerzenia Page 2 File do Chrome", description: "Skorzystaj z instrukcji krok po kroku lub dostępnej transkrypcji, aby eksportować aktywne strony i obsługiwane czaty AI do PDF lub PowerPoint." },
    preview: { title: "Prywatny obszar podglądu konwersji", description: "Tymczasowy podgląd do sprawdzania stron, slajdów, operacji i ostrzeżeń przed utworzeniem przykładowego pliku." },
    download: { title: "Pobierz przykładowy plik Page 2 File", description: "Tymczasowa strona noindex do pobrania demonstracyjnego PDF lub PowerPoint bez przesłanego URL ani treści dokumentów użytkownika." },
    blog: { title: "Praktyczne poradniki eksportowania stron internetowych", description: "Czytaj poradniki o wierności stron, PDF i PowerPoint, prywatnych czatach AI, komunikatorach internetowych i bezpiecznej konwersji HTML." },
    updates: { title: "Aktualizacje i decyzje dotyczące Page 2 File", description: "Po pierwszym publicznym wydaniu pojawią się tutaj krótkie informacje o wdrożonych zmianach i decyzjach produktowych." },
    changelog: { title: "Techniczny dziennik prototypu Page 2 File", description: "Sprawdź wersjonowane zmiany konwerterów, operacji podglądu, tras językowych, analityki opartej na zgodzie i zabezpieczeń." },
    notFound: { title: "Nie znaleziono strony Page 2 File", description: "Żądana trasa nie istnieje. Wróć do konwertera, instrukcji rozszerzenia, praktycznego bloga lub aktualizacji produktu." },
  },
  cs: {
    home: { title: "Převádějte webové stránky do PDF nebo PowerPointu", description: "Prohlédněte si významné části, zvolte snímky stránky nebo upravitelný výstup a exportujte zkontrolované PDF či PowerPoint bez účtu." },
    pdf: { title: "Převeďte webovou stránku do zkontrolovaného PDF", description: "Zadejte veřejnou URL s HTTPS, zvolte snímky stránky nebo upravitelné PDF a před stažením zkontrolujte části a upozornění." },
    powerpoint: { title: "Převeďte webovou stránku na snímky PowerPointu", description: "Převeďte významné části na snímky 16:9 jako obrázky nebo upravitelné prvky a před stažením zkontrolujte každou náhradu." },
    guide: { title: "Jak používat rozšíření Page 2 File pro Chrome", description: "Podle podrobného návodu nebo přístupného přepisu exportujte aktivní stránky a podporované AI chaty do PDF nebo PowerPointu." },
    preview: { title: "Soukromý prostor náhledu konverze", description: "Dočasný náhled pro kontrolu stránek, snímků, operací a upozornění před vytvořením ukázkového souboru." },
    download: { title: "Stáhnout ukázkový soubor Page 2 File", description: "Dočasná noindex stránka pro stažení ukázkového PDF nebo PowerPointu bez odeslané URL či obsahu dokumentů uživatele." },
    blog: { title: "Praktické návody k exportu webových stránek", description: "Čtěte návody o věrnosti stránek, PDF a PowerPointu, soukromých AI chatech, webových komunikátorech a bezpečné konverzi HTML." },
    updates: { title: "Aktualizace a rozhodnutí Page 2 File", description: "Po prvním veřejném vydání se zde objeví stručné poznámky o nasazených změnách a produktových rozhodnutích." },
    changelog: { title: "Technický přehled prototypu Page 2 File", description: "Prohlédněte si verzované změny konvertorů, operací náhledu, lokalizovaných tras, analytiky se souhlasem a bezpečnostních kontrol." },
    notFound: { title: "Stránka Page 2 File nebyla nalezena", description: "Požadovaná trasa neexistuje. Vraťte se ke konvertoru, návodu k rozšíření, praktickému blogu nebo aktualizacím produktu." },
  },
  sv: {
    home: { title: "Konvertera webbsidor till PDF eller PowerPoint", description: "Granska meningsfulla avsnitt, välj sidbilder eller redigerbar utdata och exportera en kontrollerad PDF eller PowerPoint utan konto." },
    pdf: { title: "Konvertera en webbsida till en granskad PDF", description: "Ange en offentlig HTTPS-URL, välj sidbilder eller redigerbar PDF-utdata och granska avsnitt och varningar före hämtning." },
    powerpoint: { title: "Konvertera en webbsida till PowerPoint-bilder", description: "Omvandla meningsfulla avsnitt till 16:9-bilder som sidbilder eller redigerbara element och granska varje ersättning före hämtning." },
    guide: { title: "Så använder du Chrome-tillägget Page 2 File", description: "Följ den stegvisa guiden eller den tillgängliga transkriberingen för att exportera aktiva sidor och AI-chattar som stöds till PDF eller PowerPoint." },
    preview: { title: "Privat arbetsyta för konverteringsförhandsgranskning", description: "Tillfällig förhandsgranskning för kontroll av sidor, bilder, åtgärder och varningar innan en exempelfil skapas." },
    download: { title: "Hämta en exempelfil från Page 2 File", description: "Tillfällig noindex-sida för hämtning av en demo-PDF eller PowerPoint utan inskickad URL eller användarens dokumentinnehåll." },
    blog: { title: "Praktiska guider för export av webbsidor", description: "Läs guider om sidtrohet, PDF och PowerPoint, privata AI-chattar, webbmeddelanden och säker HTML-konvertering." },
    updates: { title: "Uppdateringar och beslut för Page 2 File", description: "Efter den första offentliga versionen visas korta notiser om levererade ändringar och produktbeslut här." },
    changelog: { title: "Teknisk ändringslogg för prototypen Page 2 File", description: "Granska versionsindelade ändringar i konverterare, förhandsgranskning, lokaliserade rutter, samtyckesbaserad analys och säkerhetskontroller." },
    notFound: { title: "Page 2 File-sidan hittades inte", description: "Den begärda rutten finns inte. Gå tillbaka till konverteraren, guiden för tillägget, bloggen eller produktuppdateringarna." },
  },
  no: {
    home: { title: "Konverter nettsider til PDF eller PowerPoint", description: "Kontroller meningsfulle deler, velg sidebilder eller redigerbar utdata og eksporter en gjennomgått PDF eller PowerPoint uten konto." },
    pdf: { title: "Konverter en nettside til en gjennomgått PDF", description: "Skriv inn en offentlig HTTPS-URL, velg sidebilder eller redigerbar PDF-utdata og kontroller deler og varsler før nedlasting." },
    powerpoint: { title: "Konverter en nettside til PowerPoint-lysbilder", description: "Gjør meningsfulle deler om til 16:9-lysbilder som sidebilder eller redigerbare elementer, og kontroller hver erstatning før nedlasting." },
    guide: { title: "Slik bruker du Page 2 File-utvidelsen for Chrome", description: "Følg den trinnvise veiledningen eller den tilgjengelige transkripsjonen for å eksportere aktive sider og støttede AI-chatter til PDF eller PowerPoint." },
    preview: { title: "Privat arbeidsområde for konverteringsforhåndsvisning", description: "Midlertidig forhåndsvisning for kontroll av sider, lysbilder, handlinger og varsler før en eksempelfil opprettes." },
    download: { title: "Last ned en eksempelfil fra Page 2 File", description: "Midlertidig noindex-side for nedlasting av en demo-PDF eller PowerPoint uten innsendt URL eller brukerens dokumentinnhold." },
    blog: { title: "Praktiske veiledninger for eksport av nettsider", description: "Les veiledninger om sidegjengivelse, PDF og PowerPoint, private AI-chatter, nettmeldinger og sikker HTML-konvertering." },
    updates: { title: "Oppdateringer og beslutninger for Page 2 File", description: "Etter den første offentlige utgivelsen vises korte notater om leverte endringer og produktbeslutninger her." },
    changelog: { title: "Teknisk endringslogg for Page 2 File-prototypen", description: "Se versjonerte endringer i konverterere, forhåndsvisning, lokaliserte ruter, samtykkebasert analyse og sikkerhetskontroller." },
    notFound: { title: "Page 2 File-siden ble ikke funnet", description: "Den forespurte ruten finnes ikke. Gå tilbake til konvertereren, veiledningen for utvidelsen, bloggen eller produktoppdateringene." },
  },
  da: {
    home: { title: "Konvertér websider til PDF eller PowerPoint", description: "Kontrollér meningsfulde afsnit, vælg sidebilleder eller redigerbart output, og eksportér en gennemgået PDF eller PowerPoint uden en konto." },
    pdf: { title: "Konvertér en webside til en gennemgået PDF", description: "Indtast en offentlig HTTPS-URL, vælg sidebilleder eller redigerbart PDF-output, og kontrollér afsnit og advarsler før download." },
    powerpoint: { title: "Konvertér en webside til PowerPoint-dias", description: "Omdan meningsfulde afsnit til 16:9-dias som sidebilleder eller redigerbare elementer, og kontrollér hver erstatning før download." },
    guide: { title: "Sådan bruger du Page 2 File-udvidelsen til Chrome", description: "Følg trin-for-trin-vejledningen eller den tilgængelige transskription for at eksportere aktive sider og understøttede AI-chats til PDF eller PowerPoint." },
    preview: { title: "Privat arbejdsområde til konverteringsforhåndsvisning", description: "Midlertidig forhåndsvisning til kontrol af sider, dias, handlinger og advarsler, før der oprettes en eksempelfil." },
    download: { title: "Download en eksempelfil fra Page 2 File", description: "Midlertidig noindex-side til download af en demo-PDF eller PowerPoint uden indsendt URL eller indhold fra brugerens dokumenter." },
    blog: { title: "Praktiske vejledninger til eksport af websider", description: "Læs vejledninger om sidegengivelse, PDF og PowerPoint, private AI-chats, webbeskeder og sikker HTML-konvertering." },
    updates: { title: "Opdateringer og beslutninger for Page 2 File", description: "Efter den første offentlige udgivelse vises korte noter om leverede ændringer og produktbeslutninger her." },
    changelog: { title: "Teknisk ændringslog for Page 2 File-prototypen", description: "Se versionsopdelte ændringer i konvertere, forhåndsvisning, lokaliserede ruter, samtykkebaseret analyse og sikkerhedskontroller." },
    notFound: { title: "Page 2 File-siden blev ikke fundet", description: "Den ønskede rute findes ikke. Gå tilbage til konverteren, vejledningen til udvidelsen, bloggen eller produktopdateringerne." },
  },
  fi: {
    home: { title: "Muunna verkkosivuja PDF- tai PowerPoint-tiedostoiksi", description: "Tarkista merkitykselliset osiot, valitse sivukaappaukset tai muokattava tulos ja vie tarkistettu PDF tai PowerPoint ilman tiliä." },
    pdf: { title: "Muunna verkkosivu tarkistetuksi PDF-tiedostoksi", description: "Anna julkinen HTTPS-URL, valitse sivukaappaukset tai muokattava PDF-tulos ja tarkista osiot sekä varoitukset ennen lataamista." },
    powerpoint: { title: "Muunna verkkosivu PowerPoint-dioiksi", description: "Muunna merkitykselliset osiot 16:9-dioiksi sivukaappauksina tai muokattavina elementteinä ja tarkista jokainen korvaus ennen lataamista." },
    guide: { title: "Page 2 File Chrome-laajennuksen käyttö", description: "Vie aktiivisia sivuja ja tuettuja AI-keskusteluja PDF- tai PowerPoint-tiedostoiksi vaiheittaisen oppaan tai saavutettavan tekstiversion avulla." },
    preview: { title: "Yksityinen muunnoksen esikatselutyötila", description: "Väliaikainen esikatselu sivujen, diojen, toimintojen ja varoitusten tarkistamiseen ennen esimerkkitiedoston luomista." },
    download: { title: "Lataa Page 2 File -esimerkkitiedosto", description: "Väliaikainen noindex-sivu PDF- tai PowerPoint-esimerkin lataamiseen ilman lähetettyä URL-osoitetta tai käyttäjän asiakirjasisältöä." },
    blog: { title: "Käytännön oppaat verkkosivujen vientiin", description: "Lue oppaita sivun tarkkuudesta, PDF- ja PowerPoint-tuloksista, yksityisistä AI-keskusteluista, verkkoviestinnästä ja turvallisesta HTML-muunnoksesta." },
    updates: { title: "Page 2 File -päivitykset ja päätökset", description: "Ensimmäisen julkisen version jälkeen täällä näkyvät lyhyet tiedot toteutetuista muutoksista ja tuotepäätöksistä." },
    changelog: { title: "Page 2 File -prototyypin tekninen muutosloki", description: "Tarkista versioidut muutokset muuntimiin, esikatseluun, lokalisoituihin reitteihin, suostumukseen perustuvaan analytiikkaan ja suojaustoimiin." },
    notFound: { title: "Page 2 File -sivua ei löytynyt", description: "Pyydettyä reittiä ei ole. Palaa verkkosivumuuntimeen, laajennuksen käyttöoppaaseen, käytännön blogiin tai tuotepäivityksiin." },
  },
  ro: {
    home: { title: "Convertiți pagini web în PDF sau PowerPoint", description: "Verificați secțiunile relevante, alegeți instantanee ale paginii sau ieșire editabilă și exportați un PDF sau PowerPoint verificat fără cont." },
    pdf: { title: "Convertiți o pagină web într-un PDF verificat", description: "Introduceți un URL HTTPS public, alegeți instantanee ale paginii sau ieșire PDF editabilă și verificați secțiunile și avertismentele înainte de descărcare." },
    powerpoint: { title: "Convertiți o pagină web în diapozitive PowerPoint", description: "Transformați secțiunile relevante în diapozitive 16:9 ca instantanee sau elemente editabile și verificați fiecare înlocuire înainte de descărcare." },
    guide: { title: "Cum se folosește extensia Page 2 File pentru Chrome", description: "Urmați ghidul pas cu pas sau transcrierea accesibilă pentru a exporta pagini active și conversații AI acceptate în PDF sau PowerPoint." },
    preview: { title: "Spațiu privat pentru previzualizarea conversiei", description: "Previzualizare temporară pentru verificarea paginilor, diapozitivelor, operațiilor și avertismentelor înainte de crearea unui fișier demonstrativ." },
    download: { title: "Descărcați un fișier demonstrativ Page 2 File", description: "Pagină temporară noindex pentru descărcarea unui PDF sau PowerPoint demonstrativ fără URL trimis sau conținut din documentele utilizatorului." },
    blog: { title: "Ghiduri practice pentru exportarea paginilor web", description: "Citiți ghiduri despre fidelitatea paginilor, PDF și PowerPoint, conversații AI private, mesagerie web și conversie HTML sigură." },
    updates: { title: "Actualizări și decizii Page 2 File", description: "După prima lansare publică, aici vor apărea note scurte despre modificările livrate și deciziile de produs." },
    changelog: { title: "Jurnal tehnic pentru prototipul Page 2 File", description: "Consultați modificările versionate ale convertoarelor, previzualizării, rutelor localizate, analiticii bazate pe consimțământ și controalelor de securitate." },
    notFound: { title: "Pagina Page 2 File nu a fost găsită", description: "Ruta solicitată nu există. Reveniți la convertorul pentru pagini web, ghidul extensiei, blogul practic sau actualizările produsului." },
  },
  hu: {
    home: { title: "Weboldalak konvertálása PDF-be vagy PowerPointba", description: "Ellenőrizze a lényeges szakaszokat, válasszon oldal-pillanatképeket vagy szerkeszthető kimenetet, és exportáljon ellenőrzött PDF-et vagy PowerPointot fiók nélkül." },
    pdf: { title: "Weboldal konvertálása ellenőrzött PDF-be", description: "Adjon meg egy nyilvános HTTPS URL-t, válasszon oldal-pillanatképeket vagy szerkeszthető PDF-kimenetet, és letöltés előtt ellenőrizze a szakaszokat és figyelmeztetéseket." },
    powerpoint: { title: "Weboldal konvertálása PowerPoint-diákká", description: "Alakítsa a lényeges szakaszokat 16:9-es diákká pillanatképként vagy szerkeszthető elemként, és letöltés előtt ellenőrizzen minden helyettesítést." },
    guide: { title: "A Page 2 File Chrome-bővítmény használata", description: "Kövesse a lépésenkénti útmutatót vagy az akadálymentes átiratot az aktív oldalak és támogatott AI-csevegések PDF- vagy PowerPoint-exportálásához." },
    preview: { title: "Privát munkaterület a konvertálás előnézetéhez", description: "Ideiglenes előnézet oldalak, diák, műveletek és figyelmeztetések ellenőrzéséhez a mintafájl létrehozása előtt." },
    download: { title: "Page 2 File mintafájl letöltése", description: "Ideiglenes noindex oldal minta PDF vagy PowerPoint letöltéséhez beküldött URL és felhasználói dokumentumtartalom nélkül." },
    blog: { title: "Gyakorlati útmutatók weboldalak exportálásához", description: "Olvasson útmutatókat oldalhűségről, PDF- és PowerPoint-kimenetről, privát AI-csevegésekről, webes üzenetküldésről és biztonságos HTML-konvertálásról." },
    updates: { title: "Page 2 File frissítések és döntések", description: "Az első nyilvános kiadás után itt jelennek meg rövid megjegyzések a kiadott változásokról és termékdöntésekről." },
    changelog: { title: "A Page 2 File prototípus műszaki változásnaplója", description: "Tekintse át a konverterek, előnézeti műveletek, lokalizált útvonalak, hozzájárulás-alapú analitika és biztonsági vezérlők verziózott változásait." },
    notFound: { title: "A Page 2 File oldal nem található", description: "A kért útvonal nem létezik. Térjen vissza a weboldal-konverterhez, a bővítmény útmutatójához, a gyakorlati bloghoz vagy a termékfrissítésekhez." },
  },
};

export const getSeoCopy = (locale: Locale, key: SeoCopyKey): SeoCopy =>
  seoCopy[locale][key];
