import { VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR } from '../constants/actionTypes'

const initialState = {
  visitorId: null,
  favorites: [],
  skills: [],
  loading: false,
  error: '',
}

const visitorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VISITOR_CREATE_LOADING:
      return { ...state, loading: true }
    case VISITOR_CREATE_SUCCESS:
      localStorage.setItem('visitor', JSON.stringify({ result: payload.result, token: payload.token }))
      return { ...state, loading: false, visitorId: 22 }
    case VISITOR_CREATE_ERROR:
      return { ...state, error: 'error' }
    default:
      return state
  }
}

export default visitorReducer
