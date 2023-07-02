import { createApp } from 'vue'
import App from './App.vue'
import createStore from './wrapperStore';

export default (el: any, props: any) => {
  console.log('Element:', el);
  console.log('Props:', props);
  const store = createStore(props);
  const app = createApp(App)

  app.provide('store', store);
  app.mount(el)
}