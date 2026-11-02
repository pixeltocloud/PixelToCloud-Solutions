import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
fs.copyFileSync(path.join(rootDir, 'index.dev.html'), path.join(rootDir, 'index.html'))
console.log('Restored index.html from index.dev.html for Vite build.')
