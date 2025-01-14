import react from '@vitejs/plugin-react'
import path from 'path'
import UnoCSS from 'unocss/vite'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
})
