const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema =  new Schema({
  username: { type: String, required: true, max: 50 },
  password: { type: String, required: true, max: 50 },
  role: {
    type: String,
    default: 'user'
  },
  meta: {
    createTime: {
      type: Date,
      default: Date.now()
    },
    updateTime: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createTime = this.meta.updateTime = Date.now()
  } else {
    this.meta.updateTime = Date.now()
  }
  next()
})

module.exports = mongoose.model('User', UserSchema)
