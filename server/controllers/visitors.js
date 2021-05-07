import Visitors from '../models/visitors.js'

export const getVisitor = async (req, res) => {
  try {
    const visitorId = req.params.id
    console.log('visitor id from action', visitorId)
    const result = await Visitors.findOne({ _id: visitorId })
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Visitor cannot be found' })
  }
}

export const createVisitor = async (req, res) => {
  try {
    const result = await Visitors.create({})
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Visitor cannot be created' })
  }
}
