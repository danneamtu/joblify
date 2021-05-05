import Users from '../models/users.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const getUser = async (req, res) => {
  console.log('get this user')
}

export const signup = async (req, res) => {
  const { email, password, familyName, givenName } = req.body
  console.log('in signuo')
  try {
    console.log('in try')
    const existingUser = await Users.findOne({ email })
    if (existingUser) return res.status(400).json({ message: 'User already exists' })
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = { email, familyName, givenName, imageUrl: '', password: hashedPassword }
    console.log('new user', newUser)
    const result = await Users.create(newUser)
    const token = jwt.sign({ email: result.email, id: result._id }, process.env.USER_SECRET, { expiresIn: '4h' })
    res.status(200).send({ result, token })
  } catch (err) {
    res.status(400).send({ message: err.message || 'User cannot be created' })
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body
  console.log('in signin')
  try {
    console.log('in tryin', email, password)
    const existingUser = await Users.findOne({ email })
    console.log('inuserdetails', existingUser)
    if (!existingUser) {
      console.log('not user existing', existingUser)
      return res.status(400).json({ message: 'No user in database with this email' })
    }
    console.log('in tryin2')
    const passwordVerify = await bcrypt.compare(password, existingUser.password)
    console.log('passwordVerify', passwordVerify)

    if (!passwordVerify) {
      return res.status(400).json({ message: 'Password not match' })
    }
    console.log('in tryin3')
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.USER_SECRET, { expiresIn: '4h' })
    console.log('token', token)
    res.status(200).send({ result: existingUser, token })
  } catch (err) {
    res.status(400).send({ message: err.message || 'User cannot be authenticated' })
  }
}
