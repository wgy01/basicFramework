import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import iView from 'iview'
import axios from './axios'
import 'iview/dist/styles/iview.css'
import './main.less'

import './abc.js'

Vue.prototype.$axios = axios;//axios挂载到Vue

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
