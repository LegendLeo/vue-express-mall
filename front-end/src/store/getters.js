const getters = {
  loginStatus: state => state.user.loginStatus,
  username: state => state.user.userInfo.username,
  cartList: state => state.shoppingCart.cartList,
  cartListCount: state => state.shoppingCart.cartList.length
}

export default getters
