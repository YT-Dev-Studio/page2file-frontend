import type { HomeCopy } from "./home-copy";

export const homeCopyFr: HomeCopy = {
  title: "Exportez n’importe quelle page web en PDF/PPTX",
  lead:
    "Collez le lien d’une page publique. Page 2 File la divise soigneusement en pages PDF ou en diapositives PowerPoint, avec un aperçu avant le téléchargement.",
  form: {
    formatLabel: "Format",
    meta: "Sans inscription · Aperçu · Fichiers temporaires",
    pdfModeLabel: "Mode PDF",
    pdfModes: [
      { label: "Captures de page", value: "visual" },
      { label: "PDF modifiable", value: "editable" },
    ],
    powerpointModeLabel: "Mode PowerPoint",
    powerpointModes: [
      { label: "Captures de diapositives", value: "visual" },
      { label: "Présentation modifiable", value: "editable" },
    ],
    submitPdf: "Créer le PDF",
    submitPowerpoint: "Créer le PowerPoint",
    urlHelper:
      "Pages HTTPS publiques uniquement. Utilisez l’extension pour les onglets nécessitant une connexion.",
    urlLabel: "Lien de la page web",
    urlPlaceholder: "https://example.com/article",
  },
  converterFlow: {
    backAction: "Retour aux paramètres",
    processingBody:
      "Nous analysons la page et préparons le format de fichier choisi.",
    processingTitle: "Préparation de votre fichier",
    readyBody: "Cliquez pour télécharger le fichier",
    readyTitle: "Votre fichier est prêt",
  },
  closingNote:
    "Le service fonctionne avec les articles, la documentation, les pages de destination et les rapports publics. Pour une page privée ou une conversation AI, l’extension utilise l’onglet actif et fournit un aperçu temporaire.",
  preview: {
    accessibleLabel: "Exemple de résultat de conversion",
    divider: "LE SAUT DE PAGE CONSERVE L’IMAGE ENTIÈRE",
    imageNote: "L’image reste entière",
    pdfMeta: "12 pages · prêt",
    powerpointMeta: "12 diapositives · prêt",
    sourceTitle: "Un long article avec une image",
    title: "Page → fichier fidèle",
  },
  promo: {
    body:
      "L’extension fonctionne de deux façons : par URL ou depuis l’onglet actif. Nous supprimons du serveur les données de la page exportée après la fermeture de l’aperçu.",
    eyebrow: "EXTENSION CHROME",
    title: "Exportez l’onglet actuel, même s’il nécessite une connexion.",
  },
  features: {
    eyebrow: "FONCTIONNALITÉS",
    title: "Des réglages flexibles pour le contenu exporté",
    body:
      "Exportez les pages web dans un format pratique : sous forme de captures ou en conservant les médias, les liens et la mise en page.",
    items: [
      {
        title: "Exportez les conversations AI et les messageries",
        body:
          "Exportez de longues conversations depuis ChatGPT, Claude, Gemini, Grok, DeepSeek et d’autres services dans un PDF clair et lisible.",
      },
      {
        title: "Les 2 formats les plus pratiques",
        list: {
          items: [
            "Enregistrez des captures en PDF/PPTX.",
            "Créez des fichiers PDF/PPTX modifiables en conservant les médias, les liens et la structure.",
          ],
          style: "unordered",
        },
      },
      {
        title: "Contrôlez le contenu du fichier",
        body:
          "Conservez les médias, les liens et le design dans les fichiers exportés. Vous pouvez aussi supprimer les éléments inutiles pendant l’aperçu.",
      },
      {
        title: "2 modes de fonctionnement",
        body:
          "Exportez l’onglet actuel depuis n’importe quel site ou fournissez l’URL d’une page publique.",
      },
      {
        title: "Les problèmes des autres solutions sont corrigés",
        body:
          "Vous obtenez un PDF ou PPTX avec des images entières et sans espaces démesurés entre les contenus.",
      },
      {
        title: "Sécurisé et sans inscription",
        body:
          "Aucun compte n’est nécessaire pour commencer. Installez simplement l’extension et enregistrez la page choisie.",
      },
    ],
  },
  howItWorks: {
    action: "Ouvrir le guide complet",
    body:
      "Le moyen le plus rapide consiste à installer l’extension : elle fonctionne avec l’onglet actuel sans copier de lien.",
    eyebrow: "POUR COMMENCER",
    extensionAction: "Installer l’extension",
    installTime: "En 30 secondes",
    items: [
      {
        title: "Installez l’extension",
        body:
          "Ajoutez Page 2 File à Chrome. Aucun compte Page 2 File n’est nécessaire.",
      },
      {
        title: "Ouvrez la page",
        list: {
          items: [
            "Accédez à l’onglet souhaité.",
            "Ouvrez Page 2 File.",
            "Cliquez sur Preview.",
          ],
          style: "ordered",
        },
      },
      {
        title: "Vérifiez et téléchargez",
        body:
          "Vérifiez le résultat, supprimez des sections si nécessaire et téléchargez le fichier terminé.",
      },
    ],
    note: "Avec des exemples pour un lien public, un onglet privé et une conversation AI",
    stepLabels: ["Étape 1", "Étape 2", "Étape 3"],
    title: "Trois étapes jusqu’au fichier final",
  },
  blog: {
    action: "Lire l’article",
    allAction: "Tous les articles",
    body:
      "Des guides pratiques sur la fidélité, la modification, les liens, les sauts de page et l’utilisation sûre des conversations AI.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Découvrez comment exporter différents types de sites web",
  },
  faq: {
    body:
      "Des réponses claires sur la capture de pages, les modes de sortie, les onglets privés, les aperçus temporaires et l’export des conversations.",
    eyebrow: "QUESTIONS FRÉQUENTES",
    items: [
      {
        title: "Comment convertir une page web en PDF ou PowerPoint ?",
        body:
          "Pour une page publique, collez son URL HTTPS, choisissez PDF ou PowerPoint, sélectionnez les captures de page ou le mode modifiable, puis vérifiez les sections avant de créer le fichier. Pour une page nécessitant une connexion, utilisez l’extension Chrome Page 2 File avec l’onglet actif.",
      },
      {
        title: "Page 2 File peut-il préserver le design de la page ?",
        body:
          "Les captures de page visent à préserver l’apparence rendue, notamment la mise en page, les couleurs, les images et les graphiques visibles. Les animations, vidéos et commandes interactives propres au navigateur deviennent une représentation statique.",
      },
      {
        title: "Le texte et les liens restent-ils modifiables ou cliquables ?",
        body:
          "Le mode modifiable conserve le texte pris en charge comme contenu du document et préserve les destinations de liens sûres. Les widgets complexes, les graphiques dessinés directement par le navigateur et les éléments non pris en charge peuvent être représentés par des images. Les captures privilégient l’apparence sans transformer chaque pixel en objet modifiable.",
      },
      {
        title: "Peut-il capturer les pages longues et dynamiques en entier ?",
        body:
          "L’extension travaille avec le rendu de l’onglet actif, y compris les longues pages une fois les sections nécessaires chargées. Dépliez d’abord les contenus masqués et faites défiler la page jusqu’en bas. Le contenu masqué ou non chargé ne peut pas être exporté.",
      },
      {
        title: "Peut-il convertir des pages nécessitant une connexion ?",
        body:
          "Oui, avec l’extension Chrome après avoir ouvert la page normalement. L’extension utilise l’onglet actif et ne vous demande pas d’envoyer un mot de passe au formulaire d’URL publique. Elle ne contourne aucun contrôle d’accès.",
      },
      {
        title: "Puis-je convertir une seule page ou un site entier ?",
        body: [
          { kind: "text", text: "Les convertisseurs de pages web ainsi que " },
          { kind: "link", label: "Webpage to PDF Converter — Web2File", route: "page2pdf-gpt" },
          { kind: "text", text: " et " },
          {
            kind: "link",
            label: "One Page 2 PowerPoint",
            route: "one-page2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " traitent une URL. Pour plusieurs pages publiques accessibles, utilisez ",
          },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " ou " },
          {
            kind: "link",
            label: "Web 2 PowerPoint",
            route: "web2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " : ils renvoient un PDF ou PPTX distinct pour chaque page choisie, pas un fichier fusionné.",
          },
        ],
      },
      {
        title: "Quelle différence entre captures de page et mode modifiable ?",
        body:
          "Les captures privilégient la fidélité à la page rendue. Le mode modifiable privilégie le texte sélectionnable, les images prises en charge, les liens sûrs et une structure de document réutilisable. Vérifiez les graphiques complexes, la typographie et les mises en page, car chaque mode peut nécessiter un remplacement volontaire.",
      },
      {
        title: "Que deviennent les données d’aperçu après la fermeture de l’onglet ?",
        body:
          "Les données d’aperçu sont temporaires et supprimées après la fermeture de l’onglet d’aperçu. Page 2 File ne possède pas de base de données d’historique des conversions et ne fournit pas d’archive des aperçus précédents.",
      },
      {
        title: "Ai-je besoin d’un compte ?",
        body:
          "Aucun compte Page 2 File n’est requis pour le parcours par URL publique ou l’aperçu de l’extension. Vous devrez peut-être rester connecté au site source pour capturer une page privée à laquelle vous êtes autorisé à accéder.",
      },
      {
        title: "Peut-il exporter les conversations AI et de messagerie ?",
        body:
          "L’extension peut exporter une conversation rendue dans un onglet Chrome, notamment les conversations AI et messageries web prises en charge. Chargez d’abord la plage de messages nécessaire. Les applications natives et interfaces hors navigateur, comme Signal pour ordinateur, ne peuvent pas être capturées.",
      },
    ],
    title: "Ce qu’il faut savoir",
  },
  finalCta: {
    body:
      "Collez ici un lien public ou installez l’extension pour l’onglet actuel.",
    eyebrow: "PRÊT À L’ESSAYER SUR VOTRE PAGE ?",
    title: "Obtenez un PDF ou PowerPoint avant d’ouvrir un éditeur",
  },
};
