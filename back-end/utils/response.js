module.exports.response = {
  success: function (msg = '操作成功', data = []) {
    return {
      errCode: 0,
      data: data,
      msg: msg
    }
  },
  error: function (msg = '操作失败！') {
    return {
      errCode: 110,
      msg
    }
  },
  expire: function (msg = '身份过期，请重新登录!') {
    return {
      errCode: 120,
      msg
    }
  }
}
