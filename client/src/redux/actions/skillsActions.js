import * as api from '../../api/index.js'
import { useSelector } from 'react-redux'
import { API_URI, ADD_SKILL_LOADING, ADD_SKILL_ERROR, ADD_SKILL_SUCCESS, GET_SKILLS_LOADING, GET_SKILLS_ERROR, GET_SKILLS_SUCCESS } from '../constants/actionTypes'

export const getSkills = (filterData) => async (dispatch) => {
  try {
    dispatch({ type: GET_SKILLS_LOADING })
    const result = await api.getSkills(filterData)
    console.log('redux action result')
    dispatch({ type: GET_SKILLS_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: GET_SKILLS_ERROR, payload: error })
  }
}
