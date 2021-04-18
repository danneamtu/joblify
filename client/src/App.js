import React from 'react'
import { Container, AppBar, Grid } from '@material-ui/core'
import useStyles from './styles'
import Filter from './components/Filter/Filter'
import Jobs from './components/Jobs/Jobs'
function App() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}>Joblify</AppBar>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Filter />
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
