import type { Locale } from "@/shared/i18n/locales";
import { getLocaleDefinition } from "@/shared/i18n/locales";

type IndexCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type ContentCopy = {
  featuredLabel: string;
  allEntriesLabel: string;
  emptyTitle: string;
  emptyBody: string;
  blog: IndexCopy;
  updates: IndexCopy;
  changelog: IndexCopy;
  changelogLink: string;
  guideLabel: string;
  updateLabel: string;
  updatedLabel: string;
  minuteLabel: (minutes: number) => string;
  readLabel: (minutes: number) => string;
  readArticleLabel: string;
  openPdf: string;
  seeChangelog: string;
  added: string;
  improved: string;
  fixed: string;
  breadcrumbLabel: string;
  homeLabel: string;
  blogBreadcrumb: string;
  updatesBreadcrumb: string;
};

const contentCopy: Record<Locale, ContentCopy> = {
  en: {
    featuredLabel: "Start here",
    allEntriesLabel: "All field notes",
    emptyTitle: "No published updates yet",
    emptyBody:
      "The technical changelog remains available while product updates are being prepared.",
    blog: {
      eyebrow: "Conversion field notes",
      title: "Practical webpage export guides",
      description:
        "Ten focused articles about fidelity, links, page breaks, slides, private chats and safe HTML.",
    },
    updates: {
      eyebrow: "Product updates",
      title: "What changed and why",
      description:
        "Product updates will appear here after the first release.",
    },
    changelog: {
      eyebrow: "Technical history",
      title: "Changelog",
      description:
        "Versioned prototype changes with clearly labelled sample entries.",
    },
    changelogLink: "Open the technical changelog →",
    guideLabel: "Guide",
    updateLabel: "Product update",
    updatedLabel: "Updated",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min read`,
    readArticleLabel: "Read article",
    openPdf: "Open the PDF prototype →",
    seeChangelog: "See the technical changelog →",
    added: "Added",
    improved: "Improved",
    fixed: "Fixed",
    breadcrumbLabel: "Breadcrumbs",
    homeLabel: "Home",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Updates",
  },
  ru: {
    featuredLabel: "Начните отсюда",
    allEntriesLabel: "Все материалы",
    emptyTitle: "Опубликованных обновлений пока нет",
    emptyBody:
      "Пока обновления продукта готовятся, доступна техническая история изменений.",
    blog: {
      eyebrow: "Практика конвертации",
      title: "Руководства по экспорту веб-страниц",
      description:
        "Десять статей о точности, ссылках, разрывах страниц, слайдах, закрытых чатах и безопасном HTML.",
    },
    updates: {
      eyebrow: "Обновления продукта",
      title: "Что изменилось и почему",
      description:
        "Обновления продукта появятся здесь после первого релиза.",
    },
    changelog: {
      eyebrow: "Техническая история",
      title: "История изменений",
      description:
        "Версии прототипа с понятными тестовыми записями.",
    },
    changelogLink: "Открыть техническую историю изменений →",
    guideLabel: "Руководство",
    updateLabel: "Обновление продукта",
    updatedLabel: "Обновлено",
    minuteLabel: (minutes: number): string => `${minutes} мин`,
    readLabel: (minutes: number): string => {
      const lastDigit = minutes % 10;
      const lastTwoDigits = minutes % 100;
      const noun =
        lastDigit === 1 && lastTwoDigits !== 11
          ? "минута чтения"
          : lastDigit >= 2 &&
              lastDigit <= 4 &&
              (lastTwoDigits < 12 || lastTwoDigits > 14)
            ? "минуты чтения"
            : "минут чтения";
      return `${minutes} ${noun}`;
    },
    readArticleLabel: "Читать статью",
    openPdf: "Открыть прототип PDF →",
    seeChangelog: "Смотреть техническую историю изменений →",
    added: "Добавлено",
    improved: "Улучшено",
    fixed: "Исправлено",
    breadcrumbLabel: "Хлебные крошки",
    homeLabel: "Главная",
    blogBreadcrumb: "Блог",
    updatesBreadcrumb: "Обновления",
  },
  de: {
    featuredLabel: "Hier beginnen",
    allEntriesLabel: "Alle Praxisartikel",
    emptyTitle: "Noch keine veröffentlichten Updates",
    emptyBody:
      "Der technische Changelog bleibt verfügbar, während Produktupdates vorbereitet werden.",
    blog: {
      eyebrow: "Praxiswissen zur Konvertierung",
      title: "Praktische Anleitungen zum Export von Webseiten",
      description:
        "Praxisnahe Artikel über Darstellungsgenauigkeit, Links, Seitenumbrüche, Folien, private Chats und sicheres HTML.",
    },
    updates: {
      eyebrow: "Produktupdates",
      title: "Was sich geändert hat und warum",
      description:
        "Produktupdates erscheinen hier nach der ersten Veröffentlichung.",
    },
    changelog: {
      eyebrow: "Technischer Verlauf",
      title: "Changelog",
      description:
        "Versionierte Änderungen am Prototyp mit klar gekennzeichneten Beispieleinträgen.",
    },
    changelogLink: "Technischen Changelog öffnen →",
    guideLabel: "Anleitung",
    updateLabel: "Produktupdate",
    updatedLabel: "Aktualisiert",
    minuteLabel: (minutes: number): string => `${minutes} Min.`,
    readLabel: (minutes: number): string => `${minutes} Min. Lesezeit`,
    readArticleLabel: "Artikel lesen",
    openPdf: "PDF-Prototyp öffnen →",
    seeChangelog: "Technischen Changelog ansehen →",
    added: "Hinzugefügt",
    improved: "Verbessert",
    fixed: "Behoben",
    breadcrumbLabel: "Brotkrümelnavigation",
    homeLabel: "Startseite",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Updates",
  },
  fr: {
    featuredLabel: "Commencer ici",
    allEntriesLabel: "Tous les guides pratiques",
    emptyTitle: "Aucune mise à jour publiée pour le moment",
    emptyBody:
      "Le journal des modifications techniques reste disponible pendant la préparation des mises à jour du produit.",
    blog: {
      eyebrow: "Conseils pratiques de conversion",
      title: "Guides pratiques pour exporter des pages web",
      description:
        "Des articles pratiques sur la fidélité, les liens, les sauts de page, les diapositives, les conversations privées et le HTML sécurisé.",
    },
    updates: {
      eyebrow: "Mises à jour du produit",
      title: "Ce qui a changé et pourquoi",
      description:
        "Les mises à jour du produit apparaîtront ici après la première version.",
    },
    changelog: {
      eyebrow: "Historique technique",
      title: "Journal des modifications",
      description:
        "Modifications versionnées du prototype avec des entrées d’exemple clairement identifiées.",
    },
    changelogLink: "Ouvrir le journal des modifications techniques →",
    guideLabel: "Guide",
    updateLabel: "Mise à jour du produit",
    updatedLabel: "Mis à jour",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min de lecture`,
    readArticleLabel: "Lire l’article",
    openPdf: "Ouvrir le prototype PDF →",
    seeChangelog: "Voir le journal des modifications techniques →",
    added: "Ajouté",
    improved: "Amélioré",
    fixed: "Corrigé",
    breadcrumbLabel: "Fil d’Ariane",
    homeLabel: "Accueil",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Mises à jour",
  },
  es: {
    featuredLabel: "Empiece aquí",
    allEntriesLabel: "Todas las guías prácticas",
    emptyTitle: "Todavía no hay actualizaciones publicadas",
    emptyBody:
      "El registro técnico de cambios sigue disponible mientras se preparan las actualizaciones del producto.",
    blog: {
      eyebrow: "Guías prácticas de conversión",
      title: "Guías prácticas para exportar páginas web",
      description:
        "Artículos prácticos sobre fidelidad, enlaces, saltos de página, diapositivas, chats privados y HTML seguro.",
    },
    updates: {
      eyebrow: "Actualizaciones del producto",
      title: "Qué ha cambiado y por qué",
      description:
        "Las actualizaciones del producto aparecerán aquí después de la primera versión.",
    },
    changelog: {
      eyebrow: "Historial técnico",
      title: "Registro de cambios",
      description:
        "Cambios versionados del prototipo con entradas de ejemplo claramente identificadas.",
    },
    changelogLink: "Abrir el registro técnico de cambios →",
    guideLabel: "Guía",
    updateLabel: "Actualización del producto",
    updatedLabel: "Actualizado",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min de lectura`,
    readArticleLabel: "Leer artículo",
    openPdf: "Abrir el prototipo PDF →",
    seeChangelog: "Ver el registro técnico de cambios →",
    added: "Añadido",
    improved: "Mejorado",
    fixed: "Corregido",
    breadcrumbLabel: "Migas de pan",
    homeLabel: "Inicio",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Actualizaciones",
  },
  nl: {
    featuredLabel: "Begin hier",
    allEntriesLabel: "Alle praktijkgidsen",
    emptyTitle: "Nog geen updates gepubliceerd",
    emptyBody:
      "Het technische wijzigingslogboek blijft beschikbaar terwijl productupdates worden voorbereid.",
    blog: {
      eyebrow: "Praktische conversiegidsen",
      title: "Praktische gidsen voor het exporteren van webpagina's",
      description:
        "Praktische artikelen over nauwkeurigheid, links, pagina-einden, dia's, privéchats en veilige HTML.",
    },
    updates: {
      eyebrow: "Productupdates",
      title: "Wat er is veranderd en waarom",
      description:
        "Productupdates verschijnen hier na de eerste release.",
    },
    changelog: {
      eyebrow: "Technische geschiedenis",
      title: "Wijzigingslogboek",
      description:
        "Geversioneerde prototypewijzigingen met duidelijk gemarkeerde voorbeeldvermeldingen.",
    },
    changelogLink: "Technisch wijzigingslogboek openen →",
    guideLabel: "Gids",
    updateLabel: "Productupdate",
    updatedLabel: "Bijgewerkt",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min leestijd`,
    readArticleLabel: "Artikel lezen",
    openPdf: "PDF-prototype openen →",
    seeChangelog: "Technisch wijzigingslogboek bekijken →",
    added: "Toegevoegd",
    improved: "Verbeterd",
    fixed: "Opgelost",
    breadcrumbLabel: "Broodkruimels",
    homeLabel: "Startpagina",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Updates",
  },
  pt: {
    featuredLabel: "Comece aqui",
    allEntriesLabel: "Todos os guias práticos",
    emptyTitle: "Ainda não existem atualizações publicadas",
    emptyBody:
      "O registo técnico de alterações permanece disponível enquanto as atualizações do produto são preparadas.",
    blog: {
      eyebrow: "Guias práticos de conversão",
      title: "Guias práticos para exportar páginas web",
      description:
        "Artigos práticos sobre fidelidade, ligações, quebras de página, diapositivos, conversas privadas e HTML seguro.",
    },
    updates: {
      eyebrow: "Atualizações do produto",
      title: "O que mudou e porquê",
      description:
        "As atualizações do produto aparecerão aqui após a primeira versão.",
    },
    changelog: {
      eyebrow: "Histórico técnico",
      title: "Registo de alterações",
      description:
        "Alterações versionadas do protótipo com entradas de exemplo claramente identificadas.",
    },
    changelogLink: "Abrir o registo técnico de alterações →",
    guideLabel: "Guia",
    updateLabel: "Atualização do produto",
    updatedLabel: "Atualizado",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min de leitura`,
    readArticleLabel: "Ler artigo",
    openPdf: "Abrir o protótipo PDF →",
    seeChangelog: "Ver o registo técnico de alterações →",
    added: "Adicionado",
    improved: "Melhorado",
    fixed: "Corrigido",
    breadcrumbLabel: "Navegação estrutural",
    homeLabel: "Início",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Atualizações",
  },
  it: {
    featuredLabel: "Inizia qui",
    allEntriesLabel: "Tutte le guide pratiche",
    emptyTitle: "Non ci sono ancora aggiornamenti pubblicati",
    emptyBody:
      "Il registro tecnico delle modifiche resta disponibile mentre vengono preparati gli aggiornamenti del prodotto.",
    blog: {
      eyebrow: "Guide pratiche alla conversione",
      title: "Guide pratiche per esportare pagine web",
      description:
        "Articoli pratici su fedeltà, link, interruzioni di pagina, diapositive, chat private e HTML sicuro.",
    },
    updates: {
      eyebrow: "Aggiornamenti del prodotto",
      title: "Cosa è cambiato e perché",
      description:
        "Gli aggiornamenti del prodotto appariranno qui dopo la prima versione.",
    },
    changelog: {
      eyebrow: "Cronologia tecnica",
      title: "Registro delle modifiche",
      description:
        "Modifiche versionate del prototipo con voci di esempio chiaramente indicate.",
    },
    changelogLink: "Apri il registro tecnico delle modifiche →",
    guideLabel: "Guida",
    updateLabel: "Aggiornamento del prodotto",
    updatedLabel: "Aggiornato",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min di lettura`,
    readArticleLabel: "Leggi l’articolo",
    openPdf: "Apri il prototipo PDF →",
    seeChangelog: "Vedi il registro tecnico delle modifiche →",
    added: "Aggiunto",
    improved: "Migliorato",
    fixed: "Corretto",
    breadcrumbLabel: "Percorso di navigazione",
    homeLabel: "Home",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Aggiornamenti",
  },
  pl: {
    featuredLabel: "Zacznij tutaj",
    allEntriesLabel: "Wszystkie poradniki",
    emptyTitle: "Nie opublikowano jeszcze aktualizacji",
    emptyBody:
      "Techniczny dziennik zmian pozostaje dostępny, gdy przygotowujemy aktualizacje produktu.",
    blog: {
      eyebrow: "Praktyczne wskazówki dotyczące konwersji",
      title: "Praktyczne poradniki eksportowania stron internetowych",
      description:
        "Artykuły o wierności, łączach, podziałach stron, slajdach, prywatnych czatach i bezpiecznym HTML.",
    },
    updates: {
      eyebrow: "Aktualizacje produktu",
      title: "Co się zmieniło i dlaczego",
      description:
        "Aktualizacje produktu pojawią się tutaj po pierwszym wydaniu.",
    },
    changelog: {
      eyebrow: "Historia techniczna",
      title: "Dziennik zmian",
      description:
        "Wersjonowane zmiany prototypu z jasno oznaczonymi przykładowymi wpisami.",
    },
    changelogLink: "Otwórz techniczny dziennik zmian →",
    guideLabel: "Poradnik",
    updateLabel: "Aktualizacja produktu",
    updatedLabel: "Zaktualizowano",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min czytania`,
    readArticleLabel: "Czytaj artykuł",
    openPdf: "Otwórz prototyp PDF →",
    seeChangelog: "Zobacz techniczny dziennik zmian →",
    added: "Dodano",
    improved: "Ulepszono",
    fixed: "Naprawiono",
    breadcrumbLabel: "Okruszki nawigacyjne",
    homeLabel: "Strona główna",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Aktualizacje",
  },
  cs: {
    featuredLabel: "Začněte zde",
    allEntriesLabel: "Všechny praktické návody",
    emptyTitle: "Zatím nebyly zveřejněny žádné aktualizace",
    emptyBody:
      "Technický přehled změn zůstává dostupný, zatímco připravujeme aktualizace produktu.",
    blog: {
      eyebrow: "Praktické tipy ke konverzi",
      title: "Praktické návody k exportu webových stránek",
      description:
        "Články o věrnosti, odkazech, zalomení stránek, snímcích, soukromých chatech a bezpečném HTML.",
    },
    updates: {
      eyebrow: "Aktualizace produktu",
      title: "Co se změnilo a proč",
      description:
        "Aktualizace produktu se zde objeví po prvním vydání.",
    },
    changelog: {
      eyebrow: "Technická historie",
      title: "Přehled změn",
      description:
        "Verzované změny prototypu s jasně označenými ukázkovými záznamy.",
    },
    changelogLink: "Otevřít technický přehled změn →",
    guideLabel: "Návod",
    updateLabel: "Aktualizace produktu",
    updatedLabel: "Aktualizováno",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min čtení`,
    readArticleLabel: "Číst článek",
    openPdf: "Otevřít prototyp PDF →",
    seeChangelog: "Zobrazit technický přehled změn →",
    added: "Přidáno",
    improved: "Vylepšeno",
    fixed: "Opraveno",
    breadcrumbLabel: "Drobečková navigace",
    homeLabel: "Domů",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Aktualizace",
  },
  sv: {
    featuredLabel: "Börja här",
    allEntriesLabel: "Alla praktiska guider",
    emptyTitle: "Inga publicerade uppdateringar ännu",
    emptyBody:
      "Den tekniska ändringsloggen är tillgänglig medan produktuppdateringar förbereds.",
    blog: {
      eyebrow: "Praktiska konverteringsguider",
      title: "Praktiska guider för export av webbsidor",
      description:
        "Artiklar om återgivning, länkar, sidbrytningar, bilder, privata chattar och säker HTML.",
    },
    updates: {
      eyebrow: "Produktuppdateringar",
      title: "Vad som ändrades och varför",
      description:
        "Produktuppdateringar visas här efter den första versionen.",
    },
    changelog: {
      eyebrow: "Teknisk historik",
      title: "Ändringslogg",
      description:
        "Versionsindelade prototypändringar med tydligt märkta exempelposter.",
    },
    changelogLink: "Öppna den tekniska ändringsloggen →",
    guideLabel: "Guide",
    updateLabel: "Produktuppdatering",
    updatedLabel: "Uppdaterad",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min läsning`,
    readArticleLabel: "Läs artikeln",
    openPdf: "Öppna PDF-prototypen →",
    seeChangelog: "Visa den tekniska ändringsloggen →",
    added: "Tillagt",
    improved: "Förbättrat",
    fixed: "Åtgärdat",
    breadcrumbLabel: "Brödsmulor",
    homeLabel: "Startsida",
    blogBreadcrumb: "Blogg",
    updatesBreadcrumb: "Uppdateringar",
  },
  no: {
    featuredLabel: "Start her",
    allEntriesLabel: "Alle praktiske veiledninger",
    emptyTitle: "Ingen publiserte oppdateringer ennå",
    emptyBody:
      "Den tekniske endringsloggen er tilgjengelig mens produktoppdateringer forberedes.",
    blog: {
      eyebrow: "Praktiske konverteringsveiledninger",
      title: "Praktiske veiledninger for eksport av nettsider",
      description:
        "Artikler om gjengivelse, lenker, sideskift, lysbilder, private chatter og sikker HTML.",
    },
    updates: {
      eyebrow: "Produktoppdateringer",
      title: "Hva som er endret og hvorfor",
      description:
        "Produktoppdateringer vises her etter den første utgivelsen.",
    },
    changelog: {
      eyebrow: "Teknisk historikk",
      title: "Endringslogg",
      description:
        "Versjonerte prototypeendringer med tydelig merkede eksempeloppføringer.",
    },
    changelogLink: "Åpne den tekniske endringsloggen →",
    guideLabel: "Veiledning",
    updateLabel: "Produktoppdatering",
    updatedLabel: "Oppdatert",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min lesing`,
    readArticleLabel: "Les artikkelen",
    openPdf: "Åpne PDF-prototypen →",
    seeChangelog: "Se den tekniske endringsloggen →",
    added: "Lagt til",
    improved: "Forbedret",
    fixed: "Rettet",
    breadcrumbLabel: "Brødsmuler",
    homeLabel: "Startside",
    blogBreadcrumb: "Blogg",
    updatesBreadcrumb: "Oppdateringer",
  },
  da: {
    featuredLabel: "Start her",
    allEntriesLabel: "Alle praktiske vejledninger",
    emptyTitle: "Der er endnu ingen udgivne opdateringer",
    emptyBody:
      "Den tekniske ændringslog er tilgængelig, mens produktopdateringerne forberedes.",
    blog: {
      eyebrow: "Praktiske konverteringsvejledninger",
      title: "Praktiske vejledninger til eksport af websider",
      description:
        "Artikler om gengivelse, links, sideskift, dias, private chats og sikker HTML.",
    },
    updates: {
      eyebrow: "Produktopdateringer",
      title: "Hvad der er ændret, og hvorfor",
      description:
        "Produktopdateringer vises her efter den første udgivelse.",
    },
    changelog: {
      eyebrow: "Teknisk historik",
      title: "Ændringslog",
      description:
        "Versionsopdelte prototypeændringer med tydeligt markerede eksempelposter.",
    },
    changelogLink: "Åbn den tekniske ændringslog →",
    guideLabel: "Vejledning",
    updateLabel: "Produktopdatering",
    updatedLabel: "Opdateret",
    minuteLabel: (minutes: number): string => `${minutes} min.`,
    readLabel: (minutes: number): string => `${minutes} min. læsning`,
    readArticleLabel: "Læs artiklen",
    openPdf: "Åbn PDF-prototypen →",
    seeChangelog: "Se den tekniske ændringslog →",
    added: "Tilføjet",
    improved: "Forbedret",
    fixed: "Rettet",
    breadcrumbLabel: "Brødkrummer",
    homeLabel: "Startside",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Opdateringer",
  },
  fi: {
    featuredLabel: "Aloita tästä",
    allEntriesLabel: "Kaikki käytännön oppaat",
    emptyTitle: "Julkaistuja päivityksiä ei vielä ole",
    emptyBody:
      "Tekninen muutosloki on käytettävissä, kun tuotepäivityksiä valmistellaan.",
    blog: {
      eyebrow: "Käytännön muunnosoppaat",
      title: "Käytännön oppaat verkkosivujen vientiin",
      description:
        "Artikkeleita sivun tarkkuudesta, linkeistä, sivunvaihdoista, dioista, yksityisistä keskusteluista ja turvallisesta HTML:stä.",
    },
    updates: {
      eyebrow: "Tuotepäivitykset",
      title: "Mikä muuttui ja miksi",
      description:
        "Tuotepäivitykset näkyvät täällä ensimmäisen julkaisun jälkeen.",
    },
    changelog: {
      eyebrow: "Tekninen historia",
      title: "Muutosloki",
      description:
        "Versioidut prototyypin muutokset ja selkeästi merkityt esimerkkimerkinnät.",
    },
    changelogLink: "Avaa tekninen muutosloki →",
    guideLabel: "Opas",
    updateLabel: "Tuotepäivitys",
    updatedLabel: "Päivitetty",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min lukuaika`,
    readArticleLabel: "Lue artikkeli",
    openPdf: "Avaa PDF-prototyyppi →",
    seeChangelog: "Näytä tekninen muutosloki →",
    added: "Lisätty",
    improved: "Parannettu",
    fixed: "Korjattu",
    breadcrumbLabel: "Murupolku",
    homeLabel: "Etusivu",
    blogBreadcrumb: "Blogi",
    updatesBreadcrumb: "Päivitykset",
  },
  ro: {
    featuredLabel: "Începeți aici",
    allEntriesLabel: "Toate ghidurile practice",
    emptyTitle: "Nu există încă actualizări publicate",
    emptyBody: "Jurnalul tehnic de modificări rămâne disponibil cât timp pregătim actualizările produsului.",
    blog: { eyebrow: "Ghiduri practice de conversie", title: "Ghiduri practice pentru exportarea paginilor web", description: "Articole despre fidelitate, linkuri, întreruperi de pagină, diapozitive, conversații private și HTML sigur." },
    updates: { eyebrow: "Actualizări ale produsului", title: "Ce s-a schimbat și de ce", description: "Actualizările produsului vor apărea aici după prima lansare." },
    changelog: { eyebrow: "Istoric tehnic", title: "Jurnal de modificări", description: "Modificări versionate ale prototipului, cu intrări demonstrative marcate clar." },
    changelogLink: "Deschide jurnalul tehnic de modificări →",
    guideLabel: "Ghid",
    updateLabel: "Actualizare de produs",
    updatedLabel: "Actualizat",
    minuteLabel: (minutes: number): string => `${minutes} min`,
    readLabel: (minutes: number): string => `${minutes} min de citit`,
    readArticleLabel: "Citiți articolul",
    openPdf: "Deschide prototipul PDF →",
    seeChangelog: "Vezi jurnalul tehnic de modificări →",
    added: "Adăugat",
    improved: "Îmbunătățit",
    fixed: "Remediat",
    breadcrumbLabel: "Traseu de navigare",
    homeLabel: "Pagina principală",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Actualizări",
  },
  hu: {
    featuredLabel: "Kezdje itt",
    allEntriesLabel: "Minden gyakorlati útmutató",
    emptyTitle: "Még nincsenek közzétett frissítések",
    emptyBody: "A műszaki változásnapló elérhető, amíg a termékfrissítéseket előkészítjük.",
    blog: { eyebrow: "Gyakorlati konvertálási útmutatók", title: "Gyakorlati útmutatók weboldalak exportálásához", description: "Cikkek a megjelenéshűségről, hivatkozásokról, oldaltörésekről, diákról, privát csevegésekről és biztonságos HTML-ről." },
    updates: { eyebrow: "Termékfrissítések", title: "Mi változott és miért", description: "A termékfrissítések az első kiadás után jelennek meg itt." },
    changelog: { eyebrow: "Műszaki előzmények", title: "Változásnapló", description: "A prototípus verziózott változásai, egyértelműen jelölt mintabejegyzésekkel." },
    changelogLink: "Műszaki változásnapló megnyitása →",
    guideLabel: "Útmutató",
    updateLabel: "Termékfrissítés",
    updatedLabel: "Frissítve",
    minuteLabel: (minutes: number): string => `${minutes} perc`,
    readLabel: (minutes: number): string => `${minutes} perc olvasás`,
    readArticleLabel: "Cikk olvasása",
    openPdf: "PDF-prototípus megnyitása →",
    seeChangelog: "Műszaki változásnapló megtekintése →",
    added: "Hozzáadva",
    improved: "Javítva",
    fixed: "Kijavítva",
    breadcrumbLabel: "Morzsamenü",
    homeLabel: "Kezdőlap",
    blogBreadcrumb: "Blog",
    updatesBreadcrumb: "Frissítések",
  },
};

export const getContentCopy = (locale: Locale): ContentCopy =>
  contentCopy[locale];

export const formatContentDate = (locale: Locale, value: string): string => {
  const languageTag = getLocaleDefinition(locale).htmlLang;
  return new Intl.DateTimeFormat(languageTag, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
};
