import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const frenchLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "Application GPT · URL exactes, PDF ou captures",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File traite des URL publiques exactes, des PDF de pages web et des captures en Visual PDF ou Interactive PDF.",
        lead: "Fournissez une URL publique exacte, une liste d’URL exactes, un PDF de page web ou des captures pleine page ou consécutives. Choisissez Visual PDF pour enregistrer le site sous forme de captures ou Interactive PDF pour le texte sélectionnable et les liens cliquables.",
        sections: [
            { heading: "1. Indiquer une ou plusieurs URL", body: "Envoyez une URL publique, une liste d’URL publiques exactes, un PDF existant de page web ou des captures pleine page ou consécutives. Chaque page web reste dans un PDF distinct." },
            { heading: "2. Choisir le type de PDF", body: "Choisissez Visual PDF pour un résultat en images privilégiant l’apparence de la page, ou Interactive PDF lorsque le texte sélectionnable et les liens cliquables sont prioritaires. Un seul mode s’applique à toute liste d’URL." },
            { heading: "3. Convertir uniquement les pages fournies", body: "L’application GPT ouvre uniquement les URL publiques exactes indiquées. Elle n’explore pas les domaines ou sitemaps, ne découvre pas de pages, ne suit pas les liens internes et ne contourne ni authentification, paywall, CAPTCHA, restriction géographique ou autre contrôle d’accès." },
            { heading: "4. Traiter les PDF et les captures", body: "Les captures importées peuvent être assemblées dans l’ordre vertical en Visual PDF. Les PDF de pages web sont traités sans inventer de contenu manquant ; Interactive PDF privilégie le texte, la mise en page, les images et les liens vérifiés existants." },
            { heading: "5. Obtenir des conseils adaptés et vérifier le résultat", body: "Si la conversion directe est indisponible ou incomplète, l’application fournit des instructions propres à la page, au navigateur ou à l’export natif. Vérifiez chaque PDF : contenu manquant ou coupé, zones vides, lisibilité, ordre, mise en page, liens et fidélité au mode." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Ouvrir GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Instructions d’utilisation",
            firstStageDescription: "Fournissez à l’application GPT une URL fonctionnelle.",
            firstStageLabel: "Envoyer les URL",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "Application GPT · fichier HTML importé",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File transforme un fichier HTML importé en PDF vérifié en conservant la mise en page, les images, le texte et les liens.",
        lead: "Importez exactement un fichier HTML. GPT HTML 2 PDF prévisualise sa présentation, charge les styles, polices et images accessibles, puis crée un PDF vérifié avec du texte sélectionnable et des liens cliquables lorsque cela est possible.",
        sections: [
            { heading: "1. Importer exactement un fichier HTML", body: "Joignez un seul document HTML. L’application GPT n’accepte pas une URL à sa place, ne traite pas plusieurs fichiers HTML, n’explore pas les sites, ne suit pas les liens vers d’autres pages et ne fusionne pas les documents." },
            { heading: "2. Inclure les styles et les ressources", body: "Les styles intégrés sont utilisés automatiquement avec les feuilles de style, polices et images distantes accessibles. Si le HTML référence un fichier CSS local manquant, importez le fichier correspondant pour un résultat plus fidèle ou continuez sans lui." },
            { heading: "3. Prévisualiser et préserver la conception", body: "Le HTML est prévisualisé dans une largeur de bureau adaptée avant la conversion. Le PDF vise à conserver le thème, les couleurs, la typographie, les espacements, les colonnes, les cartes, les images et l’ordre du contenu sans activer les commandes interactives." },
            { heading: "4. Créer un PDF lisible", body: "L’application GPT produit un PDF avec du texte sélectionnable et des hyperliens fonctionnels lorsque cela est possible. Les mises en page larges peuvent utiliser le mode paysage ou un format adapté afin de ne pas comprimer, rogner ou couper les éléments importants." },
            { heading: "5. Vérifier le fichier terminé", body: "Chaque PDF est contrôlé avant sa livraison pour repérer le contenu manquant, les éléments rognés, les zones vides inexpliquées, les problèmes de lisibilité, les sauts de page, le placement des images et les liens pris en charge." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Ouvrir GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Cinq étapes du HTML au PDF",
            firstStageDescription: "Transmettez un fichier HTML à l’application GPT.",
            firstStageLabel: "Importer le HTML",
        },
    }
};
