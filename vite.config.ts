import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend')
    }
  },
  server: {
    host: true, // ngrokを使用するため
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://192.168.3.3:3000',
        changeOrigin: true
      }
    }
  }
})
