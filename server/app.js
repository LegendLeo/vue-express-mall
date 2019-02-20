const express = require('express')
const app = express()
const goodsList = require('./mock/goodsList.json')

app.get('/goods', function (req, res) {
  res.json(goodsList)
})

app.listen(3000, function () {
  console.log('服务已启动')
})