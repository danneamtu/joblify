import mongoose from 'mongoose'
let schema = new mongoose.Schema({
  skill: String,
  total: Number,
})

const Skills = mongoose.model('skills', schema)
export default Skills
