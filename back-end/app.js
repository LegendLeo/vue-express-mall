const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoDB = require('mongoose')
const config = require('./config.js')
const routes = require('./routes')
const app = express()

// conect mongodb
mongoDB.connect(config.dbLink, {
  useNewUrlParser: true
})
const db = mongoDB.connection
db.on('error', err => {
  console.error('MongoDB连接错误：')
  console.error(err)
})
db.on('open', () => {
  console.error('MongoDB已连接')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 引入所有的路由
Object.values(routes).forEach(route => {
  app.use('/api', route)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
