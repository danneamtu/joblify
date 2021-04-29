import { LOCATION_LOADING, LOCATION_ERROR, LOCATION_SUCCESS } from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: [],
  error: '',
}
const locationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOCATION_LOADING:
      return { ...state, loading: true }
    case LOCATION_SUCCESS:
      return { ...state, data: payload, loading: false }
    case LOCATION_ERROR:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}

export default locationsReducer
