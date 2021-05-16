import { Container, AppBar, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Trends from '../components/Trends/Trends'
import JobsList from '../components/Jobs/JobsList'
import Details from '../components/User/Details/Details'

function HomePage(props) {
  console.log('get here all the jobs')

  return (
    <Container maxWidth="xl">
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <JobsList />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Details />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Trends />
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default HomePage
