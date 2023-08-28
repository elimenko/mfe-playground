import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
          name: 'reactmf',
          filename: 'remoteEntry.js',
          // Modules to expose
          exposes: {
              './App': './src/App.tsx',
          },
          shared: {
            'react': { version: '18.2.0' },
            'react-dom': { version: '18.2.0' }
          }
      })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
