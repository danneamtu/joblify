import express from 'express'
import { getJobs, createJob, patchJob } from '../controllers/jobs.js'

const router = express.Router()
router.get('/', getJobs)
router.get('/:id', getJobs)

router.post('/', createJob)
router.patch('/:id', patchJob)
export default router
