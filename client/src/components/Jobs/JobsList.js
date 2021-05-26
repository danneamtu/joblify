import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getJobs } from '../../redux/actions/jobsActions'

import TotalResults from '../Jobs/Total/TotalResults'
import Pagination from './Pagination/Pagination'
import Footer from './Footer/Footer'
import Job from './Job/Job'

const JobsList = () => {
  const { jobs } = useParams()

  const query = new URLSearchParams(useLocation().search)
  const filterPageStart = query.get('start')
  const filterLocation = query.get('location')
  const filterSkills = query.get('skills')
  const filterFavorites = query.get('favorites')

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
    favorites: filterFavorites,
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
    if (!filterFavorites) {
      href = `${addParam}search?`
    } else {
      href = `${addParam}search?favorites=show&`
    }
  }

  const { favorites } = useSelector((state) => state.visitor)
  const location = useLocation()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getJobs(filters, favorites))
  }, [location])

  return (
    <>
      <TotalResults />
      {allJobs ? allJobs.map((job, index) => <Job index={index} jobData={job} key={job._id} />) : '...loading jobs'}
      {allJobs ? <Pagination href={href} pageCurrent={filters.pageStart} totalResults={totalJobs} pagePer={10} /> : '...loading pagination'}
      <Footer />
    </>
  )
}

export default JobsList
