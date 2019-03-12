const getProductList = params => {
  return window.axios.get('/product', { params })
}

const addProduct = product => {
  return window.axios.post('/product/add', { product })
}

export { getProductList, addProduct }
