import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const finnishLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT-sovellus · tarkat URL-osoitteet, PDF:t tai kuvakaappaukset",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File käsittelee tarkat julkiset osoitteet, verkkosivu-PDF:t ja kuvakaappaukset Visual PDF- tai Interactive PDF -muodossa.",
        lead: "Anna tarkka julkinen URL, tarkkojen URL-osoitteiden luettelo, verkkosivun PDF tai koko sivun tai peräkkäiset kuvakaappaukset. Valitse Visual PDF tallentaaksesi sivuston kuvakaappauksina tai Interactive PDF valittavaa tekstiä ja napsautettavia linkkejä varten.",
        sections: [
            { heading: "1. Anna yksi tai useampi URL-osoite", body: "Lähetä julkinen URL, tarkkojen julkisten URL-osoitteiden luettelo, olemassa oleva verkkosivu-PDF tai koko sivun tai peräkkäiset kuvakaappaukset. Jokainen verkkosivu pysyy erillisenä PDF:nä." },
            { heading: "2. Valitse PDF-tyyppi", body: "Valitse Visual PDF kuvapohjaiseen tulokseen, joka painottaa sivun ulkoasua, tai Interactive PDF, kun valittava teksti ja napsautettavat linkit ovat tärkeimpiä. Yksi tila koskee koko URL-luetteloa." },
            { heading: "3. Muunna vain annetut sivut", body: "Sovellus avaa vain annetut tarkat julkiset URL-osoitteet. Se ei indeksoi verkkotunnuksia tai sivukarttoja, etsi sivuja, seuraa sisäisiä linkkejä eikä ohita kirjautumista, maksumuureja, CAPTCHA-tarkistuksia, maantieteellisiä tai muita käyttörajoituksia." },
            { heading: "4. Käsittele PDF:iä ja kuvakaappauksia", body: "Ladatut kuvakaappaukset voidaan koota ylhäältä alas Visual PDF:ksi. Verkkosivu-PDF:t käsitellään keksimättä puuttuvaa sisältöä; Interactive PDF painottaa olemassa olevaa tekstiä, asettelua, kuvia ja vahvistettuja linkkejä." },
            { heading: "5. Saat sovitetut ohjeet ja voit tarkistaa tuloksen", body: "Jos suora muunnos ei ole käytettävissä tai jää vajaaksi, sovellus antaa sivu-, selain- tai vientikohtaiset ohjeet. Tarkista puuttuva tai rajautunut sisältö, tyhjät alueet, luettavuus, järjestys, asettelu, linkit ja valitun tilan vastaavuus." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Avaa GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Käyttöohjeet",
            firstStageDescription: "Anna GPT-sovellukselle toimiva URL.",
            firstStageLabel: "Lähetä URL-osoitteet",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT-sovellus · ladattu HTML-tiedosto",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File muuntaa yhden ladatun HTML-tiedoston tarkistetuksi PDF:ksi ja säilyttää asettelun, kuvat, tekstin ja linkit.",
        lead: "Lataa täsmälleen yksi HTML-tiedosto. GPT HTML 2 PDF esikatselee ulkoasun, lataa käytettävissä olevat tyylit, fontit ja kuvat ja luo tarkistetun PDF:n, jossa teksti on valittavissa ja linkit napsautettavissa mahdollisuuksien mukaan.",
        sections: [
            { heading: "1. Lataa täsmälleen yksi HTML-tiedosto", body: "Liitä yksi HTML-asiakirja. GPT-sovellus ei hyväksy URL-osoitetta sen sijaan, käsittele useita HTML-tiedostoja, selaa sivustoja, seuraa linkkejä lisäsivuille eikä yhdistä asiakirjoja." },
            { heading: "2. Sisällytä tyylit ja resurssit", body: "Sisäisiä tyylejä käytetään automaattisesti käytettävissä olevien etätyylien, fonttien ja kuvien kanssa. Jos HTML viittaa puuttuvaan paikalliseen CSS-tiedostoon, lataa vastaava tiedosto tarkempaa tulosta varten tai jatka ilman sitä." },
            { heading: "3. Esikatsele ja säilytä ulkoasu", body: "HTML esikatsellaan sopivalla työpöytäleveydellä ennen muunnosta. PDF pyrkii säilyttämään teeman, värit, typografian, välit, sarakkeet, kortit, kuvat ja sisältöjärjestyksen aktivoimatta vuorovaikutteisia ohjaimia." },
            { heading: "4. Luo yksi luettava PDF", body: "GPT-sovellus luo yhden PDF:n, jossa teksti on valittavissa ja hyperlinkit toimivat mahdollisuuksien mukaan. Leveät asettelut voivat käyttää vaakatilaa tai sopivaa sivukokoa, jotta tärkeät elementit eivät puristu, rajaudu tai jakaudu." },
            { heading: "5. Tarkista valmis tiedosto", body: "Jokainen PDF tarkistetaan ennen toimitusta puuttuvan sisällön, rajautuneiden osien, selittämättömien tyhjien alueiden, luettavuuden, sivunvaihtojen, kuvien sijoittelun ja tuettujen linkkien varalta." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Avaa GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Viisi vaihetta HTML:stä PDF:ään",
            firstStageDescription: "Anna GPT-sovellukselle yksi HTML-tiedosto.",
            firstStageLabel: "Lataa HTML",
        },
    }
};
