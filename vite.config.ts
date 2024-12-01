import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3000
  },
  build: {
    sourcemap: false,
    minify: true,
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
