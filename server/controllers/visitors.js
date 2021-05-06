import Visitors from '../models/visitors.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import e from 'express'
dotenv.config()

export const createVisitor = async (req, res) => {
  try {
    const newVisitor = { createdAt: new Date().getTime() }
    const result = await Visitors.create(newVisitor)
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Visitor cannot be created' })
  }
}
