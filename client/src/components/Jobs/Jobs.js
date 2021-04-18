import Job from './Job/Job'
import useStyles from './style'

const Jobs = () => {
  const classes = useStyles()
  return (
    <>
      <h1>Jobs</h1>
      <Job />
      <Job />
    </>
  )
}

export default Jobs
