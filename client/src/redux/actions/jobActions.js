import axios from 'axios'
import { JOBS_API_URI, JOB_LOADING, JOB_ERROR, JOB_SUCCESS } from '../constants/actionTypes'

export const getJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: JOB_LOADING })
    const result = await axios.get(`${JOBS_API_URI}/${id}`)
    dispatch({ type: JOB_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: JOB_ERROR, payload: error })
  }
}
