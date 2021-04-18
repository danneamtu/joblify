import Jobs from '../models/jobs.js'

export const getJob = async (req, res) => {
  try {
    const jobs = await Jobs.findById(id)
    res.status(200).json(jobs)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: err.message || 'Job not found' })
  }
}

export const getJobs = async (req, res) => {
  const id = req.query.id
  let jobs
  try {
    if (id) {
      jobs = await Jobs.findById(id)
    } else {
      jobs = await Jobs.find().limit(3)
    }
    res.status(200).json(jobs)
  } catch (err) {
    console.log(err)
    res.status(409).json({ message: err.message || 'Jobs not found' })
  }
}

export const createJob = async (req, res) => {
  const newJob = new Jobs(req.body)
  try {
    await newJob.save()
    res.status(201).json(req.body)
  } catch (err) {
    res.status(404).json({ message: err.message || 'Job cannot be created' })
  }
} 
