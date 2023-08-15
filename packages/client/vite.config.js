import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '',
  root: 'src',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  },
  // to enable importing utils from a common package
  resolve: {
    preserveSymlinks: true
  }
})