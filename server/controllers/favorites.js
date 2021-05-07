import Favorites from '../models/favorites.js'

export const createFavorite = async (req, res) => {
  try {
    let favorites = await Favorites.find()
    res.status(200).json(favorites)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Jobs not found' })
  }
}