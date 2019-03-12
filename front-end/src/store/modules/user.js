import Router from 'vue-router'
const router = new Router()

const user = {
  state: {
    username: localStorage.getItem('username'),
    isAdmin: Boolean(localStorage.getItem('isAdmin'))
  },
  mutations: {
    LOG_IN (state, info) {
      state.username = info.username
      state.isAdmin = Boolean(info.isAdmin)
      window.axios.defaults.headers.Authorization = info.token
      localStorage.setItem('token', info.token)
      localStorage.setItem('username', info.username)
      if (info.isAdmin) {
        state.isAdmin = true
        localStorage.setItem('isAdmin', info.isAdmin)
      }
    },
    LOG_OUT (state) {
      state.username = ''
      state.isAdmin = false
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('isAdmin')
      delete window.axios.defaults.headers.Authorization
      router.replace('/')
    }
  }
}

export default user
