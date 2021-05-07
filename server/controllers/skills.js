import Visitors from '../models/visitors.js'
export const addSkills = async (req, res) => {
  const { skill, visitorId } = req.body
  try {
    const { skills } = await Visitors.findOne({ _id: visitorId })
    if (skills.includes(skill)) {
      const result = await Visitors.updateOne({ _id: visitorId }, { $pull: { skills: skill } })
    } else {
      const result = await Visitors.updateOne({ _id: visitorId }, { $addToSet: { skills: skill } })
    }
    res.status(200).send('done')
  } catch (err) {
    res.status(400).send({ message: err.message || 'Skill cannot be added' })
  }
}

export const getSkills = async (req, res) => {
  const { visitorId } = req.body
  try {
    const { skills } = await Visitors.findOne({ _id: visitorId })
    res.status(200).send(skills)
  } catch (err) {
    res.status(400).send({ message: err.message || 'User cannot be authenticated' })
  }
}
