import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getJobs } from '../../redux/actions/jobsActions'
import Job from './Job/Job'
import Pagination from './Pagination/Pagination'
import TotalResults from '../Jobs/Total/TotalResults'
import Footer from './Footer/Footer'

const JobsList = ({ url }) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()

  const { jobs } = useParams()
  const filterPageStart = query.get('start')
  const filterLocation = query.get('location')
  const filterSkills = query.get('skills')
  const filterFavorites = query.get('favorites')

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
  const [state, setState] = useState(location)

  useEffect(() => {
    dispatch(getJobs(filters, favorites))
  }, [dispatch, location])

  return (
    <>
      <TotalResults location={filterLocation} total={totalJobs} />
      {allJobs ? allJobs.map((job, index) => <Job index={index} jobData={job} key={job._id} />) : '...loading jobs'}
      {allJobs ? <Pagination href={href} pageCurrent={filters.pageStart} totalResults={totalJobs} pagePer={10} /> : '...loading'}
      <Footer />
    </>
  )
}

export default JobsList
