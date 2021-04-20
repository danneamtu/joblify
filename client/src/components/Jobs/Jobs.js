import Job from './Job/Job'
import useStyles from './style'
import { useSelector } from 'react-redux'

const Jobs = () => {
  const classes = useStyles()
  const jobs = useSelector((state) => state.jobs)
  console.log(jobs)
  return (
    <>
      <h1>Jobs</h1>
      <Job />
      <Job />
    </>
  )
}

export default Jobs
