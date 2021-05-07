import * as api from '../../api/index.js'

import { API_URI, ADD_SKILL_LOADING, ADD_SKILL_ERROR, ADD_SKILL_SUCCESS } from '../constants/actionTypes'
export const addSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: ADD_SKILL_LOADING })
    await api.addSkill(skill)
    dispatch({ type: ADD_SKILL_SUCCESS, payload: skill })
  } catch (error) {
    dispatch({ type: ADD_SKILL_ERROR, payload: error })
  }
}
