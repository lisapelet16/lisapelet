import { access, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const source = join(publicDir, "favicon-source.png");

const sourceCandidates = [
  source,
  join(root, "app", "icon.png"),
  join(root, "public", "favicon-192x192.png"),
];

let resolvedSource = sourceCandidates[0];
for (const candidate of sourceCandidates) {
  try {
    await access(candidate);
    resolvedSource = candidate;
    break;
  } catch {
    // try next source
  }
}

await mkdir(publicDir, { recursive: true });

const sizes = [48, 96, 192];

for (const size of sizes) {
  await sharp(resolvedSource)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png()
    .toFile(join(publicDir, `favicon-${size}x${size}.png`));
}

await sharp(resolvedSource)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  })
  .png()
  .toFile(join(publicDir, "apple-touch-icon.png"));

const icoBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(resolvedSource)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      })
      .png()
      .toBuffer(),
  ),
);

const ico = await pngToIco(icoBuffers);
await writeFile(join(publicDir, "favicon.ico"), ico);

console.log("Favicons generated in public/");
