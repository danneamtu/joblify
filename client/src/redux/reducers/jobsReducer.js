import { JOBS_LOADING, JOBS_ERROR, JOBS_SUCCESS } from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: [],
  error: '',
  count: 190,
}
const jobsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case JOBS_LOADING:
      return { ...state, loading: true }
    case JOBS_SUCCESS:
      return { ...state, data: payload, loading: false }
    case JOBS_ERROR:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}

export default jobsReducer
