const express = require('express')
const router = express.Router()
const User = require('../models/user')
const response = require('../utils/response')
const { md5 } = require('../utils/utils')

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
    res.send(response.erro('用户名或密码不能为空'))
  } else {
    User.findOne({ username }).then(data => {
      return new Promise((resolve, reject) => {
        if (data) {
          res.send(response.error('已经注册过'))
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

module.exports = router
