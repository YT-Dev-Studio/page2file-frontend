import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import {
  expectedSceneCount,
  instructionArticles,
} from "./blog-instruction-scenes.mjs";

const ROOT = process.cwd();
const LOCALES = [
  "en",
  "ru",
  "de",
  "fr",
  "es",
  "nl",
  "pt",
  "it",
  "pl",
  "cs",
  "sv",
  "no",
  "da",
  "fi",
  "ro",
  "hu",
];
const BLOG_DIRECTORY = join(ROOT, "content", "blog");
const UPDATE_DIRECTORY = join(ROOT, "content", "updates");
const RUSSIAN_BLOG_DIRECTORY = join(ROOT, "content", "ru", "blog");
const RUSSIAN_UPDATE_DIRECTORY = join(ROOT, "content", "ru", "updates");
const FORBIDDEN_PATTERN =
  /<script|<iframe|dangerouslySetInnerHTML|javascript:/i;
const EXPECTED_BLOG_SLUGS = [
  "save-webpage-as-pdf",
  "why-print-to-pdf-breaks",
  "capture-full-webpage-as-pdf",
  "long-webpage-page-breaks",
  "preserve-clickable-links",
  "visual-vs-editable",
  "html-to-pdf-safely",
  "multi-page-website-to-pdf",
  "webpage-to-powerpoint",
  "website-to-powerpoint",
  "html-to-powerpoint",
  "sections-to-slides",
  "screenshot-vs-editable-powerpoint",
  "save-authenticated-webpage-as-pdf",
  "website-types-to-pdf-or-powerpoint",
  "webpage-capture-vs-web-scraping",
  "export-ai-chats-privately",
  "export-chatgpt-conversation-to-pdf",
  "export-claude-chat-to-pdf",
  "export-gemini-chat-to-pdf",
  "export-other-ai-chats-to-pdf",
  "export-whatsapp-chat-to-pdf",
  "export-telegram-chat-to-pdf",
  "export-browser-messenger-chats-to-pdf",
].sort();
const INSTRUCTION_DIRECTORY = join(
  ROOT,
  "public",
  "blog",
  "instructions",
);
const ARTICLE_FIGURE_PATTERN = /<ArticleFigure([\s\S]*?)\/>/g;
const FIGURE_SOURCE_PATTERN =
  /src="(\/blog\/instructions\/[^"]+\.svg)"/;
const FIGURE_ALT_PATTERN = /alt=\{"([^"]+)"\}/;
const FIGURE_CAPTION_PATTERN = /caption=\{"([^"]+)"\}/;
const FIGURE_OPEN_LABEL_PATTERN = /openLabel=\{"([^"]+)"\}/;
const FIGURE_CLOSE_LABEL_PATTERN = /closeLabel=\{"([^"]+)"\}/;
const POPUP_MASTER_VERSION = "page2file-popup-v3";
const POPUP_GEOMETRY_SIGNATURE = "455x751";
const SOURCE_TITLE_SAFE_ZONE = "91,139,214,21";
const SITE_TITLE_SUFFIX = " | Page 2 File";
const LANDING_SOURCE_PATHS = {
  en: ["src/content/landings.ts"],
  ru: ["src/content/russian-landings.ts"],
  de: [
    "src/content/german-landings.ts",
    "src/content/german-legal-landings.ts",
  ],
  fr: [
    "src/content/french-landings.ts",
    "src/content/french-legal-landings.ts",
  ],
  es: [
    "src/content/spanish-landings.ts",
    "src/content/spanish-legal-landings.ts",
  ],
  nl: [
    "src/content/dutch-landings.ts",
    "src/content/dutch-legal-landings.ts",
  ],
  pt: [
    "src/content/portuguese-landings.ts",
    "src/content/portuguese-legal-landings.ts",
  ],
  it: [
    "src/content/italian-landings.ts",
    "src/content/italian-legal-landings.ts",
  ],
  pl: [
    "src/content/polish-landings.ts",
    "src/content/polish-legal-landings.ts",
  ],
  cs: [
    "src/content/czech-landings.ts",
    "src/content/czech-legal-landings.ts",
  ],
  sv: [
    "src/content/swedish-landings.ts",
    "src/content/swedish-legal-landings.ts",
  ],
  no: [
    "src/content/norwegian-landings.ts",
    "src/content/norwegian-legal-landings.ts",
  ],
  da: [
    "src/content/danish-landings.ts",
    "src/content/danish-legal-landings.ts",
  ],
  fi: [
    "src/content/finnish-landings.ts",
    "src/content/finnish-legal-landings.ts",
  ],
  ro: [
    "src/content/romanian-landings.ts",
    "src/content/romanian-legal-landings.ts",
  ],
  hu: [
    "src/content/hungarian-landings.ts",
    "src/content/hungarian-legal-landings.ts",
  ],
};

