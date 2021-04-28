import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { getJobs } from '../../redux/actions/jobsActions'
import Job from './Job/Job'
import Pagination from '../Pagination/Pagination'

const JobsList = (props) => {
  const dispatch = useDispatch()
  const {
    data: { data: allJobs },
    count,
  } = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(getJobs(2))
  }, [dispatch])

  const href = 'http://localhost:3000/jobs/search?location=Amsterdam'

  return (
    <>
      {allJobs && allJobs.map((job) => <Job jobId={job._id} key={job._id} />)}

      {/* 
    create pagination
       total pages: count
    */}

      {allJobs && (
        <Pagination href={href} currentPage={8} totalResults={count} perPage={10} />
        // <ReactPaginate
        //   pageCount={Math.ceil(count / 5)}
        //   pageRangeDisplayed={2}
        //   marginPagesDisplayed={1}
        //   hrefBuilder={(data) => 'link.php?id1'}
        //   onPageChange={(data) => {
        //     dispatch(getJobs(data.selected + 1))
        //   }}
        // ></ReactPaginate>
      )}
    </>
  )
}

export default JobsList
