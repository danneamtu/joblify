import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  skills: Array,
  favorites: Array,
})

const Visitors = mongoose.model('visitors', schema)
export default Visitors
