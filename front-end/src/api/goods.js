const getGoodsList = function (params) {
  return window.axios.get('/goods', { params })
}

export { getGoodsList }
