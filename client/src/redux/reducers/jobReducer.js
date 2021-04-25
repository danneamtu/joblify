import { JOB_LOADING, JOB_ERROR, JOB_SUCCESS } from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: {},
  error: '',
}

const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case JOB_LOADING:
      return { ...state, loading: true }
    case JOB_SUCCESS:
      return { ...state, data: payload, loading: false }
    case JOB_ERROR:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}
export default jobReducer
