const getGoodsList = function () {
  return window.axios.get('/goods')
}

export { getGoodsList }
