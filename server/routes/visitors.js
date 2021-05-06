import express from 'express'
import { createVisitor } from '../controllers/visitors.js'
const router = express.Router()

router.post('/', createVisitor)

export default router
