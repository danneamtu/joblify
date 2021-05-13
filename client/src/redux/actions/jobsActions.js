import * as api from '../../api/index.js'
import { useSelector } from 'react-redux'

import { JOBS_API_URI, JOBS_LOADING, JOBS_ERROR, JOBS_SUCCESS } from '../constants/actionTypes'
export const getJobs = (filterData) => async (dispatch) => {
  try {
    dispatch({ type: JOBS_LOADING })
    const result = await api.fetchJobs(filterData)
    // find the count
    dispatch({ type: JOBS_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: JOBS_ERROR, payload: error })
  }
}
