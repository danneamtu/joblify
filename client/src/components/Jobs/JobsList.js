import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../redux/actions/jobsActions'
import Job from './Job/Job'

const JobsList = (props) => {
  const dispatch = useDispatch()
  const {
    data: { data: allJobs },
  } = useSelector((state) => state.jobs)

  useEffect(() => {
    dispatch(getJobs(2))
  }, [])

  return <>{allJobs && allJobs.map((job) => <Job id={job._id} key={job._id} />)}</>
}

export default JobsList
