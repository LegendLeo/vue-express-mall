const shoppingCart = {
  state: {
    cartList: []
  },
  mutations: {
    ADD_CART_ITEM: (state, item) => {
      let type = state.cartList.find(originItem => originItem.id === item.id)
      if (type) {
        type.count++
      } else {
        item.count = 1
        state.cartList.push(item)
      }
    },
    CHANGE_CART_ITEM_COUNT: (state, item) => {
      let type = state.cartList.find(originItem => originItem.id === item.id)
      if (item.isPlus) {
        type.count = type.count + 1
      } else if (type.count > 1) {
        type.count--
      }
    },
    DELETE_CART_ITEM: (state, id) => {
      state.cartList = state.cartList.filter(item => item.id !== id)
    }
  }
}

export default shoppingCart
