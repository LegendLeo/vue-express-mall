const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 120 },
  description: { type: String, max: 500 },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  poster: { type: String, required: true },
  type: { type: String, required: true },
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

ProductSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createTime = this.meta.updateTime = Date.now()
  } else {
    this.meta.updateTime = Date.now()
  }
  next()
})

module.exports = mongoose.model('Product', ProductSchema)
