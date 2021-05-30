import axios from 'axios'
const baseURL = 'http://localhost:3002/'
// const baseURL = 'http://joblify2.herokuapp.com/'
const API = axios.create({ baseURL })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
  }
  return req
})

export const fetchJobs = (filterData, favorites) =>
  API.get(`/api/jobs`, {
    params: { filterData, favorites },
})

export const createJob = (job) => API.post(`/jobs`, job)
export const patchJob = (id, updatedJob) => API.patch(`/${id}`, updatedJob)
export const deleteJob = (id) => API.delete(`/jobs/${id}`)

export const signin = (formData) => API.post(`/api/users/signin`, formData)
export const signup = (formData) => API.post(`/api/users/signup`, formData)

export const createVisitor = () => API.post(`/api/visitors`)
export const getVisitor = (id) => API.get(`/api/visitors/${id}`)
export const postVisitor = (id) => API.post(`/api/visitors/${id}`)

export const addVisitorSkill = (skill) => API.post(`/api/skills`, skill)
export const removeVisitorSkill = (skill) => API.post(`/api/skills/remove`, skill)

export const getAllSkills = () => API.get(`/api/skills/all`)
export const getSkills = (filter) => API.get(`/api/skills?${filter}`)
export const insertSkill = (skill) => API.post(`/api/skills/insert/${skill}`)

export const addFavorite = (id, visitorId) => API.post(`/api/favorites?id=${id}&vid=${visitorId}`)
export const removeFavorite = (id, visitorId) => API.delete(`/api/favorites?id=${id}&vid=${visitorId}`)

export const getLocations = () => API.get(`/api/locations`)
