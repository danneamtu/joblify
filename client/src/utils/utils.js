import moment from 'moment'

export const timeAgo = (timestamp) => {
  timestamp = moment(timestamp).fromNow()
  const split = timestamp.split(' ')
  const time = timestamp.split(' ')[0].replace('an', 1).replace('a', 1)
  const name = split.slice(1, timestamp.split(' ').length).toString()

  switch (name) {
    case 'week,ago':
      return `${time} w`
    case 'day,ago':
      return `${time} d`
    case 'days,ago':
      return `${time} d`
    case 'hour,ago':
      return `${time} h`
    case 'hours,ago':
      return `${time} h`
    case 'minutes,ago':
      return `${time} m`
    case 'seconds,ago':
      return `${time} s`
    default:
      return name
  }
}

export const replaceSpaceWithDash = (string) => {
  return string.replace(/\s+/g, '-')
}
export const replaceDashWithSpace = (string) => {
  return string.replace(/-/g, ' ')
}
