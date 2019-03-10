const md5 = require('md5')
const jwt = require('jsonwebtoken')
const config = require('../config')

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

module.exports = {
  md5: getMd5,
  signToken,
  verifyToken
}
