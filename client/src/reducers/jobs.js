const reducer = (jobs = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...jobs, action.payload]
    default:
      return jobs
  }
}
export default reducer
