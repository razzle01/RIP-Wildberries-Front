import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  base: "/RIP-Wildberries-Front",
  server: {
    host: true, // Разрешить доступ по локальному IP
    port: 3000, // Задать порт
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')), // Путь к ключу
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')), // Путь к сертификату
    },
    proxy: {
      "/api": {
        target: "http://localhost:8000/",
        changeOrigin: true,  // Меняет origin на целевой
        rewrite: (path) => path.replace(/^\/api/, '') // Переписывает путь
      }
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(), // Плагин mkcert
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Включить PWA в режиме разработки
      },
      manifest: {
        name: "Tile Notes",
        short_name: "Tile Notes",
        start_url: "/",
        display: "standalone",
        background_color: "#fdfdfd",
        theme_color: "#db4938",
        orientation: "portrait-primary",
        icons: [
          
        ]
      }
    })
  ]
})
