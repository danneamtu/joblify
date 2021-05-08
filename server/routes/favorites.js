import express from 'express'
import { insertFavorite, removeFavorite } from '../controllers/favorites.js'

const router = express.Router()
router.post('/', insertFavorite)
router.delete('/', removeFavorite)
export default router
