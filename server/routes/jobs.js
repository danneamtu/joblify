import express from 'express'
import { getJobs, createJob, patchJob, deleteJob } from '../controllers/jobs.js'

const router = express.Router()
// JOBS
router.get('/', getJobs) // +limit and sort
router.get('/:id', getJobs)

// JOB

router.post('/', createJob)
router.patch('/:id', patchJob)
router.delete('/:id', deleteJob)
export default router
