import type { LandingContent } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

export const frenchLegalLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  privacy: {
    route: "privacy",
    eyebrow: "Confidentialité et traitement des données",
    title: "Politique de confidentialité",
    description:
      "Comment Page 2 File traite le contenu des pages web, les fichiers temporaires, les cookies, les données d’analyse et les demandes relatives à la confidentialité.",
    lead:
      "Cette politique explique les traitements effectués par Page 2 File lorsque vous consultez le site, utilisez l’extension Chrome ou convertissez une page web en PDF.",
    sections: [
      {
        heading: "Opérateur et champ d’application",
        body:
          "{{entityName}}, situé à {{address}}, exploite Page 2 File et est responsable des traitements décrits ici. Cette politique s’applique au site Page 2 File, à l’extension de navigateur et aux services associés de conversion de pages web.",
      },
      {
        heading: "Définitions",
        body:
          "Le « Service » désigne Page 2 File et ses fonctions de conversion. Le « contenu de conversion » désigne l’URL, le contenu visible, les options choisies et le fichier PDF généré. Les « données personnelles » sont les informations qui identifient une personne ou peuvent raisonnablement lui être associées.",
      },
      {
        heading: "Informations traitées",
        body:
          "Selon votre utilisation, nous pouvons traiter les données techniques de la demande, l’adresse IP, des informations sur le navigateur et l’appareil, les pages Page 2 File consultées, les paramètres de campagne autorisés, une URL publique ou le contenu visible dans l’onglet actif, les réglages de conversion, les identifiants temporaires et les fichiers générés.",
      },
      {
        heading: "Informations que nous ne demandons pas",
        body:
          "Page 2 File ne nécessite pas de compte et ne demande ni données de carte bancaire, ni adresse de facturation, ni mot de passe du site source. L’extension utilise la page déjà ouverte dans votre navigateur et ne reçoit pas le mot de passe utilisé pour y accéder.",
      },
      {
        heading: "Utilisation des informations",
        body:
          "Nous traitons les informations pour fournir les aperçus et fichiers, protéger le Service contre les abus, diagnostiquer les erreurs, maintenir sa fiabilité, comprendre l’utilisation agrégée des pages publiques, répondre aux demandes et respecter la loi. Nous ne vendons pas les données personnelles.",
      },
      {
        heading: "Contenu de conversion et traitement temporaire",
        body:
          "Une conversion par URL publique ou un aperçu de l’extension nécessite le traitement temporaire de la page et des options soumises. Page 2 File ne fournit pas d’historique lié à un compte. Les données d’aperçu et fichiers générés sont de courte durée et supprimés à la fermeture de l’aperçu ou à l’expiration technique configurée.",
      },
      {
        heading: "Analyse et attribution",
        body:
          "Lorsqu’un identifiant Google Analytics valide est configuré, Google Analytics se charge automatiquement sur les pages marketing publiques. Il peut recevoir des informations sur la page, l’appareil, le navigateur, la localisation approximative et la campagne. Les valeurs UTM autorisées sont normalisées en mémoire et envoyées avec l’événement ; Page 2 File ne les conserve pas dans un cookie d’attribution personnalisé.",
      },
      {
        heading: "Prestataires et divulgations",
        body:
          "Page 2 File utilise {{processors}} pour fournir, protéger et mesurer le Service. Ces prestataires peuvent traiter les données techniques uniquement lorsque leurs services l’exigent et selon leurs propres politiques. Nous pouvons aussi divulguer des informations lorsque la loi l’exige, pour protéger des droits ou la sécurité, ou dans le cadre d’un transfert d’activité licite.",
      },
      {
        heading: "Conservation et suppression",
        body:
          "Le contenu de conversion n’est conservé que pour le traitement temporaire et le téléchargement, sans historique visible par l’utilisateur. Les journaux de sécurité, données d’infrastructure, données d’analyse et correspondances peuvent être conservés pendant la durée raisonnablement nécessaire à la sécurité, au fonctionnement, aux obligations légales ou au traitement d’une demande.",
      },
      {
        heading: "Sécurité",
        body:
          "Page 2 File utilise des routes de conversion de même origine, des sessions anonymes, des contrôles Origin et CSRF, des demandes backend signées, la validation des URL, un rendu isolé et des fichiers temporaires. Aucune mesure ne garantit une sécurité absolue ; évitez donc de convertir du contenu que vous n’êtes pas autorisé à divulguer.",
      },
      {
        heading: "Traitement international",
        body:
          "Nos prestataires peuvent traiter des données techniques ou d’analyse dans d’autres pays. Le cas échéant, nous nous appuyons sur leurs garanties et sur des mécanismes de transfert légaux. L’opérateur est établi au {{jurisdiction}}.",
      },
      {
        heading: "Vos droits",
        body:
          "Selon la loi applicable, vous pouvez demander l’accès, la rectification, la suppression ou la limitation de vos données personnelles, ou vous opposer à certains traitements. Page 2 File ne disposant ni de comptes ni d’archives de conversions, nous pouvons avoir besoin d’informations permettant d’identifier un enregistrement opérationnel pertinent.",
      },
      {
        heading: "Sites tiers",
        body:
          "Page 2 File peut ouvrir ou convertir le contenu de sites exploités par des tiers et proposer des liens externes. Leur contenu, leur sécurité et leurs pratiques de confidentialité sont contrôlés par ces tiers, dont les propres conditions s’appliquent.",
      },
      {
        heading: "Enfants",
        body:
          "Le Service ne s’adresse pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment leurs données personnelles. Un parent ou tuteur qui pense qu’un enfant a fourni des données peut nous contacter pour demander leur suppression.",
      },
      {
        id: "cookies",
        heading: "Cookies",
        body:
          "Page 2 File utilise les cookies de courte durée p2f_session et p2f_csrf pour maintenir une session de conversion anonyme et protéger les demandes. Ils utilisent le réglage Strict SameSite et expirent après une heure. Google Analytics peut définir des cookies d’analyse sur les pages publiques lorsque l’analyse est configurée. Ces cookies ne contiennent ni contenu de conversion ni données de profil directement identifiantes.",
      },
      {
        heading: "Bloquer et supprimer les cookies",
        body:
          "Vous pouvez bloquer ou supprimer les cookies dans les réglages du navigateur. Bloquer les cookies de session ou CSRF de Page 2 File peut empêcher les conversions. Bloquer Google Analytics limite la mesure, mais n’empêche pas le chargement des pages publiques principales. Utilisez les contrôles de cookies du navigateur pour les supprimer.",
      },
      {
        heading: "Modification de cette politique",
        body:
          "Nous pouvons mettre cette politique à jour lorsque le Service, les prestataires ou les exigences légales changent. La nouvelle version sera publiée ici avec une date révisée. Les changements importants s’appliquent à compter de la date indiquée.",
      },
      {
        heading: "Contact",
        body:
          "Les questions et demandes relatives à la confidentialité peuvent être envoyées à {{contactEmail}}. L’opérateur est {{entityName}}, {{address}}, soumis aux lois du {{jurisdiction}}.",
      },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Contrat de service",
    title: "Conditions d’utilisation",
    description:
      "Conditions d’utilisation de Page 2 File, notamment les sources autorisées, les limites de conversion, les responsabilités de l’utilisateur et la disponibilité.",
    lead:
      "Ces conditions régissent votre utilisation du site Page 2 File, de l’extension Chrome et des services de conversion de pages web en PDF.",
    sections: [
      { heading: "Acceptation et opérateur", body: "En accédant à Page 2 File ou en l’utilisant, vous acceptez ces conditions. Le Service est exploité par {{entityName}}, situé à {{address}}. Si vous utilisez le Service pour une organisation, vous confirmez être autorisé à accepter ces conditions en son nom." },
      { heading: "Définitions", body: "Le « Service » désigne le site Page 2 File, l’extension Chrome et les fonctions de conversion. Le « contenu source » désigne une page web, le contenu d’un onglet actif ou tout autre contenu soumis. La « sortie » désigne un PDF, un fichier PDF, un aperçu ou un autre résultat généré." },
      { heading: "Licence limitée", body: "Nous vous accordons un droit révocable, non exclusif, non transférable et limité d’accéder au Service et de l’utiliser conformément à ces conditions. Aucun droit de propriété sur le logiciel, la marque ou les autres éléments protégés de Page 2 File ne vous est transféré." },
      { heading: "Sources autorisées et votre responsabilité", body: "Vous ne pouvez convertir que le contenu source auquel vous êtes légalement autorisé à accéder et que vous pouvez traiter, reproduire et télécharger. Vous êtes responsable des URL et contenus d’onglet soumis, des réglages choisis et de l’utilisation ou diffusion de chaque sortie." },
      { heading: "Utilisations interdites", body: "Vous ne devez pas utiliser le Service pour enfreindre la loi ou les droits d’autrui, contourner des paywalls ou contrôles d’accès, diffuser des logiciels malveillants, soumettre du contenu abusif ou illégal, sonder des réseaux privés, perturber des contrôles de sécurité, surcharger les systèmes, automatiser des demandes excessives, rétroconcevoir des parties protégées ou présenter de manière trompeuse les fichiers générés." },
      { heading: "Contenu source et droits des tiers", body: "Vous conservez les droits que vous détenez déjà sur le contenu source. Page 2 File ne vous accorde aucun droit sur le contenu d’autrui. Vous déclarez que le traitement et la création de la sortie ne violent aucun droit d’auteur, de confidentialité, contractuel ou autre." },
      { heading: "Traitement temporaire", body: "Le Service peut traiter temporairement le contenu source, les réglages et les fichiers générés afin de fournir un aperçu et un téléchargement. Page 2 File ne fournit pas d’historique lié à un compte. La Politique de confidentialité détaille les données temporaires, cookies et prestataires." },
      { heading: "Limites de la sortie et de la fidélité", body: "Les pages web peuvent contenir des scripts, animations, vidéos, médias protégés, polices personnalisées, graphiques canvas, données dynamiques et mises en page complexes impossibles à reproduire exactement dans un PDF statique. Accurate copy privilégie l’apparence ; Editable document reconstruit le texte, les images et les liens pris en charge. Vérifiez l’aperçu et la sortie finale." },
      { heading: "Services et liens tiers", body: "Le Service peut convertir des sites et services tiers ou proposer des liens vers eux. Page 2 File n’est pas responsable de leur disponibilité, contenu, exactitude, légalité, sécurité ou confidentialité. Leur utilisation reste soumise aux conditions du prestataire concerné." },
      { heading: "Confidentialité et cookies", body: "Notre Politique de confidentialité explique le traitement temporaire, l’analyse, les prestataires et les cookies. En utilisant le Service, vous reconnaissez que le traitement nécessaire à la conversion demandée aura lieu comme décrit." },
      { heading: "Propriété intellectuelle de Page 2 File", body: "Le Service, le logiciel, le design, les textes, logos et autres éléments Page 2 File appartiennent à {{entityName}} ou lui sont concédés sous licence et sont protégés par la loi. Vous ne pouvez supprimer les mentions de propriété, copier, vendre, sous-licencier ou exploiter commercialement le Service, sauf autorisation légale expresse." },
      { heading: "Commentaires", body: "Si vous fournissez volontairement des suggestions ou commentaires, vous nous accordez un droit mondial, perpétuel et gratuit de les utiliser pour améliorer ou développer le Service, sans obligation de rémunération. Cela ne transfère pas la propriété de votre contenu source." },
      { heading: "Changements, mises à jour et disponibilité", body: "Nous pouvons mettre à jour, limiter, suspendre ou interrompre le Service ou une fonction, sans garantir leur disponibilité permanente. Des limites techniques peuvent être appliquées pour la sécurité, la fiabilité ou l’utilisation équitable. Lorsque possible, les changements importants seront indiqués sur le site." },
      { heading: "Suspension et résiliation", body: "Vous pouvez cesser d’utiliser le Service à tout moment. Nous pouvons bloquer ou suspendre l’accès si nous estimons raisonnablement que ces conditions ont été violées, que l’utilisation menace le Service ou un autre système, ou que la loi l’exige. Les dispositions destinées à survivre restent applicables." },
      { heading: "Réclamations relatives aux droits", body: "Si vous estimez qu’un contenu disponible par Page 2 File porte atteinte à vos droits, contactez {{contactEmail}} en identifiant l’œuvre protégée, le contenu ou l’URL concerné, vos coordonnées et une explication de l’atteinte alléguée." },
      { heading: "Absence de garantie", body: "Dans la mesure maximale permise par la loi, le Service et chaque sortie sont fournis « en l’état » et « selon disponibilité ». Nous ne garantissons ni fonctionnement ininterrompu, ni conversion sans erreur, ni fidélité complète, ni disponibilité d’une page tierce, ni adéquation à un usage particulier, ni satisfaction de toutes vos exigences." },
      { heading: "Limitation de responsabilité", body: "Dans la mesure permise par la loi, {{entityName}} n’est pas responsable des pertes indirectes, accessoires, spéciales, consécutives ou punitives, des pertes de bénéfices, données, activité ou confidentialité, ni des coûts dus à l’utilisation ou à l’impossibilité d’utiliser le Service. Les droits qui ne peuvent être exclus restent inchangés." },
      { heading: "Indemnisation", body: "Dans la mesure permise par la loi, vous acceptez de défendre et d’indemniser {{entityName}} contre les réclamations de tiers découlant du contenu source soumis, de l’utilisation ou diffusion d’une sortie, de la violation de ces conditions ou des droits d’autrui." },
      { heading: "Divisibilité, renonciation et intégralité", body: "Si une disposition est jugée invalide ou inapplicable, les autres restent en vigueur et la disposition concernée sera interprétée au plus près de son objectif. Le défaut d’application ne vaut pas renonciation. Ces conditions et la Politique de confidentialité constituent l’accord régissant le Service." },
      { heading: "Droit applicable et litiges", body: "Ces conditions sont régies par les lois du {{jurisdiction}}, sans tenir compte des règles de conflit de lois. Avant toute procédure formelle, vous et {{entityName}} tenterez de bonne foi de résoudre le litige par notification écrite. Les litiges non résolus peuvent être soumis aux tribunaux compétents du {{jurisdiction}}, sauf exigence contraire d’une loi impérative." },
      { heading: "Modification de ces conditions", body: "Nous pouvons réviser ces conditions pour refléter les changements du Service, des prestataires ou des exigences légales. La version révisée sera publiée avec une date actualisée. Continuer à utiliser le Service après sa prise d’effet signifie que vous l’acceptez ; sinon, vous devez cesser de l’utiliser." },
      { heading: "Contact", body: "Les questions ou notifications relatives à ces conditions peuvent être envoyées à {{contactEmail}} ou à {{entityName}}, {{address}}." },
    ],
    legal: true,
  },
};
