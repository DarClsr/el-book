import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"
import tailwindcss from  "tailwindcss"
import autoprefixer from  "autoprefixer"
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      scss:{
        api:"modern-compiler"
      }
    },
    postcss:{
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    },

  },
  server:{
    proxy:{
      "/api":{
        target:"http://106.14.223.52",
        changeOrigin:true,
      },
      "/public":{
        target:"http://106.14.223.52",
        changeOrigin:true,
      }
    }
  },
  resolve:{
    alias:{
      "@":resolve('src')
    }
  }
})
