import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './less/main.less'
import './less/basics.less'
import '../public/js/global.js'

Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
