import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getJobs } from '../../redux/actions/jobsActions'

import TotalResults from '../Jobs/Total/TotalResults'
import Pagination from './Pagination/Pagination'
import Footer from './Footer/Footer'
import Job from './Job/Job'
import { JobLoader } from '../Loaders/Loaders'

import { useFilters } from '../../useHooks/useFilters'
import { useJobs } from '../../useHooks/useJobs'

const JobsList = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { filters, href } = useFilters()
  const { allJobs, totalJobs } = useJobs()
  const { favorites } = useSelector((state) => state.visitor)

  useEffect(() => {
    dispatch(getJobs(filters, favorites))
  }, [location])

  return (
    <>
      {allJobs ? <TotalResults totalJobs={totalJobs} /> : ''}
      {allJobs ? allJobs.map((job, index) => <Job index={index} jobData={job} key={job._id} />) : <JobLoader repeat={10} />}
      {allJobs ? <Pagination href={href} pageCurrent={filters.pageStart} totalResults={totalJobs} pagePer={10} /> : '...loading pagination'}
      <Footer />
    </>
  )
}

export default JobsList
