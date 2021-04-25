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
    console.log('from action')
    return dispatch({ type: 'CREATE', payload: job })
  } catch (err) {
    console.log(err)
  }
}

export const patchJob = (id, updatedJob) => async (dispatch) => {
  try {
    console.log('inside actions', id, updatedJob)
    const { data } = await api.patchJob(id, updatedJob)
    dispatch({ type: 'UPDATE', payload: data })
  } catch (err) {
    console.log(err)
  }
}

export const deleteJob = (id) => async (dispatch) => {
  try {
    await api.deleteJob(id)
    dispatch({ type: 'DELETE', payload: id })
  } catch (err) {
    console.log(err)
  }
}
