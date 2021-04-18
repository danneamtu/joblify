import express from 'express'
import { getJobs, createJob } from '../controllers/jobs.js'

const router = express.Router()
router.get('/', getJobs)
router.get('/:id', getJobs)

router.post('/', createJob)
export default router
