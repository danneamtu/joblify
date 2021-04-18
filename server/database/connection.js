import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    mongoose.set('useFindAndModify', false) // !warnings into the console
    console.log(`Connected to MongoDB`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export default connectDB
