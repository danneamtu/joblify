import Location from '../models/locations.js'
import mongoose from 'mongoose'

export const getLocations = async (req, res) => {
  console.log(req.body)
  try {
    let locations = await Location.find()
    res.status(200).send(locations)
    console.log(locations)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Location not found' })
  }
}
