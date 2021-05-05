import axios from 'axios'
import * as api from '../../api/index.js'
import { GOOGLE_LOGOUT_LOADING, GOOGLE_LOGOUT_ERROR, GOOGLE_LOGOUT_SUCCESS, GOOGLE_AUTH_LOADING, GOOGLE_AUTH_ERROR, GOOGLE_AUTH_SUCCESS, USER_SIGNUP_LOADING, USER_SIGNUP_ERROR, USER_SIGNUP_SUCCESS, USER_SIGNIN_LOADING, USER_SIGNIN_ERROR, USER_SIGNIN_SUCCESS } from '../constants/actionTypes'

export const googleAuth = (response, history) => async (dispatch) => {
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

export const signin = (formData, history) => async (dispatch) => {
  const { data } = await api.signin(formData)
  console.log('dataa-----------------', data)
  try {
    dispatch({ type: USER_SIGNIN_LOADING })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    console.log('signin user action, get db data', data)
    history.push(`/users/${data.result._id}`)
  } catch (error) {
    dispatch({ type: USER_SIGNIN_ERROR, payload: error })
  }
}

export const signup = (formData, history) => async (dispatch) => {
  console.log('signup in from actions', formData)
  try {
    console.log('try', formData)
    const { data } = await api.signup(formData)

    console.log('try data', data)
    dispatch({ type: USER_SIGNUP_LOADING })
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data })
    console.log('signin user action, get db data', data)
    history.push(`/users/${data.result._id}`)
  } catch (error) {
    dispatch({ type: USER_SIGNUP_ERROR, payload: error })
    console.log('catch', error)
  }
}
