const getters = {
  cartList: state => state.shoppingCart.cartList,
  cartListCount: state => state.shoppingCart.cartList.length
}

export default getters
