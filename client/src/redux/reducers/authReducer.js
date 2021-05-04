import { GOOGLE_LOGOUT_LOADING, GOOGLE_LOGOUT_ERROR, GOOGLE_LOGOUT_SUCCESS, GOOGLE_AUTH_LOADING, GOOGLE_AUTH_ERROR, GOOGLE_AUTH_SUCCESS } from '../constants/actionTypes'

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
    default:
      return state
  }
}
export default authReducer
