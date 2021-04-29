import express from 'express'
import { getJob, getJobs, createJob, patchJob, deleteJob } from '../controllers/jobs.js'

const router = express.Router()

router.get('/', getJobs)
router.get('/:id', getJob)

router.post('/', createJob)
router.patch('/:id', patchJob)
router.delete('/:id', deleteJob)

export default router
