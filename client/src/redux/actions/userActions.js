import axios from 'axios'
import { GOOGLE_LOGOUT_LOADING, GOOGLE_LOGOUT_ERROR, GOOGLE_LOGOUT_SUCCESS, GOOGLE_AUTH_LOADING, GOOGLE_AUTH_ERROR, GOOGLE_AUTH_SUCCESS } from '../constants/actionTypes'

export const googleAuth = (response) => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_AUTH_LOADING })
    dispatch({ type: GOOGLE_AUTH_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: GOOGLE_AUTH_ERROR, payload: error })
  }
}

export const googleLogout = () => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_LOGOUT_LOADING })
    dispatch({ type: GOOGLE_LOGOUT_SUCCESS, payload: '' })
  } catch (error) {
    dispatch({ type: GOOGLE_LOGOUT_ERROR, payload: error })
  }
}
