const express = require('express')
const app = express()
const goodsList = require('./mock/goodsList.json')

app.get('/goods', function (req, res) {
  const { type } = req.query
  const data = Object.assign({}, goodsList)
  data.data = data.data.filter(item => item.type === type)
  if (data.data.length === 0) {
    res.json(goodsList)
  } else {
    res.end(JSON.stringify(data))
  }
})

app.listen(3000, function () {
  console.log('服务已启动')
})
