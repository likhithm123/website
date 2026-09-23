import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIRS = [
  'public/images',
  'public/images/gallery',
  'public/images/icetite20_drive',
  'public/images/technext24',
  'public/images/bolt20',
  'public/images/faculty',
];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return null;
  }

  const baseName = path.basename(filePath, path.extname(filePath));
  const dirName = path.dirname(filePath);
  const outPath = path.join(dirName, `${baseName}.webp`);

  const originalStats = fs.statSync(filePath);
  const originalSize = originalStats.size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = sharp(filePath);

    // Resize to max 1600px if larger, preserving aspect ratio
    if ((metadata.width && metadata.width > 1600) || (metadata.height && metadata.height > 1600)) {
      pipeline = pipeline.resize({
        width: metadata.width >= metadata.height ? 1600 : undefined,
        height: metadata.height > metadata.width ? 1600 : undefined,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP with high quality (86 quality for visually lossless results)
    await pipeline
      .webp({ quality: 86, effort: 6 })
      .toFile(outPath);

    const newStats = fs.statSync(outPath);
    const newSize = newStats.size;
    const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    return {
      file: path.relative('public', filePath),
      outFile: path.relative('public', outPath),
      origWidth: metadata.width,
      origHeight: metadata.height,
      origKB: (originalSize / 1024).toFixed(1),
      newKB: (newSize / 1024).toFixed(1),
      savings: `${savings}%`,
    };
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return null;
  }
}

async function run() {
  console.log('Starting photo optimization...');
  let totalOrigBytes = 0;
  let totalNewBytes = 0;
  let count = 0;

  for (const dir of TARGET_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile()) {
        const fullPath = path.join(dir, entry.name);
        const result = await optimizeImage(fullPath);
        if (result) {
          count++;
          totalOrigBytes += parseFloat(result.origKB) * 1024;
          totalNewBytes += parseFloat(result.newKB) * 1024;
          console.log(`[${count}] ${result.file} (${result.origWidth}x${result.origHeight}, ${result.origKB} KB) -> ${result.outFile} (${result.newKB} KB) [-${result.savings}]`);
        }
      }
    }
  }

  const totalSavedMB = ((totalOrigBytes - totalNewBytes) / (1024 * 1024)).toFixed(2);
  const origMB = (totalOrigBytes / (1024 * 1024)).toFixed(2);
  const newMB = (totalNewBytes / (1024 * 1024)).toFixed(2);
  const overallSavings = (((totalOrigBytes - totalNewBytes) / totalOrigBytes) * 100).toFixed(1);

  console.log('\n=============================================');
  console.log(`Optimization Completed: ${count} photos converted to WebP`);
  console.log(`Original Total: ${origMB} MB`);
  console.log(`New WebP Total: ${newMB} MB`);
  console.log(`Net Bandwidth Saved: ${totalSavedMB} MB (${overallSavings}% reduction)`);
  console.log('=============================================\n');
}

run();
