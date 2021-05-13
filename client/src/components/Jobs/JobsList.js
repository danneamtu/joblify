import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../redux/actions/jobsActions'
import Job from './Job/Job'
import Pagination from '../Pagination/Pagination'
import TotalResults from '../Jobs/Total/TotalResults'

const JobsList = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()

  const filterPageStart = query.get('start')
  const filterLocation = query.get('location')
  const filterSkills = query.get('skills')

  const dispatch = useDispatch()
  const {
    data: { data: allJobs },
    count,
  } = useSelector((state) => state.jobs)

  const filters = {
    pageStart: filterPageStart || 1,
    location: filterLocation,
    skills: filterSkills,
  }

  console.log('**** filters:', filters)

  useEffect(() => {
    dispatch(getJobs(filters))
  }, [dispatch, filterLocation, filterSkills])

  return (
    <>
      <TotalResults total={count} />
      {allJobs && allJobs.map((job, index) => index < 10 && <Job index={index} jobData={job} key={job._id} />)}
      {allJobs && <Pagination pageCurrent={filterPageStart} totalResults={count} pagePer={10} />}
    </>
  )
}

export default JobsList
