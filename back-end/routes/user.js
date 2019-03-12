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
    User.findOne({ username, password: md5(password) }).then(data => {
      return new Promise((resolve, reject) => {
        if (data) {
          resolve(data)
        } else {
          res.status(400).send(response.error('用户名或密码错误'))
          reject()
        }
      })
    }).then((data) => {
      let token = signToken(JSON.stringify(data))
      let message = {
        username,
        token
      }
      if (data.role === 'admin') {
        message.isAdmin = true
      }
      res.send(response.success('登录成功', message))
    }).catch(err => {
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
    User.findOne({ username }).then(data => {
      return new Promise((resolve, reject) => {
        if (data) {
          res.send(response.error('该用户名已经被使用，请重新输入'))
          reject()
        } else {
          resolve()
        }
      })
        .then(() => {
          return new User({
            username,
            password: md5(password)
          }).save()
        })
        .then(data => {
          if (data) {
            res.send(response.success('注册成功'))
          } else {
            res.send(response.error('注册失败'))
          }
        })
        .catch(err => {
          if (err) {
            console.error(err)
          }
        })
    })
  }
})

router.get('/user/cartlist', authToken, function (req, res) {
  const { username } = req.decoded
  res.send(response.success('获取成功', username))
})

module.exports = router
