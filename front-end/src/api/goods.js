const $ = window.axios

const getGoodsList = params => {
  return $.get('/goods', { params })
}

export { getGoodsList }
