import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

const gptRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
  { route: "web2pdf-gpt", label: "Web 2 PDF" },
  { route: "html2pdf-gpt", label: "HTML 2 PDF" },
  { route: "one-page2powerpoint-gpt", label: "One Page 2 PowerPoint" },
  { route: "web2powerpoint-gpt", label: "Web 2 PowerPoint" },
];

const chatRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "export-ai-chat-to-pdf", label: "Tous les exports de conversations AI" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT en PDF" },
  { route: "export-claude-to-pdf", label: "Claude en PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini en PDF" },
  { route: "export-grok-to-pdf", label: "Grok en PDF" },
];

export const frenchLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "Application GPT · URL exactes, PDF ou captures",
    title: "Webpage to PDF Converter — Web2File",
    description:
      "Webpage to PDF Converter — Web2File convertit des URL publiques exactes et traite des PDF de pages web ou des captures importées en fichiers Visual PDF ou Interactive PDF distincts.",
    lead:
      "Fournissez une URL publique exacte, une liste d’URL exactes, un PDF de page web ou des captures pleine page ou consécutives. Choisissez Visual PDF pour enregistrer le site sous forme de captures ou Interactive PDF pour le texte sélectionnable et les liens cliquables.",
    sections: [
      { heading: "1. Indiquer une ou plusieurs URL", body: "Envoyez une URL publique, une liste d’URL publiques exactes, un PDF existant de page web ou des captures pleine page ou consécutives. Chaque page web reste dans un PDF distinct." },
      { heading: "2. Choisir le type de PDF", body: "Choisissez Visual PDF pour un résultat en images privilégiant l’apparence de la page, ou Interactive PDF lorsque le texte sélectionnable et les liens cliquables sont prioritaires. Un seul mode s’applique à toute liste d’URL." },
      { heading: "3. Convertir uniquement les pages fournies", body: "L’application GPT ouvre uniquement les URL publiques exactes indiquées. Elle n’explore pas les domaines ou sitemaps, ne découvre pas de pages, ne suit pas les liens internes et ne contourne ni authentification, paywall, CAPTCHA, restriction géographique ou autre contrôle d’accès. Pour découvrir tout un site, utilisez Web2File: Website 2 PDF." },
      { heading: "4. Traiter les PDF et les captures", body: "Les captures importées peuvent être assemblées dans l’ordre vertical en Visual PDF. Les PDF de pages web sont traités sans inventer de contenu manquant ; Interactive PDF privilégie le texte, la mise en page, les images et les liens vérifiés existants." },
      { heading: "5. Obtenir des conseils adaptés et vérifier le résultat", body: "Si la conversion directe est indisponible ou incomplète, l’application fournit des instructions propres à la page, au navigateur ou à l’export natif. Vérifiez chaque PDF : contenu manquant ou coupé, zones vides, lisibilité, ordre, mise en page, liens et fidélité au mode." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Ouvrir GPT Webpage 2 PDF",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Enregistrer une page web en PDF" },
      { slug: "long-webpage-page-breaks", label: "Corriger les sauts de page sur une longue page web" },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Instructions d’utilisation",
      firstStageDescription: "Fournissez à l’application GPT une URL fonctionnelle.",
      firstStageLabel: "Envoyer les URL",
    },
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "Application GPT · pages web accessibles",
    title: "Convertir les pages d’un site en PDF distincts avec Web 2 PDF",
    description:
      "Web 2 PDF trouve les pages accessibles d’un site, convertit les pages sélectionnées et renvoie un PDF distinct pour chacune.",
    lead:
      "Fournissez une adresse publique à Web 2 PDF. L’application GPT peut identifier les pages accessibles, convertir les URL choisies et renvoyer plusieurs liens, un PDF par page.",
    sections: [
      { heading: "1. Fournir le site web", body: "Envoyez l’URL publique de départ. L’application GPT identifie les pages accessibles et affiche clairement le périmètre choisi avant la conversion." },
      { heading: "2. Vérifier la liste des pages", body: "Confirmez les pages accessibles à inclure. Les pages nécessitant une connexion, les URL bloquées et les domaines externes restent exclus." },
      { heading: "3. Télécharger des PDF distincts", body: "Chaque page convertie est renvoyée dans son propre PDF. Web 2 PDF ne promet ni document fusionné pour tout le site ni jeu de données de scraping structuré." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Ouvrir l’application GPT Web 2 PDF",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Convertir un site de plusieurs pages en PDF" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Types de sites exportables" },
    ],
    relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "Application GPT · fichier HTML importé",
    title: "Convertir un fichier HTML importé avec HTML 2 PDF",
    description:
      "HTML 2 PDF est une application GPT qui accepte un fichier HTML importé et renvoie un PDF propre tout en indiquant les limites du rendu.",
    lead:
      "Importez un fichier HTML dans l’application GPT. HTML 2 PDF effectue un rendu isolé et renvoie un PDF ; ce parcours à partir d’un fichier brut n’est disponible que dans cette application GPT.",
    sections: [
      { heading: "1. Importer le fichier HTML", body: "Joignez le document HTML que vous êtes autorisé à traiter. Ce parcours part du fichier importé, pas de l’URL d’une page web publique." },
      { heading: "2. Convertir en un PDF", body: "L’application GPT renvoie un PDF du document importé. Les ressources distantes, scripts, polices personnalisées et fonctions du navigateur peuvent différer." },
      { heading: "3. Considérer le HTML comme non fiable", body: "Un rendu sûr exige une isolation des réseaux privés, fichiers locaux et scripts non contrôlés. Le résultat est une conversion de document, pas une exécution web hébergée." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Ouvrir l’application GPT HTML 2 PDF",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Convertir du HTML en PDF en toute sécurité" },
      { slug: "webpage-capture-vs-web-scraping", label: "Comparer la capture et le scraping" },
    ],
    relatedRoutes: gptRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "Application GPT · une URL publique",
    title: "Convertir une URL en un PPTX avec One Page 2 PowerPoint",
    description:
      "One Page 2 PowerPoint est une application GPT spécialisée qui convertit une URL publique et renvoie une présentation PPTX pour cette page.",
    lead:
      "Fournissez une URL HTTPS publique à l’application GPT. One Page 2 PowerPoint envoie la page à convertir et renvoie une présentation PPTX téléchargeable.",
    sections: [
      { heading: "1. Envoyer une URL publique", body: "Collez l’adresse exacte de la page. L’application GPT traite une page par demande et ne découvre pas le reste du site." },
      { heading: "2. Recevoir un PPTX", body: "La page est organisée en présentation et renvoyée dans un fichier PowerPoint. Vérifiez les limites des diapositives et les remplacements par captures ou éléments modifiables." },
      { heading: "3. Conserver les onglets privés dans Chrome", body: "Une application GPT pour URL publiques ne peut pas reprendre votre session de navigateur. Utilisez l’extension Page 2 File lorsque la source est ouverte derrière une connexion." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "Ouvrir l’application GPT One Page 2 PowerPoint",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Convertir une page web en PowerPoint" },
      { slug: "sections-to-slides", label: "Transformer les sections d’une page en diapositives" },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "Application GPT · pages web accessibles",
    title: "Convertir les pages d’un site en PPTX avec Web 2 PowerPoint",
    description:
      "Web 2 PowerPoint trouve les pages accessibles, convertit les pages sélectionnées et renvoie un fichier PPTX distinct pour chacune.",
    lead:
      "Fournissez une adresse publique à Web 2 PowerPoint. L’application GPT identifie les pages accessibles, convertit les URL choisies et renvoie plusieurs liens de présentation.",
    sections: [
      { heading: "1. Fournir le site web", body: "Envoyez l’URL publique de départ et définissez clairement le périmètre du site. Les domaines externes et pages privées ne sont pas ajoutés silencieusement." },
      { heading: "2. Confirmer les pages accessibles", body: "Vérifiez la liste des pages découvertes avant la conversion. Seules les pages sélectionnées et accessibles sont envoyées à Page 2 File." },
      { heading: "3. Télécharger des fichiers PPTX distincts", body: "Chaque page convertie est renvoyée dans sa propre présentation PowerPoint. L’application GPT ne promet pas une présentation fusionnée pour tout le site." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Ouvrir l’application GPT Web 2 PowerPoint",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Convertir un site en PowerPoint" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Captures de diapositives ou diapositives modifiables" },
    ],
    relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "Export de conversations AI",
    title: "Exporter la conversation depuis l’onglet actif",
    description:
      "Exportez les conversations ChatGPT, Claude, Gemini et Grok prises en charge en PDF avec l’extension Page 2 File, un aperçu temporaire et aucun historique.",
    lead:
      "Choisissez l’apparence d’origine ou un document de lecture épuré. L’extension Page 2 File exporte la conversation depuis l’onglet actif.",
    sections: [
      { heading: "Interfaces de conversation prises en charge", body: "Page 2 File prend en charge ChatGPT, Claude, Gemini et Grok, avec une solution générique prudente pour les autres conversations dans le navigateur.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Apparence d’origine", body: "Préservez les groupes de messages, les blocs de code, les tableaux et les liens sources visibles." },
      { heading: "Document épuré", body: "Réorganisez le texte pris en charge dans un document plus calme tout en conservant les auteurs et les destinations des liens." },
      { heading: "Produit indépendant", body: "Page 2 File n’est affilié, approuvé ni exploité par aucune plateforme AI prise en charge." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installer l’extension",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "Exporter des conversations AI en toute confidentialité" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Types de sites exportables" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "Export ChatGPT",
    title: "Exporter de longues conversations ChatGPT en PDF",
    description:
      "Exportez les messages ChatGPT visibles, blocs de code, tableaux, liens et longues conversations depuis l’onglet actif vers un PDF vérifié.",
    lead:
      "Capturez la conversation visible dans l’onglet actif, vérifiez les sauts de page et téléchargez le fichier sans créer de compte Page 2 File.",
    sections: [
      { heading: "Ce qui est préservé", body: "Les messages, l’ordre des intervenants, les blocs de code, les tableaux et les liens visibles sont représentés dans l’aperçu." },
      { heading: "Deux styles de lecture", body: "Conservez le rythme visuel d’origine ou choisissez un document plus épuré, optimisé pour la lecture et l’impression." },
      { heading: "Limites propres à la plateforme", body: "Les branches repliées, messages non chargés et contenus hors DOM peuvent nécessiter un défilement ou un dépliage avant la capture." },
      { heading: "Aucune affiliation officielle", body: "Page 2 File est un outil d’export indépendant qui n’est ni approuvé par ni affilié à OpenAI ou ChatGPT." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installer pour ChatGPT",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Exporter une conversation ChatGPT en PDF" },
      { slug: "export-ai-chats-privately", label: "Protéger les données d’aperçu des conversations AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Export Claude",
    title: "Enregistrer les conversations Claude et les artifacts visibles",
    description:
      "Exportez les conversations Claude visibles, le Markdown, le code, les citations et le contexte d’artifact disponible depuis l’onglet actif vers un PDF vérifié.",
    lead:
      "Après un clic explicite, l’extension lit la conversation active et prépare un aperçu temporaire pour vérifier les longues réponses.",
    sections: [
      { heading: "Les longues réponses restent structurées", body: "Les titres, listes, citations et blocs de code conservent leur ordre de lecture." },
      { heading: "Contexte des artifacts", body: "Les titres d’artifacts visibles et le contenu disponible peuvent être représentés sans prétendre accéder à des éléments masqués." },
      { heading: "Aucune affiliation officielle", body: "Page 2 File est un outil d’export indépendant qui n’est pas approuvé par Anthropic." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installer pour Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Exporter une conversation Claude en PDF" },
      { slug: "export-ai-chats-privately", label: "Protéger les données d’aperçu des conversations AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Export Gemini",
    title: "Transformer une conversation Gemini en PDF lisible",
    description:
      "Exportez les messages Gemini visibles, cartes sources, code et citations depuis l’onglet actif vers un PDF vérifié avec aperçu temporaire.",
    lead:
      "Vérifiez l’apparence des cartes sources et images visibles avant de produire un document épuré ou visuellement fidèle.",
    sections: [
      { heading: "Les sources restent utiles", body: "Les citations et liens sources visibles restent cliquables lorsque leur destination est sûre." },
      { heading: "Les images suivent le DOM", body: "Seuls les médias disponibles sur la page active peuvent apparaître dans l’aperçu temporaire." },
      { heading: "Aucune affiliation officielle", body: "Page 2 File est indépendant et n’est pas un produit Google ou Gemini." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installer pour Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Exporter une conversation Gemini en PDF" },
      { slug: "export-ai-chats-privately", label: "Protéger les données d’aperçu des conversations AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Export Grok",
    title: "Exporter les fils Grok avec leurs citations visibles",
    description:
      "Exportez les conversations Grok visibles, les liens X, les publications citées et les citations depuis l’onglet actif vers un PDF vérifié.",
    lead:
      "Capturez le fil actif, préservez le contexte source visible et choisissez un aperçu visuel ou un document épuré.",
    sections: [
      { heading: "Ordre de lecture adapté au fil", body: "Les messages et le contexte des publications citées restent groupés au lieu de former un flux de texte sans indication." },
      { heading: "Liens X visibles", body: "Les URL de publications et les citations restent cliquables lorsqu’elles passent le contrôle de sécurité." },
      { heading: "Aucune affiliation officielle", body: "Page 2 File est un produit indépendant qui n’est approuvé ni par xAI ni par X." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Installer pour Grok",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Exporter d’autres conversations AI en PDF" },
      { slug: "export-ai-chats-privately", label: "Protéger les données d’aperçu des conversations AI" },
    ],
    relatedRoutes: chatRoutes,
  },
};
