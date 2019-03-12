const md5 = require('md5')
const jwt = require('jsonwebtoken')
const config = require('../config')
const { response } = require('./response')

const getMd5 = str => {
  return md5(str, config.md5Secret)
}

const signToken = obj => {
  return jwt.sign(obj, config.jwtSecret)
}

const verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, function (err, decoded) {
      if (err) {
        resolve(null)
      } else {
        resolve(decoded)
      }
    })
  })
}

const authToken = (req, res, next) => {
  let token = req.headers.authorization
  if (token) {
    verifyToken(token).then(data => {
      if (data) {
        req.decoded = data
        next()
      } else {
        res.status(401).send(response.expire())
      }
    })
  } else {
    res.status(401).send(response.error('没有token，请先登录'))
  }
}

module.exports = {
  md5: getMd5,
  signToken,
  verifyToken,
  authToken
}
