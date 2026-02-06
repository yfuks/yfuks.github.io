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
        copyFileSync(
          resolve(__dirname, 'resume/rendercv_output/Yoann_Fuks_CV.html'),
          resolve(resumeDir, 'index.html')
        )
      },
    },
  ],
  // GitHub Pages: user site is at yfuks.github.io, base is /
  base: '/',
})
