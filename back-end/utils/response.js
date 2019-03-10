module.exports = {
  success: function (msg = '', data = {}) {
    return {
      statusCode: 0,
      data: data,
      msg: msg
    }
  },
  error: function (msg = '请求参数有错') {
    return {
      statusCode: 110,
      msg
    }
  },
  expire: function (msg = '身份过期，请重新登录') {
    return {
      statusCode: 120,
      msg
    }
  }
}
