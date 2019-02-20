import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './plugins/axios'
import './plugins/element'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: '/static/images/loading.svg'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
