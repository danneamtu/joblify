import express from 'express'
import { getFavorites, postFavorites } from '../controllers/favorites.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getFavorites)
router.patch('', postFavorites)

export default router
