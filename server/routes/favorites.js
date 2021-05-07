import express from 'express'
import { createFavorite } from '../controllers/favorites.js'

const router = express.Router()

router.post('/', createFavorite)

export default router
