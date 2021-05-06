import axios from 'axios'
import * as api from '../../api/index.js'
import { API_URI, VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR } from '../constants/actionTypes'

export const createVisitor = () => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_CREATE_LOADING })
    const result = await api.getVisitor(`${API_URI}/visitors`)
    dispatch({ type: VISITOR_CREATE_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: VISITOR_CREATE_ERROR, payload: error })
  }
}
