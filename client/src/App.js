import { Container, AppBar, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Filter from './containers/components/Filter/Filter'
import useStyles from './styles'
import { getJobs } from './redux/actions/jobsActions'

import JobsList from './containers/components/Jobs/JobsList'
import JobsDescription from './containers/components/Jobs/JobsDescription'
import Navbar from './containers/components/Navbar/Navbar'

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  useEffect(() => {
    dispatch(getJobs)
  }, [currentId, dispatch])

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <JobsList />
            </Grid>
            <Grid item xs={12} sm={6}>
              <JobsDescription />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Filter />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default App
