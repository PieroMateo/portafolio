// Convierte las imágenes PNG/JPG de public/images a WebP.
// Uso: npm run images
import { readdir } from 'node:fs/promises'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const ROOT = 'public/images'
const MAX_WIDTH = 1800

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(path)
      continue
    }
    if (!['.png', '.jpg', '.jpeg'].includes(extname(entry.name).toLowerCase())) continue

    const output = path.replace(/\.(png|jpe?g)$/i, '.webp')
    const info = await sharp(path)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 90 })
      .toFile(output)
    console.log(`${output}  ${Math.round(info.size / 1024)} KB`)
  }
}

await walk(ROOT)
