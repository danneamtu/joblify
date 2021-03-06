import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGO_URI) {
  throw new Error('Connection to database failed')
}

let cachedPromise = null
const connectDB = async () => {
  try {
    if (!cachedPromise) {
      cachedPromise = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    }
    const client = await cachedPromise
    return client
  } catch (err) {
    throw new Error('Cannot connect to database')
  }
}
export default connectDB
