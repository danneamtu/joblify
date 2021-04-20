import axios from 'axios'

const url = 'http://127.0.0.1:5000/jobs'

export const fetchJobs = () => axios.get(url)
export const createJob = (job) => axios.post(url, job)

console.log(
  createJob({ title: 'this is title', description: 'descr' })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
)
