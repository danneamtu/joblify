import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../redux/actions/jobsActions'
import Job from './Job/Job'
import Pagination from './Pagination/Pagination'
import TotalResults from '../Jobs/Total/TotalResults'

const JobsList = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()

  const { jobs } = useParams()
  console.log('the job param', jobs)
  const filterPageStart = query.get('start')
  const filterLocation = query.get('location')
  const filterSkills = query.get('skills')

  const dispatch = useDispatch()

  const data = useSelector((state) => state.jobs)
  let allJobs = null
  let totalJobs
  if (data.data.data) {
    allJobs = data.data.data[0].Jobs
    if (data.data.data[0].Count.length > 0) {
      totalJobs = data.data.data[0].Count[0].total
    }
  }

  const filters = {
    pageStart: filterPageStart || 1,
    location: filterLocation,
    skills: filterSkills,
  }

  let href
  let addParam
  !jobs ? (addParam = 'jobs/') : (addParam = '')
  if (filterLocation && filterSkills) {
    href = `${addParam}search?location=${filterLocation}&skills=${filterSkills}&`
  } else {
    filterLocation ? (href = `${addParam}search?location=${filterLocation}&`) : (href = `${addParam}search?skills=${filterSkills}&`)
  }
  if (!filterLocation && !filterSkills) {
    href = `${addParam}search?`
  }

  useEffect(() => {
    dispatch(getJobs(filters))
  }, [dispatch, filters.filterLocation, filters.filterSkills, filters.pageStart])

  console.log('========', filters.pageStart)

  return (
    <>
      <TotalResults location={filterLocation} total={totalJobs} />
      {allJobs && allJobs.map((job, index) => index < 10 && <Job index={index} jobData={job} key={job._id} />)}
      {allJobs && <Pagination href={href} pageCurrent={filters.pageStart} totalResults={totalJobs} pagePer={10} />}
    </>
  )
}

export default JobsList
