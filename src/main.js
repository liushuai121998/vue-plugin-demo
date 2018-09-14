import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

// 引入插件
import vpay from './lib/vpay'
// 使用插件
Vue.use(vpay)

Vue.config.productionTip = false

export function createApp () {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
