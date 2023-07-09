import { createApp } from 'vue'
import App from './App.vue'
import createStore from './wrapperStore';

// TODO: Fix typing
export default (el: HTMLElement, props: any) => {
  const store = createStore(props);
  const app = createApp(App)

  app.provide('store', store);
  app.mount(el)

  return store;
}