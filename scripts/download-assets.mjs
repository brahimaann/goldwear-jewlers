import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS = [
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/goldwear-logo-rgb-01_3.jpg?1565753974',
    filename: 'goldwear-logo.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/pxl-20230802-164234950_orig.jpg',
    filename: 'store-front.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/jewelry-repair.jpg?1555774439',
    filename: 'jewelry-repair-thumb.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/watch-repair.jpg?1555774451',
    filename: 'watch-repair-thumb.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/ring-sizing.jpg?1555776468',
    filename: 'ring-sizing.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/retipping-illustration-300x271.jpg?1605305902',
    filename: 'retipping.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/chain-repair.jpg?1555776444',
    filename: 'chain-repair.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/ring-break.jpg?1555780905',
    filename: 'ring-break.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/loose-gemstones.jpg?1555780917',
    filename: 'loose-gemstones.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/replacement-clasp.jpg?1605305873',
    filename: 'replacement-clasp.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/bracelet-repair.jpg?1605305880',
    filename: 'bracelet-repair.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/restringing.jpg?1605305896',
    filename: 'restringing.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/watchbattery.jpg?1555791351',
    filename: 'watch-battery.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/watch-adjustment_1.jpg?1555791254',
    filename: 'watch-adjustment.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/watch-pin_1.jpg?1555791261',
    filename: 'watch-pin.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/resetting-watch-hands.jpg?1555789572',
    filename: 'resetting-watch-hands.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/editor/watch-buckles.jpg?1555791281',
    filename: 'watch-buckles.jpg'
  },
  {
    url: 'https://goldwearjewelers.com/uploads/9/4/6/1/94617150/published/new-watch-bands.jpg?1555791188',
    filename: 'new-watch-bands.jpg'
  }
];

const destDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

console.log(`Downloading ${ASSETS.length} assets to ${destDir}...`);

async function downloadAsset(asset) {
  const destPath = path.join(destDir, asset.filename);
  try {
    const res = await fetch(asset.url);
    if (!res.ok) {
      throw new Error(`Status ${res.status}`);
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    console.log(`✓ Downloaded ${asset.filename}`);
  } catch (error) {
    console.error(`✗ Failed to download ${asset.filename} from ${asset.url}:`, error.message);
  }
}

async function run() {
  for (const asset of ASSETS) {
    await downloadAsset(asset);
  }
  console.log('All downloads completed.');
}

run();
