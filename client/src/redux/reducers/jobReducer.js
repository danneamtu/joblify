import { JOB_LOADING, JOB_ERROR, JOB_SUCCESS } from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: {},
  error: '',
  count: 120,
}

const jobReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case JOB_LOADING:
      return { ...state, loading: true, error: '' }
    case JOB_SUCCESS:
      return { ...state, data: { ...state.data, [payload.data._id]: payload }, loading: false, error: '' }
    case JOB_ERROR:
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}
export default jobReducer
