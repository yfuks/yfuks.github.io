import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-resume',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        const resumeDir = resolve(outDir, 'resume')
        if (!existsSync(resumeDir)) {
          mkdirSync(resumeDir, { recursive: true })
        }
        // Copy PDF file
        copyFileSync(
          resolve(__dirname, 'resume/rendercv_output/Yoann_Fuks_CV.pdf'),
          resolve(resumeDir, 'Yoann_Fuks_CV.pdf')
        )
        // Copy HTML wrapper that embeds the PDF
        copyFileSync(
          resolve(__dirname, 'resume/resume-wrapper.html'),
          resolve(resumeDir, 'index.html')
        )
      },
    },
    {
      // GitHub Pages: serve SPA for /fr and other non-file paths
      name: 'copy-404',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        const indexPath = resolve(outDir, 'index.html')
        const notFoundPath = resolve(outDir, '404.html')
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath)
        }
      },
    },
  ],
  // GitHub Pages: user site is at yfuks.github.io, base is /
  base: '/',
})
