import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  givenName: {
    type: String,
    required: true,
  },
  imageUrl: String,
  timestamp: {
    type: Date,
    default: new Date(),
  },
  token: String,
  password: String,
})

export default mongoose.model('Users', schema)
