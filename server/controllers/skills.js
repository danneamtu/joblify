import Visitors from '../models/visitors.js'
import Skills from '../models/skills.js'

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

export const insertSkill = async (req, res) => {
  const skill = req.query.skill
  console.log('skill', skill)
  try {
    if (skill) {
      const result = await Skills.updateOne({ skill, total: 0 }, { $set: { skill } }, { upsert: true })
      res.status(200).send(result)
    } else {
      res.status(200).send('add a skill')
    }
  } catch (err) {
    res.status(400).send({ message: err.message || 'skill cannot be inserted' })
  }
}

export const getAllSkills = async (req, res) => {
  try {
    const result = await Skills.find()
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'skill cannot be inserted' })
  }
}
