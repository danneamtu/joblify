import Location from '../models/locations.js'
import mongoose from 'mongoose'

export const getLocations = async (req, res) => {
  console.log(req.body)
  try {
    let tlocation = await Location.find()
    res.status(200).json(tlocation)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Location not found' })
  }
}

export const getCountry = async (req, res) => {
  try {
    const { country } = req.params
    const theCountry = await Location.find({ country })
    res.status(200).json(theCountry)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: err.message || 'Job not found' })
  }
}

export const getCity = async (req, res) => {
  try {
    const { city } = req.params
    const theCity = await Location.find({ 'city.name': 'city' })
    res.status(200).json(theCity)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: err.message || 'Job not found' })
  }
}

export const createLocation = async (req, res) => {
  const { country, total, city } = req.body
  const newLocation = new Location({ country, total, city })
  try {
    await newLocation.save()
    res.status(201).send(newLocation)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Location cannot be created' })
  }
}
