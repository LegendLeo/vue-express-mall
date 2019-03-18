const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const { response, authToken } = require('../utils')

router.get('/product', function(req, res) {
  const { type } = req.query
  let param = {}
  if (type && type !== 'all') {
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

router.get('/product/:id', function(req, res) {
  const id = req.params.id
  Product.findById(id)
    .then(data => {
      console.log(data)
      res.send(response.success('获取成功', data))
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(response.error())
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
            res.status(409).send(response.error('已经有同名商品，请重新输入！'))
            reject()
          } else {
            resolve(new Product(product).save())
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
              res.status(400).send(response.error())
            }
          })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(response.error('添加失败'))
      })
  }
})

router.put('/product/update', authToken, function(req, res) {
  const { product } = req.body
  const _id = product._id
  Product.findByIdAndUpdate(_id, { $set: product })
    .then(data => {
      if (data) {
        res.send(response.success())
      } else {
        res.status(500).send(response.error())
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(response.error())
    })
})

router.delete('/product/delete', function(req, res) {
  const { id } = req.body
  Product.findByIdAndDelete(id)
    .then(() => {
      res.send(response.success('删除成功！'))
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(response.error())
    })
})

module.exports = router
