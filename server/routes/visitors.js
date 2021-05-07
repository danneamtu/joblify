import express from 'express'
import { createVisitor, getVisitor } from '../controllers/visitors.js'
const router = express.Router()

router.post('/', createVisitor)
router.get('/:id', getVisitor)
export default router
