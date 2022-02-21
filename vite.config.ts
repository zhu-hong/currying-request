import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outputDir: resolve(__dirname),
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${ format === 'es' ? 'mjs' : 'cjs' }`,
    },
  },
})