import { Container, AppBar, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import useStyles from './styles'
import { getJobs } from './redux/actions/jobsActions'

import JobsList from './containers/components/Jobs/JobsList'
import JobsDescription from './containers/components/Jobs/JobsDescription'

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  useEffect(() => {
    dispatch(getJobs)
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      {/* <AppBar className={classes.appBar}>Joblify</AppBar> */}
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.jobsList} sm={4}>
            <JobsList />
          </Grid>
          <Grid item xs={12} sm={8}>
            <JobsDescription />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default App
