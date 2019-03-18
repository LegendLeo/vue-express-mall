const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, max: 120 },
    description: { type: String, max: 500 },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    poster: { type: String, required: true },
    type: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Product', ProductSchema)
