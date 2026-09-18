import sharp from 'sharp'
import { statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dir = join(__dirname, '..', 'src/assets/team')

const jobs = [
  { src: 'cmpk-raheem.jpeg', out: 'cmpk-raheem.webp' },
  { src: 'aboobacker-sidheeq.jpeg', out: 'aboobacker-sidheeq.webp' },
]

for (const job of jobs) {
  const srcPath = join(dir, job.src)
  const outPath = join(dir, job.out)
  const before = statSync(srcPath).size
  await sharp(srcPath)
    .resize({ width: 720, height: 900, fit: 'cover', position: 'top' })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath)
  const after = statSync(outPath).size
  console.log(
    `${job.src} -> ${job.out}: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`,
  )
}
