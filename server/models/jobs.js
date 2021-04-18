import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: String,
  timestamp: {
    type: Date,
    default: new Date(),
  },
})

const Jobs = mongoose.model('jobs', schema)
export default Jobs
