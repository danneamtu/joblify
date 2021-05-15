import Jobs from '../models/jobs.js'
import mongoose from 'mongoose'

export const generatePaginationQuery = (query, sort, nextKey) => {
  const sortField = sort == null ? null : sort[0]

  function nextKeyFn(items) {
    if (items.length === 0) {
      return null
    }

    const item = items[items.length - 1]

    if (sortField == null) {
      return { _id: item._id }
    }

    return { _id: item._id, [sortField]: item[sortField] }
  }

  let paginatedQuery = query

  if (nextKey == null) {
    return { paginatedQuery, nextKeyFn }
  }

  console.log('1 pag query', paginatedQuery)

  if (sort == null) {
    paginatedQuery._id = { $gt: nextKey._id }
    return { paginatedQuery, nextKey }
  }

  // if not sort then sort by id greater than
  console.log('2 pag query', paginatedQuery)
  const sortOperator = sort[1] === 1 ? '$gt' : '$lt'

  const paginationQuery = [
    { [sortField]: { [sortOperator]: nextKey[sortField] } },
    {
      $and: [{ [sortField]: nextKey[sortField] }, { _id: { [sortOperator]: nextKey._id } }],
    },
  ]
  console.log('3 pag query', paginatedQuery)

  if (paginatedQuery.$or == null) {
    paginatedQuery.$or = paginationQuery
  } else {
    paginatedQuery = { $and: [query, { $or: paginationQuery }] }
  }

  return { paginatedQuery, nextKeyFn }
}

const query = { city: 'antwerp' }
const sort = ['title', -1]

generatePaginationQuery(query, sort)

const { paginatedQuery, nextKeyFn } = generatePaginationQuery(query, sort)

console.log('pag query', paginatedQuery)
console.log('pag query nextKeyFn', nextKeyFn)

const jobs = await Jobs.find({}).limit(3)
nextKey = nextKeyFn(jobs)