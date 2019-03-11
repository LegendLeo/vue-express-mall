import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules/'
import getters from './getters'

const { user, shoppingCart } = modules

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shoppingCart
  },
  getters
})
