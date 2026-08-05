import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDirectories = ["public/brand", "public/icons", "public/og"];
await Promise.all(
  outputDirectories.map((directory) =>
    mkdir(path.join(root, directory), { recursive: true }),
  ),
);

const logoSource = path.join(root, "src/app/assets/logo.png");
const resizeLogo = (size, output) =>
  sharp(logoSource)
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, output));

await Promise.all([
  resizeLogo(512, "public/brand/page2file-logo.png"),
  resizeLogo(192, "public/icons/icon-192.png"),
  resizeLogo(512, "public/icons/icon-512.png"),
  sharp(path.join(root, "public/demos/share-card.svg"))
    .resize(1200, 630)
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "public/og/page2file-share.png")),
]);

console.log("Generated exact-size logo, PWA icons, and 1200x630 social image.");
