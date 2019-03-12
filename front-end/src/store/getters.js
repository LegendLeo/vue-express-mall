const getters = {
  isLoggedIn: state => Boolean(state.user.username),
  isAdmin: state => state.user.isAdmin,
  username: state => state.user.username,
  cartList: state => state.shoppingCart.cartList,
  cartListCount: state => state.shoppingCart.cartList.length
}

export default getters
