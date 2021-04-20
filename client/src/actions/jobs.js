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

export const createJob = (jobb) => async (dispatch) => {
  try {
    const job = await api.createJob(jobb)
    console.log('create job in action', job)
    console.log(job)
    dispatch({ type: 'CREATE', payload: job })
  } catch (err) {
    console.log(err)
  }
}
