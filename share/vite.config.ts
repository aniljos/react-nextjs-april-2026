  import { defineConfig } from 'vitest/config'
  import react from '@vitejs/plugin-react'
  import babel from '@rolldown/plugin-babel'

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [
      react(),
      babel({ presets: [] }),
    ],
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
  })