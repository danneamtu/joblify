import axios from 'axios'

const API = axios.create({ baseURL: 'http://127.0.0.1:5003' })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
  }
  return req
})

export const fetchJobs = () => API.get(`/jobs`)
export const createJob = (job) => API.post(`/jobs`, job)
export const patchJob = (id, updatedJob) => API.patch(`/${id}`, updatedJob)
export const deleteJob = (id) => API.delete(`/jobs/${id}`)

export const signin = (formData) => API.post(`/api/users/signin`, formData)
export const signup = (formData) => API.post(`/api/users/signup`, formData)

export const createVisitor = () => API.post(`/api/visitors`)
export const getVisitor = (id) => API.get(`/api/visitors/${id}`)
export const postVisitor = (id) => API.post(`/api/visitors/${id}`)
