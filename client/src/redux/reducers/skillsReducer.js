import { ADD_SKILL_LOADING, ADD_SKILL_SUCCESS, ADD_SKILL_ERROR, GET_ALL_SKILLS_LOADING, GET_ALL_SKILLS_ERROR, GET_ALL_SKILLS_SUCCESS } from '../constants/actionTypes'

const initialState = []

const skillsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SKILL_LOADING:
      return { ...state, loading: true }
    case ADD_SKILL_SUCCESS:
      return { ...state, ...payload }
    case ADD_SKILL_ERROR:
      return { error: payload.error || 'Visitor cannot be added', loading: false }

    case GET_ALL_SKILLS_LOADING:
      return { ...state, loading: true }
    case GET_ALL_SKILLS_SUCCESS:
      return { ...payload }
    case GET_ALL_SKILLS_ERROR:
      return { error: payload.error || 'No skills', loading: false }

    default:
      return state
  }
}

export default skillsReducer
