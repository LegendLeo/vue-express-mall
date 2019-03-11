const response = require('./response')
const { verifyToken } = require('../utils/utils')

module.exports = function (req, res, next) {
  let token = req.headers.authorization
  if (token) {
    verifyToken(token).then(data => {
      if (data) {
        req.decoded = data
        next()
      } else {
        res.send(response.expire())
      }
    })
  } else {
    res.send(response.error('没有token，请先登录'))
  }
}
