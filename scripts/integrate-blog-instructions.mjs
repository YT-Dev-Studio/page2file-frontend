import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { instructionArticles } from "./blog-instruction-scenes.mjs";

const ROOT = process.cwd();

const escapeForExpression = (value) =>
  JSON.stringify(value).replaceAll("</", "<\\/");

const figureMarkup = ({ entry, step, locale }) => {
  const caption = locale === "ru" ? step.ru : step.en;
  const alt =
    locale === "ru"
      ? `Браузер и расширение Page 2 File: ${caption}`
      : `Browser and Page 2 File extension: ${caption}`;
  const openLabel =
    locale === "ru"
      ? `Открыть изображение в полном размере: ${caption}`
      : `Open full-size image: ${caption}`;
  const closeLabel =
    locale === "ru"
      ? "Закрыть просмотр изображения"
      : "Close image preview";
  const source = `/blog/instructions/${entry.slug}/${String(step.number).padStart(2, "0")}.svg`;
  return `<ArticleFigure
  alt={${escapeForExpression(alt)}}
  caption={${escapeForExpression(caption)}}
  closeLabel={${escapeForExpression(closeLabel)}}
  openLabel={${escapeForExpression(openLabel)}}
  src="${source}"
  step={${step.number}}
/>`;
};

const stripExistingFigures = (source) =>
  source
    .replace(/\n*<ArticleFigure[\s\S]*?\/>\n*/g, "\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const updateEnglishTerminology = (blocks) => {
  let accurateExplained = false;
  let editableExplained = false;
  return blocks.map((block) => {
    if (block.startsWith("#")) {
      return block;
    }
    let nextBlock = block.replace(
      /(?:Accurate copy(?: \(screenshot-style output\))?|Screenshot mode|screenshot mode)/g,
      () => {
        if (!accurateExplained) {
          accurateExplained = true;
          return "Accurate copy (screenshot-style output)";
        }
        return "Accurate copy";
      },
    );
    nextBlock = nextBlock.replace(
      /(?:Editable document(?: \(editable output\))?|Editable mode|editable mode)/g,
      () => {
        if (!editableExplained) {
          editableExplained = true;
          return "Editable document (editable output)";
        }
        return "Editable document";
      },
    );
    return nextBlock;
  });
};

const updateRussianTerminology = (blocks) => {
  let accurateExplained = false;
  let editableExplained = false;
  return blocks.map((block) => {
    if (block.startsWith("#")) {
      return block;
    }
    let nextBlock = block.replace(
      /(?:Accurate copy(?: — режим точной визуальной копии)?|Режим скриншотов|режим скриншотов|режиме скриншотов|Screenshot mode|screenshot mode)/g,
      () => {
        if (!accurateExplained) {
          accurateExplained = true;
          return "Accurate copy — режим точной визуальной копии";
        }
        return "Accurate copy";
      },
    );
    nextBlock = nextBlock.replace(
      /(?:Editable document(?: — режим редактируемого документа)?|Редактируемый режим|редактируемый режим|Editable mode|editable mode)/g,
      () => {
        if (!editableExplained) {
          editableExplained = true;
          return "Editable document — режим редактируемого документа";
        }
        return "Editable document";
      },
    );
    return nextBlock;
  });
};

const isParagraphBlock = (block) => {
  const trimmed = block.trimStart();
  return (
    trimmed.length > 0 &&
    !trimmed.startsWith("#") &&
    !trimmed.startsWith("- ") &&
    !trimmed.startsWith("1. ") &&
    !trimmed.startsWith("```") &&
    !trimmed.startsWith("<")
  );
};

const STOP_WORDS = new Set([
  "a",
  "and",
  "as",
  "before",
  "for",
  "from",
  "in",
  "is",
  "of",
  "or",
  "the",
  "to",
  "when",
  "with",
  "в",
  "выберите",
  "для",
  "и",
  "или",
  "как",
  "на",
  "по",
  "проверьте",
  "с",
]);

const searchableWords = (value) =>
  value
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));

const anchorScore = (block, caption, positionScore) => {
  const blockWords = new Set(searchableWords(block));
  const captionWords = searchableWords(caption);
  const matchingWords = captionWords.filter((word) => blockWords.has(word));
  const lexicalScore =
    captionWords.length === 0 ? 0 : matchingWords.length / captionWords.length;
  return lexicalScore * 10 + positionScore;
};

const selectAnchors = (blocks, steps, locale) => {
  const paragraphIndices = blocks
    .map((block, index) => ({ block, index }))
    .filter(({ block }) => isParagraphBlock(block))
    .map(({ index }) => index);
  if (paragraphIndices.length < steps.length) {
    throw new Error(
      `Not enough paragraph anchors: expected ${steps.length}, found ${paragraphIndices.length}.`,
    );
  }
  const anchors = [paragraphIndices[0]];
  for (let index = 1; index < steps.length; index += 1) {
    const previousAnchor = anchors.at(-1);
    const remainingSteps = steps.length - index - 1;
    const maximumCandidatePosition =
      paragraphIndices.length - remainingSteps - 1;
    const candidateParagraphs = paragraphIndices.filter(
      (paragraphIndex, paragraphPosition) =>
        paragraphIndex > previousAnchor &&
        paragraphPosition <= maximumCandidatePosition,
    );
    const targetRatio = index / (steps.length - 1);
    const caption = locale === "ru" ? steps[index].ru : steps[index].en;
    let bestCandidate = candidateParagraphs[0];
    let bestScore = Number.NEGATIVE_INFINITY;
    candidateParagraphs.forEach((paragraphIndex) => {
      const paragraphPosition = paragraphIndices.indexOf(paragraphIndex);
      const actualRatio = paragraphPosition / (paragraphIndices.length - 1);
      const positionScore = 1 - Math.abs(targetRatio - actualRatio);
      const score = anchorScore(blocks[paragraphIndex], caption, positionScore);
      if (score > bestScore) {
        bestCandidate = paragraphIndex;
        bestScore = score;
      }
    });
    if (bestCandidate === undefined) {
      throw new Error("Unable to select a matching article figure anchor.");
    }
    anchors.push(bestCandidate);
  }
  return anchors;
};

const integrateArticle = async (entry, locale) => {
  const directory =
    locale === "ru"
      ? join(ROOT, "content", "ru", "blog")
      : join(ROOT, "content", "blog");
  const filePath = join(directory, `${entry.slug}.mdx`);
  const source = await readFile(filePath, "utf8");
  const cleanSource = stripExistingFigures(source);
  const sourceBlocks = cleanSource.split(/\r?\n\r?\n/);
  const blocks =
    locale === "ru"
      ? updateRussianTerminology(sourceBlocks)
      : updateEnglishTerminology(sourceBlocks);
  const anchors = selectAnchors(blocks, entry.steps, locale);
  const figureByAnchor = new Map(
    anchors.map((anchor, index) => [
      anchor,
      figureMarkup({ entry, step: entry.steps[index], locale }),
    ]),
  );
  const integratedBlocks = blocks.flatMap((block, index) => {
    const figure = figureByAnchor.get(index);
    return figure === undefined ? [block] : [block, figure];
  });
  await writeFile(filePath, `${integratedBlocks.join("\n\n")}\n`, "utf8");
};

const run = async () => {
  for (const entry of instructionArticles) {
    await integrateArticle(entry, "en");
    await integrateArticle(entry, "ru");
  }
  console.log(
    `Integrated shared instruction figures into ${instructionArticles.length * 2} MDX files.`,
  );
};

await run();
