import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat/client',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  build: {
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/preact')) return 'preact'
          if (id.includes('node_modules/react-router')) return 'router'
        },
      },
    },
  },
})
