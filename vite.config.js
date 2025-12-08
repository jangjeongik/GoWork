import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import plugin from 'eslint-plugin-react-hooks'

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/GoWork/" : "/",
  build: {
    outDir: "docs",
  },
  plugins: [
    react(),
  ],
}));
