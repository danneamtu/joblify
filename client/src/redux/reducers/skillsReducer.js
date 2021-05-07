import { ADD_SKILL_LOADING, ADD_SKILL_SUCCESS, ADD_SKILL_ERROR } from '../constants/actionTypes'

const initialState = []

const skillsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SKILL_LOADING:
      return { ...state, loading: true }
    case ADD_SKILL_SUCCESS:
      return { ...state, ...payload }
    case ADD_SKILL_ERROR:
      return { error: payload.error || 'Visitor cannot be added', loading: false }
    default:
      return state
  }
}

export default skillsReducer
