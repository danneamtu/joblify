import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  userId: String,
  visitorId: String,
  favorites: Array,
  skills: Array,
})

const Favorites = mongoose.model('Favorites', schema)
export default Favorites