const readMdxFiles = async (directory) => {
  const names = await readdir(directory);
  const mdxNames = names.filter(function isMdx(name) {
    return name.endsWith(".mdx");
  });
  const files = await Promise.all(
    mdxNames.map(async function readMdx(name) {
      const content = await readFile(join(directory, name), "utf8");
      return { name, content };
    }),
  );
  return files;
};

const validateFiles = (files, label) => {
  const names = new Set();
  files.forEach(function validateFile(file) {
    if (names.has(file.name)) {
      throw new Error(`Duplicate ${label} filename: ${file.name}`);
    }
    names.add(file.name);
    if (file.content.trim().length < 200) {
      throw new Error(`${label} entry is too short: ${file.name}`);
    }
    if (FORBIDDEN_PATTERN.test(file.content)) {
      throw new Error(`${label} entry contains forbidden HTML or scheme: ${file.name}`);
    }
  });
};

const validateMatchingFiles = (englishFiles, russianFiles, label) => {
  const englishNames = englishFiles
    .map(function selectName(file) {
      return file.name;
    })
    .sort();
  const russianNames = russianFiles
    .map(function selectName(file) {
      return file.name;
    })
    .sort();
  if (englishNames.join("|") !== russianNames.join("|")) {
    throw new Error(`English and Russian ${label} slugs must match.`);
  }
};

const extractArticleFigures = (content) =>
  [...content.matchAll(ARTICLE_FIGURE_PATTERN)].map(function mapFigure(match) {
    const attributes = match[1];
    return {
      source: attributes.match(FIGURE_SOURCE_PATTERN)?.[1] ?? "",
      alt: attributes.match(FIGURE_ALT_PATTERN)?.[1] ?? "",
      caption: attributes.match(FIGURE_CAPTION_PATTERN)?.[1] ?? "",
      openLabel: attributes.match(FIGURE_OPEN_LABEL_PATTERN)?.[1] ?? "",
      closeLabel: attributes.match(FIGURE_CLOSE_LABEL_PATTERN)?.[1] ?? "",
    };
  });

