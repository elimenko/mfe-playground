import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'host-app',
    remotes: {
        remoteVueApp: "http://localhost:5002/assets/remoteEntry.js",
        remoteReactApp: "http://localhost:5004/assets/remoteEntry.js",
    },
    shared: {
      'react': { requiredVersion: '18.2.0' },
      'react-dom': { requiredVersion: '18.2.0' }
    }
  })],
})
