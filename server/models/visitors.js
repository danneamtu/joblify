import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  visitorId: {
    type: String,
    required: true,
  },
  firstVisit: {
    type: Date,
    default: new Date(),
  },
  lastVisit: {
    type: Date,
    default: new Date(),
  },
  pagesVisit: Array,
})

const Visitors = mongoose.model('visitors', schema)
export default Visitors
