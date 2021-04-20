import Job from './Job/Job'
import useStyles from './style'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

const Jobs = ({ currentId, setCurrentId }) => {
  const jobs = useSelector((state) => state.jobs)
  const classes = useStyles()

  console.log('the jobs you search', jobs)
  return (
    <>
      {!jobs.length ? (
        <CircularProgress />
      ) : (
        <Grid>
          {jobs.map((job) => (
            <Grid item key={job._title}>
              <h1>JOb {job._title}</h1>
              <Job currentId={currentId} setCurrentId={setCurrentId} job={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Jobs
