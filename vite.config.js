import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: process.env.VITE_BASE,
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/assets/scss/_variables.scss";
          `
        }
      }
    },
    resolve:{
      alias:{
        '@' : path.resolve(__dirname, './src')
      },
    },
  })
}
