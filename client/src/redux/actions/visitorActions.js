import axios from 'axios'
import * as api from '../../api/index.js'
import { API_URI, VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR, VISITOR_GET_LOADING, VISITOR_GET_SUCCESS, VISITOR_GET_ERROR } from '../constants/actionTypes'

export const getVisitor = (id) => async (dispatch) => {
  console.log('the id inside actions', id)
  try {
    dispatch({ type: VISITOR_GET_LOADING })
    console.log('the id inside actions try', id)
    const { data } = await api.getVisitor(id)
    dispatch({ type: VISITOR_GET_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: VISITOR_GET_ERROR, payload: error })
  }
}

export const createVisitor = () => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_CREATE_LOADING })
    const result = await api.createVisitor(`${API_URI}/visitors`)
    dispatch({ type: VISITOR_CREATE_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: VISITOR_CREATE_ERROR, payload: error })
  }
}
