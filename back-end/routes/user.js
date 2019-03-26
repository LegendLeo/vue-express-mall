const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { response, md5, signToken, authToken } = require('../utils')

// 登录
router.post('/user/login', function(req, res) {
  let username = req.body.username
  let password = req.body.password
  if (
    username == null ||
    username.trim() == '' ||
    password == null ||
    password.trim() == ''
  ) {
    res.status(400).send(response.error('用户名或密码不能为空'))
  } else {
    User.findOne({ username, password: md5(password) })
      .then(data => {
        if (data) {
          let token = signToken(JSON.stringify(data))
          let message = {
            username,
            token,
            cartList: data.cartList,
            isAdmin: data.role === 'admin'
          }
          res.send(response.success('登录成功', message))
        } else {
          res.status(400).send(response.error('用户名或密码错误'))
        }
      })
      .catch(err => {
        res.status(500).send(response.error('登录失败'))
        console.log(err)
      })
  }
})

// 注册
router.post('/user/register', function(req, res) {
  let username = req.body.username
  let password = req.body.password
  if (
    username == null ||
    username.trim() == '' ||
    password == null ||
    password.trim() == ''
  ) {
    res.send(response.error('用户名或密码不能为空'))
  } else {
    User.findOne({ username })
      .then(data => {
        return new Promise((resolve, reject) => {
          if (data) {
            res.status(400).send(response.error('该用户名已经被使用，请重新输入'))
            reject()
          } else {
            resolve(
              new User({
                username,
                password: md5(password)
              }).save()
            )
          }
        })
          .then(() => {
            res.send(response.success('注册成功'))
          })
          .catch(err => {
            if (err) {
              console.error(err)
            }
          })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(response.error('注册失败'))
      })
  }
})

// 获取购物车列表
router.get('/user/cart', authToken, function(req, res) {
  const { _id } = req.decoded
  User.findById(_id).then(data => {
    res.send(response.success('获取成功', data.cartList))
  })
})

// 增加商品
router.post('/user/cart/add', authToken, function(req, res) {
  const userId = req.decoded._id
  const product = req.body
  User.findByIdAndUpdate(userId, {
    $push: {
      cartList: product
    }
  }).then(() => {
    res.send(response.success('添加成功！'))
  }).catch(err => {
    console.log(err)
    res.send(response.error())
  })
})

// 删除商品
router.delete('/user/cart/delete', authToken, function(req, res) {
  const userId = req.decoded._id
  const productId = req.body.id
  User.findByIdAndUpdate(userId, {
    $pull: {
      cartList: { _id: productId }
    }
  }).then(() => {
    res.send(response.success('删除成功！'))
  }).catch(err => {
    console.log(err)
    res.send(response.error())
  })
})

// 更改商品数量
router.put('/user/cart/update', authToken, function(req, res) {
  const userId = req.decoded._id
  const { count, _id } = req.body.product
  User.findOneAndUpdate({ _id: userId, 'cartList._id': _id }, {
    $set: {
      'cartList.$.count': count
    }
  }).then(() => {
    res.send(response.success('更改成功！'))
  }).catch(err => {
    console.log(err)
    res.send(response.error())
  })
})

module.exports = router
