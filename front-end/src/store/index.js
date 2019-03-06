import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules/'
import getters from './getters'

const { shoppingCart } = modules

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shoppingCart
  },
  getters
})
