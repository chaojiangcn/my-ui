import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import { resolve } from 'path'

/**
 * Vite 配置文件
 * @description 配置 Vue2 开发环境
 */
export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}) 