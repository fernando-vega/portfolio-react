import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://fernando-vega.github.io/portfolio-react/',
  plugins: [react()],
})
