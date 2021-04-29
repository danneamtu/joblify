import express from 'express'
import { getLocations } from '../controllers/locations.js'

const router = express.Router()

router.get('/', getLocations)
export default router
