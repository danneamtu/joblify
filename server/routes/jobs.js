import express from 'express'
import { getJob, getJobs, createJob, patchJob, deleteJob } from '../controllers/jobs.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', getJobs)
router.get('/:id', getJob)

router.post('/', auth, createJob)
router.patch('/:id', auth, patchJob)
router.delete('/:id', auth, deleteJob)

// router.patch('/:id/favorite', auth, favoriteJob)

export default router
