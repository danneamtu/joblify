import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'

import { getJobs } from '../../../actions/jobs'
import useStyles from './style'
const Job = ({ job, setCurrentId, currentId }) => {
  const { _id, title, description, location } = job.data
  const classes = useStyles()
  console.log('job job with id', job, _id)
  return (
    <>
      <Typography variant="h1">
        {title}, currentid = {currentId}
      </Typography>
      <Typography variant="h3">{description}</Typography>
      <Typography variant="h5">{location}</Typography>
      <button onClick={() => setCurrentId(_id)} variant="h5">
        Edit
      </button>
    </>
  )
}

export default Job
