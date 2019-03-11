const user = {
  state: {
    loginStatus: localStorage.getItem('token'),
    userInfo: {
      username: localStorage.getItem('username')
    }
  },
  mutations: {
    TOGGLE_LOGIN_STATUS (state, token) {
      state.loginStatus = token
      localStorage.setItem('token', token)
    },
    CHANGE_USERNAME ({ userInfo }, name) {
      userInfo.username = name
      localStorage.setItem('username', name)
    }
  }
}

export default user
