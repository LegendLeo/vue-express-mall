import { addCartItem, updateCartItem, deleteCartItem } from '@/api/user'

const shoppingCart = {
  state: {
    cartList: []
  },
  mutations: {
    ADD_CART_ITEM: (state, item) => {
      item.count = 1
      state.cartList.push(item)
      addCartItem(item).then(res => {
        console.log(res)
      })
    },
    CHANGE_CART_ITEM_COUNT: (state, item) => {
      let type = state.cartList.find(originItem => originItem._id === item._id)
      type.count = item.count
      updateCartItem({
        count: item.count,
        _id: item._id
      }).then(res => {
        console.log(res)
      })
    },
    DELETE_CART_ITEM: (state, id) => {
      state.cartList = state.cartList.filter(item => item._id !== id)
      deleteCartItem(id).then(res => {
        console.log(res)
      })
    },
    RESTORE_CART: (state, list) => {
      state.cartList = list
    }
  }
}

export default shoppingCart
