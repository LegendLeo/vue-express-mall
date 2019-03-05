const express = require('express')
const router = express.Router()

/* 获取用户列表 */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource')
});

module.exports = router
