const user = {
  state: {
    username: localStorage.getItem('username'),
    isAdmin: Boolean(localStorage.getItem('isAdmin'))
  },
  mutations: {
    LOG_IN (state, info) {
      state.username = info.username
      state.isAdmin = Boolean(info.isAdmin)
      localStorage.setItem('token', info.token)
      localStorage.setItem('username', info.username)
      if (info.isAdmin) {
        state.isAdmin = true
        localStorage.setItem('isAdmin', info.isAdmin)
      }
    },
    LOG_OUT () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('isAdmin')
      location.replace('/')
    }
  }
}

export default user
