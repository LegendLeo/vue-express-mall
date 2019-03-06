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
    CHANGE_CART_ITEM_COUNT: (state, id, count) => {
      let type = state.cartList.find(originItem => originItem.id === item.id)
    }
  }
}

export default shoppingCart
