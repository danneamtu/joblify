import express from 'express'
import { getVisitor, postVisitor, patchVisitor } from '../controllers/visitors.js'
const router = express.Router()

router.get('/', getVisitor)
router.post('/', postVisitor)
router.patch('/', patchVisitor)

export default router
