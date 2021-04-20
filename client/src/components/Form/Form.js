import { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createJob, patchJob } from '../../actions/jobs'

const Form = ({ currentId, setCurrentId }) => {
  const [jobData, setJobData] = useState({ title: '', description: '', location: '' })
  const dispatch = useDispatch()
  const jobToUpdate = useSelector((state) => state.jobs.find((job) => job._id === currentId))
  console.log('jobToUpdate', jobToUpdate)

  useEffect(() => {
    if (jobToUpdate) {
      setJobData(jobToUpdate)
    }
  }, [jobToUpdate])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('jobd', jobData)
    console.log('curentd', currentId)
    if (currentId) {
      console.log('update job', currentId, jobData)
      dispatch(patchJob(currentId, jobData))
    } else {
      console.log('create job')
      dispatch(createJob(jobData))
    }
  }
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <h1>Form</h1>
      curent id {currentId}
      <TextField name="title" label="title" fullWidth value={jobData.title} onChange={(e) => setJobData({ ...jobData, title: e.target.value })} />
      <TextField name="description" label="description" fullWidth value={jobData.description} onChange={(e) => setJobData({ ...jobData, description: e.target.value })} />
      <TextField name="location" label="location" fullWidth value={jobData.location} onChange={(e) => setJobData({ ...jobData, location: e.target.value })} />
      <button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </button>
    </form>
  )
}

export default Form
