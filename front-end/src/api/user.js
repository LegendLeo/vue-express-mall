const userLogin = params => {
  return window.axios.post('/user/login', params)
}

const userRegister = params => {
  return window.axios.post('/user/register', params)
}

const getCartList = () => {
  return window.axios.get('/user/cartlist')
}

export {
  userLogin,
  userRegister,
  getCartList
}
