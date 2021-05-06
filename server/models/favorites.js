import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  userId: String,
  jobId: Array,
})

const Favorites = mongoose.model('Favorites', schema)
export default Favorites
