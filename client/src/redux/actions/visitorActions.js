import * as api from '../../api/index.js'
import { API_URI, VISITOR_CREATE_LOADING, VISITOR_CREATE_SUCCESS, VISITOR_CREATE_ERROR, VISITOR_GET_LOADING, VISITOR_GET_SUCCESS, VISITOR_GET_ERROR, VISITOR_ADD_FAVORITE_LOADING, VISITOR_ADD_FAVORITE_ERROR, VISITOR_ADD_FAVORITE_SUCCESS, VISITOR_REMOVE_FAVORITE_LOADING, VISITOR_REMOVE_FAVORITE_SUCCESS, VISITOR_REMOVE_FAVORITE_ERROR, VISITOR_ADD_SKILL_LOADING, VISITOR_ADD_SKILL_SUCCESS, VISITOR_ADD_SKILL_ERROR, VISITOR_REMOVE_SKILL_LOADING, VISITOR_REMOVE_SKILL_SUCCESS, VISITOR_REMOVE_SKILL_ERROR } from '../constants/actionTypes'

export const getVisitor = (id) => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_GET_LOADING })
    const { data } = await api.getVisitor(id)
    dispatch({ type: VISITOR_GET_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: VISITOR_GET_ERROR, payload: error })
  }
}

export const createVisitor = () => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_CREATE_LOADING })
    const result = await api.createVisitor(`${API_URI}/visitors`)
    dispatch({ type: VISITOR_CREATE_SUCCESS, payload: result })
  } catch (error) {
    dispatch({ type: VISITOR_CREATE_ERROR, payload: error })
  }
}

export const addFavorite = (id, visitorId) => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_ADD_FAVORITE_LOADING })
    const result = await api.addFavorite(id, visitorId)
    dispatch({ type: VISITOR_ADD_FAVORITE_SUCCESS, payload: id })
  } catch (error) {
    dispatch({ type: VISITOR_ADD_FAVORITE_ERROR, payload: error })
  }
}

export const removeFavorite = (id, visitorId) => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_REMOVE_FAVORITE_LOADING })
    const result = await api.removeFavorite(id, visitorId)
    dispatch({ type: VISITOR_REMOVE_FAVORITE_SUCCESS, payload: id })
  } catch (error) {
    dispatch({ type: VISITOR_REMOVE_FAVORITE_ERROR, payload: error })
  }
}

export const addVisitorSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_ADD_SKILL_LOADING })
    await api.addVisitorSkill(skill)
    dispatch({ type: VISITOR_ADD_SKILL_SUCCESS, payload: skill })
  } catch (error) {
    dispatch({ type: VISITOR_ADD_SKILL_ERROR, payload: error })
  }
}

export const removeVisitorSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: VISITOR_REMOVE_SKILL_LOADING })
    await api.removeVisitorSkill(skill)
    dispatch({ type: VISITOR_REMOVE_SKILL_SUCCESS, payload: skill })
  } catch (error) {
    dispatch({ type: VISITOR_REMOVE_SKILL_ERROR, payload: error })
  }
}
