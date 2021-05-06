import Visitors from '../models/visitors.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const getUser = async (req, res) => {
  console.log('get this user')
}

export const postVisitor = async (req, res) => {
  let lang = window.navigator.userLanguage || window.navigator.language
  !lang && (lang = 'nan')
  let newLang = lang.replace(' ', '-').toLowerCase()
  let random = Math.ceil(Math.random() * 10000)
  const visitorId = random + '_' + new Date().getTime() + '_' + newLang
}

export const patchUser = async (req, res) => {
  console.log('get this user')
}
