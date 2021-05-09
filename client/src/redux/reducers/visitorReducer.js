import { VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR, VISITOR_GET_LOADING, VISITOR_GET_SUCCESS, VISITOR_GET_ERROR, VISITOR_ADD_FAVORITE_LOADING, VISITOR_ADD_FAVORITE_SUCCESS, VISITOR_ADD_FAVORITE_ERROR, VISITOR_REMOVE_FAVORITE_LOADING, VISITOR_REMOVE_FAVORITE_SUCCESS, VISITOR_REMOVE_FAVORITE_ERROR, VISITOR_ADD_SKILL_LOADING, VISITOR_ADD_SKILL_SUCCESS, VISITOR_ADD_SKILL_ERROR, VISITOR_REMOVE_SKILL_LOADING, VISITOR_REMOVE_SKILL_SUCCESS, VISITOR_REMOVE_SKILL_ERROR } from '../constants/actionTypes'

const initialState = {
  _id: null,
  favorites: [],
  skills: [],
  loading: false,
  error: '',
}

const visitorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VISITOR_GET_LOADING:
      return { ...state, loading: true }
    case VISITOR_GET_SUCCESS:
      return { ...state, ...payload }
    case VISITOR_GET_ERROR:
      return { ...state, error: payload.error || 'Visitor cannot be added', loading: false }

    case VISITOR_CREATE_LOADING:
      return { ...state, loading: true }
    case VISITOR_CREATE_SUCCESS:
      localStorage.setItem('visitor', JSON.stringify({ result: payload.data }))
      return { ...state, loading: false, _id: payload.data._id }
    case VISITOR_CREATE_ERROR:
      return { ...state, error: payload.error || 'Visitor cannot be created', loading: false }

    case VISITOR_ADD_FAVORITE_LOADING:
      return { ...state, loading: true }
    case VISITOR_ADD_FAVORITE_SUCCESS:
      const set = new Set([...state.favorites, payload])
      return { ...state, loading: false, favorites: [...set] }
    case VISITOR_ADD_FAVORITE_ERROR:
      return { ...state, error: payload.error || 'Favorite cannot be added', loading: false }

    case VISITOR_REMOVE_FAVORITE_LOADING:
      return { ...state, loading: true }
    case VISITOR_REMOVE_FAVORITE_SUCCESS:
      const removed = state.favorites.filter((item) => item !== payload)
      return { ...state, loading: false, favorites: removed }
    case VISITOR_REMOVE_FAVORITE_ERROR:
      return { ...state, error: payload.error || 'Favorite cannot be added', loading: false }

    case VISITOR_ADD_SKILL_LOADING:
      return { ...state, loading: true }
    case VISITOR_ADD_SKILL_SUCCESS:
      const setSkills = new Set([payload.skill, ...state.skills])
      return { ...state, loading: false, skills: [...setSkills] }
    case VISITOR_ADD_SKILL_ERROR:
      return { ...state, error: 'payload.error', loading: false }

    case VISITOR_REMOVE_SKILL_LOADING:
      return { ...state, loading: true }
    case VISITOR_REMOVE_SKILL_SUCCESS:
      // filter

      console.log('-----------removeskills1')
      console.log('--------+++= removeskills2', payload.skill.skill)
      const removedSkill = state.skills.filter((item) => item.skill !== payload.skill.skill)
      console.log('--------+++= removeskills', payload.skill.skill, removedSkill)
      return { ...state, loading: false, skills: [...removedSkill] }
    case VISITOR_REMOVE_SKILL_ERROR:
      return { ...state, error: 'payload.error', loading: false }

    default:
      return state
  }
}

export default visitorReducer
