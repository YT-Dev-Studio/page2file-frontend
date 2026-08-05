import type { ConversionFormat } from "@/entities/conversion/model";
import type { Locale } from "@/shared/i18n/locales";
import type { UrlValidationCode } from "./url-validation";

type FormatPageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  asideTitle: string;
};

type ConverterCopy = {
  formats: Record<ConversionFormat, FormatPageCopy>;
  sourceTitle: string;
  sourceHint: string;
  reviewTitle: string;
  relatedArticlesLabel: string;
  extensionTitle: string;
  extensionBody: string;
  visualText: string;
  editableTitle: string;
  editableText: string;
  warningsText: string;
  privateQuestion: string;
  extensionLink: string;
  modeLegend: string;
  submit: Record<ConversionFormat, string>;
  validation: Record<UrlValidationCode, string>;
};

const converterCopy: Record<
  Locale,
  ConverterCopy
> = {
  en: {
    formats: {
      pdf: {
        eyebrow: "Public URL → PDF",
        title: "Convert one webpage to PDF",
        lead:
          "Validate a public URL, choose a fidelity contract and review every page before the sample download.",
        asideTitle: "Preview before pagination",
      },
      pptx: {
        eyebrow: "Public URL → 16:9 slides",
        title: "Convert a webpage to PowerPoint",
        lead:
          "Map meaningful webpage sections to slides, choose screenshot or editable output and inspect every fallback.",
        asideTitle: "Preview before the deck",
      },
    },
    sourceTitle: "Set the source and output",
    sourceHint:
      "Start with one public URL. Review the generated structure before final rendering.",
    reviewTitle: "What you can verify",
    relatedArticlesLabel: "Related articles",
    extensionTitle: "Need the page as it appears after sign-in?",
    extensionBody:
      "Capture the current signed-in tab with the extension, then review the result before downloading.",
    visualText: "Highest layout fidelity through section images.",
    editableTitle: "Editable mode",
    editableText:
      "Supported text and links remain editable and clickable.",
    warningsText:
      "Fonts, canvas, media and unsafe links show their fallback before download.",
    privateQuestion: "Signed-in or private page?",
    extensionLink: "Use the extension workflow",
    modeLegend: "Conversion mode",
    submit: {
      pdf: "Generate PDF preview",
      pptx: "Generate PowerPoint preview",
    },
    validation: {
      empty: "Enter a URL.",
      tooLong: "The URL is too long.",
      malformed: "Enter a valid URL starting with http:// or https://.",
      insecure: "Enter a valid URL starting with http:// or https://.",
      credentials: "URLs containing credentials are not accepted.",
      blockedHost: "Private, local and metadata hosts are blocked.",
    },
  },
  ru: {
    formats: {
      pdf: {
        eyebrow: "Открытый URL → PDF",
        title: "Конвертируйте одну веб-страницу в PDF",
        lead:
          "Проверьте общедоступный URL, выберите режим точности и просмотрите каждую страницу перед скачиванием примера.",
        asideTitle: "Предпросмотр до разбиения на страницы",
      },
      pptx: {
        eyebrow: "Открытый URL → слайды 16:9",
        title: "Конвертируйте веб-страницу в PowerPoint",
        lead:
          "Превратите значимые секции веб-страницы в слайды, выберите режим скриншотов или редактируемый результат и проверьте каждую замену.",
        asideTitle: "Предпросмотр до создания презентации",
      },
    },
    sourceTitle: "Укажите источник и формат",
    sourceHint:
      "Начните с одного общедоступного URL. Проверьте структуру результата до финального рендеринга.",
    reviewTitle: "Что можно проверить",
    relatedArticlesLabel: "Статьи по теме",
    extensionTitle: "Нужна страница в том виде, как она выглядит после входа?",
    extensionBody:
      "Сохраните текущую вкладку через расширение Chrome и проверьте результат перед скачиванием.",
    visualText: "Максимальная точность макета благодаря изображениям секций.",
    editableTitle: "Редактируемый режим",
    editableText:
      "Поддерживаемые текст и ссылки остаются редактируемыми и кликабельными.",
    warningsText:
      "Замены шрифтов, canvas, медиа и небезопасных ссылок видны до скачивания.",
    privateQuestion: "Страница закрыта или требует входа?",
    extensionLink: "Используйте расширение",
    modeLegend: "Режим конвертации",
    submit: {
      pdf: "Создать предпросмотр PDF",
      pptx: "Создать предпросмотр PowerPoint",
    },
    validation: {
      empty: "Введите URL.",
      tooLong: "URL слишком длинный.",
      malformed:
        "Введите корректный URL, начинающийся с http:// или https://.",
      insecure:
        "Введите корректный URL, начинающийся с http:// или https://.",
      credentials: "URL с логином или паролем не принимаются.",
      blockedHost:
        "Локальные, частные и служебные адреса заблокированы.",
    },
  },
  de: {
    formats: {
      pdf: {
        eyebrow: "Öffentliche URL → PDF",
        title: "Eine Webseite in PDF umwandeln",
        lead:
          "Prüfen Sie eine öffentliche URL, wählen Sie den gewünschten Ausgabemodus und kontrollieren Sie jede Seite vor dem Beispieldownload.",
        asideTitle: "Vorschau vor der Seiteneinteilung",
      },
      pptx: {
        eyebrow: "Öffentliche URL → 16:9-Folien",
        title: "Eine Webseite in PowerPoint umwandeln",
        lead:
          "Ordnen Sie aussagekräftige Webseitenabschnitte Folien zu, wählen Sie eine originalgetreue oder bearbeitbare Ausgabe und prüfen Sie alle Ersatzdarstellungen.",
        asideTitle: "Vorschau vor der Präsentation",
      },
    },
    sourceTitle: "Quelle und Ausgabe festlegen",
    sourceHint:
      "Beginnen Sie mit einer öffentlichen URL. Prüfen Sie die erzeugte Struktur vor der endgültigen Ausgabe.",
    reviewTitle: "Was Sie prüfen können",
    relatedArticlesLabel: "Verwandte Artikel",
    extensionTitle:
      "Benötigen Sie die Seite so, wie sie nach der Anmeldung erscheint?",
    extensionBody:
      "Erfassen Sie den aktuell angemeldeten Tab mit der Erweiterung und prüfen Sie das Ergebnis vor dem Herunterladen.",
    visualText:
      "Höchste Layouttreue durch Bilder der einzelnen Abschnitte.",
    editableTitle: "Bearbeitbares Dokument",
    editableText:
      "Unterstützte Texte und Links bleiben bearbeitbar und anklickbar.",
    warningsText:
      "Ersetzte Schriftarten, Canvas-Inhalte, Medien und unsichere Links werden vor dem Download angezeigt.",
    privateQuestion: "Angemeldete oder private Seite?",
    extensionLink: "Erweiterungsablauf verwenden",
    modeLegend: "Konvertierungsmodus",
    submit: {
      pdf: "PDF-Vorschau erstellen",
      pptx: "PowerPoint-Vorschau erstellen",
    },
    validation: {
      empty: "Geben Sie eine URL ein.",
      tooLong: "Die URL ist zu lang.",
      malformed:
        "Geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.",
      insecure:
        "Geben Sie eine gültige URL ein, die mit http:// oder https:// beginnt.",
      credentials: "URLs mit Zugangsdaten werden nicht akzeptiert.",
      blockedHost:
        "Private, lokale und interne Infrastrukturadressen sind gesperrt.",
    },
  },
  fr: {
    formats: {
      pdf: {
        eyebrow: "URL publique → PDF",
        title: "Convertir une page web en PDF",
        lead:
          "Validez une URL publique, choisissez le mode de sortie et vérifiez chaque page avant de télécharger l’exemple.",
        asideTitle: "Aperçu avant la pagination",
      },
      pptx: {
        eyebrow: "URL publique → diapositives 16:9",
        title: "Convertir une page web en PowerPoint",
        lead:
          "Associez les sections pertinentes de la page aux diapositives, choisissez une sortie fidèle ou modifiable et examinez chaque remplacement.",
        asideTitle: "Aperçu avant la présentation",
      },
    },
    sourceTitle: "Définir la source et le résultat",
    sourceHint:
      "Commencez avec une URL publique. Vérifiez la structure générée avant le rendu final.",
    reviewTitle: "Ce que vous pouvez vérifier",
    relatedArticlesLabel: "Articles associés",
    extensionTitle:
      "Besoin de la page telle qu’elle apparaît après connexion ?",
    extensionBody:
      "Capturez l’onglet connecté avec l’extension, puis vérifiez le résultat avant de le télécharger.",
    visualText:
      "Fidélité maximale de la mise en page grâce aux images des sections.",
    editableTitle: "Document modifiable",
    editableText:
      "Les textes et liens pris en charge restent modifiables et cliquables.",
    warningsText:
      "Les substitutions de polices, les canvas, les médias et les liens non sûrs sont signalés avant le téléchargement.",
    privateQuestion: "Page privée ou nécessitant une connexion ?",
    extensionLink: "Utiliser le processus de l’extension",
    modeLegend: "Mode de conversion",
    submit: {
      pdf: "Générer l’aperçu PDF",
      pptx: "Générer l’aperçu PowerPoint",
    },
    validation: {
      empty: "Saisissez une URL.",
      tooLong: "L’URL est trop longue.",
      malformed:
        "Saisissez une URL valide commençant par http:// ou https://.",
      insecure:
        "Saisissez une URL valide commençant par http:// ou https://.",
      credentials:
        "Les URL contenant des identifiants ne sont pas acceptées.",
      blockedHost:
        "Les adresses privées, locales et d’infrastructure sont bloquées.",
    },
  },
  es: {
    formats: {
      pdf: {
        eyebrow: "URL pública → PDF",
        title: "Convierta una página web en PDF",
        lead:
          "Valide una URL pública, elija el modo de salida y revise cada página antes de descargar el ejemplo.",
        asideTitle: "Vista previa antes de la paginación",
      },
      pptx: {
        eyebrow: "URL pública → diapositivas 16:9",
        title: "Convierta una página web en PowerPoint",
        lead:
          "Asigne secciones relevantes de la página a diapositivas, elija una salida fiel o editable y revise cada sustitución.",
        asideTitle: "Vista previa antes de la presentación",
      },
    },
    sourceTitle: "Defina la fuente y el resultado",
    sourceHint:
      "Empiece con una URL pública. Revise la estructura generada antes del renderizado final.",
    reviewTitle: "Qué puede verificar",
    relatedArticlesLabel: "Artículos relacionados",
    extensionTitle:
      "¿Necesita la página tal como aparece después de iniciar sesión?",
    extensionBody:
      "Capture la pestaña con sesión iniciada mediante la extensión y revise el resultado antes de descargarlo.",
    visualText:
      "Máxima fidelidad del diseño mediante imágenes de las secciones.",
    editableTitle: "Documento editable",
    editableText:
      "El texto y los enlaces compatibles permanecen editables y accesibles.",
    warningsText:
      "Las sustituciones de fuentes, canvas, medios y enlaces no seguros se muestran antes de la descarga.",
    privateQuestion: "¿Página privada o con inicio de sesión?",
    extensionLink: "Usar el flujo de la extensión",
    modeLegend: "Modo de conversión",
    submit: {
      pdf: "Generar vista previa PDF",
      pptx: "Generar vista previa de PowerPoint",
    },
    validation: {
      empty: "Introduzca una URL.",
      tooLong: "La URL es demasiado larga.",
      malformed:
        "Introduzca una URL válida que empiece por http:// o https://.",
      insecure:
        "Introduzca una URL válida que empiece por http:// o https://.",
      credentials: "No se aceptan URL que contengan credenciales.",
      blockedHost:
        "Las direcciones privadas, locales y de infraestructura están bloqueadas.",
    },
  },
  nl: {
    formats: {
      pdf: {
        eyebrow: "Openbare URL → PDF",
        title: "Een webpagina naar PDF converteren",
        lead:
          "Valideer een openbare URL, kies de uitvoermodus en controleer iedere pagina voordat u het voorbeeld downloadt.",
        asideTitle: "Voorbeeld vóór paginering",
      },
      pptx: {
        eyebrow: "Openbare URL → 16:9-dia's",
        title: "Een webpagina naar PowerPoint converteren",
        lead:
          "Wijs betekenisvolle webpaginasecties aan dia's toe, kies een getrouwe of bewerkbare uitvoer en controleer iedere vervanging.",
        asideTitle: "Voorbeeld vóór de presentatie",
      },
    },
    sourceTitle: "Bron en uitvoer instellen",
    sourceHint:
      "Begin met één openbare URL. Controleer de gegenereerde structuur vóór de definitieve weergave.",
    reviewTitle: "Wat u kunt controleren",
    relatedArticlesLabel: "Gerelateerde artikelen",
    extensionTitle:
      "Hebt u de pagina nodig zoals die na het aanmelden verschijnt?",
    extensionBody:
      "Leg het aangemelde tabblad vast met de extensie en controleer het resultaat vóór het downloaden.",
    visualText:
      "De hoogste lay-outnauwkeurigheid door afbeeldingen van de secties.",
    editableTitle: "Bewerkbaar document",
    editableText:
      "Ondersteunde tekst en links blijven bewerkbaar en aanklikbaar.",
    warningsText:
      "Vervangen lettertypen, canvasinhoud, media en onveilige links worden vóór het downloaden weergegeven.",
    privateQuestion: "Aangemelde of privépagina?",
    extensionLink: "Extensieworkflow gebruiken",
    modeLegend: "Conversiemodus",
    submit: {
      pdf: "PDF-voorbeeld genereren",
      pptx: "PowerPoint-voorbeeld genereren",
    },
    validation: {
      empty: "Voer een URL in.",
      tooLong: "De URL is te lang.",
      malformed:
        "Voer een geldige URL in die begint met http:// of https://.",
      insecure:
        "Voer een geldige URL in die begint met http:// of https://.",
      credentials: "URL's met aanmeldgegevens worden niet geaccepteerd.",
      blockedHost:
        "Privé-, lokale en infrastructuuradressen zijn geblokkeerd.",
    },
  },
  pt: {
    formats: {
      pdf: {
        eyebrow: "URL público → PDF",
        title: "Converta uma página web em PDF",
        lead:
          "Valide um URL público, escolha o modo de saída e reveja cada página antes de transferir o exemplo.",
        asideTitle: "Pré-visualização antes da paginação",
      },
      pptx: {
        eyebrow: "URL público → diapositivos 16:9",
        title: "Converta uma página web em PowerPoint",
        lead:
          "Associe secções relevantes da página a diapositivos, escolha uma saída fiel ou editável e reveja cada substituição.",
        asideTitle: "Pré-visualização antes da apresentação",
      },
    },
    sourceTitle: "Defina a origem e a saída",
    sourceHint:
      "Comece com um URL público. Reveja a estrutura gerada antes da renderização final.",
    reviewTitle: "O que pode verificar",
    relatedArticlesLabel: "Artigos relacionados",
    extensionTitle:
      "Precisa da página como aparece depois de iniciar sessão?",
    extensionBody:
      "Capture o separador com sessão iniciada através da extensão e reveja o resultado antes de o transferir.",
    visualText:
      "Máxima fidelidade do layout através de imagens das secções.",
    editableTitle: "Documento editável",
    editableText:
      "O texto e as ligações compatíveis permanecem editáveis e clicáveis.",
    warningsText:
      "As substituições de tipos de letra, canvas, multimédia e ligações inseguras são apresentadas antes da transferência.",
    privateQuestion: "Página privada ou com sessão iniciada?",
    extensionLink: "Utilizar o fluxo da extensão",
    modeLegend: "Modo de conversão",
    submit: {
      pdf: "Gerar pré-visualização PDF",
      pptx: "Gerar pré-visualização PowerPoint",
    },
    validation: {
      empty: "Introduza um URL.",
      tooLong: "O URL é demasiado longo.",
      malformed:
        "Introduza um URL válido que comece por http:// ou https://.",
      insecure:
        "Introduza um URL válido que comece por http:// ou https://.",
      credentials: "Não são aceites URLs com credenciais.",
      blockedHost:
        "Os endereços privados, locais e de infraestrutura estão bloqueados.",
    },
  },
  it: {
    formats: {
      pdf: {
        eyebrow: "URL pubblico → PDF",
        title: "Converti una pagina web in PDF",
        lead:
          "Convalida un URL pubblico, scegli la modalità di output e verifica ogni pagina prima di scaricare l’esempio.",
        asideTitle: "Anteprima prima della suddivisione in pagine",
      },
      pptx: {
        eyebrow: "URL pubblico → diapositive 16:9",
        title: "Converti una pagina web in PowerPoint",
        lead:
          "Associa le sezioni significative della pagina alle diapositive, scegli un output fedele o modificabile e verifica ogni sostituzione.",
        asideTitle: "Anteprima prima della presentazione",
      },
    },
    sourceTitle: "Imposta la fonte e l’output",
    sourceHint:
      "Inizia con un URL pubblico. Verifica la struttura generata prima del rendering finale.",
    reviewTitle: "Cosa puoi verificare",
    relatedArticlesLabel: "Articoli correlati",
    extensionTitle:
      "Ti serve la pagina così come appare dopo l’accesso?",
    extensionBody:
      "Acquisisci la scheda con accesso effettuato tramite l’estensione, quindi verifica il risultato prima di scaricarlo.",
    visualText:
      "Massima fedeltà del layout grazie alle immagini delle sezioni.",
    editableTitle: "Documento modificabile",
    editableText:
      "Il testo e i link supportati restano modificabili e selezionabili.",
    warningsText:
      "Le sostituzioni di font, canvas, contenuti multimediali e link non sicuri vengono mostrate prima del download.",
    privateQuestion: "Pagina privata o con accesso effettuato?",
    extensionLink: "Usa il flusso dell’estensione",
    modeLegend: "Modalità di conversione",
    submit: {
      pdf: "Genera anteprima PDF",
      pptx: "Genera anteprima PowerPoint",
    },
    validation: {
      empty: "Inserisci un URL.",
      tooLong: "L’URL è troppo lungo.",
      malformed:
        "Inserisci un URL valido che inizi con http:// o https://.",
      insecure:
        "Inserisci un URL valido che inizi con http:// o https://.",
      credentials: "Gli URL con credenziali non sono accettati.",
      blockedHost:
        "Gli indirizzi privati, locali e di infrastruttura sono bloccati.",
    },
  },
  pl: {
    formats: {
      pdf: {
        eyebrow: "Publiczny URL → PDF",
        title: "Konwertuj stronę internetową do PDF",
        lead:
          "Sprawdź publiczny URL, wybierz tryb wyjściowy i przejrzyj każdą stronę przed pobraniem przykładu.",
        asideTitle: "Podgląd przed podziałem na strony",
      },
      pptx: {
        eyebrow: "Publiczny URL → slajdy 16:9",
        title: "Konwertuj stronę internetową do PowerPoint",
        lead:
          "Przypisz istotne sekcje strony do slajdów, wybierz wierny lub edytowalny wynik i sprawdź każde zastąpienie.",
        asideTitle: "Podgląd przed prezentacją",
      },
    },
    sourceTitle: "Ustaw źródło i wynik",
    sourceHint:
      "Zacznij od jednego publicznego adresu URL. Sprawdź wygenerowaną strukturę przed końcowym renderowaniem.",
    reviewTitle: "Co możesz sprawdzić",
    relatedArticlesLabel: "Powiązane artykuły",
    extensionTitle:
      "Potrzebujesz strony w postaci widocznej po zalogowaniu?",
    extensionBody:
      "Przechwyć zalogowaną kartę za pomocą rozszerzenia, a następnie sprawdź wynik przed pobraniem.",
    visualText:
      "Najwyższa wierność układu dzięki obrazom poszczególnych sekcji.",
    editableTitle: "Dokument edytowalny",
    editableText:
      "Obsługiwany tekst i łącza pozostają edytowalne i klikalne.",
    warningsText:
      "Zastąpione czcionki, canvas, multimedia i niebezpieczne łącza są widoczne przed pobraniem.",
    privateQuestion: "Strona prywatna lub wymagająca logowania?",
    extensionLink: "Użyj procesu rozszerzenia",
    modeLegend: "Tryb konwersji",
    submit: {
      pdf: "Wygeneruj podgląd PDF",
      pptx: "Wygeneruj podgląd PowerPoint",
    },
    validation: {
      empty: "Wprowadź URL.",
      tooLong: "URL jest zbyt długi.",
      malformed:
        "Wprowadź prawidłowy URL zaczynający się od http:// lub https://.",
      insecure:
        "Wprowadź prawidłowy URL zaczynający się od http:// lub https://.",
      credentials: "Adresy URL zawierające dane logowania nie są akceptowane.",
      blockedHost:
        "Adresy prywatne, lokalne i infrastrukturalne są zablokowane.",
    },
  },
  cs: {
    formats: {
      pdf: {
        eyebrow: "Veřejná URL → PDF",
        title: "Převeďte webovou stránku do PDF",
        lead:
          "Ověřte veřejnou URL, zvolte režim výstupu a před stažením ukázky zkontrolujte každou stránku.",
        asideTitle: "Náhled před stránkováním",
      },
      pptx: {
        eyebrow: "Veřejná URL → snímky 16:9",
        title: "Převeďte webovou stránku do PowerPointu",
        lead:
          "Přiřaďte významné části stránky ke snímkům, zvolte věrný nebo upravitelný výstup a zkontrolujte každou náhradu.",
        asideTitle: "Náhled před prezentací",
      },
    },
    sourceTitle: "Nastavte zdroj a výstup",
    sourceHint:
      "Začněte jednou veřejnou URL. Před konečným vykreslením zkontrolujte vytvořenou strukturu.",
    reviewTitle: "Co můžete zkontrolovat",
    relatedArticlesLabel: "Související články",
    extensionTitle:
      "Potřebujete stránku tak, jak vypadá po přihlášení?",
    extensionBody:
      "Zachyťte přihlášenou kartu pomocí rozšíření a před stažením zkontrolujte výsledek.",
    visualText:
      "Nejvyšší věrnost rozvržení díky obrázkům jednotlivých částí.",
    editableTitle: "Upravitelný dokument",
    editableText:
      "Podporovaný text a odkazy zůstanou upravitelné a klikatelné.",
    warningsText:
      "Náhradní písma, canvas, média a nebezpečné odkazy se zobrazí před stažením.",
    privateQuestion: "Soukromá stránka nebo stránka po přihlášení?",
    extensionLink: "Použít postup s rozšířením",
    modeLegend: "Režim konverze",
    submit: {
      pdf: "Vytvořit náhled PDF",
      pptx: "Vytvořit náhled PowerPointu",
    },
    validation: {
      empty: "Zadejte URL.",
      tooLong: "URL je příliš dlouhá.",
      malformed:
        "Zadejte platnou URL začínající na http:// nebo https://.",
      insecure:
        "Zadejte platnou URL začínající na http:// nebo https://.",
      credentials: "URL obsahující přihlašovací údaje nejsou přijímány.",
      blockedHost:
        "Soukromé, místní a infrastrukturní adresy jsou blokovány.",
    },
  },
  sv: {
    formats: {
      pdf: {
        eyebrow: "Offentlig URL → PDF",
        title: "Konvertera en webbsida till PDF",
        lead:
          "Validera en offentlig URL, välj utdataläge och granska varje sida innan du hämtar exemplet.",
        asideTitle: "Förhandsgranskning före sidindelning",
      },
      pptx: {
        eyebrow: "Offentlig URL → 16:9-bilder",
        title: "Konvertera en webbsida till PowerPoint",
        lead:
          "Koppla meningsfulla avsnitt till bilder, välj trogen eller redigerbar utdata och granska varje ersättning.",
        asideTitle: "Förhandsgranskning före presentationen",
      },
    },
    sourceTitle: "Ange källa och utdata",
    sourceHint:
      "Börja med en offentlig URL. Granska den skapade strukturen före slutlig rendering.",
    reviewTitle: "Det här kan du kontrollera",
    relatedArticlesLabel: "Relaterade artiklar",
    extensionTitle:
      "Behöver du sidan så som den visas efter inloggning?",
    extensionBody:
      "Fånga den inloggade fliken med tillägget och granska resultatet innan du hämtar det.",
    visualText:
      "Högsta layouttrohet genom bilder av varje avsnitt.",
    editableTitle: "Redigerbart dokument",
    editableText:
      "Text och länkar som stöds förblir redigerbara och klickbara.",
    warningsText:
      "Ersatta typsnitt, canvas, medier och osäkra länkar visas före hämtning.",
    privateQuestion: "Inloggad eller privat sida?",
    extensionLink: "Använd arbetsflödet med tillägget",
    modeLegend: "Konverteringsläge",
    submit: {
      pdf: "Skapa PDF-förhandsgranskning",
      pptx: "Skapa PowerPoint-förhandsgranskning",
    },
    validation: {
      empty: "Ange en URL.",
      tooLong: "URL:en är för lång.",
      malformed:
        "Ange en giltig URL som börjar med http:// eller https://.",
      insecure:
        "Ange en giltig URL som börjar med http:// eller https://.",
      credentials: "URL:er med inloggningsuppgifter accepteras inte.",
      blockedHost:
        "Privata, lokala och infrastrukturella adresser är blockerade.",
    },
  },
  no: {
    formats: {
      pdf: {
        eyebrow: "Offentlig URL → PDF",
        title: "Konverter en nettside til PDF",
        lead:
          "Valider en offentlig URL, velg utdatamodus og kontroller hver side før du laster ned eksemplet.",
        asideTitle: "Forhåndsvisning før sideinndeling",
      },
      pptx: {
        eyebrow: "Offentlig URL → 16:9-lysbilder",
        title: "Konverter en nettside til PowerPoint",
        lead:
          "Knytt meningsfulle deler av siden til lysbilder, velg tro eller redigerbar utdata og kontroller hver erstatning.",
        asideTitle: "Forhåndsvisning før presentasjonen",
      },
    },
    sourceTitle: "Angi kilde og utdata",
    sourceHint:
      "Start med én offentlig URL. Kontroller den opprettede strukturen før endelig gjengivelse.",
    reviewTitle: "Dette kan du kontrollere",
    relatedArticlesLabel: "Relaterte artikler",
    extensionTitle:
      "Trenger du siden slik den vises etter pålogging?",
    extensionBody:
      "Fang den påloggede fanen med utvidelsen, og kontroller resultatet før nedlasting.",
    visualText:
      "Høyest layouttrohet gjennom bilder av hver del.",
    editableTitle: "Redigerbart dokument",
    editableText:
      "Støttet tekst og lenker forblir redigerbare og klikkbare.",
    warningsText:
      "Erstattede skrifter, canvas, medier og usikre lenker vises før nedlasting.",
    privateQuestion: "Pålogget eller privat side?",
    extensionLink: "Bruk arbeidsflyten med utvidelsen",
    modeLegend: "Konverteringsmodus",
    submit: {
      pdf: "Opprett PDF-forhåndsvisning",
      pptx: "Opprett PowerPoint-forhåndsvisning",
    },
    validation: {
      empty: "Skriv inn en URL.",
      tooLong: "URL-en er for lang.",
      malformed:
        "Skriv inn en gyldig URL som begynner med http:// eller https://.",
      insecure:
        "Skriv inn en gyldig URL som begynner med http:// eller https://.",
      credentials: "URL-er med påloggingsinformasjon godtas ikke.",
      blockedHost:
        "Private, lokale og infrastrukturelle adresser er blokkert.",
    },
  },
  da: {
    formats: {
      pdf: {
        eyebrow: "Offentlig URL → PDF",
        title: "Konvertér en webside til PDF",
        lead:
          "Validér en offentlig URL, vælg outputtilstand, og kontrollér hver side, før du downloader eksemplet.",
        asideTitle: "Forhåndsvisning før sideinddeling",
      },
      pptx: {
        eyebrow: "Offentlig URL → 16:9-dias",
        title: "Konvertér en webside til PowerPoint",
        lead:
          "Knyt meningsfulde dele af websiden til dias, vælg nøjagtigt eller redigerbart output, og kontrollér hver erstatning.",
        asideTitle: "Forhåndsvisning før præsentationen",
      },
    },
    sourceTitle: "Angiv kilde og output",
    sourceHint:
      "Start med én offentlig URL. Kontrollér den oprettede struktur før den endelige gengivelse.",
    reviewTitle: "Det kan du kontrollere",
    relatedArticlesLabel: "Relaterede artikler",
    extensionTitle:
      "Har du brug for siden, som den ser ud efter login?",
    extensionBody:
      "Hent den aktive fane efter login med udvidelsen, og kontrollér resultatet før download.",
    visualText:
      "Højeste layoutnøjagtighed gennem billeder af de enkelte afsnit.",
    editableTitle: "Redigerbart dokument",
    editableText:
      "Understøttet tekst og links forbliver redigerbare og klikbare.",
    warningsText:
      "Erstattede skrifttyper, canvas, medier og usikre links vises før download.",
    privateQuestion: "Side med login eller privat side?",
    extensionLink: "Brug arbejdsgangen med udvidelsen",
    modeLegend: "Konverteringstilstand",
    submit: {
      pdf: "Opret PDF-forhåndsvisning",
      pptx: "Opret PowerPoint-forhåndsvisning",
    },
    validation: {
      empty: "Indtast en URL.",
      tooLong: "URL'en er for lang.",
      malformed:
        "Indtast en gyldig URL, der begynder med http:// eller https://.",
      insecure:
        "Indtast en gyldig URL, der begynder med http:// eller https://.",
      credentials: "URL'er med loginoplysninger accepteres ikke.",
      blockedHost:
        "Private, lokale og infrastrukturelle adresser er blokeret.",
    },
  },
  fi: {
    formats: {
      pdf: {
        eyebrow: "Julkinen URL → PDF",
        title: "Muunna verkkosivu PDF-tiedostoksi",
        lead:
          "Vahvista julkinen URL, valitse tulostila ja tarkista jokainen sivu ennen esimerkin lataamista.",
        asideTitle: "Esikatselu ennen sivutusta",
      },
      pptx: {
        eyebrow: "Julkinen URL → 16:9-diat",
        title: "Muunna verkkosivu PowerPoint-tiedostoksi",
        lead:
          "Yhdistä verkkosivun merkitykselliset osiot dioihin, valitse tarkka tai muokattava tulos ja tarkista jokainen korvaus.",
        asideTitle: "Esikatselu ennen esitystä",
      },
    },
    sourceTitle: "Määritä lähde ja tulos",
    sourceHint:
      "Aloita yhdestä julkisesta URL-osoitteesta. Tarkista luotu rakenne ennen lopullista renderöintiä.",
    reviewTitle: "Mitä voit tarkistaa",
    relatedArticlesLabel: "Aiheeseen liittyvät artikkelit",
    extensionTitle:
      "Tarvitsetko sivun sellaisena kuin se näkyy kirjautumisen jälkeen?",
    extensionBody:
      "Kaappaa kirjautunut aktiivinen välilehti laajennuksella ja tarkista tulos ennen lataamista.",
    visualText:
      "Paras asettelun tarkkuus osioiden kuvien avulla.",
    editableTitle: "Muokattava asiakirja",
    editableText:
      "Tuettu teksti ja linkit säilyvät muokattavina ja napsautettavina.",
    warningsText:
      "Korvatut fontit, canvas-sisältö, media ja vaaralliset linkit näytetään ennen lataamista.",
    privateQuestion: "Kirjautumista vaativa tai yksityinen sivu?",
    extensionLink: "Käytä laajennuksen työnkulkua",
    modeLegend: "Muunnostila",
    submit: {
      pdf: "Luo PDF-esikatselu",
      pptx: "Luo PowerPoint-esikatselu",
    },
    validation: {
      empty: "Anna URL.",
      tooLong: "URL on liian pitkä.",
      malformed:
        "Anna kelvollinen URL, joka alkaa http:// tai https://.",
      insecure:
        "Anna kelvollinen URL, joka alkaa http:// tai https://.",
      credentials: "Kirjautumistietoja sisältäviä URL-osoitteita ei hyväksytä.",
      blockedHost:
        "Yksityiset, paikalliset ja infrastruktuurin osoitteet on estetty.",
    },
  },
  ro: {
    formats: {
      pdf: { eyebrow: "URL public → PDF", title: "Convertiți o pagină web în PDF", lead: "Validați un URL public, alegeți modul de ieșire și verificați fiecare pagină înainte de a descărca exemplul.", asideTitle: "Previzualizare înainte de paginare" },
      pptx: { eyebrow: "URL public → diapozitive 16:9", title: "Convertiți o pagină web în PowerPoint", lead: "Asociați secțiunile relevante ale paginii cu diapozitive, alegeți o ieșire fidelă sau editabilă și verificați fiecare înlocuire.", asideTitle: "Previzualizare înaintea prezentării" },
    },
    sourceTitle: "Stabiliți sursa și ieșirea",
    sourceHint: "Începeți cu un singur URL public. Verificați structura generată înainte de randarea finală.",
    reviewTitle: "Ce puteți verifica",
    relatedArticlesLabel: "Articole asociate",
    extensionTitle: "Aveți nevoie de pagină așa cum apare după autentificare?",
    extensionBody: "Capturați fila autentificată cu extensia, apoi verificați rezultatul înainte de descărcare.",
    visualText: "Fidelitate maximă a aspectului prin imagini ale secțiunilor.",
    editableTitle: "Document editabil",
    editableText: "Textul și linkurile acceptate rămân editabile și accesibile.",
    warningsText: "Fonturile înlocuite, canvas, elementele media și linkurile nesigure sunt afișate înainte de descărcare.",
    privateQuestion: "Pagină privată sau autentificată?",
    extensionLink: "Folosiți fluxul extensiei",
    modeLegend: "Mod de conversie",
    submit: { pdf: "Generează previzualizarea PDF", pptx: "Generează previzualizarea PowerPoint" },
    validation: {
      empty: "Introduceți un URL.",
      tooLong: "URL-ul este prea lung.",
      malformed: "Introduceți un URL valid care începe cu http:// sau https://.",
      insecure: "Introduceți un URL valid care începe cu http:// sau https://.",
      credentials: "URL-urile care conțin date de autentificare nu sunt acceptate.",
      blockedHost: "Adresele private, locale și de infrastructură sunt blocate.",
    },
  },
  hu: {
    formats: {
      pdf: { eyebrow: "Nyilvános URL → PDF", title: "Weboldal konvertálása PDF-be", lead: "Ellenőrizze a nyilvános URL-t, válassza ki a kimeneti módot, és a minta letöltése előtt tekintsen át minden oldalt.", asideTitle: "Előnézet az oldalak tördelése előtt" },
      pptx: { eyebrow: "Nyilvános URL → 16:9-es diák", title: "Weboldal konvertálása PowerPointba", lead: "Rendelje a weboldal lényeges szakaszait diákhoz, válasszon hű vagy szerkeszthető kimenetet, és ellenőrizzen minden helyettesítést.", asideTitle: "Előnézet a prezentáció előtt" },
    },
    sourceTitle: "A forrás és a kimenet beállítása",
    sourceHint: "Kezdje egyetlen nyilvános URL-lel. A végleges renderelés előtt ellenőrizze a létrehozott szerkezetet.",
    reviewTitle: "Mit ellenőrizhet",
    relatedArticlesLabel: "Kapcsolódó cikkek",
    extensionTitle: "A bejelentkezés után látható oldalra van szüksége?",
    extensionBody: "Rögzítse a bejelentkezett aktív lapot a bővítménnyel, majd letöltés előtt ellenőrizze az eredményt.",
    visualText: "A legnagyobb elrendezéshűség a szakaszok képeivel.",
    editableTitle: "Szerkeszthető dokumentum",
    editableText: "A támogatott szöveg és hivatkozások szerkeszthetők és kattinthatók maradnak.",
    warningsText: "A helyettesített betűtípusok, canvas-tartalom, média és nem biztonságos hivatkozások letöltés előtt láthatók.",
    privateQuestion: "Bejelentkezést igénylő vagy privát oldal?",
    extensionLink: "A bővítmény munkafolyamatának használata",
    modeLegend: "Konvertálási mód",
    submit: { pdf: "PDF-előnézet létrehozása", pptx: "PowerPoint-előnézet létrehozása" },
    validation: {
      empty: "Adjon meg egy URL-t.",
      tooLong: "Az URL túl hosszú.",
      malformed: "Adjon meg egy http:// vagy https:// kezdetű érvényes URL-t.",
      insecure: "Adjon meg egy http:// vagy https:// kezdetű érvényes URL-t.",
      credentials: "A bejelentkezési adatokat tartalmazó URL-ek nem fogadhatók el.",
      blockedHost: "A privát, helyi és infrastruktúra-címek blokkolva vannak.",
    },
  },
};

export const getConverterCopy = (locale: Locale): ConverterCopy =>
  converterCopy[locale];
