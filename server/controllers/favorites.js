import Favorites from '../models/favorites.js'
import Visitors from '../models/visitors.js'

export const insertFavorite = async (req, res) => {
  const { id: jobId, vid: visitorId } = req.query
  try {
    const result = await Visitors.updateOne({ _id: visitorId }, { $addToSet: { favorites: jobId } })
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'favorite cannot be inserted' })
  }
}

export const removeFavorite = async (req, res) => {
  const { id: jobId, vid: visitorId } = req.query
  try {
    const result = await Visitors.updateOne({ _id: visitorId }, { $pull: { favorites: jobId } })
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Favorite cannot be removed' })
  }
}
