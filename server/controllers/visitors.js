import Visitors from '../models/visitors.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const getVisitor = async (req, res) => {
  console.log('get this user')
}

export const postVisitor = async (req, res) => {
  try {
    let random = Math.ceil(Math.random() * 10000)
    const visitorId = random + '7' + new Date().getTime()
    const newVisitor = { visitorId, firstVisit: new Date().getTime(), lastVisit: new Date().getTime(), pagesVisit: { url: 'joblify.me', time: new Date().getTime() } }
    const result = await Visitors.create(newVisitor)
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Visitor cannot be created' })
  }
}

export const patchVisitor = async (req, res) => {
  try {
    const visitorId = req.query.id
    console.log('visitor id', visitorId)
    const existingVisitor = await Visitors.findOne({ visitorId })
    console.log('the existing', existingVisitor)
    if (existingVisitor) {
      const result = await Visitors.updateOne(
        { visitorId },
        {
          $push: {
            pagesVisit: { url: 'joblify.me/2', time: new Date().getTime() },
          },
        }
      )
      console.log('the result', result)
      res.status(200).send(result)
    }
  } catch (err) {
    res.status(400).send({ message: err.message || 'Visitor cannot be updated' })
  }
}
