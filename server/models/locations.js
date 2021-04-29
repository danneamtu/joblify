import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  country: String,
  total: String,
  city: [
    {
      name: String,
      total: Number,
    },
  ],
})

const Location = mongoose.model('locations', schema)
export default Location
