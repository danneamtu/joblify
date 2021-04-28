import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { getJobs } from '../../redux/actions/jobsActions'
import Job from './Job/Job'
import Pagination from '../Pagination/Pagination'
const href = '/jobs/search?location=Amsterdam'

const JobsList = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  let query = useQuery()

  const pageStart = query.get('start')

  const dispatch = useDispatch()
  const {
    data: { data: allJobs },
    count,
  } = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(getJobs(pageStart))
  }, [dispatch, pageStart])

  console.log('this is page start', pageStart)
  return (
    <>
      {allJobs && allJobs.map((job) => <Job jobData={job} key={job._id} />)}
      {allJobs && <Pagination href={href} pageCurrent={pageStart} totalResults={count} pagePer={10} />}
    </>
  )
}

export default JobsList
