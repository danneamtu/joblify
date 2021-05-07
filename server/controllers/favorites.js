import Favorites from '../models/favorites.js'
import Visitors from '../models/visitors.js'

export const insertFavorite = async (req, res) => {
  const idJob = req.query.idJob
  const idVisitor = req.query.idVisitor
  try {
    if (skill) {
      const result = await Visitors.updateOne({ _id: idVisitor }, { $push: { favorites: idJob } })
      res.status(200).send(result)
    } else {
      res.status(200).send('add a favorite')
    }
  } catch (err) {
    res.status(400).send({ message: err.message || 'favorite cannot be inserted' })
  }
}
