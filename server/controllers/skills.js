import Visitors from '../models/visitors.js'

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createSkills = async (req, res) => {
  const visitorId = '609452e50a797de55471ea31'
  try {
    const result = await Visitors.updateOne({ _id: visitorId }, { $addToSet: { skills: 'php' } })
    res.status(200).send(result.nModified)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Skill cannot be added' })
  }
}

export const getSkills = async (req, res) => {
  const visitorId = '609452e50a797de55471ea31'
  try {
    const { skills } = await Visitors.findOne({ _id: visitorId })
    res.status(200).send(skills)
  } catch (err) {
    res.status(400).send({ message: err.message || 'User cannot be authenticated' })
  }
}
