import express from 'express'
import { getFavorites, patchFavorites } from '../controllers/favorites.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getFavorites)
router.patch('/:id', patchFavorites)

export default router
