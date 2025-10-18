import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/QuickNotes-Pro-2.0-Interactive-Demo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
