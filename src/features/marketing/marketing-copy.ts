import type { Locale } from "@/shared/i18n/locales";

export type LandingUiCopy = {
  browseChromeExtensions: string;
  browseGpts: string;
  openGuide: string;
  previousScenario: string;
  nextScenario: string;
  relatedPages: string;
  stepsLabel: string;
};

type MarketingCopy = {
  chatWorkflow: {
    detailsTitle: string;
    mapLabel: string;
    stageDescriptions: readonly [string, string, string];
    stages: readonly [string, string, string];
  };
  gptWorkflow: {
    detailsTitle: string;
    mapLabel: string;
    stageDescriptions: readonly [string, string, string];
    stages: readonly [string, string, string];
  };
  landing: LandingUiCopy;
};

const marketingCopy: Record<Locale, MarketingCopy> = {
  en: {
    landing: {
      browseChromeExtensions: "Browse Chrome extensions",
      browseGpts: "Browse GPTs",
      openGuide: "Open the extension guide",
      previousScenario: "Previous related page",
      nextScenario: "Next related page",
      relatedPages: "Related pages",
      stepsLabel: "How it works",
    },
    gptWorkflow: {
      detailsTitle: "Three steps from source to file",
      mapLabel: "Source → review → file",
      stages: ["Provide the source", "Review the result", "Download the file"],
      stageDescriptions: [
        "Give the GPT App the supported source.",
        "Check the pages, slides, and visible limits.",
        "Download the files returned for this request.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Export the conversation visible in your browser",
      mapLabel: "Active tab → temporary preview",
      stages: ["Open the conversation", "Review the preview", "Save the PDF"],
      stageDescriptions: [
        "Load the messages you want in the active tab.",
        "Check text, media, links, and omissions.",
        "Choose screenshot or editable PDF output.",
      ],
    },
  },
  ru: {
    landing: {
      browseChromeExtensions: "Каталог расширений Chrome",
      browseGpts: "Каталог GPTs",
      openGuide: "Открыть инструкцию по расширению",
      previousScenario: "Предыдущая связанная страница",
      nextScenario: "Следующая связанная страница",
      relatedPages: "Связанные страницы",
      stepsLabel: "Как это работает",
    },
    gptWorkflow: {
      detailsTitle: "Три шага от источника до файла",
      mapLabel: "Источник → проверка → файл",
      stages: ["Передайте источник", "Проверьте результат", "Скачайте файл"],
      stageDescriptions: [
        "Передайте GPT-приложению поддерживаемый источник.",
        "Проверьте страницы, слайды и видимые ограничения.",
        "Скачайте файлы, созданные для этого запроса.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Экспортируйте диалог, открытый в браузере",
      mapLabel: "Активная вкладка → временный предпросмотр",
      stages: ["Откройте диалог", "Проверьте предпросмотр", "Сохраните PDF"],
      stageDescriptions: [
        "Загрузите нужные сообщения в активной вкладке.",
        "Проверьте текст, медиа, ссылки и пропуски.",
        "Выберите PDF в режиме скриншотов или редактируемом режиме.",
      ],
    },
  },
  de: {
    landing: {
      browseChromeExtensions: "Chrome-Erweiterungen durchsuchen",
      browseGpts: "GPTs durchsuchen",
      openGuide: "Anleitung zur Erweiterung öffnen",
      previousScenario: "Vorherige verwandte Seite",
      nextScenario: "Nächste verwandte Seite",
      relatedPages: "Verwandte Seiten",
      stepsLabel: "So funktioniert es",
    },
    gptWorkflow: {
      detailsTitle: "In drei Schritten von der Quelle zur Datei",
      mapLabel: "Quelle → Prüfung → Datei",
      stages: ["Quelle angeben", "Ergebnis prüfen", "Datei herunterladen"],
      stageDescriptions: [
        "Übergeben Sie der GPT-App eine unterstützte Quelle.",
        "Prüfen Sie Seiten, Folien und sichtbare Einschränkungen.",
        "Laden Sie die für diese Anfrage erstellten Dateien herunter.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Im Browser sichtbare Unterhaltung exportieren",
      mapLabel: "Aktiver Tab → temporäre Vorschau",
      stages: ["Unterhaltung öffnen", "Vorschau prüfen", "PDF speichern"],
      stageDescriptions: [
        "Laden Sie die gewünschten Nachrichten im aktiven Tab.",
        "Prüfen Sie Text, Medien, Links und Auslassungen.",
        "Wählen Sie eine PDF-Ausgabe als Seitenaufnahme oder bearbeitbares Dokument.",
      ],
    },
  },
  fr: {
    landing: {
      browseChromeExtensions: "Parcourir les extensions Chrome",
      browseGpts: "Parcourir les GPTs",
      openGuide: "Ouvrir le guide de l’extension",
      previousScenario: "Page associée précédente",
      nextScenario: "Page associée suivante",
      relatedPages: "Pages associées",
      stepsLabel: "Fonctionnement",
    },
    gptWorkflow: {
      detailsTitle: "Trois étapes de la source au fichier",
      mapLabel: "Source → vérification → fichier",
      stages: ["Fournir la source", "Vérifier le résultat", "Télécharger le fichier"],
      stageDescriptions: [
        "Fournissez à l’application GPT une source prise en charge.",
        "Vérifiez les pages, les diapositives et les limites visibles.",
        "Téléchargez les fichiers créés pour cette demande.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exporter la conversation visible dans votre navigateur",
      mapLabel: "Onglet actif → aperçu temporaire",
      stages: ["Ouvrir la conversation", "Vérifier l’aperçu", "Enregistrer le PDF"],
      stageDescriptions: [
        "Chargez les messages souhaités dans l’onglet actif.",
        "Vérifiez le texte, les médias, les liens et les omissions.",
        "Choisissez une sortie PDF en captures de page ou en document modifiable.",
      ],
    },
  },
  es: {
    landing: {
      browseChromeExtensions: "Explorar extensiones de Chrome",
      browseGpts: "Explorar GPTs",
      openGuide: "Abrir la guía de la extensión",
      previousScenario: "Página relacionada anterior",
      nextScenario: "Página relacionada siguiente",
      relatedPages: "Páginas relacionadas",
      stepsLabel: "Cómo funciona",
    },
    gptWorkflow: {
      detailsTitle: "Tres pasos desde la fuente hasta el archivo",
      mapLabel: "Fuente → revisión → archivo",
      stages: ["Proporcione la fuente", "Revise el resultado", "Descargue el archivo"],
      stageDescriptions: [
        "Proporcione a la aplicación GPT una fuente compatible.",
        "Revise las páginas, las diapositivas y los límites visibles.",
        "Descargue los archivos generados para esta solicitud.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exporte la conversación visible en su navegador",
      mapLabel: "Pestaña activa → vista previa temporal",
      stages: ["Abra la conversación", "Revise la vista previa", "Guarde el PDF"],
      stageDescriptions: [
        "Cargue los mensajes deseados en la pestaña activa.",
        "Revise el texto, los medios, los enlaces y las omisiones.",
        "Elija una salida PDF como capturas de página o documento editable.",
      ],
    },
  },
  nl: {
    landing: {
      browseChromeExtensions: "Chrome-extensies bekijken",
      browseGpts: "GPTs bekijken",
      openGuide: "Handleiding van de extensie openen",
      previousScenario: "Vorige gerelateerde pagina",
      nextScenario: "Volgende gerelateerde pagina",
      relatedPages: "Gerelateerde pagina's",
      stepsLabel: "Hoe het werkt",
    },
    gptWorkflow: {
      detailsTitle: "In drie stappen van bron naar bestand",
      mapLabel: "Bron → controle → bestand",
      stages: ["Geef de bron op", "Controleer het resultaat", "Download het bestand"],
      stageDescriptions: [
        "Geef de GPT-app een ondersteunde bron.",
        "Controleer de pagina's, dia's en zichtbare beperkingen.",
        "Download de bestanden die voor deze aanvraag zijn gemaakt.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exporteer het gesprek dat in uw browser zichtbaar is",
      mapLabel: "Actief tabblad → tijdelijk voorbeeld",
      stages: ["Open het gesprek", "Controleer het voorbeeld", "Sla de PDF op"],
      stageDescriptions: [
        "Laad de gewenste berichten in het actieve tabblad.",
        "Controleer tekst, media, links en weglatingen.",
        "Kies PDF-uitvoer als pagina-opnamen of bewerkbaar document.",
      ],
    },
  },
  pt: {
    landing: {
      browseChromeExtensions: "Explorar extensões do Chrome",
      browseGpts: "Explorar GPTs",
      openGuide: "Abrir o guia da extensão",
      previousScenario: "Página relacionada anterior",
      nextScenario: "Página relacionada seguinte",
      relatedPages: "Páginas relacionadas",
      stepsLabel: "Como funciona",
    },
    gptWorkflow: {
      detailsTitle: "Três passos da origem ao ficheiro",
      mapLabel: "Origem → revisão → ficheiro",
      stages: ["Forneça a origem", "Reveja o resultado", "Transfira o ficheiro"],
      stageDescriptions: [
        "Forneça à aplicação GPT uma origem compatível.",
        "Reveja as páginas, os diapositivos e os limites visíveis.",
        "Transfira os ficheiros gerados para este pedido.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exporte a conversa visível no navegador",
      mapLabel: "Separador ativo → pré-visualização temporária",
      stages: ["Abra a conversa", "Reveja a pré-visualização", "Guarde o PDF"],
      stageDescriptions: [
        "Carregue as mensagens pretendidas no separador ativo.",
        "Reveja texto, multimédia, ligações e omissões.",
        "Escolha a saída PDF como capturas de página ou documento editável.",
      ],
    },
  },
  it: {
    landing: {
      browseChromeExtensions: "Sfoglia le estensioni Chrome",
      browseGpts: "Sfoglia GPT",
      openGuide: "Apri la guida dell’estensione",
      previousScenario: "Pagina correlata precedente",
      nextScenario: "Pagina correlata successiva",
      relatedPages: "Pagine correlate",
      stepsLabel: "Come funziona",
    },
    gptWorkflow: {
      detailsTitle: "Tre passaggi dalla fonte al file",
      mapLabel: "Fonte → verifica → file",
      stages: ["Fornisci la fonte", "Verifica il risultato", "Scarica il file"],
      stageDescriptions: [
        "Fornisci all’app GPT una fonte supportata.",
        "Verifica le pagine, le diapositive e i limiti visibili.",
        "Scarica i file generati per questa richiesta.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Esporta la conversazione visibile nel browser",
      mapLabel: "Scheda attiva → anteprima temporanea",
      stages: ["Apri la conversazione", "Verifica l’anteprima", "Salva il PDF"],
      stageDescriptions: [
        "Carica i messaggi desiderati nella scheda attiva.",
        "Verifica testo, contenuti multimediali, link e omissioni.",
        "Scegli l’output PDF come acquisizioni della pagina o documento modificabile.",
      ],
    },
  },
  pl: {
    landing: {
      browseChromeExtensions: "Przeglądaj rozszerzenia Chrome",
      browseGpts: "Przeglądaj GPTs",
      openGuide: "Otwórz instrukcję rozszerzenia",
      previousScenario: "Poprzednia powiązana strona",
      nextScenario: "Następna powiązana strona",
      relatedPages: "Powiązane strony",
      stepsLabel: "Jak to działa",
    },
    gptWorkflow: {
      detailsTitle: "Trzy kroki od źródła do pliku",
      mapLabel: "Źródło → weryfikacja → plik",
      stages: ["Podaj źródło", "Sprawdź wynik", "Pobierz plik"],
      stageDescriptions: [
        "Przekaż aplikacji GPT obsługiwane źródło.",
        "Sprawdź strony, slajdy i widoczne ograniczenia.",
        "Pobierz pliki utworzone dla tego żądania.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Eksportuj rozmowę widoczną w przeglądarce",
      mapLabel: "Aktywna karta → tymczasowy podgląd",
      stages: ["Otwórz rozmowę", "Sprawdź podgląd", "Zapisz PDF"],
      stageDescriptions: [
        "Wczytaj potrzebne wiadomości w aktywnej karcie.",
        "Sprawdź tekst, multimedia, łącza i pominięcia.",
        "Wybierz PDF jako zrzuty strony lub dokument edytowalny.",
      ],
    },
  },
  cs: {
    landing: {
      browseChromeExtensions: "Procházet rozšíření Chrome",
      browseGpts: "Procházet GPTs",
      openGuide: "Otevřít návod k rozšíření",
      previousScenario: "Předchozí související stránka",
      nextScenario: "Další související stránka",
      relatedPages: "Související stránky",
      stepsLabel: "Jak to funguje",
    },
    gptWorkflow: {
      detailsTitle: "Tři kroky od zdroje k souboru",
      mapLabel: "Zdroj → kontrola → soubor",
      stages: ["Zadejte zdroj", "Zkontrolujte výsledek", "Stáhněte soubor"],
      stageDescriptions: [
        "Předejte aplikaci GPT podporovaný zdroj.",
        "Zkontrolujte stránky, snímky a viditelná omezení.",
        "Stáhněte soubory vytvořené pro tento požadavek.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exportujte konverzaci viditelnou v prohlížeči",
      mapLabel: "Aktivní karta → dočasný náhled",
      stages: ["Otevřete konverzaci", "Zkontrolujte náhled", "Uložte PDF"],
      stageDescriptions: [
        "Načtěte požadované zprávy v aktivní kartě.",
        "Zkontrolujte text, média, odkazy a vynechaný obsah.",
        "Zvolte výstup PDF jako snímky stránky nebo upravitelný dokument.",
      ],
    },
  },
  sv: {
    landing: {
      browseChromeExtensions: "Bläddra bland Chrome-tillägg",
      browseGpts: "Bläddra bland GPTs",
      openGuide: "Öppna guiden för tillägget",
      previousScenario: "Föregående relaterade sida",
      nextScenario: "Nästa relaterade sida",
      relatedPages: "Relaterade sidor",
      stepsLabel: "Så fungerar det",
    },
    gptWorkflow: {
      detailsTitle: "Tre steg från källa till fil",
      mapLabel: "Källa → granskning → fil",
      stages: ["Ange källan", "Granska resultatet", "Hämta filen"],
      stageDescriptions: [
        "Ge GPT-appen en källa som stöds.",
        "Granska sidor, bilder och synliga begränsningar.",
        "Hämta filerna som skapats för denna begäran.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exportera konversationen som syns i webbläsaren",
      mapLabel: "Aktiv flik → tillfällig förhandsgranskning",
      stages: ["Öppna konversationen", "Granska förhandsvisningen", "Spara PDF-filen"],
      stageDescriptions: [
        "Läs in önskade meddelanden i den aktiva fliken.",
        "Granska text, medier, länkar och utelämnanden.",
        "Välj PDF som sidbilder eller redigerbart dokument.",
      ],
    },
  },
  no: {
    landing: {
      browseChromeExtensions: "Bla gjennom Chrome-utvidelser",
      browseGpts: "Bla gjennom GPTs",
      openGuide: "Åpne veiledningen for utvidelsen",
      previousScenario: "Forrige relaterte side",
      nextScenario: "Neste relaterte side",
      relatedPages: "Relaterte sider",
      stepsLabel: "Slik fungerer det",
    },
    gptWorkflow: {
      detailsTitle: "Tre trinn fra kilde til fil",
      mapLabel: "Kilde → kontroll → fil",
      stages: ["Oppgi kilden", "Kontroller resultatet", "Last ned filen"],
      stageDescriptions: [
        "Gi GPT-appen en støttet kilde.",
        "Kontroller sider, lysbilder og synlige begrensninger.",
        "Last ned filene som ble opprettet for denne forespørselen.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Eksporter samtalen som vises i nettleseren",
      mapLabel: "Aktiv fane → midlertidig forhåndsvisning",
      stages: ["Åpne samtalen", "Kontroller forhåndsvisningen", "Lagre PDF-filen"],
      stageDescriptions: [
        "Last inn ønskede meldinger i den aktive fanen.",
        "Kontroller tekst, medier, lenker og utelatelser.",
        "Velg PDF-utdata som sidebilder eller redigerbart dokument.",
      ],
    },
  },
  da: {
    landing: {
      browseChromeExtensions: "Gennemse Chrome-udvidelser",
      browseGpts: "Gennemse GPTs",
      openGuide: "Åbn vejledningen til udvidelsen",
      previousScenario: "Forrige relaterede side",
      nextScenario: "Næste relaterede side",
      relatedPages: "Relaterede sider",
      stepsLabel: "Sådan fungerer det",
    },
    gptWorkflow: {
      detailsTitle: "Tre trin fra kilde til fil",
      mapLabel: "Kilde → kontrol → fil",
      stages: ["Angiv kilden", "Kontrollér resultatet", "Download filen"],
      stageDescriptions: [
        "Giv GPT-appen en understøttet kilde.",
        "Kontrollér sider, dias og synlige begrænsninger.",
        "Download de filer, der blev oprettet til denne anmodning.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Eksportér samtalen, der vises i browseren",
      mapLabel: "Aktiv fane → midlertidig forhåndsvisning",
      stages: ["Åbn samtalen", "Kontrollér forhåndsvisningen", "Gem PDF-filen"],
      stageDescriptions: [
        "Indlæs de ønskede beskeder i den aktive fane.",
        "Kontrollér tekst, medier, links og udeladelser.",
        "Vælg PDF-output som sidebilleder eller redigerbart dokument.",
      ],
    },
  },
  fi: {
    landing: {
      browseChromeExtensions: "Selaa Chrome-laajennuksia",
      browseGpts: "Selaa GPTs-sovelluksia",
      openGuide: "Avaa laajennuksen käyttöohje",
      previousScenario: "Edellinen aiheeseen liittyvä sivu",
      nextScenario: "Seuraava aiheeseen liittyvä sivu",
      relatedPages: "Aiheeseen liittyvät sivut",
      stepsLabel: "Näin se toimii",
    },
    gptWorkflow: {
      detailsTitle: "Kolme vaihetta lähteestä tiedostoksi",
      mapLabel: "Lähde → tarkistus → tiedosto",
      stages: ["Anna lähde", "Tarkista tulos", "Lataa tiedosto"],
      stageDescriptions: [
        "Anna GPT-sovellukselle tuettu lähde.",
        "Tarkista sivut, diat ja näkyvät rajoitukset.",
        "Lataa tätä pyyntöä varten luodut tiedostot.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Vie selaimessa näkyvä keskustelu",
      mapLabel: "Aktiivinen välilehti → väliaikainen esikatselu",
      stages: ["Avaa keskustelu", "Tarkista esikatselu", "Tallenna PDF"],
      stageDescriptions: [
        "Lataa haluamasi viestit aktiiviselle välilehdelle.",
        "Tarkista teksti, media, linkit ja puuttuvat kohdat.",
        "Valitse PDF-tulokseksi sivukaappaukset tai muokattava asiakirja.",
      ],
    },
  },
  ro: {
    landing: {
      browseChromeExtensions: "Răsfoiți extensiile Chrome",
      browseGpts: "Răsfoiți GPTs",
      openGuide: "Deschide ghidul extensiei",
      previousScenario: "Pagina asociată anterioară",
      nextScenario: "Pagina asociată următoare",
      relatedPages: "Pagini asociate",
      stepsLabel: "Cum funcționează",
    },
    gptWorkflow: {
      detailsTitle: "Trei pași de la sursă la fișier",
      mapLabel: "Sursă → verificare → fișier",
      stages: ["Furnizați sursa", "Verificați rezultatul", "Descărcați fișierul"],
      stageDescriptions: [
        "Furnizați aplicației GPT o sursă acceptată.",
        "Verificați paginile, diapozitivele și limitele vizibile.",
        "Descărcați fișierele create pentru această solicitare.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "Exportați conversația vizibilă în browser",
      mapLabel: "Filă activă → previzualizare temporară",
      stages: ["Deschideți conversația", "Verificați previzualizarea", "Salvați PDF-ul"],
      stageDescriptions: [
        "Încărcați mesajele dorite în fila activă.",
        "Verificați textul, elementele media, linkurile și omisiunile.",
        "Alegeți ieșirea PDF ca instantanee ale paginii sau document editabil.",
      ],
    },
  },
  hu: {
    landing: {
      browseChromeExtensions: "Chrome-bővítmények böngészése",
      browseGpts: "GPTs böngészése",
      openGuide: "A bővítmény útmutatójának megnyitása",
      previousScenario: "Előző kapcsolódó oldal",
      nextScenario: "Következő kapcsolódó oldal",
      relatedPages: "Kapcsolódó oldalak",
      stepsLabel: "Hogyan működik",
    },
    gptWorkflow: {
      detailsTitle: "Három lépés a forrástól a fájlig",
      mapLabel: "Forrás → ellenőrzés → fájl",
      stages: ["Adja meg a forrást", "Ellenőrizze az eredményt", "Töltse le a fájlt"],
      stageDescriptions: [
        "Adjon a GPT-alkalmazásnak támogatott forrást.",
        "Ellenőrizze az oldalakat, diákat és látható korlátokat.",
        "Töltse le a kéréshez létrehozott fájlokat.",
      ],
    },
    chatWorkflow: {
      detailsTitle: "A böngészőben látható beszélgetés exportálása",
      mapLabel: "Aktív lap → ideiglenes előnézet",
      stages: ["Nyissa meg a beszélgetést", "Ellenőrizze az előnézetet", "Mentse a PDF-et"],
      stageDescriptions: [
        "Töltse be a kívánt üzeneteket az aktív lapon.",
        "Ellenőrizze a szöveget, médiát, hivatkozásokat és kihagyásokat.",
        "Válasszon oldal-pillanatképeket vagy szerkeszthető dokumentumot PDF-kimenetként.",
      ],
    },
  },
};

export const getMarketingCopy = (locale: Locale): MarketingCopy =>
  marketingCopy[locale];
