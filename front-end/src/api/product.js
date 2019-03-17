const getProductList = params => {
  return window.axios.get('/product', { params })
}

const getProductDetail = id => {
  return window.axios.get('/product/' + id)
}

const addProduct = product => {
  return window.axios.post('/product/add', { product })
}

const putProduct = product => {
  return window.axios.put('/product/update', { product })
}

export { getProductList, getProductDetail, addProduct, putProduct }
