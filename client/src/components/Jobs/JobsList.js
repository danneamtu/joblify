import Job from './Job/Job'
import JobsFooter from './JobsFooter'
import TotalResults from './Total/TotalResults'
import useStyles from './style'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

const JobsList = (props) => {
  console.log('job lsit props +++++++++++++++++++++', props)
  const { currentId, setCurrentId } = props
  // const jobs = useSelector((state) => state.jobs)
  const jobs = [
    { _id: 3, title: 'front end developer', location: 'belgium' },
    { _id: 4, title: 'senior front end developer', location: 'netherlands' },
    { _id: 5, title: 'junior front end developer', location: 'sweden' },
    { _id: 6, title: 'front end developer', location: 'belgium' },
    { _id: 7, title: 'medior front end developer', location: 'amsterdam' },
    { _id: 8, title: 'intern front end developer', location: 'sweden' },
  ]
  return (
    <>
      {!jobs.length ? (
        <CircularProgress />
      ) : (
        <Grid>
          <TotalResults />

          {jobs.map((job) => (
            <Grid item key={job._id}>
              <Job id={job._id} />
            </Grid>
          ))}
          <JobsFooter />
        </Grid>
      )}
    </>
  )
}

export default JobsList
