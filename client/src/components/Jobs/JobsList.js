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

  console.log('**** page start:', filterPageStart)
  console.log('**** filter location', filterLocation)
  console.log('****  filter Skills', filterSkills)

  const dispatch = useDispatch()
  const {
    data: { data: allJobs },
    count,
  } = useSelector((state) => state.jobs)

  console.log('the list of jobs from state redux, can you take ')

  useEffect(() => {
    dispatch(getJobs(filterPageStart))
  }, [dispatch, filterPageStart])

  let jobNextId
  allJobs && (jobNextId = allJobs[10]._id)
  const href = `/jobs/search?location=all&currentJobId=${jobNextId}`
  console.log('href', href)
  return (
    <>
      <TotalResults total={count} />
      {allJobs && allJobs.map((job, index) => index < 10 && <Job index={index} jobData={job} key={job._id} />)}
      {allJobs && <Pagination href={href} pageCurrent={filterPageStart} totalResults={count} pagePer={10} />}
    </>
  )
}

export default JobsList
