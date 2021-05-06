import Visitors from '../models/visitors.js'

export const createVisitor = async (req, res) => {
  try {
    const result = await Visitors.create({})
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Visitor cannot be created' })
  }
}
