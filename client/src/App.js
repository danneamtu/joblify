import { Container, AppBar, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import useStyles from './styles'
import Filter from './components/Filter/Filter'
import Jobs from './components/Jobs/Jobs'
import Form from './components/Form/Form'
import { getJobs } from './actions/jobs'
function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs)
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}>Joblify</AppBar>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Filter />
            <Form />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Jobs />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default App
