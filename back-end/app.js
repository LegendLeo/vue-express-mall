const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoDB = require('mongoose')
const config = require('./config.js')
const routes = require('./routes')
const app = express()

// 连接MongoDB
mongoDB.connect(config.dbLink, {
  useNewUrlParser: true,
  useFindAndModify: false
})
const db = mongoDB.connection
db.on('error', err => {
  console.error('MongoDB连接错误：')
  console.error(err)
})
db.on('open', () => {
  console.log('MongoDB已连接')
})

// 视图引擎设置
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// 请求处理设置
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'upload')))

// 引入所有的路由
Object.values(routes).forEach(route => {
  app.use('/api', route)
})

// 捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404))
})

// 错误处理
app.use(function(err, req, res, next) {
  // 设置局部变量，仅在开发中提供报错信息
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // 渲染出错页面
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
