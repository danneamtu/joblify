import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Chip, Button, IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import useStyles from './style'

const JobDescription = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.jobUi} direction="row" spacing={3}>
        <Grid item>
          <img width="148" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />
        </Grid>
        <Grid item xs>
          <Typography variant="h4" component="h3">
            Front end developer
          </Typography>
          <Typography variant="h5" component="h3">
            Berlin, Germany
          </Typography>
          <Typography variant="subtitle1" component="h3">
            Posted 3 days ago
          </Typography>
          <Button variant="contained" color="primary">
            Apply
          </Button>

          <Button variant="contained" variant="outlined" color="secondary">
            Save
          </Button>
        </Grid>
        <Grid item>
          <IconButton aria-label="delete" disabled color="primary">
            <FavoriteBorderIcon />
          </IconButton>
        </Grid>
        <Grid item container alignItems="center" xs={12}>
          <Grid item xs sm={4}>
            <Typography variant="subtitle1" component="h3">
              Job
            </Typography>
          </Grid>
          <Grid item xs sm={4}>
            <Typography variant="subtitle1" component="h3">
              Company
            </Typography>
          </Grid>
          <Grid item xs sm={4}>
            <Typography variant="subtitle1" component="h3">
              Type
            </Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" xs={12}>
          <Grid item xs>
            <Chip className={classes.tag} size="small" label="Full time" />
            <Chip className={classes.tag} size="small" label="Senior" />
          </Grid>
          <Grid item>
            <Typography variant="body2" component="h3">
              3d
            </Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems="center" xs={12}>
          <Grid item xs sm={12}>
            <Typography variant="h4" component="h3">
              Company
            </Typography>
          </Grid>
          <Grid item xs sm={12}>
            <Typography variant="body2" component="h3">
              Front-end developer with focus on visual design In today’s society, digitization, data science and artificial intelligence (AI) have certainly taken off and present exciting new opportunities. However, ethical and societal concerns are still a fundamental concern. New technology has the potential to assist in empowering vulnerable people in society, but in reality, their protection is severely lagging behind. This position helps address this need. In everything we do, we combine technological possibilities with high legal, ethical and societal standards. If you get really passionate when you can work on complex, interactive data-driven user interfaces that do not only look great, but also address real societal challenges and help real people, we are looking for you!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default JobDescription
