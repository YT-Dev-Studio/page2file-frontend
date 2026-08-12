import type { LandingContent } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

export const italianLegalLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  privacy: {
    route: "privacy",
    eyebrow: "Privacy e trattamento dei dati",
    title: "Informativa sulla privacy",
    description:
      "Come Page 2 File tratta contenuti web, file temporanei, cookie, dati analitici e richieste relative alla privacy.",
    lead:
      "Questa Informativa spiega quali dati tratta Page 2 File quando visiti il sito, usi l’estensione Chrome o converti una pagina web in PDF.",
    sections: [
      { heading: "Titolare e ambito", body: "{{entityName}}, con sede in {{address}}, gestisce Page 2 File ed è responsabile del trattamento descritto. Questa informativa si applica al sito, all’estensione e ai relativi servizi di conversione." },
      { heading: "Definizioni", body: "“Servizio” indica Page 2 File e le sue funzioni. “Contenuto della conversione” include l’URL, il contenuto visibile, le opzioni e il PDF generato. “Dati personali” sono informazioni che identificano o possono essere ragionevolmente collegate a una persona." },
      { heading: "Informazioni che trattiamo", body: "In base all’uso possiamo trattare dati tecnici della richiesta, indirizzo IP, browser e dispositivo, pagine visitate, parametri di campagna consentiti, URL pubblico o contenuto visibile nella scheda attiva, impostazioni, identificativi temporanei e file generati." },
      { heading: "Informazioni che non chiediamo", body: "Page 2 File non richiede un account e non chiede carte di pagamento, indirizzi di fatturazione o password del sito di origine. L’estensione usa la pagina già aperta e non riceve la password usata per accedervi." },
      { heading: "Come usiamo le informazioni", body: "Trattiamo informazioni per fornire anteprime e file, prevenire abusi, diagnosticare errori, mantenere l’affidabilità, comprendere l’uso aggregato, rispondere alle richieste e rispettare la legge. Non vendiamo dati personali." },
      { heading: "Contenuto della conversione e trattamento temporaneo", body: "Una conversione tramite URL pubblico o un’anteprima dell’estensione richiede il trattamento temporaneo della pagina e delle opzioni. Non offriamo una cronologia associata a un account. Dati e file sono di breve durata e vengono eliminati alla chiusura dell’anteprima o alla scadenza tecnica." },
      { heading: "Analytics e attribuzione", body: "Quando è configurato un ID valido, Google Analytics viene caricato automaticamente sulle pagine pubbliche e può ricevere dati su pagina, dispositivo, browser, posizione approssimativa e campagna. I valori UTM consentiti vengono normalizzati in memoria; Page 2 File non li conserva in un cookie di attribuzione proprio." },
      { heading: "Fornitori e comunicazioni", body: "Page 2 File usa {{processors}} per fornire, proteggere e misurare il Servizio. Possono trattare dati tecnici solo quando necessario e secondo le proprie informative. Possiamo inoltre comunicare informazioni quando richiesto dalla legge, per proteggere diritti o sicurezza o nell’ambito di un trasferimento aziendale lecito." },
      { heading: "Conservazione ed eliminazione", body: "Il contenuto della conversione viene conservato solo durante il flusso temporaneo e non come cronologia visibile. Registri di sicurezza, infrastruttura, analytics e corrispondenza possono essere conservati per il tempo ragionevolmente necessario a operazioni, obblighi legali o gestione di una richiesta." },
      { heading: "Sicurezza", body: "Page 2 File usa percorsi same-origin, controlli di sessione anonima, verifiche Origin e CSRF, richieste firmate, convalida degli URL, rendering isolato e file temporanei. Nessuna misura garantisce sicurezza assoluta; non convertire materiale che non puoi divulgare." },
      { heading: "Trattamento internazionale", body: "I nostri fornitori possono trattare dati tecnici o analitici fuori dal tuo Paese. Quando necessario, ci affidiamo alle loro garanzie e a meccanismi legali di trasferimento. Il titolare è stabilito in {{jurisdiction}}." },
      { heading: "I tuoi diritti", body: "In base alla legge applicabile puoi chiedere accesso, correzione, eliminazione o limitazione, oppure opporti a determinati trattamenti. Poiché non esistono account né archivio delle conversioni, potremmo chiedere informazioni per identificare un record operativo pertinente." },
      { heading: "Siti di terzi", body: "Page 2 File può aprire o convertire contenuti di terzi e collegarsi a servizi esterni. Contenuto, sicurezza e privacy dipendono da tali terzi e sono regolati dai loro termini." },
      { heading: "Minori", body: "Il Servizio non è rivolto a minori di 13 anni e non raccogliamo consapevolmente i loro dati. Un genitore o tutore può contattarci per chiederne l’eliminazione." },
      { id: "cookies", heading: "Cookie", body: "Page 2 File usa i cookie di breve durata p2f_session e p2f_csrf per mantenere una sessione anonima e proteggere le richieste. Usano SameSite Strict e scadono dopo un’ora. Google Analytics può impostare cookie analitici quando configurato. Non vi inseriamo contenuti della conversione né profili direttamente identificabili." },
      { heading: "Bloccare ed eliminare i cookie", body: "Puoi bloccare o eliminare i cookie nelle impostazioni del browser. Bloccare i cookie di sessione o CSRF può impedire le conversioni. Bloccare Google Analytics limita la misurazione ma non il caricamento delle pagine pubbliche. Usa i controlli del browser per eliminare i cookie." },
      { heading: "Modifiche a questa informativa", body: "Possiamo aggiornare questa informativa quando cambiano il Servizio, i fornitori o la legge. Pubblicheremo la versione aggiornata con una nuova data; le modifiche importanti si applicano dalla data indicata." },
      { heading: "Contatti", body: "Invia domande e richieste relative alla privacy a {{contactEmail}}. Il titolare è {{entityName}}, {{address}}, secondo le leggi di {{jurisdiction}}." },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Accordo del servizio",
    title: "Termini di utilizzo",
    description:
      "Legga i termini per usare Page 2 File, incluse fonti consentite, limiti, responsabilità, disponibilità del servizio e modalità di contatto.",
    lead:
      "Questi Termini regolano l’uso del sito Page 2 File, dell’estensione Chrome e dei servizi di conversione in PDF.",
    sections: [
      { heading: "Accettazione e gestore", body: "Accedendo o usando Page 2 File accetti questi Termini. Il Servizio è gestito da {{entityName}}, con sede in {{address}}. Se agisci per un’organizzazione, confermi di poter accettare i Termini per suo conto." },
      { heading: "Definizioni", body: "“Servizio” include il sito, l’estensione e le funzioni di conversione. “Contenuto di origine” è una pagina, il contenuto della scheda attiva o altro materiale inviato. “Risultato” è un PDF, anteprima o altro file generato." },
      { heading: "Licenza limitata", body: "Ti concediamo un diritto revocabile, non esclusivo, non trasferibile e limitato di usare il Servizio secondo questi Termini. Non viene trasferita la proprietà di software, marchi o altro materiale protetto." },
      { heading: "Fonti consentite e tua responsabilità", body: "Puoi convertire solo contenuti a cui hai diritto legale di accedere, che puoi trattare, riprodurre e scaricare. Sei responsabile di URL, contenuti, impostazioni e dell’uso o distribuzione di ogni Risultato." },
      { heading: "Uso vietato", body: "Non usare il Servizio per violare la legge o diritti, aggirare pagamenti o controlli, distribuire malware, inviare contenuti illeciti, sondare reti private, interferire con la sicurezza, sovraccaricare sistemi, automatizzare richieste eccessive, decodificare parti protette o rappresentare in modo ingannevole i file." },
      { heading: "Contenuto di origine e diritti di terzi", body: "Conservi i tuoi diritti sul contenuto. Page 2 File non concede diritti su materiale altrui. Dichiari che il trattamento e il Risultato non violano copyright, privacy, riservatezza, contratti o altri diritti." },
      { heading: "Trattamento temporaneo", body: "Il Servizio può trattare temporaneamente contenuti, impostazioni e file per fornire anteprima e download. Non esiste una cronologia associata a un account. L’Informativa sulla privacy descrive dati, cookie e fornitori." },
      { heading: "Limiti del risultato e della fedeltà", body: "Script, animazioni, video, contenuti protetti, font, canvas, dati dinamici e layout complessi potrebbero non essere riprodotti esattamente. Accurate copy dà priorità all’aspetto; Editable document ricostruisce testo, immagini e link supportati. Devi verificare l’anteprima e il Risultato finale." },
      { heading: "Servizi e link di terzi", body: "Il Servizio può convertire o collegarsi a siti di terzi. Page 2 File non è responsabile di disponibilità, contenuto, accuratezza, legalità, sicurezza o privacy. Il loro uso è regolato dai termini del fornitore." },
      { heading: "Privacy e cookie", body: "La nostra Informativa sulla privacy spiega il trattamento temporaneo, gli analytics, i fornitori e i cookie. Usando il Servizio riconosci il trattamento necessario alla conversione richiesta." },
      { heading: "Proprietà intellettuale di Page 2 File", body: "Il Servizio, il software, il design, i testi, i loghi e gli altri materiali appartengono o sono concessi in licenza a {{entityName}} e sono protetti. Non puoi rimuovere avvisi né copiare, vendere, sublicenziare o sfruttare commercialmente il Servizio, salvo espressa autorizzazione legale." },
      { heading: "Feedback", body: "Se fornisci suggerimenti volontari, ci concedi un diritto mondiale, perpetuo e gratuito di usarli per migliorare o sviluppare il Servizio, senza obbligo di compenso. Questo non trasferisce il tuo contenuto di origine." },
      { heading: "Modifiche, aggiornamenti e disponibilità", body: "Possiamo aggiornare, limitare, sospendere o interrompere il Servizio o le funzioni e applicare limiti per sicurezza, affidabilità o uso equo. Quando possibile, indicheremo sul sito le modifiche importanti." },
      { heading: "Sospensione e cessazione", body: "Puoi smettere di usare il Servizio in qualsiasi momento. Possiamo bloccare l’accesso se riteniamo ragionevolmente che i Termini siano stati violati, l’uso minacci sistemi o la legge richieda di agire. Le disposizioni destinate a sopravvivere restano valide." },
      { heading: "Reclami sui diritti", body: "Se ritieni che materiale disponibile tramite Page 2 File violi i tuoi diritti, contatta {{contactEmail}} e identifica l’opera, il materiale o URL, i tuoi dati e il motivo del reclamo." },
      { heading: "Nessuna garanzia", body: "Nella misura consentita, il Servizio e ogni Risultato sono forniti “così come sono” e “come disponibili”. Non garantiamo funzionamento ininterrotto, conversione senza errori, fedeltà completa, disponibilità di terzi, idoneità né che il Risultato soddisfi tutte le esigenze." },
      { heading: "Limitazione di responsabilità", body: "Nella misura consentita, {{entityName}} non risponde di perdite indirette, incidentali, speciali, consequenziali o punitive, né di profitti, dati, attività, privacy o costi derivanti dall’uso o dall’impossibilità di usare il Servizio. I diritti non escludibili per legge restano invariati." },
      { heading: "Indennizzo", body: "Nella misura consentita, accetti di difendere e indennizzare {{entityName}} da pretese di terzi derivanti dai contenuti inviati, dall’uso o distribuzione del Risultato, dalla violazione dei Termini o dei diritti altrui." },
      { heading: "Separabilità, rinuncia e intero accordo", body: "Se una disposizione è invalida, le altre restano valide e quella interessata sarà interpretata il più vicino possibile al suo scopo. La mancata applicazione non è una rinuncia. Questi Termini e l’Informativa sulla privacy costituiscono l’accordo." },
      { heading: "Legge applicabile e controversie", body: "Questi Termini sono regolati dalle leggi di {{jurisdiction}}. Prima di un procedimento, tu e {{entityName}} cercherete di risolvere la controversia in buona fede tramite comunicazione scritta. Le controversie irrisolte possono essere sottoposte ai tribunali competenti di {{jurisdiction}}, salvo norme imperative." },
      { heading: "Modifiche a questi termini", body: "Possiamo rivedere i Termini per modifiche al Servizio, ai fornitori o alla legge. Pubblicheremo la revisione con una nuova data. Continuare a usare il Servizio dopo l’entrata in vigore implica accettazione; altrimenti devi smettere di usarlo." },
      { heading: "Contatti", body: "Invia domande o comunicazioni a {{contactEmail}} oppure a {{entityName}}, {{address}}." },
    ],
    legal: true,
  },
};
