import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, './src/scss'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
