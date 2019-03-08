const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoodsSchema = new Schema({
  name: { type: String, required: true, max: 120 },
})