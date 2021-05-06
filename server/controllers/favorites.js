import Favorites from '../models/favorites.js'
import mongoose from 'mongoose'

export const getFavorites = async (req, res) => {
  req.headers.authorization = 'some'
  console.log(req.headers)
  try {
    let favorites = await Favorites.find()
    res.status(200).json(favorites)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Jobs not found' })
  }
}

export const patchFavorites = async (req, res) => {
  try {
    console.log(req)
    res.status(200).json({ message: req })
  } catch (error) {
    console.log(req)
    res.status(200).json({ message: req })
  }
}
