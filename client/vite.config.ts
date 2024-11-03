import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        api:"modern-compiler"
      }
    }

  },
  resolve:{
    alias:{
      "@":resolve('src')
    }
  }
})
