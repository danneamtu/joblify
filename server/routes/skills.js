import express from 'express'
import { getSkills, addSkills, insertSkill, getAllSkills } from '../controllers/skills.js'
const router = express.Router()

router.get('/', getSkills)
router.post('/', addSkills)
router.post('/insert', insertSkill)
router.get('/all', getAllSkills)
export default router
