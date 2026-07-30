import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";

const snapshotUrl = new URL(
  "../contracts/backend/page2file-v1.json",
  import.meta.url,
);
const generatedUrl = new URL(
  "../src/shared/api/generated/backend.ts",
  import.meta.url,
);
const snapshot = await readFile(snapshotUrl, "utf8");
const generated = await readFile(generatedUrl, "utf8");
const document = JSON.parse(snapshot);

const requiredPaths = [
  "/web/v1/capabilities",
  "/web/v1/sessions",
  "/web/v1/previews",
  "/web/v1/jobs/{jobId}",
  "/web/v1/jobs/{jobId}/preview",
  "/web/v1/jobs/{jobId}/render",
  "/web/v1/jobs/{jobId}/cancel",
  "/web/v1/jobs/{jobId}/thumbnails/{sectionId}",
  "/web/v1/jobs/{jobId}/download",
];

if (document.openapi !== "3.1.0" || document.info?.version !== "1.0.0") {
  throw new Error("Pinned backend contract must remain OpenAPI v1.");
}
for (const path of requiredPaths) {
  if (!document.paths?.[path]) {
    throw new Error(`Pinned backend contract is missing ${path}.`);
  }
}
const generatedWithoutHeader = generated
  .replace(/^\/\*\*[\s\S]*?\*\/\s*/, "")
  .replaceAll("\r\n", "\n")
  .trim();
const expectedGenerated = astToString(await openapiTS(snapshotUrl))
  .replaceAll("\r\n", "\n")
  .trim();
if (generatedWithoutHeader !== expectedGenerated) {
  throw new Error(
    "Generated backend types are stale. Run npm run generate:backend-types.",
  );
}
const renderSchema =
  document.paths?.["/web/v1/jobs/{jobId}/render"]?.post?.requestBody?.content?.[
    "application/json"
  ]?.schema?.$ref;
if (renderSchema !== "#/components/schemas/RenderRequest") {
  throw new Error("Pinned render operation is missing RenderRequest.");
}

const hash = createHash("sha256").update(snapshot).digest("hex");
console.log(
  `Backend contract snapshot valid: v${document.info.version}, sha256 ${hash}.`,
);
