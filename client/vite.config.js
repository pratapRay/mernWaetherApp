import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/register": {
        target: "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      },
      "/login": {
        target: "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      },
      "/getData": {
        target: "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      },
      "/logout": {
        target: "http://localhost:5500",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
