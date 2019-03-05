import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import GLOBAL from './global'
import './plugins/axios'
import './plugins/element'

Vue.prototype.GLOBAL = GLOBAL
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('@/assets/images/loading.svg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
