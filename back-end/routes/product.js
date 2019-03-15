const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const { response, authToken } = require('../utils')

router.get('/product', function(req, res) {
  const { type } = req.query
  let param = {}
  if (type) {
    param.type = type
  }
  Product.find(param)
    .then(data => {
      console.log(data)
      if (data.length > 0) {
        res.send(response.success('获取成功', data))
      } else {
        res.send(response.success('没有数据'))
      }
    })
    .catch(err => {
      res.status(500).send(response.error('查询失败'))
      console.log(err)
    })
})

router.post('/product/add', authToken, function(req, res) {
  const { product } = req.body
  const { role } = req.decoded
  if (role !== 'admin') {
    res.status(401).send(response.error('您没有操作权限！'))
  } else {
    Product.findOne({ name: product.name })
      .then(data => {
        return new Promise((resolve, reject) => {
          if (data) {
            res.send(response.success('已经有同名商品，请重新输入！'))
            reject()
          } else {
            resolve()
            return new Product(product).save()
          }
        })
          .then(data => {
            if (data) {
              res.send(response.success('添加成功'))
            } else {
              res.status(500).send(response.error('添加失败'))
            }
          })
          .catch(err => {
            if (err) {
              console.log(err)
            }
          })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(response.error('添加失败'))
      })
  }
})

module.exports = router