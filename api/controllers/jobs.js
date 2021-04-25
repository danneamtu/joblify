import mongoose from 'mongoose'
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
  const { title, description, location } = req.body
  const newJob = new Jobs({ title, description, location })
  console.log('new job', newJob)
  console.log('from server controler', newJob)
  try {
    await newJob.save()
    res.status(201).send(newJob)
  } catch (err) {
    res.status(400).send({ message: err.message || 'Job cannot be created' })
  }
}

export const patchJob = async (req, res) => {
  const { id } = req.params
  const { title, description, location } = req.body
  console.log('inside controllers', title, description, location)
  const updatedJob = { title, description, location, _id: id }
  await Jobs.findByIdAndUpdate(id, updatedJob, { new: true })
  res.status(200).send(updatedJob)
}

export const deleteJob = async (req, res) => {
  const { id } = req.params
  try {
    Jobs.findByIdAndDelete(id)
    // Jobs.deleteOne({ _id: ObjectId(id) })
    res.status(200).send(`Job with id ${id} deleted succesfuly`)
  } catch (err) {
    res.status(400).send(err)
  }
}
