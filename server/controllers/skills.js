import Visitors from '../models/visitors.js'
import Skills from '../models/skills.js'

export const getSkills = async (req, res) => {
  try {
    const start = Number(req.query.start) || 0
    const limit = Number(req.query.limit) || 9

    let skills
    if (!start) {
      skills = await Skills.find().sort({ total: -1 }).limit(limit)
    } else {
      skills = await Skills.find().sort({ total: -1 }).limit(limit).skip(start)
    }

    res.status(200).json(skills)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Skills not found' })
  }
}

export const getSkillsWithNin = async (req, res) => {
  try {
    console.log('this is skills controllers')
    const start = Number(req.query.start) || 0
    const limit = 12
    let nin
    if (req.query.nin) {
      const ninskill = req.query.nin.split(',')
      nin = { skill: { $nin: [...ninskill] } }
    } else {
      nin = {}
    }

    console.log('nin', nin)

    let skills = await Skills.find(nin).sort({ total: -1 }).limit(limit).skip(start)
    res.status(200).json(skills)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Skills not found' })
  }
}

export const addVisitorSkill = async (req, res) => {
  const { skill, visitorId } = req.body
  try {
    const result = await Visitors.updateOne({ _id: visitorId }, { $addToSet: { skills: skill } })
    res.status(200).send('done')
  } catch (err) {
    res.status(400).send({ message: err.message || 'Skill cannot be added' })
  }
}

export const removeVisitorSkill = async (req, res) => {
  const { skill, visitorId } = req.body
  try {
    const result = await Visitors.updateOne({ _id: visitorId }, { $pull: { skills: { skill: skill.skill } } })
    console.log('result1', skill.skill)
    res.status(200).send('done')
  } catch (err) {
    res.status(400).send({ message: err.message || 'Skill cannot be added' })
  }
}

export const insertSkill = async (req, res) => {
  const skill = req.params.skill
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
