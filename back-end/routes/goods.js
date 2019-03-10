const express = require('express')
const router = express.Router()
const goodsList = require('../mock/goodsList.json')

router.get('/goods', function(req, res) {
  const { type } = req.query
  const data = Object.assign({}, goodsList)
  data.data = data.data.filter(item => item.type === type)
  if (data.data.length === 0) {
    res.json(goodsList)
  } else {
    res.json(data)
  }
})

module.exports = router
