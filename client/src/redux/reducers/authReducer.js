import { GOOGLE_LOGOUT_LOADING, GOOGLE_LOGOUT_ERROR, GOOGLE_LOGOUT_SUCCESS, GOOGLE_AUTH_LOADING, GOOGLE_AUTH_ERROR, GOOGLE_AUTH_SUCCESS, USER_SIGNUP_LOADING, USER_SIGNUP_ERROR, USER_SIGNUP_SUCCESS, USER_SIGNIN_LOADING, USER_SIGNIN_ERROR, USER_SIGNIN_SUCCESS } from '../constants/actionTypes'

const userState = {
  result: '',
  token: '',
  loading: false,
  error: '',
}

const authReducer = (state = userState, { type, payload }) => {
  switch (type) {
    
    case GOOGLE_AUTH_LOADING:
      return { loading: true }
    case GOOGLE_AUTH_SUCCESS:
      localStorage.setItem('user', JSON.stringify({ result: payload.result, token: payload.token }))
      return { ...state, result: payload.result, token: payload.token, loading: false }
    case GOOGLE_AUTH_ERROR:
      return { error: payload.error || 'User cannot be added', loading: false }

    case GOOGLE_LOGOUT_LOADING:
      return { loading: true }
    case GOOGLE_LOGOUT_SUCCESS:
      localStorage.removeItem('user')
      return { ...state, result: null, token: null, loading: false }
    case GOOGLE_LOGOUT_ERROR:
      return { error: payload.error || 'User cannot be added', loading: false }

    case USER_SIGNUP_LOADING:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      console.log('inside signup reducer', payload)
      localStorage.setItem('user', JSON.stringify({ result: payload.result, token: payload.token }))
      return { ...state, result: payload, token: 'this is token', loading: false }
    case USER_SIGNUP_ERROR:
      return { error: payload.error || 'User cannot be added', loading: false }

    case USER_SIGNIN_LOADING:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify({ result: payload.result, token: payload.token }))
      return { ...state, result: null, token: null, loading: false }
    case USER_SIGNIN_ERROR:
      return { error: payload.error || 'User cannot be added', loading: false }

    default:
      return state
  }
}
export default authReducer
