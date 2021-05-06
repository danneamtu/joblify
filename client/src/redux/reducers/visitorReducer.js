import { VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR } from '../constants/actionTypes'

const initialState = {
  _id: null,
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
      localStorage.setItem('visitor', JSON.stringify({ result: payload.data }))
      return { ...state, loading: false, _id: payload.data._id }
    case VISITOR_CREATE_ERROR:
      return { error: payload.error || 'Visitor cannot be added', loading: false }
    default:
      return state
  }
}

export default visitorReducer
