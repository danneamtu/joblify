const reducer = (jobs = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...jobs, action.payload]
    case 'UPDATE':
      return jobs.map((job) => (job._id === action.payload._id ? action.payload : job))
    default:
      return jobs
  }
}
export default reducer
