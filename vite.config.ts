import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: 'build',
        entryFileNames: 'index.js',
        assetFileNames: 'index.css',
      }
    }
  }
})