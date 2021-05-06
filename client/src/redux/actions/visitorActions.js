import axios from 'axios'
import { API_URI, VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR } from '../constants/actionTypes'

export const createVisitor = (page) => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_CREATE_LOADING })
    const result = await axios.get(`${API_URI}/visitor`)
    dispatch({ type: VISITOR_CREATE_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: VISITOR_CREATE_ERROR, payload: error })
  }
}
