import { Container, AppBar, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Filter from '../components/Filter/Filter'
import JobsList from '../components/Jobs/JobsList'
import JobsDescription from '../components/Jobs/JobsDescription'

function HomePage(props) {
  return (
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
  )
}

export default HomePage
