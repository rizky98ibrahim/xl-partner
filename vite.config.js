import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  // Alias
  resolve: {
    alias: {
      '~': '/node_modules',
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@views': '/src/views',
      '@router': '/src/router',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@style': '/src/style',
      '@global': '/src/global',
    },
  },
})
