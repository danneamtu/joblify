import axios from 'axios'

const url = 'http://127.0.0.1:5000/jobs'

export const fetchJobs = () => axios.get(url)
export const createJob = (job) => axios.post(url, job)
export const patchJob = (id, updatedJob) => axios.patch(`${url}/${id}`, updatedJob)
