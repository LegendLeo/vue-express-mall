const userLogin = params => {
  return window.axios.post('/user/login', params)
}

const userRegister = params => {
  return window.axios.post('/user/register', params)
}

const getCartList = () => {
  return window.axios.get('/user/cart')
}

const addCartItem = product => {
  return window.axios.post('/user/cart/add', product)
}

const updateCartItem = product => {
  return window.axios.put('/user/cart/update', product)
}

const deleteCartItem = id => {
  return window.axios.delete('/user/cart/delete', { data: { id } })
}

export {
  userLogin,
  userRegister,
  getCartList,
  addCartItem,
  updateCartItem,
  deleteCartItem
}
