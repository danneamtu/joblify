import * as api from '../api'
export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchJobs()
    console.log(data)
    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const createJob = (newJob) => async (dispatch) => {
  try {
    const job = await api.createJob(newJob)
    return dispatch({ type: 'CREATE', payload: job })
  } catch (err) {
    console.log(err)
  }
}
