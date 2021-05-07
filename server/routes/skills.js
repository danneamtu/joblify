import express from 'express'
import { getSkills, addSkills } from '../controllers/skills.js'
const router = express.Router()

router.get('/', getSkills)
router.post('/', addSkills)

export default router
