const $ = window.axios

const userLogin = params => {
  return $.post('/user/login', params)
}

const userRegister = params => {
  return $.post('/user/register', params)
}

export {
  userLogin,
  userRegister
}
