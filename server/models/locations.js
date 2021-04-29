import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  country: String,
  total: String,
  city: {
    type: String,
    required: false,
  },
})

const Location = mongoose.model('locations', schema)
export default Location
