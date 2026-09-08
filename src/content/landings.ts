import type { ExternalLinkKey } from "@/shared/config/site";
import type { StaticRoute } from "@/shared/routes/routes";
import type { Locale } from "@/shared/i18n/locales";
import { getExtensionCopy } from "@/features/extension/extension-copy";
import { russianLandingContent } from "./russian-landings";
import { germanLandingContent } from "./german-landings";
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
        eyebrow: "Web2File GPT · exact URLs, PDFs, or screenshots",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File accepts exact public URLs, webpage PDFs, or ordered screenshots and returns separate visual or interactive PDFs.",
        lead: "Send the exact public pages or files you want processed. Web2File returns one PDF per webpage: choose Visual PDF for page images or Interactive PDF for selectable text and verified links where the submitted page allows them.",
        sections: [
            { heading: "1. Supply the exact page or file", body: "Send one public URL, a list of exact public URLs, an existing webpage PDF, or ordered full-page screenshots. Each supplied webpage remains a separate output file." },
            { heading: "2. Choose visual or interactive output", body: "Visual PDF prioritizes the supplied page appearance. Interactive PDF prioritizes existing selectable text and links that can be checked; one mode applies to every URL in the same request." },
            { heading: "3. Stay within the supplied pages", body: "Web2File opens only the exact public URLs you provide. It does not crawl a domain, inspect a sitemap, follow links for extra pages, or bypass sign-in, paywalls, CAPTCHAs, location rules, or other access controls." },
            { heading: "4. Use PDFs and screenshots as evidence", body: "Ordered screenshots can be assembled into a Visual PDF. An uploaded webpage PDF can be checked and processed from the content it already contains; missing page content is not reconstructed or invented." },
            { heading: "5. Check every delivered file", body: "Review page order, cropped or missing areas, unexplained blanks, readability, layout, and supported links. If direct conversion is blocked, Web2File can explain a browser or native-export path instead of pretending the page was captured." },
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
        eyebrow: "Web2File GPT · one uploaded HTML file",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File renders one uploaded HTML file and returns one checked PDF with its available layout, text, images, and links.",
        lead: "Upload one HTML document. Web2File renders the file with the styles and assets it can access, chooses a suitable page orientation, and checks the resulting PDF for clipping and missing content.",
        sections: [
            { heading: "1. Upload one HTML document", body: "The GPT accepts one HTML file for this workflow. It does not substitute a URL, process a batch of HTML files, crawl linked pages, or merge several documents." },
            { heading: "2. Make required assets accessible", body: "Inline and embedded styles load with the document. Accessible remote stylesheets, fonts, and images may load too; missing local CSS or image files must be supplied if they are needed for the intended appearance." },
            { heading: "3. Render without activating the page", body: "Web2File previews the HTML at a suitable desktop width and preserves the available content order, typography, spacing, columns, cards, and images. Interactive controls are not treated as a live application." },
            { heading: "4. Fit the document to PDF pages", body: "The output keeps existing selectable text and supported hyperlinks where possible. A wide design may use landscape or a more suitable page size to reduce squeezing, clipping, and awkward column breaks." },
            { heading: "5. Inspect the result", body: "Before delivery, check for missing assets, clipped components, unexplained blank areas, unreadable text, poor page breaks, displaced images, and links that could not be preserved." },
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
        description: "How Page 2 File processes service, support and consented analytics data, how long it is kept, and how to exercise privacy rights.",
        lead: "This Privacy Policy explains what Page 2 File processes when you visit the website, contact support, use the Page 2 PDF Chrome extension, or use an available website conversion workflow. Optional Google Analytics is off until you give consent.",
        sections: [
            {
                heading: "Operator and scope",
                body: "{{entityName}}, located at {{address}}, operates Page 2 File and is the controller responsible for the processing described here. This policy applies to the Page 2 File website, the Page 2 PDF browser extension and related webpage-to-file conversion services.",
            },
            {
                heading: "Data sources and categories",
                body: "We receive data directly from you, your browser and the infrastructure that delivers the Service. Depending on the feature, this can include an IP address and technical request data, browser and device information, Page 2 File pages visited after analytics consent, permitted campaign values, an email address and support message, a public URL, conversion settings, temporary job identifiers and generated files.",
            },
            {
                heading: "Data we do not request and the extension boundary",
                body: "Page 2 File does not require an account and does not ask for payment-card details, billing addresses or passwords for the original website. The extension uses the page already open in your browser. It creates active-tab documents inside the extension workflow and does not send page or conversation content to Page 2 File or Google Analytics.",
            },
            {
                heading: "Purposes and legal bases",
                body: "We process data to provide a feature you request, answer support messages, secure and operate the Service, diagnose failures, comply with law, and—only with consent—measure public-page use. Depending on applicable law, the bases are performance of a contract or steps you request, our legitimate interests in security and reliability, compliance with legal obligations, and consent for optional analytics and a support transfer where consent is required.",
            },
            {
                heading: "Conversion content and temporary processing",
                body: "A website conversion, where available, requires temporary processing of the public page and options you submit. The response supplies expiry times for temporary jobs, previews and files. Page 2 File does not provide an account-based conversion history; temporary data is removed at the stated technical expiry or earlier when the workflow permits.",
            },
            {
                heading: "Support messages",
                body: "When you press Send in the support form, the email address and comment you provide are delivered through the Telegram Bot API to a private Page 2 File development topic. This transfer is shown beside the form before submission. Correspondence is limited to team members who need it and is kept until the request and related security or legal issues are resolved, then deleted or de-identified when it is no longer needed.",
            },
            {
                heading: "Optional Google Analytics",
                body: "Google Analytics is implemented in basic consent mode. The Google tag is not loaded and no consent ping, page view or event is sent to Google until you select Allow analytics. If you consent, Google may receive your IP address at collection, a page title and address without query or hash values, the origin of an external referrer, browser and device information, coarse location derived by Google, normalized campaign values and a small set of product-link events. We never send support fields or conversion content to Analytics.",
            },
            {
                heading: "Analytics controls and retention",
                body: "After consent, Google Analytics uses first-party cookies with the p2f_ga prefix. They expire up to 180 days after the first consent and are not refreshed on later page loads. The Analytics property uses the shortest available user and event retention period of two months; standard aggregated reports may remain longer under Google’s product rules. Google signals, advertising personalization, automatic enhanced measurement, and detailed location and device collection are disabled.",
            },
            {
                heading: "Service providers and recipients",
                body: "Cloudflare hosts, delivers and protects the website; Google provides consented Analytics; and Telegram delivers support messages. Each provider processes only the categories needed for that role under its applicable terms. We may also disclose data when law requires it, to protect rights or safety, or during a lawful business transfer with appropriate safeguards.",
            },
            {
                heading: "Other retention",
                body: "Essential session and CSRF values expire after one hour. Temporary conversion data follows the expiry returned for the job. Infrastructure and security records are kept only for the period needed to operate, investigate abuse, meet provider constraints or satisfy legal obligations. Support correspondence follows the criteria described above. We remove or de-identify personal data when its purpose and required retention end.",
            },
            {
                heading: "International processing",
                body: "The operator is established in {{jurisdiction}}. Cloudflare, Google and Telegram may process data in other countries. Where a transfer requires safeguards, we rely on the provider’s data-processing terms and available contractual transfer mechanisms; where applicable law requires consent for a third-party or cross-border transfer, we request it before optional Analytics or make the support transfer clear before submission.",
            },
            {
                heading: "Security",
                body: "Page 2 File uses same-origin routes, short-lived anonymous sessions, Origin and CSRF checks, signed backend requests, URL validation, isolated rendering and temporary artifacts. Access is limited by role. No measure can guarantee absolute security, so do not submit material you are not permitted to disclose.",
            },
            {
                heading: "Your privacy rights",
                body: "Depending on applicable law, you may request information and access, correction, deletion, restriction, portability, or object to processing. You may withdraw consent without affecting earlier lawful processing and complain to the competent data-protection authority. We do not make decisions that produce legal or similarly significant effects solely by automated processing. We may request limited information needed to locate a record and verify the requester.",
            },
            {
                heading: "No sale, targeted advertising or profiling",
                body: "Page 2 File does not sell personal data, share it for cross-context behavioral advertising, use sensitive personal data to infer characteristics, or run targeted advertising on the website. Global Privacy Control is treated as a refusal of optional Analytics even where the signal is not legally required for this processing.",
            },
            {
                id: "cookies",
                heading: "Cookies and local storage",
                body: "The strictly necessary p2f_session and p2f_csrf first-party cookies maintain an anonymous same-origin session and protect a requested support or conversion action; they use Strict SameSite settings and expire after one hour. The local-storage key page2file-analytics-consent-v2 remembers an allow or deny choice for up to 180 days so the site can honor it. Only after consent does Google Analytics create first-party p2f_ga-prefixed cookies for up to 180 days. These values do not contain support text or conversion content.",
            },
            {
                heading: "Your analytics choice",
                body: "The first consent panel gives equally available choices to continue without Analytics or allow it. Use Privacy settings in the footer to review or withdraw consent; withdrawal stops future events and removes accessible p2f_ga cookies. An expired or cleared choice returns Analytics to off. Blocking essential session or CSRF cookies may prevent protected support or conversion requests, but public pages still load.",
            },
            {
                heading: "Adults only",
                body: "The Service is intended only for people who are at least 18 and have reached the age of majority where they live. We do not knowingly collect personal data from minors. A parent or guardian who believes a minor submitted personal data can contact us to request deletion.",
            },
            {
                heading: "Third-party websites",
                body: "Page 2 File can open or convert content from websites operated by others and may link to external services. Those parties control their content, security and privacy practices, and their own terms apply when you use them.",
            },
            {
                heading: "Changes to this policy",
                body: "We may update this policy when the Service, providers or legal requirements change. The revised version is published here with a new date. A material change to consented processing invalidates the stored Analytics choice so a new choice can be requested.",
            },
            {
                heading: "Contact and complaints",
                body: "Send privacy questions or requests to {{contactEmail}}. The operator is {{entityName}}, {{address}}. We respond within the period required by applicable law. You may also complain to the competent authority where you live or where you believe an infringement occurred.",
            },
        ],
        legal: true,
    },
    terms: {
        route: "terms",
        eyebrow: "Service agreement",
        title: "Terms of service",
        description: "Terms for using Page 2 File, including permitted submitted materials, conversion limits, user responsibilities and service availability.",
        lead: "These Terms govern your use of the Page 2 File website, the Page 2 PDF Chrome extension and related webpage-to-PDF conversion services.",
        sections: [
            {
                heading: "Agreement and operator",
                body: "By accessing or using Page 2 File, you agree to these Terms. You must be at least 18 and have reached the age of majority where you live. The Service is operated by {{entityName}}, located at {{address}}. If you use it for an organization, you confirm that you can accept these Terms for that organization.",
            },
            {
                heading: "Definitions",
                body: "“Service” means the Page 2 File website, the Page 2 PDF Chrome extension and related conversion features. “Submitted content” means a webpage, active-tab content or other material submitted for conversion. “Output” means a PDF, preview or other generated result.",
            },
            {
                heading: "Limited license",
                body: "We grant you a revocable, non-exclusive, non-transferable and limited right to access and use the Service in accordance with these Terms. No ownership in Page 2 File software, branding or other protected material is transferred to you.",
            },
            {
                heading: "Permitted materials and your responsibility",
                body: "You may convert only submitted content that you are legally permitted to access, process, reproduce and download. You are responsible for the URLs and active-tab content you submit, the conversion settings you choose, and how you use or distribute every Output.",
            },
            {
                heading: "Prohibited use",
                body: "You must not use the Service to break the law, infringe another person’s rights, bypass paywalls or access controls, distribute malware, submit abusive or unlawful content, probe private networks, interfere with security controls, overload systems, automate excessive requests, reverse engineer protected parts of the Service or misrepresent generated files.",
            },
            {
                heading: "Submitted content and third-party rights",
                body: "You retain any rights you already have in submitted content. Page 2 File does not grant rights to material owned by another person. You represent that processing the submitted material and creating the requested Output does not violate copyright, privacy, confidentiality, contract or other applicable rights.",
            },
            {
                heading: "Temporary processing",
                body: "The Service may temporarily process submitted content, conversion settings and generated artifacts to provide a preview and download. Page 2 File does not provide an account-based conversion history. Details about temporary data, cookies and providers are set out in the Privacy Policy.",
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
                body: "Our Privacy Policy explains necessary processing, optional analytics, service providers, cookies and your choices. Using a requested feature involves the processing needed to provide it; Google Analytics remains optional and requires a separate affirmative choice.",
            },
            {
                heading: "Page 2 File intellectual property",
                body: "The Service, software, design, text, logos and other Page 2 File materials are owned by or licensed to {{entityName}} and are protected by applicable intellectual-property laws. You may not remove proprietary notices or copy, sell, sublicense or commercially exploit the Service except where law expressly permits it.",
            },
            {
                heading: "Feedback",
                body: "If you voluntarily provide suggestions or feedback, you grant us a worldwide, perpetual and royalty-free right to use that feedback to improve or develop the Service without an obligation to compensate you. This does not transfer ownership of your submitted content.",
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
                body: "To the extent permitted by law, you agree to defend and indemnify {{entityName}} against third-party claims arising from content you submit, your use or distribution of an Output, your violation of these Terms or your infringement of another person’s rights.",
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
    de: { ...germanLandingContent, about: aboutLandingContent.de },
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
            return [section];
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
