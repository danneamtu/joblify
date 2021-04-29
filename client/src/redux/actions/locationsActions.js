import axios from 'axios'
import { LOCATION_API_URI, LOCATION_LOADING, LOCATION_ERROR, LOCATION_SUCCESS } from '../constants/actionTypes'
export const getLocations = (page) => async (dispatch) => {
  try {
    dispatch({ type: LOCATION_LOADING })
    const result = await axios.get(`${LOCATION_API_URI}`)
    dispatch({ type: LOCATION_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: LOCATION_ERROR, payload: error })
  }
}
