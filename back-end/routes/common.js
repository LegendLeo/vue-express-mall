const express = require('express')
const router = express.Router()
const fse = require('fs-extra')
const multer = require('multer')
const uploader = multer({ dest: './back-end/upload/temp/' })
const { response, authToken, formatTime } = require('../utils')

// 上传文件
router.post('/upload', authToken, uploader.any(), function(req, res) {
  const file = req.files[0]
  // 处理文件名
  const now = new Date()
  const filename = formatTime(now, 'yyyyMMdd') + '-' + file.originalname
  const fileType = file.mimetype.split('/')[0]
  const fileDes = `./back-end/upload/${fileType}/${filename}`
  fse.readFile(file.path).then(data => {
    fse
      .outputFile(fileDes, data)
      .then(() => {
        res.send(
          response.success('上传成功！', {
            filename,
            url: `/${fileType}/${filename}`
          })
        )
      })
      .catch(err => {
        console.log(err)
      })
  })
})

module.exports = router