const validateInstructionFigures = async (englishFiles, russianFiles) => {
  if (expectedSceneCount !== 127) {
    throw new Error(
      `Instruction scene registry must contain 127 scenes, found ${expectedSceneCount}.`,
    );
  }
  const articleBySlug = new Map(
    instructionArticles.map(function mapArticle(entry) {
      return [entry.slug, entry];
    }),
  );
  const registeredSteps = instructionArticles.flatMap(function collectSteps(
    entry,
  ) {
    return entry.steps;
  });
  const popupCalloutCount = registeredSteps.filter(function isPopupCallout(
    step,
  ) {
    return step.callout.surface === "popup";
  }).length;
  const pageCalloutCount = registeredSteps.filter(function isPageCallout(step) {
    return step.callout.surface === "page";
  }).length;
  if (popupCalloutCount !== 73 || pageCalloutCount !== 54) {
    throw new Error(
      `Instruction callout registry must contain 73 popup and 54 page callouts; found ${popupCalloutCount} and ${pageCalloutCount}.`,
    );
  }
  const russianByName = new Map(
    russianFiles.map(function mapRussianFile(file) {
      return [file.name, file];
    }),
  );
  const referencedSources = new Set();
  for (const englishFile of englishFiles) {
    const slug = englishFile.name.replace(/\.mdx$/, "");
    const entry = articleBySlug.get(slug);
    if (!entry) {
      throw new Error(`Missing instruction scene registry entry: ${slug}`);
    }
    const russianFile = russianByName.get(englishFile.name);
    const englishFigures = extractArticleFigures(englishFile.content);
    const russianFigures = extractArticleFigures(russianFile.content);
    if (
      englishFigures.length !== entry.steps.length ||
      russianFigures.length !== entry.steps.length
    ) {
      throw new Error(
        `${slug} must contain ${entry.steps.length} figures in both locales.`,
      );
    }
    const englishSources = englishFigures.map(function selectSource(figure) {
      return figure.source;
    });
    const russianSources = russianFigures.map(function selectSource(figure) {
      return figure.source;
    });
    if (englishSources.join("|") !== russianSources.join("|")) {
      throw new Error(`${slug} must share identical SVG sources across locales.`);
    }
    for (const [locale, figures] of [
      ["en", englishFigures],
      ["ru", russianFigures],
    ]) {
      const altValues = new Set();
      figures.forEach(function validateFigure(figure) {
        if (
          figure.source.length === 0 ||
          figure.alt.trim().length === 0 ||
          figure.caption.trim().length === 0 ||
          figure.openLabel.trim().length === 0 ||
          figure.closeLabel.trim().length === 0
        ) {
          throw new Error(`${locale}:${slug} contains an incomplete ArticleFigure.`);
        }
        if (altValues.has(figure.alt)) {
          throw new Error(`${locale}:${slug} contains a duplicate figure alt.`);
        }
        altValues.add(figure.alt);
        referencedSources.add(figure.source);
      });
    }
    englishFigures.forEach(function validateLocalizedFigure(figure, index) {
      if (
        figure.alt === russianFigures[index].alt ||
        figure.caption === russianFigures[index].caption ||
        figure.openLabel === russianFigures[index].openLabel ||
        figure.closeLabel === russianFigures[index].closeLabel
      ) {
        throw new Error(`${slug} figure ${index + 1} is not localized.`);
      }
    });
    const bodyWithoutHeadings = englishFile.content.replace(/^#{1,6} .+$/gm, "");
    if (/\b(?:screenshot|editable) mode\b/i.test(bodyWithoutHeadings)) {
      throw new Error(`${slug} contains outdated extension mode terminology.`);
    }
    if (/Notion integration/i.test(englishFile.content)) {
      throw new Error(`${slug} describes Notion as an integration.`);
    }
  }
  const assetSlugs = (
    await readdir(INSTRUCTION_DIRECTORY, { withFileTypes: true })
  )
    .filter(function isDirectory(entry) {
      return entry.isDirectory();
    })
    .map(function selectDirectoryName(entry) {
      return entry.name;
    })
    .sort();
  if (assetSlugs.join("|") !== EXPECTED_BLOG_SLUGS.join("|")) {
    throw new Error("Instruction asset directories must match the 24 blog slugs.");
  }
  const assetSources = [];
  for (const slug of assetSlugs) {
    const names = (
      await readdir(join(INSTRUCTION_DIRECTORY, slug), {
        withFileTypes: true,
      })
    )
      .filter(function isSvg(entry) {
        return entry.isFile() && entry.name.endsWith(".svg");
      })
      .map(function selectName(entry) {
        return entry.name;
      })
      .sort();
    names.forEach(function collectSource(name) {
      assetSources.push(`/blog/instructions/${slug}/${name}`);
    });
  }
  if (assetSources.length !== expectedSceneCount) {
    throw new Error(
      `Expected ${expectedSceneCount} instruction SVG files, found ${assetSources.length}.`,
    );
  }
  if (
    assetSources.some(function isUnreferenced(source) {
      return !referencedSources.has(source);
    }) ||
    [...referencedSources].some(function isMissing(source) {
      return !assetSources.includes(source);
    })
  ) {
    throw new Error("Instruction SVG assets and MDX references must match exactly.");
  }
  const sceneBySource = new Map(
    instructionArticles.flatMap(function mapInstructionArticle(entry) {
      return entry.steps.map(function mapInstructionStep(step) {
        const filename = `${String(step.number).padStart(2, "0")}.svg`;
        return [
          `/blog/instructions/${entry.slug}/${filename}`,
          { entry, step },
        ];
      });
    }),
  );
  await Promise.all(
    assetSources.map(async function validateSvg(source) {
      const svg = await readFile(join(ROOT, "public", source.slice(1)), "utf8");
      if (
        !svg.includes('viewBox="0 0 1600 900"') ||
        !svg.includes(`data-popup-master="${POPUP_MASTER_VERSION}"`) ||
        !svg.includes(`data-popup-geometry="${POPUP_GEOMETRY_SIGNATURE}"`) ||
        !svg.includes('width="455" height="751"') ||
        !svg.includes("Page 2 File") ||
        !svg.includes("Current tab") ||
        !svg.includes("By URL")
      ) {
        throw new Error(`Instruction SVG does not use the master popup: ${source}`);
      }
      const { entry, step } = sceneBySource.get(source);
      const calloutCount = [...svg.matchAll(/data-callout=/g)].length;
      if (calloutCount !== 1) {
        throw new Error(`${source} must contain exactly one callout arrow.`);
      }
      if (
        !svg.includes(`data-callout-surface="${step.callout.surface}"`) ||
        !svg.includes(`data-callout-target="${step.callout.target}"`)
      ) {
        throw new Error(`${source} callout does not match the scene registry.`);
      }
      const sourceTitleCount = [...svg.matchAll(/data-source-title=/g)].length;
      const sourceUrlCount = [...svg.matchAll(/data-source-url=/g)].length;
      if (step.sourceMode === "url") {
        if (sourceTitleCount !== 0 || sourceUrlCount !== 1) {
          throw new Error(`${source} must use the fixed By URL source field.`);
        }
      } else {
        const titleMustBeTruncated = [...entry.title].length > 26;
        if (
          sourceTitleCount !== 1 ||
          sourceUrlCount !== 0 ||
          !svg.includes(`data-safe-zone="${SOURCE_TITLE_SAFE_ZONE}"`) ||
          !svg.includes(
            `data-source-title-truncated="${titleMustBeTruncated}"`,
          ) ||
          !svg.includes('clip-path="url(#sourceTitleClip)"')
        ) {
          throw new Error(`${source} has an unsafe current-tab title.`);
        }
      }
      const popupRoleBounds = [
        'data-popup-role="brand-logo" data-bounds="21,31,38,38"',
        'data-popup-role="pdf-icon" data-bounds="94,264,49,66"',
        'data-popup-role="powerpoint-icon" data-bounds="306,264,49,66"',
        'data-popup-role="pdf-title" data-bounds="75,337,90,29"',
        'data-popup-role="powerpoint-title" data-bounds="265,339,134,27"',
        `data-popup-role="preview-icon" data-bounds="${
          step.format === "pdf" ? "153,670,21,22" : "122,670,21,22"
        }"`,
        `data-popup-role="preview-text" data-bounds="${
          step.format === "pdf" ? "188,670,120,24" : "157,670,186,24"
        }"`,
      ];
      if (step.sourceMode !== "url") {
        popupRoleBounds.push(
          'data-popup-role="capture-status" data-bounds="317,149,114,22"',
        );
      }
      if (
        popupRoleBounds.some(function isMissingPopupRole(signature) {
          return !svg.includes(signature);
        })
      ) {
        throw new Error(`${source} does not use the collision-safe popup geometry.`);
      }
      const hasConceptualBadge = svg.includes(
        "CONCEPTUAL WORKFLOW · NOT AN EXTENSION CONTROL",
      );
      if (hasConceptualBadge !== step.conceptual) {
        throw new Error(`${source} has an invalid conceptual-state marker.`);
      }
    }),
  );
};

const extractStringFields = (source, field) => [
  ...source.matchAll(new RegExp(`${field}:\\s*"([^"]+)"`, "g")),
].map(function selectValue(match) {
  return match[1];
});

const validateMetadataSource = (source, label, allowLocaleDuplicates = false) => {
  const titles = extractStringFields(source, "title");
  const descriptions = extractStringFields(source, "description");
  const problems = [];
  if (!allowLocaleDuplicates && new Set(titles).size !== titles.length) {
    problems.push(`${label} contains duplicate metadata titles.`);
  }
  if (!allowLocaleDuplicates && new Set(descriptions).size !== descriptions.length) {
    problems.push(`${label} contains duplicate metadata descriptions.`);
  }
  titles.forEach(function validateTitle(title) {
    const titleWithBrand = `${title}${SITE_TITLE_SUFFIX}`;
    const renderedTitle =
      titleWithBrand.length <= 65 ? titleWithBrand : title;
    if (renderedTitle.length < 30 || renderedTitle.length > 65) {
      problems.push(
        `${label} rendered metadata title is outside 30-65 characters: ${renderedTitle}`,
      );
    }
  });
  descriptions.forEach(function validateDescription(description) {
    if (description.length < 100 || description.length > 170) {
      problems.push(
        `${label} metadata description is outside 100-170 characters: ${description}`,
      );
    }
  });
  if (problems.length > 0) {
    throw new Error(problems.join("\n"));
  }
};

const run = async () => {
  const blogFiles = await readMdxFiles(BLOG_DIRECTORY);
  const updateFiles = await readMdxFiles(UPDATE_DIRECTORY);
  const russianBlogFiles = await readMdxFiles(RUSSIAN_BLOG_DIRECTORY);
  const russianUpdateFiles = await readMdxFiles(RUSSIAN_UPDATE_DIRECTORY);
  validateFiles(blogFiles, "blog");
  validateFiles(updateFiles, "update");
  validateFiles(russianBlogFiles, "Russian blog");
  validateFiles(russianUpdateFiles, "Russian update");
  validateMatchingFiles(blogFiles, russianBlogFiles, "blog");
  validateMatchingFiles(updateFiles, russianUpdateFiles, "update");
  const localizedBlogFiles = new Map([
    ["en", blogFiles],
    ["ru", russianBlogFiles],
  ]);
  for (const locale of LOCALES.filter(
    (candidate) => candidate !== "en" && candidate !== "ru",
  )) {
    const files = await readMdxFiles(
      join(ROOT, "content", locale, "blog"),
    );
    validateFiles(files, `${locale} blog`);
    validateMatchingFiles(blogFiles, files, "blog");
    localizedBlogFiles.set(locale, files);
  }
  await validateInstructionFigures(blogFiles, russianBlogFiles);
  const blogSlugs = blogFiles
    .map(function selectBlogSlug(file) {
      return file.name.replace(/\.mdx$/, "");
    })
    .sort();
  if (blogSlugs.join("|") !== EXPECTED_BLOG_SLUGS.join("|")) {
    throw new Error(
      "The English blog corpus must match the approved 24-cluster content map.",
    );
  }
  if (updateFiles.length !== 0) {
    throw new Error(
      `Expected no update entries before the first release, found ${updateFiles.length}`,
    );
  }
  if (russianUpdateFiles.length !== 0) {
    throw new Error(
      "Russian content must not contain pre-release update entries.",
    );
  }

  const registry = await readFile(
    join(ROOT, "src", "content", "content-registry.ts"),
    "utf8",
  );
  validateMetadataSource(registry, "Content registry");
  const slugMatches = [...registry.matchAll(/slug: "([^"]+)"/g)];
  const slugs = slugMatches.map(function selectSlug(match) {
    return match[1];
  });
  const slugCounts = new Map();
  slugs.forEach(function countSlug(slug) {
    slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
  });
  if (
    slugCounts.size !== blogFiles.length + updateFiles.length ||
    [...slugCounts.values()].some(function hasInvalidLocaleCount(count) {
      return count !== 2;
    })
  ) {
    throw new Error(
      "Every English content slug must have exactly one Russian equivalent.",
    );
  }
  const expectedEntryCount = (blogFiles.length + updateFiles.length) * 2;
  const imageMatches = [...registry.matchAll(/image: "([^"]+)"/g)];
  const imageAltMatches = [...registry.matchAll(/imageAlt: "([^"]+)"/g)];
  if (
    imageMatches.length !== expectedEntryCount ||
    imageAltMatches.length !== expectedEntryCount ||
    imageAltMatches.some(function hasEmptyImageAlt(match) {
      return match[1].trim().length === 0;
    })
  ) {
    throw new Error(
      "Every English and Russian content entry must have an image and non-empty imageAlt.",
    );
  }
  const uniqueImages = new Set(
    imageMatches.map(function selectImage(match) {
      return match[1];
    }),
  );
  if (uniqueImages.size !== blogFiles.length) {
    throw new Error(
      `Expected ${blogFiles.length} shared blog images, found ${uniqueImages.size}.`,
    );
  }
  await Promise.all(
    [...uniqueImages].map(async function validateImage(image) {
      if (!image.startsWith("/blog/mocks/") || !image.endsWith(".webp")) {
        throw new Error(`Invalid blog image path: ${image}`);
      }
      const imageFile = await readFile(
        join(ROOT, "public", image.slice(1)),
      );
      if (imageFile.length === 0) {
        throw new Error(`Empty blog image: ${image}`);
      }
    }),
  );
  const authorMatches = [...registry.matchAll(/author: "([^"]+)"/g)];
  if (
    authorMatches.length !== expectedEntryCount ||
    authorMatches.some(function hasEmptyAuthor(match) {
      return match[1].trim().length === 0;
    })
  ) {
    throw new Error("Every blog and update entry must have an author.");
  }
  const dateMatches = [
    ...registry.matchAll(/(?:publishedAt|updatedAt): "([^"]+)"/g),
  ];
  if (dateMatches.length !== expectedEntryCount * 2) {
    throw new Error("Every blog and update entry must have publication dates.");
  }
  dateMatches.forEach(function validateDate(match) {
    const value = match[1];
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
      Number.isNaN(Date.parse(`${value}T00:00:00Z`))
    ) {
      throw new Error(`Invalid content date: ${value}`);
    }
  });

  const legalProfile = JSON.parse(
    await readFile(join(ROOT, "content", "legal-profile.json"), "utf8"),
  );
  const legalFieldsComplete =
    typeof legalProfile.entityName === "string" &&
    legalProfile.entityName.trim().length > 0 &&
    typeof legalProfile.addresses === "object" &&
    legalProfile.addresses !== null &&
    Object.values(legalProfile.addresses).length === 16 &&
    Object.values(legalProfile.addresses).every(
      (address) => typeof address === "string" && address.trim().length > 0,
    ) &&
    typeof legalProfile.jurisdictions === "object" &&
    legalProfile.jurisdictions !== null &&
    Object.values(legalProfile.jurisdictions).length === 16 &&
    Object.values(legalProfile.jurisdictions).every(
      (jurisdiction) =>
        typeof jurisdiction === "string" &&
        jurisdiction.trim().length > 0,
    ) &&
    typeof legalProfile.contactEmail === "string" &&
    legalProfile.contactEmail.trim().length > 0 &&
    Array.isArray(legalProfile.processors) &&
    legalProfile.processors.length > 0;
  if (
    process.env.NEXT_PUBLIC_LEGAL_REVIEWED === "true" &&
    !legalFieldsComplete
  ) {
    throw new Error(
      "Legal indexing cannot be enabled until content/legal-profile.json is complete.",
    );
  }

  const landingSources = new Map();
  for (const [locale, relativePaths] of Object.entries(
    LANDING_SOURCE_PATHS,
  )) {
    const sources = await Promise.all(
      relativePaths.map((relativePath) =>
        readFile(join(ROOT, relativePath), "utf8"),
      ),
    );
    landingSources.set(locale, sources.join("\n"));
  }
  const seoCopySource = await readFile(
    join(ROOT, "src", "shared", "seo", "seo-copy.ts"),
    "utf8",
  );
  const metadataErrors = [];
  for (const [locale, source] of landingSources) {
    try {
      validateMetadataSource(source, `${locale} landing content`);
    } catch (error) {
      metadataErrors.push(error instanceof Error ? error.message : String(error));
    }
  }
  try {
    validateMetadataSource(seoCopySource, "Route SEO copy");
  } catch (error) {
    metadataErrors.push(error instanceof Error ? error.message : String(error));
  }
  if (metadataErrors.length > 0) {
    throw new Error(`Metadata validation failed:\n- ${metadataErrors.join("\n- ")}`);
  }
  const requiredLandingRoutes = [
    "page2pdf-gpt",
    "web2pdf-gpt",
    "html2pdf-gpt",
    "one-page2powerpoint-gpt",
    "web2powerpoint-gpt",
    "export-ai-chat-to-pdf",
    "export-chatgpt-to-pdf",
    "export-claude-to-pdf",
    "export-gemini-to-pdf",
    "export-grok-to-pdf",
    "privacy",
    "terms",
    "about",
  ];
  const aboutSource = await readFile(
    join(ROOT, "src", "content", "about-landings.ts"),
    "utf8",
  );
  validateMetadataSource(aboutSource, "About landing content", true);
  for (const [locale, source] of landingSources) {
    requiredLandingRoutes.forEach(function validateLocalizedLanding(route) {
      const routeSource = route === "about" ? aboutSource : source;
      if (
        !routeSource.includes(`"${route}"`) &&
        !routeSource.includes(`${route}:`)
      ) {
        throw new Error(`Missing ${locale} landing content: ${route}`);
      }
    });
  }

  for (const [locale, files] of localizedBlogFiles) {
    if (files.length !== blogFiles.length) {
      throw new Error(
        `${locale} blog corpus contains ${files.length} files; expected ${blogFiles.length}.`,
      );
    }
  }

  console.log(
    `Content valid: ${blogFiles.length} blog entries across ${localizedBlogFiles.size} locales; ${updateFiles.length} updates per published update locale.`,
  );
};

await run();
