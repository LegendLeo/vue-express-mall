const getGoodsList = params => {
  return window.axios.get('/goods', { params })
}

export { getGoodsList }
