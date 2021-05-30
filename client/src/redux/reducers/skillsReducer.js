import { ADD_SKILL_LOADING, ADD_SKILL_SUCCESS, ADD_SKILL_ERROR, GET_SKILLS_LOADING, GET_SKILLS_ERROR, GET_SKILLS_SUCCESS } from '../constants/actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: '',
}

const skillsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SKILL_LOADING:
      return { ...state, loading: true }
    case ADD_SKILL_SUCCESS:
      return { ...state, ...payload, loading: false }
    case ADD_SKILL_ERROR:
      return { error: payload.error || 'Skill cannot be added', loading: false }

    case GET_SKILLS_LOADING:
      return { ...state, loading: true }
    case GET_SKILLS_SUCCESS:
      return { ...state, data: payload, loading: false }
    case GET_SKILLS_ERROR:
      return { error: payload.error || 'No skills', loading: false }
    default:
      return state
  }
}

export default skillsReducer
