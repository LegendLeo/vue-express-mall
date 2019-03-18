const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: { type: String, required: true, max: 50 },
    password: { type: String, required: true, max: 50 },
    role: {
      type: String,
      default: 'user'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', UserSchema)
