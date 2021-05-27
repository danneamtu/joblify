import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const useFilters = (jobId = 0) => {
  const query = new URLSearchParams(useLocation().search)

  const filterPageStart = query.get('start')
  const filterLocation = query.get('location')
  const filterSkills = query.get('skills')
  const filterFavorites = query.get('favorites')
  let currentJobId = query.get('currentJobId')

  const data = useSelector((state) => state.jobs)
  let totalJobs
  if (data.data.data) {
    if (data.data.data[0].Count.length > 0) {
      totalJobs = data.data.data[0].Count[0].total
    }
  }

  const lastJobIdFromState = useSelector((state) => state.jobs)
  if (!currentJobId) {
    if (lastJobIdFromState.data.data && totalJobs > 0) {
      const jobDetailsFromState = lastJobIdFromState.data.data[0].Jobs[0]
      currentJobId = jobDetailsFromState._id
    }
  }

  const { jobs } = useParams()
  let href
  let addParam
  !jobs ? (addParam = 'jobs/') : (addParam = '')

  if (filterLocation && filterSkills) {
    href = `${addParam}search?location=${filterLocation}&skills=${filterSkills}&`
  } else {
    filterLocation ? (href = `${addParam}search?location=${filterLocation}&`) : (href = `${addParam}search?skills=${filterSkills}&`)
  }

  if (!filterLocation && !filterSkills) {
    if (!filterFavorites) {
      href = `${addParam}search?`
    } else {
      href = `${addParam}search?favorites=show&`
    }
  }

  const paramStart = filterPageStart
  const paramLocation = filterLocation
  const paramSkills = filterSkills
  const paramFavorites = filterFavorites

  let createParams = ''
  let createStart = ''

  if (paramLocation && paramSkills) {
    createParams = `&location=${paramLocation}&skills=${paramSkills}`
  }
  if (paramLocation) {
    createParams = `&location=${paramLocation}`
  }
  if (paramSkills) {
    createParams = `&skills=${paramSkills}`
  }
  if (paramFavorites) {
    createParams = `&favorites=${paramFavorites}`
  }
  if (paramStart) {
    createStart = `&start=${paramStart}`
  }

  let theUri = `/jobs/search?currentJobId=${jobId}${createParams}${createStart}`
  let theMobileUri = `/jobs/view/search?currentJobId=${jobId}${createParams}`

  return {
    filters: {
      pageStart: filterPageStart || 1,
      location: filterLocation,
      skills: filterSkills,
      favorites: filterFavorites,
      currentJobId,
      jobUrlDesktop: theUri,
      jobUrlMobile: theMobileUri,
      totalJobs,
    },
    href,
  }
}
