import * as api from '../../api/index.js'

import { API_URI, ADD_SKILL_LOADING, ADD_SKILL_ERROR, ADD_SKILL_SUCCESS, GET_ALL_SKILLS_LOADING, GET_ALL_SKILLS_ERROR, GET_ALL_SKILLS_SUCCESS } from '../constants/actionTypes'
export const addSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: ADD_SKILL_LOADING })
    await api.addSkill(skill)
    dispatch({ type: ADD_SKILL_SUCCESS, payload: skill })
  } catch (error) {
    dispatch({ type: ADD_SKILL_ERROR, payload: error })
  }
}

export const getAllSkills = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_SKILLS_LOADING })
    const result = await api.getAllSkills()
    dispatch({ type: GET_ALL_SKILLS_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: GET_ALL_SKILLS_ERROR, payload: error })
  }
}
