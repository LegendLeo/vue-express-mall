const shoppingCart = {
  state: {
    cartList: []
  },
  mutations: {
    ADD_CART_ITEM: (state, item) => {
      item.count = 1
      state.cartList.push(item)
    },
    CHANGE_CART_ITEM_COUNT: (state, item) => {
      let type = state.cartList.find(originItem => originItem._id === item._id)
      type.count = item.count
    },
    DELETE_CART_ITEM: (state, id) => {
      state.cartList = state.cartList.filter(item => item._id !== id)
    }
  }
}

export default shoppingCart
