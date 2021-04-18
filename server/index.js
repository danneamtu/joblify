import express from 'express'
import cors from 'cors'
import nodemon from 'nodemon'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import connectDB from './database/connection.js'
connectDB()

const app = express()

app.use(cors())
app.use(cors({ origin: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()
const PORT = process.env.PORT || 5000

app.listen(PORT, (result, error) => {
  console.log('server is running', PORT)
})
