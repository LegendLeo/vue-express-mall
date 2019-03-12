const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, required: true, max: 120 },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  poster: { type: String, required: true },
  type: { type: String, required: true }
})

module.exports = mongoose.model('Product', ProductSchema)
