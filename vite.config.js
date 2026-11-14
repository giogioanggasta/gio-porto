import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages user site (giogioanggasta.github.io) is served from the
// repository root, so the default base path is correct.
export default defineConfig({
  plugins: [react()],
})
