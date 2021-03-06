import Jobs from '../models/jobs.js'
import mongoose from 'mongoose'

export const getJobs = async (req, res) => {
  if (req.query) {
    let filters = req.query

    const { pageStart, location, skills, favorites, order } = JSON.parse(filters.filterData)

    const visitorFavoritesJobs = filters.favorites
    const visitorSkillsJobs = filters.visitorSkills

    const limit = 10
    const start = (pageStart - 1) * limit //0
    let setFilters
    let friendlyLocation
    if (location && skills) {
      setFilters = {
        $and: [{ city: friendlyLocation }, { tags: skills }],
      }
    }

    if (skills) {
      setFilters = {
        tags: [skills],
      }
    }

    if (location) {
      friendlyLocation = location.replace(/-/g, ' ')
      setFilters = {
        city: friendlyLocation,
      }
    }

    if (!location && !skills) {
      setFilters = {}
    }

    if (favorites) {
      let ids = visitorFavoritesJobs.map(function (el) {
        return mongoose.Types.ObjectId(el)
      })
      setFilters = {
        _id: { $in: ids },
      }
    }

    let withOrder
    let withScoreFormula

    let sortCondition
    console.log('order', order)

    if (order === 'match') {
      withOrder = {
        $addFields: {
          total_skills: { $size: '$tags' },
          skills_count: { $size: { $setIntersection: ['$tags', visitorSkillsJobs] } },
        },
      }
    } else {
      withOrder = {
        $addFields: {
          totalSkills: '0',
        },
      }
    }

    if (order === 'match') {
      withScoreFormula = {
        $addFields: {
          scoreFormulas: { $cond: [{ $eq: ['$skills_count', 0] }, 0, { $divide: ['$skills_count', '$total_skills'] }] },
        },
      }
    } else {
      withScoreFormula = {
        $addFields: {
          scoreFormulas: '0',
        },
      }
    }

    if (order === 'match') {
      sortCondition = {
        $sort: { scoreFormulas: -1 },
      }
    } else {
      sortCondition = {
        $sort: { timestamp: -1 },
      }
    }

   

    try {
      let jobs = await Jobs.aggregate([
        {
          $facet: {
            Jobs: [
              {
                $match: {
                  $or: [setFilters],
                },
              },

              withOrder,
              withScoreFormula,
              sortCondition,

              {
                $skip: start,
              },
              {
                $limit: limit + 1,
              },
            ],

            Count: [
              {
                $match: {
                  $or: [setFilters],
                },
              },
              {
                $count: 'total',
              },
            ],

            AllJobs: [
              {
                $count: 'total',
              },
            ],
          },
        },
      ])

      res.status(200).json(jobs)
    } catch (err) {
      console.log(err)
      res.status(409).json({ message: err.message || 'Jobs not found' })
    }
  } else {
    throw new Error({ message: 'Please refresh the page or try again later' })
  }
}

export const getJob = async (req, res) => {
  try {
    const id = req.params.id
    // var id = req.params.id;
    // const { id } = req.query
    // console.log('this are params', req.params.id)
    // const id = '60ac90d790eb0fd64052ec14'
    if (!mongoose.Types.ObjectId.isValid(id)) return false
    const job = await Jobs.findById(id)
    res.status(200).json(job)
  } catch (err) {
    console.log(err)
    res.status(404).json({ message: err.message || 'Job not found' })
  }
}

export const createJob = async (req, res) => {
  const { title, description, location } = req.body
  const newJob = new Jobs({ title, description, location })
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
