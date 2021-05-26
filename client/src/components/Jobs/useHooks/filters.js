import { useLocation, useParams } from 'react-router-dom'

export const useJobsFilters = () => {
  const query = new URLSearchParams(useLocation().search)
  const filterPageStart = query.get('start')
  const filterLocation = query.get('location')
  const filterSkills = query.get('skills')
  const filterFavorites = query.get('favorites')

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

  return {
    filters: {
      pageStart: filterPageStart || 1,
      location: filterLocation,
      skills: filterSkills,
      favorites: filterFavorites,
    },
    href,
  }
}
