import express from 'express'
import { getSkills, addVisitorSkill, removeVisitorSkill, insertSkill, getAllSkills } from '../controllers/skills.js'
const router = express.Router()

router.get('/', getSkills)
router.post('/', addVisitorSkill)
router.post('/remove', removeVisitorSkill)

router.post('/insert/:skill', insertSkill)
router.get('/all', getAllSkills)
export default router
