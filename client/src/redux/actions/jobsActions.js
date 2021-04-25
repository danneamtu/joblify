import axios from 'axios'
import { JOBS_API_URI, JOBS_LOADING, JOBS_ERROR, JOBS_SUCCESS } from '../constants/actionTypes'
export const getJobs = (page) => async (dispatch) => {
  try {
    dispatch({ type: JOBS_LOADING })
    const result = await axios.get(`${JOBS_API_URI}?page=${page}`)
    dispatch({ type: JOBS_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: JOBS_ERROR, payload: error })
  }
}
