import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import { resolve } from 'path'

/**
 * 库构建配置文件
 * @description 用于构建组件库的 UMD 和 ESM 格式
 */
export default defineConfig({
  plugins: [vue2()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vue2UI',
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'umd'}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}) 