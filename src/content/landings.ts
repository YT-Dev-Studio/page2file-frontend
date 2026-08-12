import type { ExternalLinkKey } from "@/shared/config/site";
import type { StaticRoute } from "@/shared/routes/routes";
import type { Locale } from "@/shared/i18n/locales";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { russianLandingContent } from "./russian-landings";
import { germanLandingContent } from "./german-landings";
import { frenchLandingContent } from "./french-landings";
import { germanLegalLandingContent } from "./german-legal-landings";
import { frenchLegalLandingContent } from "./french-legal-landings";
import { spanishLandingContent } from "./spanish-landings";
import { dutchLandingContent } from "./dutch-landings";
import { spanishLegalLandingContent } from "./spanish-legal-landings";
import { dutchLegalLandingContent } from "./dutch-legal-landings";
import { portugueseLandingContent } from "./portuguese-landings";
import { italianLandingContent } from "./italian-landings";
import { portugueseLegalLandingContent } from "./portuguese-legal-landings";
import { italianLegalLandingContent } from "./italian-legal-landings";
import { polishLandingContent } from "./polish-landings";
import { czechLandingContent } from "./czech-landings";
import { polishLegalLandingContent } from "./polish-legal-landings";
import { czechLegalLandingContent } from "./czech-legal-landings";
import { swedishLandingContent } from "./swedish-landings";
import { norwegianLandingContent } from "./norwegian-landings";
import { swedishLegalLandingContent } from "./swedish-legal-landings";
import { norwegianLegalLandingContent } from "./norwegian-legal-landings";
import { danishLandingContent } from "./danish-landings";
import { finnishLandingContent } from "./finnish-landings";
import { danishLegalLandingContent } from "./danish-legal-landings";
import { finnishLegalLandingContent } from "./finnish-legal-landings";
import { romanianLandingContent } from "./romanian-landings";
import { hungarianLandingContent } from "./hungarian-landings";
import { romanianLegalLandingContent } from "./romanian-legal-landings";
import { hungarianLegalLandingContent } from "./hungarian-legal-landings";
import { aboutLandingContent } from "./about-landings";
export type ContentSection = {
    id?: string;
    heading: string;
    body: string;
    points?: ReadonlyArray<string>;
};
export type RelatedRoute = {
    route: StaticRoute;
    label: string;
};
export type ArticleLink = {
    slug: string;
    label: string;
};
export type WorkflowOverride = {
    detailsTitle: string;
    firstStageDescription: string;
    firstStageLabel: string;
};
export type LandingContent = {
    route: StaticRoute;
    eyebrow: string;
    title: string;
    displayTitle?: string;
    description: string;
    lead: string;
    sections: ReadonlyArray<ContentSection>;
    primaryHref?: string;
    primaryLabel?: string;
    externalLinkKey?: ExternalLinkKey;
    noindex?: boolean;
    legal?: boolean;
    articleLinks?: ReadonlyArray<ArticleLink>;
    relatedRoutes?: ReadonlyArray<RelatedRoute>;
    workflowOverride?: WorkflowOverride;
};
const gptRelatedRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const landingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "GPT App · exact URLs, PDFs, or screenshots",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File converts exact public URLs, uploaded webpage PDFs, and screenshots into separate Visual PDF or Interactive PDF files.",
        lead: "Provide one exact public URL, a list of exact URLs, a webpage PDF, or full-page or consecutive screenshots. Choose Visual PDF to save the website as page captures or Interactive PDF for selectable text and clickable links.",
        sections: [
            { heading: "1. Enter one or more URLs", body: "Send one public webpage URL, a list of exact public URLs, an existing webpage PDF, or full-page or consecutive screenshots. Each webpage remains a separate PDF." },
            { heading: "2. Choose the PDF type", body: "Select Visual PDF for an image-based result that prioritizes the page's appearance, or Interactive PDF when selectable text and clickable links matter most. One mode applies to every URL in a submitted list." },
            { heading: "3. Convert only the pages you supply", body: "The GPT opens only the exact public URLs provided. It does not crawl domains, inspect sitemaps, discover pages, follow internal links, or bypass authentication, paywalls, CAPTCHAs, geographic restrictions, or other access controls." },
            { heading: "4. Post-process PDFs and screenshots", body: "Uploaded screenshots can be assembled into a Visual PDF while preserving their top-to-bottom order. Uploaded webpage PDFs can be checked and processed without inventing missing content; Interactive PDF results prioritize existing text, layout, images, and verified links." },
            { heading: "5. Get tailored save guidance and verify the result", body: "If direct conversion is unavailable or incomplete, the GPT provides page-specific browser or native-export guidance. Review every delivered PDF for missing or cropped content, blank areas, readability, page order, layout, links, and fidelity to the selected mode." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Open GPT Webpage 2 PDF",
        relatedRoutes: gptRelatedRoutes,
        workflowOverride: {
            detailsTitle: "Instructions for use",
            firstStageDescription: "Give the GPT App a working URL.",
            firstStageLabel: "Send URLs",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "GPT App · uploaded HTML file",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File turns one uploaded HTML file into a checked PDF that preserves layout, images, selectable text, and links.",
        lead: "Upload exactly one HTML file. GPT HTML 2 PDF previews its design, loads accessible styles, fonts, and images, then creates one checked PDF with selectable text and clickable links where possible.",
        sections: [
            { heading: "1. Upload exactly one HTML file", body: "Attach one HTML document. The GPT does not accept a URL instead, process several HTML files, crawl websites, follow links for extra pages, or merge multiple documents." },
            { heading: "2. Include the styles and assets", body: "Inline and embedded styles are used automatically, along with accessible remote stylesheets, fonts, and images. If the HTML references a missing local CSS file, upload the matching file for a closer visual result or continue without it." },
            { heading: "3. Preview and preserve the design", body: "The HTML is previewed at a suitable desktop width before conversion. The result aims to retain the source theme, colors, typography, spacing, columns, cards, images, and content order without activating interactive controls." },
            { heading: "4. Create one readable PDF", body: "The GPT produces one PDF with selectable text and working hyperlinks where possible. Wide layouts can use landscape or a suitable page size so major columns and visual elements are not squeezed, cropped, or split." },
            { heading: "5. Check the finished file", body: "Every PDF is reviewed for missing content, clipped components, unexplained blank areas, readability, page breaks, image placement, and supported links before it is delivered." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Open GPT HTML 2 PDF",
        relatedRoutes: gptRelatedRoutes,
        workflowOverride: {
            detailsTitle: "Five steps from HTML to PDF",
            firstStageDescription: "Give the GPT App one HTML file.",
            firstStageLabel: "Upload HTML",
        },
    },
    privacy: {
        route: "privacy",
        eyebrow: "Privacy and data processing",
        title: "Page 2 File privacy policy",
        description: "How Page 2 File processes webpage content, temporary conversion files, service cookies, analytics data and privacy requests.",
        lead: "This Privacy Policy explains what Page 2 File processes when you visit the website, use the Chrome extension or convert a webpage to PDF.",
        sections: [
            {
                heading: "Operator and scope",
                body: "{{entityName}}, located at {{address}}, operates Page 2 File and is responsible for the processing described in this policy. This policy applies to the Page 2 File website, browser extension and related webpage-to-file conversion services.",
            },
            {
                heading: "Definitions",
                body: "“Service” means Page 2 File and its conversion features. “Conversion content” means the URL, visible webpage content, selected options and generated PDF file involved in a conversion. “Personal data” means information that identifies or can reasonably be linked to a person.",
            },
            {
                heading: "Information we process",
                body: "Depending on how you use the Service, we may process technical request data, IP address, browser and device information, visited Page 2 File pages, permitted campaign parameters, a public URL or content visible in an active browser tab, conversion settings, temporary job identifiers and generated files.",
            },
            {
                heading: "Information we do not request",
                body: "Page 2 File does not require a Page 2 File account and does not ask for payment-card details, billing addresses or passwords for the source website. The extension uses the page already open in your browser and does not receive the password you used to access that website.",
            },
            {
                heading: "How we use information",
                body: "We process information to provide previews and files, protect the Service against abuse, diagnose failures, maintain reliability, understand aggregate use of public pages, respond to requests and comply with applicable law. We do not sell personal data.",
            },
            {
                heading: "Conversion content and temporary processing",
                body: "A public-URL conversion or an extension preview requires temporary processing of the submitted page and selected options. Page 2 File does not provide an account-based conversion history. Preview data and generated artifacts are short-lived and are deleted after the preview closes or when the configured technical expiry is reached.",
            },
            {
                heading: "Analytics and attribution",
                body: "When a valid Google Analytics Measurement ID is configured, Google Analytics loads automatically on public marketing pages. It may receive page, device, browser, approximate-location and campaign information. Allowed UTM values are normalized in memory and sent with the analytics event; Page 2 File does not keep them in a custom attribution cookie.",
            },
            {
                heading: "Service providers and disclosures",
                body: "Page 2 File uses {{processors}} to deliver, protect and measure the Service. These providers may process technical data only as needed for their services and under their own privacy terms. We may also disclose information when required by law, to protect rights or safety, or as part of a lawful business transfer.",
            },
            {
                heading: "Retention and deletion",
                body: "Conversion content is kept only for the temporary processing and download workflow and is not retained as a user-visible history. Security logs, infrastructure records, analytics data and correspondence may be retained for the period reasonably required for security, operations, legal obligations or resolving a request.",
            },
            {
                heading: "Security",
                body: "Page 2 File uses same-origin conversion routes, anonymous session controls, Origin and CSRF checks, signed backend requests, URL validation, isolated rendering and temporary artifacts. No technical or organizational measure can guarantee absolute security, so you should avoid converting material you are not permitted to disclose.",
            },
            {
                heading: "International processing",
                body: "Our providers may process technical or analytics data in countries other than your own. Where applicable, we rely on provider safeguards and lawful transfer mechanisms. The operator is established in {{jurisdiction}}.",
            },
            {
                heading: "Your privacy rights",
                body: "Depending on applicable law, you may request access to, correction of, deletion of or restriction on personal data associated with you, or object to certain processing. Because Page 2 File has no user accounts or conversion-history archive, we may need information from you to identify any relevant operational record.",
            },
            {
                heading: "Third-party websites",
                body: "Page 2 File can open or convert content from websites operated by others and may link to external services. Their content, security and privacy practices are controlled by those third parties, and their own terms apply when you use them.",
            },
            {
                heading: "Children",
                body: "The Service is not directed to children under 13, and we do not knowingly collect personal data from children under 13. A parent or guardian who believes a child has provided personal data may contact us to request its deletion.",
            },
            {
                id: "cookies",
                heading: "Cookies",
                body: "Page 2 File uses the short-lived p2f_session and p2f_csrf cookies to maintain an anonymous conversion session and protect requests. They use Strict SameSite settings and expire after one hour. Google Analytics may set analytics cookies on public pages when analytics is configured. We do not place conversion content or directly identifying profile data in these cookies.",
            },
            {
                heading: "Blocking and deleting cookies",
                body: "You can block or delete cookies through your browser settings. Blocking the Page 2 File session or CSRF cookies may prevent conversion requests from working. Blocking Google Analytics may limit measurement but does not prevent the core public pages from loading. Removing a cookie requires using your browser’s cookie controls.",
            },
            {
                heading: "Changes to this policy",
                body: "We may update this policy when the Service, providers or legal requirements change. The updated version will be published on this page with a revised date. Material changes apply from the stated effective date.",
            },
            {
                heading: "Contact",
                body: "Questions and privacy requests can be sent to {{contactEmail}}. The operator is {{entityName}}, {{address}}, under the laws of {{jurisdiction}}.",
            },
        ],
        legal: true,
    },
    terms: {
        route: "terms",
        eyebrow: "Service agreement",
        title: "Terms of service",
        description: "Terms for using Page 2 File, including permitted webpage sources, conversion limits, user responsibilities and service availability.",
        lead: "These Terms govern your use of the Page 2 File website, Chrome extension and webpage-to-PDF conversion services.",
        sections: [
            {
                heading: "Agreement and operator",
                body: "By accessing or using Page 2 File, you agree to these Terms. The Service is operated by {{entityName}}, located at {{address}}. If you use the Service for an organization, you confirm that you have authority to accept these Terms for that organization.",
            },
            {
                heading: "Definitions",
                body: "“Service” means the Page 2 File website, Chrome extension and conversion features. “Source content” means a webpage, active-tab content or other material submitted for conversion. “Output” means a PDF, preview or other generated result.",
            },
            {
                heading: "Limited license",
                body: "We grant you a revocable, non-exclusive, non-transferable and limited right to access and use the Service in accordance with these Terms. No ownership in Page 2 File software, branding or other protected material is transferred to you.",
            },
            {
                heading: "Permitted sources and your responsibility",
                body: "You may convert only source content that you are legally permitted to access, process, reproduce and download. You are responsible for the URLs and active-tab content you submit, the conversion settings you choose, and how you use or distribute every Output.",
            },
            {
                heading: "Prohibited use",
                body: "You must not use the Service to break the law, infringe another person’s rights, bypass paywalls or access controls, distribute malware, submit abusive or unlawful content, probe private networks, interfere with security controls, overload systems, automate excessive requests, reverse engineer protected parts of the Service or misrepresent generated files.",
            },
            {
                heading: "Source content and third-party rights",
                body: "You retain any rights you already have in source content. Page 2 File does not grant rights to material owned by another person. You represent that processing the submitted material and creating the requested Output does not violate copyright, privacy, confidentiality, contract or other applicable rights.",
            },
            {
                heading: "Temporary processing",
                body: "The Service may temporarily process source content, conversion settings and generated artifacts to provide a preview and download. Page 2 File does not provide an account-based conversion history. Details about temporary data, cookies and providers are set out in the Privacy Policy.",
            },
            {
                heading: "Output and fidelity limitations",
                body: "Webpages can contain scripts, animations, video, protected media, custom fonts, canvas graphics, dynamic data and complex layouts that cannot be reproduced exactly in a static PDF file. Accurate copy prioritizes appearance; Editable document rebuilds supported text, images and links. You must review the preview and final Output before relying on it.",
            },
            {
                heading: "Third-party services and links",
                body: "The Service may convert or link to websites and services controlled by third parties. Page 2 File is not responsible for their availability, content, accuracy, legality, security or privacy practices. Your use of a third-party service remains subject to that provider’s terms.",
            },
            {
                heading: "Privacy and cookies",
                body: "Our Privacy Policy explains temporary conversion processing, analytics, service providers and cookies. By using the Service, you acknowledge that processing necessary to provide the requested conversion will occur as described there.",
            },
            {
                heading: "Page 2 File intellectual property",
                body: "The Service, software, design, text, logos and other Page 2 File materials are owned by or licensed to {{entityName}} and are protected by applicable intellectual-property laws. You may not remove proprietary notices or copy, sell, sublicense or commercially exploit the Service except where law expressly permits it.",
            },
            {
                heading: "Feedback",
                body: "If you voluntarily provide suggestions or feedback, you grant us a worldwide, perpetual and royalty-free right to use that feedback to improve or develop the Service without an obligation to compensate you. This does not transfer ownership of your source content.",
            },
            {
                heading: "Changes, updates and availability",
                body: "We may update, limit, suspend or discontinue the Service or any feature, and we do not promise that every feature will remain available. We may apply technical limits needed for security, reliability or fair use. Where practical, material service changes will be reflected on the website.",
            },
            {
                heading: "Suspension and termination",
                body: "You may stop using the Service at any time. We may block or suspend access when we reasonably believe these Terms have been violated, use threatens the Service or another system, or action is required by law. Provisions intended to survive termination remain effective.",
            },
            {
                heading: "Copyright and rights complaints",
                body: "If you believe material available through Page 2 File infringes your rights, contact {{contactEmail}} with identification of the protected work, the relevant material or URL, your contact details and a statement explaining the claimed infringement.",
            },
            {
                heading: "No warranties",
                body: "To the maximum extent permitted by law, the Service and every Output are provided “as is” and “as available”. We do not guarantee uninterrupted operation, error-free conversion, complete fidelity, availability of a third-party page, fitness for a particular purpose or that every Output will meet your requirements.",
            },
            {
                heading: "Limitation of liability",
                body: "To the maximum extent permitted by applicable law, {{entityName}} is not liable for indirect, incidental, special, consequential or punitive loss, loss of profits, data, business or privacy, or costs caused by use of or inability to use the Service. Rights that cannot legally be excluded remain unaffected.",
            },
            {
                heading: "Indemnity",
                body: "To the extent permitted by law, you agree to defend and indemnify {{entityName}} against third-party claims arising from source content you submit, your use or distribution of an Output, your violation of these Terms or your infringement of another person’s rights.",
            },
            {
                heading: "Severability, waiver and entire agreement",
                body: "If any provision is held invalid or unenforceable, the remaining provisions continue in effect and the affected provision will be interpreted as closely as legally possible to its intended purpose. A failure to enforce a provision is not a waiver. These Terms and the Privacy Policy form the agreement governing the Service.",
            },
            {
                heading: "Governing law and disputes",
                body: "These Terms are governed by the laws of {{jurisdiction}}, without regard to conflict-of-law rules. Before starting formal proceedings, you and {{entityName}} will try in good faith to resolve a dispute through written notice. Unresolved disputes may be submitted to the competent courts of {{jurisdiction}}, unless mandatory law requires another forum.",
            },
            {
                heading: "Changes to these terms",
                body: "We may revise these Terms to reflect changes to the Service, providers or legal requirements. The revised Terms will be published with an updated date. Continuing to use the Service after the effective date means you accept the revised Terms; otherwise, you must stop using the Service.",
            },
            {
                heading: "Contact",
                body: "Questions or notices about these Terms may be sent to {{contactEmail}} or to {{entityName}}, {{address}}.",
            },
        ],
        legal: true,
    }
};
const localizedLandingContent: Record<Locale, Partial<Record<StaticRoute, LandingContent>>> = {
    en: { ...landingContent, about: aboutLandingContent.en },
    ru: { ...russianLandingContent, about: aboutLandingContent.ru },
    de: { ...germanLandingContent, ...germanLegalLandingContent, about: aboutLandingContent.de },
    fr: { ...frenchLandingContent, ...frenchLegalLandingContent, about: aboutLandingContent.fr },
    es: { ...spanishLandingContent, ...spanishLegalLandingContent, about: aboutLandingContent.es },
    nl: { ...dutchLandingContent, ...dutchLegalLandingContent, about: aboutLandingContent.nl },
    pt: { ...portugueseLandingContent, ...portugueseLegalLandingContent, about: aboutLandingContent.pt },
    it: { ...italianLandingContent, ...italianLegalLandingContent, about: aboutLandingContent.it },
    pl: { ...polishLandingContent, ...polishLegalLandingContent, about: aboutLandingContent.pl },
    cs: { ...czechLandingContent, ...czechLegalLandingContent, about: aboutLandingContent.cs },
    sv: { ...swedishLandingContent, ...swedishLegalLandingContent, about: aboutLandingContent.sv },
    no: { ...norwegianLandingContent, ...norwegianLegalLandingContent, about: aboutLandingContent.no },
    da: { ...danishLandingContent, ...danishLegalLandingContent, about: aboutLandingContent.da },
    fi: { ...finnishLandingContent, ...finnishLegalLandingContent, about: aboutLandingContent.fi },
    ro: { ...romanianLandingContent, ...romanianLegalLandingContent, about: aboutLandingContent.ro },
    hu: { ...hungarianLandingContent, ...hungarianLegalLandingContent, about: aboutLandingContent.hu },
};
const reconcileLegalProductScope = (
    locale: Locale,
    content: LandingContent,
): LandingContent => {
    if (!content.legal) {
        return content;
    }

    const extension = getExtensionCopy(locale);
    const obsoleteProductClaim = /\b(?:URL|CSRF|backend|p2f_session|p2f_csrf|PPTX|PowerPoint)\b/i;
    const sections = content.sections.flatMap((section) => {
        if (section.id === "cookies") {
            return [{ ...section, body: extension.privacyPoints[2] }];
        }
        return obsoleteProductClaim.test(section.body) ? [] : [section];
    });

    if (content.route === "privacy") {
        return {
            ...content,
            lead: extension.privacyBody,
            sections: [
                {
                    heading: extension.privacyTitle,
                    body: `${extension.privacyBody} ${extension.privacyPoints.join(" ")}`,
                },
                ...sections,
            ],
        };
    }

    return {
        ...content,
        sections: [
            {
                heading: extension.sourcesTitle,
                body: extension.sourcesBody,
            },
            ...sections,
        ],
    };
};

export const getLandingContent = (
    locale: Locale,
    route: StaticRoute,
): LandingContent | null => {
    const content = localizedLandingContent[locale][route];
    return content ? reconcileLegalProductScope(locale, content) : null;
};
