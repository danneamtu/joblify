import express from 'express'
import { getUser, signin, signup } from '../controllers/users.js'

const router = express.Router()

router.get('/:id', getUser)

router.post('/signin', signin)
router.post('/signup', signup)

export default router
