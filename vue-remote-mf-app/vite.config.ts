import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
      vue(),
      federation({
          name: 'vuemf',
          filename: 'remoteEntry.js',
          // Modules to expose
          exposes: {
              './App': './src/App.vue',
              './AppWrapper': './src/AppWrapper.ts',
          },
          shared: ['vue']
      })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
}
