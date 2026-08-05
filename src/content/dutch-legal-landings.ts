import type { LandingContent } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

export const dutchLegalLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  privacy: {
    route: "privacy",
    eyebrow: "Privacy en gegevensverwerking",
    title: "Privacybeleid",
    description:
      "Hoe Page 2 File webinhoud, tijdelijke conversiebestanden, cookies, analytische gegevens en privacyverzoeken verwerkt.",
    lead:
      "Dit Privacybeleid legt uit welke gegevens Page 2 File verwerkt wanneer u de website bezoekt, de Chrome-extensie gebruikt of een webpagina naar PDF of PowerPoint converteert.",
    sections: [
      {
        heading: "Beheerder en toepassingsgebied",
        body:
          "{{entityName}}, gevestigd op {{address}}, beheert Page 2 File en is verantwoordelijk voor de verwerking die in dit beleid wordt beschreven. Dit beleid geldt voor de website, de browserextensie en de bijbehorende conversiediensten.",
      },
      {
        heading: "Definities",
        body:
          "‘Dienst’ betekent Page 2 File en de conversiefuncties. ‘Conversie-inhoud’ omvat de URL, zichtbare webinhoud, geselecteerde opties en het gegenereerde PDF- of PowerPoint-bestand. ‘Persoonsgegevens’ zijn gegevens waarmee een persoon kan worden geïdentificeerd of die redelijkerwijs aan een persoon kunnen worden gekoppeld.",
      },
      {
        heading: "Gegevens die wij verwerken",
        body:
          "Afhankelijk van uw gebruik kunnen wij technische aanvraaggegevens, het IP-adres, browser- en apparaatgegevens, bezochte Page 2 File-pagina’s, toegestane campagneparameters, een openbare URL of zichtbare inhoud van het actieve tabblad, conversie-instellingen, tijdelijke taak-ID’s en gegenereerde bestanden verwerken.",
      },
      {
        heading: "Gegevens waar wij niet om vragen",
        body:
          "Page 2 File vereist geen account en vraagt niet om betaalkaartgegevens, factuuradressen of wachtwoorden van de bronwebsite. De extensie gebruikt de pagina die al in uw browser is geopend en ontvangt niet het wachtwoord waarmee u die website hebt geopend.",
      },
      {
        heading: "Hoe wij gegevens gebruiken",
        body:
          "Wij verwerken gegevens om voorbeelden en bestanden te leveren, misbruik tegen te gaan, storingen te onderzoeken, de betrouwbaarheid te behouden, geaggregeerd gebruik te begrijpen, verzoeken te beantwoorden en aan de wet te voldoen. Wij verkopen geen persoonsgegevens.",
      },
      {
        heading: "Conversie-inhoud en tijdelijke verwerking",
        body:
          "Een conversie via een openbare URL of een voorbeeld vanuit de extensie vereist tijdelijke verwerking van de verzonden pagina en opties. Page 2 File biedt geen conversiegeschiedenis die aan een account is gekoppeld. Voorbeeldgegevens en gegenereerde bestanden zijn kortstondig en worden verwijderd nadat het voorbeeld is gesloten of de technische bewaartermijn is verstreken.",
      },
      {
        heading: "Analyse en attributie",
        body:
          "Wanneer een geldige Google Analytics Measurement ID is ingesteld, wordt Google Analytics automatisch geladen op openbare marketingpagina’s. Daarbij kunnen gegevens over pagina, apparaat, browser, globale locatie en campagne worden verzonden. Toegestane UTM-waarden worden in het geheugen genormaliseerd en met het analyse-event verstuurd; Page 2 File bewaart ze niet in een eigen attributiecookie.",
      },
      {
        heading: "Dienstverleners en verstrekking",
        body:
          "Page 2 File gebruikt {{processors}} om de Dienst te leveren, beveiligen en meten. Deze aanbieders mogen technische gegevens alleen verwerken voor zover dat voor hun diensten nodig is en volgens hun eigen privacyvoorwaarden. Wij kunnen gegevens ook verstrekken wanneer de wet dit vereist, om rechten of veiligheid te beschermen of bij een rechtmatige bedrijfsoverdracht.",
      },
      {
        heading: "Bewaring en verwijdering",
        body:
          "Conversie-inhoud wordt alleen bewaard voor de tijdelijke verwerking en download en niet als zichtbare gebruikersgeschiedenis. Beveiligingslogboeken, infrastructuurgegevens, analytische gegevens en correspondentie kunnen worden bewaard zolang dat redelijkerwijs nodig is voor beveiliging, bedrijfsvoering, wettelijke verplichtingen of de afhandeling van een verzoek.",
      },
      {
        heading: "Beveiliging",
        body:
          "Page 2 File gebruikt conversieroutes van dezelfde oorsprong, anonieme sessiecontroles, Origin- en CSRF-controles, ondertekende backendverzoeken, URL-validatie, geïsoleerde rendering en tijdelijke bestanden. Geen enkele maatregel biedt absolute veiligheid; converteer daarom geen materiaal dat u niet mag delen.",
      },
      {
        heading: "Internationale verwerking",
        body:
          "Onze aanbieders kunnen technische of analytische gegevens buiten uw land verwerken. Waar nodig vertrouwen wij op hun waarborgen en rechtmatige overdrachtsmechanismen. De beheerder is gevestigd in {{jurisdiction}}.",
      },
      {
        heading: "Uw privacyrechten",
        body:
          "Afhankelijk van de toepasselijke wet kunt u inzage, correctie, verwijdering of beperking van uw persoonsgegevens vragen of bezwaar maken tegen bepaalde verwerking. Omdat Page 2 File geen accounts of conversiearchief heeft, kunnen wij aanvullende gegevens nodig hebben om een relevant operationeel record te vinden.",
      },
      {
        heading: "Websites van derden",
        body:
          "Page 2 File kan inhoud van websites van derden openen of converteren en naar externe diensten verwijzen. Hun inhoud, beveiliging en privacypraktijken worden door die derden beheerd en bij gebruik gelden hun eigen voorwaarden.",
      },
      {
        heading: "Kinderen",
        body:
          "De Dienst is niet gericht op kinderen jonger dan 13 jaar en wij verzamelen niet bewust persoonsgegevens van kinderen onder die leeftijd. Een ouder of voogd kan contact opnemen om verwijdering van zulke gegevens te vragen.",
      },
      {
        id: "cookies",
        heading: "Cookies",
        body:
          "Page 2 File gebruikt de kortlevende cookies p2f_session en p2f_csrf om een anonieme conversiesessie te onderhouden en verzoeken te beveiligen. Ze gebruiken SameSite Strict en verlopen na één uur. Google Analytics kan analytische cookies op openbare pagina’s plaatsen wanneer analytics is ingesteld. Wij plaatsen geen conversie-inhoud of direct identificerende profielgegevens in deze cookies.",
      },
      {
        heading: "Cookies blokkeren en verwijderen",
        body:
          "U kunt cookies via uw browserinstellingen blokkeren of verwijderen. Het blokkeren van de sessie- of CSRF-cookies van Page 2 File kan conversieverzoeken verhinderen. Het blokkeren van Google Analytics beperkt de meting, maar verhindert niet dat de openbare pagina’s worden geladen. Cookies verwijdert u via de cookie-instellingen van uw browser.",
      },
      {
        heading: "Wijzigingen in dit beleid",
        body:
          "Wij kunnen dit beleid bijwerken wanneer de Dienst, aanbieders of wettelijke vereisten veranderen. De bijgewerkte versie wordt met een nieuwe datum op deze pagina gepubliceerd. Belangrijke wijzigingen gelden vanaf de vermelde ingangsdatum.",
      },
      {
        heading: "Contact",
        body:
          "Vragen en privacyverzoeken kunt u sturen naar {{contactEmail}}. De beheerder is {{entityName}}, {{address}}, onder de wetten van {{jurisdiction}}.",
      },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Dienstovereenkomst",
    title: "Gebruiksvoorwaarden",
    description:
      "Voorwaarden voor het gebruik van Page 2 File, waaronder toegestane bronnen, conversiebeperkingen, verantwoordelijkheden en beschikbaarheid.",
    lead:
      "Deze Voorwaarden regelen uw gebruik van de Page 2 File-website, de Chrome-extensie en de diensten voor conversie naar PDF of PowerPoint.",
    sections: [
      {
        heading: "Aanvaarding en beheerder",
        body:
          "Door Page 2 File te openen of te gebruiken, aanvaardt u deze Voorwaarden. De Dienst wordt beheerd door {{entityName}}, gevestigd op {{address}}. Gebruikt u de Dienst voor een organisatie, dan bevestigt u dat u bevoegd bent deze Voorwaarden namens die organisatie te aanvaarden.",
      },
      {
        heading: "Definities",
        body:
          "‘Dienst’ betekent de Page 2 File-website, de Chrome-extensie en de conversiefuncties. ‘Broninhoud’ is een webpagina, inhoud van het actieve tabblad of ander materiaal dat voor conversie wordt aangeleverd. ‘Resultaat’ is een PDF, PowerPoint-bestand, voorbeeld of ander gegenereerd bestand.",
      },
      {
        heading: "Beperkte licentie",
        body:
          "Wij verlenen u een herroepbaar, niet-exclusief, niet-overdraagbaar en beperkt recht om de Dienst volgens deze Voorwaarden te gebruiken. Eigendom van software, merken of ander beschermd materiaal van Page 2 File wordt niet aan u overgedragen.",
      },
      {
        heading: "Toegestane bronnen en uw verantwoordelijkheid",
        body:
          "U mag alleen broninhoud converteren waartoe u rechtmatig toegang hebt en die u rechtmatig mag verwerken, reproduceren en downloaden. U bent verantwoordelijk voor de verzonden URL’s en inhoud van actieve tabbladen, de gekozen instellingen en het gebruik of de verspreiding van elk Resultaat.",
      },
      {
        heading: "Verboden gebruik",
        body:
          "U mag de Dienst niet gebruiken om de wet of rechten van anderen te schenden, betaalmuren of toegangscontroles te omzeilen, malware te verspreiden, onrechtmatige inhoud te verzenden, privénetwerken te onderzoeken, beveiliging te hinderen, systemen te overbelasten, buitensporige verzoeken te automatiseren, beschermde delen te reverse-engineeren of gegenereerde bestanden verkeerd voor te stellen.",
      },
      {
        heading: "Broninhoud en rechten van derden",
        body:
          "U behoudt uw bestaande rechten op broninhoud. Page 2 File verleent geen rechten op materiaal van anderen. U verklaart dat de verwerking en het gevraagde Resultaat geen inbreuk maken op auteursrecht, privacy, vertrouwelijkheid, contracten of andere toepasselijke rechten.",
      },
      {
        heading: "Tijdelijke verwerking",
        body:
          "De Dienst kan broninhoud, instellingen en gegenereerde bestanden tijdelijk verwerken om een voorbeeld en download te leveren. Page 2 File biedt geen conversiegeschiedenis die aan een account is gekoppeld. Het Privacybeleid beschrijft de tijdelijke gegevens, cookies en aanbieders.",
      },
      {
        heading: "Beperkingen van resultaat en weergave",
        body:
          "Webpagina’s kunnen scripts, animaties, video, beschermde media, lettertypen, canvasafbeeldingen, dynamische gegevens en complexe lay-outs bevatten die niet exact in een statisch PDF- of PowerPoint-bestand kunnen worden gereproduceerd. Accurate copy geeft voorrang aan het uiterlijk; Editable document bouwt ondersteunde tekst, afbeeldingen en links opnieuw op. Controleer het voorbeeld en het uiteindelijke Resultaat.",
      },
      {
        heading: "Diensten en links van derden",
        body:
          "De Dienst kan websites van derden converteren of ernaar verwijzen. Page 2 File is niet verantwoordelijk voor hun beschikbaarheid, inhoud, juistheid, rechtmatigheid, beveiliging of privacy. Uw gebruik blijft onderworpen aan de voorwaarden van die aanbieder.",
      },
      {
        heading: "Privacy en cookies",
        body:
          "Ons Privacybeleid legt de tijdelijke conversieverwerking, analytics, dienstverleners en cookies uit. Door de Dienst te gebruiken erkent u dat de verwerking die nodig is voor de gevraagde conversie plaatsvindt zoals daar beschreven.",
      },
      {
        heading: "Intellectuele eigendom van Page 2 File",
        body:
          "De Dienst, software, vormgeving, tekst, logo’s en andere materialen van Page 2 File zijn eigendom van of gelicentieerd aan {{entityName}} en worden wettelijk beschermd. U mag eigendomsvermeldingen niet verwijderen en de Dienst niet kopiëren, verkopen, sublicentiëren of commercieel exploiteren, behalve waar de wet dit uitdrukkelijk toestaat.",
      },
      {
        heading: "Feedback",
        body:
          "Als u vrijwillig suggesties of feedback geeft, verleent u ons een wereldwijd, eeuwigdurend en royaltyvrij recht om die feedback zonder vergoeding te gebruiken voor verbetering of ontwikkeling van de Dienst. Dit draagt uw broninhoud niet aan ons over.",
      },
      {
        heading: "Wijzigingen, updates en beschikbaarheid",
        body:
          "Wij kunnen de Dienst of functies bijwerken, beperken, opschorten of beëindigen en beloven niet dat elke functie beschikbaar blijft. Wij mogen technische grenzen toepassen voor beveiliging, betrouwbaarheid of redelijk gebruik. Waar praktisch worden belangrijke wijzigingen op de website vermeld.",
      },
      {
        heading: "Opschorting en beëindiging",
        body:
          "U kunt het gebruik op elk moment stoppen. Wij kunnen toegang blokkeren of opschorten wanneer wij redelijkerwijs menen dat deze Voorwaarden zijn geschonden, gebruik de Dienst of een ander systeem bedreigt of de wet optreden vereist. Bepalingen die naar hun aard voortduren, blijven geldig.",
      },
      {
        heading: "Klachten over rechten",
        body:
          "Meent u dat materiaal dat via Page 2 File beschikbaar is uw rechten schendt, neem dan contact op via {{contactEmail}} en vermeld het beschermde werk, het relevante materiaal of de URL, uw contactgegevens en een toelichting op de gestelde inbreuk.",
      },
      {
        heading: "Geen garanties",
        body:
          "Voor zover wettelijk toegestaan worden de Dienst en elk Resultaat geleverd ‘zoals ze zijn’ en ‘zoals beschikbaar’. Wij garanderen geen ononderbroken werking, foutloze conversie, volledige nauwkeurigheid, beschikbaarheid van websites van derden, geschiktheid voor een bepaald doel of dat elk Resultaat aan al uw eisen voldoet.",
      },
      {
        heading: "Beperking van aansprakelijkheid",
        body:
          "Voor zover wettelijk toegestaan is {{entityName}} niet aansprakelijk voor indirecte, incidentele, bijzondere, gevolg- of punitieve schade, verlies van winst, gegevens, bedrijfsactiviteiten of privacy, of kosten door gebruik of onmogelijkheid tot gebruik van de Dienst. Rechten die wettelijk niet kunnen worden uitgesloten blijven onaangetast.",
      },
      {
        heading: "Vrijwaring",
        body:
          "Voor zover wettelijk toegestaan stemt u ermee in {{entityName}} te verdedigen en vrijwaren tegen aanspraken van derden die voortkomen uit verzonden broninhoud, uw gebruik of verspreiding van een Resultaat, schending van deze Voorwaarden of inbreuk op rechten van anderen.",
      },
      {
        heading: "Scheidbaarheid, afstand en volledige overeenkomst",
        body:
          "Als een bepaling ongeldig of onafdwingbaar is, blijven de overige bepalingen geldig en wordt de getroffen bepaling zo dicht mogelijk bij haar doel uitgelegd. Het niet afdwingen van een bepaling is geen afstand daarvan. Deze Voorwaarden en het Privacybeleid vormen de overeenkomst over de Dienst.",
      },
      {
        heading: "Toepasselijk recht en geschillen",
        body:
          "Deze Voorwaarden worden beheerst door de wetten van {{jurisdiction}}. Voor een formele procedure proberen u en {{entityName}} een geschil te goeder trouw via schriftelijke kennisgeving op te lossen. Onopgeloste geschillen kunnen aan de bevoegde rechtbanken van {{jurisdiction}} worden voorgelegd, tenzij dwingend recht een ander forum vereist.",
      },
      {
        heading: "Wijzigingen in deze voorwaarden",
        body:
          "Wij kunnen deze Voorwaarden aanpassen aan wijzigingen van de Dienst, aanbieders of wetgeving. De nieuwe versie wordt met een bijgewerkte datum gepubliceerd. Voortgezet gebruik na de ingangsdatum betekent dat u de gewijzigde Voorwaarden aanvaardt; anders moet u het gebruik stoppen.",
      },
      {
        heading: "Contact",
        body:
          "Vragen of kennisgevingen over deze Voorwaarden kunt u sturen naar {{contactEmail}} of naar {{entityName}}, {{address}}.",
      },
    ],
    legal: true,
  },
};
