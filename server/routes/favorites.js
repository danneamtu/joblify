import express from 'express'
import { insertFavorite } from '../controllers/favorites.js'

const router = express.Router()
router.post('/', insertFavorite)

export default router
