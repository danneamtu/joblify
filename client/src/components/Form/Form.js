import { useState } from 'react'
import { TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createJob } from '../../actions/jobs'

const Form = () => {
  const [jobData, setJobData] = useState({ title: '', description: '', location: '', timestamp: '' })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('jobd', jobData)
    dispatch(createJob(jobData))
  }

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <h1>Form</h1>
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
