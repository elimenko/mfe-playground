import { createApp } from 'vue'
import App from './App.vue'

export default (el: any) => {
  console.log('Element:', el);
  const app = createApp(App)
  app.mount(el)
}