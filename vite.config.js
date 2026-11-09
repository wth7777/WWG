import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    minify: 'esbuild'
  },
  server: {
    port: 5173,
    open: true
  }
})